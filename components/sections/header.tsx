import Link from "next/link";
import React from "react";
//import MobileSideMenu from "./mobile-side-menu";
import { MenuItems } from "../global/menu-items";

export default function Header() {
  return (
    <header className={`sticky top-0 z-50 h-16 w-full border-b bg-background`}>
      <div className="container mx-auto flex h-full max-w-[88rem] items-center gap-6">
        <Link
          className="flex items-center justify-center text-2xl font-medium"
          href="/"
        >
          Vetra
        </Link>

        <nav className="hidden items-center gap-4 sm:gap-6 md:flex">
          <MenuItems />
        </nav>
      </div>

      {/* <MobileSideMenu isGlassy /> */}
    </header>
  );
}
