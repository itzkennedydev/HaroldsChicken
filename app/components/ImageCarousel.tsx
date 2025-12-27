"use client";

import { useState, useEffect, useCallback, useMemo, memo } from "react";
import Image from "next/image";

interface CarouselImage {
  src: string;
  alt: string;
}

// Move images outside component to prevent recreation on each render
const CAROUSEL_IMAGES: CarouselImage[] = [
  { src: "/images/Celebs/Chance.jpg", alt: "Chance the Rapper at Harold's Chicken" },
  { src: "/images/Celebs/Kanye.png", alt: "Kanye West at Harold's Chicken" },
  { src: "/images/Celebs/Mark.png", alt: "Mark Wahlberg at Harold's Chicken" },
  { src: "/images/Celebs/Usher.png", alt: "Usher at Harold's Chicken" },
  { src: "/images/Celebs/JB.jpg", alt: "Blanton at Harold's Chicken" },
  { src: "/images/Celebs/Blanton.jpeg", alt: "Blanton at Harold's Chicken" },
  { src: "/images/Celebs/Blanton2.jpg", alt: "Blanton at Harold's Chicken" },
  { src: "/images/Celebs/Blanton3.jpg", alt: "Blanton at Harold's Chicken" },
  { src: "/images/Celebs/Blanton4.jpg", alt: "Blanton at Harold's Chicken" },
  { src: "/images/Bday.jpg", alt: "Mr.J" },
  { src: "/images/Celebs/HaroldsCar.JPG", alt: "Harold's Car" },
  { src: "/images/Celebs/Owner.jpg", alt: "Owner of Harold's Chicken" },
];

// Memoized individual carousel item to prevent unnecessary re-renders
const CarouselItem = memo(function CarouselItem({
  image,
  index,
  isPriority
}: {
  image: CarouselImage;
  index: number;
  isPriority: boolean;
}) {
  return (
    <div
      className="relative w-[280px] sm:w-[400px] md:w-[600px] h-[184px] sm:h-[240px] md:h-[304px] flex-none rounded-lg overflow-hidden select-none"
      role="listitem"
      aria-label={`Slide ${index + 1}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover pointer-events-none"
        sizes="(max-width: 640px) 280px, (max-width: 768px) 400px, 600px"
        priority={isPriority}
        loading={isPriority ? "eager" : "lazy"}
      />
    </div>
  );
});

function ImageCarouselComponent() {
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Memoized mobile check handler
  const checkMobile = useCallback(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  // Check if device is mobile with debounced resize handler
  useEffect(() => {
    checkMobile();

    // Debounce resize events for better performance
    let timeoutId: NodeJS.Timeout;
    const debouncedCheck = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkMobile, 150);
    };

    window.addEventListener("resize", debouncedCheck, { passive: true });
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", debouncedCheck);
    };
  }, [checkMobile]);

  // Memoize animation style to prevent object recreation
  const animationStyle = useMemo(() => ({
    animationPlayState: isPaused ? 'paused' : 'running',
    animationDuration: isMobile ? '120s' : '90s',
    transform: 'translateZ(0)', // Hardware acceleration
    willChange: 'transform', // Hint to browser for optimization
    width: 'fit-content'
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
      className="relative w-full h-[200px] sm:h-[256px] md:h-[320px] mt-16 sm:mt-24 md:mt-32 overflow-hidden"
      aria-label="Celebrity Visitors Gallery"
      role="region"
    >
      <div
        className="relative w-full h-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="flex gap-8 sm:gap-8 md:gap-8 animate-carousel"
          role="list"
          aria-label="Celebrity images carousel"
          style={animationStyle}
        >
          {/* First set of images - only first image is priority */}
          {CAROUSEL_IMAGES.map((image, index) => (
            <CarouselItem
              key={`first-${index}`}
              image={image}
              index={index}
              isPriority={index === 0}
            />
          ))}
          {/* Second set of images for seamless loop - all lazy loaded */}
          {CAROUSEL_IMAGES.map((image, index) => (
            <CarouselItem
              key={`second-${index}`}
              image={image}
              index={index + CAROUSEL_IMAGES.length}
              isPriority={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Export memoized component
export const ImageCarousel = memo(ImageCarouselComponent);
