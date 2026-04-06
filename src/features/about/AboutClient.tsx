"use client";

import { m as motion } from "framer-motion";
import { MapPin, GraduationCap, Code2, User } from "lucide-react";
import { headerVariants, cardVariants, containerVariants } from "@/core/lib/animation-variants";

import { ReactNode } from "react";

interface AboutClientProps {
  codeSnippet: ReactNode;
}

export default function AboutClient({ codeSnippet }: AboutClientProps) {
  return (
    <section id="about" className="relative py-20 px-4 sm:px-6">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-glow rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-glow rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* HEADER */}
        <motion.div
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/5 border border-brand/20 mb-6 backdrop-blur-sm">
            <User size={14} className="text-brand" />
            <span className="text-brand text-sm font-medium tracking-wide">
              Sobre Mim
            </span>
          </div>

          {/* Título com Gradiente */}
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-text-main">Quem é </span>
            <span className="bg-linear-to-r from-brand to-[#00ffcc] bg-clip-text text-transparent">
              Gustavo?
            </span>
          </h2>

          {/* Descrição (Adicionada para consistência) */}
          <p className="text-text-muted max-w-2xl mx-auto">
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
            className="md:col-span-2 relative rounded-3xl p-8 border border-border bg-surface backdrop-blur-md overflow-hidden flex flex-col justify-center group hover:border-brand/30 transition-colors duration-500"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <h3 className="text-2xl font-bold text-text-main mb-4">
              Desenvolvedor Frontend apaixonado por resolver problemas reais.
            </h3>
            <p className="text-text-muted leading-relaxed text-lg">
              Olá! Sou Gustavo Rodrigues de Aguiar. Meu foco é transformar
              ideias complexas em software elegante e performático. Combinando
              criatividade técnica com uma base sólida em engenharia.
            </p>
          </motion.div>

          {/* 2. CARD LOCALIZAÇÃO */}
          <motion.div
            variants={cardVariants}
            className="relative rounded-3xl p-6 border border-border bg-surface backdrop-blur-md overflow-hidden flex flex-col items-center justify-center text-center group hover:border-brand/30 transition-colors duration-500"
          >
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(var(--text-muted)_1px,transparent_1px)] bg-size-[16px_16px]" />

            <div className="relative w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center mb-4 text-brand border border-brand/20 group-hover:scale-110 transition-transform duration-300">
              <MapPin size={32} />
            </div>

            <h4 className="text-xl font-bold text-text-main">Manaus, AM</h4>
            <p className="text-text-muted text-sm mt-1">Brasil</p>
            <span className="mt-3 text-[10px] uppercase tracking-widest text-brand/60 font-mono border border-brand/20 px-2 py-1 rounded-md">
              GMT-4
            </span>
          </motion.div>

          {/* 3. CARD FORMAÇÃO */}
          <motion.div
            variants={cardVariants}
            className="relative rounded-3xl p-6 border border-border bg-surface backdrop-blur-md overflow-hidden flex flex-col justify-between group hover:border-brand/30 transition-colors duration-500"
          >
            <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity text-text-muted group-hover:text-brand">
              <Code2
                size={40}
              />
            </div>

            <div className="w-12 h-12 rounded-lg bg-background flex items-center justify-center mb-4 text-text-main border border-border">
              <GraduationCap size={24} />
            </div>

            <div>
              <h4 className="text-lg font-bold text-text-main leading-tight mb-2">
                Análise e Desenv. de Sistemas
              </h4>
              <p className="text-text-muted text-sm">
                Graduado e focado em arquitetura de software e boas práticas.
              </p>
            </div>
          </motion.div>

          {/* 4. OVERRIDE DO CARD VISUAL */}
          <motion.div
            variants={cardVariants}
            className="md:col-span-2 relative rounded-3xl bg-transparent overflow-hidden min-h-[250px] group flex"
          >
            {/* Wrapper Esquerdo do CodeSnippet Slot - Ocupando o card inteiro */}
            <div className="w-full h-full relative z-10 transition-transform duration-500 group-hover:scale-[1.02]">
              {codeSnippet}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
