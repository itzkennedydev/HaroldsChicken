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
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoScroll = useCallback(() => {
    if (autoScrollRef.current || isPaused) return;

    autoScrollRef.current = setInterval(() => {
      if (!containerRef.current || isDragging) return;

      const scrollWidth = containerRef.current.scrollWidth;
      const clientWidth = containerRef.current.clientWidth;
      const maxScroll = scrollWidth - clientWidth;
      
      containerRef.current.scrollLeft += 1;
      
      if (containerRef.current.scrollLeft >= maxScroll) {
        containerRef.current.scrollLeft = 0;
      }
    }, 50);
  }, [isDragging, isPaused]);

  const stopAutoScroll = useCallback(() => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
      autoScrollRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, [startAutoScroll, stopAutoScroll]);

  const handleInteractionStart = (position: number) => {
    setIsDragging(true);
    setStartX(position - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
    stopAutoScroll();
  };

  const handleInteractionEnd = () => {
    setIsDragging(false);
    if (!isPaused) startAutoScroll();
  };

  const handleInteractionMove = (position: number) => {
    if (!isDragging) return;
    
    const x = position - (containerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const container = containerRef.current;
    if (!container) return;

    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        container.scrollLeft -= 300;
        break;
      case 'ArrowRight':
        e.preventDefault();
        container.scrollLeft += 300;
        break;
      case ' ':
        e.preventDefault();
        setIsPaused(!isPaused);
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
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div 
          ref={containerRef}
          className="flex gap-4 sm:gap-6 md:gap-8 overflow-x-hidden overflow-y-hidden cursor-grab active:cursor-grabbing focus:outline-none focus:ring-2 focus:ring-[#407E57]"
          role="list"
          aria-label="Celebrity images carousel"
          tabIndex={0}
          onMouseDown={(e) => handleInteractionStart(e.pageX)}
          onMouseUp={handleInteractionEnd}
          onMouseLeave={handleInteractionEnd}
          onMouseMove={(e) => handleInteractionMove(e.pageX)}
          onTouchStart={(e) => handleInteractionStart(e.touches[0].pageX)}
          onTouchEnd={handleInteractionEnd}
          onTouchMove={(e) => handleInteractionMove(e.touches[0].pageX)}
          onKeyDown={handleKeyDown}
        >
          {[...images, ...images].map((image, index) => (
            <div
              key={index}
              className="relative w-[280px] sm:w-[400px] md:w-[600px] h-[184px] sm:w-[244px] md:h-[304px] flex-none rounded-lg overflow-hidden select-none"
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
              />
            </div>
          ))}
        </div>
      </div>

      {/* Screen reader instructions */}
      <div className="sr-only" role="note">
        <p>Press left and right arrows to navigate through images</p>
        <p>Press space to pause/resume auto-scroll</p>
        <p>Press Home to go to first image</p>
        <p>Press End to go to last image</p>
        <p>Hover over carousel to pause auto-scroll</p>
      </div>
    </section>
  );
}