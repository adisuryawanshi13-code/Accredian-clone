"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PARTNER_COMPANIES } from "@/data/enterprise";

export const TrustedCompanies: React.FC = () => {
  return (
    <section id="clients" className="py-12 bg-white dark:bg-slate-950">
      <Container size="xl">
        <SectionHeading
          title={
            <>
              Our Proven <span className="text-[#1A56DB] dark:text-blue-400">Partnerships</span>
            </>
          }
          subtitle={
            <>
              Successful Collaborations With the{" "}
              <a href="#industry" className="text-[#1A56DB] dark:text-blue-400 hover:underline font-semibold">
                Industry's Best
              </a>
            </>
          }
        />

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
      </Container>
    </section>
  );
};
