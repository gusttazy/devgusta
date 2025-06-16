"use client";

// Importação dos ícones das tecnologias
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiSupabase,
  SiStyledcomponents,
  SiTailwindcss,
  SiPostgresql,
} from "react-icons/si";

// Importação de animações com Framer Motion
import { motion } from "framer-motion";
import React from "react";

// Lista de tecnologias com nome e ícone associado
const techs = [
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss3 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "React Native", icon: SiReact },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Supabase", icon: SiSupabase },
  { name: "Styled Components", icon: SiStyledcomponents },
  { name: "Tailwind CSS", icon: SiTailwindcss },
];

// Variantes para animação do container (stagger effect)
// Faz com que os filhos sejam animados em sequência
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

// Variantes para animação de entrada dos cards individuais
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.97,
    filter: "blur(4px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Componente principal de Tecnologias
export default function Techs() {
  return (
    <section id="techs" className="py-24 px-4 min-h-[60vh] overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        {/* Título */}
        <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-[#00ff9d] to-[#00ff9d]/70 text-transparent bg-clip-text">
          Tecnologias
        </h2>

        {/* Descrição */}
        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-14">
          Tecnologias e ferramentas que utilizo para transformar ideias em
          realidade digital.
        </p>

        {/* Grid de tecnologias com animação */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {techs.map((tech) => (
            <motion.div
              key={tech.name}
              className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center backdrop-blur-lg shadow-lg hover:shadow-[#00ff9d]/30 transition-all duration-200"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              {/* Ícone com animação no hover */}
              <motion.div
                className="text-[#00ff9d] mb-2"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {React.createElement(tech.icon, { size: 40 })}
              </motion.div>

              {/* Nome da tecnologia */}
              <span className="text-sm text-white/80 font-medium tracking-wide text-center">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
