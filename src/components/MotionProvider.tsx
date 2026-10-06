"use client";
import { createContext, useContext, useState } from "react";

// Deliberately no framer-motion import: this wraps every page, so it must stay tiny.
const MotionContext = createContext({ paused: false, toggle: () => {} });

export function MotionProvider({ children }: { children: React.ReactNode }) {
  const [paused, setPaused] = useState(false);
  return <MotionContext.Provider value={{ paused, toggle: () => setPaused((value) => !value) }}><div data-motion={paused ? "paused" : "enabled"}>{children}</div></MotionContext.Provider>;
}

export function useMotionPreference() { return useContext(MotionContext); }

export function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
