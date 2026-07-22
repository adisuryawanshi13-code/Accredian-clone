import React from "react";

export interface EnterpriseProgram {
  id: string;
  title: string;
  category: string;
  duration: string;
  description: string;
  outcomes: string[];
}

export interface Testimonial {
  id?: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}

export interface CompanyPartner {
  name: string;
  logoSvg: React.ReactNode;
}

export interface TrackRecordStat {
  value: string;
  description: string;
}

export interface CourseSegment {
  title: string;
  tags: string[];
  icon: React.ReactNode;
  gradient: string;
}

export interface Pillar {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface DomainExpertiseItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  badge?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
