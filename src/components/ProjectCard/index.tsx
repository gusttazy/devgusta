"use client";

import { FC, memo } from "react";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  previewUrl: string;
  repositoryUrl: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: FC<ProjectCardProps> = memo(({ project }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col lg:flex-row gap-8 lg:items-center 
        p-6 sm:p-8 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-sm
        hover:bg-white/8 hover:border-[#00ff9d]/20 transition-all duration-500
        hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
    >
      {/* Project Image */}
      <div
        className="lg:w-7/12 relative aspect-16/10 sm:aspect-video 
        rounded-2xl overflow-hidden bg-[#111] border border-white/5 shadow-lg group-hover:shadow-[#00ff9d]/10 transition-shadow duration-500"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 800px"
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-[#111]/80 via-transparent to-transparent opacity-60 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="lg:w-5/12 flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-[#00ff9d] transition-colors">
            {project.title}
          </h3>

          <div className="flex items-center gap-3">
            <a
              href={project.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all"
              aria-label="GitHub Repository"
            >
              <Github size={20} />
            </a>
            {project.previewUrl && (
              <a
                href={project.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white/50 hover:text-[#00ff9d] hover:bg-[#00ff9d]/10 rounded-full transition-all"
                aria-label="Live Preview"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>

        <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-2">
          {project.technologies.slice(0, 6).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 text-xs sm:text-sm font-medium text-[#00ff9d] 
                bg-[#00ff9d]/5 border border-[#00ff9d]/10 rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 6 && (
            <span
              className="px-3 py-1.5 text-xs sm:text-sm font-medium text-zinc-500 
                bg-white/5 border border-white/5 rounded-full"
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
