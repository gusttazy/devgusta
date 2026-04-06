/**
 * Interface para dados de projeto do portfólio.
 * Centralizada na camada de tipos para respeitar o fluxo de dependência:
 * types → data → components (sem inversão).
 */
export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  previewUrl: string;
  repositoryUrl: string;
}
