"use client";
import { useEffect, useRef } from "react";
import { prefersReducedMotion, useMotionPreference } from "./MotionProvider";

// Server-renders the final value so the number is correct without JS; only animates once visible.
export function CountUp({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const { paused } = useMotionPreference();

  useEffect(() => {
    const element = ref.current;
    if (!element || paused || prefersReducedMotion()) return;
    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / 1600, 1);
        element.textContent = String(Math.round(value * (1 - Math.pow(1 - progress, 4))));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { rootMargin: "0px 0px -60px 0px" });
    observer.observe(element);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); element.textContent = String(value); };
  }, [value, paused]);

  return <span ref={ref} className="tabular-nums">{value}</span>;
}
