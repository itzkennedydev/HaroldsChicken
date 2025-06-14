"use client";

import { useRef, useEffect, useState } from "react";

export function ScrollingText() {
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const content = (
    <div 
      className="flex items-center gap-4 sm:gap-16 whitespace-nowrap px-4 sm:px-12"
      role="group"
    >
      <span 
        className="text-white text-xl sm:text-4xl tracking-[0.5em]" 
        aria-hidden="true"
      >
        ★ ★ ★
      </span>
      <span 
        className="text-white uppercase font-bold tracking-wider text-lg sm:text-4xl"
        aria-label="Come see why they call us Chicago's finest"
      >
        Come see why they call us Chicago&apos;s finest
      </span>
      <span 
        className="text-white text-xl sm:text-4xl tracking-[0.5em]" 
        aria-hidden="true"
      >
        ★ ★ ★
      </span>
      <span 
        className="text-white uppercase font-bold tracking-wider text-lg sm:text-4xl"
        aria-label="Authentic Chicago flavors since 1950"
      >
        Authentic Chicago flavors since 1950
      </span>
    </div>
  );

  return (
    <section 
      className="w-full py-2 sm:py-4 mb-4 sm:mb-8 overflow-hidden bg-red-700"
      role="region"
      aria-label="Announcement Banner"
    >
      <div 
        ref={containerRef}
        className="relative overflow-hidden"
        role="marquee"
        aria-live="polite"
        onMouseEnter={() => !isMobile && setIsPaused(true)}
        onMouseLeave={() => !isMobile && setIsPaused(false)}
      >
        <div 
          className="flex animate-scroll"
          style={{
            animationPlayState: isPaused ? 'paused' : 'running',
            animationDuration: isMobile ? '30s' : '20s'
          }}
        >
          {content}
          {content}
          {content}
          {content}
        </div>
      </div>

      {/* Screen reader information */}
      <div className="sr-only" role="note">
        <p>Hover to pause the scrolling text</p>
      </div>
    </section>
  );
}