import React from "react";
import {
  Lightbulb,
  Brain,
  Users,
  BarChart3,
  Settings,
  Globe,
  CreditCard,
} from "lucide-react";
import {
  CompanyPartner,
  StatItem,
  EdgePillar,
  DomainExpertiseItem,
  CourseSegment,
} from "@/types";

export const PARTNER_COMPANIES: CompanyPartner[] = [
  {
    name: "Reliance Industries Limited",
    logoSvg: (
      <div className="flex items-center gap-2 font-black text-slate-800 dark:text-slate-200">
        <div className="w-9 h-9 rounded-full bg-amber-500 text-white font-serif font-black flex items-center justify-center text-sm shadow-xs">
          R
        </div>
        <div className="flex flex-col text-left leading-none">
          <span className="text-base font-bold">Reliance</span>
          <span className="text-[8px] font-medium tracking-wider text-slate-500 uppercase">
            Industries Limited
          </span>
        </div>
      </div>
    ),
  },
  {
    name: "HCL Technologies",
    logoSvg: (
      <span className="text-2.5xl font-black italic tracking-tighter text-[#1A56DB] dark:text-blue-400">
        HCL
      </span>
    ),
  },
  {
    name: "IBM",
    logoSvg: (
      <span className="text-2.5xl font-black tracking-widest text-[#1A56DB] dark:text-blue-400 font-mono">
        IBM
      </span>
    ),
  },
  {
    name: "CRIF",
    logoSvg: (
      <div className="flex flex-col items-center">
        <span className="text-2xl font-extrabold tracking-tight text-[#0083B0] dark:text-cyan-400 italic">
          CRIF
        </span>
        <span className="text-[7px] text-slate-400 uppercase tracking-widest font-semibold">
          Together to the next level
        </span>
      </div>
    ),
  },
  {
    name: "ADP",
    logoSvg: (
      <span className="text-2.5xl font-black tracking-wider text-[#D12B2B] dark:text-rose-400">
        ADP
      </span>
    ),
  },
  {
    name: "BAYER",
    logoSvg: (
      <div className="w-11 h-11 rounded-full border-2 border-emerald-500 flex items-center justify-center p-1">
        <span className="text-[9px] font-black tracking-widest text-emerald-600 dark:text-emerald-400 text-center leading-tight">
          BAYER
        </span>
      </div>
    ),
  },
];

export const TRACK_RECORD_STATS: StatItem[] = [
  {
    value: "10K+",
    description: "Professionals Trained For Exceptional Career Success",
  },
  {
    value: "200+",
    description: "Sessions Delivered With Unmatched Learning Excellence",
  },
  {
    value: "5K+",
    description: "Active Learners Engaged In Dynamic Courses",
  },
];

export const ACCREDIAN_EDGE_PILLARS: EdgePillar[] = [
  {
    title: "Tailored Solutions",
    description: "Programs customized to your organization's goals and challenges.",
  },
  {
    title: "Innovative Framework",
    description: "Proprietary methods for impactful, application-driven results.",
  },
  {
    title: "Diverse Offerings",
    description: "Courses across industries, skill levels, and emerging fields.",
  },
  {
    title: "Flexible Delivery",
    description: "Online and offline options tailored to your needs.",
  },
];

export const DOMAIN_EXPERTISE: DomainExpertiseItem[] = [
  {
    title: "Product & Innovation Hub",
    icon: <Lightbulb className="w-14 h-14" />,
  },
  {
    title: "Gen-AI Mastery",
    icon: <Brain className="w-14 h-14" />,
  },
  {
    title: "Leadership Elevation",
    icon: <Users className="w-14 h-14" />,
  },
  {
    title: "Tech & Data Insights",
    icon: <BarChart3 className="w-14 h-14" />,
  },
  {
    title: "Operations Excellence",
    icon: <Settings className="w-14 h-14" />,
  },
  {
    title: "Digital Enterprise",
    icon: <Globe className="w-14 h-14" />,
  },
  {
    title: "Fintech Innovation Lab",
    icon: <CreditCard className="w-14 h-14" />,
  },
];

export const COURSE_CARDS: CourseSegment[] = [
  {
    title: "Program Specific",
    tags: "Certificate, Executive, Post Graduate Certificate",
    imageUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80",
    alt: "Program Specific Course Analytics",
  },
  {
    title: "Industry Specific",
    tags: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
    imageUrl: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=600&q=80",
    alt: "Industry Specific Futuristic Technology",
  },
  {
    title: "Topic Specific",
    tags: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
    alt: "Topic Specific Coding and Data Science",
  },
  {
    title: "Level Specific",
    tags: "Senior Leadership, Mid-Career Professionals, Freshers",
    imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80",
    alt: "Level Specific Executive Leadership Meeting",
  },
];
