"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
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
      description: "AT HAROLD'S, WE TAKE PRIDE IN SERVING ONLY THE FRESHEST CHICKEN. OUR COMMITMENT TO QUALITY MEANS WE NEVER FREEZE OUR CHICKEN, ENSURING THAT EVERY BITE DELIVERS THAT PERFECT, JUICY TENDERNESS OUR CUSTOMERS LOVE. THIS DEDICATION TO FRESHNESS IS PART OF WHAT MAKES HAROLD'S CHICKEN A CHICAGO LEGEND.",
      buttonText: "LEARN MORE",
      buttonLink: "/about",
      imagePosition: "bottom",
      imageAlt: "Fresh, never frozen chicken preparation at Harold's",
      imagePlaceholder: false,
      imageSrc: "/images/ChickenImg.jpg"
    },
    {
      id: 2,
      title: "EXPLORE THE FULL MENU",
      description: "DISCOVER OUR EXTENSIVE MENU FEATURING CHICAGO'S FAVORITE CHICKEN DISHES, FROM OUR SIGNATURE WINGS TO HEARTY FAMILY MEALS. WE OFFER A VARIETY OF SIDES, SAUCES, AND COMBINATIONS THAT HAVE BEEN PERFECTED OVER GENERATIONS. WHETHER YOU'RE CRAVING OUR CLASSIC FRIED CHICKEN OR WANT TO TRY SOMETHING NEW, OUR MENU HAS SOMETHING FOR EVERYONE.",
      buttonText: "VIEW MENU",
      buttonLink: "/menu",
      imagePosition: "left",
      imageAlt: "Array of Harold's menu items showcasing variety",
      imagePlaceholder: false,
      imageSrc: "/images/FullMenu.jpg"
    },
    {
      id: 3,
      title: "SPORTS BAR",
      description: "JOIN US AT OUR SPORTS BAR WHERE GREAT FOOD MEETS THE EXCITEMENT OF THE GAME. WATCH YOUR FAVORITE CHICAGO TEAMS WHILE ENJOYING OUR FAMOUS CHICKEN AND COLD DRINKS. OUR SPORTS BAR OFFERS THE PERFECT ATMOSPHERE FOR GATHERING WITH FRIENDS, CATCHING THE BIG GAME, OR JUST UNWINDING AFTER WORK WITH SOME OF CHICAGO'S BEST COMFORT FOOD.",
      buttonText: "VISIT BAR",
      buttonLink: "/sports-bar",
      imagePosition: "right",
      imageAlt: "Harold's sports bar environment showing TVs and seating area",
      imagePlaceholder: false,
      imageSrc: "/images/BarImg.jpeg"
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
              className={`flex flex-col ${prop.imagePosition === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16 transition-all duration-700 ${
                inViews[index] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              role="article"
              aria-labelledby={`heading-${prop.id}`}
            >
              <div 
                className="flex-1 space-y-6 md:space-y-8"
                role="group"
                aria-labelledby={`heading-${prop.id}`}
              >
                <h2 
                  id={`heading-${prop.id}`}
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#202124] leading-tight uppercase"
                >
                  {prop.title}
                </h2>
                <p className="text-base sm:text-lg text-[#333536] leading-relaxed font-medium">
                  {prop.description}
                </p>

                <Button 
                  size="lg"
                  className={`w-full sm:w-auto bg-[#407E57] text-white font-bold px-8 py-4 uppercase text-sm sm:text-base
                    transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]
                    hover:bg-[#407E57]/90 focus:ring-2 focus:ring-offset-2 focus:ring-[#407E57] focus:outline-none
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