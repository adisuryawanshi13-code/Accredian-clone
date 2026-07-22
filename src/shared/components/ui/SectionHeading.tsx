import React from "react";
import { cn } from "@/shared/lib/utils";

export interface SectionHeadingProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  badge?: React.ReactNode;
  align?: "left" | "center" | "right";
  size?: "sm" | "md" | "lg";
}

export const SectionHeading = React.forwardRef<HTMLDivElement, SectionHeadingProps>(
  (
    {
      className,
      title,
      subtitle,
      badge,
      align = "center",
      size = "md",
      ...props
    },
    ref
  ) => {
    const alignStyles = {
      left: "text-left items-start",
      center: "text-center items-center",
      right: "text-right items-end",
    };

    const titleSizeStyles = {
      sm: "text-2xl sm:text-3xl font-bold tracking-tight",
      md: "text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight",
      lg: "text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col mb-12 sm:mb-16",
          alignStyles[align],
          className
        )}
        {...props}
      >
        {badge && <div className="mb-3">{badge}</div>}
        <h2
          className={cn(
            "text-slate-900 dark:text-white leading-tight",
            titleSizeStyles[size]
          )}
        >
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    );
  }
);

SectionHeading.displayName = "SectionHeading";
