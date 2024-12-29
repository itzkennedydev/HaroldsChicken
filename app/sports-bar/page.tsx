import Image from 'next/image';
import { Button } from '../components/ui/button';
import { Container } from '../components/ui/container';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

function HeroSection() {
  return (
    <section className="relative min-h-[600px] w-full bg-black">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Bar.jpg"
          alt="Harold's Sports Bar atmosphere"
          fill
          className="object-cover opacity-50"
          priority
          sizes="100vw"
        />
      </div>
      
      <Container className="relative z-10 pt-32 pb-16">
        <div className="max-w-2xl text-white mx-auto text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight uppercase">
            Moline&apos;s Premier
            <br />
            Sports Bar
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-10 leading-relaxed uppercase font-medium">
            Bringing Chicago&apos;s Legendary Harold&apos;s Wings To Moline. Your Home For Authentic Chicago Flavor, Sports, And Good Times.
          </p>
          <Button 
            size="lg"
            className="bg-[#407E57] hover:bg-[#407E57]/90 text-white text-xl font-bold px-12 py-6 uppercase w-full sm:w-auto focus:ring-2 focus:ring-offset-2 focus:ring-[#407E57]"
          >
            View Menu
          </Button>
        </div>
      </Container>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      title: "HD SCREENS",
      description: "30+ HIGH-DEFINITION TVS SHOWING ALL MAJOR SPORTS PACKAGES INCLUDING NFL SUNDAY TICKET, NBA LEAGUE PASS, AND MORE",
      icon: "📺"
    },
    {
      title: "GAME DAY SPECIALS",
      description: "EXCLUSIVE FOOD AND DRINK SPECIALS DURING ALL MAJOR SPORTING EVENTS. PERFECT FOR NFL, NBA, MLB AND LOCAL SPORTS FANS",
      icon: "🏆"
    },
    {
      title: "PRIVATE EVENTS",
      description: "BOOK OUR SPACE FOR YOUR NEXT SPORTS VIEWING PARTY OR CELEBRATION. CUSTOM PACKAGES AVAILABLE FOR GROUPS",
      icon: "🎉"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature) => (
            <div key={feature.title} className="text-center space-y-4">
              <span className="text-4xl">{feature.icon}</span>
              <h2 className="text-2xl font-bold text-[#202124] uppercase">{feature.title}</h2>
              <p className="text-[#333536] font-medium">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function MenuHighlights() {
  const menuItems = [
    {
      name: "WINGS PLATTER",
      price: "16.99",
      description: "24 AUTHENTIC CHICAGO-STYLE HAROLD'S WINGS WITH YOUR CHOICE OF SAUCE",
      imagePlaceholder: true
    },
    {
      name: "LOADED NACHOS",
      price: "12.99",
      description: "TOPPED WITH CHICKEN, CHEESE, AND ALL THE FIXINGS",
      imagePlaceholder: true
    },
    {
      name: "SPORTS BAR SAMPLER",
      price: "24.99",
      description: "HAROLD'S SIGNATURE WINGS, MOZZARELLA STICKS, ONION RINGS, AND CHICAGO-STYLE FRIES",
      imagePlaceholder: true
    }
  ];

  return (
    <section className="py-24 bg-[#F9F9F9]">
      <Container>
        <h2 className="text-4xl md:text-5xl font-bold text-[#202124] mb-16 text-center uppercase">
          Bar Menu Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div key={item.name} className="group cursor-pointer">
              <div className="h-64 bg-[#E4E4E4] rounded-lg border-8 border-[#E4E4E4] transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1" />
              <div className="mt-4 space-y-2">
                <h3 className="text-xl font-bold text-[#202124]">{item.name}</h3>
                <p className="text-[#333536]">{item.description}</p>
                <p className="text-lg font-bold text-[#407E57]">${item.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button 
            size="lg"
            className="bg-[#407E57] hover:bg-[#407E57]/90 text-white font-bold px-8 py-4 uppercase"
          >
            View Full Menu
          </Button>
        </div>
      </Container>
    </section>
  );
}

function EventsSection() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="h-[400px] bg-[#E4E4E4] rounded-lg" />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-[#202124] uppercase">
              Host Your Event Here
            </h2>
            <p className="text-lg text-[#333536] leading-relaxed uppercase font-medium">
              LOOKING FOR THE PERFECT VENUE FOR YOUR NEXT SPORTS VIEWING PARTY OR CELEBRATION? OUR SPORTS BAR OFFERS PRIVATE EVENT SPACES WITH CUSTOMIZABLE FOOD AND DRINK PACKAGES.
            </p>
            <Button 
              size="lg"
              className="bg-[#407E57] hover:bg-[#407E57]/90 text-white font-bold px-8 py-4 uppercase w-full sm:w-auto"
            >
              Book Now
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default function Page() {
  return (
    <main className="w-full">
      <Header variant="white" />
      <HeroSection />
      <FeaturesSection />
      <MenuHighlights />
      <EventsSection />
      <Footer />
    </main>
  );
}