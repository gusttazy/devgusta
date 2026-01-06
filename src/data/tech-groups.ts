import { Layout, Smartphone, Server, Workflow } from "lucide-react";
import { 
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, 
  SiTailwindcss, SiNextdotjs, SiBootstrap, SiNodedotjs, 
  SiPython, SiPostgresql, SiSupabase, SiExpo, 
  SiDocker, SiGit, SiPostman, SiFigma 
} from "react-icons/si";

export type TechItem = {
  name: string;
  icon?: any;
};

export type TechGroup = {
  id: string;
  title: string;
  description: string;
  icon: any;
  colSpan: string;
  rowSpan?: string;
  techs: TechItem[];
};

export const techGroups: TechGroup[] = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    description: "Interfaces imersivas e responsivas.",
    icon: Layout,
    colSpan: "md:col-span-2 lg:col-span-2",
    rowSpan: "md:row-span-2",
    techs: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
    ],
  },
  {
    id: "mobile",
    title: "Mobile Development",
    description: "Apps nativos e cross-platform.",
    icon: Smartphone,
    colSpan: "md:col-span-1 lg:col-span-1",
    techs: [
      { name: "React Native", icon: SiReact },
      { name: "Expo", icon: SiExpo },
    ],
  },
  {
    id: "backend",
    title: "Backend & Database",
    description: "API, dados e lógica de servidor.",
    icon: Server,
    colSpan: "md:col-span-1 lg:col-span-1",
    techs: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Python", icon: SiPython },
      { name: "PostgreSQL", icon: SiPostgresql }, 
      { name: "Supabase", icon: SiSupabase },
    ],
  },
  {
    id: "tools",
    title: "DevOps & Tools",
    description: "Gerenciamento, design e deploy.",
    icon: Workflow,
    colSpan: "md:col-span-2 lg:col-span-2", 
    techs: [
      { name: "Git", icon: SiGit },
      { name: "Docker", icon: SiDocker },
      { name: "Postman", icon: SiPostman },
      { name: "Figma", icon: SiFigma },
    ],
  },
];