"use client";

import { motion } from "framer-motion";
import React from "react";
import { techs } from "@/data/techs";

// Animação do container com stagger
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

// Animação dos cards individuais
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Variantes para o header
const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Techs() {
  return (
    <section
      id="techs"
      className="relative py-16 sm:py-28 px-4 sm:px-6 min-h-[60vh] overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Badge decorativo */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00ff9d]/10 border border-[#00ff9d]/20 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="w-2 h-2 rounded-full bg-[#00ff9d] animate-pulse" />
            <span className="text-[#00ff9d] text-sm font-medium tracking-wide">
              Stack Tecnológico
            </span>
          </motion.div>

          {/* Título com gradiente */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5">
            <span className="bg-gradient-to-r from-white via-white/90 to-white/70 text-transparent bg-clip-text">
              Tecnologias &{" "}
            </span>
            <span className="bg-gradient-to-r from-[#00ff9d] via-[#00ffcc] to-[#00ff9d] text-transparent bg-clip-text">
              Ferramentas
            </span>
          </h2>

          {/* Descrição */}
          <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Tecnologias e ferramentas que utilizo para transformar ideias em
            experiências digitais inovadoras e impactantes.
          </p>
        </motion.div>

        {/* Grid de tecnologias */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {techs.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="relative group"
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Card principal */}
              <div className="relative bg-gradient-to-br from-[#1a1a1a] via-[#252525] to-[#1a1a1a] border border-white/10 rounded-2xl p-5 sm:p-6 flex flex-col items-center justify-center h-full overflow-hidden transition-all duration-300 group-hover:border-[#00ff9d]/40 group-hover:shadow-[0_8px_40px_rgba(0,255,157,0.15)]">
                {/* Efeito de brilho no hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#00ff9d] to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#00ff9d]/5 via-transparent to-transparent" />
                </div>

                {/* Número do index (decorativo) */}
                <div className="absolute top-2 right-2 text-[#00ff9d]/20 text-xs font-mono group-hover:text-[#00ff9d]/40 transition-colors">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Container do ícone */}
                <motion.div
                  className="relative z-10 mb-4 flex items-center justify-center"
                  whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="absolute inset-0 bg-[#00ff9d]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative text-[#00ff9d] bg-[#00ff9d]/10 rounded-xl p-3 group-hover:bg-[#00ff9d]/20 transition-colors duration-300">
                    {React.createElement(tech.icon, { size: 32 })}
                  </div>
                </motion.div>

                {/* Nome da tecnologia */}
                <span className="relative z-10 text-sm sm:text-base text-white/90 font-semibold tracking-wide text-center group-hover:text-white transition-colors duration-300">
                  {tech.name}
                </span>

                {/* Indicador de hover */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00ff9d] to-[#00ffcc]"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformOrigin: "left" }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer decorativo */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        ></motion.div>
      </div>
    </section>
  );
}
