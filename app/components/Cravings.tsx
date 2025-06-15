"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { Container } from './ui/container';

interface MenuItem {
  id: number;
  name: string;
  calories: string;
  price: string;
  image: string;
  imageAlt: string;
  tag?: string;
  description?: string;
}

export function Cravings() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const items: MenuItem[] = [
    {
      id: 1,
      name: "PARTY PLATTER",
      calories: "480-690",
      price: "8.99",
      image: "/images/ValueProp/FullMenu.jpeg",
      imageAlt: "Fish and fries combo meal",
      tag: "BEST SELLER",
      description: "A mix of our golden-fried fish, chicken tenders, and signature seasoned fries"
    },
    {
      id: 2,
      name: "HOT HEAVY HONEY GLAZE BISCUITS",
      calories: "320-450",
      price: "5.99",
      image: "/images/HoneyBiscuits.png",
      imageAlt: "Freshly baked honey glazed biscuits",
      tag: "NEW",
      description: "Warm, fluffy biscuits drizzled with our signature honey glaze"
    },
    {
      id: 3,
      name: "CRISPY CHICKEN BUCKET",
      calories: "840-1200",
      price: "19.99",
      image: "/images/ValueBucket.jpg",
      imageAlt: "Family size chicken bucket",
      tag: "VALUE",
      description: "18 wings with your choice of sauces, perfect for sharing"
    }
  ];

  return (
    <section 
      ref={ref}
      className="w-full bg-[#F9F9F9] py-8 md:py-12"
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
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#202124] mb-8 leading-tight uppercase text-center"
          >
            Featured Cravings
          </h2>
          
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            role="list"
            aria-labelledby="featured-cravings-title"
          >
            {items.map((item) => (
              <Link
                key={item.id}
                href="/menu"
                className="group relative bg-white rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                aria-labelledby={`item-${item.id}-title`}
                role="listitem"
              >
                {/* Tag */}
                {item.tag && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-red-700 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                      {item.tag}
                    </span>
                  </div>
                )}

                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <div className="relative h-full">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 bg-white">
                  <div className="space-y-2">
                    <h3 
                      id={`item-${item.id}-title`}
                      className="text-xl font-bold text-[#202124] transition-colors duration-300"
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
                        className="text-[#333536] text-sm sr-only"
                        aria-label={`Calorie range: ${item.calories}`}
                      >
                        Cal.: {item.calories}
                      </p>
                      <p 
                        className="text-xl font-bold text-[#202124] sr-only"
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