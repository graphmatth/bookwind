import * as React from "react";
import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";

const textareaVariants = cva("min-h-20 p-2 rounded-md border", {
  variants: {
    variant: {
      default: "border-gray-400 hover:border-blue-950",
      error: "border-red-500 hover:border-red-500 focus:border-red-500",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type TextareaType = React.ComponentProps<"textarea"> & {
  ref?: React.Ref<HTMLInputElement>;
} & VariantProps<typeof textareaVariants>;

export const Textarea = ({
  className,
  variant,
  ref,
  ...props
}: TextareaType) => {
  return (
    <textarea
      className={cn(textareaVariants({ variant, className }))}
      ref={ref}
      {...props}
    />
  );
};
