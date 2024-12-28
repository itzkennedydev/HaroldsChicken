"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { Container } from './ui/container';

interface MenuItem {
  id: number;
  name: string;
  calories: string;
  price: string;
  imagePlaceholder: boolean;
  imageAlt: string;
  tag?: string;
  description?: string;
}

export function Cravings() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const items: MenuItem[] = [
    {
      id: 1,
      name: "CLASSIC DARK MEAT DEAL",
      calories: "520-740",
      price: "7.99",
      imagePlaceholder: true,
      imageAlt: "Classic dark meat chicken meal with sides",
      tag: "BEST SELLER",
      description: "Tender dark meat chicken with your choice of two sides"
    },
    {
      id: 2,
      name: "FISH & FRIES COMBO",
      calories: "480-690",
      price: "8.99",
      imagePlaceholder: true,
      imageAlt: "Fish and fries combo meal",
      tag: "NEW",
      description: "Crispy fish fillet served with our signature seasoned fries"
    },
    {
      id: 3,
      name: "FAMILY WING PACK",
      calories: "840-1200",
      price: "19.99",
      imagePlaceholder: true,
      imageAlt: "Family size wing pack",
      tag: "VALUE",
      description: "24 wings with your choice of sauces, perfect for sharing"
    }
  ];

  return (
    <section 
      ref={ref}
      className="w-full bg-[#F9F9F9] py-16 md:py-24"
      aria-label="Featured Menu Items"
      role="region"
    >
      <Container>
        <div 
          className={`w-full transition-all duration-700 transform ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 
            id="featured-cravings-title"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#202124] mb-12 leading-tight uppercase text-center"
          >
            Featured Cravings
          </h2>
          
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
            role="list"
            aria-labelledby="featured-cravings-title"
          >
            {items.map((item) => (
              <Link
                key={item.id}
                href={`/menu/item-${item.id}`}
                className="group relative bg-white rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                aria-labelledby={`item-${item.id}-title`}
                role="listitem"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                onFocus={() => setHoveredItem(item.id)}
                onBlur={() => setHoveredItem(null)}
              >
                {/* Tag */}
                {item.tag && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-[#407E57] text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                      {item.tag}
                    </span>
                  </div>
                )}

                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  {item.imagePlaceholder ? (
                    <div 
                      className="h-full bg-[#E4E4E4] transition-all duration-500 group-hover:opacity-90"
                      role="img"
                      aria-label={item.imageAlt}
                    >
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                    </div>
                  ) : (
                    <div className="relative h-full">
                      <Image
                        src={`/images/menu/${item.id}.jpg`}
                        alt={item.imageAlt}
                        fill
                        className="object-cover transition-all duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    </div>
                  )}

                  {/* Quick View Overlay */}
                  <div 
                    className={`absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-all duration-300 ${
                      hoveredItem === item.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <span className="bg-white/90 text-[#202124] px-6 py-2 rounded-full font-bold uppercase text-sm transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      Quick View
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 bg-white">
                  <div className="space-y-2">
                    <h3 
                      id={`item-${item.id}-title`}
                      className="text-xl font-bold text-[#202124] group-hover:text-[#407E57] transition-colors duration-300"
                    >
                      {item.name}
                    </h3>
                    
                    {item.description && (
                      <p className="text-[#475467] text-sm line-clamp-2">
                        {item.description}
                      </p>
                    )}

                    <div className="flex items-center justify-between pt-2">
                      <p 
                        className="text-[#333536] text-sm"
                        aria-label={`Calorie range: ${item.calories}`}
                      >
                        Cal.: {item.calories}
                      </p>
                      <p 
                        className="text-xl font-bold text-[#407E57]"
                        aria-label={`Price: ${item.price} dollars`}
                      >
                        ${item.price}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}