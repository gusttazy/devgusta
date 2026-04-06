"use client";

import dynamic from "next/dynamic";

const NavButton = dynamic(() => import("@/core/components/NavButton"), {
  ssr: false,
});

export default function ClientNavButton() {
  return <NavButton />;
}
