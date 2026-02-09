import { Project } from "@/components/ProjectCard";

// Lista de projetos exibidos na seção
export const projects: Project[] = [
  {
    title: "charts2u",
    description:
      "Uma interface de dashboard moderna, responsiva e de alta performance, focada em visualização de dados eficiente.",
    image: "/images/charts2u.png",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Shadcn/UI",
      "TailwindCSS",
      "Recharts",
    ],
    previewUrl: "https://charts2u.vercel.app/",
    repositoryUrl: "https://github.com/gusttazy/charts2u",
  },
  {
    title: "Frostify",
    description:
      "Sistema moderno de gerenciamento de ordens de serviço para refrigeração e climatização, com interface intuitiva e responsiva.",
    image: "/images/frostify.png",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Shadcn/UI",
      "Tailwind CSS",
    ],
    previewUrl: "https://frostify-sys.vercel.app/",
    repositoryUrl: "https://github.com/gusttazy/frostify",
  },
  {
    title: "Itá Marketplace",
    description:
      "Uma plataforma de e-commerce especializada em artesanato indígena, desenvolvida com foco em responsividade e experiência do usuário.",
    image: "/images/itamarketplace.png",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    previewUrl: "https://gusttazy.github.io/ita-marketplace/",
    repositoryUrl: "https://github.com/gusttazy/ita-marketplace",
  },
];
