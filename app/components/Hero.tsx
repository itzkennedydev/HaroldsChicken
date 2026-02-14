"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Container } from "./ui/container";

interface HeroContent {
  title: string;
  description: string;
  buttonText: string;
  videoSrc?: string;
}

export function Hero() {
  const orderButtonRef = useRef<HTMLButtonElement>(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);

  const content: HeroContent = {
    title: "Chicago's Soul In\nEvery Bite",
    description: "Experience the legendary Harold's Chicken that's obsessed with Chicago\n for 70+ years." +
                "Hand-breaded fresh daily with our secret spice blend.",
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
    window.open('https://www.doordash.com/store/harold\'s-chicken-sports-bar-moline-35999947/80495166/', '_blank');
  }, []);

  const handleImageLoad = useCallback(() => {
    setIsImageLoaded(true);
  }, []);

  return (
    <section 
      className="w-full relative bg-[#1a1a1a] overflow-hidden"
      aria-label="Welcome to Harold&apos;s Chicken"
      role="region"
      aria-roledescription="hero"
    >

      {/* Desktop Hero */}
      <div 
        className="relative min-h-[1000px] w-full hidden md:block"
        aria-hidden="false"
      >
        <div 
          className="absolute top-0 right-0 w-[2200px] xl:w-[2000px] lg:w-[1800px] md:w-[1600px] h-full overflow-hidden bg-[#1a1a1a]"
          role="presentation"
          aria-hidden="true"
        >
          <div className={`transform transition-transform duration-700 ${isImageLoaded ? 'scale-100' : 'scale-105'}`}>
            <Image
              src="https://d3kd1cq6xnp2l4.cloudfront.net/harolds_chicken/public/images/HeroBG.png"
              alt="Restaurant ambiance showing Harold&apos;s Chicken interior"
              width={3000}
              height={3500}
              className="object-cover object-center w-full h-full transition-opacity duration-500 opacity-20"
              priority
              sizes="(max-width: 1280px) 2000px, (max-width: 1024px) 1800px, (max-width: 768px) 1600px, 2200px"
              quality={100}
              onLoad={handleImageLoad}
            />
          </div>
          <Image
            src="https://d3kd1cq6xnp2l4.cloudfront.net/harolds_chicken/public/images/ChickenBucket.png"
            alt="Signature Harold&apos;s Chicken bucket featuring fresh fried chicken"
            width={1900}
            height={1900}
            className={`absolute top-[62%] -translate-y-1/2 w-[650px] 2xl:w-[650px] xl:w-[530px] lg:w-[500px] md:w-[450px] h-auto z-10 transition-all duration-700 transform 
              2xl:right-4 xl:right-4 lg:right-4 md:right-4
              ${isImageLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
            priority
            sizes="(min-width: 1536px) 650px, (min-width: 1280px) 530px, (min-width: 1024px) 500px, 450px"
            quality={90}
          />
        </div>

        <Container className="relative z-10 pt-80 xl:pt-88 lg:pt-96 md:pt-84 pb-28">
          <div 
            className={`max-w-4xl transition-all duration-700 transform ${
              isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } md:pr-32 xl:pr-44 lg:pr-36 md:pr-28`}
            role="group"
            aria-labelledby="hero-title hero-description"
          >
            <div className="relative">
              <h1 
                id="hero-title"
                className="text-6xl lg:text-7xl 2xl:text-8xl font-bold text-white mb-8 leading-tight uppercase text-center whitespace-pre-line relative z-10"
                tabIndex={0}
              >
                {content.title}
                <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#cd2f27]"></span>
              </h1>
            </div>
            <p 
              id="hero-description"
              className="text-lg lg:text-xl 2xl:text-2xl text-white mb-8 leading-normal text-center font-medium max-w-[600px] xl:max-w-[700px] lg:max-w-[600px] md:max-w-[500px] mx-auto whitespace-pre-line"
              tabIndex={0}
            >
              {content.description}
            </p>
            <div className="flex justify-center">
              <Button
                ref={orderButtonRef}
                size="lg"
                className="bg-[#cd2f27] hover:bg-[#cd2f27]/90 text-white text-xl font-bold px-12 xl:px-12 lg:px-10 md:px-8 py-6 xl:py-6 lg:py-5 md:py-4 uppercase min-w-[500px] xl:min-w-[500px] lg:min-w-[450px] md:min-w-[400px]
                  focus:ring-2 focus:ring-offset-2 focus:ring-[#cd2f27] focus:outline-none 
                  transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]
                  relative overflow-hidden group"
                aria-label="Place your order now - Press forward slash or O key to focus"
                onClick={handleOrderClick}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleOrderClick();
                  }
                }}
              >
                <span className="relative z-10">{content.buttonText}</span>
                <span className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* Mobile Hero */}
      <div 
        className="block md:hidden"
        aria-hidden="false"
      >
        <div 
          className="relative w-full flex flex-col items-center justify-start bg-[#1a1a1a] pt-4 pb-0"
          role="presentation"
          aria-hidden="true"
        >
          <div className={`transform transition-transform duration-700 absolute inset-0 pointer-events-none select-none ${isImageLoaded ? 'scale-100' : 'scale-105'}`}
            aria-hidden="true">
            <Image
              src="https://d3kd1cq6xnp2l4.cloudfront.net/harolds_chicken/public/images/HeroBG.png"
              alt="Restaurant ambiance showing Harold&apos;s Chicken interior"
              fill
              className="object-cover object-center transition-opacity duration-500 opacity-20"
              priority
              sizes="100vw"
              quality={100}
              onLoad={handleImageLoad}
            />
          </div>
          <Image
            src="https://d3kd1cq6xnp2l4.cloudfront.net/harolds_chicken/public/images/ChickenBucket.png"
            alt="Signature Harold&apos;s Chicken bucket featuring fresh fried chicken"
            width={600}
            height={600}
            className={`relative z-10 w-[200px] sm:w-[240px] h-auto mt-16 mb-0 transition-all duration-700 transform scale-[1.15] origin-center ${
              isImageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            priority
            sizes="(min-width: 640px) 240px, 200px"
            quality={90}
          />
        </div>

        <Container className="relative z-10 -mt-8 pt-0 pb-8">
          <div 
            className={`transition-all duration-700 transform ${
              isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            role="group"
            aria-labelledby="hero-title-mobile hero-description-mobile"
          >
            <div className="relative">
              <h1 
                id="hero-title-mobile"
                className="text-5xl font-bold text-white mb-4 leading-tight uppercase text-center whitespace-pre-line mt-0 pt-0 relative z-10"
                tabIndex={0}
              >
                {content.title}
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#cd2f27]"></span>
              </h1>
            </div>
            <p 
              id="hero-description-mobile"
              className="text-lg text-white mb-8 leading-normal text-center font-medium max-w-[340px] sm:max-w-[400px] mx-auto"
              tabIndex={0}
            >
              {content.description}
            </p>
            <div className="flex justify-center">
              <Button
                ref={orderButtonRef}
                size="lg"
                className="bg-[#cd2f27] hover:bg-[#cd2f27]/90 text-white text-lg font-bold px-8 py-4 uppercase min-w-[350px] sm:min-w-[400px]
                  focus:ring-2 focus:ring-offset-2 focus:ring-[#cd2f27] focus:outline-none 
                  transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]
                  relative overflow-hidden group"
                aria-label="Place your order now - Press forward slash or O key to focus"
                onClick={handleOrderClick}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleOrderClick();
                  }
                }}
              >
                <span className="relative z-10">{content.buttonText}</span>
                <span className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* Screen reader and keyboard shortcuts information */}
      <div className="sr-only" role="note" aria-label="Keyboard Shortcuts">
        Press forward slash (/) or O key to focus the order button
      </div>
    </section>
  );
}