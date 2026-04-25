"use client";

import { useEffect } from "react";

export function OperatorBodyClass() {
  useEffect(() => {
    document.body.classList.add("operator-mode");
    return () => {
      document.body.classList.remove("operator-mode");
    };
  }, []);
  return null;
}
