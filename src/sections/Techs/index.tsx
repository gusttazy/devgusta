"use client";

// Importação de animações com Framer Motion
import { motion } from "framer-motion";
import React from "react";
import { techs } from "@/data/techs"; // Importa a lista de tecnologias

// Variantes para animação do container (stagger effect)
// Faz com que os filhos sejam animados em sequência
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

// Variantes para animação de entrada dos cards individuais
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.97,
    filter: "blur(4px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Componente principal de Tecnologias
export default function Techs() {
  return (
    <section id="techs" className="py-12 sm:py-24 px-2 sm:px-4 min-h-[60vh] overflow-hidden">
      <div className="max-w-6xl mx-auto text-center px-2 sm:px-4">
        {/* Título */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-[#00ff9d] to-[#00ff9d]/70 text-transparent bg-clip-text">
          Tecnologias
        </h2>

        {/* Descrição */}
        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-14">
          Tecnologias e ferramentas que utilizo para transformar ideias em
          realidade digital.
        </p>

        {/* Grid de tecnologias com animação */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {techs.map((tech) => (
            <motion.div
              key={tech.name}
              className="relative group bg-gradient-to-br from-[#181818] via-[#232323] to-[#1e1e1e] border border-[#00ff9d]/10 rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-center shadow-none hover:shadow-[0_4px_32px_rgba(0,255,157,0.10)] transition-all duration-300 overflow-hidden"
              variants={cardVariants}
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
            >
              {/* Glow efeito ao fundo no hover */}
              <span className="absolute inset-0 z-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00ff9d33] via-transparent to-transparent pointer-events-none" />
              {/* Ícone com animação no hover */}
              <motion.div
                className="relative z-10 text-[#00ff9d] mb-3 flex items-center justify-center bg-[#00ff9d]/10 rounded-full p-3 shadow-inner group-hover:scale-110 transition-transform duration-300"
                whileHover={{ scale: 1.18 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {React.createElement(tech.icon, { size: 36 })}
              </motion.div>
              {/* Nome da tecnologia */}
              <span className="relative z-10 text-base text-white/90 font-semibold tracking-wide text-center mt-1">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
