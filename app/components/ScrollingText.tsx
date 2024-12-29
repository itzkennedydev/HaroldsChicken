"use client";

import { useRef, useEffect, useCallback, useState } from "react";

export function ScrollingText() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const momentumRef = useRef(0);
  const lastMouseX = useRef(0);
  const lastScrollTime = useRef(Date.now());
  const scrollAnimationRef = useRef<number | null>(null);
  const momentumTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    const resizeObserver = new ResizeObserver(checkMobile);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    return () => resizeObserver.disconnect();
  }, []);

  // Smooth scrolling animation using requestAnimationFrame
  const animate = useCallback(() => {
    if (!containerRef.current || !contentRef.current || isPaused || isDragging) return;

    const container = containerRef.current;
    const content = contentRef.current;
    const scrollSpeed = isMobile ? 0.5 : 1;
    
    const currentScroll = container.scrollLeft;
    const maxScroll = content.offsetWidth / 2;
    
    container.scrollLeft += scrollSpeed;

    if (currentScroll >= maxScroll) {
      container.scrollLeft = 0;
    }

    scrollAnimationRef.current = requestAnimationFrame(animate);
  }, [isPaused, isMobile, isDragging]);

  // Start/stop animation
  useEffect(() => {
    if (!isPaused && !isDragging) {
      scrollAnimationRef.current = requestAnimationFrame(animate);
    }
    return () => {
      if (scrollAnimationRef.current) {
        cancelAnimationFrame(scrollAnimationRef.current);
      }
    };
  }, [animate, isPaused, isDragging]);

  // Momentum scrolling
  const applyMomentum = useCallback(() => {
    if (!containerRef.current || Math.abs(momentumRef.current) < 0.1) return;

    const container = containerRef.current;
    const currentScroll = container.scrollLeft;
    const content = contentRef.current;
    if (!content) return;

    const maxScroll = content.offsetWidth / 2;
    
    let newScroll = currentScroll - momentumRef.current;
    if (newScroll < 0) {
      newScroll = maxScroll + newScroll;
    } else if (newScroll > maxScroll) {
      newScroll = newScroll - maxScroll;
    }
    
    container.scrollLeft = newScroll;
    momentumRef.current *= 0.95; // Decay momentum
    
    momentumTimeoutRef.current = setTimeout(applyMomentum, 16);
  }, []);

  useEffect(() => {
    if (Math.abs(momentumRef.current) > 0.1) {
      applyMomentum();
    }
    return () => {
      if (momentumTimeoutRef.current) {
        clearTimeout(momentumTimeoutRef.current);
      }
    };
  }, [applyMomentum]);

  // Interaction handlers
  const handleInteractionStart = (position: number) => {
    if (scrollAnimationRef.current) {
      cancelAnimationFrame(scrollAnimationRef.current);
    }
    setIsDragging(true);
    setStartX(position);
    setScrollLeft(containerRef.current?.scrollLeft || 0);
    lastMouseX.current = position;
    lastScrollTime.current = Date.now();
    momentumRef.current = 0;
  };

  const handleInteractionEnd = () => {
    setIsDragging(false);
    
    const timeDelta = Date.now() - lastScrollTime.current;
    if (timeDelta < 100) {
      const velocityX = (lastMouseX.current - startX) / timeDelta;
      momentumRef.current = velocityX * (isMobile ? 15 : 25);
    }
  };

  const handleInteractionMove = (position: number) => {
    if (!isDragging || !containerRef.current) return;
    
    const x = position;
    const delta = x - lastMouseX.current;
    const sensitivity = isMobile ? 1.5 : 2;
    
    const newScrollLeft = scrollLeft - (delta * sensitivity);
    containerRef.current.scrollLeft = newScrollLeft;
    
    lastMouseX.current = x;
    lastScrollTime.current = Date.now();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!containerRef.current) return;

    const scrollStep = isMobile ? 25 : 50;
    
    switch (e.key) {
      case ' ':
        e.preventDefault();
        setIsPaused(prev => !prev);
        break;
      case 'ArrowLeft':
        e.preventDefault();
        containerRef.current.scrollLeft -= scrollStep;
        break;
      case 'ArrowRight':
        e.preventDefault();
        containerRef.current.scrollLeft += scrollStep;
        break;
      case 'Home':
        e.preventDefault();
        containerRef.current.scrollLeft = 0;
        break;
      case 'End':
        e.preventDefault();
        if (contentRef.current) {
          containerRef.current.scrollLeft = contentRef.current.offsetWidth / 2;
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
        className="overflow-x-hidden cursor-grab active:cursor-grabbing scroll-smooth"
        role="marquee"
        aria-live="polite"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          setIsPaused(false);
          setIsDragging(false);
        }}
        onMouseDown={(e) => handleInteractionStart(e.pageX)}
        onMouseUp={handleInteractionEnd}
        onMouseMove={(e) => handleInteractionMove(e.pageX)}
        onTouchStart={(e) => {
          setIsPaused(true);
          handleInteractionStart(e.touches[0].pageX);
        }}
        onTouchEnd={() => {
          handleInteractionEnd();
          setTimeout(() => setIsPaused(false), 1000);
        }}
        onTouchMove={(e) => {
          e.preventDefault();
          handleInteractionMove(e.touches[0].pageX);
        }}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        aria-label="Scrolling announcement"
        aria-controls="scroll-content"
        style={{
          scrollBehavior: isDragging ? 'auto' : 'smooth',
          touchAction: isDragging ? 'none' : 'pan-y pinch-zoom'
        }}
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
        <p>Press Home to go to start</p>
        <p>Press End to go to end</p>
        <p>Touch and drag to manually scroll</p>
      </div>
    </section>
  );
}