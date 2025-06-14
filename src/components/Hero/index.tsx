"use client";

import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { FiMail } from "react-icons/fi";
import { motion } from "framer-motion";
import Hero3DObject from "./Hero3DObject";

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
    url: "mailto:gustavorodri22profissional@gmail.com",
    icon: FiMail,
  },
];

// Variantes de animação para o container e elementos
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -32 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default React.memo(function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-[calc(100vh-4rem)] flex items-center justify-center pt-8 pb-4 sm:pt-10 sm:pb-6 lg:pt-12 lg:pb-8"
    >
      <div className="container mx-auto max-w-7xl flex flex-col-reverse lg:flex-row items-center justify-between gap-12 px-4 sm:px-6">
        {/* Coluna da Esquerda - Conteúdo textual */}
        <motion.div
          className="space-y-4 sm:space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {/* Título principal */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#00ff9d] to-[#00ff9d]/70 text-transparent bg-clip-text leading-tight"
            variants={fadeUp}
            whileHover={{
              scale: 1.03,
              textShadow: "0 2px 24px #00ff9d55",
            }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
          >
            Olá, eu sou o Gustavo!
          </motion.h1>
          {/* Descrição */}
          <motion.p
            className="text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl"
            variants={fadeUp}
            transition={{ delay: 0.18 }}
          >
            Sou um desenvolvedor de Software apaixonado por transformar ideias
            em soluções digitais inovadoras. Com expertise em React e
            ecossistema JavaScript moderno, dedico-me a criar experiências web
            excepcionais que combinam performance, usabilidade e design.
          </motion.p>
          {/* Botões de ação e redes sociais */}
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
            variants={containerVariants}
          >
            {/* Botão para baixar currículo */}
            <motion.a
              href="/Curr%C3%ADculo%20Gustavo%20Rodrigues.pdf"
              download
              className="w-full sm:w-auto px-6 py-2.5 bg-[#00ff9d] text-[#121212] rounded-full font-medium
                       hover:bg-[#00ff9d]/90 transition-all duration-300 flex items-center justify-center gap-2
                       text-base relative overflow-hidden group hover:shadow-[0_0_20px_rgba(0,255,157,0.3)]"
              variants={fadeLeft}
              whileHover={{
                scale: 1.08,
                boxShadow: "0 0 32px #00ff9d55",
                backgroundColor: "#00ff9d",
              }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
            >
              <MdOutlineFileDownload
                size={20}
                className="transition-transform group-hover:scale-110"
              />
              <span className="relative z-10">Baixar Currículo</span>
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent
                         translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"
              />
            </motion.a>
            {/* Ícones das redes sociais */}
            <motion.div
              className="flex items-center gap-4"
              variants={containerVariants}
            >
              {socialLinks.map((link, i) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-[#00ff9d] transition-colors"
                    aria-label={link.name}
                    variants={fadeLeft}
                    transition={{ delay: 0.25 + i * 0.12 }}
                    whileHover={{ scale: 1.18, color: "#00ff9d", rotate: 6 }}
                    whileTap={{ scale: 0.92 }}
                  >
                    <Icon size={24} strokeWidth={2} />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Coluna da Direita - Objeto 3D animado */}
        <motion.div className="w-full lg:flex-1 h-[340px] sm:h-[420px] lg:h-[540px] 2xl:h-[600px] relative flex items-center justify-center">
          <div className="w-full h-full max-w-[520px] mx-auto">
            <Hero3DObject />
          </div>
        </motion.div>
      </div>
    </section>
  );
});
