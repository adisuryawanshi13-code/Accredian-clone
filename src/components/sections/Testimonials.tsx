"use client";

import React, { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Card, CardContent } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Star, Quote, Building2, Loader2 } from "lucide-react";
import { Testimonial, ApiResponse } from "@/types";

export const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch("/api/testimonials");
        const json: ApiResponse<Testimonial[]> = await res.json();
        if (json.success && json.data) {
          setTestimonials(json.data);
        }
      } catch (err) {
        console.error("Failed to fetch testimonials", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-slate-50/70 dark:bg-slate-900/40">
      <Container size="xl">
        <SectionHeading
          title={
            <>
              What <span className="text-[#1A56DB] dark:text-blue-400">Enterprise Clients Say</span>
            </>
          }
          subtitle="Real Impact Delivered for Industry Leaders"
        />

        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-8 h-8 text-[#1A56DB] animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <Card
                key={t.id}
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
                    <div className="flex items-center gap-1 text-xs font-semibold text-[#1A56DB] dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 rounded-lg">
                      <Building2 className="w-3.5 h-3.5" />
                      <span>{t.company.split(" ")[0]}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};
