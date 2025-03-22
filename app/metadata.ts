import { Metadata } from "next";

const defaultSEO: Metadata = {
  metadataBase: new URL('https://haroldschicken.com'),
  title: {
    default: "Harold&apos;s Chicken & Sports Bar | Chicago&apos;s Finest Chicken",
    template: "%s | Harold&apos;s Chicken & Sports Bar"
  },
  description: "Experience Chicago&apos;s iconic Harold&apos;s Chicken & Sports Bar. Known for our signature fried chicken, full-service sports bar, and welcoming atmosphere since 1950.",
  keywords: [
    "Harold&apos;s Chicken",
    "Chicago restaurant",
    "sports bar Chicago",
    "fried chicken Chicago",
    "best chicken wings",
    "Chicago sports bar",
    "family restaurant Chicago",
    "soul food Chicago"
  ],
  authors: [{ name: "Harold&apos;s Chicken" }],
  creator: "Harold&apos;s Chicken",
  publisher: "Harold&apos;s Chicken",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Harold&apos;s Chicken & Sports Bar",
    title: "Harold&apos;s Chicken & Sports Bar | Chicago&apos;s Finest Chicken",
    description: "Experience Chicago&apos;s iconic Harold&apos;s Chicken & Sports Bar. Known for our signature fried chicken, full-service sports bar, and welcoming atmosphere since 1950.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Harold&apos;s Chicken & Sports Bar"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Harold&apos;s Chicken & Sports Bar",
    description: "Chicago&apos;s iconic chicken restaurant and sports bar since 1950",
    creator: "@haroldschicken",
    images: ["/images/twitter-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code"
  }
};

export default defaultSEO; 