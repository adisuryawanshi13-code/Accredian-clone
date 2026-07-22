"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";

export interface HeroProps {
  onEnquireClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onEnquireClick }) => {
  return (
    <section id="home" className="py-8 sm:py-12 bg-white dark:bg-slate-950">
      <Container size="xl">
        {/* Soft Pastel Blue Hero Card matching Screenshot 4 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-[32px] bg-[#EBF3FF] dark:bg-slate-900/90 border border-blue-100/70 dark:border-slate-800/80 p-8 sm:p-12 lg:p-14 overflow-hidden shadow-lg shadow-blue-500/5"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading & Callouts */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-[1.15] tracking-tight"
              >
                Next-Gen{" "}
                <span className="text-[#1A56DB] dark:text-blue-400 font-black">
                  Expertise
                </span>
                <br />
                For Your{" "}
                <span className="text-[#1A56DB] dark:text-blue-400 font-black">
                  Enterprise
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6 text-base sm:text-lg text-slate-700 dark:text-slate-300 font-medium max-w-lg leading-relaxed"
              >
                Cultivate high-performance teams through expert learning.
              </motion.p>

              {/* 3 Checkmark Feature Bullets matching Screenshot 4 */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6 text-sm font-medium text-slate-800 dark:text-slate-200"
              >
                <div className="flex items-center gap-2 hover:scale-105 transition-transform cursor-default">
                  <div className="w-5 h-5 rounded-full border border-emerald-500 bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="font-semibold text-slate-900 dark:text-slate-100">Tailored Solutions</span>
                </div>

                <div className="flex items-center gap-2 hover:scale-105 transition-transform cursor-default">
                  <div className="w-5 h-5 rounded-full border border-emerald-500 bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="font-semibold text-slate-900 dark:text-slate-100">Industry Insights</span>
                </div>

                <div className="flex items-center gap-2 hover:scale-105 transition-transform cursor-default">
                  <div className="w-5 h-5 rounded-full border border-emerald-500 bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="font-semibold text-slate-900 dark:text-slate-100">Expert Guidance</span>
                </div>
              </motion.div>

              {/* Enquire Now CTA Button matching Screenshot 4 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="mt-10"
              >
                <Button
                  variant="primary"
                  size="lg"
                  onClick={onEnquireClick}
                  className="bg-[#1A56DB] hover:bg-[#1546b8] text-white px-8 py-3.5 text-base font-bold shadow-md shadow-blue-500/20 rounded-xl hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  Enquire Now
                </Button>
              </motion.div>
            </div>

            {/* Right Column: Hero Cutout Image matching Screenshot 4 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 relative flex items-center justify-center"
            >
              <div className="relative w-full max-w-md aspect-[4/3.5] overflow-hidden group">
                <Image
                  src="/images/enterprise-hero.png"
                  alt="Accredian Enterprise Team"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-contain object-bottom group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
