import React from "react";
import { cn } from "@/shared/lib/utils";
import { ArrowRight, Loader2 } from "lucide-react";

export interface CTAButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "accent" | "gradient" | "glow";
  size?: "md" | "lg" | "xl";
  subtext?: string;
  icon?: React.ReactNode;
  isLoading?: boolean;
  fullWidth?: boolean;
}

export const CTAButton = React.forwardRef<HTMLButtonElement, CTAButtonProps>(
  (
    {
      className,
      children,
      variant = "primary",
      size = "lg",
      subtext,
      icon = <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />,
      isLoading = false,
      fullWidth = false,
      disabled,
      type = "button",
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "group relative inline-flex flex-col items-center justify-center font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] select-none rounded-2xl cursor-pointer";

    const variantStyles = {
      primary:
        "bg-brand-600 hover:bg-brand-700 text-white shadow-lg shadow-brand-600/25 hover:shadow-xl hover:shadow-brand-600/40",
      accent:
        "bg-cyan-500 hover:bg-cyan-600 text-slate-950 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40",
      gradient:
        "bg-gradient-to-r from-brand-600 via-blue-600 to-accent-500 text-white hover:opacity-95 shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/40 border border-white/20",
      glow:
        "bg-brand-600 text-white shadow-[0_0_25px_rgba(26,86,219,0.5)] hover:shadow-[0_0_35px_rgba(26,86,219,0.7)] hover:bg-brand-500 transition-shadow duration-300",
    };

    const sizeStyles = {
      md: "px-6 py-3 text-sm min-h-[48px]",
      lg: "px-8 py-4 text-base min-h-[56px]",
      xl: "px-10 py-5 text-lg min-h-[64px]",
    };

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || isLoading}
        aria-busy={isLoading}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && "w-full",
          className
        )}
        {...props}
      >
        <span className="inline-flex items-center gap-2.5">
          {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>
              <span>{children}</span>
              {icon && <span className="shrink-0">{icon}</span>}
            </>
          )}
        </span>
        {subtext && (
          <span className="text-[11px] font-normal opacity-80 mt-0.5 tracking-wide">
            {subtext}
          </span>
        )}
      </button>
    );
  }
);

CTAButton.displayName = "CTAButton";
