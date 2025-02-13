import React from "react";
import { ThreeGridSection } from "../global/three-grid-section";
import PlusCornerSection from "../global/plus-section";
import { Separator } from "../ui/separator";

const services = [
  {
    title: "Software Development",
    description:
      "Tailor-made solutions for businesses. We build software that fits your specific needs, whether it's a web application, mobile app, or a complex enterprise system.  Our expertise spans various technologies and industries, ensuring a robust and scalable solution.",
  },
  {
    title: "Consulting & Strategy",
    description:
      "Helping companies scale their technology.  We provide strategic guidance on technology adoption, digital transformation, and IT infrastructure optimization. Our consultants work closely with you to identify opportunities, develop roadmaps, and implement solutions that drive business growth.",
  },
  {
    title: "API & Integration Services",
    description:
      "Helping businesses connect and automate. Our team specializes in designing, developing, and deploying APIs that enable seamless communication between different systems. We ensure secure and reliable integration with third-party services, streamlining workflows and enhancing data exchange.",
  },
];

export default function Services() {
  return (
    <PlusCornerSection>
      <div
        className="flex h-full w-full flex-col items-center justify-center gap-4 border-t p-4"
        id="services"
      >
        <div className="flex w-fit items-center gap-2">
          <h1 className="text-5xl font-bold">Services</h1>
        </div>
      </div>
      <ThreeGridSection className="border-x-0">
        <div>
          <Service />
          <Separator className="absolute left-0 top-[28%] hidden lg:block" />
        </div>
      </ThreeGridSection>
    </PlusCornerSection>
  );
}

function Service() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-16">
      {services.map((service, index) => (
        <div
          key={index}
          className="col-span-1 mx-auto max-w-3xl space-y-12 p-6"
        >
          <h2
            className={`text-3xl font-medium leading-normal tracking-tighter sm:text-4xl lg:h-[100px] ${
              index === 0
                ? "text-purple-500"
                : index === 1
                ? ""
                : "text-blue-500"
            }`}
          >
            {service.title}
          </h2>
          <p className="text-lg font-normal leading-normal text-muted-foreground">
            {service.description}
          </p>
        </div>
      ))}
    </div>
  );
}
