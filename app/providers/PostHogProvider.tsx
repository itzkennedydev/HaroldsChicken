'use client'

import { useEffect, useState } from 'react'
import { initPostHog } from '../lib/posthog'
import { usePathname } from 'next/navigation'

export function PHProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isClient, setIsClient] = useState(false)

  // First useEffect only sets isClient to true
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Second useEffect initializes PostHog and handles page views
  useEffect(() => {
    if (!isClient) return;
    
    // Initialize PostHog
    const phClient = initPostHog();
    
    // Only capture events if not on localhost and PostHog is initialized
    if (phClient && pathname) {
      const isLocalhost = window.location.hostname === 'localhost' || 
                         window.location.hostname === '127.0.0.1'
                         
      if (!isLocalhost) {
        const url = window.location.href
        phClient.capture('$pageview', {
          $current_url: url,
          pathname: pathname,
        })
      }
    }
  }, [pathname, isClient])

  return children
} 