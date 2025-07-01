"use client";

import { FC } from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import React from "react";
import { motion } from "framer-motion";

// Interface que define a estrutura dos dados de um projeto
export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  previewUrl: string;
  repositoryUrl: string;
}

// Props esperadas no componente ProjectCard
interface ProjectCardProps {
  project: Project;
}

// Componente ProjectCard — Responsável por exibir os detalhes de cada projeto
const ProjectCard: FC<ProjectCardProps> = React.memo(function ProjectCard({
  project,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col md:flex-row max-w-full md:max-w-4xl w-full mx-auto rounded-3xl overflow-hidden border border-[#00ff9d]/10 bg-gradient-to-br from-[#181818] via-[#232323] to-[#1e1e1e] backdrop-blur-xl mb-8 md:mb-12 p-0 md:p-2 transition-shadow duration-300"
      style={{ boxShadow: "none" }}
      whileHover={{
        boxShadow:
          "0 8px 40px 0 rgba(0,255,157,0.10), 0 1.5px 8px 0 rgba(0,0,0,0.18)",
      }}
    >
      {/* Imagem do projeto */}
      <div className="relative flex items-center justify-center w-full md:w-[380px] lg:w-[420px] h-52 sm:h-60 md:h-auto flex-shrink-0 overflow-hidden bg-[#181818]/80 md:self-stretch md:rounded-l-3xl md:rounded-r-none rounded-t-3xl md:rounded-t-none">
        <div className="flex items-center justify-center w-full h-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-contain h-full w-full"
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 380px, 420px"
            style={{ minHeight: "13rem", maxHeight: "28rem" }}
          />
        </div>
      </div>

      {/* Conteúdo ao lado da imagem */}
      <div className="flex flex-col justify-center flex-1 p-4 sm:p-6 md:p-10 gap-3 md:gap-6 md:h-full">
        {/* Título do projeto */}
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-1 tracking-tight drop-shadow-[0_2px_12px_rgba(0,255,157,0.10)]">
          {project.title}
        </h3>
        {/* Descrição do projeto */}
        <p className="text-white/90 text-base sm:text-lg md:text-xl mb-2 leading-relaxed">
          {project.description}
        </p>
        {/* Tecnologias usadas */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm bg-[#00ff9d]/10 text-[#00ff9d] rounded-full font-semibold shadow-sm border border-[#00ff9d]/20 backdrop-blur-md"
            >
              {tech}
            </span>
          ))}
        </div>
        {/* Ações — links para repositório e preview */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-8 mt-3 md:mt-4">
          <a
            href={project.repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-[#00ff9d] transition-colors text-base sm:text-xl flex items-center gap-2 font-medium"
            aria-label="Ver repositório"
          >
            <FaGithub size={24} className="sm:w-7 sm:h-7 w-6 h-6" />
          </a>
          {project.previewUrl?.trim() && (
            <a
              href={project.previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-[#00ff9d] transition-colors text-base sm:text-xl flex items-center gap-2 font-medium"
              aria-label="Ver preview"
            >
              <FaExternalLinkAlt size={20} className="sm:w-6 sm:h-6 w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
});

// Define o nome do componente
ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
