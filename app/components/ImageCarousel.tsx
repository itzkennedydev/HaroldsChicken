"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";

interface CarouselImage {
  src: string;
  alt: string;
}

const images: CarouselImage[] = [
  { src: "/images/Celebs/Chance.jpg", alt: "Chance the Rapper at Harold&apos;s Chicken" },
  { src: "/images/Celebs/Kanye.png", alt: "Kanye West at Harold&apos;s Chicken" },
  { src: "/images/Celebs/Mark.png", alt: "Mark Wahlberg at Harold&apos;s Chicken" },
  { src: "/images/Celebs/Usher.png", alt: "Usher at Harold&apos;s Chicken" },
  { src: "/images/Celebs/JB.jpg", alt: "Blanton at Harold&apos;s Chicken" },
  { src: "/images/Celebs/Blanton.jpeg", alt: "Blanton at Harold&apos;s Chicken" },
  { src: "/images/Celebs/HaroldsCar.JPG", alt: "Harold&apos;s Car" },
  { src: "/images/Celebs/Owner.jpg", alt: "Owner of Harold&apos;s Chicken" },
];

export function ImageCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const isAutoScrolling = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const lastX = useRef(0);
  const dragDistance = useRef(0);

  // Check if device is mobile
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const updateMobileStatus = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", updateMobileStatus);
    updateMobileStatus();
    return () => window.removeEventListener("resize", updateMobileStatus);
  }, []);

  // Start Auto-Scrolling
  const startAutoScroll = useCallback(() => {
    if (isPaused || isDragging || isAutoScrolling.current) return;

    isAutoScrolling.current = true;

    const scroll = () => {
      if (!containerRef.current || isPaused || isDragging) {
        isAutoScrolling.current = false;
        return;
      }

      const container = containerRef.current;
      const maxScroll = container.scrollWidth - container.clientWidth;

      if (container.scrollLeft >= maxScroll) {
        container.scrollTo({ left: 0, behavior: "auto" });
      } else {
        container.scrollLeft += 1.5;
      }

      animationFrameRef.current = requestAnimationFrame(scroll);
    };

    animationFrameRef.current = requestAnimationFrame(scroll);
  }, [isPaused, isDragging]);

  // Stop Auto-Scrolling
  const stopAutoScroll = useCallback(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
      isAutoScrolling.current = false;
    }
  }, []);

  // Snap to nearest slide
  const snapToNearestSlide = useCallback(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const slideWidth = container.clientWidth + 32; // Add gap
    const targetPosition = Math.round(container.scrollLeft / slideWidth) * slideWidth;

    container.scrollTo({
      left: targetPosition,
      behavior: "smooth",
    });
  }, []);

  // Handle Interaction Start
  const handleInteractionStart = (position: number) => {
    setIsDragging(true);
    lastX.current = position;
    stopAutoScroll();
  };

  // Handle Interaction Move
  const handleInteractionMove = (position: number) => {
    if (!isDragging || !containerRef.current) return;

    const delta = position - lastX.current;
    containerRef.current.scrollLeft -= delta;
    dragDistance.current += delta;
    lastX.current = position;
  };

  // Handle Interaction End
  const handleInteractionEnd = () => {
    setIsDragging(false);
    if (Math.abs(dragDistance.current) > 10) {
      snapToNearestSlide();
    }
    dragDistance.current = 0;
    startAutoScroll();
  };

  // Pause Auto-Scroll on Hover
  const handleMouseEnter = () => !isMobile && setIsPaused(true);
  const handleMouseLeave = () => !isMobile && setIsPaused(false);

  // Listen to Auto-Scroll State Changes
  useEffect(() => {
    if (isPaused || isDragging) {
      stopAutoScroll();
    } else {
      startAutoScroll();
    }

    return () => stopAutoScroll();
  }, [isPaused, isDragging, startAutoScroll, stopAutoScroll]);

  return (
    <section
      className="relative w-full h-[200px] sm:h-[260px] md:h-[320px] mt-16 sm:mt-24 md:mt-32"
      aria-label="Celebrity Visitors Gallery"
      role="region"
    >
      <div
        className="relative flex w-full h-full overflow-x-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
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
          onTouchStart={(e) => handleInteractionStart(e.touches[0].pageX)}
          onTouchEnd={handleInteractionEnd}
          onTouchMove={(e) => handleInteractionMove(e.touches[0].pageX)}
          style={{
            scrollBehavior: isDragging ? "auto" : "smooth",
            scrollSnapType: isDragging ? "none" : "x mandatory",
          }}
        >
          {[...images, ...images].map((image, index) => (
            <div
              key={index}
              className="relative w-[280px] sm:w-[400px] md:w-[600px] h-[184px] sm:h-[244px] md:h-[304px] flex-none rounded-lg overflow-hidden select-none"
              role="listitem"
              aria-label={`Slide ${index + 1} of ${images.length * 2}`}
              style={{ scrollSnapAlign: "center" }}
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
    </section>
  );
}
