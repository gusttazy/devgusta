"use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import React from "react";

const NavButton = dynamic(() => import("../NavButton"), {
  loading: () => null,
  ssr: false,
});

const ClientNavButtonComponent = function ClientNavButton() {
  return (
    <Suspense fallback={null}>
      <NavButton />
    </Suspense>
  );
};

export default React.memo(ClientNavButtonComponent);