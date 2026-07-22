import React from "react";
import {
  Lightbulb,
  Cpu,
  Layers,
  Package,
  Brain,
  Users,
  BarChart3,
  Settings,
  Globe,
  CreditCard,
  Award,
  Building2,
  BookOpen,
  UserCheck,
} from "lucide-react";
import {
  CompanyPartner,
  TrackRecordStat,
  Pillar,
  DomainExpertiseItem,
  CourseSegment,
  Testimonial,
  FAQItem,
} from "../types/enterprise.types";

export const PARTNER_COMPANIES: CompanyPartner[] = [
  {
    name: "Reliance Industries Limited",
    logoSvg: (
      <div className="flex items-center gap-2 font-black text-slate-800 dark:text-slate-200">
        <div className="w-8 h-8 rounded-full bg-amber-500 text-white font-serif font-black flex items-center justify-center text-sm shadow-xs">
          R
        </div>
        <div className="flex flex-col text-left leading-none">
          <span className="text-sm font-bold tracking-tight">Reliance</span>
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
      <span className="text-2xl font-black italic tracking-tighter text-blue-700 dark:text-blue-400">
        HCL
      </span>
    ),
  },
  {
    name: "IBM",
    logoSvg: (
      <span className="text-2xl font-black tracking-widest text-blue-600 dark:text-blue-400 font-mono">
        IBM
      </span>
    ),
  },
  {
    name: "CRIF",
    logoSvg: (
      <div className="flex flex-col items-center">
        <span className="text-xl font-extrabold tracking-tight text-cyan-600 dark:text-cyan-400 italic">
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
      <span className="text-2xl font-black tracking-wider text-rose-600 dark:text-rose-400">
        ADP
      </span>
    ),
  },
  {
    name: "BAYER",
    logoSvg: (
      <div className="w-10 h-10 rounded-full border-2 border-emerald-500 flex items-center justify-center p-1">
        <span className="text-[9px] font-black tracking-widest text-emerald-600 dark:text-emerald-400 text-center leading-tight">
          BAYER
        </span>
      </div>
    ),
  },
];

export const TRACK_RECORD_STATS: TrackRecordStat[] = [
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

export const ACCREDIAN_EDGE_PILLARS: Pillar[] = [
  {
    title: "Tailored Solutions",
    description: "Programs customized to your organization's goals and challenges.",
    icon: <Lightbulb className="w-7 h-7" />,
  },
  {
    title: "Innovative Framework",
    description: "Proprietary methods for impactful, application-driven results.",
    icon: <Cpu className="w-7 h-7" />,
  },
  {
    title: "Diverse Offerings",
    description: "Courses across industries, skill levels, and emerging fields.",
    icon: <Layers className="w-7 h-7" />,
  },
  {
    title: "Flexible Delivery",
    description: "Online and offline options tailored to your needs.",
    icon: <Package className="w-7 h-7" />,
  },
];

export const DOMAIN_EXPERTISE: DomainExpertiseItem[] = [
  {
    title: "Product & Innovation Hub",
    description: "Agile product management, design thinking & roadmapping.",
    icon: <Lightbulb className="w-7 h-7" />,
  },
  {
    title: "Gen-AI Mastery",
    description: "Prompt engineering, LLMs, and enterprise AI automation.",
    icon: <Brain className="w-7 h-7" />,
    badge: "Hot",
  },
  {
    title: "Leadership Elevation",
    description: "Executive decision making, change & global strategy.",
    icon: <Users className="w-7 h-7" />,
  },
  {
    title: "Tech & Data Insights",
    description: "Advanced analytics, machine learning & data engineering.",
    icon: <BarChart3 className="w-7 h-7" />,
  },
  {
    title: "Operations Excellence",
    description: "Lean Six Sigma, supply chain & process optimization.",
    icon: <Settings className="w-7 h-7" />,
  },
  {
    title: "Digital Enterprise",
    description: "Cloud migration, DevOps & enterprise IT transformation.",
    icon: <Globe className="w-7 h-7" />,
  },
  {
    title: "Fintech Innovation Lab",
    description: "Blockchain, digital payments & open banking ecosystems.",
    icon: <CreditCard className="w-7 h-7" />,
  },
];

export const COURSE_SEGMENTS: CourseSegment[] = [
  {
    title: "Program Specific",
    tags: ["Certificate", "Executive", "Post Graduate Certificate"],
    icon: <Award className="w-8 h-8 text-blue-600" />,
    gradient: "from-blue-500/10 via-indigo-500/5 to-transparent",
  },
  {
    title: "Industry Specific",
    tags: ["IT", "Healthcare", "Retail", "Finance", "Education", "Manufacturing"],
    icon: <Building2 className="w-8 h-8 text-cyan-600" />,
    gradient: "from-cyan-500/10 via-blue-500/5 to-transparent",
  },
  {
    title: "Topic Specific",
    tags: ["Machine Learning", "Design", "Analytics", "Cybersecurity", "Cloud"],
    icon: <BookOpen className="w-8 h-8 text-purple-600" />,
    gradient: "from-purple-500/10 via-indigo-500/5 to-transparent",
  },
  {
    title: "Level Specific",
    tags: ["Senior Leadership", "Mid-Career Professionals", "Freshers"],
    icon: <UserCheck className="w-8 h-8 text-emerald-600" />,
    gradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Accredian's tailored executive programs transformed our product strategy team. The practical application and mentorship delivered instant ROI for our enterprise.",
    author: "Vikram Malhotra",
    role: "VP of Product Engineering",
    company: "Enterprise Global Solutions",
    rating: 5,
  },
  {
    quote:
      "The Gen-AI and Data Analytics tracks surpassed our expectations. Over 300 of our senior leads were upskilled within 6 weeks with zero downtime.",
    author: "Ananya Sharma",
    role: "Chief Learning Officer",
    company: "TechScale Innovations",
    rating: 5,
  },
  {
    quote:
      "Seamless referral payouts and incredible program quality. Accredian is our go-to partner for leadership acceleration and workforce upskilling.",
    author: "Rajesh K. Nair",
    role: "Head of Talent Management",
    company: "FinTech Enterprises",
    rating: 5,
  },
];

export const FAQS: FAQItem[] = [
  {
    question: "How does the Accredian Referral & Enterprise Program work?",
    answer:
      "You can refer friends, colleagues, or teams to any Accredian executive program. Once your referee completes their enrollment, cash bonuses up to ₹15,000 are directly credited to your bank account.",
  },
  {
    question: "Who is eligible to participate in the referral bonus scheme?",
    answer:
      "Anyone can refer! Whether you are an existing Accredian student, an enterprise partner, or a working professional, you are eligible to earn guaranteed referral bonuses.",
  },
  {
    question: "When and how are referral rewards paid out?",
    answer:
      "Referral rewards are processed within 30 days post successful enrollment of the referee. Transfers are executed directly into your registered bank account or UPI ID.",
  },
  {
    question: "Can we customize enterprise training programs for our organization?",
    answer:
      "Yes! Accredian offers tailored enterprise solutions across Data Science, AI, Leadership, Product Management, and Operations tailored to your business goals.",
  },
  {
    question: "Is there a limit on how many referrals I can submit?",
    answer:
      "There is zero cap on referrals. You can refer as many colleagues or partners as you wish and earn rewards for every successful student.",
  },
];
