"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { COMPANY_STATS } from "@/data/company";
import { Sparkles, Layers, ShieldCheck, Zap } from "lucide-react";

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const start = 0;
    const end = value;
    const duration = 1800; // ms
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOut * (end - start) + start);

      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setDisplayValue(end);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {Number.isInteger(value) ? displayValue : displayValue.toFixed(1)}
      {suffix}
    </span>
  );
}

const STAT_ICONS = [Sparkles, ShieldCheck, Layers, Zap];

export function Stats() {
  return (
    <section className="relative z-20 py-12 lg:py-16 bg-[#070a18]/90 border-y border-white/10 backdrop-blur-xl">
      {/* Background Subtle Glow Line */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#bd0a2f]/60 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#1e2162]/80 to-transparent"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {COMPANY_STATS.map((stat, idx) => {
            const IconComponent = STAT_ICONS[idx % STAT_ICONS.length];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`flex flex-col items-center sm:items-start text-center sm:text-left ${
                  idx > 0 ? "pt-6 sm:pt-0 sm:pl-6 lg:pl-8" : ""
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className={`p-1.5 rounded-lg ${
                      stat.accent === "red"
                        ? "bg-[#bd0a2f]/20 text-[#e11d48]"
                        : "bg-[#1e2162]/40 text-blue-300"
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <span className="text-xs uppercase font-mono tracking-wider text-slate-400">
                    Capability Metric
                  </span>
                </div>

                <div
                  className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${
                    stat.accent === "red"
                      ? "text-white group-hover:text-[#e11d48]"
                      : "text-white"
                  }`}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>

                <div className="mt-2 text-base font-semibold text-slate-200">
                  {stat.label}
                </div>

                <div className="mt-1 text-xs text-slate-400 max-w-xs">
                  {stat.description}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
