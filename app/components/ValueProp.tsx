"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { useInView } from 'react-intersection-observer';
import { Container } from "./ui/container";

interface ValuePropItem {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imagePosition: "left" | "right" | "bottom" | "top" | "center"; 
  imageAlt: string;
  imagePlaceholder: boolean;
  imageSrc: string;
}

export function ValueProp() {
  const [hoveredButton, setHoveredButton] = useState<number | null>(null);

  // Create refs for each value prop item
  const [ref1, inView1] = useInView({ threshold: 0.2, triggerOnce: true, delay: 100 });
  const [ref2, inView2] = useInView({ threshold: 0.2, triggerOnce: true, delay: 100 });
  const [ref3, inView3] = useInView({ threshold: 0.2, triggerOnce: true, delay: 100 });

  const refs = [ref1, ref2, ref3];
  const inViews = [inView1, inView2, inView3];

  const valueProps: ValuePropItem[] = [
    {
      id: 1,
      title: "FRESH, NEVER FROZEN CHICKEN",
      description: "At Harold's, we take pride in serving only the freshest chicken. Our commitment to quality means we never freeze our chicken, ensuring that every bite delivers that perfect, juicy tenderness our customers love. This dedication to freshness is part of what makes Harold's Chicken a Chicago legend.",
      buttonText: "LEARN MORE",
      buttonLink: "/our-founder",
      imagePosition: "bottom",
      imageAlt: "Best Seller placeholder",
      imagePlaceholder: false,
      imageSrc: "/images/ValueProp/FreshChicken.jpeg"
    },
    {
      id: 2,
      title: "EXPLORE THE FULL MENU",
      description: "Discover our extensive menu featuring Chicago's favorite chicken dishes, from our signature wings to hearty family meals. We offer a variety of sides, sauces, and combinations that have been perfected over generations. Whether you're craving our classic fried chicken or want to try something new, our menu has something for everyone.",
      buttonText: "VIEW MENU",
      buttonLink: "/menu",
      imagePosition: "left",
      imageAlt: "New Item placeholder",
      imagePlaceholder: false,
      imageSrc: "/images/ValueProp/FullMenu.jpg"
    },
    {
      id: 3,
      title: "SPORTS BAR",
      description: "Join us at our sports bar where great food meets the excitement of the game. Watch your favorite Chicago teams while enjoying our famous chicken and cold drinks. Our sports bar offers the perfect atmosphere for gathering with friends, catching the big game, or just unwinding after work with some of Chicago's best comfort food.",
      buttonText: "VISIT BAR",
      buttonLink: "https://www.google.com/maps/place/Harold's+Chicken+Sports+Bar/@41.5062359,-90.5166081,17z/data=!4m14!1m7!3m6!1s0x87e231469fa44355:0x54cb1c7446567d9e!2sHarold's+Chicken+Sports+Bar!8m2!3d41.5062359!4d-90.5166081!16s%2Fg%2F11wtvlptzn!3m5!1s0x87e231469fa44355:0x54cb1c7446567d9e!8m2!3d41.5062359!4d-90.5166081!16s%2Fg%2F11wtvlptzn?hl=en&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D",
      imagePosition: "right",
      imageAlt: "Value placeholder",
      imagePlaceholder: false,
      imageSrc: "/images/ValueProp/Bar.jpeg"
    }
  ];

  return (
    <section 
      className="w-full py-16 md:py-24 lg:py-32"
      aria-label="Harold's Chicken Features"
      role="region"
    >
      <Container>
        <div className="space-y-24 md:space-y-32">
          {valueProps.map((prop, index) => (
            <div 
              key={prop.id}
              ref={refs[index]}
              className={`flex flex-col-reverse md:flex-row ${prop.imagePosition === 'left' ? 'md:flex-row-reverse' : ''} items-center gap-8 md:gap-16 transition-all duration-700 ${
                inViews[index] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              role="article"
              aria-labelledby={`heading-${prop.id}`}
            >
              <div 
                className="flex-1 space-y-6"
                role="group"
                aria-labelledby={`heading-${prop.id}`}
              >
                <h2 
                  id={`heading-${prop.id}`}
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#202124] leading-tight uppercase"
                >
                  {prop.title}
                </h2>
                <p className="text-base sm:text-lg text-[#333536] leading-relaxed font-medium mb-4">
                  {prop.description}
                </p>

                <Link href={prop.buttonLink} className="block mt-4">
                  <Button 
                    size="lg"
                    className={`w-full sm:w-auto bg-red-700 text-white font-bold px-8 py-4 uppercase text-sm sm:text-base
                      transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]
                      hover:bg-red-800 focus:ring-2 focus:ring-offset-2 focus:ring-red-700 focus:outline-none
                      ${hoveredButton === prop.id ? 'shadow-lg' : 'shadow'}`}
                    aria-label={`${prop.buttonText} about ${prop.title.toLowerCase()}`}
                    onMouseEnter={() => setHoveredButton(prop.id)}
                    onMouseLeave={() => setHoveredButton(null)}
                    onFocus={() => setHoveredButton(prop.id)}
                    onBlur={() => setHoveredButton(null)}
                  >
                    <span className="flex items-center gap-2">
                      {prop.buttonText}
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${
                          hoveredButton === prop.id ? 'translate-x-1' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </Button>
                </Link>
              </div>

              <div className="flex-1 w-full mt-8 md:mt-0">
                {prop.imagePlaceholder ? (
                  <div 
                    className={`w-full aspect-[4/3] md:h-[400px] bg-[#F9F9F9] rounded-lg border-2 border-[#E5E0E0] overflow-hidden
                      transition-transform duration-500 hover:scale-[1.02] relative group
                      ${prop.imagePosition === 'left' ? 'md:translate-x-4' : 'md:-translate-x-4'}`}
                    role="img"
                    aria-label={prop.imageAlt}
                  >
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                  </div>
                ) : (
                  <div 
                    className={`relative w-full aspect-[4/3] md:h-[400px] rounded-lg overflow-hidden
                      transition-transform duration-500 hover:scale-[1.02]
                      ${prop.imagePosition === 'left' ? 'md:translate-x-4' : 'md:-translate-x-4'}`}
                  >
                    <Image
                      src={prop.imageSrc}
                      alt={prop.imageAlt}
                      fill
                      quality={100}
                      loading="eager"
                      className="object-cover transition-all duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}