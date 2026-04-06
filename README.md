# 👨‍💻 **DevGusta — High Performance Portfolio**

Bem-vindo ao repositório do meu portfólio pessoal! Este projeto não é apenas uma vitrine para meus trabalhos, mas sim uma **prova de conceito** das minhas habilidades em **Arquitetura de Software, Performance Web e Design Dinâmico**.

Desenvolvido sob o paradigma de **Feature-Sliced Design (FSD)** e orquestrado 100% com React Server Components via Next.js 15, este portfólio entrega animações nativas de ~60 fps sem sacrificar o *First Contentful Paint*.

---

## 🚀 **Tecnologias de Elite Utilizadas**

O projeto foi cirurgicamente montado utilizando as bibliotecas mais modernas do ecossistema front-end:

* ⚛️ **[Next.js 15 (App Router)](https://nextjs.org/)** — Renderização Híbrida e Server Components.
* 🟦 **[TypeScript](https://www.typescriptlang.org/)** — Tipagem estrita e blindagem contra erros nulos.
* 🌊 **[Tailwind CSS v4](https://tailwindcss.com/)** — Estilização com Performance Pura e CSS Variables automáticas.
* 🎞️ **[Framer Motion](https://www.framer.com/motion/)** — Orquestração de animações em cascata usando a engine *LazyMotion* para reduzir o bundle size em >40kb.
* 🏎️ **[Lenis](https://lenis.studiofreight.com/)** — Smooth Scroll elegante que sincroniza com os monitores em tempo real (evitando lag).
* 🎨 **[Shiki JS](https://shiki.style/)** — Realce de sintaxe de códigos simulando um ambiente MacOS / VSCode em nível de servidor.
* 🌗 **[Next-Themes](https://github.com/pacocoursey/next-themes)** — Suporte integrado e manual à Dual Themes (Dark Neon / Light Off-White).

---

## 🏗️ **Arquitetura Feature-Based**

Visando a extrema escalabidade, abandonei o modelo comum de "gaveta" (`/components` e `/sections`) e adotei a organização por Domínios isolados:

```bash
📦 src
 ┣ 📂 core          # O eixo central (Scrolls globais, Navbar principal, configs de animação pura da GPU)
 ┃ ┣ 📂 components  
 ┃ ┣ 📂 data        
 ┃ ┣ 📂 lib         
 ┃ ┗ 📂 types       
 ┣ 📂 features      # O "Coração" do isolamento. Cada feature é inviolável e independente.
 ┃ ┣ 📂 about       # Shiki Client wrapper
 ┃ ┣ 📂 contact     # Lógica e redirecionamento de contatos
 ┃ ┣ 📂 hero        # Cabeçalho da página
 ┃ ┣ 📂 projects    # DB de projetos e Cards específicos
 ┃ ┗ 📂 techs       # Grupamento do arsenal de tecnologias
 ┗ 📂 app           # O clássico Roteamento Next.js
```

## 💻 **Funcionalidades de Destaque**

* 🙋‍♂️ **Apresentação Fluída:** O Texto preenchido gradualmente via animação de CPU-offload (Will-Change).
* 🗂️ **Lista de Projetos Dinâmicos:** Cards de projetos que reagem e acendem o fundo com a cor do modo noturno.
* 🚀 **Scroll Spy "Ninja":** O menu de navegação sabe exatamente qual parte do portfólio tá ocupando a principal zona da tela da pessoa através do `IntersectionObserver`.
* ✉️ **Link Direto:** Design reestilizado focado em conversão para contato direto (WhatsApp e Email).
* 🔥 **Shiki Code IDE:** Apresentação estática renderizada no servidor para não gerar atraso (< 100ms load).

---

✨ Desenhado e Engenheirado com ❤️ por **Gustavo Aguiar** — 2026.
