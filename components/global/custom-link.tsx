import { cn } from "@/lib/utils";
import React from "react";

type LinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  isExternal?: boolean;
  className?: string;
};

export default function CustomLink({
  href,
  children,
  isExternal,
  variant = "primary",
  className,
}: LinkProps) {
  return (
    <a
      className={cn(
        `font-normal z-30 flex h-10 items-center justify-center gap-2 rounded-full border border-solid px-4 text-sm transition-colors  sm:h-12 sm:px-5 sm:text-base ${
          variant === "secondary" &&
          " border-black/[.08] hover:border-transparent hover:bg-[#f2f2f2] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
        } ${
          variant === "primary" &&
          "bg-foreground text-background border-transparent hover:bg-[#383838] dark:hover:bg-[#ccc]"
        }`,
        className
      )}
      href={href}
      target={isExternal ? "_blank" : "_self"}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
