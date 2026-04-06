"use client";

import { memo } from "react";
import { m as motion } from "framer-motion";
import { techGroups, TechGroup, TechItem } from "./tech-groups";
import clsx from "clsx";
import { headerVariants, cardVariants, containerVariants } from "@/core/lib/animation-variants";

// Subcomponente de Item Individual
const TechBadge = memo(({ tech }: { tech: TechItem }) => {
  const Icon = tech.icon;
  return (
    <div
      className="
        flex items-center gap-3 px-3 py-2.5 rounded-xl 
        bg-surface border border-border 
        hover:bg-brand/10 hover:border-brand/30 
        hover:scale-[1.02] transition-all duration-300 group/item
        cursor-default
      "
    >
      {Icon && (
        <div className="shrink-0">
          <Icon
            size={18}
            className="text-text-muted group-hover/item:text-brand transition-colors duration-300"
          />
        </div>
      )}
      <span className="text-sm font-medium text-text-muted group-hover/item:text-text-main truncate">
        {tech.name}
      </span>
    </div>
  );
});

TechBadge.displayName = "TechBadge";

// Subcomponente de Cartão de Grupo
const TechCard = memo(({ group }: { group: TechGroup }) => {
  const GroupIcon = group.icon;

  return (
    <motion.div
      variants={cardVariants}
      className={clsx(
        "relative rounded-3xl p-6 flex flex-col overflow-hidden",
        "border border-border bg-surface backdrop-blur-md shadow-lg",
        "transition-all duration-300 group hover:border-brand/30",
        "hover:shadow-[0_8px_32px_0_var(--glow)]",
        group.colSpan,
        group.rowSpan,
      )}
    >
      {/* Texture Layer */}
      <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent pointer-events-none opacity-50 dark:opacity-100" />

      <div className="relative z-10 flex flex-col h-full">
        {/* Header do Card */}
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 rounded-2xl bg-background border border-border text-brand shadow-inner">
            <GroupIcon size={22} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-text-main tracking-tight">
              {group.title}
            </h3>
            <p className="text-text-muted text-xs font-medium mt-0.5">
              {group.description}
            </p>
          </div>
        </div>

        {/* Lista de Itens */}
        <div
          className={clsx(
            "gap-3 mt-auto",
            group.id === "mobile" ? "flex flex-col" : "grid grid-cols-2",
          )}
        >
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
    <section
      id="techs"
      className="relative py-20 px-4 sm:px-6 bg-transparent"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-glow rounded-full blur-[130px]" />
        <div className="absolute bottom-1/3 left-0 w-[350px] h-[350px] bg-glow rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* HEADER DA SEÇÃO */}
        <motion.div
          className="text-center mb-20"
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/5 border border-brand/20 mb-6 backdrop-blur-sm">
            <span className="text-brand text-sm font-medium tracking-wide">
              Stack Tecnológico
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-text-main">Tecnologias & </span>
            <span className="bg-linear-to-r from-brand to-[#00ffcc] bg-clip-text text-transparent">
              Ferramentas
            </span>
          </h2>

          <p className="text-text-muted max-w-2xl mx-auto">
            Organização da minha stack por responsabilidade e contexto de uso.
          </p>
        </motion.div>

        {/* GRID PRINCIPAL */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {techGroups.map((group) => (
            <TechCard key={group.id} group={group} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
