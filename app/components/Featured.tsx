"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

interface FeaturedItem {
  id: number;
  name: string;
  image: string;
  href: string;
  description: string;
  imageAlt: string;
}

export function Featured() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const featuredItems: FeaturedItem[] = [
    { 
      id: 1, 
      name: "Chicken", 
      image: "/images/1P.png", 
      href: "/menu/chicken",
      description: "Explore our chicken menu items",
      imageAlt: "Harold&apos;s signature chicken dishes"
    },
    { 
      id: 2, 
      name: "Fish", 
      image: "/images/1P.png", 
      href: "/menu/fish",
      description: "Discover our fish selections",
      imageAlt: "Harold&apos;s fish menu offerings"
    },
    { 
      id: 3, 
      name: "Combos", 
      image: "/images/1P.png", 
      href: "/menu/combos",
      description: "View our combo meal options",
      imageAlt: "Harold&apos;s combo meal selections"
    },
    { 
      id: 4, 
      name: "Sides", 
      image: "/images/1P.png", 
      href: "/menu/sides",
      description: "Check out our side dishes",
      imageAlt: "Harold&apos;s side dish options"
    },
  ];

  return (
    <section 
      ref={ref}
      className="w-full py-8 pb-16"
      aria-label="Featured Menu Categories"
      role="region"
    >
      <div 
        className={`grid grid-cols-1 md:flex md:flex-wrap justify-center gap-8 md:gap-[140px] transition-all duration-700 transform ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        role="list"
      >
        <div className="grid grid-cols-2 gap-4 md:hidden w-full px-4">
          {featuredItems.map((item, index) => (
            <Link
              key={item.id}
              href={item.href}
              className="flex flex-col items-center group transition-transform duration-300 hover:-translate-y-1"
              role="listitem"
              aria-labelledby={`featured-title-${item.id}`}
              aria-describedby={`featured-desc-${item.id}`}
            >
              <div 
                className="relative w-full aspect-[4/3]"
              >
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  className="object-contain block transition-opacity duration-300 group-hover:opacity-90"
                  priority={index === 0}
                  sizes="(max-width: 768px) 50vw, 320px"
                />
                <h3 
                  id={`featured-title-${item.id}`}
                  className="absolute bottom-0 left-0 right-0 text-sm font-bold text-[#202124] text-center uppercase bg-white/80 py-2"
                >
                  {item.name}
                </h3>
              </div>
              <span 
                id={`featured-desc-${item.id}`}
                className="sr-only"
              >
                {item.description}
              </span>
            </Link>
          ))}
        </div>

        <div className="hidden md:flex md:flex-wrap md:justify-center md:gap-[140px]">
          {featuredItems.map((item, index) => (
            <Link
              key={item.id}
              href={item.href}
              className="flex flex-col items-center group transition-transform duration-300 hover:-translate-y-1"
              style={{ width: 320 }}
              role="listitem"
              aria-labelledby={`featured-title-desktop-${item.id}`}
              aria-describedby={`featured-desc-desktop-${item.id}`}
            >
              <div 
                className="relative w-[320px] h-[240px]"
              >
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  width={320}
                  height={240}
                  className="object-contain block transition-opacity duration-300 group-hover:opacity-90"
                  priority={index === 0}
                  sizes="320px"
                />
                <h3 
                  id={`featured-title-desktop-${item.id}`}
                  className="absolute bottom-0 left-0 right-0 text-lg font-bold text-[#202124] text-center uppercase bg-white/80 py-2"
                >
                  {item.name}
                </h3>
              </div>
              <span 
                id={`featured-desc-desktop-${item.id}`}
                className="sr-only"
              >
                {item.description}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}