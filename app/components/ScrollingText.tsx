"use client";

import { useRef, useEffect, useCallback, useState } from "react";

export function ScrollingText() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const momentumRef = useRef(0);
  const lastMouseX = useRef(0);
  const lastScrollTime = useRef(Date.now());
  const scrollAnimationRef = useRef<number | null>(null);
  const momentumTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isAutoScrolling = useRef(false);

  // Mobile detection with improved resize handling
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Get scroll speed based on device and viewport width
  const getScrollSpeed = useCallback(() => {
    if (window.innerWidth <= 640) return 0.4;
    if (window.innerWidth <= 768) return 0.7;
    if (window.innerWidth <= 1024) return 1.0;
    return 1.3;
  }, []);

  // Stop auto-scrolling
  const stopAutoScroll = useCallback(() => {
    if (scrollAnimationRef.current) {
      cancelAnimationFrame(scrollAnimationRef.current);
      scrollAnimationRef.current = null;
    }
    isAutoScrolling.current = false;
  }, []);

  // Smooth scrolling animation using requestAnimationFrame
  const animate = useCallback(() => {
    if (!containerRef.current || !contentRef.current || isPaused || isDragging) {
      isAutoScrolling.current = false;
      return;
    }

    isAutoScrolling.current = true;
    const container = containerRef.current;
    const content = contentRef.current;
    const scrollSpeed = getScrollSpeed();
    
    const currentScroll = container.scrollLeft;
    // Use first half of content only for reset point
    const maxScroll = content.offsetWidth / 2;
    
    // Reset to beginning when nearing the halfway point (less visible jump)
    if (currentScroll >= maxScroll - 10) {
      container.scrollLeft = 0;
    } else {
      container.scrollLeft += scrollSpeed;
    }

    scrollAnimationRef.current = requestAnimationFrame(animate);
  }, [isPaused, isDragging, getScrollSpeed]);

  // Start/stop animation with proper cleanup
  useEffect(() => {
    // Only start if not already scrolling
    if (!isAutoScrolling.current && !isPaused && !isDragging) {
      scrollAnimationRef.current = requestAnimationFrame(animate);
    }
    
    return () => {
      stopAutoScroll();
    };
  }, [animate, isPaused, isDragging, stopAutoScroll]);

  // Momentum scrolling with improved physics
  const applyMomentum = useCallback(() => {
    if (!containerRef.current || Math.abs(momentumRef.current) < 0.1) return;

    const container = containerRef.current;
    const content = contentRef.current;
    if (!content) return;

    const currentScroll = container.scrollLeft;
    const maxScroll = content.offsetWidth / 2;
    
    // Apply momentum with proper boundary handling
    let newScroll = currentScroll - momentumRef.current;
    
    // Handle edge cases for infinite scrolling effect
    if (newScroll < 0) {
      newScroll = maxScroll + newScroll; // Loop to end
    } else if (newScroll > maxScroll) {
      newScroll = newScroll - maxScroll; // Loop to beginning
    }
    
    container.scrollLeft = newScroll;
    
    // Decay momentum with proper physics (faster on mobile)
    momentumRef.current *= isMobile ? 0.92 : 0.95;
    
    momentumTimeoutRef.current = setTimeout(applyMomentum, 16); // ~60fps
  }, [isMobile]);

  // Manage momentum effect
  useEffect(() => {
    // Only apply momentum when it's significant
    if (Math.abs(momentumRef.current) > 0.1) {
      applyMomentum();
    }
    
    return () => {
      if (momentumTimeoutRef.current) {
        clearTimeout(momentumTimeoutRef.current);
        momentumTimeoutRef.current = null;
      }
    };
  }, [applyMomentum]);

  // Interaction handlers
  const handleInteractionStart = (position: number) => {
    stopAutoScroll();
    setIsDragging(true);
    startX.current = position;
    scrollLeft.current = containerRef.current?.scrollLeft || 0;
    lastMouseX.current = position;
    lastScrollTime.current = Date.now();
    momentumRef.current = 0;
  };

  const handleInteractionEnd = () => {
    setIsDragging(false);
    
    // Calculate momentum based on recent movement
    const timeDelta = Date.now() - lastScrollTime.current;
    if (timeDelta < 100) { // Only apply momentum for quick movements
      const velocityX = (lastMouseX.current - startX.current) / timeDelta;
      // Scale momentum based on screen size
      momentumRef.current = velocityX * (isMobile ? 15 : 25);
    }

    // Small delay before restarting animation to prevent jumps
    setTimeout(() => {
      if (!isPaused) {
        scrollAnimationRef.current = requestAnimationFrame(animate);
      }
    }, 100);
  };

  const handleInteractionMove = (position: number) => {
    if (!isDragging || !containerRef.current) return;
    
    const x = position;
    const delta = x - lastMouseX.current;
    
    // Adjust sensitivity based on screen size
    const sensitivity = isMobile ? 1.5 : 2;
    
    // Move content with the drag
    containerRef.current.scrollLeft = scrollLeft.current - (delta * sensitivity);
    
    lastMouseX.current = x;
    lastScrollTime.current = Date.now();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!containerRef.current) return;

    // Adjust scroll step based on screen size
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
      className="w-full py-2 sm:py-4 mb-4 sm:mb-8 overflow-hidden bg-[#407E57]"
      role="region"
      aria-label="Announcement Banner"
    >
      <div 
        ref={containerRef}
        className="overflow-x-hidden cursor-grab active:cursor-grabbing scroll-smooth"
        role="marquee"
        aria-live="polite"
        onMouseEnter={() => !isMobile && setIsPaused(true)}
        onMouseLeave={() => {
          if (!isMobile) {
            setIsPaused(false);
            setIsDragging(false);
            scrollAnimationRef.current = requestAnimationFrame(animate);
          } else {
            handleInteractionEnd();
          }
        }}
        onMouseDown={(e) => handleInteractionStart(e.clientX)}
        onMouseUp={handleInteractionEnd}
        onMouseMove={(e) => isDragging && handleInteractionMove(e.clientX)}
        onTouchStart={(e) => {
          handleInteractionStart(e.touches[0].clientX);
        }}
        onTouchEnd={handleInteractionEnd}
        onTouchMove={(e) => {
          if (isDragging) {
            e.preventDefault();
            handleInteractionMove(e.touches[0].clientX);
          }
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