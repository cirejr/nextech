import React from "react";
import TwoGridSection from "../global/two-grid-section";

export default function VisionMission() {
  return (
    <section id="vision-mission">
      <div className="mx-auto border-b p-6">
        <h1 className="text-center text-3xl font-bold leading-normal tracking-tighter sm:text-4xl md:text-5xl">
          <span className="text-purple-500">Vision</span> & Mission
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-6 border-b lg:grid-cols-3 lg:gap-16">
        <div className="col-span-1 mx-auto max-w-3xl space-y-12 p-6">
          <h2 className="text-3xl font-bold leading-normal tracking-tighter sm:text-4xl md:text-5xl">
            Powering Africa&apos;s Future
          </h2>
          <p className="text-lg leading-8 text-muted-foreground">
            At NexTech, we believe Africa is the next global tech hub. We build
            scalable, world-class solutions that empower developers, businesses,
            and enterprises to innovate without limits. Our mission is to
            provide open-source tools and commercial products that accelerate
            Africa&apos;s digital transformation.
          </p>
        </div>
        <div className="col-span-2">
          <TwoGridSection
            className="border-r-0 p-6 md:min-h-[320px] lg:border-t-0"
            cornerPlus={false}
          >
            <div className="z-30 grid grid-cols-1 justify-between gap-12 p-6 md:grid-cols-2">
              <div className="col-span-1 space-y-6 text-2xl font-medium">
                <span>Innovation: </span>
                <br />
                <span className="text-xl text-muted-foreground">
                  Cutting-edge solutions tailored for African businesses.
                </span>
              </div>

              <div className="col-span-1 space-y-6 text-2xl font-medium">
                <span>Open Source:</span> <br />
                <span className="text-xl text-muted-foreground">
                  Empowering developers with world-class tools.
                </span>
              </div>
            </div>
          </TwoGridSection>

          <TwoGridSection
            className="justify-between border-y-0 border-r-0 p-6 sm:min-h-[320px]"
            cornerPlus={false}
          >
            <div className="z-30 grid grid-cols-1 justify-between gap-12 p-6 md:grid-cols-2">
              <div className="col-span-1 space-y-6 text-2xl font-medium">
                <span>Scalability:</span> <br />
                <span className="text-xl text-muted-foreground">
                  Cloud-first, <br />
                  high-performance technology.
                </span>
              </div>
              <div className="col-span-1 space-y-6 text-2xl font-medium">
                <span>Community:</span> <br />
                <span className="text-xl text-muted-foreground">
                  A growing network of developers and tech enthusiasts.
                </span>
              </div>
            </div>
          </TwoGridSection>
        </div>
      </div>
    </section>
  );
}
