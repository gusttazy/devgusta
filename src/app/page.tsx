import dynamic from "next/dynamic";
import { Suspense } from "react";
import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import ClientNavButton from "@/components/NavButton/ClientNavButton";

// Lazy loading para componentes abaixo da dobra
const About = dynamic(() => import("@/sections/About"));
const Techs = dynamic(() => import("@/sections/Techs"));
const Projects = dynamic(() => import("@/sections/Projects"));
const Contact = dynamic(() => import("@/sections/Contact"));
const Footer = dynamic(() => import("@/sections/Footer"));

export default function Home() {
  return (
    <div className="min-h-screen text-white overflow-x-hidden animate-fadeIn">
      <header className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </header>

      <main className="pt-14">
        <Hero />

        <Suspense fallback={null}>
          <About />
        </Suspense>

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
