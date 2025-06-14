"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
const LoadingScreenFade = dynamic(() => import("./LoadingScreenFade"), {
  ssr: false,
});

export default function AppLoader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function handleLoad() {
      setLoading(false);
    }
    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
    }
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreenFade key="loader" show={true} />}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {!loading && (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ minHeight: "100vh" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
