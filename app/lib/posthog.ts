'use client'

import posthog from 'posthog-js'

// Initialize as null first
let posthogClient: typeof posthog | null = null;

// Use separate useEffect in the client component to initialize
const initPostHog = () => {
  if (typeof window !== 'undefined') {
    const isLocalhost = window.location.hostname === 'localhost' || 
                       window.location.hostname === '127.0.0.1'

    if (!isLocalhost) {
      posthog.init('REDACTED_POSTHOG_KEY', {
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
      
      posthogClient = posthog;
    }
  }
  
  return posthogClient;
}

export { posthogClient as posthog, initPostHog } 