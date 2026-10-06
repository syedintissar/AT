"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ABOUT_PILLARS } from "@/data/company";
import { DynamicIcon } from "./DynamicIcon";
import { Shield, Sparkles, Check, ArrowRight, Layers, Cpu, Cloud, Database } from "lucide-react";
import Link from "next/link";

export function About() {
  const [activePillar, setActivePillar] = useState(0);

  const architectureLayers = [
    {
      title: "Experience Layer",
      desc: "Next.js 16 • React Native • Responsive Micro-frontends",
      icon: Layers,
      color: "from-[#bd0a2f]/30 to-[#e11d48]/10",
      border: "border-[#bd0a2f]/40",
      accent: "#e11d48",
    },
    {
      title: "Application & API Tier",
      desc: "Microservices • GraphQL • Event-Driven Architectures",
      icon: Cpu,
      color: "from-[#1e2162]/40 to-[#2d35a8]/20",
      border: "border-[#1e2162]/70",
      accent: "#6366f1",
    },
    {
      title: "Security & Zero-Trust Mesh",
      desc: "TLS 1.3 • End-to-End Encryption • ISO 27001 Preparedness",
      icon: Shield,
      color: "from-[#bd0a2f]/25 to-[#1e2162]/30",
      border: "border-[#bd0a2f]/30",
      accent: "#bd0a2f",
    },
    {
      title: "Cloud & Elastic Infrastructure",
      desc: "Kubernetes • Multi-Cloud (AWS/GCP/Azure) • Terraform IaC",
      icon: Cloud,
      color: "from-[#0c122b] to-[#1e2162]/40",
      border: "border-white/10",
      accent: "#38bdf8",
    },
  ];

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-[#070a18] overflow-hidden">
      {/* Ambient background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -left-64 w-[500px] h-[500px] rounded-full bg-[#1e2162]/20 blur-[160px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -right-64 w-[500px] h-[500px] rounded-full bg-[#bd0a2f]/15 blur-[160px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Mission & 7 Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0c122b] border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#bd0a2f]"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Who We Are</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight"
            >
              Technology That Moves Your{" "}
              <span className="bg-gradient-to-r from-white via-slate-200 to-[#e11d48] bg-clip-text text-transparent">
                Business Forward
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal"
            >
              At Alhawaj Tech, we combine technology, creativity, and strategic thinking to create
              digital solutions that solve real business challenges.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-sm sm:text-base text-slate-400 leading-relaxed"
            >
              Whether you are an ambitious enterprise modernizing legacy architecture or a
              high-growth brand launching category-defining platforms, our interdisciplinary teams
              bring engineering excellence, human-centered design, and cloud scalability together.
            </motion.p>

            {/* 7 Pillars Interactive List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {ABOUT_PILLARS.map((pillar, idx) => (
                <div
                  key={pillar.title}
                  onClick={() => setActivePillar(idx)}
                  className={`p-3.5 rounded-xl border transition-all duration-300 cursor-pointer flex items-start gap-3 ${
                    activePillar === idx
                      ? "bg-[#0e163c] border-[#bd0a2f]/60 shadow-[0_0_20px_rgba(189,10,47,0.2)]"
                      : "bg-[#0c122b]/50 border-white/5 hover:border-white/20 hover:bg-[#0c122b]/80"
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg ${
                      activePillar === idx
                        ? "bg-[#bd0a2f] text-white"
                        : "bg-white/5 text-slate-300"
                    }`}
                  >
                    <DynamicIcon name={pillar.icon} className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white flex items-center gap-1.5">
                      <span>{pillar.title}</span>
                      {activePillar === idx && (
                        <Check className="w-3.5 h-3.5 text-[#e11d48]" />
                      )}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                      {pillar.desc}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4"
            >
              <Link
                href="#process"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-200 hover:text-white group"
              >
                <span>Discover our engineering process</span>
                <ArrowRight className="w-4 h-4 text-[#bd0a2f] transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Abstract Technology Architecture Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#0c122b]/95 via-[#070a18]/95 to-[#04060f] border border-white/10 shadow-2xl backdrop-blur-2xl">
              {/* Top Graphic Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#e11d48] font-bold">
                    SYSTEM TOPOLOGY
                  </span>
                  <h3 className="text-base font-bold text-white mt-0.5">
                    Unified Technology Framework
                  </h3>
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                  Online 99.99%
                </div>
              </div>

              {/* 4 Isometric Stack Layers */}
              <div className="space-y-4">
                {architectureLayers.map((layer, idx) => {
                  const LayerIcon = layer.icon;
                  return (
                    <motion.div
                      key={layer.title}
                      whileHover={{ x: 6, transition: { duration: 0.2 } }}
                      className={`relative p-4 rounded-2xl bg-gradient-to-r ${layer.color} border ${layer.border} backdrop-blur-md transition-all duration-300 shadow-lg`}
                    >
                      <div className="flex items-start gap-3.5">
                        <div
                          className="p-2.5 rounded-xl bg-black/40 text-white shrink-0 border border-white/10"
                          style={{ color: layer.accent }}
                        >
                          <LayerIcon className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm font-bold text-white tracking-wide">
                              {layer.title}
                            </h4>
                            <span className="text-[10px] font-mono text-slate-400">
                              L{4 - idx}
                            </span>
                          </div>
                          <p className="text-xs text-slate-300 mt-1 truncate">
                            {layer.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom Summary Bar */}
              <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-blue-400" />
                  Realtime Data Engine
                </span>
                <span className="text-[#bd0a2f] font-semibold">Alhawaj Tech Cloud</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
