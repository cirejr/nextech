"use client";

import Link from "next/link";
import {
  ExternalLink,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  Moon,
  Sun,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useState, useEffect } from "react";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface SocialLink extends FooterLink {
  icon: LucideIcon;
}

const productLinks: FooterLink[] = [
  { label: "AI", href: "#" },
  { label: "Compare Price", href: "#" },
  { label: "NxPay", href: "#" },
  { label: "NxUI", href: "#" },
  { label: "Excel Genie", href: "#" },
];

const resourceLinks: FooterLink[] = [
  { label: "Community", href: "#", external: true },
  { label: "Help", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Resources", href: "#" },
  { label: "Templates", href: "#" },
];

const companyLinks: FooterLink[] = [
  { label: "About", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "Customers", href: "#" },
  { label: "Partners", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Legal", href: "#" },
];

const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "#", icon: GithubIcon },
  { label: "LinkedIn", href: "#", icon: LinkedinIcon },
  { label: "Twitter", href: "#", icon: TwitterIcon },
];

interface FooterColumnProps {
  title: string;
  links: FooterLink[] | SocialLink[];
  isSocial?: boolean;
}

function FooterColumn({ title, links, isSocial = false }: FooterColumnProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      <ul className="space-y-3 text-sm">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="inline-flex items-center transition-colors hover:text-foreground"
            >
              {isSocial && "icon" in link && (
                <link.icon className="mr-2 h-4 w-4" />
              )}
              {link.label}
              {link.external && <ExternalLink className="ml-1 h-3 w-3" />}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme) {
      setTheme(savedTheme as "light" | "dark");
    } else if (prefersDark) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    // Apply theme to document and save preference
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <footer className="container mx-auto max-w-[1080px] text-muted-foreground dark:bg-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">
          <FooterColumn title="Products" links={productLinks} />
          <FooterColumn title="Resources" links={resourceLinks} />
          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Social" links={socialLinks} isSocial />
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 flex flex-col justify-between space-y-4 border-t pt-8 md:flex-row md:space-y-0">
          <div className="flex items-center space-x-2 text-sm">
            <div className="h-2 w-2 rounded-full bg-blue-500"></div>
            <span>All rights reserved.</span>
          </div>
          <div className="flex space-x-4">
            <button
              className="h-8 w-8 rounded-full border p-1.5 transition-colors hover:bg-accent dark:text-muted-foreground"
              aria-label="Toggle theme"
              onClick={toggleTheme}
            >
              {theme === "dark" ? (
                <Sun className="h-full w-full" />
              ) : (
                <Moon className="h-full w-full" />
              )}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
