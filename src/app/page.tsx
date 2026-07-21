"use client";

import React, { useState } from "react";
import { TopBanner, Navbar, Footer } from "@/components/layout";
import {
  HeroSection,
  TrustedCompaniesSection,
  FeaturesSection,
  BenefitsSection,
  TestimonialsSection,
  FAQSection,
  CTASection,
} from "@/components/sections";
import { ReferralModal } from "@/components/shared/ReferralModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-500 selection:text-white">
      {/* Announcement Bar */}
      <TopBanner />

      {/* Navigation Bar */}
      <Navbar onEnquireClick={() => setIsModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection onEnquireClick={() => setIsModalOpen(true)} />

        {/* 2. Track Record & Proven Partnerships */}
        <TrustedCompaniesSection />

        {/* 3. The Accredian Edge & Domain Expertise (Features) */}
        <FeaturesSection />

        {/* 4. Tailored Course Segmentation (Benefits) */}
        <BenefitsSection />

        {/* 5. Client Testimonials */}
        <TestimonialsSection />

        {/* 6. Frequently Asked Questions */}
        <FAQSection />

        {/* 7. Final Call to Action */}
        <CTASection
          onEnquireClick={() => setIsModalOpen(true)}
          onReferClick={() => setIsModalOpen(true)}
        />
      </main>

      {/* Application Footer */}
      <Footer />

      {/* Interactive Referral Modal */}
      <ReferralModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
