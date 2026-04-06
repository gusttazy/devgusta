import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/core/components/ThemeProvider";
import SmoothScroll from "@/core/components/SmoothScroll";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "DevGusta — Portfólio de Gustavo Rodrigues",
  description:
    "Portfólio profissional de Gustavo Rodrigues de Aguiar. Desenvolvedor Frontend especializado em React, Next.js e design systems. Criando experiências digitais únicas.",
  keywords: [
    "desenvolvedor frontend",
    "react",
    "next.js",
    "typescript",
    "portfólio",
    "gustavo rodrigues",
    "devgusta",
  ],
  authors: [{ name: "Gustavo Rodrigues de Aguiar" }],
  openGraph: {
    title: "DevGusta — Portfólio de Gustavo Rodrigues",
    description:
      "Criando experiências digitais únicas e interfaces modernas. Especializado em React, Next.js e design systems.",
    url: "https://gusttazy.vercel.app",
    siteName: "DevGusta",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevGusta — Portfólio de Gustavo Rodrigues",
    description: "Criando experiências digitais únicas e interfaces modernas.",
    creator: "@gusttazy",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://gusttazy.vercel.app"),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#121212",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-background text-text-main antialiased transition-colors duration-300`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
