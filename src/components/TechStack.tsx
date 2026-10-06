"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TECH_CATEGORIES } from "@/data/company";
import { DynamicIcon } from "./DynamicIcon";
import { Sparkles, CheckCircle2 } from "lucide-react";

export function TechStack() {
  const [selectedCatIndex, setSelectedCatIndex] = useState(0);
  const activeCategory = TECH_CATEGORIES[selectedCatIndex];

  return (
    <section id="tech-stack" className="relative py-24 lg:py-32 bg-[#04060f] overflow-hidden">
      {/* Background ambient orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-1/4 w-[500px] h-[500px] rounded-full bg-[#1e2162]/25 blur-[160px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-10 w-[450px] h-[450px] rounded-full bg-[#bd0a2f]/15 blur-[160px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0c122b] border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#bd0a2f] mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technology Ecosystem</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Engineered With Modern{" "}
            <span className="bg-gradient-to-r from-white via-slate-200 to-[#e11d48] bg-clip-text text-transparent">
              Standards
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-400 font-normal leading-relaxed"
          >
            We leverage battle-tested stacks, cloud-native frameworks, and secure paradigms to build
            software that endures.
          </motion.p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {TECH_CATEGORIES.map((cat, idx) => {
            const isSelected = selectedCatIndex === idx;
            return (
              <button
                key={cat.name}
                type="button"
                onClick={() => setSelectedCatIndex(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isSelected
                    ? "bg-gradient-to-r from-[#1e2162] to-[#bd0a2f] text-white shadow-lg shadow-[#bd0a2f]/25 border border-white/20 scale-105"
                    : "bg-[#0c122b]/80 text-slate-400 hover:text-white border border-white/5 hover:border-white/15"
                }`}
              >
                <DynamicIcon name={cat.iconName} className="w-4 h-4" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory.name}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="rounded-3xl glass-panel p-8 sm:p-12 border border-white/10 max-w-5xl mx-auto shadow-2xl relative overflow-hidden"
          >
            {/* Top Accent Line */}
            <div
              aria-hidden="true"
              className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#bd0a2f] to-transparent shadow-[0_0_20px_#bd0a2f]"
            />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-white/10 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#bd0a2f]/20 border border-[#bd0a2f]/40 flex items-center justify-center text-[#e11d48]">
                  <DynamicIcon name={activeCategory.iconName} className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {activeCategory.name} Ecosystem
                  </h3>
                  <p className="text-sm text-slate-400 mt-0.5">
                    {activeCategory.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full self-start md:self-auto">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Continuous Compatibility</span>
              </div>
            </div>

            {/* Technology Badges / Chips Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
              {activeCategory.technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="group relative p-4 sm:p-5 rounded-2xl bg-[#070a18]/90 border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/60 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-300 group-hover:text-white group-hover:bg-[#1e2162] transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-[#e11d48]" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white group-hover:text-white transition-colors">
                        {tech.name}
                      </div>
                      {tech.badge && (
                        <div className="text-[10px] font-mono text-slate-400 group-hover:text-slate-300">
                          {tech.badge}
                        </div>
                      )}
                    </div>
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-600 group-hover:text-[#bd0a2f] transition-colors">
                    Verified
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom Stack note */}
            <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 gap-2">
              <span>Stack architecture tailored to project security & latency requirements.</span>
              <span className="font-mono text-slate-400">Zero vendor lock-in</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
