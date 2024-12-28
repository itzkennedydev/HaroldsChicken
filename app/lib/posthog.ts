'use client'

import posthog from 'posthog-js'

if (typeof window !== 'undefined') {
  posthog.init('phc_rza5B1ITU2c3ReDl4rhwUBv82zdyVZYATfZT3AkBHii', {
    api_host: 'https://us.i.posthog.com',
    person_profiles: 'identified_only',
    loaded: (posthog) => {
      if (process.env.NODE_ENV === 'development') posthog.debug()
    },
  })
}

export { posthog } 