import * as React from "react";
import { cn } from "@/utils/cn";
import * as RadixLabel from "@radix-ui/react-label";

const labelClassName = "block text-sm font-medium text-gray-700 mb-15";

type LabelType = React.ComponentProps<typeof RadixLabel.Root>;

export const Label = ({ className, ...props }: LabelType) => (
  <RadixLabel.Root className={cn(labelClassName, className)} {...props} />
);
