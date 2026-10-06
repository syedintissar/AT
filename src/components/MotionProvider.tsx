"use client";
import { createContext, useContext, useState } from "react";
import { MotionConfig } from "framer-motion";
const MotionContext = createContext({ paused: false, toggle: () => {} });
export function MotionProvider({ children }: { children: React.ReactNode }) {
  const [paused, setPaused] = useState(false);
  return <MotionContext.Provider value={{ paused, toggle: () => setPaused((value) => !value) }}><MotionConfig reducedMotion={paused ? "always" : "user"}><div data-motion={paused ? "paused" : "enabled"}>{children}</div></MotionConfig></MotionContext.Provider>;
}
export function useMotionPreference() { return useContext(MotionContext); }
