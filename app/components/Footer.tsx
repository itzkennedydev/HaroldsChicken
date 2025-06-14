import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const footerLinks = [
    { href: "/menu", label: "MENU" },
    { href: "/careers", label: "CAREERS" },
    { 
      href: "https://www.instagram.com/haroldschickensportsbar/", 
      label: "INSTAGRAM", 
      external: true 
    },
    { 
      href: "https://www.facebook.com/p/Harolds-Chicken-Sports-Bar-61571084314548/", 
      label: "FACEBOOK", 
      external: true 
    }
  ];

  return (
    <footer 
      className="w-full bg-white border-t-4 border-red-700" 
      role="contentinfo"
      aria-label="Footer"
    >
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-32 pt-6 pb-2 w-full">
        {/* Simplified Footer Content */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-base text-[#475467] hover:text-red-700 font-display uppercase font-medium transition-colors duration-200 flex items-center gap-2"
                {...(link.external && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                  'aria-label': `${link.label} (opens in new tab)`
                })}
              >
                {link.label}
                {link.external && (
                  <svg 
                    className="w-4 h-4"
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
            ))}
          </div>
          
          <Link 
            href="/" 
            className="mb-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-700 rounded-lg"
            aria-label="Harold&apos;s Chicken - Home"
          >
            <Image
              src="/logos/HaroldsMainLogo.svg"
              alt=""
              width={150}
              height={40}
              className="h-12 w-auto"
              aria-hidden="true"
            />
          </Link>
          
          <div className="text-sm text-[#667085] font-display uppercase font-medium text-center">
            <p>© {new Date().getFullYear()} HAROLD&apos;S CHICKEN. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}