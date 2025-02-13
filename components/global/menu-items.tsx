"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const menuItems = [
  {
    title: "Products",
    items: [
      {
        title: "NxPay",
        href: "/products/nxpay",
        description:
          "A payment processor tailored for African developers and businesses.",
      },
      {
        title: "NxSheets",
        href: "/products/nxsheets",
        description:
          "Automate Excel file generation with AI-powered templates.",
      },
    ],
  },
  {
    title: "Open Source",
    items: [
      {
        title: "NxUI",
        href: "/open-source/nxui",
        description:
          "A modern UI component library optimized for performance and usability.",
      },
      {
        title: "NxAuth",
        href: "/open-source/nxauth",
        description: "A simple and secure authentication system for web apps.",
      },
    ],
  },
  {
    title: "Company",
    items: [
      {
        title: "About Us",
        href: "/company/about",
        description:
          "Learn more about NexTech's mission and vision for Africa.",
      },
      {
        title: "Careers",
        href: "/company/careers",
        description: "Join us in building the future of African technology.",
      },
    ],
  },
  {
    title: "Resources",
    items: [
      {
        title: "Templates",
        href: "/templates",
        description: "Free templates to get started.",
      },
      {
        title: "Blog",
        href: "/blog",
        description: "Insights, updates, and tech articles from our team.",
      },
    ],
  },
  {
    title: "Pricing",
    href: "#",
    items: [],
  },
  {
    title: "Contact Us",
    href: "#",
    items: [],
  },
];

export function MenuItems() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menuItems.map((section) => (
          <NavigationMenuItem key={section.title}>
            {section.items.length > 0 ? (
              <NavigationMenuTrigger className="rounded-full text-muted-foreground">
                {section.title}
              </NavigationMenuTrigger>
            ) : (
              <NavigationMenuItem>
                <Link href={section.title} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "rounded-full text-muted-foreground"
                    )}
                  >
                    {section.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            )}
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                {section.items.length > 0 &&
                  section.items.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                    >
                      {item.description}
                    </ListItem>
                  ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
