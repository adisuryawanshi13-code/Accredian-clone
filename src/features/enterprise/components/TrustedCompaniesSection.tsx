"use client";

import React from "react";
import { Container } from "@/shared/components/ui/Container";
import { PARTNER_COMPANIES, TRACK_RECORD_STATS } from "../constants/enterprise.constants";

export const TrustedCompaniesSection: React.FC = () => {
  return (
    <section id="stats" className="py-16 sm:py-20 bg-white dark:bg-slate-950">
      <Container size="xl">
        {/* Track Record Stats Block matching Screenshot 1 */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Our{" "}
            <span className="text-[#1A56DB] dark:text-blue-400">
              Track Record
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 font-medium">
            The Numbers Behind{" "}
            <a
              href="#success"
              className="text-[#1A56DB] dark:text-blue-400 hover:underline font-semibold"
            >
              Our Success
            </a>
          </p>

          {/* 3 Stats Grid with Oval Pill Badges & Vertical Dividers matching Screenshot 1 */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-800">
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
        </div>

        {/* Proven Partnerships Block matching Screenshot 1 & 3 */}
        <div id="clients" className="pt-12 border-t border-slate-100 dark:border-slate-800">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              Our Proven{" "}
              <span className="text-[#1A56DB] dark:text-blue-400">
                Partnerships
              </span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 font-medium">
              Successful Collaborations With the{" "}
              <a
                href="#industry"
                className="text-[#1A56DB] dark:text-blue-400 hover:underline font-semibold"
              >
                Industry's Best
              </a>
            </p>
          </div>

          {/* Clean Logo Row without box borders matching Screenshot 1 & 3 */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-10 items-center justify-center py-6">
            {PARTNER_COMPANIES.map((company) => (
              <div
                key={company.name}
                className="flex items-center justify-center p-4 transition-transform duration-300 hover:scale-105 select-none"
              >
                {company.logoSvg}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
