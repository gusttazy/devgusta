"use client";

import ProjectCard, { Project } from "@/components/Projects/ProjectCard";
import { motion } from "framer-motion";
import React from "react";

const projects: Project[] = [
  {
    title: "Darker UI",
    description:
      "Uma landing page moderna e elegante para SaaS, desenvolvida com as tecnologias mais recentes do ecossistema React.",
    image: "/images/darkerUi.png",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    previewUrl: "https://darker-ui.vercel.app/",
    repositoryUrl: "https://github.com/gusttazy/darker-ui",
  },
  {
    title: "MyNotes",
    description:
      "Um aplicativo móvel inovador de anotações que combina funcionalidades de reconhecimento de voz e comandos por voz.",
    image: "/images/mynotes.png",
    technologies: ["React Native", "TypeScript", "Styled Components", "Expo"],
    previewUrl: "",
    repositoryUrl: "https://github.com/gusttazy/mynotes",
  },
  {
    title: "Itá Marketplace",
    description:
      "Uma plataforma de e-commerce especializada em artesanato indígena, desenvolvida com foco em responsividade e experiência do usuário.",
    image: "/images/itamarketplace.png",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    previewUrl: "https://ita-marketplace.vercel.app/",
    repositoryUrl: "https://github.com/gusttazy/ita-marketplace",
  },
  {
    title: "Cadastro de Alunos",
    description:
      "Aplicação web para cadastro, listagem e remoção de alunos. Frontend em React (Vite) e backend em Node.js/Express com banco SQLite.",
    image: "/images/cadastroalunos.png",
    technologies: ["React", "Vite", "Node.js", "Express", "SQLite"],
    previewUrl: "",
    repositoryUrl: "https://github.com/gusttazy/fullstack-app",
  },
  {
    title: "Untitled UI",
    description:
      "Uma interface moderna inspirada no Untitled UI Free Figma UI Kit and Design System v2.0, desenvolvida com Next.js, TypeScript e TailwindCSS.",
    image: "/images/untitledui.png",
    technologies: ["React", "Next.js", "TypeScript", "TailwindCSS"],
    previewUrl: "https://untitled-ui-seven.vercel.app/",
    repositoryUrl: "https://github.com/gusttazy/untitled-ui",
  },
  {
    title: "Consulta de Endereço",
    description:
      "Uma aplicação simples e intuitiva para consultar endereços utilizando a API do ViaCEP, desenvolvida com HTML, CSS e JavaScript puro.",
    image: "/images/apicep.png",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    previewUrl: "https://gusttazy.github.io/api-cep/",
    repositoryUrl: "https://github.com/gusttazy/api-cep",
  },
  // Adicione mais projetos aqui
];

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

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

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

export default React.memo(function Projects() {
  return (
    <section
      id="projetos"
      className="min-h-screen flex items-center justify-center py-16 px-4"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Cabeçalho */}
        <motion.div
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#00ff9d] to-[#00ff9d]/70 text-transparent bg-clip-text mb-3"
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

        {/* Grid de Projetos */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              custom={i}
              className="h-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

// Exemplo de uso:
// smoothScrollToTop();
