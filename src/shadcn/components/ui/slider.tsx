import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "../../lib/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <div>
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex w-full touch-none select-none items-center",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-cyan-100 dark:bg-gray-50/20">
        <SliderPrimitive.Range className="absolute h-full bg-cyan-400 dark:bg-gray-50" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full border border-cyan-400 bg-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-50/50 dark:bg-gray-950 dark:focus-visible:ring-gray-300" />
    </SliderPrimitive.Root>
    <div className="flex flex-row mt-3">
      <div className="flex flex-1 justify-start">{props.min} km</div>
      <div className="flex flex-1 justify-end">{props.max} km</div>
    </div>
  </div>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
