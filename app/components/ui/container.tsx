import * as React from "react"

import { cn } from "../../lib/utils"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType
}

export function Container({
  className,
  as: Component = "div",
  children,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] lg:w-[calc(100%-8rem)] xl:w-[calc(100%-16rem)] 2xl:w-[calc(100%-256px)]",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
