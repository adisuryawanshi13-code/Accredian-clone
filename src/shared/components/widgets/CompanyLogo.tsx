import React from "react";
import { cn } from "@/shared/lib/utils";

export interface CompanyLogoProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  logoSrc?: string;
  alt?: string;
}

export const CompanyLogo: React.FC<CompanyLogoProps> = ({
  name,
  logoSrc,
  alt,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center p-4 sm:p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-xs hover:shadow-md hover:border-slate-200 dark:hover:border-slate-700 transition-all duration-300 group grayscale hover:grayscale-0",
        className
      )}
      {...props}
    >
      {logoSrc ? (
        <img
          src={logoSrc}
          alt={alt || `${name} logo`}
          className="max-h-12 w-auto object-contain opacity-75 group-hover:opacity-100 transition-opacity"
          loading="lazy"
        />
      ) : (
        <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {name}
        </span>
      )}
    </div>
  );
};
