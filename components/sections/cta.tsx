import React from "react";
import TwoGridSection from "../global/two-grid-section";
import CustomLink from "../global/custom-link";

export default function CTA() {
  return (
    <TwoGridSection
      cornerPlus={false}
      className="border-x-0 border-b border-t-0 sm:min-h-fit"
      childrenWrapperClassName="mx-auto flex flex-col items-center justify-center space-y-6"
    >
      <h1 className="text-3xl font-bold">
        Are you ready to take your business to the next level?
      </h1>
      <p className="text-lg font-normal leading-normal text-muted-foreground">
        Talk to an expert for your PRO or ENTREPRISE needs.
      </p>
      <div className="flex w-full flex-1 items-center justify-center gap-4">
        <CustomLink href="/#solutions" className="translate-x-[-50px]">
          Check Our Solutions
        </CustomLink>
        <CustomLink href="/contact" variant="secondary">
          Contact Sales
        </CustomLink>
      </div>
    </TwoGridSection>
  );
}
