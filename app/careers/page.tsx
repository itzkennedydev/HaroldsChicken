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
            className="bg-[#407E57] hover:bg-[#407E57]/90 text-white text-xl font-bold px-12 py-6 uppercase w-full sm:w-auto"
            onClick={() => window.open('https://apply.haroldschickensportsbar.com', '_blank')}
          >
            Join Our Talent Pool
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
      title: "FAMILY ATMOSPHERE",
      description: "We foster a close-knit team where everyone feels valued, supported, and part of something special—just like family."
    },
    {
      icon: "📈",
      title: "CAREER GROWTH", 
      description: "Our team members experience real professional development with clear advancement paths from entry-level to management positions."
    },
    {
      icon: "💪",
      title: "OWNERSHIP MINDSET",
      description: "We empower each team member to take pride in their work, contribute ideas, and make decisions that positively impact our business."
    },
    {
      icon: "🌟",
      title: "CUSTOMER CONNECTION",
      description: "Our team enjoys meaningful interactions with regular customers who become part of our extended Harold&apos;s family."
    }
  ];

  return (
    <section className="bg-white">
      <Container className="py-24">
        <h2 className="text-4xl md:text-5xl font-bold text-[#202124] mb-6 text-center uppercase">
          Life at Harold&apos;s
        </h2>
        <p className="text-xl text-center text-[#333536] mb-16 max-w-3xl mx-auto">
          While we&apos;re not actively hiring, here&apos;s what makes working at Harold&apos;s a truly rewarding experience
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {values.map((value) => (
            <div key={value.title} className="text-center space-y-4 p-6 hover:bg-[#F8F9FA] rounded-lg transition-all duration-300">
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

function BenefitsSection() {
  const benefits = [
    {
      icon: "💰",
      title: "Fair Compensation",
      description: "Competitive pay that recognizes your contributions, with performance-based increases as you grow with us"
    },
    {
      icon: "🏥",
      title: "Health & Wellness",
      description: "Comprehensive benefits for eligible employees that support your physical and mental wellbeing"
    },
    {
      icon: "📅",
      title: "Work-Life Balance",
      description: "Flexible scheduling options that respect your personal commitments and family time"
    },
    {
      icon: "🎓",
      title: "Skill Development",
      description: "Hands-on training and mentorship that builds valuable restaurant and customer service skills"
    },
    {
      icon: "🏆",
      title: "Recognition Program",
      description: "Formal recognition system that rewards excellence, innovation, and dedication to our high standards"
    },
    {
      icon: "👥",
      title: "Team Events",
      description: "Regular team celebrations, outings, and recognition events that strengthen our community"
    }
  ];

  return (
    <section className="bg-white">
      <Container className="py-24">
        <h2 className="text-4xl md:text-5xl font-bold text-[#202124] mb-6 text-center uppercase">
          What We Offer
        </h2>
        <p className="text-xl text-center text-[#333536] mb-16 max-w-3xl mx-auto">
          When opportunities become available, here&apos;s what you can look forward to as part of the Harold&apos;s team
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="p-8 rounded-lg bg-[#F8F9FA] hover:translate-y-[-4px] transition-all duration-300">
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
      question: "What kind of work culture does Harold&apos;s Chicken have?",
      answer: "Our culture is built on family values, mutual respect, and a passion for excellent food and service. We create an environment where team members feel supported and valued while developing both personally and professionally."
    },
    {
      question: "What qualities do you look for in team members?",
      answer: "We value individuals with a positive attitude, strong work ethic, excellent communication skills, and a genuine passion for hospitality. Experience is valuable, but character and willingness to learn are equally important to us."
    },
    {
      question: "How does career advancement work at Harold&apos;s?",
      answer: "We proudly promote from within whenever possible. Many of our managers started in entry-level positions and advanced through dedicated training programs, mentorship, and demonstrating leadership potential."
    },
    {
      question: "What kind of training do team members receive?",
      answer: "All team members receive comprehensive initial training plus ongoing development. This includes food safety, customer service, technical skills specific to their role, and leadership development for those interested in advancement."
    },
    {
      question: "What makes working at Harold&apos;s different from other restaurants?",
      answer: "Our deep-rooted legacy, community connection, and family atmosphere set us apart. Team members become part of a tradition of excellence while gaining valuable industry skills that benefit their long-term career goals."
    },
    {
      question: "How does Harold&apos;s support work-life balance?",
      answer: "We understand the importance of life outside work. We offer flexible scheduling options, competitive time-off policies, and a supportive management team that listens to and accommodates personal needs whenever possible."
    }
  ];

  return (
    <section className="bg-[#F8F9FA]">
      <Container className="py-24">
        <h2 className="text-4xl md:text-5xl font-bold text-[#202124] mb-6 text-center uppercase">
          Common Questions
        </h2>
        <p className="text-xl text-center text-[#333536] mb-16 max-w-3xl mx-auto">
          Everything you want to know about working at Harold&apos;s Chicken
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {faqs.map((faq) => (
            <div 
              key={faq.question} 
              className="bg-white p-8 rounded-lg hover:bg-[#F8F9FA] transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-[#202124] mb-4">{faq.question}</h3>
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
            Be Ready For Future Opportunities
          </h2>
          <p className="text-xl text-white leading-relaxed font-medium mb-6">
            Though we&apos;re not actively hiring, we&apos;re always looking to connect with passionate individuals who share our values and commitment to excellence.
          </p>
          <div className="pt-4">
            <Button 
              size="lg"
              className="bg-white hover:bg-white/90 text-[#202124] text-xl font-bold px-12 py-6 uppercase"
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