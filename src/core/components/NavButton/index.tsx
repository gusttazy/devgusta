"use client";

import { FC, useState, useEffect, useRef } from "react";
import { ChevronUp } from "lucide-react";

/**
 * Botão de navegação que permite voltar ao topo da página.
 * Aparece quando o usuário rola além da altura da seção "inicio".
 */
const NavButton: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const tickingRef = useRef(false);

  // Efeito para monitorar o scroll da página com throttle via rAF
  useEffect(() => {
    const handleScroll = () => {
      if (!tickingRef.current) {
        window.requestAnimationFrame(() => {
          const heroSection = document.getElementById("inicio");
          if (heroSection) {
            setIsVisible(window.scrollY > heroSection.offsetHeight);
          }
          tickingRef.current = false;
        });
        tickingRef.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * Função para fazer o scroll suave até o topo da página usando o Lenis.
   */
  const scrollToTop = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-3 rounded-full bg-surface/80 backdrop-blur-sm 
        border border-border shadow-lg z-50
        transition-all duration-300 ease-in-out
        hover:bg-brand/10 hover:border-brand/20
        ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      aria-label="Voltar ao topo"
    >
      <ChevronUp className="w-6 h-6 text-brand" />
    </button>
  );
};

export default NavButton;
