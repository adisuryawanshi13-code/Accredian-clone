"use client";

import React, { useId } from "react";
import { Button } from "@/shared/components/ui/Button";
import { Input } from "@/shared/components/ui/Input";
import { Card, CardTitle, CardDescription, CardContent } from "@/shared/components/ui/Card";
import { X, Gift, CheckCircle2, Send } from "lucide-react";
import { useReferralForm } from "../hooks/useReferralForm";

export interface ReferralModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReferralModal: React.FC<ReferralModalProps> = ({
  isOpen,
  onClose,
}) => {
  const titleId = useId();
  const descId = useId();

  const {
    isSubmitted,
    submittedData,
    onSubmit,
    handleReset,
    isSubmitting,
    errors,
    register,
  } = useReferralForm({ onClose });

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      aria-describedby={descId}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-lg">
        <Card variant="bordered" className="bg-white dark:bg-slate-900 shadow-2xl p-0 overflow-hidden border-slate-200 dark:border-slate-800">
          <div className="p-6 bg-gradient-to-r from-blue-900 to-[#1047B8] text-white relative">
            <button
              onClick={handleReset}
              aria-label="Close modal"
              className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-200 mb-1">
              <Gift className="w-4 h-4 text-amber-300" />
              <span>Earn Up to ₹15,000 Cash Reward</span>
            </div>
            <CardTitle id={titleId} className="text-2xl text-white">
              Refer a Friend or Colleague
            </CardTitle>
            <CardDescription id={descId} className="text-blue-100 text-xs mt-1">
              Enter your details and referee info below to generate instant rewards.
            </CardDescription>
          </div>

          <CardContent className="p-6">
            {isSubmitted ? (
              <div className="py-8 text-center flex flex-col items-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                  Referral Recorded!
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 max-w-xs">
                  We sent an invitation to <strong className="text-slate-900 dark:text-white">{submittedData?.refereeEmail}</strong>. Referral ID: <span className="font-mono font-bold text-blue-600">{submittedData?.referralId}</span>.
                </p>
                <Button variant="primary" className="mt-4 bg-[#1047B8]" onClick={handleReset}>
                  Submit Another Referral
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                {/* Referrer Info */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Your Information (Referrer)
                  </h4>
                  <Input
                    label="Your Full Name"
                    placeholder="John Doe"
                    error={errors.referrerName?.message}
                    {...register("referrerName")}
                  />
                  <Input
                    label="Your Email Address"
                    type="email"
                    placeholder="john@example.com"
                    error={errors.referrerEmail?.message}
                    {...register("referrerEmail")}
                  />
                </div>

                {/* Referee Info */}
                <div className="space-y-3 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Friend's Information (Referee)
                  </h4>
                  <Input
                    label="Friend's Full Name"
                    placeholder="Jane Smith"
                    error={errors.refereeName?.message}
                    {...register("refereeName")}
                  />
                  <Input
                    label="Friend's Email Address"
                    type="email"
                    placeholder="jane@example.com"
                    error={errors.refereeEmail?.message}
                    {...register("refereeEmail")}
                  />
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                      Target Program
                    </label>
                    <select
                      {...register("program")}
                      className="w-full h-11 px-4 text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Product Management">Product Management</option>
                      <option value="Data Science & AI">Data Science & AI</option>
                      <option value="Gen-AI Mastery">Gen-AI Mastery</option>
                      <option value="Executive Leadership">Executive Leadership</option>
                      <option value="Business Analytics">Business Analytics</option>
                    </select>
                    {errors.program && (
                      <p className="text-xs font-medium text-rose-500 mt-1">
                        {errors.program.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-end gap-3">
                  <Button variant="ghost" onClick={handleReset} type="button">
                    Cancel
                  </Button>
                  <Button
                    variant="primary"
                    type="submit"
                    isLoading={isSubmitting}
                    leftIcon={<Send className="w-4 h-4" />}
                    className="bg-[#1047B8] hover:bg-[#0c3691]"
                  >
                    Submit Referral
                  </Button>
                </div>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
