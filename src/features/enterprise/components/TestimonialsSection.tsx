"use client";

import React from "react";
import { Container } from "@/shared/components/ui/Container";
import { Card, CardContent } from "@/shared/components/ui/Card";
import { Star, Quote, Building2 } from "lucide-react";
import { TESTIMONIALS } from "../constants/enterprise.constants";

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-slate-50/70 dark:bg-slate-900/40">
      <Container size="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What{" "}
            <span className="text-[#1047B8] dark:text-blue-400">
              Enterprise Clients Say
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 font-medium">
            Real Impact Delivered for Industry Leaders
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <Card
              key={idx}
              variant="interactive"
              className="flex flex-col justify-between p-8 border-slate-200 dark:border-slate-800"
            >
              <CardContent className="p-0 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-1 mb-4 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <Quote className="w-8 h-8 text-blue-200 dark:text-blue-900 mb-2" />
                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div>
                    <p className="text-base font-bold text-slate-900 dark:text-white">
                      {t.author}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      {t.role}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 rounded-lg">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{t.company.split(" ")[0]}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
