"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { categories } from "@/data/categories"; // Importa as categorias

export default React.memo(function Navbar() {
  const [active, setActive] = useState("Início");
  const [isOpen, setIsOpen] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const buttonsRef = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const isScrolling = useRef(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = useCallback((categoryName: string) => {
    const category = categories.find((cat) => cat.name === categoryName);
    if (category) {
      const element = document.getElementById(category.id);
      if (element) {
        isScrolling.current = true;
        setIsOpen(false);
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        setTimeout(() => {
          setActive(category.name);
          isScrolling.current = false;
        }, 900); // tempo igual ao duration do scroll
      }
    }
  }, []);

  // Efeito para atualizar o indicador visual com animação suave
  useEffect(() => {
    const activeButton = buttonsRef.current[active];
    if (activeButton) {
      const { offsetLeft, offsetWidth } = activeButton;
      setIndicatorStyle({
        left: `${offsetLeft}px`,
        width: `${offsetWidth}px`,
        transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
      });
    }
  }, [active]);

  // Efeito para detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Efeito otimizado para detectar a seção visível
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrolling.current) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Debounce para evitar múltiplas atualizações
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
              const category = categories.find(
                (cat) => cat.id === entry.target.id
              );
              if (category) {
                setActive(category.name);
              }
            }, 100);
          }
        });
      },
      {
        rootMargin: "-30% 0px -30% 0px",
        threshold: [0.1, 0.5, 0.9],
      }
    );

    // Observa todas as seções
    categories.forEach((category) => {
      const element = document.getElementById(category.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, []);

  // Variants para animação do menu mobile
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

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        isScrolled && (isOpen || window.innerWidth < 768)
          ? "bg-[#0a0a0a]/30 backdrop-blur-lg"
          : ""
      }`}
    >
      <nav className="container mx-auto max-w-7xl flex items-center justify-center px-4">
        {/* Menu Desktop */}
        <div className="hidden md:block w-full md:w-auto">
          <div className="relative flex space-x-2 bg-[#1e1e1e]/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-white/10 mx-auto">
            {categories.map(({ name }) => (
              <motion.button
                key={name}
                ref={(el) => {
                  buttonsRef.current[name] = el;
                }}
                onClick={() => {
                  setActive(name);
                  scrollToSection(name);
                }}
                className={`px-6 py-2 rounded-full text-sm transition-colors duration-300 ease-in-out relative z-10 ${
                  active === name
                    ? "text-[#00ff9d] font-medium"
                    : "text-white/60 hover:text-white/90"
                }`}
              >
                {name}
              </motion.button>
            ))}
            <motion.div
              className="absolute h-[calc(100%-8px)] top-1 bg-gradient-to-r from-[#00ff9d]/30 to-[#00ff9d]/10 rounded-full shadow-[0_0_15px_rgba(0,255,157,0.2)]"
              style={indicatorStyle}
              layoutId="navbar-indicator"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          </div>
        </div>

        {/* Menu Mobile */}
        <div className="md:hidden flex justify-between items-center w-full">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white/70 hover:text-[#00ff9d] transition-colors"
            aria-label="Abrir menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </motion.button>
          <span className="text-[#00ff9d] font-medium">{active}</span>
          <div className="w-8" />
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              className="fixed inset-x-0 top-[72px] bg-[#1e1e1e]/95 backdrop-blur-lg md:hidden"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
            >
              <div className="container mx-auto px-4 py-4">
                {categories.map((category, i) => (
                  <motion.button
                    key={category.name}
                    onClick={() => {
                      setActive(category.name);
                      scrollToSection(category.name);
                    }}
                    className={`w-full px-4 py-3 text-left text-base transition-colors ${
                      active === category.name
                        ? "text-[#00ff9d] font-medium"
                        : "text-white/70"
                    }`}
                    whileHover={{ backgroundColor: "#00ff9d11" }}
                    transition={{
                      type: "spring",
                      stiffness: 320,
                      damping: 24,
                      delay: i * 0.04,
                    }}
                  >
                    {category.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
});
