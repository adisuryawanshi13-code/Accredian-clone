import React from "react";

export interface NavItem {
  label: string;
  href: string;
}

export type SectionId =
  | "home"
  | "stats"
  | "clients"
  | "accredian-edge"
  | "benefits"
  | "testimonials"
  | "faqs";

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface StatItem {
  value: string;
  description: string;
}

export interface CompanyPartner {
  name: string;
  logoSvg: React.ReactNode;
}

export interface EdgePillar {
  title: string;
  description: string;
}

export interface DomainExpertiseItem {
  title: string;
  icon: React.ReactNode;
}

export interface CourseSegment {
  title: string;
  tags: string;
  imageUrl: string;
  alt: string;
}

export interface ReferralPayload {
  referrerName: string;
  referrerEmail: string;
  refereeName: string;
  refereeEmail: string;
  program: string;
  notes?: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message?: string;
  referralId?: string;
  data?: T;
  error?: string;
}
