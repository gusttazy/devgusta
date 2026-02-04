"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Code2, ArrowUpRight, User } from "lucide-react";

// Variantes de animação - Padrão Projects
const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export default function About() {
  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.div
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00ff9d]/5 border border-[#00ff9d]/20 mb-6 backdrop-blur-sm">
            <User size={14} className="text-[#00ff9d]" />
            <span className="text-[#00ff9d] text-sm font-medium tracking-wide">
              Sobre Mim
            </span>
          </div>

          {/* Título com Gradiente */}
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-white">Quem é </span>
            <span className="bg-linear-to-r from-[#00ff9d] to-[#00ffcc] bg-clip-text text-transparent">
              Gustavo?
            </span>
          </h2>

          {/* Descrição (Adicionada para consistência) */}
          <p className="text-white/70 max-w-2xl mx-auto">
            Um breve resumo sobre minha trajetória profissional, acadêmica e
            pessoal.
          </p>
        </motion.div>

        {/* BENTO GRID LAYOUT */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* 1. CARD BIO */}
          <motion.div
            variants={cardVariants}
            className="md:col-span-2 relative rounded-3xl p-8 border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden flex flex-col justify-center group hover:border-[#00ff9d]/30 transition-colors duration-500"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00ff9d]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <h3 className="text-2xl font-bold text-white mb-4">
              Desenvolvedor Frontend apaixonado por resolver problemas reais.
            </h3>
            <p className="text-zinc-400 leading-relaxed mb-6 text-lg">
              Olá! Sou Gustavo Rodrigues de Aguiar. Meu foco é transformar
              ideias complexas em software elegante e performático. Combinando
              criatividade técnica com uma base sólida em engenharia.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/5592992279956"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00ff9d] text-black font-semibold hover:bg-[#00ff9d]/90 transition-colors"
              >
                Vamos conversar
                <ArrowUpRight size={18} />
              </a>
              <div className="text-zinc-500 text-sm font-mono">
                {/* 21 anos */}
              </div>
            </div>
          </motion.div>

          {/* 2. CARD LOCALIZAÇÃO */}
          <motion.div
            variants={cardVariants}
            className="relative rounded-3xl p-6 border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden flex flex-col items-center justify-center text-center group hover:border-[#00ff9d]/30 transition-colors duration-500"
          >
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[16px_16px]" />

            <div className="relative w-16 h-16 rounded-full bg-[#00ff9d]/10 flex items-center justify-center mb-4 text-[#00ff9d] border border-[#00ff9d]/20 group-hover:scale-110 transition-transform duration-300">
              <MapPin size={32} />
            </div>

            <h4 className="text-xl font-bold text-white">Manaus, AM</h4>
            <p className="text-zinc-400 text-sm mt-1">Brasil</p>
            <span className="mt-3 text-[10px] uppercase tracking-widest text-[#00ff9d]/60 font-mono border border-[#00ff9d]/20 px-2 py-1 rounded-md">
              GMT-4
            </span>
          </motion.div>

          {/* 3. CARD FORMAÇÃO */}
          <motion.div
            variants={cardVariants}
            className="relative rounded-3xl p-6 border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden flex flex-col justify-between group hover:border-[#00ff9d]/30 transition-colors duration-500"
          >
            <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
              <Code2
                className="text-zinc-600 group-hover:text-[#00ff9d]"
                size={40}
              />
            </div>

            <div className="w-12 h-12 rounded-lg bg-zinc-800/50 flex items-center justify-center mb-4 text-white border border-white/5">
              <GraduationCap size={24} />
            </div>

            <div>
              <h4 className="text-lg font-bold text-white leading-tight mb-2">
                Análise e Desenv. de Sistemas
              </h4>
              <p className="text-zinc-400 text-sm">
                Graduado e focado em arquitetura de software e boas práticas.
              </p>
            </div>
          </motion.div>

          {/* 4. CARD VISUAL */}
          <motion.div
            variants={cardVariants}
            className="md:col-span-2 relative rounded-3xl border border-white/10 bg-zinc-900 overflow-hidden min-h-[250px] group"
          >
            {/* Background Image Placeholder - Substitua pela sua foto */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-linear-to-r from-zinc-900 via-zinc-900/80 to-transparent z-10" />

            <div className="absolute bottom-0 left-0 p-8 z-20 max-w-lg">
              <h4 className="text-xl font-bold text-white mb-2">
                Evolução Constante
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed">
                &quot;A tecnologia é o meio, a solução é o fim. Busco sempre
                criar experiências que impactem positivamente a vida das pessoas
                através do código.&quot;
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
