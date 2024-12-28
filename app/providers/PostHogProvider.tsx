'use client'

import { useEffect } from 'react'
import posthog from 'posthog-js'
import { usePathname } from 'next/navigation'

export function PHProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    if (pathname) {
      const url = window.location.href
      posthog.capture('$pageview', {
        $current_url: url,
      })
    }
  }, [pathname])

  return children
} 