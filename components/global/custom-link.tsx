import React from "react";

type LinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  isExternal?: boolean;
};

export default function CustomLink({ href, children, isExternal }: LinkProps) {
  return (
    <a
      className="z-30 flex h-10 items-center justify-center gap-2 rounded-full border border-solid border-transparent bg-foreground px-4 text-sm text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] sm:h-12 sm:px-5 sm:text-base"
      href={href}
      target={isExternal ? "_blank" : "_self"}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
