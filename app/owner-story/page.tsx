"use client";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Container } from "../components/ui/container";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

export default function Page() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

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
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <Header />
      <article 
        ref={sectionRef} 
        className="pt-32 sm:pt-24 pb-16 md:py-24 lg:py-32 bg-white"
      >
        <Container>
          <div className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="grid md:grid-cols-[1fr,2fr] gap-12 items-start">
              {/* Image Column - Fixed on Scroll */}
              <div className="relative w-full aspect-[3/4] md:sticky md:top-24">
                <Image
                  src="/images/Josiah.png"
                  alt="Portrait of Josiah Blanton"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>

              {/* Content Column */}
              <div className="space-y-16">
                {/* Header Section */}
                <header>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#202124] mb-6 uppercase">
                    The Power of Mindset
                  </h1>
                  <p className="text-lg text-[#407E57] font-medium uppercase tracking-wider">
                    A Journey of Transformation and Impact
                  </p>
                </header>

                {/* Introduction */}
                <section className="space-y-6">
                  <p className="text-lg text-[#333536] leading-relaxed">
                    From the streets of Chicago emerged a story of resilience, determination, and unwavering focus. Josiah Blanton&apos;s journey is more than a tale of success—it&apos;s a testament to the power of mindset over circumstances.
                  </p>
                  <blockquote className="border-l-4 border-[#407E57] pl-6 py-4 my-8">
                    <p className="text-xl text-[#333536] italic">
                      &quot;Your mind must arrive at the destination before you do. No matter how good your skill set is, if you don&apos;t have the mentality that you&apos;re going to win, you&apos;ve already lost before you started.&quot;
                    </p>
                  </blockquote>
                </section>

                {/* Early Life */}
                <section>
                  <h2 className="text-2xl font-bold text-[#202124] mb-6 uppercase">Early Challenges & Choices</h2>
                  <div className="space-y-6">
                    <p className="text-lg text-[#333536] leading-relaxed">
                      Growing up in Chicago, Josiah faced the harsh realities of urban life head-on. Despite not having seen his father since age 10 and watching his mother struggle to make ends meet, he made a conscious decision to choose a different path. While many in his situation might have turned to less constructive alternatives, Josiah&apos;s mindset became his compass, guiding him toward positive choices and productive pursuits.
                    </p>
                  </div>
                </section>

                {/* Business Success */}
                <section>
                  <h2 className="text-2xl font-bold text-[#202124] mb-6 uppercase">Building Success Through Mindset</h2>
                  <div className="space-y-6">
                    <p className="text-lg text-[#333536] leading-relaxed">
                      By age 20, Josiah had already built and managed four successful businesses. His enterprises focus on empowering, educating, and motivating individuals across all age groups. The core of his business philosophy centers on self-reliance and maintaining the right mindset for success.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
                      <div className="bg-[#F8FAF8] p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-[#407E57] mb-3">Dedication</h3>
                        <p className="text-[#333536]">
                          Commitment to excellence in every venture and initiative
                        </p>
                      </div>
                      <div className="bg-[#F8FAF8] p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-[#407E57] mb-3">Discipline</h3>
                        <p className="text-[#333536]">
                          Maintaining focus and drive even through challenging times
                        </p>
                      </div>
                      <div className="bg-[#F8FAF8] p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-[#407E57] mb-3">Determination</h3>
                        <p className="text-[#333536]">
                          Unwavering resolve to achieve goals and create positive impact
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Philosophy and Impact */}
                <section>
                  <h2 className="text-2xl font-bold text-[#202124] mb-6 uppercase">Philosophy & Community Impact</h2>
                  <div className="space-y-6">
                    <p className="text-lg text-[#333536] leading-relaxed">
                      Josiah&apos;s success philosophy emphasizes the critical importance of maintaining, retaining, and sustaining achievements through proper mindset. He believes that true success comes not just from acquiring skills or resources, but from developing the mental framework to properly utilize and grow them.
                    </p>
                    <p className="text-lg text-[#333536] leading-relaxed">
                      Through his businesses and speaking engagements, Josiah continues to share his message of empowerment and positive mindset, helping others recognize that their circumstances don&apos;t define their potential for success.
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </Container>
      </article>
      <Footer />
    </>
  );
}