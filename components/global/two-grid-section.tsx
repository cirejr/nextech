import { cn } from "@/lib/utils";

export default function TwoGridSection({
  className,
  children,
  cornerPlus = true,
  childrenWrapperClassName,
  containerClassName,
  leftInnerContainerClassName,
}: {
  className?: string;
  children: React.ReactNode;
  cornerPlus?: boolean;
  childrenWrapperClassName?: string;
  containerClassName?: string;
  leftInnerContainerClassName?: string;
}) {
  return (
    <section
      className={cn(
        "relative flex w-full flex-col items-start justify-start border text-3xl font-bold dark:bg-transparent sm:min-h-[720px] sm:flex-row sm:pb-0",
        className
      )}
    >
      {cornerPlus && (
        <div className="absolute left-0 top-0 z-[2] -translate-x-1/2 -translate-y-1/2">
          <div className="absolute left-1/2 top-1/2 h-5 w-[0.5px] -translate-x-1/2 -translate-y-1/2 bg-foreground"></div>
          <div className="absolute left-1/2 top-1/2 h-5 w-[0.5px] -translate-x-1/2 -translate-y-1/2 rotate-90 bg-foreground"></div>
        </div>
      )}
      {cornerPlus && (
        <div className="absolute bottom-0 right-0 z-[2] -translate-x-1/2 -translate-y-1/2">
          <div className="absolute left-1/2 top-1/2 h-5 w-[0.5px] -translate-x-1/2 -translate-y-1/2 bg-foreground"></div>
          <div className="absolute left-1/2 top-1/2 h-5 w-[0.5px] -translate-x-1/2 -translate-y-1/2 rotate-90 bg-foreground"></div>
        </div>
      )}
      <div className={cn("z-30 w-full p-6", childrenWrapperClassName)}>
        {children}
      </div>
      <div
        className={cn(
          "absolute left-0 top-0 z-0 flex h-full w-full",
          containerClassName
        )}
      >
        <div
          className={cn("h-full w-1/2 border-r", leftInnerContainerClassName)}
        ></div>
      </div>
    </section>
  );
}
