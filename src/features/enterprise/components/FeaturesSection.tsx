"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/shared/components/ui/Container";
import { ACCREDIAN_EDGE_PILLARS, DOMAIN_EXPERTISE } from "../constants/enterprise.constants";
import { ChevronRight, MessageSquare, RefreshCw, Cpu, Maximize2, Target, Package, Lightbulb } from "lucide-react";

export const FeaturesSection: React.FC = () => {
  // 7 Nodes for the horizontal process infographic matching Screenshot 3
  const NODE_ICONS = [
    <Lightbulb key="1" className="w-6 h-6 text-white stroke-[2]" />,
    <MessageSquare key="2" className="w-6 h-6 text-white stroke-[2]" />,
    <RefreshCw key="3" className="w-6 h-6 text-white stroke-[2]" />,
    <Cpu key="4" className="w-6 h-6 text-white stroke-[2]" />,
    <Maximize2 key="5" className="w-6 h-6 text-white stroke-[2]" />,
    <Target key="6" className="w-6 h-6 text-white stroke-[2]" />,
    <Package key="7" className="w-6 h-6 text-white stroke-[2]" />,
  ];

  return (
    <section id="accredian-edge" className="py-16 sm:py-24 bg-white dark:bg-slate-950">
      <Container size="xl">
        {/* Block 1: The Accredian Edge Infographic matching Screenshot 3 */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight"
          >
            The{" "}
            <span className="text-[#1A56DB] dark:text-blue-400">
              Accredian Edge
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 font-medium"
          >
            Key Aspects of{" "}
            <a href="#training" className="text-[#1A56DB] dark:text-blue-400 hover:underline font-semibold">
              Our Strategic Training
            </a>
          </motion.p>

          {/* Process Infographic Container matching Screenshot 3 */}
          <div className="mt-16 max-w-6xl mx-auto hidden md:block relative pb-12">
            {/* Top 4 Text Callouts Row */}
            <div className="grid grid-cols-4 gap-6 text-left mb-10">
              {ACCREDIAN_EDGE_PILLARS.map((pillar) => (
                <div key={pillar.title} className="flex flex-col space-y-1.5 pl-2 relative">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#1A56DB]" />
                    <h3 className="text-lg font-black text-slate-900 dark:text-white">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pl-4">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Connecting Vertical Stem Lines */}
            <div className="grid grid-cols-4 gap-6 mb-4 px-6">
              <div className="w-0.5 h-12 bg-[#1A56DB] ml-4" />
              <div className="w-0.5 h-12 bg-[#1A56DB] ml-4" />
              <div className="w-0.5 h-12 bg-[#1A56DB] ml-4" />
              <div className="w-0.5 h-12 bg-[#1A56DB] ml-4" />
            </div>

            {/* Horizontal Dotted Line with 7 Blue Circular Node Badges & Arrow Pointers matching Screenshot 3 */}
            <div className="relative flex items-center justify-between px-2">
              {/* Dotted Connection Line */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 border-t-2 border-dashed border-slate-300 dark:border-slate-700 -translate-y-1/2 -z-0" />

              {NODE_ICONS.map((icon, idx) => (
                <React.Fragment key={idx}>
                  <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-b from-[#1A56DB] to-[#1546b8] p-1 shadow-lg shadow-blue-500/20 flex items-center justify-center border-4 border-white dark:border-slate-950 hover:scale-110 transition-transform cursor-pointer">
                    <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center">
                      {icon}
                    </div>
                  </div>
                  {idx < NODE_ICONS.length - 1 && (
                    <div className="relative z-10 text-slate-300 dark:text-slate-600">
                      <ChevronRight className="w-5 h-5 -mx-1" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Mobile Layout for Edge Pillars */}
          <div className="md:hidden mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            {ACCREDIAN_EDGE_PILLARS.map((pillar) => (
              <div key={pillar.title} className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Block 2: Our Domain Expertise matching Screenshot 2 */}
        <div className="pt-16 border-t border-slate-100 dark:border-slate-800">
          <div className="text-center mb-12 sm:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight"
            >
              Our{" "}
              <span className="text-[#1A56DB] dark:text-blue-400">
                Domain Expertise
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 font-medium"
            >
              <a href="#innovation" className="text-[#1A56DB] dark:text-blue-400 hover:underline font-semibold">
                Specialized Programs
              </a>{" "}
              Designed to Fuel Innovation
            </motion.p>
          </div>

          {/* 7 Domain Cards Grid matching Screenshot 2 (3 - 3 - 1 centered layout) */}
          <div className="max-w-5xl mx-auto space-y-6">
            {/* Row 1: 3 cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              {DOMAIN_EXPERTISE.slice(0, 3).map((domain, idx) => (
                <motion.div
                  key={domain.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-8 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-14 h-14 text-[#1A56DB] dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                    {domain.icon}
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {domain.title}
                  </h3>
                </motion.div>
              ))}
            </div>

            {/* Row 2: 3 cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              {DOMAIN_EXPERTISE.slice(3, 6).map((domain, idx) => (
                <motion.div
                  key={domain.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-8 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-14 h-14 text-[#1A56DB] dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                    {domain.icon}
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {domain.title}
                  </h3>
                </motion.div>
              ))}
            </div>

            {/* Row 3: 1 Centered Card matching Screenshot 2 */}
            <div className="flex justify-center">
              {DOMAIN_EXPERTISE.slice(6, 7).map((domain) => (
                <motion.div
                  key={domain.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="w-full sm:w-1/3 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-8 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-14 h-14 text-[#1A56DB] dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                    {domain.icon}
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {domain.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
