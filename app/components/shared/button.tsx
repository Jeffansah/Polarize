"use client";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  href?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = "default", href, ...props }, ref) => {
    const router = useRouter();

    return (
      <button
        className={cn(
          `focus-visible:ring-ring inline-flex cursor-pointer items-center justify-center rounded-full text-sm font-light tracking-wide transition-all duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 ${
            variant === "outline"
              ? "dark:hover:white border border-purple-500 bg-transparent text-purple-500 hover:bg-purple-500 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-purple-700"
              : "bg-purple-500 text-white hover:bg-purple-600 dark:bg-white dark:text-purple-700"
          } h-10 px-6 py-2`,
          className,
        )}
        ref={ref}
        {...props}
        onClick={(e) => {
          href && router.push(href);
        }}
      >
        {children}
      </button>
    );
  },
);
Button.displayName = "Button";
