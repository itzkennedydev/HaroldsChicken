"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/app/lib/utils"

const legalNavItems = [
  {
    title: "Terms of Service",
    href: "/legal/terms",
  },
  {
    title: "Privacy Policy",
    href: "/legal/privacy",
  },
  {
    title: "Cookie Policy",
    href: "/legal/cookies",
  },
]

export function LegalNav() {
  const pathname = usePathname()

  return (
    <nav className="flex space-x-6 border-b mb-8">
      {legalNavItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "border-b-2 border-transparent py-4 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
            pathname === item.href &&
              "border-primary text-foreground"
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  )
} 