'use client';

import Image from 'next/image';
import { Button } from '../components/ui/button';
import { Container } from '../components/ui/container';
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
      <div className="absolute inset-0 bg-black/40" />
      <Container className="relative z-10 flex items-center min-h-[600px]">
        <div className="max-w-2xl text-white mx-auto text-center py-24">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight uppercase">
            Future Opportunities
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-10 leading-relaxed uppercase font-medium">
            While we&apos;re not currently hiring, we&apos;re always interested in meeting talented individuals who want to join the Harold&apos;s Chicken family.
          </p>
          <Button 
            size="lg"
            className="bg-[#407E57] hover:bg-[#407E57]/90 text-white text-xl font-bold px-12 py-6 uppercase w-full sm:w-auto"
            onClick={() => window.open('https://apply.haroldschickensportsbar.com', '_blank')}
          >
            View Application Portal
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
    <section className="bg-white">
      <Container className="py-24">
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

function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Working at Harold's Chicken has been an incredible journey. The supportive environment and opportunities for growth have helped me develop both professionally and personally.",
      name: "Sarah Johnson",
      role: "Restaurant Manager",
      image: "/images/testimonial-1.jpg"
    },
    {
      quote: "The family-first culture here is not just talk - it's real. I've never worked somewhere that cares so much about their employees' wellbeing and success.",
      name: "Michael Chen",
      role: "Kitchen Team Lead",
      image: "/images/testimonial-2.jpg"
    },
    {
      quote: "Starting as a server and working my way up to management showed me that Harold's truly believes in promoting from within. They invest in their people.",
      name: "David Rodriguez",
      role: "Assistant Manager",
      image: "/images/testimonial-3.jpg"
    }
  ];

  return (
    <section className="bg-[#F8F9FA]">
      <Container className="py-24">
        <h2 className="text-4xl md:text-5xl font-bold text-[#202124] mb-16 text-center uppercase">
          Our Team Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-white p-8 rounded-lg border border-gray-100">
              <div className="relative w-24 h-24 mx-auto mb-6">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <p className="text-[#333536] italic mb-6">{testimonial.quote}</p>
              <div className="text-center">
                <h4 className="font-bold text-[#202124]">{testimonial.name}</h4>
                <p className="text-[#407E57]">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function BenefitsSection() {
  const benefits = [
    {
      icon: "💰",
      title: "Competitive Pay",
      description: "We offer above-industry wages and regular performance-based increases"
    },
    {
      icon: "🏥",
      title: "Health Benefits",
      description: "Comprehensive medical, dental, and vision coverage for eligible employees"
    },
    {
      icon: "📅",
      title: "Flexible Scheduling",
      description: "Work-life balance with flexible shifts and time-off options"
    },
    {
      icon: "🎓",
      title: "Training Programs",
      description: "Continuous learning opportunities and skill development"
    },
    {
      icon: "🎉",
      title: "Employee Discounts",
      description: "Generous food discounts and special employee perks"
    },
    {
      icon: "🤝",
      title: "Referral Bonuses",
      description: "Rewards for helping us grow our team with great people"
    }
  ];

  return (
    <section className="bg-white">
      <Container className="py-24">
        <h2 className="text-4xl md:text-5xl font-bold text-[#202124] mb-16 text-center uppercase">
          Benefits & Perks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="p-6 rounded-lg bg-[#F8F9FA] hover:bg-[#F0F1F2] transition-colors">
              <span className="text-4xl block mb-4">{benefit.icon}</span>
              <h3 className="text-xl font-bold text-[#202124] mb-2 uppercase">{benefit.title}</h3>
              <p className="text-[#333536]">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      question: "What positions do you typically hire for?",
      answer: "We hire for various roles including servers, kitchen staff, hosts, bartenders, and management positions. Each role offers unique opportunities for growth and development."
    },
    {
      question: "What experience do I need to apply?",
      answer: "While experience is valued, we also welcome entry-level candidates with the right attitude and willingness to learn. Our comprehensive training program will help you succeed."
    },
    {
      question: "What are the typical working hours?",
      answer: "We offer flexible scheduling with various shifts available. Full-time and part-time positions are available to accommodate different needs and lifestyles."
    },
    {
      question: "Is there room for advancement?",
      answer: "Absolutely! We strongly believe in promoting from within. Many of our managers started in entry-level positions and worked their way up through dedication and hard work."
    },
    {
      question: "What is the interview process like?",
      answer: "Our interview process typically includes an initial application review, followed by a phone screening and an in-person interview. We focus on getting to know you as a person."
    },
    {
      question: "Do you provide training?",
      answer: "Yes, we provide comprehensive training for all positions. Our structured training program ensures you have the skills and knowledge needed to excel in your role."
    }
  ];

  return (
    <section className="bg-[#F8F9FA]">
      <Container className="py-24">
        <h2 className="text-4xl md:text-5xl font-bold text-[#202124] mb-16 text-center uppercase">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {faqs.map((faq) => (
            <div 
              key={faq.question} 
              className="bg-white p-8 rounded-lg hover:bg-[#F0F1F2] transition-colors"
            >
              <h3 className="text-xl font-bold text-[#202124] mb-4 uppercase">{faq.question}</h3>
              <p className="text-[#333536] leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function CTASection() {
  return (
    <section className="bg-[#407E57]">
      <Container className="py-24">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white uppercase">
            Interested in Future Opportunities?
          </h2>
          <p className="text-lg text-white/90 leading-relaxed uppercase font-medium">
            WHILE WE&apos;RE NOT CURRENTLY HIRING, YOU CAN SUBMIT YOUR APPLICATION FOR FUTURE CONSIDERATION.
          </p>
          <div className="pt-4">
            <Button 
              size="lg"
              className="bg-white hover:bg-white/90 text-[#202124] text-xl font-bold px-12 py-6 uppercase"
              onClick={() => window.open('https://apply.haroldschickensportsbar.com', '_blank')}
            >
              Visit Application Portal
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
      <TestimonialsSection />
      <BenefitsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}