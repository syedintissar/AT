"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useMotionPreference } from "./MotionProvider";
export function Reveal({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion();
  const { paused } = useMotionPreference();
  return <motion.div className={className} initial={reduced || paused ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "0px 0px -35px 0px" }} transition={{ duration: reduced || paused ? 0 : .65, delay: reduced || paused ? 0 : delay, ease: [.2, .7, .2, 1] }}>{children}</motion.div>;
}
