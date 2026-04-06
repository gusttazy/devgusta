import {
  Layout, Smartphone, Server, Workflow,
  CodeXml, Palette, Braces, FileCode2, Atom,
  Globe, Wind, Grid, Hexagon, Terminal,
  Database, Boxes, Container, GitBranch,
  Send, Figma, Zap,
} from "lucide-react";
import type { ElementType } from "react";

export type TechItem = {
  name: string;
  icon?: ElementType;
};

export type TechGroup = {
  id: string;
  title: string;
  description: string;
  icon: ElementType;
  colSpan: string;
  rowSpan?: string;
  techs: TechItem[];
};

export const techGroups: TechGroup[] = [
  {
    id: "frontend",
    title: "Engenharia Frontend",
    description: "Interfaces imersivas e responsivas.",
    icon: Layout,
    colSpan: "md:col-span-2 lg:col-span-2",
    rowSpan: "md:row-span-2",
    techs: [
      { name: "HTML5", icon: CodeXml },
      { name: "CSS3", icon: Palette },
      { name: "JavaScript", icon: Braces },
      { name: "TypeScript", icon: FileCode2 },
      { name: "React", icon: Atom },
      { name: "Next.js", icon: Globe },
      { name: "Tailwind", icon: Wind },
      { name: "Bootstrap", icon: Grid },
    ],
  },
  {
    id: "mobile",
    title: "Desenvolvimento Mobile",
    description: "Apps nativos e multiplataforma.",
    icon: Smartphone,
    colSpan: "md:col-span-1 lg:col-span-1",
    techs: [
      { name: "React Native", icon: Smartphone },
      { name: "Expo", icon: Zap },
    ],
  },
  {
    id: "backend",
    title: "Backend & Banco de Dados",
    description: "API, dados e lógica de servidor.",
    icon: Server,
    colSpan: "md:col-span-1 lg:col-span-1",
    techs: [
      { name: "Node.js", icon: Hexagon },
      { name: "Python", icon: Terminal },
      { name: "PostgreSQL", icon: Database },
      { name: "Supabase", icon: Boxes },
    ],
  },
  {
    id: "tools",
    title: "DevOps & Ferramentas",
    description: "Gerenciamento, design e deploy.",
    icon: Workflow,
    colSpan: "md:col-span-2 lg:col-span-2",
    techs: [
      { name: "Git", icon: GitBranch },
      { name: "Docker", icon: Container },
      { name: "Postman", icon: Send },
      { name: "Figma", icon: Figma },
    ],
  },
];