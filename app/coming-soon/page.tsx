import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../components/ui/button';
import { Container } from '../components/ui/container';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export default function ComingSoon() {
  return (
    <>
      <Header variant="white" />
      <main className="min-h-screen flex flex-col">
        <section className="relative flex-grow w-full">
          <Image
            src="/images/CareersBG.png"
            alt="Harold's Chicken background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
          <Container className="relative z-10 flex items-center min-h-[calc(100vh-80px)]">
            <div className="max-w-2xl text-white mx-auto text-center py-24">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight uppercase">
                Online Ordering
                <br />
                Coming Soon
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-10 leading-relaxed uppercase font-medium">
                We're working hard to bring you the convenience of online ordering. In the meantime, visit us in person to enjoy our delicious food!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-red-700 hover:bg-red-800 text-white text-xl font-bold px-12 py-6 uppercase w-full sm:w-auto 
                    focus:ring-2 focus:ring-offset-2 focus:ring-red-700 focus:outline-none transition-all duration-200"
                >
                  <Link href="/menu">
                    View Menu
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#202124] text-[#202124] hover:bg-[#202124]/10 text-xl font-bold px-12 py-6 uppercase w-full sm:w-auto 
                    focus:ring-2 focus:ring-offset-2 focus:ring-[#202124] focus:outline-none transition-all duration-200"
                >
                  <Link href="/locations">
                    Get Directions
                  </Link>
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
} 