"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00"
  });

  useEffect(() => {
    const targetDate = new Date('2025-01-21T00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0')
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/IMG_2980.JPG"
          alt="Harold&apos;s Chicken Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="flex-1 flex items-center justify-center p-8 text-center">
          <div className="max-w-3xl mx-auto space-y-12">
            {/* Logo */}
            <div className="transform transition-transform hover:scale-105">
              <Image
                src="/SCA.png"
                alt="Sovereign Creative Agency Logo"
                width={200}
                height={100}
                className="mx-auto"
              />
            </div>

            {/* Heading */}
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              Harold&apos;s Chicken
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-white font-light max-w-2xl mx-auto">
              We&apos;re building a new website for Chicago&apos;s iconic Harold&apos;s Chicken. Known for their perfectly crispy chicken with mild sauce since 1950, we&apos;re making sure their online presence lives up to their South Side legacy.
            </p>

            {/* Countdown */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds }
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg"
                >
                  <div className="font-playfair text-3xl md:text-4xl font-bold text-white mb-2">
                    {item.value}
                  </div>
                  <div className="text-sm uppercase tracking-wider text-white font-medium">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll indicator */}
            <div className="animate-bounce text-white">
              <svg
                className="w-6 h-6 mx-auto"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </header>

        {/* Footer */}
        <footer className="relative z-10 p-8 text-center">
          <a
            href="http://sovereigncreative.agency"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-indigo-400 transition-colors text-sm tracking-wide"
          >
            Sovereign Creative Agency © 2024. All rights reserved.
          </a>
        </footer>
      </div>
    </div>
  );
}