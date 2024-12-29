"use client";

import { useRef, useEffect, useCallback, useState } from "react";

export function ScrollingText() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scroll = useCallback(() => {
    if (!containerRef.current || !contentRef.current || isPaused) return;
    
    // Slower scroll speed on mobile
    const scrollSpeed = isMobile ? 0.5 : 1;
    containerRef.current.scrollLeft += scrollSpeed;
    
    if (containerRef.current.scrollLeft >= contentRef.current.offsetWidth / 2) {
      containerRef.current.scrollLeft = 0;
    }
  }, [isPaused, isMobile]);

  useEffect(() => {
    // Slower interval on mobile for smoother animation
    const interval = setInterval(scroll, isMobile ? 40 : 30);
    return () => clearInterval(interval);
  }, [scroll, isMobile]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case ' ':
        e.preventDefault();
        setIsPaused(prev => !prev);
        break;
      case 'ArrowLeft':
        e.preventDefault();
        if (containerRef.current) {
          // Smaller scroll distance on mobile
          containerRef.current.scrollLeft -= isMobile ? 25 : 50;
        }
        break;
      case 'ArrowRight':
        e.preventDefault();
        if (containerRef.current) {
          // Smaller scroll distance on mobile
          containerRef.current.scrollLeft += isMobile ? 25 : 50;
        }
        break;
    }
  };

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
        COME SEE WHY THEY CALL US CHICAGO&apos;S FINEST
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
        AUTHENTIC CHICAGO FLAVORS SINCE 1950
      </span>
    </div>
  );

  return (
    <section 
      className="w-full py-2 sm:py-4 mb-4 sm:mb-8 overflow-hidden bg-[#407E57]"
      role="region"
      aria-label="Announcement Banner"
    >
      <div 
        ref={containerRef}
        className="overflow-x-hidden scroll-smooth"
        role="marquee"
        aria-live="polite"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        aria-label="Scrolling announcement"
        aria-controls="scroll-content"
      >
        <div 
          ref={contentRef}
          className="flex"
          id="scroll-content"
        >
          {content}
          {content}
          {content}
          {content}
        </div>
      </div>

      {/* Screen reader information */}
      <div className="sr-only" role="note">
        <p>Press space to pause/resume scrolling</p>
        <p>Use left and right arrow keys to navigate when paused</p>
        <p>Touch to pause scrolling</p>
      </div>
    </section>
  );
}