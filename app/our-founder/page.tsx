import Image from 'next/image';
import { Button } from '../components/ui/button';
import { Container } from '../components/ui/container';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

function HeroSection() {
  return (
    <section className="relative min-h-[600px] w-full bg-[#202124]">
      <div className="absolute inset-0 z-0">
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-60 z-10" />
        <Image
          src="/images/History.jpeg"
          alt="Historic Harold's Chicken location"
          fill
          className="object-cover opacity-40"
          priority
          sizes="100vw"
        />
      </div>
      
      <Container className="relative z-20 flex items-center justify-center min-h-[600px]">
        <div className="max-w-2xl text-white text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight uppercase">
            A Chicago Legend
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-10 leading-relaxed uppercase font-medium">
            From Our First Location In 1950 To Today, Harold&apos;s Has Been Serving Up The Best Chicken In Chicago For Generations
          </p>
        </div>
      </Container>
    </section>
  );
}

function FounderStory() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/images/Harold.jpg"
                alt="Harold's Chicken founder in the original kitchen"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-[#202124] uppercase">
              The Story Of Harold
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-[#333536] leading-relaxed uppercase font-medium">
                IN 1950, HAROLD PIERCE HAD A DREAM AND A SECRET RECIPE. STARTING WITH JUST ONE SMALL RESTAURANT ON THE SOUTH SIDE OF CHICAGO, HE CREATED WHAT WOULD BECOME A CULINARY INSTITUTION.
              </p>
              <p className="text-lg text-[#333536] leading-relaxed uppercase font-medium">
                HAROLD&apos;S DEDICATION TO QUALITY AND AUTHENTICITY QUICKLY MADE HIS RESTAURANT A NEIGHBORHOOD FAVORITE. HE INSISTED ON FRESH, NEVER FROZEN CHICKEN AND PERFECTED THE COOKING PROCESS THAT STILL MAKES OUR CHICKEN SPECIAL TODAY.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Timeline() {
  const timelineEvents = [
    {
      year: "1950",
      title: "THE BEGINNING",
      description: "FIRST HAROLD&apos;S CHICKEN SHACK OPENS ON SOUTH SIDE"
    },
    {
      year: "1965",
      title: "EXPANSION",
      description: "MULTIPLE LOCATIONS ACROSS CHICAGO&apos;S SOUTH SIDE"
    },
    {
      year: "1980",
      title: "CITY-WIDE GROWTH",
      description: "HAROLD&apos;S BECOMES A CHICAGO-WIDE PHENOMENON"
    },
    {
      year: "2000",
      title: "NEXT GENERATION",
      description: "EXPANDING TO NEW CITIES WHILE KEEPING OUR TRADITIONS"
    }
  ];

  return (
    <section className="py-24 bg-[#F9F9F9]">
      <Container>
        <h2 className="text-4xl md:text-5xl font-bold text-[#202124] mb-16 text-center uppercase">
          Our Journey
        </h2>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-[50%] top-0 bottom-0 w-0.5 bg-[#407E57]" />
          
          <div className="space-y-24">
            {timelineEvents.map((event, index) => (
              <div 
                key={event.year} 
                className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center gap-8`}
              >
                <div className="w-1/2 flex flex-col items-end">
                  <div className={`space-y-4 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <span className="text-6xl font-bold text-[#407E57]">{event.year}</span>
                    <h3 className="text-2xl font-bold text-[#202124] uppercase">{event.title}</h3>
                    <p className="text-lg text-[#333536] uppercase font-medium">{event.description}</p>
                  </div>
                </div>
                <div className="relative w-4 h-4 bg-[#407E57] rounded-full z-10">
                  <div className="absolute w-8 h-8 bg-[#407E57] opacity-20 rounded-full -left-2 -top-2" />
                </div>
                <div className="w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function LegacySection() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/images/legacy-1.jpg"
                alt="Customers enjoying Harold's Chicken"
                width={300}
                height={400}
                className="rounded-lg"
              />
              <Image
                src="/images/legacy-2.jpg"
                alt="Classic Harold's storefront"
                width={300}
                height={400}
                className="rounded-lg mt-8"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-[#202124] uppercase">
              Our Legacy Lives On
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-[#333536] leading-relaxed uppercase font-medium">
                FOR OVER 70 YEARS, HAROLD&apos;S HAS BEEN MORE THAN JUST A RESTAURANT - IT&apos;S BEEN A PART OF CHICAGO&apos;S CULTURE AND COMMUNITY. OUR RECIPES AND TRADITIONS HAVE BEEN PASSED DOWN THROUGH GENERATIONS.
              </p>
              <p className="text-lg text-[#333536] leading-relaxed uppercase font-medium">
                TODAY, WE CONTINUE TO HONOR HAROLD&apos;S LEGACY BY MAINTAINING THE QUALITY AND SERVICE THAT MADE US FAMOUS, WHILE BRINGING OUR LEGENDARY CHICKEN TO NEW COMMUNITIES.
              </p>
            </div>
            <Button 
              size="lg"
              className="bg-[#407E57] hover:bg-[#407E57]/90 text-white font-bold px-8 py-4 uppercase w-full sm:w-auto"
            >
              Find a Location
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

function CommunitySupportSection() {
  return (
    <section className="py-24 bg-[#F9F9F9]">
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#202124] uppercase">
            Supporting Our Community
          </h2>
          <p className="text-lg text-[#333536] leading-relaxed uppercase font-medium">
            HAROLD&apos;S IS COMMITTED TO GIVING BACK TO THE COMMUNITIES THAT HAVE SUPPORTED US FOR GENERATIONS. FROM LOCAL YOUTH PROGRAMS TO COMMUNITY EVENTS, WE&apos;RE PROUD TO BE A POSITIVE FORCE IN CHICAGO AND BEYOND.
          </p>
          <div className="pt-8">
            <Button 
              size="lg"
              className="bg-[#407E57] hover:bg-[#407E57]/90 text-white font-bold px-12 py-6 uppercase"
            >
              Learn About Our Impact
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default function Page() {
  return (
    <>
      <Header variant="white" />
      <main className="w-full">
        <HeroSection />
        <FounderStory />
        <Timeline />
        <LegacySection />
        <CommunitySupportSection />
      </main>
      <Footer />
    </>
  );
}