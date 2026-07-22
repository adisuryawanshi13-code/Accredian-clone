"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TRACK_RECORD_STATS } from "@/data/enterprise";

export const Statistics: React.FC = () => {
  return (
    <section id="stats" className="py-16 sm:py-20 bg-white dark:bg-slate-950">
      <Container size="xl">
        <SectionHeading
          title={
            <>
              Our <span className="text-[#1A56DB] dark:text-blue-400">Track Record</span>
            </>
          }
          subtitle={
            <>
              The Numbers Behind{" "}
              <a href="#success" className="text-[#1A56DB] dark:text-blue-400 hover:underline font-semibold">
                Our Success
              </a>
            </>
          }
        />

        {/* 3 Stats Grid with Oval Pill Badges & Vertical Dividers matching Screenshot 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-800">
          {TRACK_RECORD_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center pt-6 md:pt-0 px-6 group"
            >
              <div className="px-8 py-2.5 rounded-full bg-[#EBF3FF] dark:bg-blue-950/60 text-[#1A56DB] dark:text-blue-300 font-black text-xl sm:text-2xl shadow-2xs group-hover:scale-105 transition-transform mb-4">
                {stat.value}
              </div>
              <p className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200 max-w-xs leading-snug text-center">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
