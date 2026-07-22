import React from "react";
import { cn } from "@/shared/lib/utils";

export interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  icon: React.ReactNode;
  badge?: string;
  variant?: "default" | "outline" | "glass" | "interactive";
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  badge,
  variant = "interactive",
  className,
  ...props
}) => {
  const variantStyles = {
    default: "bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xs",
    outline: "bg-transparent border-2 border-slate-200 dark:border-slate-700",
    glass: "bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-white/40 dark:border-slate-800 shadow-sm",
    interactive:
      "bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group",
  };

  return (
    <div
      className={cn(
        "rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center relative overflow-hidden select-none",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {badge && (
        <span className="absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 rounded-full">
          {badge}
        </span>
      )}

      {/* Icon Container */}
      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-blue-50 dark:bg-slate-800/80 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-xs">
        {icon}
      </div>

      {/* Content */}
      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {title}
      </h3>

      {description && (
        <p className="mt-2.5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
};
