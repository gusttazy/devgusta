"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { categories } from "@/data/categories";

export default React.memo(function Navbar() {
  const [active, setActive] = useState("Início");
  const [isOpen, setIsOpen] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const [isScrolled, setIsScrolled] = useState(false);

  const buttonsRef = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const isScrolling = useRef<boolean>(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const observerRef = useRef<IntersectionObserver | undefined>(undefined);

  // Scroll para seção
  const scrollToSection = useCallback((categoryName: string) => {
    const category = categories.find((cat) => cat.name === categoryName);
    if (!category) return;

    const element = document.getElementById(category.id);
    if (!element) return;

    isScrolling.current = true;
    setIsOpen(false);

    element.scrollIntoView({ behavior: "smooth", block: "start" });

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      setActive(category.name);
      isScrolling.current = false;
    }, 1000);
  }, []);

  // Atualiza indicador visual com transição suave
  useEffect(() => {
    const activeButton = buttonsRef.current[active];
    if (!activeButton) return;

    const { offsetLeft, offsetWidth } = activeButton;
    setIndicatorStyle({
      left: `${offsetLeft}px`,
      width: `${offsetWidth}px`,
      transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
    });
  }, [active]);

  // Detecta scroll
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    let updateTimeout: NodeJS.Timeout;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (isScrolling.current) return;
        const visibleEntries = entries.filter(
          (entry) => entry.isIntersecting && entry.intersectionRatio > 0
        );

        if (visibleEntries.length === 0) return;
        const mostVisible = visibleEntries.reduce((prev, current) => {
          const prevRatio = prev.intersectionRatio;
          const currentRatio = current.intersectionRatio;
          if (Math.abs(prevRatio - currentRatio) < 0.1) {
            return prev.boundingClientRect.top < current.boundingClientRect.top
              ? prev
              : current;
          }

          return currentRatio > prevRatio ? current : prev;
        });

        clearTimeout(updateTimeout);
        updateTimeout = setTimeout(() => {
          const category = categories.find(
            (cat) => cat.id === mostVisible.target.id
          );

          if (category && category.name !== active) {
            console.log(
              "Seção detectada:",
              category.name,
              "Ratio:",
              mostVisible.intersectionRatio
            );
            setActive(category.name);
          }
        }, 150);
      },
      {
        rootMargin: "-10% 0px -40% 0px",
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      }
    );

    // Observa todas as seções
    categories.forEach((category) => {
      const element = document.getElementById(category.id);
      if (element) {
        console.log("Observando seção:", category.name, "ID:", category.id);
        observerRef.current?.observe(element);
      } else {
        console.warn(
          "Elemento não encontrado:",
          category.name,
          "ID:",
          category.id
        );
      }
    });

    return () => {
      observerRef.current?.disconnect();
      clearTimeout(updateTimeout);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [active]);

  // Fecha menu ao clicar fora
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("nav")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  // Previne scroll quando menu mobile está aberto
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

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
      opacity: 0,
      y: -24,
      transition: { duration: 0.25, ease: "easeIn" },
    },
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        isScrolled || isOpen ? "bg-[#0a0a0a]/15 backdrop-blur-sm shadow-sm" : ""
      }`}
    >
      <nav className="container mx-auto max-w-7xl flex items-center justify-center px-4">
        {/* Menu Desktop */}
        <div className="hidden md:block w-full md:w-auto">
          <div className="relative flex space-x-2 bg-[#1e1e1e]/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-white/10 mx-auto">
            {/* Indicador de background com animação suave */}
            <motion.div
              className="absolute h-[calc(100%-8px)] top-1 bg-linear-to-r from-[#00ff9d]/30 to-[#00ff9d]/10 rounded-full shadow-[0_0_15px_rgba(0,255,157,0.2)]"
              style={indicatorStyle}
              layoutId="navbar-indicator"
            />

            {/* Botões de navegação */}
            {categories.map(({ name }) => (
              <motion.button
                key={name}
                ref={(el) => {
                  buttonsRef.current[name] = el;
                }}
                onClick={() => scrollToSection(name)}
                className={`relative z-10 px-6 py-2 rounded-full text-sm transition-colors duration-300 ease-in-out ${
                  active === name
                    ? "text-[#00ff9d] font-medium"
                    : "text-white/60 hover:text-white/90"
                }`}
                aria-current={active === name ? "page" : undefined}
              >
                {name}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Header Mobile */}
        <div className="md:hidden flex justify-between items-center w-full">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white/70 hover:text-[#00ff9d] transition-colors touch-manipulation"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
          >
            <motion.div
              initial={false}
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </motion.div>
          </button>

          <span className="text-[#00ff9d] font-medium text-sm">{active}</span>

          <div className="w-10" aria-hidden="true" />
        </div>

        {/* Menu Mobile */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-x-0 top-18 bg-[#1e1e1e]/98 backdrop-blur-lg md:hidden border-t border-white/5 shadow-2xl"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
            >
              <motion.div
                className="container mx-auto px-4 py-6 max-h-[calc(100vh-72px)] overflow-y-auto"
                variants={mobileMenuVariants}
              >
                {categories.map((category) => (
                  <motion.button
                    key={category.name}
                    onClick={() => scrollToSection(category.name)}
                    className={`w-full px-4 py-3 text-left text-base rounded-lg transition-all ${
                      active === category.name
                        ? "text-[#00ff9d] font-semibold bg-[#00ff9d]/10"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
                    variants={mobileItemVariants}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                  >
                    {category.name}
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
});
