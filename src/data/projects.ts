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
    title: "Cadastro de Alunos",
    description:
      "Aplicação web para cadastro, listagem e remoção de alunos. Frontend em React e backend em Node.js/Express com banco SQLite.",
    image: "/images/cadastroalunos.png",
    technologies: ["React", "Vite", "Node.js", "Express", "SQLite"],
    previewUrl: "",
    repositoryUrl: "https://github.com/gusttazy/fullstack-app",
  },
  {
    title: "Darker UI",
    description:
      "Uma landing page moderna e elegante para SaaS, desenvolvida com as tecnologias mais recentes do ecossistema React.",
    image: "/images/darker-ui.png",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    previewUrl: "https://darker-ui.vercel.app/",
    repositoryUrl: "https://github.com/gusttazy/darker-ui",
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
