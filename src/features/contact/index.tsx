"use client";

import type { CSSProperties } from "react";
import { m as motion } from "framer-motion";
import { Mail, Sparkles, ArrowUpRight } from "lucide-react";
import {
  headerVariants,
  cardVariants,
  containerVariants,
} from "@/core/lib/animation-variants";

/* ─── SVG Icons das Redes ─── */

const WhatsAppIcon = ({ className, style }: { className?: string; style?: CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const LinkedInIcon = ({ className, style }: { className?: string; style?: CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const InstagramIcon = ({ className, style }: { className?: string; style?: CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.88 0 1.441 1.441 0 012.88 0z" />
  </svg>
);

const GitHubIcon = ({ className, style }: { className?: string; style?: CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const DiscordIcon = ({ className, style }: { className?: string; style?: CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
  </svg>
);

/* ─── Dados dos Contatos ─── */

// Cards "primários" — ocupam mais espaço no bento grid
const PRIMARY_LINKS = [
  {
    label: "WhatsApp",
    description: "Me envie uma mensagem e vamos conversar sobre como posso ajudar a tirar sua ideia do papel.",
    href: "https://wa.me/5592992279956",
    icon: WhatsAppIcon,
    color: "#25D366",
    cta: "Iniciar conversa",
  },
  {
    label: "Email",
    description: "Prefere algo mais formal? Me envie um e-mail detalhando seu projeto ou proposta.",
    href: "mailto:gustavoaguiar0916@gmail.com",
    icon: Mail,
    color: "", // usa brand do tema
    isBrand: true,
    cta: "Enviar e-mail",
    subtitle: "gustavoaguiar0916@gmail.com",
  },
];

// Cards "secundários" — compactos, lado a lado
const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    description: "Conecte-se profissionalmente",
    href: "https://www.linkedin.com/in/gustaguiar/",
    icon: LinkedInIcon,
    color: "#0A66C2",
  },
  {
    label: "Instagram",
    description: "@gusttazy",
    href: "https://www.instagram.com/gusttazy/",
    icon: InstagramIcon,
    color: "#E4405F",
  },
  {
    label: "GitHub",
    description: "Confira meus projetos",
    href: "https://github.com/gusttazy",
    icon: GitHubIcon,
    color: "#8B5CF6",
  },
  {
    label: "Discord",
    description: "Trocar uma ideia",
    href: "https://discord.com/users/815705199817129994",
    icon: DiscordIcon,
    color: "#5865F2",
  },
];

/* ─── Componente ─── */

export default function Contact() {
  return (
    <section id="contato" className="relative py-20 sm:py-32 px-4 sm:px-6">
      {/* Glow de fundo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-glow rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-5xl mx-auto">
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
            Escolha seu canal preferido e vamos conversar.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5"
        >
          {/* ── Cards Primários (WhatsApp & Email) ── */}
          {PRIMARY_LINKS.map(({ label, description, href, icon: Icon, color, isBrand, cta, subtitle }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              variants={cardVariants}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="group relative rounded-3xl p-7 sm:p-8 border border-border bg-surface overflow-hidden transition-[border-color,box-shadow] duration-500 hover:shadow-xl flex flex-col justify-between min-h-[220px]"
            >
              {/* Glow de fundo do card */}
              <div
                className="absolute -top-20 -right-20 w-60 h-60 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: isBrand ? "var(--brand)" : color,
                  opacity: undefined,
                }}
              />
              <div
                className="absolute -top-20 -right-20 w-60 h-60 rounded-full blur-[80px] opacity-0 group-hover:opacity-[0.15] transition-opacity duration-700 pointer-events-none"
                style={{
                  background: isBrand ? "var(--brand)" : color,
                }}
              />

              {/* Borda accent no hover */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow: `inset 0 0 0 1px ${isBrand ? "var(--brand)" : color}50`,
                }}
              />

              <div className="relative">
                {/* Ícone + Arrow */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg"
                    style={{
                      backgroundColor: `${isBrand ? "var(--brand)" : color}15`,
                      boxShadow: undefined,
                    }}
                  >
                    <Icon
                      size={26}
                      className="w-[26px] h-[26px] transition-colors duration-300"
                      style={{ color: isBrand ? "var(--brand)" : color }}
                    />
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="text-text-muted/30 group-hover:text-text-main transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>

                {/* Texto */}
                <h3 className="text-xl font-bold text-text-main mb-2">
                  {label}
                </h3>
                {subtitle && (
                  <p className="text-xs font-mono text-text-muted/60 mb-2 truncate">
                    {subtitle}
                  </p>
                )}
                <p className="text-sm text-text-muted leading-relaxed">
                  {description}
                </p>
              </div>

              {/* CTA pill */}
              <div className="relative mt-6">
                <span
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide px-4 py-2 rounded-full transition-all duration-500 border"
                  style={{
                    color: isBrand ? "var(--brand)" : color,
                    borderColor: `${isBrand ? "var(--brand)" : color}30`,
                    backgroundColor: `${isBrand ? "var(--brand)" : color}08`,
                  }}
                >
                  {cta}
                  <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </motion.a>
          ))}

          {/* ── Cards Sociais (4 em row dentro de um sub-grid) ── */}
          <motion.div
            variants={cardVariants}
            className="md:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5"
          >
            {SOCIAL_LINKS.map(({ label, description, href, icon: Icon, color }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.97 }}
                className="group relative rounded-2xl p-5 sm:p-6 border border-border bg-surface overflow-hidden transition-[border-color,box-shadow] duration-500 hover:shadow-lg flex flex-col items-center text-center"
              >
                {/* Glow no hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 40%, ${color}18, transparent 70%)`,
                  }}
                />

                {/* Borda accent no hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    boxShadow: `inset 0 0 0 1px ${color}45`,
                  }}
                />

                {/* Ícone */}
                <div className="relative">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 group-hover:shadow-md"
                    style={{ backgroundColor: `${color}12` }}
                  >
                    <Icon
                      className="w-[22px] h-[22px] transition-colors duration-300"
                      style={{ color }}
                    />
                  </div>
                </div>

                {/* Texto */}
                <h3 className="relative text-sm font-semibold text-text-main mb-1">
                  {label}
                </h3>
                <p className="relative text-xs text-text-muted leading-relaxed">
                  {description}
                </p>

                {/* Arrow sutil */}
                <ArrowUpRight
                  size={14}
                  className="absolute top-4 right-4 text-text-muted/0 group-hover:text-text-muted/60 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
