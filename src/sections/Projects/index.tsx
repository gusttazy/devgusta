"use client";

import { motion } from "framer-motion";
import React from "react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

// Variantes de animação para o container
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

// Animação do header
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

// Animação dos cards de projeto
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
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

export default React.memo(function Projects() {
  return (
    <section
      id="projetos"
      className="relative min-h-screen flex items-center justify-center py-16 sm:py-28 px-4 sm:px-6 overflow-hidden"
    >
      <div className="relative container mx-auto max-w-7xl">
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
              Portfolio
            </span>
          </motion.div>

          {/* Título com gradiente */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5">
            <span className="bg-gradient-to-r from-white via-white/90 to-white/70 text-transparent bg-clip-text">
              Meus{" "}
            </span>
            <span className="bg-gradient-to-r from-[#00ff9d] via-[#00ffcc] to-[#00ff9d] text-transparent bg-clip-text">
              Projetos
            </span>
          </h2>

          {/* Descrição */}
          <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Conheça alguns dos meus trabalhos mais recentes. Cada projeto
            representa uma jornada única de{" "}
            <span className="text-white/90 font-semibold">
              aprendizado e inovação
            </span>
            .
          </p>

          {/* Estatísticas decorativas */}
          <motion.div
            className="flex items-center justify-center gap-8 sm:gap-12 mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[#00ff9d] mb-1">
                {projects.length}+
              </div>
              <div className="text-xs sm:text-sm text-white/60">Projetos</div>
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[#00ff9d] mb-1">
                100%
              </div>
              <div className="text-xs sm:text-sm text-white/60">Dedicação</div>
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[#00ff9d] mb-1">
                ∞
              </div>
              <div className="text-xs sm:text-sm text-white/60">
                Aprendizado
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Grid de projetos */}
        <motion.div
          className="flex flex-col items-center gap-6 sm:gap-8 w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="w-full group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {/* Wrapper */}
              <div className="relative">
                {/* Número do projeto (decorativo) */}
                <div className="absolute -top-4 -left-4 z-10 w-12 h-12 bg-gradient-to-br from-[#00ff9d] to-[#00ffcc] rounded-full flex items-center justify-center text-[#121212] font-bold text-lg shadow-lg shadow-[#00ff9d]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Card do projeto */}
                <div className="relative">
                  <ProjectCard project={project} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer decorativo */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="inline-flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 text-white/50 text-sm">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/30" />
              <span>Mais projetos em breve</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/30" />
            </div>

            {/* Call to action sutil */}
            <motion.div
              className="text-white/40 text-xs"
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Scroll para explorar ↓
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});
