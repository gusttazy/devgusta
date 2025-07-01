
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import ClientNavButton from "@/components/NavButton/ClientNavButton";

// Lazy load components pesados e não essenciais para o first paint
const AnimatedBackground = dynamic(() => import("@/components/AnimatedBackground"));
const Techs = dynamic(() => import("@/sections/Techs"));
const Projects = dynamic(() => import("@/sections/Projects"));
const Contact = dynamic(() => import("@/sections/Contact"));
const Footer = dynamic(() => import("@/sections/Footer"));

export default function App() {
  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      {/* Navbar fixa no topo */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      {/* Background animado com gradiente */}
      <Suspense fallback={null}>
        <AnimatedBackground />
      </Suspense>
      {/* Conteúdo principal com padding para compensar a navbar fixa */}
      <main className="pt-24">
        <Hero />
        <Suspense fallback={null}>
          <Techs />
        </Suspense>
        <Suspense fallback={null}>
          <Projects />
        </Suspense>
        <Suspense fallback={null}>
          <Contact />
        </Suspense>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </main>
      <ClientNavButton />
    </div>
  );
}
