"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { Container } from './ui/container';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';

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
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
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
      image: "/images/Wings.JPG",
      imageAlt: "Classic dark meat chicken meal with sides",
      tag: "BEST SELLER",
      description: "Tender dark meat chicken with your choice of two sides"
    },
    {
      id: 2,
      name: "FISH & FRIES COMBO",
      calories: "480-690",
      price: "8.99",
      image: "/images/Catfish.JPG",
      imageAlt: "Fish and fries combo meal",
      tag: "NEW",
      description: "Crispy fish fillet served with our signature seasoned fries"
    },
    {
      id: 3,
      name: "FAMILY WING PACK",
      calories: "840-1200",
      price: "19.99",
      image: "/images/FamilyDinner.JPG",
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
                className="group relative bg-white rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
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

                  {/* Quick View Overlay */}
                  <div 
                    className={`absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-all duration-300 ${
                      hoveredItem === item.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedItem(item);
                      }}
                      className="bg-white/90 text-[#202124] px-6 py-2 rounded-full font-bold uppercase text-sm transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300 hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#407E57] focus:ring-offset-2"
                    >
                      Quick View
                    </button>
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
                        className="text-[#333536] text-sm"
                        aria-label={`Calorie range: ${item.calories}`}
                      >
                        Cal.: {item.calories}
                      </p>
                      <p 
                        className="text-xl font-bold text-[#202124]"
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

      {/* Quick View Dialog */}
      <Dialog open={selectedItem !== null} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="sm:max-w-[700px] p-0 overflow-hidden bg-white">
          {selectedItem && (
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative h-[300px] md:h-[450px] group">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 700px) 100vw, 350px"
                  priority
                />
                {selectedItem.tag && (
                  <span className="absolute top-4 left-4 bg-[#407E57] text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                    {selectedItem.tag}
                  </span>
                )}
              </div>

              {/* Content Section */}
              <div className="p-6 md:p-8 flex flex-col h-full">
                <DialogHeader className="space-y-4">
                  <div className="space-y-2">
                    <DialogTitle className="text-3xl font-bold text-[#202124] uppercase">
                      {selectedItem.name}
                    </DialogTitle>
                    <DialogDescription className="text-lg text-[#475467]">
                      {selectedItem.description}
                    </DialogDescription>
                  </div>
                </DialogHeader>

                {/* Nutritional Info */}
                <div className="mt-6 py-4 border-y border-gray-100">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-[#475467] uppercase mb-1">Calories</p>
                      <p className="text-lg font-bold text-[#202124]">{selectedItem.calories}</p>
                    </div>
                    <div>
                      <p className="text-sm text-[#475467] uppercase mb-1">Price</p>
                      <p className="text-3xl font-bold text-[#202124]">${selectedItem.price}</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-auto space-y-4 pt-6">
                  <Link
                    href="/order"
                    className="w-full inline-flex justify-center items-center px-6 py-4 bg-[#407E57] text-white font-bold rounded-lg 
                      hover:bg-[#407E57]/90 transition-all duration-300 transform hover:-translate-y-0.5
                      focus:outline-none focus:ring-2 focus:ring-[#407E57] focus:ring-offset-2 uppercase text-lg"
                  >
                    Order Now
                  </Link>
                  <Link
                    href={`/menu/item-${selectedItem.id}`}
                    className="w-full inline-flex justify-center items-center px-6 py-4 border-2 border-[#407E57] text-[#407E57] 
                      font-bold rounded-lg hover:bg-[#407E57]/10 transition-all duration-300 uppercase
                      focus:outline-none focus:ring-2 focus:ring-[#407E57] focus:ring-offset-2"
                  >
                    View Details
                    <svg
                      className="w-5 h-5 ml-2 transition-transform duration-300 transform group-hover:translate-x-1"
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
                  </Link>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}