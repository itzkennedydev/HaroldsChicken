import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/app/components/ui/badge";

interface FooterLink {
  href: string;
  label: string;
  badge?: {
    text: string;
    className: string;
  };
  external?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterSections {
  [key: string]: FooterSection;
}

export function Footer() {
  const footerSections: FooterSections = {
    explore: {
      title: "EXPLORE",
      links: [
        { href: "/menu", label: "MENU" },
        { href: "/catering", label: "CATERING" },
        { href: "/locations", label: "LOCATIONS" },
      ]
    },
    company: {
      title: "COMPANY",
      links: [
        { href: "/about", label: "ABOUT US" },
        { href: "/our-story", label: "OUR STORY" },
        { 
          href: "/careers", 
          label: "CAREERS",
          badge: {
            text: "HIRING",
            className: "bg-[#ECFDF3] hover:bg-[#D1F5E3] text-[#067647] border border-[#ABEFC6] hover:border-[#8BE3B0]"
          }
        },
        { href: "/press", label: "PRESS" },
      ]
    },
    support: {
      title: "SUPPORT",
      links: [
        { href: "/contact", label: "CONTACT US" },
        { href: "/faq", label: "FAQ" },
        { href: "/gift-cards", label: "GIFT CARDS" },
        { href: "/rewards", label: "REWARDS PROGRAM" },
      ]
    },
    connect: {
      title: "CONNECT",
      links: [
        { 
          href: "https://instagram.com/haroldschicken", 
          label: "INSTAGRAM",
          external: true
        },
        { 
          href: "https://facebook.com/haroldschicken", 
          label: "FACEBOOK",
          external: true
        },
        { 
          href: "https://twitter.com/haroldschicken", 
          label: "TWITTER",
          external: true
        },
        { 
          href: "https://tiktok.com/@haroldschicken", 
          label: "TIKTOK",
          external: true
        },
      ]
    },
  };

  return (
    <footer 
      className="w-full bg-white border-t-4 border-[#407E57]" 
      role="contentinfo"
      aria-label="Footer"
    >
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-32 py-16 w-full">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16 w-full">
          {Object.entries(footerSections).map(([key, section]) => (
            <div key={key} className="space-y-8">
              <h2 
                className="text-base font-bold text-[#202124] uppercase font-display"
                id={`footer-${key}-heading`}
              >
                {section.title}
              </h2>
              <ul 
                className="space-y-4"
                aria-labelledby={`footer-${key}-heading`}
                role="list"
              >
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-sm text-[#475467] hover:text-[#407E57] font-display uppercase font-medium transition-colors duration-200"
                      {...(link.external && {
                        target: "_blank",
                        rel: "noopener noreferrer",
                        'aria-label': `${link.label} (opens in new tab)`
                      })}
                    >
                      {link.label}
                      {link.badge && (
                        <Badge 
                          className={`transition-colors duration-200 text-xs font-medium font-display uppercase ${link.badge.className}`}
                        >
                          {link.badge.text}
                        </Badge>
                      )}
                      {link.external && (
                        <svg 
                          className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal Links */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <Link 
                href="/" 
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#407E57] rounded-lg"
                aria-label="Harold's Chicken - Home"
              >
                <Image
                  src="/logos/HaroldsMainLogo.svg"
                  alt=""
                  width={150}
                  height={40}
                  className="h-10 w-auto"
                  aria-hidden="true"
                />
              </Link>
              <div className="text-sm text-[#667085] font-display uppercase font-medium">
                <p>© {new Date().getFullYear()} HAROLD&apos;S CHICKEN. ALL RIGHTS RESERVED.</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <Link 
                href="/legal/privacy" 
                className="text-sm text-[#475467] hover:text-[#407E57] font-display uppercase font-medium transition-colors duration-200"
              >
                PRIVACY POLICY
              </Link>
              <Link 
                href="/legal/terms" 
                className="text-sm text-[#475467] hover:text-[#407E57] font-display uppercase font-medium transition-colors duration-200"
              >
                TERMS OF SERVICE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}