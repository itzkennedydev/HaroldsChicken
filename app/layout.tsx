import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import "./globals.css";
import { PHProvider } from './providers/PostHogProvider'

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
  title: "Harold's Chicken | Website Coming Soon",
  description: "A new digital experience for Chicago's iconic Harold's Chicken, coming soon. Crafted by Sovereign Creative Agency.",
  keywords: ["Harold's Chicken", "Chicago restaurant", "website coming soon", "Sovereign Creative Agency"],
  openGraph: {
    title: "Harold's Chicken | Website Coming Soon",
    description: "A new digital experience for Chicago's iconic Harold's Chicken, coming soon.",
    type: "website",
    locale: "en_US",
    siteName: "Harold's Chicken",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harold's Chicken | Website Coming Soon",
    description: "A new digital experience for Chicago's iconic Harold's Chicken, coming soon.",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en" className={`${national.variable} ${inter.variable}`}>
      <PHProvider>
        <body className="antialiased">{children}</body>
      </PHProvider>
    </html>
  );
}