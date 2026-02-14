import { Metadata } from "next";

const defaultSEO: Metadata = {
  metadataBase: new URL('https://haroldschicken.com'),
  title: {
    default: "Harold's Chicken & Sports Bar | Chicago's Finest Chicken",
    template: "%s | Harold's Chicken & Sports Bar"
  },
  description: "Experience Chicago's iconic Harold's Chicken & Sports Bar. Known for our signature fried chicken, full-service sports bar, and welcoming atmosphere since 1950.",
  keywords: [
    "Harold's Chicken",
    "Chicago restaurant",
    "sports bar Chicago",
    "fried chicken Chicago",
    "best chicken wings",
    "Chicago sports bar",
    "family restaurant Chicago",
    "soul food Chicago"
  ],
  authors: [{ name: "Harold's Chicken" }],
  creator: "Harold's Chicken",
  publisher: "Harold's Chicken",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Harold's Chicken & Sports Bar",
    title: "Harold's Chicken & Sports Bar | Chicago's Finest Chicken",
    description: "Experience Chicago's iconic Harold's Chicken & Sports Bar. Known for our signature fried chicken, full-service sports bar, and welcoming atmosphere since 1950.",
    images: [
      {
        url: "https://d3kd1cq6xnp2l4.cloudfront.net/harolds_chicken/public/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Harold's Chicken & Sports Bar"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Harold's Chicken & Sports Bar",
    description: "Chicago's iconic chicken restaurant and sports bar since 1950",
    creator: "@haroldschicken",
    images: ["https://d3kd1cq6xnp2l4.cloudfront.net/harolds_chicken/public/images/twitter-image.jpg"]
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