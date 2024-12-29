import Image from 'next/image';
import { Button } from '../components/ui/button';
import { Container } from '../components/ui/container';
import { Badge } from '../components/ui/badge';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

function HeroSection() {
  return (
    <section className="relative min-h-[600px] w-full">
      <Image
        src="/images/CareersBG.png"
        alt="Harold's Chicken team members working together"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      
      <Container className="relative z-10 pt-48 pb-24">
        <div className="max-w-2xl text-white mx-auto text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight uppercase">
            Join Our Family
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-10 leading-relaxed uppercase font-medium">
            Be Part of Harold&apos;s Chicken in Moline. We&apos;re Looking for Passionate People to Join Our Growing Team.
          </p>
          <Button 
            size="lg"
            className="bg-[#407E57] hover:bg-[#407E57]/90 text-white text-xl font-bold px-12 py-6 uppercase w-full sm:w-auto"
          >
            View Open Positions
          </Button>
        </div>
      </Container>
    </section>
  );
}

function ValuesSection() {
  const values = [
    {
      icon: "🤝",
      title: "FAMILY FIRST",
      description: "WE TREAT OUR TEAM MEMBERS LIKE FAMILY, FOSTERING A SUPPORTIVE AND INCLUSIVE WORKPLACE WHERE EVERYONE CAN THRIVE."
    },
    {
      icon: "📈",
      title: "GROWTH OPPORTUNITIES", 
      description: "WE BELIEVE IN PROMOTING FROM WITHIN AND PROVIDING CLEAR PATHS FOR CAREER ADVANCEMENT AND SKILL DEVELOPMENT."
    },
    {
      icon: "💪",
      title: "EMPOWERMENT",
      description: "WE ENCOURAGE OUR TEAM MEMBERS TO TAKE INITIATIVE, SHARE IDEAS, AND CONTRIBUTE TO OUR CONTINUOUS IMPROVEMENT."
    },
    {
      icon: "🌟",
      title: "EXCELLENCE",
      description: "WE MAINTAIN HIGH STANDARDS IN EVERYTHING WE DO, FROM FOOD QUALITY TO CUSTOMER SERVICE AND TEAM SUPPORT."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <Container>
        <h2 className="text-4xl md:text-5xl font-bold text-[#202124] mb-16 text-center uppercase">
          Why Choose Harold&apos;s
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {values.map((value) => (
            <div key={value.title} className="text-center space-y-4">
              <span className="text-5xl block mb-6">{value.icon}</span>
              <h3 className="text-2xl font-bold text-[#202124] uppercase">{value.title}</h3>
              <p className="text-[#333536] font-medium">{value.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function OpenPositions() {
  const positions = [
    {
      title: "COOK",
      location: "MOLINE LOCATION",
      type: "FULL-TIME",
      description: "JOIN OUR KITCHEN TEAM AND HELP CREATE OUR LEGENDARY DISHES. EXPERIENCE PREFERRED BUT NOT REQUIRED.",
      badge: "URGENT"
    },
    {
      title: "HOSTESS",
      location: "MOLINE LOCATION",
      type: "FULL-TIME / PART-TIME",
      description: "GREET AND SEAT GUESTS WHILE MAINTAINING A WELCOMING ATMOSPHERE. EXCELLENT CUSTOMER SERVICE SKILLS REQUIRED.",
      badge: "HIGH DEMAND"
    },
    {
      title: "CUSTODIAL TECH",
      location: "MOLINE LOCATION",
      type: "FULL-TIME",
      description: "MAINTAIN CLEANLINESS AND SANITATION OF OUR RESTAURANT TO ENSURE A GREAT DINING EXPERIENCE."
    },
    {
      title: "SECURITY",
      location: "MOLINE LOCATION",
      type: "FULL-TIME",
      description: "ENSURE THE SAFETY AND SECURITY OF OUR GUESTS AND TEAM MEMBERS. SECURITY EXPERIENCE REQUIRED.",
      badge: "NEW"
    }
  ];

  return (
    <section className="py-24 bg-[#F9F9F9]">
      <Container>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#202124] mb-16 text-center uppercase">
            Open Positions
          </h2>
          <div className="space-y-6">
            {positions.map((position) => (
              <div 
                key={position.title}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-bold text-[#202124]">{position.title}</h3>
                      {position.badge && (
                        <Badge className="bg-[#ECFDF3] text-[#067647] border border-[#ABEFC6]">
                          {position.badge}
                        </Badge>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-[#475467]">
                      <span>{position.location}</span>
                      <span>•</span>
                      <span>{position.type}</span>
                    </div>
                    <p className="text-[#333536] hidden md:block">{position.description}</p>
                  </div>
                  <Button 
                    className="bg-[#407E57] hover:bg-[#407E57]/90 text-white font-bold uppercase w-full md:w-auto whitespace-nowrap"
                  >
                    Apply Now
                  </Button>
                </div>
                <p className="text-[#333536] md:hidden mt-4">{position.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function BenefitsSection() {
  const benefits = [
    "COMPETITIVE PAY",
    "FLEXIBLE SCHEDULING", 
    "HEALTH INSURANCE",
    "401(K) PLAN",
    "PAID TIME OFF",
    "MEAL DISCOUNTS",
    "CAREER ADVANCEMENT",
    "TRAINING PROGRAMS"
  ];

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/Promo.png"
                alt="Harold's team members enjoying lunch together"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-[#202124] uppercase">
              Benefits & Perks
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div 
                  key={benefit}
                  className="flex items-center gap-3 text-[#333536] font-medium"
                >
                  <svg
                    className="w-5 h-5 text-[#407E57] flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-24 bg-[#407E57]">
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white uppercase">
            Ready to Join Our Team?
          </h2>
          <p className="text-lg text-white/90 leading-relaxed uppercase font-medium">
            START YOUR JOURNEY WITH HAROLD&apos;S CHICKEN MOLINE TODAY. WE&apos;RE EXCITED TO MEET YOU!
          </p>
          <div className="pt-4">
            <Button 
              size="lg"
              className="bg-white hover:bg-white/90 text-[#202124] text-xl font-bold px-12 py-6 uppercase"
            >
              Apply Now
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
      <ValuesSection />
      <OpenPositions />
      <BenefitsSection />
      <CTASection />
      <Footer />
    </main>
  );
}