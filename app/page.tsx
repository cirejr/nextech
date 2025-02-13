import EmptyRectangle from "@/components/global/empty-rectangle";
import CTA from "@/components/sections/cta";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Solutions from "@/components/sections/solutions";
import VisionMission from "@/components/sections/vision-mission";

export default function Home() {
  return (
    <div className="container mx-auto my-16 border-x font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <VisionMission />
      <Solutions />
      <EmptyRectangle />
      <Services />
      <CTA />
    </div>
  );
}
