"use client";

import React from "react";
import { Container } from "@/shared/components/ui/Container";
import { CTAButton } from "@/shared/components/ui/CTAButton";
import { Button } from "@/shared/components/ui/Button";
import { Sparkles, PhoneCall } from "lucide-react";

export interface CTASectionProps {
  onEnquireClick?: () => void;
  onReferClick?: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({
  onEnquireClick,
  onReferClick,
}) => {
  return (
    <section className="py-16 sm:py-20 bg-white dark:bg-slate-950">
      <Container size="xl">
        <div className="relative rounded-3xl bg-gradient-to-r from-blue-900 via-[#1047B8] to-blue-700 text-white p-8 sm:p-14 lg:p-16 overflow-hidden shadow-2xl">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-blue-100 text-xs font-bold mb-6 border border-white/20">
              <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
              <span>Transform Your Enterprise</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Ready to Accelerate Growth & Earn Rewards?
            </h2>

            <p className="mt-4 text-base sm:text-lg text-blue-100 font-medium max-w-xl leading-relaxed">
              Empower your team with industry-leading executive programs or refer
              colleagues to unlock up to ₹15,000 cash rewards per referral.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <CTAButton
                variant="accent"
                size="lg"
                onClick={onReferClick}
                subtext="Instant Code Generator"
              >
                Refer & Earn Now
              </CTAButton>

              <Button
                variant="glass"
                size="lg"
                onClick={onEnquireClick}
                leftIcon={<PhoneCall className="w-5 h-5 text-blue-700" />}
                className="w-full sm:w-auto font-bold text-slate-900"
              >
                Talk to Enterprise Expert
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
