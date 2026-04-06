"use client";

import { useEffect, ReactNode } from "react";
import Lenis from "lenis";
import { LazyMotion, domAnimation } from "framer-motion";

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    // Instanciei o Lenis aqui pra quebrar aquele scroll travado padrão do navegador.
    // Isso dá aquela sensação de "site gringo / awwwards" quando rola a tela.
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // Loop de animação que gruda o scroll na taxa de atualização do monitor (idealmente 60fps+)
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Joguei a instância no window pra eu conseguir usar o lenis.scrollTo() em outros lugares,
    // tipo nos botões da Navbar. Dei cast de 'any' pra não apanhar do Typescript kkk
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).lenis = lenis;

    return () => {
      // Cleanup padrão pra não matar a memória da galera se desmontar
      lenis.destroy();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).lenis = null;
    };
  }, []);

  return (
    // Englobei tudo no LazyMotion domAnimation pro js pesado das animações não descer no primeiro load
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
