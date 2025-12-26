"use client";

import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail, FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

// Links das redes sociais
const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/gustaguiar/",
    icon: FaLinkedin,
  },
  {
    name: "GitHub",
    url: "https://github.com/gusttazy",
    icon: FaGithub,
  },
  {
    name: "Gmail",
    url: "mailto:gustavoaguiar0916@gmail.com",
    icon: FiMail,
  },
];

// Variantes de animação
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default React.memo(function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden px-4 sm:px-6"
    >
      {/* Grid decorativo */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)] pointer-events-none" />

      <motion.div
        className="relative w-full max-w-4xl mx-auto flex flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Badge de boas-vindas */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00ff9d]/10 border border-[#00ff9d]/20 mb-8"
          variants={scaleIn}
        >
          <div className="w-2 h-2 rounded-full bg-[#00ff9d] animate-pulse" />
          <span className="text-[#00ff9d] text-sm font-medium tracking-wide">
            Disponível para projetos
          </span>
        </motion.div>

        {/* Nome e saudação com espaçamento ajustado */}
        <motion.h1
          className="text-5xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6"
          variants={fadeUp}
        >
          <span className="block text-white/90">Olá, eu sou</span>
          <span className="block bg-gradient-to-r from-[#00ff9d] via-[#00ffcc] to-[#00ff9d] text-transparent bg-clip-text mt-2">
            Gustavo!
          </span>
        </motion.h1>

        {/* Subtítulo com estilo aprimorado */}
        <motion.div className="max-w-2xl mx-auto mb-10" variants={fadeUp}>
          <p className="text-lg sm:text-xl text-white/70 leading-relaxed">
            Tecnólogo em{" "}
            <span className="text-white/90 font-semibold">
              Análise e Desenvolvimento
            </span>
            <br />
            de Sistemas
          </p>
        </motion.div>

        {/* Botão de download do CV */}
        <motion.div variants={fadeUp}>
          <a
            href="/curriculo.pdf"
            download="Gustavo_Aguiar_CV.pdf"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-[#00ff9d] text-[#121212] rounded-full font-semibold text-base overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,157,0.4)] hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#00ff9d] focus:ring-offset-2 focus:ring-offset-[#121212]"
          >
            {/* Efeito de brilho no hover */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

            {/* Ícone com animação */}
            <FiDownload
              size={20}
              className="relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
            />

            {/* Texto */}
            <span className="relative z-10">Baixar CV</span>

            {/* Indicador decorativo */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00ffcc] to-[#00ff9d] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>
        </motion.div>

        {/* Ícones sociais */}
        <motion.div className="flex items-center gap-4 mt-12" variants={fadeUp}>
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                aria-label={link.name}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {/* Background com hover */}
                <div className="absolute inset-0 bg-[#00ff9d]/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Card do ícone */}
                <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#252525] border border-white/10 rounded-xl p-3 transition-all duration-300 group-hover:border-[#00ff9d]/40 group-hover:shadow-[0_8px_30px_rgba(0,255,157,0.15)]">
                  <Icon
                    size={24}
                    className="text-white/70 transition-colors duration-300 group-hover:text-[#00ff9d]"
                  />
                </div>

                {/* Tooltip */}
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#1a1a1a] border border-[#00ff9d]/20 rounded-lg text-xs text-white/90 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {link.name}
                </span>
              </motion.a>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
});
