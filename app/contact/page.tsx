import ContactSales from "@/components/forms/contac-sales";
import TwoGridSection from "@/components/global/two-grid-section";
import { LaptopMinimalCheck, LayoutDashboard } from "lucide-react";
import React from "react";

export default function Page() {
  return (
    <div>
      <TwoGridSection
        className="container mx-auto my-16 border-x bg-slate-600 sm:min-h-fit sm:py-16"
        childrenWrapperClassName="mt-8 grid grid-cols-1 gap-6 bg-background p-0 lg:grid-cols-2 lg:gap-0 lg:bg-transparent"
        containerClassName="bg-transparent lg:bg-white dark:lg:bg-black"
        leftInnerContainerClassName="bg-background"
      >
        <div className="col-span-1 space-y-6 lg:mx-auto">
          <div className="mx-auto w-full space-y-2 px-6 font-normal">
            <h2 className="text-3xl font-medium leading-normal tracking-tighter">
              Talk to our Sales team.
            </h2>
            <div className="flex w-full flex-col justify-between gap-4 sm:flex-row lg:flex-col">
              <div className="text-base leading-8 text-muted-foreground">
                <p className="">
                  <span className="flex items-center gap-2 text-foreground">
                    <LayoutDashboard className="h-4 w-4" /> Get a custom demo
                  </span>
                  Discover the value of Vetra for your enterprise and explore
                  our custom plans and pricing.
                </p>
              </div>
              <div className="text-base leading-8 text-muted-foreground">
                <p className="">
                  <span className="flex items-center gap-2 text-foreground">
                    <LaptopMinimalCheck className="h-4 w-4" /> Set up your
                    Business&apos;s success.
                  </span>
                  See for yourself how Vetra Enterprise speeds up your workflow
                  & impact.
                </p>
              </div>
            </div>
          </div>
          <div className="hidden space-y-12 lg:block">
            <TwoGridSection
              cornerPlus={false}
              className="border-x-0 sm:min-h-[200px]"
              childrenWrapperClassName="my-auto grid h-full grid-cols-1 gap-6 lg:grid-cols-2"
            >
              <div className="col-span-1 space-y-6 text-lg font-normal">
                <p className="text-muted-foreground">
                  <span className="text-foreground">7-days MVP</span> to get
                  your business up
                </p>
              </div>
              <div className="col-span-1 space-y-6 text-lg font-normal">
                <p className="text-muted-foreground">
                  <span className="text-foreground">Best tools</span> to sustain
                  your growth
                </p>
              </div>
            </TwoGridSection>
            <div className="mx-auto px-6">
              <p className="text-lg font-normal text-muted-foreground">
                At Vetra, we make Africa GREAT, developers and businesses lives
                easier,{" "}
                <span className="text-foreground">
                  let them get to that dream spot
                </span>
                .
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 space-y-6 py-2 lg:py-0">
          <ContactSales />

          <div className="space-y-12 lg:hidden">
            <TwoGridSection
              cornerPlus={false}
              className="border-x-0 sm:min-h-[200px]"
              childrenWrapperClassName="my-auto grid h-full grid-cols-2 gap-6"
            >
              <div className="col-span-1 space-y-6 text-lg font-normal">
                <p className="text-muted-foreground">
                  <span className="text-foreground">7-days MVP</span> to get
                  your business up
                </p>
              </div>
              <div className="col-span-1 space-y-6 text-lg font-normal">
                <p className="text-muted-foreground">
                  <span className="text-foreground">Best tools</span> to sustain
                  your growth
                </p>
              </div>
            </TwoGridSection>
            <div className="mx-auto px-6">
              <p className="text-lg font-normal text-muted-foreground">
                At Vetra, we make Africa GREAT, developers and businesses lives
                easier,
                <span className="text-foreground">
                  let them get to that dream spot
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </TwoGridSection>
    </div>
  );
}
