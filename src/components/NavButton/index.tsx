"use client";

import { FC, useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";

/**
 * Botão de navegação que permite voltar ao topo da página.
 * Aparece quando o usuário rola além da altura da seção "inicio".
 */
const NavButton: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Efeito para monitorar o scroll da página e controlar a visibilidade do botão
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("inicio");
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        setIsVisible(window.scrollY > heroHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Limpeza do event listener ao desmontar o componente
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * Função para fazer o scroll suave até o topo da página.
   * Usa uma função de easing (easeInOutQuad) para suavizar o movimento.
   */
  const scrollToTop = () => {
    const startY = window.scrollY;
    const diff = -startY;
    let start: number | null = null;

    // Função de easing para suavizar o scroll
    const easeInOutQuad = (t: number) =>
      t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const time = Math.min(1, (timestamp - start) / 900);
      const eased = easeInOutQuad(time);
      window.scrollTo(0, startY + diff * eased);
      if (time < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-3 rounded-full bg-[#1e1e1e]/80 backdrop-blur-sm 
        border border-white/10 shadow-lg z-50
        transition-all duration-300 ease-in-out
        hover:bg-[#00ff9d]/10 hover:border-[#00ff9d]/20
        ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      aria-label="Voltar ao topo"
    >
      <FaChevronUp className="w-6 h-6 text-[#00ff9d]" />
    </button>
  );
};

export default NavButton;
