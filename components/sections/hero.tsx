import React from "react";
import PlusCornerSection from "../global/plus-section";

export default function Hero() {
  return (
    <PlusCornerSection className="border-y">
      <div className="mx-auto max-w-[800px] space-y-14 p-16">
        <h1 className="text-3xl font-bold leading-normal tracking-tighter sm:text-4xl md:text-6xl">
          Innovating Africa, One Solution at a Time.
        </h1>
        <p className="text-gray-500 dark:text-gray-400 md:text-xl">
          NexTech is redefining technology in Africa by building cutting-edge
          tools, open-source projects, and innovative SaaS solutions—designed
          for businesses, developers, and the future.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <a
            className="flex h-10 items-center justify-center gap-2 rounded-full border border-solid border-transparent bg-foreground px-4 text-sm text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] sm:h-12 sm:px-5 sm:text-base"
            href="/#solutions"
            rel="noopener noreferrer"
          >
            Explore Our Solutions
          </a>
          <a
            className="flex h-10 items-center justify-center rounded-full border border-solid border-black/[.08] px-4 text-sm transition-colors hover:border-transparent hover:bg-[#f2f2f2] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] sm:h-12 sm:min-w-44 sm:px-5 sm:text-base"
            href="/contact"
            rel="noopener noreferrer"
          >
            Join the Innovation
          </a>
        </div>
      </div>
    </PlusCornerSection>
  );
}
