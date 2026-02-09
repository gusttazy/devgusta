"use client";

import { motion } from "framer-motion";
import { memo } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { FolderGit2 } from "lucide-react";

// Variantes de animação do Header
const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-24 sm:py-32 px-4 sm:px-6 overflow-hidden"
    >
      <div className="relative container mx-auto max-w-6xl w-full z-10">
        {/* Header - Seguindo padrão About/Techs */}
        <motion.div
          className="text-center mb-16 sm:mb-24"
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00ff9d]/5 border border-[#00ff9d]/20 mb-8 backdrop-blur-sm">
            <FolderGit2 size={14} className="text-[#00ff9d]" />
            <span className="text-[#00ff9d] text-sm font-medium tracking-wide">
              Portfolio
            </span>
          </div>

          {/* Título */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-white">Meus </span>
            <span className="bg-linear-to-r from-[#00ff9d] to-[#00ffcc] bg-clip-text text-transparent">
              Projetos
            </span>
          </h2>

          {/* Descrição */}
          <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Uma seleção de projetos desenvolvidos com foco em performance,
            usabilidade e design moderno.
          </p>
        </motion.div>

        {/* Lista de Projetos - Lista Vertical */}
        <div className="flex flex-col gap-12 sm:gap-20 w-full">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Projects);
