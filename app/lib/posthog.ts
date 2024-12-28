'use client'

import posthog from 'posthog-js'

if (typeof window !== 'undefined') {
  posthog.init('REDACTED_POSTHOG_KEY', {
    api_host: 'https://us.i.posthog.com',
    person_profiles: 'identified_only',
    loaded: (posthog) => {
      if (process.env.NODE_ENV === 'development') posthog.debug()
    },
  })
}

export { posthog } 