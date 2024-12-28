'use client'

import { useEffect } from 'react'
import { posthog } from '../lib/posthog'
import { usePathname } from 'next/navigation'

export function PHProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Check if the current host is localhost
      const isLocalhost = window.location.hostname === 'localhost' || 
                         window.location.hostname === '127.0.0.1'

      // Only capture events if not on localhost
      if (!isLocalhost && pathname) {
        const url = window.location.href
        posthog?.capture('$pageview', {
          $current_url: url,
          pathname: pathname,
        })
      }
    }
  }, [pathname])

  return children
} 