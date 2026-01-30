"use client";

import { FC, memo, useCallback } from "react";
import Link from "next/link";

// Categorias (mesmos IDs da Navbar)
const categories = [
  { name: "Início", id: "inicio" },
  { name: "Techs", id: "techs" },
  { name: "Projetos", id: "projetos" },
  { name: "Contato", id: "contato" },
];

const Footer: FC = memo(() => {
  const currentYear = new Date().getFullYear();

  // Scroll suave para seções
  const scrollToSection = useCallback((categoryName: string) => {
    const category = categories.find((cat) => cat.name === categoryName);
    if (!category) return;

    const element = document.getElementById(category.id);
    if (!element) return;

    const navbarHeight = 96;
    const offsetPosition =
      element.getBoundingClientRect().top +
      window.pageYOffset -
      navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }, []);

  return (
    <footer className="w-full py-4 sm:py-8 px-2 sm:px-6 lg:px-8
      bg-[#0a0a0a5b] border-t border-[#1a1a1a77]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          {/* Logo */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold text-white">
              DevGusta
            </Link>
            <p className="text-gray-400 max-w-xs">
              Desenvolvedor de Software apaixonado por criar experiências
              digitais incríveis.
            </p>
          </div>

          {/* Links rápidos */}
          <div className="space-y-2 sm:space-y-4">
            <h3 className="text-white font-semibold">Links Rápidos</h3>
            <ul className="space-y-1 sm:space-y-2">
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
        </div>

        {/* Divider */}
        <div className="border-t border-[#1A1A1A] my-8" />

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          © {currentYear} DevGusta. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;