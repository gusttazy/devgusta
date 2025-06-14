import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import React from "react";
import AppLoader from "../components/LoadingScreen/AppLoader";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: "DevGusta",
  description: "Bem-vindo ao meu portfólio!",
  icons: {
    icon: "/src/assets/icon.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#121212" />
      </head>
      <body className={clsx(montserrat.className, "bg-[#121212] text-white antialiased")}>  
        <AppLoader>{children}</AppLoader>
      </body>
    </html>
  );
}
