import { PerfectSquareGridSection } from "@/components/global/square-grid-section";
import {
  ArrowRightIcon,
  IdCardIcon,
  ScanEyeIcon,
  SparklesIcon,
  TerminalIcon,
} from "lucide-react";
import CustomLink from "../global/custom-link";
import PlusCornerSection from "../global/plus-section";

export default function Solutions() {
  const items = [
    <Item
      key={1}
      title="Excel Genie"
      description="Tell Excel Genie what you need. Use natural language or choose from a list of common tasks. Be specific about your requirements."
      icon={<SparklesIcon className="h-4 w-4" />}
      isReady
    ></Item>,

    <Item
      key={2}
      title="nxpay"
      description="Payment processor/gateway to help african developers and merchants to accept payments worldwide"
      icon={<IdCardIcon className="h-4 w-4" />}
    />,
    <Item
      key={3}
      title="SaaS Starter Kit"
      description="Fully built Nextjs template with all features to get your saas up and running in matters of minutes"
      icon={<TerminalIcon className="h-4 w-4" />}
      isReady
    />,
    <Item
      key={4}
      title="Price Comparison Tool"
      description="A business intelligence tool for monitoring competitors prices or just checking the cheapest price for a product"
      icon={<ScanEyeIcon className="h-4 w-4" />}
    />,
  ];

  return (
    <section id="solutions">
      <PlusCornerSection className="mx-auto border-b p-6">
        <h1 className="text-center text-3xl font-bold leading-normal tracking-tighter sm:text-4xl md:text-5xl">
          <span className="text-purple-500">Solutions</span>
        </h1>
      </PlusCornerSection>
      <PerfectSquareGridSection className="border-0" cornerPlus={true}>
        {items}
      </PerfectSquareGridSection>
    </section>
  );
}

type ItemProps = {
  title: string;
  description: string;
  icon: React.JSX.Element;
  children?: React.ReactNode;
  isReady?: boolean;
};

function Item({ title, description, icon, children, isReady }: ItemProps) {
  return (
    <div className="container flex h-full w-full max-w-xs flex-col items-start justify-center gap-4 p-4">
      <div className="flex w-fit items-center gap-2">
        {icon}
        <h1 className="text-2xl font-medium">{title}</h1>
        {!isReady && (
          <span className="rounded-full bg-emerald-300 px-1.5 text-xs font-normal text-emerald-700">
            Soon
          </span>
        )}
      </div>
      <p className="text-lg font-normal text-muted-foreground md:text-xl">
        {description}
      </p>
      {children}
      {isReady && (
        <CustomLink className="w-full" href="#">
          Read More
          <ArrowRightIcon className="h-4 w-4" />
        </CustomLink>
      )}
    </div>
  );
}
