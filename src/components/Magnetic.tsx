"use client";
import { useRef, type ReactNode } from "react";
import { prefersReducedMotion, useMotionPreference } from "./MotionProvider";

export function Magnetic({ children, strength = 0.28, className }: { children: ReactNode; strength?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { paused } = useMotionPreference();
  const move = (x: number, y: number) => { if (ref.current) ref.current.style.transform = x || y ? `translate3d(${x}px, ${y}px, 0)` : ""; };

  return (
    <div
      ref={ref}
      className={`magnetic ${className ?? "inline-block"}`}
      onPointerMove={(event) => {
        if (paused || event.pointerType !== "mouse" || prefersReducedMotion() || !ref.current) return;
        const bounds = ref.current.getBoundingClientRect();
        move((event.clientX - bounds.left - bounds.width / 2) * strength, (event.clientY - bounds.top - bounds.height / 2) * strength);
      }}
      onPointerLeave={() => move(0, 0)}
    >
      {children}
    </div>
  );
}
