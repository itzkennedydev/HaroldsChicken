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
    <main className="min-h-screen relative bg-black">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="https://live.staticflickr.com/2566/5780029140_10f694c164_b.jpg"
          alt="Chicago Cityscape"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Main Content Section */}
        <div className="flex-1 flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-5xl mx-auto">
            <div className="space-y-20">
              {/* Logo Section */}
              <div className="flex justify-center">
                <div className="relative">
                  <Image
                    src="https://res.cloudinary.com/dnccw1hhh/image/upload/v1734649833/HaroldsLogoWhite_c6x72n.png"
                    alt="Harold's Chicken Logo"
                    width={160}
                    height={80}
                    className="transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>

              {/* Main Content */}
              <div className="text-center space-y-16">
                {/* Heading */}
                <div className="space-y-6">
                  <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl text-white font-bold tracking-tight">
                    Harold&apos;s Chicken
                  </h1>
                  <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    Experience a taste of Chicago&apos;s soul, reimagined for the digital age. For over 70 years, Harold&apos;s Chicken has been more than a restaurant – it&apos;s been a South Side institution, where everything is made fresh daily and nothing is ever frozen.
                    <span className="block mt-4 text-white/80">
                      Soon, the legendary crispy chicken, signature mild sauce, and the authentic Chicago experience will have a new online home worthy of its heritage.
                    </span>
                  </p>
                </div>

                {/* Countdown Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 px-4">
                  {[
                    { label: "Days", value: timeLeft.days },
                    { label: "Hours", value: timeLeft.hours },
                    { label: "Minutes", value: timeLeft.minutes },
                    { label: "Seconds", value: timeLeft.seconds }
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl blur-xl transition-opacity duration-300 group-hover:opacity-70" />
                      <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-300">
                        <div className="font-playfair text-4xl md:text-5xl text-white font-bold mb-2">
                          {item.value}
                        </div>
                        <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">
                          {item.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scroll Indicator */}
              <div className="flex justify-center">
                <div className="relative w-6 h-10 border border-white/20 rounded-full flex items-start justify-center p-2">
                  <div className="w-1.5 h-2 bg-white/50 rounded-full animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="relative py-8 px-6 text-center">
          <div className="max-w-5xl mx-auto">
            <a
              href="http://sovereigncreative.agency"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-gray-500 hover:text-white transition-colors duration-300"
            >
              Sovereign Creative Agency © 2024. All rights reserved.
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
