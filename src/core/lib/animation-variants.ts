// Variantes de animação compartilhadas entre seções
// Padrão unificado para manter consistência visual em todo o projeto

export const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95, willChange: "transform, opacity" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    willChange: "transform, opacity",
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};
