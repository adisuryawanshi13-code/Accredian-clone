"use client";

import React, { useState } from "react";
import { X, Gift, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ReferralPayload, ApiResponse } from "@/types";

export interface ReferralModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReferralModal: React.FC<ReferralModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState<ReferralPayload>({
    referrerName: "",
    referrerEmail: "",
    refereeName: "",
    refereeEmail: "",
    program: "Executive Program in Product Management",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);
    setSuccessMsg(null);

    try {
      const res = await fetch("/api/referral", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const json: ApiResponse = await res.json();

      if (json.success) {
        setSuccessMsg(json.message || "Referral submitted successfully!");
        setFormData({
          referrerName: "",
          referrerEmail: "",
          refereeName: "",
          refereeEmail: "",
          program: "Executive Program in Product Management",
          notes: "",
        });
      } else {
        setErrorMsg(json.error || "Failed to submit referral. Please try again.");
      }
    } catch {
      setErrorMsg("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-800">
        {/* Modal Header */}
        <div className="bg-[#1A56DB] text-white p-6 sm:p-8 relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-xs font-bold mb-3 border border-white/20">
            <Gift className="w-4 h-4 text-cyan-300" />
            <span>Earn Cash Bonus Up To ₹15,000</span>
          </div>

          <h3 className="text-2xl font-black tracking-tight">Refer a Colleague</h3>
          <p className="text-xs text-blue-100 mt-1 font-medium">
            Fill in your details & your referee to claim your referral reward.
          </p>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
          {successMsg ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                Referral Submitted!
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-xs mx-auto">
                {successMsg}
              </p>
              <Button
                variant="primary"
                onClick={() => setSuccessMsg(null)}
                className="mt-4"
              >
                Submit Another Referral
              </Button>
            </div>
          ) : (
            <>
              {errorMsg && (
                <div className="p-3 rounded-xl bg-rose-50 text-rose-600 text-xs font-semibold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    name="referrerName"
                    required
                    value={formData.referrerName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full h-10 px-3 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 focus:ring-2 focus:ring-[#1A56DB] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    name="referrerEmail"
                    required
                    value={formData.referrerEmail}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="w-full h-10 px-3 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 focus:ring-2 focus:ring-[#1A56DB] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Referee Full Name *
                  </label>
                  <input
                    type="text"
                    name="refereeName"
                    required
                    value={formData.refereeName}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    className="w-full h-10 px-3 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 focus:ring-2 focus:ring-[#1A56DB] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Referee Email Address *
                  </label>
                  <input
                    type="email"
                    name="refereeEmail"
                    required
                    value={formData.refereeEmail}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    className="w-full h-10 px-3 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 focus:ring-2 focus:ring-[#1A56DB] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Program of Interest *
                </label>
                <select
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  className="w-full h-10 px-3 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 focus:ring-2 focus:ring-[#1A56DB] outline-none"
                >
                  <option value="Executive Program in Product Management">
                    Executive Program in Product Management
                  </option>
                  <option value="Advanced Certification in Data Science & AI">
                    Advanced Certification in Data Science & AI
                  </option>
                  <option value="Gen-AI Leadership Masterclass">
                    Gen-AI Leadership Masterclass
                  </option>
                  <option value="Fintech & Digital Financial Innovation">
                    Fintech & Digital Financial Innovation
                  </option>
                </select>
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  fullWidth
                  isLoading={isSubmitting}
                  className="bg-[#1A56DB] hover:bg-[#1546b8] text-white py-3 rounded-xl font-bold"
                >
                  Submit Referral
                </Button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};
