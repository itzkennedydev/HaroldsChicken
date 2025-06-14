"use client";

import { useState, useEffect } from "react";
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
  { src: "/images/Celebs/Blanton2.jpg", alt: "Blanton at Harold&apos;s Chicken" },
  { src: "/images/Celebs/Blanton3.jpg", alt: "Blanton at Harold&apos;s Chicken" },
  { src: "/images/Celebs/Blanton4.jpg", alt: "Blanton at Harold&apos;s Chicken" },
  { src: "/images/Bday.jpg", alt: "Mr.J" },
  { src: "/images/Celebs/HaroldsCar.JPG", alt: "Harold&apos;s Car" },
  { src: "/images/Celebs/Owner.jpg", alt: "Owner of Harold&apos;s Chicken" },
];

export function ImageCarousel() {
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      className="relative w-full h-[200px] sm:h-[260px] md:h-[320px] mt-16 sm:mt-24 md:mt-32 overflow-hidden"
      aria-label="Celebrity Visitors Gallery"
      role="region"
    >
      <div
        className="relative w-full h-full"
        onMouseEnter={() => !isMobile && setIsPaused(true)}
        onMouseLeave={() => !isMobile && setIsPaused(false)}
      >
        <div
          className="flex gap-4 sm:gap-6 md:gap-8 animate-carousel"
          role="list"
          aria-label="Celebrity images carousel"
          style={{
            animationPlayState: isPaused ? 'paused' : 'running',
            animationDuration: isMobile ? '120s' : '90s',
            transform: 'translateZ(0)',
            width: 'fit-content'
          }}
        >
          {/* First set of images */}
          {images.map((image, index) => (
            <div
              key={`first-${index}`}
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
          {/* Second set of images for seamless loop */}
          {images.map((image, index) => (
            <div
              key={`second-${index}`}
              className="relative w-[280px] sm:w-[400px] md:w-[600px] h-[184px] sm:h-[244px] md:h-[304px] flex-none rounded-lg overflow-hidden select-none"
              role="listitem"
              aria-label={`Slide ${index + images.length + 1} of ${images.length * 2}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover pointer-events-none"
                sizes="(max-width: 640px) 280px, (max-width: 768px) 400px, 600px"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
