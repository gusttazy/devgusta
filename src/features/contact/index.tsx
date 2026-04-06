"use client";

import { m as motion } from "framer-motion";
import { MessageCircle, ArrowUpRight, Mail, Sparkles } from "lucide-react";
import {
  headerVariants,
  cardVariants,
  containerVariants,
} from "@/core/lib/animation-variants";

const CONTACT_LINKS = [
  {
    label: "gustavoaguiar0916@gmail.com",
    href: "mailto:gustavoaguiar0916@gmail.com",
    icon: Mail,
  },
];

export default function Contact() {
  return (
    <section
      id="contato"
      className="relative py-20 sm:py-32 px-4 sm:px-6"
    >
      {/* Glow de fundo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-glow rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/5 border border-brand/20 mb-6 backdrop-blur-sm">
            <Sparkles size={14} className="text-brand" />
            <span className="text-brand text-sm font-medium tracking-wide">
              Contato
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            <span className="text-text-main">Vamos trabalhar </span>
            <span className="bg-linear-to-r from-brand to-[#00ffcc] bg-clip-text text-transparent">
              juntos?
            </span>
          </h2>

          <p className="text-text-muted text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Estou disponível para novos projetos, colaborações e oportunidades.
            Vamos transformar ideias em realidade.
          </p>
        </motion.div>

        {/* Card Principal */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6"
        >
          {/* CTA Card */}
          <motion.div
            variants={cardVariants}
            className="relative rounded-3xl p-8 sm:p-12 border border-border bg-surface backdrop-blur-md overflow-hidden group hover:border-brand/20 transition-colors duration-500"
          >
            {/* Decoração de fundo */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-glow rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-glow rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />

            <div className="relative flex flex-col items-center text-center space-y-8">
              {/* Ícone destaque */}
              <div className="w-20 h-20 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <MessageCircle className="w-9 h-9 text-brand" />
              </div>

              {/* Texto */}
              <div className="space-y-3 max-w-md">
                <h3 className="text-2xl sm:text-3xl font-bold text-text-main">
                  Tem um projeto em mente?
                </h3>
                <p className="text-text-muted text-base leading-relaxed">
                  Me envie uma mensagem no WhatsApp e vamos conversar sobre como
                  posso ajudar a tirar sua ideia do papel.
                </p>
              </div>

              {/* Botão WhatsApp */}
              <motion.a
                href="https://wa.me/5592992279956"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-brand text-white dark:text-black rounded-2xl font-bold text-base sm:text-lg shadow-lg shadow-brand/20 hover:shadow-xl hover:shadow-brand/30 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                Conversar no WhatsApp
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>
            </div>
          </motion.div>

          {/* E-mail alternativo */}
          <motion.div
            variants={cardVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6"
          >
            <span className="text-text-muted text-sm">Ou se preferir:</span>
            {CONTACT_LINKS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface border border-border text-text-muted text-sm font-medium hover:text-brand hover:border-brand/30 hover:bg-brand/5 transition-all duration-300"
              >
                <Icon size={16} />
                {label}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
