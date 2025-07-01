"use client";

import { motion } from "framer-motion";
import React from "react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

// Animações para o container da seção (controla o efeito de stagger nos elementos filhos)
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Animação de entrada (fade e movimento para cima)
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

// Animação específica para os cards de projeto
const cardVariants = {
  hidden: { opacity: 0, y: 36, scale: 0.95, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

// Componente principal da seção de projetos
export default React.memo(function Projects() {
  return (
    <section
      id="projetos"
      className="min-h-screen flex items-center justify-center py-8 sm:py-16 px-2 sm:px-4"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Cabeçalho da seção */}
        <motion.div
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-[#00ff9d] to-[#00ff9d]/70 text-transparent bg-clip-text mb-2 sm:mb-3"
            variants={fadeUp}
            whileHover={{
              color: "#00ff9d",
              scale: 1.04,
              textShadow: "0 2px 24px #00ff9d55",
            }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
          >
            Projetos
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto"
            variants={fadeUp}
            transition={{ delay: 0.18 }}
          >
            Conheça alguns dos meus trabalhos mais recentes. Cada projeto
            representa uma jornada única de aprendizado e inovação.
          </motion.p>
        </motion.div>

        {/* Lista que exibe os cards dos projetos */}
        <motion.div
          className="flex flex-col items-center gap-8 w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="w-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});
