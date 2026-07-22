export interface ApiResponse<T = unknown> {
  success: boolean;
  message?: string;
  referralId?: string;
  data?: T;
  error?: string;
  details?: Record<string, string[]>;
}

export type SectionId =
  | "home"
  | "stats"
  | "clients"
  | "accredian-edge"
  | "benefits"
  | "testimonials"
  | "faqs";
