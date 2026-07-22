import React from "react";
import { cn } from "@/lib/utils";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "text" | "circular" | "rectangular" | "rounded";
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className,
  variant = "rounded",
  ...props
}) => {
  const variantStyles = {
    text: "h-4 w-full rounded-md",
    circular: "rounded-full",
    rectangular: "rounded-none",
    rounded: "rounded-2xl",
  };

  return (
    <div
      className={cn(
        "animate-pulse bg-slate-200/80 dark:bg-slate-800/80",
        variantStyles[variant],
        className
      )}
      {...props}
    />
  );
};
