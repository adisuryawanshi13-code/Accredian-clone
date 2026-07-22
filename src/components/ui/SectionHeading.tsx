import React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center" | "right";
}

export const SectionHeading = React.forwardRef<HTMLDivElement, SectionHeadingProps>(
  (
    {
      className,
      title,
      subtitle,
      align = "center",
      ...props
    },
    ref
  ) => {
    const alignStyles = {
      left: "text-left items-start",
      center: "text-center items-center",
      right: "text-right items-end",
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
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 font-medium max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    );
  }
);

SectionHeading.displayName = "SectionHeading";
