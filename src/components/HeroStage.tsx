"use client";
import { useRef } from "react";
import Image from "next/image";
import { Braces, Cloud, MousePointer2 } from "lucide-react";
import { cssVars } from "@/lib/css";
import { prefersReducedMotion, useMotionPreference } from "./MotionProvider";

export function HeroStage() {
  const ref = useRef<HTMLDivElement>(null);
  const { paused } = useMotionPreference();
  const tilt = (x: number, y: number) => {
    ref.current?.style.setProperty("--tilt-x", `${y * -14}deg`);
    ref.current?.style.setProperty("--tilt-y", `${x * 18}deg`);
  };

  return (
    <div
      ref={ref}
      className="hero-stage hero-tilt hero-fade"
      aria-hidden="true"
      style={cssVars({ "--d": "300ms" })}
      onPointerMove={(event) => {
        if (event.pointerType !== "mouse" || paused || prefersReducedMotion()) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        tilt((event.clientX - bounds.left) / bounds.width - 0.5, (event.clientY - bounds.top) / bounds.height - 0.5);
      }}
      onPointerLeave={() => tilt(0, 0)}
    >
      <div className="stage-halo" />
      <div className="stage-grid" />
      <div className="stage-orbit" />
      <div className="stage-orbit two" />
      <div className="core-assembly">
        <div className="core-layer layer-bottom" />
        <div className="core-layer layer-middle" />
        <div className="core-layer layer-top"><Image src="/icon.png" alt="" width={160} height={160} sizes="160px" /></div>
      </div>
      <div className="stage-tag tag-design"><MousePointer2 /> Thoughtfully designed</div>
      <div className="stage-tag tag-code"><Braces /> Expertly engineered</div>
      <div className="stage-tag tag-cloud"><Cloud /> Ready to scale <span className="status-dot ml-1" /></div>
    </div>
  );
}
