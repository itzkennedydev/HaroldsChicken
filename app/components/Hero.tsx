"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Container } from "./ui/container";

interface HeroContent {
  title: string;
  description: string;
  buttonText: string;
}

export function Hero() {
  const orderButtonRef = useRef<HTMLButtonElement>(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);

  const content: HeroContent = {
    title: "Chicago's Soul\nin Every Bite",
    description: "Experience the Iconic Taste That Has Delighted Chicago for Generations. From Family Gatherings to Late-Night Cravings.",
    buttonText: "Order Now"
  };

  // Handle keyboard navigation with debouncing
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLElement && 
          (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;

      if (e.key === '/' || e.key.toLowerCase() === 'o') {
        e.preventDefault();
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          orderButtonRef.current?.focus();
        }, 10);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Animate content after images load
  useEffect(() => {
    if (isImageLoaded) {
      const timer = setTimeout(() => {
        setIsContentVisible(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isImageLoaded]);

  const handleOrderClick = useCallback(() => {
    // Add your order handling logic here
    window.location.href = '/order';
  }, []);

  const handleImageLoad = useCallback(() => {
    setIsImageLoaded(true);
  }, []);

  return (
    <section 
      className="w-full relative"
      aria-label="Welcome to Harold's Chicken"
      role="region"
      aria-roledescription="hero"
    >
      {/* Desktop Hero */}
      <div 
        className="relative min-h-[900px] w-full hidden md:block"
        aria-hidden="false"
      >
        <div 
          className="absolute top-0 right-0 w-[936px] h-full overflow-hidden"
          role="presentation"
          aria-hidden="true"
        >
          <div className={`transform transition-transform duration-700 ${isImageLoaded ? 'scale-100' : 'scale-105'}`}>
            <Image
              src="/images/HaroldsBG.png"
              alt="Restaurant ambiance showing Harold's Chicken interior"
              width={1800}
              height={2000}
              className="object-cover object-center w-full h-full transition-opacity duration-500"
              priority
              sizes="(max-width: 936px) 100vw, 936px"
              quality={90}
              onLoad={handleImageLoad}
            />
          </div>
          <Image
            src="/images/ChickenBucket.png"
            alt="Signature Harold's Chicken bucket featuring fresh fried chicken"
            width={1900}
            height={1900}
            className={`absolute top-[62%] right-48 -translate-y-1/2 w-[600px] h-auto z-10 transition-all duration-700 transform ${
              isImageLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
            priority
            sizes="600px"
            quality={90}
          />
        </div>

        <Container className="relative z-10 pt-80 pb-16">
          <div 
            className={`max-w-2xl transition-all duration-700 transform ${
              isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            role="group"
            aria-labelledby="hero-title hero-description"
          >
            <h1 
              id="hero-title"
              className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#202124] mb-8 leading-tight uppercase text-center"
              tabIndex={0}
            >
              Chicago&apos;s Soul
              <br />
              In Every Bite
            </h1>
            <p 
              id="hero-description"
              className="text-lg md:text-xl lg:text-2xl text-[#333536] mb-10 leading-relaxed uppercase text-center font-medium"
              tabIndex={0}
            >
              {content.description}
            </p>
            <Button
              ref={orderButtonRef}
              size="lg"
              className="bg-[#407E57] hover:bg-[#407E57]/90 text-white text-xl font-bold px-12 py-6 uppercase w-full 
                focus:ring-2 focus:ring-offset-2 focus:ring-[#407E57] focus:outline-none 
                transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
              aria-label="Place your order now - Press forward slash or O key to focus"
              onClick={handleOrderClick}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleOrderClick();
                }
              }}
            >
              {content.buttonText}
            </Button>
          </div>
        </Container>
      </div>

      {/* Mobile Hero */}
      <div 
        className="block md:hidden"
        aria-hidden="false"
      >
        <div 
          className="relative w-full h-[500px] overflow-hidden bg-[#F5F5F5]"
          role="presentation"
          aria-hidden="true"
        >
          <div className={`transform transition-transform duration-700 absolute inset-0 ${isImageLoaded ? 'scale-100' : 'scale-105'}`}>
            <Image
              src="/images/HaroldsBG.png"
              alt="Restaurant ambiance showing Harold's Chicken interior"
              fill
              className="object-cover object-center transition-opacity duration-500"
              priority
              sizes="100vw"
              quality={90}
              onLoad={handleImageLoad}
            />
          </div>
          
          <div 
            className="absolute w-full flex justify-center transform" 
            style={{top: '2%'}}
            role="presentation"
            aria-hidden="true"
          >
            <Image
              src="/images/ChickenBucket.png"
              alt="Signature Harold's Chicken bucket featuring fresh fried chicken"
              width={600}
              height={600}
              className={`w-[280px] h-auto transition-all duration-700 transform ${
                isImageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              priority
              sizes="280px"
              quality={90}
            />
          </div>
        </div>

        <Container className="-mt-16 pb-12">
          <div 
            className={`transition-all duration-700 transform ${
              isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            role="group"
            aria-labelledby="hero-title-mobile hero-description-mobile"
          >
            <h1 
              id="hero-title-mobile"
              className="text-5xl font-bold text-[#202124] mb-4 leading-tight uppercase text-center"
              tabIndex={0}
            >
              Chicago&apos;s Soul
              <br />
              In Every Bite
            </h1>
            <p 
              id="hero-description-mobile"
              className="text-lg text-[#333536] mb-6 leading-relaxed uppercase text-center font-medium"
              tabIndex={0}
            >
              {content.description}
            </p>
            <Button
              ref={orderButtonRef}
              size="lg"
              className="bg-[#407E57] hover:bg-[#407E57]/90 text-white text-lg font-bold px-8 py-4 uppercase w-full 
                focus:ring-2 focus:ring-offset-2 focus:ring-[#407E57] focus:outline-none 
                transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
              aria-label="Place your order now - Press forward slash or O key to focus"
              onClick={handleOrderClick}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleOrderClick();
                }
              }}
            >
              {content.buttonText}
            </Button>
          </div>
        </Container>
      </div>

      {/* Screen reader and keyboard shortcuts information */}
      <div className="sr-only" role="note" aria-label="Keyboard Shortcuts">
        <p>Press forward slash (/) or O key to focus the order button</p>
        <p>Press Enter or Space to activate buttons</p>
        <p>Use Tab to navigate between interactive elements</p>
      </div>
    </section>
  );
}