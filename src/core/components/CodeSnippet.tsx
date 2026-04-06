import { codeToHtml } from "shiki";

const codeContent = `const buildFuture = async () => {
  const developer = {
    name: "Gustavo Rodrigues",
    role: "Frontend Engineer",
    focus: ["Performance", "Design", "UX"]
  };

  while (true) {
    await developer.evolve();
    deploy({ success: true, impact: "High" });
  }
};`;

export default async function CodeSnippet() {
  const html = await codeToHtml(codeContent, {
    lang: "typescript",
    themes: {
      light: "github-light",
      dark: "tokyo-night",
    },
    defaultColor: false,
  });

  return (
    <div className="w-full h-full rounded-2xl overflow-hidden border border-border shadow-2xl bg-surface transition-colors duration-300">
      {/* Barra de Título */}
      <div className="flex items-center px-4 py-3 bg-surface/50 border-b border-border backdrop-blur-md">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400/90" />
          <div className="w-3 h-3 rounded-full bg-yellow-400/90" />
          <div className="w-3 h-3 rounded-full bg-green-400/90" />
        </div>
        <div className="flex-1 text-center">
          <span className="text-xs font-medium text-text-muted">
            developer.ts
          </span>
        </div>
      </div>

      {/* Conteúdo do Código em Si */}
      <div className="p-4 sm:p-6 overflow-x-auto text-[13px] sm:text-sm leading-relaxed tracking-wide font-mono shiki-container">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
}
