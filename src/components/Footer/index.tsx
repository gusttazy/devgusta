"use client";

import React, { FC, useCallback } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

// Mapeamento das categorias com seus IDs correspondentes (mesmo da Navbar)
const categories = [
  { name: "Início", id: "inicio" },
  { name: "Techs", id: "techs" },
  { name: "Projetos", id: "projetos" },
  { name: "Contato", id: "contato" },
];

const Footer: FC = React.memo(function Footer() {
  const currentYear = new Date().getFullYear();

  // Função para navegação suave (mesma lógica da Navbar)
  const scrollToSection = useCallback((categoryName: string) => {
    const category = categories.find((cat) => cat.name === categoryName);
    if (category) {
      const element = document.getElementById(category.id);
      if (element) {
        const navbarHeight = 96; // altura aproximada da navbar + padding
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  }, []);

  return (
    <footer className="w-full py-8 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a5b] border-t border-[#1a1a1a77]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold text-white">
              DevGusta
            </Link>
            <p className="text-gray-400 max-w-xs">
              Desenvolvedor de Software apaixonado por criar experiências
              digitais incríveis.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Links Rápidos</h3>
            <ul className="space-y-2">
              {categories.map(({ name }) => (
                <li key={name}>
                  <button
                    onClick={() => scrollToSection(name)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Redes Sociais */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/gustaguiar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/gusttazy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.instagram.com/gusttazy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://wa.me/5592992279956"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Linha Divisória */}
        <div className="border-t border-[#1A1A1A] my-8" />

        {/* Copyright */}
        <div className="text-center text-gray-400">
          <p>© {currentYear} Portfolio. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
});
Footer.displayName = "Footer";

export default Footer;
