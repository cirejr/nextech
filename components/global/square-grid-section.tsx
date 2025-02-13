import { cn } from "@/lib/utils";

export function SquareGridSection({
  className,
  children,
  cornerPlus = true,
}: {
  className?: string;
  children: React.ReactNode;
  cornerPlus?: boolean;
}) {
  return (
    <section
      className={cn(
        "relative flex w-full flex-col items-start justify-start border text-3xl font-bold dark:bg-transparent sm:min-h-[720px] sm:flex-row sm:pb-0",
        className
      )}
    >
      {cornerPlus && (
        <div className="absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2">
          <div className="absolute h-5 w-[0.5px] -translate-x-1/2 -translate-y-1/2 bg-foreground"></div>
          <div className="absolute h-5 w-[0.5px] -translate-x-1/2 -translate-y-1/2 rotate-90 bg-foreground"></div>
        </div>
      )}
      {children}
      <div className="absolute left-0 top-0 z-0 flex h-full w-full">
        <div className="h-full w-1/2 border-r"></div>
        <div className="h-full w-1/2 border-t"></div>
      </div>
    </section>
  );
}

export function PerfectSquareGridSection({
  className,
  children,
  cornerPlus = true,
}: {
  className?: string;
  children: React.ReactNode[];
  cornerPlus?: boolean;
}) {
  return (
    <section
      className={cn(
        "relative flex w-full flex-col items-start justify-start border text-3xl font-bold dark:bg-transparent sm:min-h-[720px] sm:flex-row sm:pb-0",
        className
      )}
    >
      {cornerPlus && (
        <div className="absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2">
          <div className="absolute h-5 w-[0.5px] -translate-x-1/2 -translate-y-1/2 bg-foreground"></div>
          <div className="absolute h-5 w-[0.5px] -translate-x-1/2 -translate-y-1/2 rotate-90 bg-foreground"></div>
        </div>
      )}
      <div className="grid h-full w-full grid-cols-1 md:grid-cols-2">
        <div className="min-h-1/2 col-span-1 flex flex-col">
          {children.slice(0, 2).map((child, index) => (
            <div
              key={index}
              className="mx-auto min-h-[450px] flex-1 border-b lg:px-16"
            >
              {child}
            </div>
          ))}
        </div>
        <div className="min-h-1/2 col-span-1 flex flex-col">
          {children.slice(2, 4).map((child, index) => (
            <div key={index} className="min-h-[450px] flex-1 border-b lg:px-16">
              {child}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute left-0 top-0 z-0 flex h-full w-full">
        <div className="h-full w-1/2 border-r"></div>
      </div>
    </section>
  );
}
