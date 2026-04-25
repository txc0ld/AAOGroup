"use client";

import { useEffect } from "react";

export function DemoBodyClass() {
  useEffect(() => {
    document.body.classList.add("demo-mode");
    return () => {
      document.body.classList.remove("demo-mode");
    };
  }, []);
  return null;
}
