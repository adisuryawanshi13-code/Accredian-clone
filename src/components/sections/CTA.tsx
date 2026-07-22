"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Gift, ArrowRight, ShieldCheck } from "lucide-react";

export interface CTAProps {
  onEnquireClick?: () => void;
  onReferClick?: () => void;
}

export const CTA: React.FC<CTAProps> = ({
  onEnquireClick,
  onReferClick,
}) => {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-slate-950">
      <Container size="xl">
        <div className="relative rounded-[32px] bg-gradient-to-br from-[#1A56DB] via-[#1047B8] to-[#0D3B99] text-white p-8 sm:p-14 lg:p-16 overflow-hidden shadow-2xl">
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 flex flex-col items-start space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-cyan-200 text-xs font-bold border border-white/20">
                <Gift className="w-4 h-4" />
                <span>Earn Guaranteed Bonuses up to ₹15,000</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                Ready to Upskill Your Enterprise or Refer a Peer?
              </h2>

              <p className="text-blue-100 text-base sm:text-lg max-w-2xl font-medium leading-relaxed">
                Connect with our corporate advisors today to design tailored upskilling programs or refer talented colleagues to unlock cash rewards.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-blue-200 pt-2">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>100% Guaranteed Rewards</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Dedicated Enterprise Advisor</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 w-full">
              <Button
                variant="primary"
                size="lg"
                onClick={onReferClick || onEnquireClick}
                rightIcon={<ArrowRight className="w-5 h-5" />}
                className="bg-white hover:bg-slate-100 text-[#1A56DB] font-extrabold shadow-lg hover:scale-105 transition-all text-base py-4 rounded-xl"
              >
                Refer Now & Earn
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={onEnquireClick}
                className="border-white/40 text-white hover:bg-white/10 font-bold text-base py-4 rounded-xl"
              >
                Enquire for Enterprise
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
