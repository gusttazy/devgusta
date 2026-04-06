"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { Menu, X as XIcon } from "lucide-react";
import { ThemeToggle } from "@/core/components/ThemeToggle";
import { m as motion, AnimatePresence  } from "framer-motion";
import { categories } from "@/core/data/categories";

// Variantes de animação - Estilo Framer moderno (suavizado)
const navbarVariants = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 25,
      mass: 1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const mobileMenuVariants = {
  hidden: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.08,
    },
  },
};

const mobileItemVariants = {
  hidden: { opacity: 0, x: -20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default React.memo(function Navbar() {
  const [active, setActive] = useState("Início");
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const isScrolling = useRef<boolean>(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  /**
   * Scroll suave customizado para uma seção específica via Lenis
   */
  const scrollToSection = useCallback((categoryName: string) => {
    const category = categories.find((cat) => cat.name === categoryName);
    if (!category || isScrolling.current) return;

    isScrolling.current = true;
    setIsOpen(false);
    setActive(category.name);
    
    // Clear any pending timeout
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.scrollTo(`#${category.id}`, { 
        offset: -80,
        onComplete: () => {
          scrollTimeoutRef.current = setTimeout(() => { isScrolling.current = false; }, 50);
        }
      });
    } else {
      document.getElementById(category.id)?.scrollIntoView({ behavior: 'smooth' });
      scrollTimeoutRef.current = setTimeout(() => { isScrolling.current = false; }, 800);
    }
  }, []);

  /**
   * Scroll suave para o topo da página
   */
  const scrollToTop = useCallback(() => {
    if (isScrolling.current) return;
    
    isScrolling.current = true;
    setIsOpen(false);
    setActive("Início");

    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.scrollTo(0, { 
        onComplete: () => {
          scrollTimeoutRef.current = setTimeout(() => { isScrolling.current = false; }, 50);
        }
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      scrollTimeoutRef.current = setTimeout(() => { isScrolling.current = false; }, 800);
    }
  }, []);

  // Observer (Scroll Spy) - Meu "espião" pra descobrir em que parte do site o usuário tá lendo
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Se eu cliquei no menu pra ir pra uma seção, ignoro o espião no caminho pra evitar efeito "pisca-pisca" no menu
        if (isScrolling.current) return;

        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length === 0) return;

        // As vezes mais de uma seção cruza o raio de visão. 
        // Uso esse reduce pra pegar a que tem a maior porcentagem preenchendo a tela do celular/monitor!
        const mostVisible = visibleEntries.reduce((prev, current) => 
          current.intersectionRatio > prev.intersectionRatio ? current : prev
        );

        const category = categories.find((cat) => cat.id === mostVisible.target.id);
        if (category) {
          setActive(category.name);
        }
      },
      {
        // Esse rootMargin corta o rodapé e o topo da ativação pra ficar milimétricamente no meio da tela
        rootMargin: "-20% 0px -40% 0px", 
        threshold: [0.1, 0.3, 0.5, 0.7, 0.9],
      }
    );

    categories.forEach((category) => {
      const element = document.getElementById(category.id);
      if (element) observer.observe(element);
    });

    return () => {
      // Limpar lixo do escopo se o botão for desmontado por frescura do React
      observer.disconnect();
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  // Fecha menu ao clicar fora
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("nav")) setIsOpen(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  // Bloqueia scroll no mobile
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 py-3 sm:py-4"
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <nav className="container mx-auto max-w-7xl px-4">
        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center justify-between mx-auto max-w-fit gap-2">
          <div className="relative flex items-center gap-1 bg-surface/80 backdrop-blur-xl px-2 py-2 rounded-2xl border border-border shadow-2xl shadow-black/30">
            {/* Logo */}
            <motion.button
              onClick={scrollToTop}
              className="group relative flex items-center gap-2 px-4 py-2.5 rounded-xl overflow-hidden transition-all duration-500"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              custom={0}
              variants={itemVariants}
            >
              <div className="absolute inset-0 bg-linear-to-r from-[#00ff9d]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00ff9d] animate-pulse" />
                <span className="font-bold text-sm tracking-tight">
                  <span className="text-brand">dev</span>
                  <span className="text-text-main group-hover:text-brand transition-colors">
                    Gusta
                  </span>
                </span>
              </div>
            </motion.button>

            {/* Separator */}
            <div className="w-px h-6 bg-border" />

            {/* Navigation Items */}
            <div className="flex items-center gap-1">
              {categories.map((category, index) => (
                <motion.button
                  key={category.name}
                  onClick={() => scrollToSection(category.name)}
                  onMouseEnter={() => setHoveredItem(category.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="relative px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  custom={index + 1}
                  variants={itemVariants}
                >
                  {/* Active/Hover background */}
                  <AnimatePresence>
                    {(active === category.name ||
                      hoveredItem === category.name) && (
                      <motion.div
                        className="absolute inset-0 rounded-xl"
                        layoutId={
                          active === category.name ? "activeTab" : "hoverTab"
                        }
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 35,
                        }}
                        style={{
                          background:
                            active === category.name
                              ? "linear-gradient(135deg, rgba(0, 255, 157, 0.15) 0%, rgba(0, 255, 157, 0.05) 100%)"
                              : "rgba(255, 255, 255, 0.03)",
                          border:
                            active === category.name
                              ? "1px solid rgba(0, 255, 157, 0.2)"
                              : "1px solid rgba(255, 255, 255, 0.05)",
                        }}
                      />
                    )}
                  </AnimatePresence>

                  <span
                    className={`relative z-10 transition-colors duration-300 ${
                      active === category.name
                        ? "text-brand"
                        : hoveredItem === category.name
                          ? "text-text-main"
                          : "text-text-muted"
                    }`}
                  >
                    {category.name}
                  </span>

                  {/* Active indicator dot */}
                  {active === category.name && (
                    <motion.div
                      className="absolute -bottom-1 left-1/2 w-1 h-1 rounded-full bg-brand"
                      layoutId="activeDot"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 35,
                      }}
                      style={{ x: "-50%" }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
          
          <ThemeToggle />
        </div>

        {/* Mobile Navbar */}
        <div className="md:hidden flex items-center justify-between">
          {/* Logo Mobile */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface/80 backdrop-blur-xl border border-border"
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-2 h-2 rounded-full bg-brand animate-pulse" />
            <span className="font-bold text-sm tracking-tight">
              <span className="text-brand">dev</span>
              <span className="text-text-main">Gusta</span>
            </span>
          </motion.button>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            
            {/* Menu Toggle */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-3 rounded-xl bg-surface/80 backdrop-blur-xl border border-border text-text-muted hover:text-brand hover:border-brand/40 transition-all duration-500"
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              {isOpen ? <XIcon size={18} /> : <Menu size={18} />}
            </motion.div>
          </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden mt-3 overflow-hidden rounded-2xl bg-surface/95 backdrop-blur-xl border border-border"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="p-3 space-y-1">
                {categories.map((category) => (
                  <motion.button
                    key={category.name}
                    onClick={() => scrollToSection(category.name)}
                    className={`w-full px-4 py-3 text-left rounded-xl transition-all duration-500 ${
                      active === category.name
                        ? "bg-glow border border-brand/20 text-brand"
                        : "text-text-muted hover:text-text-main hover:bg-surface border border-transparent"
                    }`}
                    variants={mobileItemVariants}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{category.name}</span>
                      {active === category.name && (
                        <motion.div
                          className="w-1.5 h-1.5 rounded-full bg-brand"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 35,
                          }}
                        />
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
});
