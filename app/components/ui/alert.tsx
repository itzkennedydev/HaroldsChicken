import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/app/lib/utils"

//
// 1. Updated color tokens
//    - Replace "destructive", "info", "warning", etc. with
//      standard Tailwind color classes, using alpha
//      transparencies in dark mode for backgrounds and borders
//
const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-white text-slate-950 border-slate-200 dark:bg-slate-800 dark:text-slate-50 dark:border-slate-700",
        destructive: "bg-red-50 text-red-600 border-red-200 dark:bg-red-900/10 dark:text-red-100 dark:border-red-800/50",
        warning: "bg-slate-50 text-slate-600 border-slate-200 dark:bg-slate-900/10 dark:text-slate-400 dark:border-slate-800/50",
        success: "bg-green-50 text-green-700 border-green-200 dark:bg-green-900/10 dark:text-green-100 dark:border-green-800/50",
        info: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/10 dark:text-blue-100 dark:border-blue-800/50",
        muted: "bg-slate-50 text-slate-600 border-slate-200 dark:bg-slate-900/10 dark:text-slate-400 dark:border-slate-800/50",
      },
      size: {
        default: "text-sm",
        sm: "text-xs p-3",
        lg: "p-6 text-base",
      },
      removable: {
        true: "pr-12",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      removable: false,
    },
  }
)

interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  onClose?: () => void
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, size, removable, onClose, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="alert"
        aria-live="polite"
        className={cn(alertVariants({ variant, size, removable }), className)}
        {...props}
      >
        {children}
        {removable && onClose && (
          <button
            onClick={onClose}
            className="absolute right-2 top-2 rounded-lg p-1.5 hover:bg-background/80 text-foreground/50 hover:text-foreground transition-colors"
            aria-label="Close alert"
          >
            <svg
              className="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>
    )
  }
)
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed opacity-95", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
