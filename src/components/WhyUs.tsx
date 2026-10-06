"use client";

import React from "react";
import { motion } from "framer-motion";
import { WHY_US_ITEMS } from "@/data/company";
import { DynamicIcon } from "./DynamicIcon";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export function WhyUs() {
  return (
    <section id="why-us" className="relative py-24 lg:py-32 bg-[#04060f] overflow-hidden">
      {/* Background Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -right-60 w-96 h-96 rounded-full bg-[#bd0a2f]/20 blur-[150px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/3 -left-60 w-96 h-96 rounded-full bg-[#1e2162]/30 blur-[150px]"
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
            <span>The Competitive Edge</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Why Businesses Choose{" "}
            <span className="bg-gradient-to-r from-white via-slate-200 to-[#e11d48] bg-clip-text text-transparent">
              Alhawaj Tech
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-400 font-normal leading-relaxed"
          >
            We combine Silicon Valley technical precision with relentless dedication to your
            bottom line.
          </motion.p>
        </div>

        {/* 4 Premium Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {WHY_US_ITEMS.map((item, index) => {
            const isRedAccent = index % 2 === 0;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-3xl bg-gradient-to-b from-[#0c122b]/95 via-[#070a18]/90 to-[#04060f] border border-white/10 p-8 sm:p-10 transition-all duration-400 hover:border-white/25 hover:-translate-y-1.5 glow-card"
              >
                {/* Border Top Accent Glow */}
                <div
                  aria-hidden="true"
                  className={`absolute inset-x-0 top-0 h-[2px] rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    isRedAccent
                      ? "bg-gradient-to-r from-transparent via-[#bd0a2f] to-transparent shadow-[0_0_16px_#bd0a2f]"
                      : "bg-gradient-to-r from-transparent via-[#2d35a8] to-transparent shadow-[0_0_16px_#2d35a8]"
                  }`}
                />

                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-300 ${
                      isRedAccent
                        ? "bg-[#bd0a2f]/10 text-[#e11d48] border-[#bd0a2f]/30 group-hover:bg-[#bd0a2f] group-hover:text-white group-hover:shadow-[0_0_20px_rgba(189,10,47,0.4)]"
                        : "bg-[#1e2162]/30 text-indigo-300 border-[#1e2162]/60 group-hover:bg-[#1e2162] group-hover:text-white group-hover:shadow-[0_0_20px_rgba(30,33,98,0.6)]"
                    }`}
                  >
                    <DynamicIcon name={item.icon} className="w-7 h-7" />
                  </div>

                  {/* Stat badge */}
                  <div className="self-start sm:self-auto px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-right">
                    <span className="text-xs font-mono font-bold text-white block">
                      {item.stat}
                    </span>
                    <span className="text-[10px] text-slate-400 block uppercase tracking-wider">
                      {item.statLabel}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-white transition-colors">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-300/90 text-base leading-relaxed font-normal">
                  {item.description}
                </p>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-slate-400 group-hover:text-white transition-colors">
                  <span className="font-mono text-[#bd0a2f]">Pillar 0{index + 1}</span>
                  <span>•</span>
                  <span>Enterprise Guarantee</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 p-6 sm:p-8 rounded-2xl glass-panel text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-bold text-white">
              Ready to elevate your digital capabilities?
            </h4>
            <p className="text-sm text-slate-400 mt-1">
              Connect with our principal architects for a technical strategy session.
            </p>
          </div>
          <Link
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#bd0a2f] to-[#1e2162] text-white font-semibold text-sm shadow-lg shadow-[#bd0a2f]/25 hover:opacity-95 transition-opacity"
          >
            <span>Talk to an Architect</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
