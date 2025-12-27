"use client";

import { useRef, useEffect, useState, useCallback, useMemo, memo } from "react";

// Static content component to avoid recreation
const ScrollContent = memo(function ScrollContent() {
  return (
    <div
      className="flex items-center gap-4 sm:gap-16 whitespace-nowrap px-4 sm:px-12"
      role="group"
    >
      <span
        className="text-white text-xl sm:text-4xl tracking-[0.5em]"
        aria-hidden="true"
      >
        &#9733; &#9733; &#9733;
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
        &#9733; &#9733; &#9733;
      </span>
      <span
        className="text-white uppercase font-bold tracking-wider text-lg sm:text-4xl"
        aria-label="Authentic Chicago flavors since 1950"
      >
        Authentic Chicago flavors since 1950
      </span>
    </div>
  );
});

function ScrollingTextComponent() {
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Memoized mobile check handler
  const checkMobile = useCallback(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  // Mobile detection with debounced resize
  useEffect(() => {
    checkMobile();

    let timeoutId: NodeJS.Timeout;
    const debouncedCheck = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkMobile, 150);
    };

    window.addEventListener('resize', debouncedCheck, { passive: true });
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', debouncedCheck);
    };
  }, [checkMobile]);

  // Memoized animation style
  const animationStyle = useMemo(() => ({
    animationPlayState: isPaused ? 'paused' : 'running',
    animationDuration: isMobile ? '30s' : '20s',
    willChange: 'transform',
  }), [isPaused, isMobile]);

  // Memoized event handlers
  const handleMouseEnter = useCallback(() => {
    if (!isMobile) setIsPaused(true);
  }, [isMobile]);

  const handleMouseLeave = useCallback(() => {
    if (!isMobile) setIsPaused(false);
  }, [isMobile]);

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
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="flex animate-scroll"
          style={animationStyle}
        >
          <ScrollContent />
          <ScrollContent />
          <ScrollContent />
          <ScrollContent />
        </div>
      </div>

      {/* Screen reader information */}
      <div className="sr-only" role="note">
        <p>Hover to pause the scrolling text</p>
      </div>
    </section>
  );
}

export const ScrollingText = memo(ScrollingTextComponent);