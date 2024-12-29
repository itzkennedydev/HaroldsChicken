"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";

interface CarouselImage {
  src: string;
  alt: string;
}

const images: CarouselImage[] = [
  {
    src: "/images/Celebs/Chance.jpg",
    alt: "Chance the Rapper at Harold's Chicken",
  },
  {
    src: "/images/Celebs/Kanye.png", 
    alt: "Kanye West at Harold's Chicken",
  },
  {
    src: "/images/Celebs/Mark.png",
    alt: "Mark Wahlberg at Harold's Chicken",
  },
  {
    src: "/images/Celebs/Usher.png",
    alt: "Usher at Harold's Chicken",
  },
  {
    src: "/images/Celebs/Blanton.jpeg",
    alt: "Blanton at Harold's Chicken",
  },
  {
    src: "/images/Celebs/HaroldsCar.JPG",
    alt: "Harold's Car",
  },
  {
    src: "/images/Celebs/Owner.jpg",
    alt: "Owner of Harold's Chicken",
  },
];

export function ImageCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [momentum, setMomentum] = useState(0);
  const lastMouseX = useRef(0);
  const lastScrollTime = useRef(Date.now());
  const scrollAnimationRef = useRef<number | null>(null);
  const momentumRef = useRef<NodeJS.Timeout | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const stopAutoScroll = useCallback(() => {
    if (scrollAnimationRef.current) {
      cancelAnimationFrame(scrollAnimationRef.current);
      scrollAnimationRef.current = null;
    }
  }, []);

  const startAutoScroll = useCallback(() => {
    if (scrollAnimationRef.current || isPaused || isDragging) return;

    const animate = () => {
      if (!containerRef.current || isPaused || isDragging) return;

      const container = containerRef.current;
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;
      const maxScroll = scrollWidth - clientWidth;
      
      const currentScroll = container.scrollLeft;
      const step = 1; // Constant smooth scroll speed
      
      if (currentScroll >= maxScroll - 1) {
        container.scrollLeft = 0; // Reset to start when reaching end
      } else {
        container.scrollLeft += step;
      }

      scrollAnimationRef.current = requestAnimationFrame(animate);
    };

    scrollAnimationRef.current = requestAnimationFrame(animate);
  }, [isDragging, isPaused]);

  const applyMomentum = useCallback(() => {
    if (!containerRef.current || Math.abs(momentum) < 0.1) return;

    const currentScroll = containerRef.current.scrollLeft;
    const maxScroll = containerRef.current.scrollWidth - containerRef.current.clientWidth;
    
    const newScroll = Math.max(0, Math.min(maxScroll, currentScroll - momentum));
    containerRef.current.scrollLeft = newScroll;
    
    setMomentum(prev => prev * 0.95);
    
    momentumRef.current = setTimeout(applyMomentum, 16);
  }, [momentum]);

  useEffect(() => {
    if (momentum !== 0) {
      applyMomentum();
    }
    return () => {
      if (momentumRef.current) clearTimeout(momentumRef.current);
    };
  }, [momentum, applyMomentum]);

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, [startAutoScroll, stopAutoScroll]);

  const handleInteractionStart = (position: number) => {
    setIsDragging(true);
    setStartX(position);
    setScrollLeft(containerRef.current?.scrollLeft || 0);
    lastMouseX.current = position;
    lastScrollTime.current = Date.now();
    setMomentum(0);
    stopAutoScroll();

    if (containerRef.current) {
      containerRef.current.style.touchAction = 'none';
    }
  };

  const handleInteractionEnd = () => {
    setIsDragging(false);
    
    const timeDelta = Date.now() - lastScrollTime.current;
    if (timeDelta < 100) {
      const velocityX = (lastMouseX.current - startX) / timeDelta;
      setMomentum(velocityX * (isMobile ? 15 : 25));
    }
    
    if (containerRef.current) {
      containerRef.current.style.touchAction = 'pan-y pinch-zoom';
    }

    if (!isPaused && !isMobile) {
      setTimeout(startAutoScroll, 1000);
    }
  };

  const handleInteractionMove = (position: number) => {
    if (!isDragging) return;
    
    const x = position;
    const delta = x - lastMouseX.current;
    const sensitivity = isMobile ? 1.5 : 2.5;
    
    if (containerRef.current) {
      const newScrollLeft = scrollLeft - (delta * sensitivity);
      containerRef.current.scrollLeft = newScrollLeft;
    }
    
    lastMouseX.current = x;
    lastScrollTime.current = Date.now();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const container = containerRef.current;
    if (!container) return;

    const scrollDistance = isMobile ? 200 : 300;
    
    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        container.scrollLeft -= scrollDistance;
        stopAutoScroll();
        setTimeout(startAutoScroll, 1000);
        break;
      case 'ArrowRight':
        e.preventDefault();
        container.scrollLeft += scrollDistance;
        stopAutoScroll();
        setTimeout(startAutoScroll, 1000);
        break;
      case ' ':
        e.preventDefault();
        setIsPaused(prev => !prev);
        break;
      case 'Home':
        e.preventDefault();
        container.scrollLeft = 0;
        break;
      case 'End':
        e.preventDefault();
        container.scrollLeft = container.scrollWidth;
        break;
    }
  };

  return (
    <section 
      className="relative w-full h-[200px] sm:h-[260px] md:h-[320px] mt-16 sm:mt-24 md:mt-32"
      aria-label="Celebrity Visitors Gallery"
      role="region"
    >
      <div 
        className="relative flex w-full h-full overflow-x-hidden"
        onMouseEnter={() => !isMobile && setIsPaused(true)}
        onMouseLeave={() => !isMobile && setIsPaused(false)}
      >
        <div 
          ref={containerRef}
          className="flex gap-4 sm:gap-6 md:gap-8 overflow-x-hidden overflow-y-hidden cursor-grab active:cursor-grabbing focus:outline-none focus:ring-2 focus:ring-[#407E57] scroll-smooth"
          role="list"
          aria-label="Celebrity images carousel"
          tabIndex={0}
          onMouseDown={(e) => handleInteractionStart(e.pageX)}
          onMouseUp={handleInteractionEnd}
          onMouseLeave={handleInteractionEnd}
          onMouseMove={(e) => handleInteractionMove(e.pageX)}
          onTouchStart={(e) => {
            handleInteractionStart(e.touches[0].pageX);
          }}
          onTouchEnd={handleInteractionEnd}
          onTouchMove={(e) => {
            e.preventDefault();
            handleInteractionMove(e.touches[0].pageX);
          }}
          onKeyDown={handleKeyDown}
          style={{
            scrollBehavior: isDragging ? 'auto' : 'smooth',
            touchAction: isDragging ? 'none' : 'pan-y pinch-zoom'
          }}
        >
          {[...images, ...images].map((image, index) => (
            <div
              key={index}
              className="relative w-[280px] sm:w-[400px] md:w-[600px] h-[184px] sm:h-[244px] md:h-[304px] flex-none rounded-lg overflow-hidden select-none"
              role="listitem"
              aria-label={`Slide ${index + 1} of ${images.length * 2}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover pointer-events-none"
                sizes="(max-width: 640px) 280px, (max-width: 768px) 400px, 600px"
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="sr-only" role="note">
        <p>Press left and right arrows to navigate through images</p>
        <p>Press space to pause/resume auto-scroll</p>
        <p>Press Home to go to first image</p>
        <p>Press End to go to last image</p>
        <p>Swipe left or right to navigate on mobile devices</p>
      </div>
    </section>
  );
}