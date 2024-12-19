import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}