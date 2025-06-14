// Componente de fundo animado com gradiente dinâmico
// Utiliza Framer Motion para animar entre diferentes gradientes

"use client";
import React from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

// Lista de gradientes usados no fundo
const GRADIENTS = [
  "linear-gradient(135deg, #000 0%, #000 50%, #000 100%)",
  "radial-gradient(circle at 50% 50%, rgba(0,255,157,0.05), transparent 50%)",
  "radial-gradient(circle at 20% 20%, rgba(0,255,157,0.03), transparent 40%)",
  "radial-gradient(circle at 80% 80%, rgba(0,255,157,0.03), transparent 40%)",
];

const AnimatedBackgroundComponent = function AnimatedBackground() {
  // Motion value para animar o índice do gradiente
  const gradientIndex = useMotionValue(0);
  // Transforma o índice em um valor de background CSS
  const background = useTransform(gradientIndex, [0, 1, 2, 3], GRADIENTS);

  useEffect(() => {
    // Animação infinita entre os gradientes
    const controls = animate(gradientIndex, 3, {
      duration: 12,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    });
    return controls.stop;
  }, [gradientIndex]);

  return (
    // Div fixa que cobre toda a tela e exibe o gradiente animado
    <motion.div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -10,
        width: "100vw",
        height: "100vh",
        background,
        pointerEvents: "none",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  );
};

export default React.memo(AnimatedBackgroundComponent);
