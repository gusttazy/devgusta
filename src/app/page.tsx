import dynamic from "next/dynamic";
import { Suspense } from "react";
import Hero from "@/features/hero";

// Above-the-fold: Navbar carregada estaticamente (fixa no topo, sempre visível)
import Navbar from "@/core/components/Navbar";

// Below-the-fold: lazy loading para reduzir o bundle inicial
const About = dynamic(() => import("@/features/about"));
const Techs = dynamic(() => import("@/features/techs"));
const Projects = dynamic(() => import("@/features/projects"));
const Contact = dynamic(() => import("@/features/contact"));
const Footer = dynamic(() => import("@/core/components/Footer"));

// NavButton: client-only (depende de window.scrollY, requer "use client" para ssr:false)
import ClientNavButton from "@/core/components/NavButton/ClientNavButton";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden animate-fadeIn transition-colors duration-300">
      <header className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </header>

      <main className="pt-14">
        <Hero />

        <Suspense>
          <About />
          <Techs />
          <Projects />
          <Contact />
        </Suspense>
      </main>

      <Suspense>
        <Footer />
      </Suspense>

      <ClientNavButton />
    </div>
  );
}
