import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import "./globals.css";
import { PHProvider } from '@/app/providers/PostHogProvider'
import defaultSEO from './metadata'
import Script from 'next/script'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const national = localFont({
  src: [
    {
      path: '../public/fonts/National2Condensed-Thin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/fonts/National2Condensed-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/National2Condensed-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/National2Condensed-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/National2Condensed-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/National2Condensed-Black.otf',
      weight: '900',
      style: 'normal',
    }
  ],
  variable: '--font-national',
  display: 'swap',
})

export const metadata: Metadata = {
  ...defaultSEO,
  alternates: {
    canonical: 'https://haroldschicken.com',
    languages: {
      'en-US': '/en-US',
    },
  },
  manifest: '/site.webmanifest',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en" className={`${national.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <Script id="schema-org" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Restaurant",
              "name": "Harold's Chicken & Sports Bar",
              "image": "https://haroldschicken.com/images/og-image.jpg",
              "description": "Experience Chicago's iconic Harold's Chicken & Sports Bar. Known for our signature fried chicken, full-service sports bar, and welcoming atmosphere since 1950.",
              "@id": "https://haroldschicken.com",
              "url": "https://haroldschicken.com",
              "telephone": "+1-312-555-0123",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Example Street",
                "addressLocality": "Chicago",
                "addressRegion": "IL",
                "postalCode": "60601",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 41.8781,
                "longitude": -87.6298
              },
              "servesCuisine": [
                "American",
                "Soul Food",
                "Chicken"
              ],
              "priceRange": "$$",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                  ],
                  "opens": "11:00",
                  "closes": "23:00"
                }
              ],
              "menu": "https://haroldschicken.com/menu",
              "acceptsReservations": "true"
            }
          `}
        </Script>
      </head>
      <PHProvider>
        <body className="antialiased">{children}</body>
      </PHProvider>
    </html>
  );
}