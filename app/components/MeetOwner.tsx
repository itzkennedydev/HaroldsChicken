"use client";

import { useState, useCallback, useRef, memo, useMemo } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Container } from "./ui/container";
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

function MeetOwnerComponent() {
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const { ref: sectionRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
    delay: 100
  });

  // Memoized keyboard handler
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      buttonRef.current?.focus();
    } else if (e.key === 'ArrowUp' && contentRef.current) {
      e.preventDefault();
      const paragraphs = contentRef.current.querySelectorAll('p');
      paragraphs[0]?.focus();
    }
  }, []);

  // Memoized image load handler
  const handleImageLoad = useCallback(() => {
    setIsImageLoaded(true);
  }, []);

  // Memoized transition classes
  const containerClasses = useMemo(() =>
    `relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-16 transition-all duration-1000 transform ${
      inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`,
    [inView]
  );

  const imageClasses = useMemo(() =>
    `object-cover object-top rounded-lg transition-all duration-700 transform ${
      isImageLoaded ? 'scale-100 blur-0' : 'scale-105 blur-sm'
    } group-hover:scale-105`,
    [isImageLoaded]
  );

  return (
    <section
      ref={sectionRef}
      className="w-full relative py-16 md:py-24 overflow-hidden"
      aria-label="Meet the Owner Section"
      role="region"
    >
      {/* Background Image - lazy loaded with reduced quality */}
      <div
        className="absolute inset-0 z-0 bg-white"
        role="presentation"
        aria-hidden="true"
      >
        <Image
          src="/images/CHI.png"
          alt=""
          fill
          className="object-cover opacity-10"
          priority={false}
          quality={30}
          sizes="100vw"
          loading="lazy"
        />
      </div>

      <Container>
        <div
          className={containerClasses}
          onKeyDown={handleKeyDown}
        >
          {/* Image Container */}
          <div
            className="w-full md:w-1/2 relative"
            role="img"
            aria-label="Portrait of Josiah Blanton"
          >
            <div className="relative aspect-[5/3] w-full rounded-lg overflow-hidden group">
              <div className="absolute inset-0 bg-red-700 mix-blend-multiply opacity-20 group-hover:opacity-0 transition-opacity duration-500" />
              <Image
                src="/images/Josiah.png"
                alt="Portrait photograph of Josiah Blanton"
                fill
                className={imageClasses}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={false}
                loading="lazy"
                onLoad={handleImageLoad}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* Content Container */}
          <div 
            className="w-full md:w-1/2 space-y-8 flex flex-col items-start"
            ref={contentRef}
            role="article"
            aria-labelledby="owner-title"
          >
            <div className="space-y-4">
              <p className="text-red-700 font-bold uppercase tracking-wider">Our Story</p>
              <h2 
                id="owner-title"
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#202124] leading-tight uppercase"
                tabIndex={0}
              >
                Meet the owner
              </h2>
            </div>

            <div className="space-y-8">
              <p 
                className="text-base sm:text-lg text-[#333536] leading-relaxed font-medium uppercase"
                tabIndex={0}
              >
                Josiah Blanton, a visionary entrepreneur from Chicago, Illinois, transforms challenges into opportunities through his dedication to excellence and a strong business mindset.
              </p>
              <blockquote className="border-l-4 border-red-700 pl-8 py-4 italic">
                <p className="text-lg text-[#333536] leading-relaxed">
                  &ldquo;Your mind must arrive at the destination before you do. Success is not just about skill—it&apos;s about the mindset to maintain, retain, and sustain everything you build.&rdquo;
                </p>
              </blockquote>
              <p 
                className="text-base sm:text-lg text-[#333536] leading-relaxed font-medium uppercase"
                tabIndex={0}
              >
                Guided by the principles of discipline, dedication, and determination, Josiah&apos;s journey exemplifies the power of a positive mindset in achieving business excellence and community impact.
              </p>
            </div>

            <div className="flex gap-4 pt-8">
              <Button 
                ref={buttonRef}
                size="lg"
                className="bg-red-700 hover:bg-red-800 text-white font-bold px-8 py-4 uppercase text-sm sm:text-base 
                  transition-all duration-300 hover:scale-105 hover:shadow-lg
                  focus:ring-2 focus:ring-offset-2 focus:ring-red-700 focus:outline-none"
                aria-label="Learn more about Josiah&apos;s story"
                asChild
              >
                <Link href="/owner-story">
                  <span className="flex items-center gap-2">
                    READ MORE
                    <svg 
                      className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>

      {/* Screen reader instructions */}
      <div className="sr-only" role="note">
        <p>Use arrow keys to navigate between paragraphs</p>
        <p>Press Enter or Space to activate buttons</p>
        <p>Use Tab to navigate through interactive elements</p>
      </div>
    </section>
  );
}

// Export memoized component
export const MeetOwner = memo(MeetOwnerComponent);