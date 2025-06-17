"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import React from "react";

// Importação dinâmica do componente NavButton
// O componente é carregado apenas no lado do cliente (ssr: false)
// Enquanto carrega, não exibe nenhum conteúdo (loading: () => null)
const NavButton = dynamic(() => import("../NavButton"), {
  loading: () => null, // Opcional: pode ser adicionado um skeleton futuramente
  ssr: false, // Desabilita o Server Side Rendering para este componente
});

// Componente encapsulador que renderiza o NavButton
// usando Suspense para fallback durante o carregamento
const ClientNavButtonComponent = function ClientNavButton() {
  return (
    <Suspense fallback={null}>
      <NavButton />
    </Suspense>
  );
};

// Memoização para evitar renders desnecessários
export default React.memo(ClientNavButtonComponent);
