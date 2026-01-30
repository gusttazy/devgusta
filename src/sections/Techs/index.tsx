"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { techGroups, TechGroup, TechItem } from "@/data/tech-groups";
import clsx from "clsx";

// Variantes de animação para reutilização e performance
const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: delay * 0.1, duration: 0.5 },
  }),
};

// Subcomponente de Item Individual 
const TechBadge = memo(({ tech }: { tech: TechItem }) => {
  const Icon = tech.icon;
  return (
    <div
      className="
        flex items-center gap-3 px-3 py-2.5 rounded-xl 
        bg-black/20 border border-white/5 
        hover:bg-[#00ff9d]/20 hover:border-[#00ff9d]/30 
        hover:scale-[1.02] transition-all duration-300 group/item
        cursor-default
      "
    >
      {Icon && (
        <div className="shrink-0">
          <Icon
            size={18}
            className="text-zinc-500 group-hover/item:text-[#00ff9d] transition-colors duration-300"
          />
        </div>
      )}
      <span className="text-sm font-medium text-zinc-300 group-hover/item:text-white truncate">
        {tech.name}
      </span>
    </div>
  );
});

TechBadge.displayName = "TechBadge";

// Subcomponente de Cartão de Grupo
const TechCard = memo(({ group, index }: { group: TechGroup; index: number }) => {
  const GroupIcon = group.icon;

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeUpVariants}
      className={clsx(
        "relative rounded-3xl p-6 flex flex-col overflow-hidden",
        "border border-white/10 bg-white/5 backdrop-blur-md shadow-lg",
        "transition-all duration-300 group hover:bg-white/8 hover:border-[#00ff9d]/30",
        "hover:shadow-[0_8px_32px_0_rgba(0,255,157,0.1)]",
        group.colSpan,
        group.rowSpan
      )}
    >
      {/* Texture Layer */}
      <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent pointer-events-none" />

      <div className="relative z-10 flex flex-col h-full">
        {/* Header do Card */}
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 rounded-2xl bg-black/40 border border-white/10 text-[#00ff9d] shadow-inner">
            <GroupIcon size={22} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white tracking-tight">
              {group.title}
            </h3>
            <p className="text-zinc-400 text-xs font-medium mt-0.5">
              {group.description}
            </p>
          </div>
        </div>

        {/* Lista de Itens */}
        <div className={clsx(
          "gap-3 mt-auto",
          group.id === "mobile" ? "flex flex-col" : "grid grid-cols-2"
        )}>
          {group.techs.map((tech) => (
            <TechBadge key={tech.name} tech={tech} />
          ))}
        </div>
      </div>
    </motion.div>
  );
});

TechCard.displayName = "TechCard";

export default function Techs() {
  return (
    <section id="techs" className="relative py-20 px-4 sm:px-6 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* HEADER DA SEÇÃO */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00ff9d]/5 border border-[#00ff9d]/20 mb-6 backdrop-blur-sm">
            <span className="text-[#00ff9d] text-sm font-medium tracking-wide">
              Stack Tecnológico
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-white">Tecnologias & </span>
            <span className="bg-linear-to-r from-[#00ff9d] to-[#00ffcc] bg-clip-text text-transparent">
              Ferramentas
            </span>
          </h2>

          <p className="text-white/70 max-w-2xl mx-auto">
            Organização da minha stack por responsabilidade e contexto de uso.
          </p>
        </motion.div>

        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-auto">
          {techGroups.map((group, index) => (
            <TechCard key={group.id} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}