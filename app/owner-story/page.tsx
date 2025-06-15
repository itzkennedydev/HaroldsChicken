"use client";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Container } from "../components/ui/container";
import { Dialog, DialogContent, DialogTitle } from "../components/ui/dialog";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  caption: string;
}

export default function Page() {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: "/images/1B.jpeg",
      alt: "",
      caption: ""
    },
    {
      id: 2,
      src: "/images/2B.jpg",
      alt: "",
      caption: ""
    },
    {
      id: 3,
      src: "/images/3B.jpg",
      alt: "",
      caption: ""
    },
    {
      id: 4,
      src: "/images/4B.jpg",
      alt: "",
      caption: ""
    },
    {
      id: 5,
      src: "/images/5B.jpg",
      alt: "",
      caption: ""
    },
    {
      id: 6,
      src: "/images/7B.png",
      alt: "",
      caption: ""
    },
    {
      id: 7,
      src: "/images/8B.png",
      alt: "",
      caption: ""
    },
    {
      id: 8,
      src: "/images/9B.jpeg",
      alt: "",
      caption: ""
    },
    {
      id: 9,
      src: "/images/10B.JPG",
      alt: "",
      caption: ""
    },
    {
      id: 10,
      src: "/images/11B.png",
      alt: "",
      caption: ""
    },
    {
      id: 11,
      src: "/images/12B.png",
      alt: "",
      caption: ""
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "0px",
      }
    );

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <Header />
      
      <article ref={sectionRef} className="pt-32 pb-20">
        <Container>
          <div className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="grid lg:grid-cols-[1fr,2fr] gap-20 items-start">
              {/* Image Column */}
              <div className="relative h-full">
                <div className="sticky top-32 w-full relative">
                  <div className="relative aspect-[3/4] shadow-2xl rounded-3xl overflow-hidden">
                    <Image
                      src="/images/Josiah.png"
                      alt="Josiah Blanton"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  {/* Birthday image overlay */}
                  <div className="absolute bottom-[-40px] right-[-20px] w-2/5 h-2/5 z-20 rounded-2xl overflow-hidden shadow-xl ring-4 ring-white">
                    <Image
                      src="/images/Bday.jpg"
                      alt="Birthday celebration"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 40vw, 20vw"
                    />
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div className="space-y-12 pt-0">
                {/* Header Section */}
                <div className="space-y-6">
                  <h1 className="text-6xl font-bold text-[#202124] tracking-tight font-display uppercase leading-tight">
                    The Power of Mindset
                  </h1>
                  <div className="h-1 w-24 bg-red-700 rounded-full"></div>
                </div>

                {/* Introduction */}
                <section className="space-y-8">
                  <p className="text-xl text-[#333536] leading-relaxed">
                    From the streets of Chicago emerged a story of resilience, determination, and unwavering focus. Josiah Blanton's journey is more than a tale of success—it's a testament to the power of mindset over circumstances.
                  </p>
                  <blockquote className="bg-white p-8 rounded-2xl shadow-sm">
                    <p className="text-2xl text-[#202124] font-light italic leading-relaxed">
                      &ldquo;Your mind must arrive at the destination before you do. No matter how good your skill set is, if you don't have the mentality that you're going to win, you've already lost before you started.&rdquo;
                    </p>
                  </blockquote>
                </section>

                {/* Early Life */}
                <section className="space-y-6">
                  <h2 className="text-3xl font-semibold text-[#202124] font-display uppercase tracking-wide">Early Challenges & Choices</h2>
                  <div className="h-1 w-16 bg-red-700 rounded-full"></div>
                  <p className="text-lg text-[#333536] leading-relaxed">
                    Growing up in Chicago, Josiah faced the harsh realities of urban life head-on. Despite not having seen his father since age 10 and watching his mother struggle to make ends meet, he made a conscious decision to choose a different path. While many in his situation might have turned to less constructive alternatives, Josiah's mindset became his compass, guiding him toward positive choices and productive pursuits.
                  </p>
                </section>

                {/* Business Success */}
                <section className="space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-3xl font-semibold text-[#202124] font-display uppercase tracking-wide">Building Success Through Mindset</h2>
                    <div className="h-1 w-16 bg-red-700 rounded-full"></div>
                  </div>
                  <p className="text-lg text-[#333536] leading-relaxed">
                    By age 20, Josiah had already built and managed four successful businesses. His enterprises focus on empowering, educating, and motivating individuals across all age groups.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-4 p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                      <h3 className="text-xl font-medium text-[#202124] font-display uppercase">Dedication</h3>
                      <p className="text-[#202124]">
                        Commitment to excellence in every venture and initiative
                      </p>
                    </div>
                    <div className="space-y-4 p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                      <h3 className="text-xl font-medium text-[#202124] font-display uppercase">Discipline</h3>
                      <p className="text-[#202124]">
                        Maintaining focus and drive even through challenging times
                      </p>
                    </div>
                    <div className="space-y-4 p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                      <h3 className="text-xl font-medium text-[#202124] font-display uppercase">Determination</h3>
                      <p className="text-[#202124]">
                        Unwavering resolve to achieve goals and create positive impact
                      </p>
                    </div>
                  </div>
                </section>

                {/* Philosophy and Impact */}
                <section className="space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-3xl font-semibold text-[#202124] font-display uppercase tracking-wide">Philosophy & Community Impact</h2>
                    <div className="h-1 w-16 bg-red-700 rounded-full"></div>
                  </div>
                  <div className="space-y-6 bg-white p-8 rounded-2xl shadow-sm">
                    <p className="text-lg text-[#333536] leading-relaxed">
                      Josiah's success philosophy emphasizes the critical importance of maintaining, retaining, and sustaining achievements through proper mindset. He believes that true success comes not just from acquiring skills or resources, but from developing the mental framework to properly utilize and grow them.
                    </p>
                    <p className="text-lg text-[#333536] leading-relaxed">
                      Through his businesses and speaking engagements, Josiah continues to share his message of empowerment and positive mindset, helping others recognize that their circumstances don't define their potential for success.
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </Container>
      </article>

      {/* Gallery Section */}
      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center mb-20">
            <h2 className="text-4xl font-semibold text-[#202124] mb-6 font-display uppercase tracking-wide">
              Rooted in Community
            </h2>
            <div className="h-1 w-16 bg-red-700 rounded-full mx-auto mb-8"></div>
            <p className="text-lg text-[#333536]">
              Josiah's journey is more than a tale of success—it's a testament to the power of mindset over circumstances.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {galleryImages.map((image) => (
              <div 
                key={image.id}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md ring-1 ring-neutral-200">
                  <Image
                    src={image.src}
                    alt=""
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            ))}
          </div>

          <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
            <DialogContent className="max-w-4xl p-4">
              <DialogTitle className="sr-only">
                {selectedImage?.caption}
              </DialogTitle>
              {selectedImage && (
                <div>
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={selectedImage.src}
                      alt=""
                      fill
                      className="object-cover object-top rounded-xl"
                    />
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </Container>
      </section>

      <Footer />
    </div>
  );
}