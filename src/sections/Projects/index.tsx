"use client";

import { motion } from "framer-motion";
import { memo } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

// Variantes de animação
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

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
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

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen scroll-mt-16 flex items-center justify-center
        py-20 sm:py-32 px-4 sm:px-6 overflow-hidden"
    >
      <div className="relative container mx-auto max-w-7xl w-full">
        {/* Header */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full
              bg-[#00ff9d]/10 border border-[#00ff9d]/20 mb-6"
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

          {/* Título */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5">
            <span className="bg-linear-to-r from-white via-white/90 to-white/70 text-transparent bg-clip-text">
              Meus{" "}
            </span>
            <span className="bg-linear-to-r from-[#00ff9d] via-[#00ffcc] to-[#00ff9d] text-transparent bg-clip-text">
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

          {/* Estatísticas */}
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

            <div className="w-px h-12 bg-linear-to-b from-transparent via-white/20 to-transparent" />

            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[#00ff9d] mb-1">
                100%
              </div>
              <div className="text-xs sm:text-sm text-white/60">Dedicação</div>
            </div>

            <div className="w-px h-12 bg-linear-to-b from-transparent via-white/20 to-transparent" />

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

        {/* Lista de projetos */}
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
              <div className="relative">
                {/* Índice */}
                <div
                  className="absolute -top-4 -left-4 z-10 w-12 h-12
                  bg-linear-to-br from-[#00ff9d] to-[#00ffcc]
                  rounded-full flex items-center justify-center
                  text-[#121212] font-bold text-lg
                  shadow-lg shadow-[#00ff9d]/30
                  opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                <ProjectCard project={project} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Projects);
