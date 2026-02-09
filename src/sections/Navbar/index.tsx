"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { categories } from "@/data/categories";

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
  const observerRef = useRef<IntersectionObserver | undefined>(undefined);
  const scrollAnimationRef = useRef<number | null>(null);
  const targetSectionRef = useRef<string | null>(null);

  /**
   * Função de easing para suavizar o scroll (mesma do NavButton)
   */
  const easeInOutQuad = (t: number): number =>
    t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

  /**
   * Atualiza a seção ativa baseado na posição atual do scroll
   * Para criar efeito visual de transição entre seções
   */
  const updateActiveSectionDuringScroll = useCallback(() => {
    // Se temos um alvo definido, não atualiza durante o scroll programático
    if (targetSectionRef.current) return;

    const scrollY = window.scrollY + window.innerHeight / 3;

    for (const category of categories) {
      const element = document.getElementById(category.id);
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementTop = window.scrollY + rect.top;
        const elementBottom = elementTop + element.offsetHeight;

        if (scrollY >= elementTop && scrollY < elementBottom) {
          setActive(category.name);
          return;
        }
      }
    }

    // Verifica se está no topo
    if (window.scrollY < 100) {
      setActive("Início");
    }
  }, []);

  /**
   * Scroll suave customizado para uma seção específica
   */
  const scrollToSection = useCallback(
    (categoryName: string) => {
      const category = categories.find((cat) => cat.name === categoryName);
      if (!category) return;

      const element = document.getElementById(category.id);
      if (!element) return;

      // Cancela qualquer animação de scroll anterior
      if (scrollAnimationRef.current) {
        window.cancelAnimationFrame(scrollAnimationRef.current);
      }

      isScrolling.current = true;
      setIsOpen(false);
      targetSectionRef.current = category.name;

      const startY = window.scrollY;
      // Usa getBoundingClientRect para cálculo preciso
      const rect = element.getBoundingClientRect();
      const targetY = window.scrollY + rect.top - 80; // 80px de offset para header
      const diff = targetY - startY;
      let start: number | null = null;

      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const time = Math.min(1, (timestamp - start) / 1200);
        const eased = easeInOutQuad(time);

        // Scroll vai EXATAMENTE para o destino calculado
        const currentY = startY + diff * eased;
        window.scrollTo(0, currentY);

        // Atualiza indicador visual (passa pelas seções)
        updateActiveSectionDuringScroll();

        if (time < 1) {
          scrollAnimationRef.current = window.requestAnimationFrame(step);
        } else {
          // Garante seção FINAL correta
          setActive(category.name);
          window.scrollTo(0, targetY); // Garante posição exata
          targetSectionRef.current = null;
          isScrolling.current = false;
          scrollAnimationRef.current = null;
        }
      };

      scrollAnimationRef.current = window.requestAnimationFrame(step);
    },
    [updateActiveSectionDuringScroll],
  );

  /**
   * Scroll suave para o topo da página
   */
  const scrollToTop = useCallback(() => {
    // Cancela qualquer animação anterior
    if (scrollAnimationRef.current) {
      window.cancelAnimationFrame(scrollAnimationRef.current);
    }

    isScrolling.current = true;
    setIsOpen(false);
    targetSectionRef.current = "Início";

    const startY = window.scrollY;
    const targetY = 0; // Topo exato
    const diff = targetY - startY;
    let start: number | null = null;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const time = Math.min(1, (timestamp - start) / 900);
      const eased = easeInOutQuad(time);

      // Scroll vai EXATAMENTE para o topo
      const currentY = startY + diff * eased;
      window.scrollTo(0, currentY);

      // Atualiza indicador visual (passa pelas seções)
      updateActiveSectionDuringScroll();

      if (time < 1) {
        scrollAnimationRef.current = window.requestAnimationFrame(step);
      } else {
        // Garante topo exato
        setActive("Início");
        window.scrollTo(0, 0);
        targetSectionRef.current = null;
        isScrolling.current = false;
        scrollAnimationRef.current = null;
      }
    };

    scrollAnimationRef.current = window.requestAnimationFrame(step);
  }, [updateActiveSectionDuringScroll]);

  // Observer (Scroll Spy) - Detecta quando o usuário faz scroll manual
  useEffect(() => {
    let updateTimeout: NodeJS.Timeout;
    const visibleMap = new Map<string, IntersectionObserverEntry>();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (isScrolling.current) return;

        entries.forEach((entry) => {
          visibleMap.set(entry.target.id, entry);
        });

        const visibleEntries = Array.from(visibleMap.values()).filter(
          (entry) => entry.isIntersecting && entry.intersectionRatio > 0,
        );

        if (visibleEntries.length === 0) return;

        const mostVisible = visibleEntries.reduce((prev, current) => {
          const prevHeight = prev.intersectionRect.height;
          const currentHeight = current.intersectionRect.height;

          if (Math.abs(prevHeight - currentHeight) < 10) {
            return prev.boundingClientRect.top < current.boundingClientRect.top
              ? prev
              : current;
          }
          return currentHeight > prevHeight ? current : prev;
        });

        clearTimeout(updateTimeout);
        updateTimeout = setTimeout(() => {
          const category = categories.find(
            (cat) => cat.id === mostVisible.target.id,
          );

          if (category && category.name !== active) {
            setActive(category.name);
          }
        }, 150);
      },
      {
        rootMargin: "-10% 0px -40% 0px",
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      },
    );

    categories.forEach((category) => {
      const element = document.getElementById(category.id);
      if (element) observerRef.current?.observe(element);
    });

    return () => {
      observerRef.current?.disconnect();
      clearTimeout(updateTimeout);
      if (scrollAnimationRef.current) {
        window.cancelAnimationFrame(scrollAnimationRef.current);
      }
    };
  }, [active]);

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
        <div className="hidden md:flex items-center justify-center">
          <div className="relative flex items-center gap-1 bg-[#1e1e1e]/80 backdrop-blur-xl px-2 py-2 rounded-2xl border border-white/10 shadow-2xl shadow-black/30">
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
                  <span className="text-[#00ff9d]">dev</span>
                  <span className="text-white/90 group-hover:text-white transition-colors">
                    Gusta
                  </span>
                </span>
              </div>
            </motion.button>

            {/* Separator */}
            <div className="w-px h-6 bg-white/10" />

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

                  {/* Text */}
                  <span
                    className={`relative z-10 transition-colors duration-300 ${
                      active === category.name
                        ? "text-[#00ff9d]"
                        : hoveredItem === category.name
                          ? "text-white"
                          : "text-white/60"
                    }`}
                  >
                    {category.name}
                  </span>

                  {/* Active indicator dot */}
                  {active === category.name && (
                    <motion.div
                      className="absolute -bottom-1 left-1/2 w-1 h-1 rounded-full bg-[#00ff9d]"
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
        </div>

        {/* Mobile Navbar */}
        <div className="md:hidden flex items-center justify-between">
          {/* Logo Mobile */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1e1e1e]/80 backdrop-blur-xl border border-white/10"
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-2 h-2 rounded-full bg-[#00ff9d] animate-pulse" />
            <span className="font-bold text-sm tracking-tight">
              <span className="text-[#00ff9d]">dev</span>
              <span className="text-white/90">Gusta</span>
            </span>
          </motion.button>

          {/* Menu Toggle */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="relative p-3 rounded-xl bg-[#1e1e1e]/80 backdrop-blur-xl border border-white/10 text-white/70 hover:text-[#00ff9d] hover:border-[#00ff9d]/20 transition-all duration-500"
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden mt-3 overflow-hidden rounded-2xl bg-[#1e1e1e]/95 backdrop-blur-xl border border-white/10"
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
                        ? "bg-linear-to-r from-[#00ff9d]/15 to-[#00ff9d]/5 border border-[#00ff9d]/20 text-[#00ff9d]"
                        : "text-white/70 hover:text-white hover:bg-white/5 border border-transparent"
                    }`}
                    variants={mobileItemVariants}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{category.name}</span>
                      {active === category.name && (
                        <motion.div
                          className="w-1.5 h-1.5 rounded-full bg-[#00ff9d]"
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
