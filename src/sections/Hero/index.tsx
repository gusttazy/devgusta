"use client";

import { memo } from "react";
import { Download, Sparkles, Code2 } from "lucide-react";
import {
  SiGithub,
  SiLinkedin,
  SiGmail,
  SiX,
  SiInstagram,
  SiWhatsapp,
} from "react-icons/si";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

// --- Configurações e Dados ---

interface SocialLink {
  name: string;
  url: string;
  icon: IconType;
}

const SOCIAL_LINKS: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/gusttazy", icon: SiGithub },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/gustaguiar/", icon: SiLinkedin },
  { name: "Email", url: "mailto:gustavoaguiar0916@gmail.com", icon: SiGmail },
  { name: "Instagram", url: "https://www.instagram.com/gusttazy/", icon: SiInstagram },
  { name: "X", url: "https://x.com/gustola_", icon: SiX },
  { name: "WhatsApp", url: "https://wa.me/5592992279956", icon: SiWhatsapp },
];

const ANIMATION_VARIANTS = {
  container: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.15 },
    },
  },
  fadeUp: {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  },
  fadeScale: {
    hidden: { opacity: 0, scale: 0.95 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  },
};

// --- Sub-componentes ---

const StatusBadge = () => (
  <div className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-linear-to-r from-[#00ff9d]/10 to-emerald-500/10 border border-[#00ff9d]/20 backdrop-blur-sm hover:border-[#00ff9d]/40 transition-all duration-300">
    <Sparkles className="w-3.5 h-3.5 text-[#00ff9d] animate-pulse" />
    <span className="text-[#00ff9d] text-xs sm:text-sm font-semibold tracking-wide">
      Disponível para projetos
    </span>
  </div>
);

const SocialButton = ({ link }: { link: SocialLink }) => {
  const Icon = link.icon;
  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visitar ${link.name}`}
      whileHover={{ y: -2, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="group relative p-3 rounded-xl bg-white/5 border border-white/10 text-zinc-400 transition-all duration-300 hover:text-[#00ff9d] hover:bg-[#00ff9d]/5 hover:border-[#00ff9d]/30 hover:shadow-lg hover:shadow-[#00ff9d]/10"
    >
      <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
      <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-zinc-900 border border-zinc-800 rounded text-[9px] font-medium text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        {link.name}
      </span>
    </motion.a>
  );
};

const CVButton = () => (
  <motion.a
    href="/curriculo.pdf"
    download="Gustavo_Aguiar_CV.pdf"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-[#00ff9d] text-black rounded-xl font-bold text-sm sm:text-base overflow-hidden shadow-lg shadow-[#00ff9d]/20 hover:shadow-xl hover:shadow-[#00ff9d]/30 transition-all duration-300"
  >
    <span className="absolute inset-0 bg-linear-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
    <Download className="w-4 h-4 relative z-10 transition-transform group-hover:-rotate-6" />
    <span className="relative z-10">Download CV</span>
  </motion.a>
);

// --- Componente Principal ---

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div
        className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-20 sm:pb-24 lg:pb-32"
        variants={ANIMATION_VARIANTS.container}
        initial="hidden"
        animate="show"
      >
        <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8">

          {/* Status Badge */}
          <motion.div variants={ANIMATION_VARIANTS.fadeScale}>
            <StatusBadge />
          </motion.div>

          {/* Main Heading */}
          <motion.div
            variants={ANIMATION_VARIANTS.fadeUp}
            className="space-y-2 sm:space-y-3"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight">
              <span className="block text-white/90 mb-1 sm:mb-2">Olá, sou o</span>
              <span className="block bg-linear-to-r from-[#00ff9d] via-emerald-400 to-[#00ff9d] bg-clip-text text-transparent animate-gradient">
                Gustavo Rodrigues
              </span>
            </h1>
          </motion.div>

          {/* Role Badge */}
          <motion.div
            variants={ANIMATION_VARIANTS.fadeUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <Code2 className="w-4 h-4 text-[#00ff9d]" />
            <span className="text-sm sm:text-base font-medium text-zinc-300">
              Frontend Developer
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={ANIMATION_VARIANTS.fadeUp}
            className="text-zinc-400 text-sm sm:text-base lg:text-lg max-w-xl mx-auto leading-relaxed px-4"
          >
            Criando experiências digitais únicas e interfaces modernas.
            Especializado em React, Next.js e design systems.
          </motion.p>

          {/* CTA Section */}
          <motion.div
            variants={ANIMATION_VARIANTS.fadeUp}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto pt-2"
          >
            <CVButton />

            <div className="flex items-center gap-2.5">
              {SOCIAL_LINKS.map((link) => (
                <SocialButton key={link.name} link={link} />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default memo(Hero);