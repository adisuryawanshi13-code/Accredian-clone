import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { GraduationCap, Mail, Phone, MapPin, Heart } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-900">
      <Container size="xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-900">
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col items-start space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#1A56DB] flex items-center justify-center text-white">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white tracking-tight">
                  accredian
                </span>
                <span className="text-[9px] font-semibold text-blue-400 uppercase tracking-widest -mt-1">
                  credentials that matter
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Accredian is India's leading executive education platform delivering
              impactful, application-driven career certifications in AI, Management,
              and Product Strategy.
            </p>

            <div className="space-y-2 text-xs text-slate-400 pt-2">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-500" />
                <span>enterprise@accredian.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-500" />
                <span>+91 96258 11015</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-500" />
                <span>Gurugram, Haryana, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#stats" className="hover:text-white transition-colors">
                  Track Record
                </a>
              </li>
              <li>
                <a href="#clients" className="hover:text-white transition-colors">
                  Partnerships
                </a>
              </li>
              <li>
                <a href="#accredian-edge" className="hover:text-white transition-colors">
                  Accredian Edge
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-white transition-colors">
                  Course Segmentation
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Programs
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#product-management" className="hover:text-white transition-colors">
                  Product Management
                </a>
              </li>
              <li>
                <a href="#data-science" className="hover:text-white transition-colors">
                  Data Science & AI
                </a>
              </li>
              <li>
                <a href="#gen-ai" className="hover:text-white transition-colors">
                  Gen-AI Mastery
                </a>
              </li>
              <li>
                <a href="#executive" className="hover:text-white transition-colors">
                  Executive Leadership
                </a>
              </li>
              <li>
                <a href="#fintech" className="hover:text-white transition-colors">
                  Fintech Innovation
                </a>
              </li>
            </ul>
          </div>

          {/* Legal / Support */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Legal & Support
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#faqs" className="hover:text-white transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#referral-terms" className="hover:text-white transition-colors">
                  Referral Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Accredian. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for Enterprise Leaders & Learners
          </p>
        </div>
      </Container>
    </footer>
  );
};
