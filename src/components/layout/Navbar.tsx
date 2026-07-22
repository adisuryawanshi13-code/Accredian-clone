"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ENTERPRISE_NAV_ITEMS, NAVIGATION_SECTION_IDS } from "@/data/navigation";
import { Menu, X, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionId } from "@/types";

export interface NavbarProps {
  onEnquireClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId | "">("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id as SectionId);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: "-20% 0px -50% 0px",
      threshold: 0.1,
    });

    NAVIGATION_SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    scrollToSection(targetId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800 transition-all duration-200",
        isScrolled ? "shadow-sm backdrop-blur-md bg-white/95 dark:bg-slate-900/95" : ""
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Accredian Logo matching Reference Screenshots */}
          <Link
            href="/"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2 group focus:outline-none"
            aria-label="Accredian Enterprise"
          >
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="text-2.5xl font-black tracking-tight text-[#1A56DB] dark:text-blue-400 font-sans">
                  accredian
                </span>
                <GraduationCap className="w-5 h-5 text-[#1A56DB] dark:text-blue-400" />
              </div>
              <span className="text-[9px] font-bold tracking-wider text-slate-400 uppercase -mt-1">
                credentials that matter
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links matching Screenshots */}
          <nav
            className="hidden md:flex items-center gap-6 lg:gap-7"
            aria-label="Main navigation"
          >
            {ENTERPRISE_NAV_ITEMS.map((item) => {
              const targetId = item.href.replace("#", "");
              const isActive = activeSection === targetId || (targetId === "home" && !activeSection);

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "text-sm font-semibold transition-colors py-2 relative cursor-pointer",
                    isActive
                      ? "text-[#1A56DB] dark:text-blue-400 font-extrabold"
                      : "text-slate-800 dark:text-slate-200 hover:text-[#1A56DB] dark:hover:text-blue-400"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1A56DB] rounded-full animate-in fade-in duration-200" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            className="p-2 md:hidden text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-4 space-y-3 shadow-lg animate-in slide-in-from-top duration-200">
          {ENTERPRISE_NAV_ITEMS.map((item) => {
            const targetId = item.href.replace("#", "");
            const isActive = activeSection === targetId;

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "block py-2 text-base font-medium transition-colors",
                  isActive
                    ? "text-[#1A56DB] font-bold"
                    : "text-slate-700 dark:text-slate-300 hover:text-[#1A56DB]"
                )}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
};
