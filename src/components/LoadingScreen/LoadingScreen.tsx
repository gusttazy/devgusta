"use client"

import React from "react";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-400 mb-4"></div>
        <span className="text-white text-lg font-semibold">Carregando...</span>
      </div>
    </div>
  );
}
