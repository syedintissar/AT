"use client";

import React from "react";
import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/data/company";
import { DynamicIcon } from "./DynamicIcon";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export function Process() {
  return (
    <section id="process" className="relative py-24 lg:py-32 bg-[#070a18] overflow-hidden">
      {/* Background glow orb */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#1e2162]/20 blur-[180px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0c122b] border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#bd0a2f] mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Methodology</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            From Idea to{" "}
            <span className="bg-gradient-to-r from-white via-slate-200 to-[#e11d48] bg-clip-text text-transparent">
              Impact
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-400 font-normal leading-relaxed"
          >
            Our disciplined 5-stage lifecycle guarantees predictive timelines, architectural
            resilience, and peak return on investment.
          </motion.p>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2 bg-gradient-to-r from-[#1e2162] via-[#bd0a2f] to-[#1e2162] z-0 opacity-40"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 relative z-10">
            {PROCESS_STEPS.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="group relative rounded-2xl bg-gradient-to-b from-[#0c122b]/90 via-[#070a18]/90 to-[#04060f] border border-white/10 p-6 flex flex-col justify-between transition-all duration-300 hover:border-white/30 hover:-translate-y-2 glow-card"
                >
                  <div>
                    {/* Top Step Number + Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-[#04060f] border border-white/10 text-slate-400 group-hover:text-[#e11d48] group-hover:border-[#bd0a2f]/40 transition-colors">
                        STAGE {step.number}
                      </span>
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                          isEven
                            ? "bg-[#bd0a2f]/10 text-[#e11d48] border-[#bd0a2f]/30 group-hover:bg-[#bd0a2f] group-hover:text-white"
                            : "bg-[#1e2162]/40 text-blue-300 border-[#1e2162]/80 group-hover:bg-[#1e2162] group-hover:text-white"
                        }`}
                      >
                        <DynamicIcon name={step.icon} className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-white">
                      {step.title}
                    </h3>

                    {/* Step Tagline */}
                    <div className="text-xs font-semibold text-[#bd0a2f] mt-1 mb-3">
                      {step.tagline}
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                    <span>Phase 0{index + 1}</span>
                    <span className="text-emerald-400">Validated</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Process Footer Link */}
        <div className="mt-14 text-center">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white group"
          >
            <span>Ready to initiate Phase 01 Discover?</span>
            <ArrowRight className="w-4 h-4 text-[#bd0a2f] transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
