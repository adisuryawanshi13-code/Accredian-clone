import React from "react";
import { cn } from "@/shared/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?:
    | "primary"
    | "secondary"
    | "accent"
    | "success"
    | "warning"
    | "danger"
    | "outline"
    | "glass";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      className,
      children,
      variant = "primary",
      size = "md",
      icon,
      ...props
    },
    ref
  ) => {
    const variantStyles = {
      primary:
        "bg-brand-50 text-brand-700 border border-brand-200/60 dark:bg-brand-950/50 dark:text-brand-300 dark:border-brand-800/40",
      secondary:
        "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
      accent:
        "bg-cyan-50 text-cyan-700 border border-cyan-200/60 dark:bg-cyan-950/50 dark:text-cyan-300",
      success:
        "bg-emerald-50 text-emerald-700 border border-emerald-200/60 dark:bg-emerald-950/50 dark:text-emerald-300",
      warning:
        "bg-amber-50 text-amber-700 border border-amber-200/60 dark:bg-amber-950/50 dark:text-amber-300",
      danger:
        "bg-rose-50 text-rose-700 border border-rose-200/60 dark:bg-rose-950/50 dark:text-rose-300",
      outline:
        "border border-slate-300 text-slate-700 dark:border-slate-700 dark:text-slate-300",
      glass:
        "bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-white/30 text-slate-800 dark:text-slate-200 shadow-xs",
    };

    const sizeStyles = {
      sm: "px-2 py-0.5 text-xs font-semibold rounded-md gap-1",
      md: "px-3 py-1 text-xs font-semibold rounded-full gap-1.5",
      lg: "px-3.5 py-1.5 text-sm font-semibold rounded-full gap-2",
    };

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-colors select-none",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {icon && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
      </span>
    );
  }
);

Badge.displayName = "Badge";
