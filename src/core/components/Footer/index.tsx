"use client";

import { memo } from "react";
import { m as motion } from "framer-motion";

const Footer = memo(() => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="w-full py-6 sm:py-8 px-4 text-center border-t border-border bg-background/50 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-text-muted text-sm tracking-wide">
        © {currentYear} DevGusta. Todos os direitos reservados.
      </p>
    </motion.footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
