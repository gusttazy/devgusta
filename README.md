# DevGusta — Portfólio Pessoal

Portfólio pessoal desenvolvido com Next.js 15 e React Server Components, focado em performance e animações fluidas sem abrir mão de um bom First Contentful Paint.

---

## Tecnologias

- **[Next.js 15](https://nextjs.org/)** — App Router e Server Components
- **[TypeScript](https://www.typescriptlang.org/)** — tipagem estática
- **[Tailwind CSS v4](https://tailwindcss.com/)** — estilização
- **[Framer Motion](https://www.framer.com/motion/)** — animações (via LazyMotion, para reduzir o bundle)
- **[Lenis](https://lenis.studiofreight.com/)** — smooth scroll
- **[Shiki](https://shiki.style/)** — realce de sintaxe de código
- **[next-themes](https://github.com/pacocoursey/next-themes)** — dark/light mode

---

## Arquitetura

O projeto segue uma organização por domínios (Feature-Sliced Design), em vez do modelo tradicional de `/components` e `/sections`:

```
src
├── core          # navbar, configs globais, animações
│   ├── components
│   ├── data
│   ├── lib
│   └── types
├── features       # cada feature isolada e independente
│   ├── about
│   ├── contact
│   ├── hero
│   ├── projects
│   └── techs
└── app            # rotas (Next.js)
```

---

## Funcionalidades

- Apresentação com animação de texto fluida
- Cards de projetos com destaque dinâmico conforme o tema
- Scroll spy no menu de navegação (via `IntersectionObserver`)
- Contato direto por WhatsApp e e-mail
- Blocos de código renderizados no servidor com Shiki

---

Feito por **Gustavo Aguiar** — 2026
