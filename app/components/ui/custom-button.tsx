import * as React from "react"
import { Button } from "./button"
import { cn } from "../../lib/utils"

interface CustomButtonProps extends React.ComponentProps<typeof Button> {
  size?: "default" | "sm" | "lg"
}

export function CustomButton({
  className,
  variant = "default",
  size = "default",
  ...props
}: CustomButtonProps) {
  return (
    <Button
      variant={variant}
      className={cn(
        "font-medium transition-colors",
        // Custom sizes
        {
          "h-10 px-4 py-2": size === "default",
          "h-9 rounded-md px-3": size === "sm",
          "h-11 rounded-md px-8": size === "lg",
        },
        className
      )}
      {...props}
    />
  )
} 