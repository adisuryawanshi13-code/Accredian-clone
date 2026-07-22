"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { COURSE_CARDS } from "@/data/enterprise";
import { UserCheck, ShieldCheck, Zap } from "lucide-react";

export const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-16 sm:py-24 bg-white dark:bg-slate-950">
      <Container size="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Tailored{" "}
            <span className="text-[#1A56DB] dark:text-blue-400">
              Course Segmentation
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 font-medium">
            Explore{" "}
            <a href="#custom-fit" className="text-[#1A56DB] dark:text-blue-400 hover:underline font-semibold">
              Custom-fit Courses
            </a>{" "}
            Designed to Address Every Professional Focus
          </p>
        </div>

        {/* 4 Image Header Cards Grid matching Screenshot 5 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20">
          {COURSE_CARDS.map((card) => (
            <div
              key={card.title}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group cursor-pointer"
            >
              {/* Top Card Image matching Screenshot 5 */}
              <div className="relative w-full h-52 overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={card.imageUrl}
                  alt={card.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Card Content matching Screenshot 5 */}
              <div className="p-6 flex flex-col items-center text-center flex-1 justify-center space-y-2">
                <h3 className="text-xl font-black text-[#1A56DB] dark:text-blue-400 group-hover:text-blue-700 transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-xs">
                  {card.tags}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Who Should Join? Banner matching bottom of Screenshot 5 */}
        <div className="relative rounded-3xl bg-[#1A56DB] text-white p-8 sm:p-12 overflow-hidden shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                Who Should Join?
              </h3>
              <p className="text-blue-100 text-sm mt-2 max-w-xl font-medium">
                Our executive enterprise tracks are designed for ambitious professionals, corporate leaders, and tech teams looking to drive transformation.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/20 text-xs font-bold">
                <UserCheck className="w-4 h-4 text-cyan-300" />
                <span>Senior Executives</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/20 text-xs font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-300" />
                <span>Tech Lead Teams</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/20 text-xs font-bold">
                <Zap className="w-4 h-4 text-amber-300" />
                <span>Growth Managers</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
