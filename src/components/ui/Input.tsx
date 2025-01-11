import * as React from "react";
import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";

const inputVariants = cva("rounded-md border", {
  variants: {
    variant: {
      default: "border-gray-400 hover:border-blue-950 focus:border-blue-950",
      error: "border-red-500 hover:border-red-500 focus:border-red-500",
    },
    size: {
      default: "h-10 p-2",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type InputType = React.ComponentProps<"input"> & {
  ref?: React.Ref<HTMLInputElement>;
} & VariantProps<typeof inputVariants>;

export const Input = ({
  className,
  type,
  variant,
  ref,
  ...props
}: InputType) => {
  return (
    <input
      type={type}
      className={cn(inputVariants({ variant, className }))}
      ref={ref}
      {...props}
    />
  );
};
