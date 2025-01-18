"use client";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Container } from "../components/ui/container";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
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
        rootMargin: "0px"
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      const currentSection = sectionRef.current;
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      
      <article ref={sectionRef} className="pt-32 pb-20">
        <Container>
          <div className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="grid lg:grid-cols-[1fr,2fr] gap-16 items-start">
              {/* Image Column */}
              <div className="relative h-full">
                <div className="sticky top-32 w-full">
                  <div className="relative aspect-[3/4] shadow-2xl">
                    <Image
                      src="/images/Josiah.png"
                      alt=""
                      fill
                      className="object-cover rounded-2xl"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div className="space-y-8 pt-0">
                {/* Header Section */}
                <h1 className="text-5xl font-bold text-neutral-900 tracking-tight font-display uppercase">
                  The Power of Mindset
                </h1>

                {/* Introduction */}
                <section className="space-y-8">
                  <p className="text-xl text-neutral-700 leading-relaxed">
                    From the streets of Chicago emerged a story of resilience, determination, and unwavering focus. Josiah Blanton&apos;s journey is more than a tale of success—it&apos;s a testament to the power of mindset over circumstances.
                  </p>
                  <blockquote className="pl-8 border-l-4 border-[#156D37]">
                    <p className="text-2xl text-neutral-800 font-light italic">
                      &ldquo;Your mind must arrive at the destination before you do. No matter how good your skill set is, if you don&apos;t have the mentality that you&apos;re going to win, you&apos;ve already lost before you started.&rdquo;
                    </p>
                  </blockquote>
                </section>

                {/* Early Life */}
                <section className="space-y-6">
                  <h2 className="text-3xl font-semibold text-neutral-900 font-display uppercase">Early Challenges & Choices</h2>
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    Growing up in Chicago, Josiah faced the harsh realities of urban life head-on. Despite not having seen his father since age 10 and watching his mother struggle to make ends meet, he made a conscious decision to choose a different path. While many in his situation might have turned to less constructive alternatives, Josiah&apos;s mindset became his compass, guiding him toward positive choices and productive pursuits.
                  </p>
                </section>

                {/* Business Success */}
                <section className="space-y-8">
                  <h2 className="text-3xl font-semibold text-neutral-900 font-display uppercase">Building Success Through Mindset</h2>
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    By age 20, Josiah had already built and managed four successful businesses. His enterprises focus on empowering, educating, and motivating individuals across all age groups.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-3 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-medium text-[#156D37] font-display uppercase">Dedication</h3>
                      <p className="text-neutral-600">
                        Commitment to excellence in every venture and initiative
                      </p>
                    </div>
                    <div className="space-y-3 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-medium text-[#156D37] font-display uppercase">Discipline</h3>
                      <p className="text-neutral-600">
                        Maintaining focus and drive even through challenging times
                      </p>
                    </div>
                    <div className="space-y-3 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-medium text-[#156D37] font-display uppercase">Determination</h3>
                      <p className="text-neutral-600">
                        Unwavering resolve to achieve goals and create positive impact
                      </p>
                    </div>
                  </div>
                </section>

                {/* Philosophy and Impact */}
                <section className="space-y-6">
                  <h2 className="text-3xl font-semibold text-neutral-900 font-display uppercase">Philosophy & Community Impact</h2>
                  <div className="space-y-6">
                    <p className="text-lg text-neutral-700 leading-relaxed">
                      Josiah&apos;s success philosophy emphasizes the critical importance of maintaining, retaining, and sustaining achievements through proper mindset. He believes that true success comes not just from acquiring skills or resources, but from developing the mental framework to properly utilize and grow them.
                    </p>
                    <p className="text-lg text-neutral-700 leading-relaxed">
                      Through his businesses and speaking engagements, Josiah continues to share his message of empowerment and positive mindset, helping others recognize that their circumstances don&apos;t define their potential for success.
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
            <h2 className="text-4xl font-semibold text-neutral-900 mb-6 font-display uppercase">
              Rooted in Community
            </h2>
            <p className="text-lg text-neutral-600">
              Josiah&apos;s journey is more than a tale of success—it&apos;s a testament to the power of mindset over circumstances.
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