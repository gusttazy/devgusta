"use client";

import { m as motion } from "framer-motion";
import { memo } from "react";
import { projects } from "./projects";
import ProjectCard from "./ProjectCard";
import { FolderGit2 } from "lucide-react";
import { headerVariants } from "@/core/lib/animation-variants";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-24 sm:py-32 px-4 sm:px-6"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-glow rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-glow rounded-full blur-[120px]" />
      </div>

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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/5 border border-brand/20 mb-8 backdrop-blur-sm">
            <FolderGit2 size={14} className="text-brand" />
            <span className="text-brand text-sm font-medium tracking-wide">
              Portfólio
            </span>
          </div>

          {/* Título */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-text-main">Meus </span>
            <span className="bg-linear-to-r from-brand to-[#00ffcc] bg-clip-text text-transparent">
              Projetos
            </span>
          </h2>

          {/* Descrição */}
          <p className="text-text-muted text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Uma seleção de projetos desenvolvidos com foco em performance,
            usabilidade e design moderno.
          </p>
        </motion.div>

        {/* Lista de Projetos - Mapeando o arquivo de dados local em vez de entulhar o componente de texto */}
        <div className="flex flex-col gap-12 sm:gap-20 w-full">
          {projects.map((project) => (
            // Cada card cuida da sua própria animação (whileInView) quando aparece na tela,
            // por isso não usei containerVariants aqui, pra eles não ficarem travados juntos.
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Projects);
