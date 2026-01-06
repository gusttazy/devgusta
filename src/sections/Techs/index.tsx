"use client";

import { motion } from "framer-motion";
import { techGroups } from "@/data/tech-groups";

export default function Techs() {
  return (
    <section id="techs" className="relative py-20 px-4 sm:px-6 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-auto">
          {techGroups.map((group, index) => {
            const GroupIcon = group.icon;

            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`
                  relative rounded-3xl p-6 flex flex-col overflow-hidden
                  border border-white/10
                  /* EFEITO GLASSMORPHISM AQUI */
                  bg-white/5 backdrop-blur-md shadow-lg
                  transition-all duration-300 group
                  hover:bg-white/8 hover:border-[#00ff9d]/30
                  hover:shadow-[0_8px_32px_0_rgba(0,255,157,0.1)]
                  ${group.colSpan} ${group.rowSpan || ""}
                `}
              >
                {/* Noise texture sutil para realismo do vidro (opcional, visual cleaner sem ele) */}
                <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Card Header */}
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

                  {/* Tech Grid */}
                  <div className="grid grid-cols-2 gap-3 mt-auto">
                    {group.techs.map((tech) => {
                      const Icon = tech.icon;
                      return (
                        <div
                          key={tech.name}
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
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}