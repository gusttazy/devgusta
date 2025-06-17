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
      className="group relative flex flex-col rounded-2xl overflow-hidden h-[520px] 
      shadow-lg border border-[#222]/60 hover:border-[#00ff9d]/40 
      transition-all duration-300 hover:shadow-[0_4px_32px_rgba(0,255,157,0.10)] 
      bg-transparent"
    >
      {/* Imagem do projeto */}
      <div className="relative h-60 w-full overflow-hidden">
        <motion.div initial={{ scale: 1 }} className="w-full h-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </motion.div>
      </div>

      {/* Conteúdo abaixo da imagem */}
      <div
        className="relative flex flex-col flex-1 p-5 bg-[#1e1e1e]/80 
        backdrop-blur-sm rounded-b-2xl border-none justify-between"
      >
        {/* Título do projeto */}
        <h3 className="text-xl font-semibold text-white mb-2">
          {project.title}
        </h3>

        {/* Descrição do projeto */}
        <p
          className="text-white/70 text-sm md:text-base mb-4 flex-1 
          line-clamp-2 md:line-clamp-4"
        >
          {project.description}
        </p>

        {/* Tecnologias usadas */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <motion.span
              key={tech}
              className="px-2 py-1 text-xs bg-[#00ff9d]/10 
              text-[#00ff9d] rounded-full"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Ações — links para repositório e preview */}
        <div className="flex items-center gap-4 mt-auto">
          {/* Link para o repositório (GitHub) */}
          <motion.a
            href={project.repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-[#00ff9d] transition-colors"
            aria-label="Ver repositório"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub size={20} />
          </motion.a>

          {/* Link para o preview, renderiza apenas se houver uma URL válida */}
          {project.previewUrl?.trim() && (
            <motion.a
              href={project.previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[#00ff9d] transition-colors"
              aria-label="Ver preview"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaExternalLinkAlt size={20} />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
});

// Define o nome do componente
ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
