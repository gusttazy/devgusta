import type { Metadata } from "next";
import { Lato, Dancing_Script } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import React from "react";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
  variable: "--font-lato",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-dancing",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DevGusta",
  description: "Bem-vindo ao meu portfólio!",
  icons: {
    icon: "/favicon.ico",
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
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta name="theme-color" content="#121212" />
      </head>
      <body
        className={clsx(
          lato.className,
          dancingScript.variable,
          "bg-[#121212] text-white antialiased",
        )}
      >
        {children}
      </body>
    </html>
  );
}
