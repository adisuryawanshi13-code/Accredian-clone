import { SectionId } from "@/shared/types/common.types";

export interface NavItem {
  label: string;
  href: string;
}

export const ENTERPRISE_NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Stats", href: "#stats" },
  { label: "Clients", href: "#clients" },
  { label: "Accredian Edge", href: "#accredian-edge" },
  { label: "CAT", href: "#cat" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQs", href: "#faqs" },
  { label: "Testimonials", href: "#testimonials" },
];

export const NAVIGATION_SECTION_IDS: SectionId[] = [
  "home",
  "stats",
  "clients",
  "accredian-edge",
  "benefits",
  "testimonials",
  "faqs",
];
