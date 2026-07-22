"use client";

import React, { useState } from "react";
import { Sparkles, PhoneCall, X } from "lucide-react";

export const TopBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-brand-900 via-brand-700 to-blue-700 text-white text-xs sm:text-sm py-2.5 px-4 shadow-xs z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <Sparkles className="w-4 h-4 text-amber-300 animate-pulse shrink-0 hidden sm:block" />
          <p className="font-medium text-center sm:text-left">
            Navigate your career path with tailored guidance!
          </p>
          <a
            href="#expert-guidance"
            className="inline-flex items-center gap-1 font-semibold text-brand-100 hover:text-white underline underline-offset-4 ml-1 transition-colors group"
          >
            <span>Talk to Expert</span>
            <PhoneCall className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          aria-label="Dismiss banner"
          className="text-white/70 hover:text-white p-1 rounded-md hover:bg-white/10 transition-colors shrink-0"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
