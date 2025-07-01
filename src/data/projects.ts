import { Project } from "@/components/ProjectCard";

// Lista de projetos exibidos na seção
export const projects: Project[] = [
  {
    title: "Darker UI",
    description:
      "Uma landing page moderna e elegante para SaaS, desenvolvida com as tecnologias mais recentes do ecossistema React.",
    image: "/images/darkerUi.png",
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
    title: "MyNotes",
    description:
      "Um aplicativo móvel inovador de anotações que combina funcionalidades de reconhecimento de voz e comandos por voz.",
    image: "/images/mynotes.png",
    technologies: ["React Native", "TypeScript", "Styled Components", "Expo"],
    previewUrl: "",
    repositoryUrl: "https://github.com/gusttazy/mynotes",
  },
  {
    title: "Itá Marketplace",
    description:
      "Uma plataforma de e-commerce especializada em artesanato indígena, desenvolvida com foco em responsividade e experiência do usuário.",
    image: "/images/itamarketplace.png",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    previewUrl: "https://ita-marketplace.vercel.app/",
    repositoryUrl: "https://gusttazy.github.io/ita-marketplace/",
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
];
