"use client";

import { FC, memo } from "react";
import Image from "next/image";
import { GithubIcon, ExternalLink } from "lucide-react";
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

// Componente ProjectCard
const ProjectCard: FC<ProjectCardProps> = memo(({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{
        boxShadow:
          "0 8px 40px rgba(0,255,157,0.10), 0 1.5px 8px rgba(0,0,0,0.18)",
      }}
      className="group relative flex flex-col md:flex-row w-full max-w-4xl mx-auto
        rounded-3xl overflow-hidden border border-[#00ff9d]/10
        bg-linear-to-br from-[#181818] via-[#232323] to-[#1e1e1e]
        backdrop-blur-xl mb-8 md:mb-12"
    >
      {/* Imagem do projeto */}
      <div
        className="relative flex items-center justify-center
          w-full md:w-95 lg:w-105
          h-44 sm:h-52 md:h-auto
          shrink-0 overflow-hidden
          bg-[#181818]/80
          md:self-stretch
          md:rounded-l-3xl md:rounded-r-none
          rounded-t-3xl md:rounded-t-none"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-contain scale-90"
          sizes="(max-width: 640px) 85vw, (max-width: 1024px) 340px, 380px"
        />
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col justify-center flex-1 p-4 sm:p-6 md:p-10 gap-4">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight drop-shadow-[0_2px_12px_rgba(0,255,157,0.10)]">
          {project.title}
        </h3>

        <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed">
          {project.description}
        </p>

        {/* Tecnologias */}
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm
                bg-[#00ff9d]/10 text-[#00ff9d]
                rounded-full border border-[#00ff9d]/20
                backdrop-blur-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Ações */}
        <div className="flex items-center gap-6 mt-2">
          <a
            href={project.repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver repositório"
            className="text-white/80 hover:text-[#00ff9d] transition-colors"
          >
            <GithubIcon className="w-6 h-6 sm:w-7 sm:h-7" />
          </a>

          {project.previewUrl?.trim() && (
            <a
              href={project.previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver preview"
              className="text-white/80 hover:text-[#00ff9d] transition-colors"
            >
              <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
});

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
