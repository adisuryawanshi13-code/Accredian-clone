"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Statistics } from "@/components/sections/Statistics";
import { TrustedCompanies } from "@/components/sections/TrustedCompanies";
import { Features } from "@/components/sections/Features";
import { Benefits } from "@/components/sections/Benefits";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { ReferralModal } from "@/components/shared/ReferralModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-500 selection:text-white">
      {/* 1. Navigation Bar */}
      <Navbar onEnquireClick={() => setIsModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section (Screenshot 4) */}
        <Hero onEnquireClick={() => setIsModalOpen(true)} />

        {/* 3. Our Track Record (Statistics - Screenshot 1) */}
        <Statistics />

        {/* 4. Our Proven Partnerships (Trusted Companies - Screenshot 1 & 3) */}
        <TrustedCompanies />

        {/* 5. The Accredian Edge & Our Domain Expertise (Features - Screenshot 3 & 2) */}
        <Features />

        {/* 6. Tailored Course Segmentation (Benefits - Screenshot 5) */}
        <Benefits />

        {/* 7. Client Testimonials (Dynamic API Fetch) */}
        <Testimonials />

        {/* 8. Frequently Asked Questions (Dynamic API Fetch) */}
        <FAQ />

        {/* 9. Final Call to Action */}
        <CTA
          onEnquireClick={() => setIsModalOpen(true)}
          onReferClick={() => setIsModalOpen(true)}
        />
      </main>

      {/* 10. Application Footer */}
      <Footer />

      {/* Interactive Referral Modal */}
      <ReferralModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
