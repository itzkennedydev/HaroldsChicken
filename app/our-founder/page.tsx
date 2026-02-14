import Image from 'next/image';
import { Button } from '../components/ui/button';
import { Container } from '../components/ui/container';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import Link from 'next/link';

function HeroSection() {
  return (
    <section className="relative min-h-[600px] w-full">
      <Image
        src="https://d3kd1cq6xnp2l4.cloudfront.net/harolds_chicken/public/images/History.jpeg"
        alt="Historic Harold's Chicken location"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/40" />
      <Container className="relative z-10 flex items-center min-h-[600px]">
        <div className="max-w-2xl text-white mx-auto text-center py-24">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight uppercase">
            A Chicago Legend
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-10 leading-relaxed uppercase font-medium">
            From our first location in 1950 to today, Harold's has been serving up the best chicken in Chicago for generations
          </p>
        </div>
      </Container>
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-red-700" />
    </section>
  );
}

function FounderStory() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/3">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="https://d3kd1cq6xnp2l4.cloudfront.net/harolds_chicken/public/images/Harold.jpg"
                alt="Harold&apos;s Chicken founder in the original kitchen"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-[#202124] uppercase">
              The Story Of Harold
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-[#333536] leading-relaxed font-medium">
                Harold Pierce, was an African American entrepreneur, left an indelible mark on Chicago&apos;s culinary landscape as the founder of the iconic Harold&apos;s Chicken Shack. Born in 1917 in Midway, Alabama, Pierce migrated to Chicago during the Great Migration, a period when many African Americans moved north seeking better economic opportunities.
                <br /><br />
                Originally working as a chauffeur, he later pursued his passion for food, opening his first fried chicken restaurant on Chicago&apos;s South Side in 1950. What set Harold&apos;s Chicken Shack apart was its simple yet flavorful recipe—crispy fried chicken served with a signature mild or spicy sauce, often accompanied by white bread and fries.
              </p>
              <p className="text-lg text-[#333536] leading-relaxed font-medium">
                Pierce&apos;s business model was revolutionary for its time. Instead of traditional franchising, he licensed his brand to friends and family, allowing African American entrepreneurs to own and operate their own locations, fostering economic empowerment within the Black community.
                <br /><br />
                Today, Harold&apos;s Chicken has become more than just a restaurant; it&apos;s a cultural institution, symbolizing the resilience, creativity, and entrepreneurial spirit of Chicago&apos;s Black community. Pierce&apos;s legacy lives on through countless Harold&apos;s locations across the U.S., serving as a flavorful testament to Black excellence in business and cuisine.
              </p>
            </div>
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
            <div className="grid grid-cols-2 gap-6">
              <div className="relative aspect-square w-full">
                <Image
                  src="https://d3kd1cq6xnp2l4.cloudfront.net/harolds_chicken/public/images/Legacy/HaroldsSB.jpeg"
                  alt="Customers enjoying Harold's Chicken"
                  fill
                  className="rounded-lg object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  priority
                />
              </div>
              <div className="relative aspect-square w-full">
                <Image
                  src="https://d3kd1cq6xnp2l4.cloudfront.net/harolds_chicken/public/images/Legacy/NewBar.jpeg"
                  alt="Classic Harold's storefront"
                  fill
                  className="rounded-lg object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-[#202124] uppercase">
              Our Legacy Lives On
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-[#333536] leading-relaxed font-medium">
                For over 70 years, Harold&apos;s has been more than just a restaurant - it&apos;s been a part of Chicago&apos;s culture and community. Our recipes and traditions have been passed down through generations.
              </p>
              <p className="text-lg text-[#333536] leading-relaxed font-medium">
                Today, we continue to honor Harold&apos;s legacy by maintaining the quality and service that made us famous, while bringing our legendary chicken to new communities.
              </p>
            </div>
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
            Harold&apos;s is committed to giving back to the communities that have supported us for generations. From local youth programs to community events, we&apos;re proud to be a positive force in Chicago and beyond.
          </p>
          <div className="pt-8">
            <Button 
              size="lg"
              className="bg-red-700 hover:bg-red-800 text-white font-bold px-12 py-6 uppercase"
              asChild
            >
              <Link href="/owner-story#rooted-in-community">
                Learn About Our Impact
              </Link>
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
        <LegacySection />
        <CommunitySupportSection />
      </main>
      <Footer />
    </>
  );
}