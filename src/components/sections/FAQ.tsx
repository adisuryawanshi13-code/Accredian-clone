"use client";

import React, { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { ChevronDown, HelpCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { FAQItem, ApiResponse } from "@/types";

export const FAQ: React.FC = () => {
  const [faqs, setFaqs] = useState<FAQItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const res = await fetch("/api/faqs");
        const json: ApiResponse<FAQItem[]> = await res.json();
        if (json.success && json.data) {
          setFaqs(json.data);
        }
      } catch (err) {
        console.error("Failed to fetch FAQs", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-white dark:bg-slate-950">
      <Container size="md">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-[#1A56DB] dark:text-blue-300 text-xs font-bold mb-4">
            <HelpCircle className="w-4 h-4" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Frequently{" "}
            <span className="text-[#1A56DB] dark:text-blue-400">
              Asked Questions
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 font-medium">
            Everything you need to know about Accredian Enterprise & Referrals
          </p>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-8 h-8 text-[#1A56DB] animate-spin" />
          </div>
        ) : (
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={faq.id}
                  className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden transition-all duration-200 bg-white dark:bg-slate-900"
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200",
                        isOpen && "rotate-180 text-[#1A56DB]"
                      )}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-100 dark:border-slate-800/60 pt-4 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </Container>
    </section>
  );
};
