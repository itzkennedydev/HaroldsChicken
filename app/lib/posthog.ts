'use client'

import posthog from 'posthog-js'

const posthogClient = typeof window !== 'undefined' 
  ? posthog 
  : null

if (typeof window !== 'undefined') {
  const isLocalhost = window.location.hostname === 'localhost' || 
                     window.location.hostname === '127.0.0.1'

  if (!isLocalhost) {
    posthog.init('phc_rza5B1ITU2c3ReDl4rhwUBv82zdyVZYATfZT3AkBHii', {
      api_host: 'https://us.i.posthog.com',
      persistence: 'localStorage',
      autocapture: true,
      capture_pageview: false, // We'll handle this manually
      capture_pageleave: true,
      disable_session_recording: false,
      loaded: (posthog) => {
        if (process.env.NODE_ENV === 'development') posthog.debug()
      },
    })
  }
}

export { posthogClient as posthog } 