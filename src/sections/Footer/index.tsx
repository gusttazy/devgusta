"use client";

import { FC, memo, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// Variantes de animação - Padrão Projects
const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

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
      element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }, []);

  return (
    <motion.footer
      className="w-full py-4 sm:py-8 px-2 sm:px-6 lg:px-8
      bg-[#0a0a0a5b] border-t border-[#1a1a1a77]"
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          {/* Logo */}
          <motion.div className="space-y-4" variants={cardVariants}>
            <Link href="/" className="text-2xl font-bold text-white">
              DevGusta
            </Link>
            <p className="text-gray-400 max-w-xs">
              Desenvolvedor de Software apaixonado por criar experiências
              digitais incríveis.
            </p>
          </motion.div>

          {/* Links rápidos */}
          <motion.div
            className="space-y-2 sm:space-y-4"
            variants={cardVariants}
          >
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
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="border-t border-[#1A1A1A] my-8"
          variants={cardVariants}
        />

        {/* Copyright */}
        <motion.div
          className="text-center text-gray-400 text-sm"
          variants={cardVariants}
        >
          © {currentYear} DevGusta. Todos os direitos reservados.
        </motion.div>
      </motion.div>
    </motion.footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
