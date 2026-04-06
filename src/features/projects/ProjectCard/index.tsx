"use client";

import { FC, memo } from "react";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { m as motion } from "framer-motion";
import type { Project } from "@/core/types/project";

export type { Project };

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: FC<ProjectCardProps> = memo(({ project }) => {
  return (
    <motion.article
      style={{ willChange: "transform, opacity" }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col lg:flex-row gap-8 lg:items-center 
        p-6 sm:p-8 rounded-3xl border border-border bg-surface backdrop-blur-sm
        hover:bg-surface-hover hover:border-brand/30 transition-all duration-500
        hover:shadow-[0_8px_30px_var(--glow)]"
    >
      {/* Project Image */}
      <div
        className="lg:w-7/12 relative aspect-16/10 sm:aspect-video 
        rounded-2xl overflow-hidden bg-black/50 border border-border shadow-lg group-hover:shadow-[0_0_20px_var(--glow)] transition-shadow duration-500"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 800px"
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent opacity-60 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="lg:w-5/12 flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl sm:text-3xl font-bold text-text-main group-hover:text-brand transition-colors">
            {project.title}
          </h3>

          <div className="flex items-center gap-3">
            <a
              href={project.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-text-muted hover:text-text-main hover:bg-surface rounded-full transition-all"
              aria-label="Repositório GitHub"
            >
              <Github size={20} />
            </a>
            {project.previewUrl && (
              <a
                href={project.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-text-muted hover:text-brand hover:bg-brand/10 rounded-full transition-all"
                aria-label="Ver Projeto"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>

        <p className="text-text-muted text-base sm:text-lg leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-2">
          {project.technologies.slice(0, 6).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 text-xs sm:text-sm font-medium text-brand 
                bg-brand/5 border border-brand/10 rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 6 && (
            <span
              className="px-3 py-1.5 text-xs sm:text-sm font-medium text-text-muted 
                bg-surface border border-border rounded-full"
            >
              +{project.technologies.length - 6}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
});

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
