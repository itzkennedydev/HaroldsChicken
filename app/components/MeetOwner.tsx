"use client";

import { useState, useCallback, useRef } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Container } from "./ui/container";
import { useInView } from 'react-intersection-observer';

interface Milestone {
  year: string;
  title: string;
}

export function MeetOwner() {
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [hoveredMilestone, setHoveredMilestone] = useState<number | null>(null);

  const { ref: sectionRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
    delay: 100
  });

  const milestones: Milestone[] = [];

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

  return (
    <section 
      ref={sectionRef}
      className="w-full relative py-16 md:py-24 lg:py-32 overflow-hidden"
      aria-label="Meet the Owner Section"
      role="region"
    >
      {/* Background Image */}
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
          quality={50}
          sizes="100vw"
        />
      </div>

      <Container>
        <div 
          className={`relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-16 transition-all duration-1000 transform ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          onKeyDown={handleKeyDown}
        >
          {/* Image Container */}
          <div 
            className="w-full md:w-1/2"
            role="img"
            aria-label="Portrait of Harold's Chicken owner"
          >
            <div className="relative aspect-[5/3] w-full rounded-lg overflow-hidden group">
              <div className="absolute inset-0 bg-[#407E57] mix-blend-multiply opacity-20 group-hover:opacity-0 transition-opacity duration-500" />
              <Image
                src="/images/Josiah.png"
                alt="Portrait photograph of Harold's Chicken owner"
                fill
                className={`object-cover object-top rounded-lg transition-all duration-700 transform ${
                  isImageLoaded ? 'scale-100 blur-0' : 'scale-105 blur-sm'
                } group-hover:scale-105`}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                onLoadingComplete={() => setIsImageLoaded(true)}
              />
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Milestones */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="text-center group/milestone"
                  onMouseEnter={() => setHoveredMilestone(index)}
                  onMouseLeave={() => setHoveredMilestone(null)}
                >
                  <div className={`text-2xl font-bold transition-colors duration-300 ${
                    hoveredMilestone === index ? 'text-[#407E57]' : 'text-[#202124]'
                  }`}>
                    {milestone.year}
                  </div>
                  <div className="text-sm text-[#475467] mt-1">{milestone.title}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Content Container */}
          <div 
            className="w-full md:w-1/2 space-y-8 flex flex-col items-start"
            ref={contentRef}
            role="article"
            aria-labelledby="owner-title"
          >
            <div className="space-y-2">
              <p className="text-[#407E57] font-bold uppercase tracking-wider">Our Story</p>
              <h2 
                id="owner-title"
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#202124] leading-tight uppercase"
                tabIndex={0}
              >
                MEET THE OWNER
              </h2>
            </div>

            <div className="space-y-6">
              <p 
                className="text-base sm:text-lg text-[#333536] leading-relaxed font-medium uppercase"
                tabIndex={0}
              >
                LOREM IPSUM DOLOR SIT AMET CONSECTETUR. LACUS VITAE FACILISI FELIS AMET EGET. VELIT RHONCUS MAURIS PROIN SCELERISQUE VULPUTATE AUGUE A. PHARETRA AT TURPIS FRINGILLA CRAS ODIO.
              </p>
              <blockquote className="border-l-4 border-[#407E57] pl-6 py-2 italic">
                <p className="text-lg text-[#333536] leading-relaxed">
                  "Our mission is to bring the authentic taste of Chicago to every plate we serve."
                </p>
              </blockquote>
              <p 
                className="text-base sm:text-lg text-[#333536] leading-relaxed font-medium uppercase"
                tabIndex={0}
              >
                TURPIS FEUGIAT PHARETRA TINCIDUNT ORCI POSUERE VELIT. UT SODALES PARTURIENT VEL PULVINAR IN VITAE ID. PELLENTESQUE HENDRERIT HAC LACUS SIT.
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <Button 
                ref={buttonRef}
                size="lg"
                className="bg-[#407E57] hover:bg-[#407E57]/90 text-white font-bold px-8 py-4 uppercase text-sm sm:text-base 
                  transition-all duration-300 hover:scale-105 hover:shadow-lg
                  focus:ring-2 focus:ring-offset-2 focus:ring-[#407E57] focus:outline-none"
                aria-label="Learn more about the owner's story"
              >
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
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-[#407E57] text-[#407E57] hover:bg-[#407E57]/10 font-bold px-8 py-4 uppercase text-sm sm:text-base 
                  transition-all duration-300 hover:scale-105
                  focus:ring-2 focus:ring-offset-2 focus:ring-[#407E57] focus:outline-none"
                aria-label="Contact the owner"
              >
                CONTACT
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