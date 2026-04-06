"use client";

import { memo } from "react";
import { Download, Sparkles, Code2 } from "lucide-react";
import { m as motion } from "framer-motion";
import { cardVariants, containerVariants } from "@/core/lib/animation-variants";

// --- Componente Principal ---

const Hero = () => (
  // Esse é o wrapper principal do Hero que define que ele deve ocupar pelo menos 100% da altura da tela (min-h-screen)
  <section
    id="inicio"
    className="relative min-h-screen flex items-center justify-center"
  >
    {/* Esses glows no fundo são puramente estéticos, dão uma cara de "aplicativo premium" */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-glow rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-glow rounded-full blur-[120px]" />
    </div>
    
    {/* Englobando todo o conteúdo textual em um motion.div (que o alias converte pro Lazy m.div). 
        Usando containerVariants ele aninha os delays das crianças animando elas em "escadinha". */}
    <motion.div
      className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8">
        
        {/* Status Badge - Aquele selinho piscando avisando que tô disponível */}
        <motion.div
          variants={cardVariants}
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-linear-to-r from-brand/10 to-brand/5 border border-brand/20 backdrop-blur-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-brand animate-pulse" />
          <span className="text-brand text-xs sm:text-sm font-semibold tracking-wide">
            Disponível para projetos
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.div variants={cardVariants} className="space-y-2 sm:space-y-3">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
            <span className="block text-text-main mb-1 sm:mb-2">
              Olá, sou o
            </span>
            <span className="block bg-linear-to-r from-brand via-brand/80 to-brand bg-clip-text text-transparent pb-2">
              Gustavo Rodrigues
            </span>
          </h1>
        </motion.div>

        {/* Role Badge */}
        <motion.div
          variants={cardVariants}
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-surface border border-border backdrop-blur-sm"
        >
          <Code2 className="w-4 h-4 text-brand" />
          <span className="text-sm sm:text-base font-medium text-text-muted">
            Desenvolvedor Frontend
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={cardVariants}
          className="text-text-muted text-sm sm:text-base lg:text-lg max-w-xl mx-auto leading-loose px-4"
        >
          Criando experiências digitais únicas e interfaces modernas.
          Especializado em React, Next.js e design systems.
        </motion.p>

        {/* CTA — Download CV */}
        <motion.div variants={cardVariants} className="pt-2">
          <motion.a
            href="/curriculo.pdf"
            download="Gustavo_Aguiar_CV.pdf"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-brand text-white dark:text-black rounded-xl font-bold text-sm sm:text-base overflow-hidden shadow-lg shadow-brand/20 hover:shadow-xl hover:shadow-brand/30 transition-all duration-300"
          >
            <span className="absolute inset-0 bg-linear-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <Download className="w-4 h-4 relative z-10 transition-transform group-hover:-rotate-6" />
            <span className="relative z-10">Baixar Currículo</span>
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default memo(Hero);
