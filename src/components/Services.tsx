"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { SERVICES_DATA } from "@/data/services";
import { DynamicIcon } from "./DynamicIcon";
import { ServiceItem } from "@/types";

interface ServicesProps {
  onSelectService?: (serviceName: string) => void;
}

export function Services({ onSelectService }: ServicesProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedServiceModal, setSelectedServiceModal] = useState<ServiceItem | null>(null);

  const categories = [
    "All",
    "Engineering",
    "Cloud & Security",
    "Design & UX",
    "Growth & Marketing",
  ];

  const filteredServices =
    activeCategory === "All"
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category === activeCategory);

  const handleCardClick = (service: ServiceItem) => {
    if (onSelectService) {
      onSelectService(service.name);
    }
    // Also scroll down to contact smoothly
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="relative py-24 lg:py-32 bg-[#04060f] overflow-hidden">
      {/* Ambient background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-[#1e2162]/30 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/4 -right-48 w-96 h-96 rounded-full bg-[#bd0a2f]/20 blur-[140px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0c122b] border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#e11d48] mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Solutions</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Provide Best Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-400 font-normal leading-relaxed"
          >
            Our Expertise, Your Success: Delivering the Best in Digital Services.
          </motion.p>

          {/* Interactive Category Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-2 mt-8"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-[#1e2162] to-[#bd0a2f] text-white shadow-lg shadow-[#bd0a2f]/25 border border-white/20 scale-105"
                    : "bg-[#0c122b]/70 text-slate-400 hover:text-white border border-white/5 hover:border-white/15"
                }`}
              >
                {cat} {cat === "All" && `(${SERVICES_DATA.length})`}
              </button>
            ))}
          </motion.div>
        </div>

        {/* 12 Services Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredServices.map((service, index) => {
              const isAccentRed = index % 2 === 0;

              return (
                <motion.article
                  layout
                  key={service.id}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                  className="group relative rounded-2xl bg-gradient-to-b from-[#0e1432]/90 via-[#070a18]/90 to-[#04060f]/95 border border-white/10 p-7 sm:p-8 flex flex-col justify-between transition-all duration-400 hover:border-white/25 hover:-translate-y-2 glow-card"
                  style={{
                    boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.7)",
                  }}
                >
                  {/* Subtle Top Accent Glow on Hover */}
                  <div
                    aria-hidden="true"
                    className={`absolute inset-x-0 top-0 h-[2px] rounded-t-2xl transition-all duration-500 opacity-0 group-hover:opacity-100 ${
                      isAccentRed
                        ? "bg-gradient-to-r from-transparent via-[#bd0a2f] to-transparent shadow-[0_0_15px_#bd0a2f]"
                        : "bg-gradient-to-r from-transparent via-[#2d35a8] to-transparent shadow-[0_0_15px_#2d35a8]"
                    }`}
                  />

                  {/* Corner Ambient Glow */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                    style={{
                      backgroundColor: service.glowColor,
                    }}
                  />

                  <div>
                    {/* Header: Large Service Number + Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`w-13 h-13 rounded-xl p-3 flex items-center justify-center transition-all duration-300 border ${
                          isAccentRed
                            ? "bg-[#bd0a2f]/10 text-[#e11d48] border-[#bd0a2f]/30 group-hover:bg-[#bd0a2f] group-hover:text-white group-hover:shadow-[0_0_20px_rgba(189,10,47,0.5)]"
                            : "bg-[#1e2162]/30 text-indigo-300 border-[#1e2162]/60 group-hover:bg-[#1e2162] group-hover:text-white group-hover:shadow-[0_0_20px_rgba(30,33,98,0.7)]"
                        }`}
                      >
                        <DynamicIcon name={service.icon} className="w-6 h-6" />
                      </div>

                      <span className="font-mono text-3xl sm:text-4xl font-black text-slate-700/80 group-hover:text-slate-500 transition-colors">
                        {service.number}
                      </span>
                    </div>

                    {/* Category Tag */}
                    <div className="mb-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 bg-white/5 px-2.5 py-0.5 rounded-md">
                        {service.category}
                      </span>
                    </div>

                    {/* Service Name */}
                    <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors tracking-tight">
                      {service.name}
                    </h3>

                    {/* Service Description */}
                    <p className="mt-3 text-sm text-slate-400 font-normal leading-relaxed group-hover:text-slate-300 transition-colors">
                      {service.shortDesc}
                    </p>

                    {/* Deliverables Bullet List */}
                    <div className="mt-5 pt-4 border-t border-white/5 space-y-2">
                      {service.deliverables.slice(0, 2).map((item, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-400">
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              isAccentRed ? "bg-[#bd0a2f]" : "bg-indigo-400"
                            }`}
                          />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="mt-7 pt-4 border-t border-white/5 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => handleCardClick(service)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 group-hover:text-white transition-colors"
                    >
                      <span>Inquire Service</span>
                      <ArrowUpRight
                        className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${
                          isAccentRed ? "text-[#e11d48]" : "text-indigo-400"
                        }`}
                      />
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedServiceModal(service)}
                      className="text-[11px] font-medium text-slate-500 hover:text-slate-300 transition-colors"
                    >
                      Details
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedServiceModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg rounded-2xl bg-[#0c122b] border border-white/20 p-6 sm:p-8 shadow-2xl text-left"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#bd0a2f]/20 text-[#e11d48] flex items-center justify-center">
                    <DynamicIcon name={selectedServiceModal.icon} className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#e11d48] font-bold">
                      SERVICE {selectedServiceModal.number}
                    </span>
                    <h4 className="text-lg font-bold text-white">
                      {selectedServiceModal.name}
                    </h4>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedServiceModal(null)}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedServiceModal.fullDesc}
              </p>

              <div className="mt-5">
                <h5 className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-3">
                  Core Capabilities & Deliverables
                </h5>
                <ul className="space-y-2">
                  {selectedServiceModal.deliverables.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-slate-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#bd0a2f]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7 pt-4 border-t border-white/10 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedServiceModal(null)}
                  className="px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    handleCardClick(selectedServiceModal);
                    setSelectedServiceModal(null);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#bd0a2f] to-[#1e2162] text-white text-xs font-bold shadow-lg shadow-[#bd0a2f]/30"
                >
                  Request This Service
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
