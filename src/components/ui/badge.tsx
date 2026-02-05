import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import styles from "@/styles/components/ui/Badge.module.css";

const badgeVariants = cva(styles.base, {
  variants: {
    variant: {
      default: styles.variantDefault,
      secondary: styles.variantSecondary,
      destructive: styles.variantDestructive,
      outline: styles.variantOutline,
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
