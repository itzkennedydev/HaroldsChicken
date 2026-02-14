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
        src="https://d3kd1cq6xnp2l4.cloudfront.net/harolds_chicken/public/images/CareersBG.png"
        alt="Harold&apos;s Chicken team members working together"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/40" />
      <Container className="relative z-10 flex items-center min-h-[600px]">
        <div className="max-w-2xl text-white mx-auto text-center py-24">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight uppercase">
            Join Our Family
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-10 leading-relaxed uppercase font-medium">
            While we&apos;re not currently hiring, discover what makes a career at Harold&apos;s Chicken special and why our team members love being part of our family.
          </p>
          <Button 
            size="lg"
            className="bg-red-700 hover:bg-red-800 text-white text-xl font-bold px-12 py-6 uppercase w-full sm:w-auto"
            onClick={() => window.open('https://apply.haroldschickensportsbar.com', '_blank')}
          >
            Join Our Talent Pool
          </Button>
        </div>
      </Container>
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-red-700" />
    </section>
  );
}

function ValuesSection() {
  const values = [
    {
      title: "FAMILY ATMOSPHERE",
      description: "We foster a close-knit team where everyone feels valued, supported, and part of something special—just like family."
    },
    {
      title: "CAREER GROWTH", 
      description: "Our team members experience real professional development with clear advancement paths from entry-level to management positions."
    },
    {
      title: "OWNERSHIP MINDSET",
      description: "We empower each team member to take pride in their work, contribute ideas, and make decisions that positively impact our business."
    },
    {
      title: "CUSTOMER CONNECTION",
      description: "Our team enjoys meaningful interactions with regular customers who become part of our extended Harold's family."
    }
  ];

  return (
    <section className="bg-white">
      <Container className="py-24">
        <h2 className="text-4xl md:text-5xl font-bold text-[#202124] mb-6 text-center uppercase">
          Life at Harold's
        </h2>
        <p className="text-xl text-center text-[#333536] mb-16 max-w-3xl mx-auto">
          While we're not actively hiring, here's what makes working at Harold's a truly rewarding experience
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {values.map((value) => (
            <div key={value.title} className="text-center space-y-4 p-8 bg-[#F9F9F9] rounded-lg transition-all duration-300 hover:shadow-md">
              <h3 className="text-2xl font-bold text-[#202124] uppercase mb-2">{value.title}</h3>
              <p className="text-[#333536] font-medium">{value.description}</p>
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
      title: "Fair Compensation",
      description: "Competitive pay that recognizes your contributions, with performance-based increases as you grow with us"
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive benefits for eligible employees that support your physical and mental wellbeing"
    },
    {
      title: "Work-Life Balance",
      description: "Flexible scheduling options that respect your personal commitments and family time"
    },
    {
      title: "Skill Development",
      description: "Hands-on training and mentorship that builds valuable restaurant and customer service skills"
    },
    {
      title: "Recognition Program",
      description: "Formal recognition system that rewards excellence, innovation, and dedication to our high standards"
    },
    {
      title: "Team Events",
      description: "Regular team celebrations, outings, and recognition events that strengthen our community"
    }
  ];

  return (
    <section className="bg-[#F9F9F9]">
      <Container className="py-24">
        <h2 className="text-4xl md:text-5xl font-bold text-[#202124] mb-6 text-center uppercase">
          What We Offer
        </h2>
        <p className="text-xl text-center text-[#333536] mb-16 max-w-3xl mx-auto">
          When opportunities become available, here's what you can look forward to as part of the Harold's team
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="p-8 rounded-lg bg-white transition-all duration-300 hover:shadow-md">
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
      question: "What kind of work culture does Harold's Chicken have?",
      answer: "Our culture is built on family values, mutual respect, and a passion for excellent food and service. We create an environment where team members feel supported and valued while developing both personally and professionally."
    },
    {
      question: "What qualities do you look for in team members?",
      answer: "We value individuals with a positive attitude, strong work ethic, excellent communication skills, and a genuine passion for hospitality. Experience is valuable, but character and willingness to learn are equally important to us."
    },
    {
      question: "How does career advancement work at Harold's?",
      answer: "We proudly promote from within whenever possible. Many of our managers started in entry-level positions and advanced through dedicated training programs, mentorship, and demonstrating leadership potential."
    },
    {
      question: "What kind of training do team members receive?",
      answer: "All team members receive comprehensive initial training plus ongoing development. This includes food safety, customer service, technical skills specific to their role, and leadership development for those interested in advancement."
    },
    {
      question: "What makes working at Harold's different from other restaurants?",
      answer: "Our deep-rooted legacy, community connection, and family atmosphere set us apart. Team members become part of a tradition of excellence while gaining valuable industry skills that benefit their long-term career goals."
    },
    {
      question: "How does Harold's support work-life balance?",
      answer: "We understand the importance of life outside work. We offer flexible scheduling options, competitive time-off policies, and a supportive management team that listens to and accommodates personal needs whenever possible."
    }
  ];

  return (
    <section className="bg-white">
      <Container className="py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#202124] mb-6 uppercase">
            Common Questions
          </h2>
          <p className="text-xl text-[#333536]">
            Everything you want to know about working at Harold's Chicken
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {faqs.map((faq, index) => (
            <div key={index} className="p-8 bg-[#F9F9F9] rounded-lg flex flex-col h-full">
              <h3 className="text-xl font-bold text-[#202124] mb-4">{faq.question}</h3>
              <p className="text-[#333536] flex-grow">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-24 bg-[#F9F9F9]">
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#202124] uppercase">
            Be Ready For Future Opportunities
          </h2>
          <p className="text-lg text-[#333536] leading-relaxed uppercase font-medium">
            Though we&apos;re not actively hiring, we&apos;re always looking to connect with passionate individuals who share our values and commitment to excellence.
          </p>
          <div className="pt-8">
            <Button 
              size="lg"
              className="bg-red-700 hover:bg-red-800 text-white font-bold px-12 py-6 uppercase"
              onClick={() => window.open('https://apply.haroldschickensportsbar.com', '_blank')}
            >
              Join Our Talent Pool
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
      <BenefitsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}