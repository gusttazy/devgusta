"use client";

import { FC, useState, useEffect } from 'react';
import { FaChevronUp } from 'react-icons/fa';

const NavButton: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Obtém a altura da seção Hero (ajuste conforme necessário)
      const heroSection = document.getElementById('inicio');
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        setIsVisible(window.scrollY > heroHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    const startY = window.scrollY;
    const diff = -startY;
    let start: number | null = null;
    function easeInOutQuad(t: number) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }
    function step(timestamp: number) {
      if (!start) start = timestamp;
      const time = Math.min(1, (timestamp - start) / 900);
      const eased = easeInOutQuad(time);
      window.scrollTo(0, startY + diff * eased);
      if (time < 1) {
        window.requestAnimationFrame(step);
      }
    }
    window.requestAnimationFrame(step);
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-3 rounded-full bg-[#1e1e1e]/80 backdrop-blur-sm border border-white/10 
        shadow-lg transition-all duration-300 ease-in-out z-50
        hover:bg-[#00ff9d]/10 hover:border-[#00ff9d]/20
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      aria-label="Voltar ao topo"
    >
      <FaChevronUp 
        className="w-6 h-6 text-[#00ff9d]" 
      />
    </button>
  );
};

export default NavButton;