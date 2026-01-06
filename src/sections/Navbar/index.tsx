"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
// Adicionei FaCode nas importações
import { FaBars, FaTimes, FaCode } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { categories } from "@/data/categories";

export default React.memo(function Navbar() {
  const [active, setActive] = useState("Início");
  const [isOpen, setIsOpen] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({});

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

  // Scroll para o topo ao clicar no Logo
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActive("Início");
  };

  // Atualiza indicador visual
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

  // Observer (Logica de Scroll Spy)
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
          (entry) => entry.isIntersecting && entry.intersectionRatio > 0
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
            (cat) => cat.id === mostVisible.target.id
          );

          if (category && category.name !== active) {
            setActive(category.name);
          }
        }, 150);
      },
      {
        rootMargin: "-10% 0px -40% 0px",
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      }
    );

    categories.forEach((category) => {
      const element = document.getElementById(category.id);
      if (element) observerRef.current?.observe(element);
    });

    return () => {
      observerRef.current?.disconnect();
      clearTimeout(updateTimeout);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
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
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Variantes de Animação
  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, y: -24, transition: { duration: 0.25, ease: "easeIn" } },
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300">
      {/* Container principal com justify-between para separar Logo e Menu */}
      <nav className="container mx-auto max-w-7xl flex items-center justify-between px-4 relative">

        {/* === LOGO (Esquerda) === */}
        <div className="relative z-50">
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Voltar ao topo"
          >
            {/* Ícone Glassy */}
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#1e1e1e]/80 backdrop-blur-sm border border-white/10 text-[#00ff9d] shadow-lg transition-all duration-300 group-hover:border-[#00ff9d]/50 group-hover:shadow-[0_0_15px_rgba(0,255,157,0.2)]">
              <FaCode size={20} />
            </div>
            {/* Nome (Opcional - aparece apenas em telas maiores) */}
            <span className="hidden sm:block text-white font-bold tracking-wide text-lg group-hover:text-[#00ff9d] transition-colors">
              <span className="text-[#00ff9d]">dev</span>Gusta
            </span>
          </button>
        </div>

        {/* === MENU DESKTOP (Centralizado Absoluto) === */}
        <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative flex space-x-1 bg-[#1e1e1e]/80 backdrop-blur-sm px-2 py-2 rounded-full shadow-lg border border-white/10">
            {/* Indicador Animado */}
            <motion.div
              className="absolute h-[calc(100%-16px)] top-2 bg-linear-to-r from-[#00ff9d]/20 to-[#00ff9d]/5 rounded-full shadow-[0_0_10px_rgba(0,255,157,0.1)] border border-[#00ff9d]/20"
              style={indicatorStyle}
              layoutId="navbar-indicator"
            />

            {/* Links */}
            {categories.map(({ name }) => (
              <motion.button
                key={name}
                ref={(el) => { buttonsRef.current[name] = el; }}
                onClick={() => scrollToSection(name)}
                className={`relative z-10 px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${active === name
                  ? "text-[#00ff9d]"
                  : "text-white/60 hover:text-white"
                  }`}
              >
                {name}
              </motion.button>
            ))}
          </div>
        </div>

        {/* === HEADER MOBILE (Direita) === */}
        <div className="md:hidden flex items-center gap-4">
          {/* Nome da seção ativa no mobile */}
          <span className="text-[#00ff9d] font-medium text-sm tracking-wide">
            {active}
          </span>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white/70 hover:text-[#00ff9d] transition-colors bg-[#1e1e1e]/80 backdrop-blur-sm rounded-lg border border-white/10"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            <motion.div
              initial={false}
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </motion.div>
          </button>
        </div>

        {/* === DROPDOWN MOBILE === */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-x-0 top-[72px] bg-[#0a0a0a]/95 backdrop-blur-xl md:hidden border-t border-white/10 shadow-2xl"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
            >
              <motion.div
                className="container mx-auto px-4 py-6 flex flex-col gap-2"
                variants={mobileMenuVariants}
              >
                {categories.map((category) => (
                  <motion.button
                    key={category.name}
                    onClick={() => scrollToSection(category.name)}
                    className={`w-full px-4 py-3 text-left text-base rounded-xl transition-all border border-transparent ${active === category.name
                      ? "text-[#00ff9d] font-semibold bg-[#00ff9d]/10 border-[#00ff9d]/20"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                      }`}
                    variants={mobileItemVariants}
                    whileTap={{ scale: 0.98 }}
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