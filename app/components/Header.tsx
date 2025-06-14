"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { CustomButton } from "@/app/components/ui/custom-button";
import { Badge } from "@/app/components/ui/badge";
import { Container } from "@/app/components/ui/container";

// Remove ButtonVariant import since we'll use string literal type
type ButtonVariant = "default" | "outline" | "ghost";

// Constants
const SCROLL_THRESHOLD = 20;
const MOBILE_MENU_FOCUS_DELAY = 100;

interface MenuItem {
  label: string;
  href: string;
  shortcut: string;
  isExternal?: boolean;
  badge?: {
    text: string;
    className: string;
  };
}

const menuItems: MenuItem[] = [
  { label: "HOME", href: "/", shortcut: 'h' },
  { label: "MENU", href: "/menu", shortcut: 'm' },
  { 
    label: "CAREERS", 
    href: "/careers", 
    shortcut: 'c'
  },
  { label: "OUR FOUNDER", href: "/our-founder", shortcut: 'o' },
  { label: "SPORTS BAR", href: "/sports-bar", shortcut: 's' },
];

interface HeaderProps {
  variant?: 'white' | 'default';
}

export function Header({ variant = 'default' }: HeaderProps) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  const firstNavItemRef = useRef<HTMLAnchorElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  const isWhiteVariant = variant === 'white';

  // Memoized scroll handler
  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > SCROLL_THRESHOLD);
    setIsAtTop(scrollPosition <= SCROLL_THRESHOLD);
  }, []);

  // Handle scroll effect with debouncing
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const debouncedScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 10);
    };

    window.addEventListener('scroll', debouncedScroll, { passive: true });
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', debouncedScroll);
    };
  }, [handleScroll]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore shortcuts in input fields
      if (e.target instanceof HTMLElement && 
          (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;

      // ESC key closes mobile menu
      if (e.key === 'Escape' && isMobileNavOpen) {
        setIsMobileNavOpen(false);
        mobileMenuButtonRef.current?.focus();
        return;
      }

      // Keyboard shortcuts for navigation
      if (e.altKey) {
        const menuItem = menuItems.find(item => item.shortcut === e.key.toLowerCase());
        if (menuItem) {
          e.preventDefault();
          if (menuItem.isExternal) {
            window.open(menuItem.href, '_blank', 'noopener,noreferrer');
          } else {
            window.location.href = menuItem.href;
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileNavOpen]);

  // Handle click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsMobileNavOpen(false);
      }
    };

    if (isMobileNavOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileNavOpen]);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(prev => !prev);
    if (!isMobileNavOpen) {
      setTimeout(() => firstNavItemRef.current?.focus(), MOBILE_MENU_FOCUS_DELAY);
    }
  };

  // Get dynamic header classes
  const getHeaderClasses = () => {
    const baseClasses = "fixed top-0 left-0 right-0 z-50 transition-all duration-300";
    if (isScrolled || isMobileNavOpen) {
      return `${baseClasses} bg-white border-b border-gray-200`;
    }
    return `${baseClasses} ${isAtTop ? 'bg-transparent' : 'bg-white border-b border-gray-200'}`;
  };

  // Get dynamic link classes
  const getLinkClasses = (isNavItem = false, href: string) => {
    const baseClasses = "transition-colors font-bold text-base tracking-wider focus:outline-none focus:ring-2 focus:ring-red-700 rounded";
    const textClasses = 
      isWhiteVariant && isAtTop ? 'text-white hover:text-gray-200' : 'text-[#202124] hover:text-red-700';
    const activeClasses = pathname === href ? 'relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-700' : '';
    
    if (isNavItem) {
      return `${baseClasses} px-2 py-1 flex items-center gap-4 ${textClasses} ${activeClasses}`;
    }
    return baseClasses;
  };

  const getButtonVariant = (): ButtonVariant => {
    if (isWhiteVariant && isAtTop) {
      return "ghost";
    }
    return "outline";
  };

  const handleGetDirections = () => {
    window.open("https://www.google.com/maps/place/Harold's+Chicken+Sports+Bar/@41.5062359,-90.5166081,17z/data=!4m14!1m7!3m6!1s0x87e231469fa44355:0x54cb1c7446567d9e!2sHarold's+Chicken+Sports+Bar!8m2!3d41.5062359!4d-90.5166081!16s%2Fg%2F11wtvlptzn!3m5!1s0x87e231469fa44355:0x54cb1c7446567d9e!8m2!3d41.5062359!4d-90.5166081!16s%2Fg%2F11wtvlptzn?hl=en&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D", '_blank');
  };

  return (
    <header 
      ref={headerRef}
      className={getHeaderClasses()}
      role="banner"
      aria-label="Main navigation"
    >
      <Container className="h-[100px] flex items-center py-6">
        {/* Logo */}
        <Link 
          href="/" 
          className={getLinkClasses(false, "/")}
          aria-label="Harold&apos;s Chicken - Return to homepage"
        >
          <Image
            src={isWhiteVariant && isAtTop ? "/logos/WhiteLogo.svg" : "/logos/HaroldsMainLogo.svg"}
            alt="Harold&apos;s Chicken Logo"
            width={176}
            height={48}
            className="h-16 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav 
          className="hidden md:flex items-center gap-8 ml-12"
          role="navigation"
          aria-label="Main menu"
        >
          {menuItems.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              ref={index === 0 ? firstNavItemRef : null}
              className={getLinkClasses(true, item.href)}
              aria-label={`${item.label} - Press Alt + ${item.shortcut} to access`}
              {...(item.isExternal && {
                target: "_blank",
                rel: "noopener noreferrer"
              })}
            >
              <span className="relative inline-block">
                {item.label}
                {pathname === item.href && (
                  <span className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-red-700" />
                )}
              </span>
              {item.badge && (
                <Badge className={`transition-colors duration-200 text-xs font-medium font-display uppercase ${item.badge.className}`}>
                  {item.badge.text}
                </Badge>
              )}
              {item.isExternal && (
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
        </nav>

        {/* Action Buttons - Desktop */}
        <div 
          className="hidden sm:flex items-center gap-4 ml-auto"
          role="group"
          aria-label="Quick actions"
        >
          <CustomButton 
            variant={getButtonVariant()}
            className={`font-bold tracking-wider text-sm focus:ring-2 focus:ring-red-700 focus:outline-none ${
              isWhiteVariant && isAtTop ? 'text-white hover:text-gray-200' : 'hover:bg-red-700/10'
            }`}
            aria-label="Get directions to Harold&apos;s Chicken"
            onClick={handleGetDirections}
          >
            GET DIRECTIONS
          </CustomButton>
          <CustomButton 
            variant="default"
            className="font-bold tracking-wider text-sm bg-red-700 hover:bg-red-800 text-white focus:ring-2 focus:ring-red-700 focus:outline-none"
            aria-label="Order food now"
            asChild
          >
            <Link href="/coming-soon">
              ORDER NOW
            </Link>
          </CustomButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          ref={mobileMenuButtonRef}
          className={`md:hidden ml-auto p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-700 ${
            isWhiteVariant && isAtTop ? 'text-white hover:bg-white/10' : 'text-[#202124] hover:bg-gray-100'
          }`}
          onClick={toggleMobileNav}
          aria-label={isMobileNavOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileNavOpen}
          aria-controls="mobile-menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMobileNavOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </Container>

      {/* Mobile Navigation */}
      <div 
        id="mobile-menu"
        className={`md:hidden bg-white border-t border-gray-200 transition-all duration-300 ${
          isMobileNavOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
        role="navigation"
        aria-label="Mobile menu"
      >
        <Container className="py-8">
          <nav className="flex flex-col items-start space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileNavOpen(false)}
                className="block w-full text-[#202124] hover:text-red-700 transition-colors font-bold text-base py-2 hover:bg-gray-50 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-700 flex items-center gap-4"
                aria-label={`${item.label} - Press Alt + ${item.shortcut} to access`}
                {...(item.isExternal && {
                  target: "_blank",
                  rel: "noopener noreferrer"
                })}
              >
                <span className="relative inline-block">
                  {item.label}
                  {pathname === item.href && (
                    <span className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-red-700" />
                  )}
                </span>
                {item.badge && (
                  <Badge className={`transition-colors duration-200 text-xs font-medium font-display uppercase ${item.badge.className}`}>
                    {item.badge.text}
                  </Badge>
                )}
                {item.isExternal && (
                  <svg 
                    className="w-4 h-4 ml-auto"
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

            <div 
              className="flex flex-col items-start gap-4 mt-4 w-full"
              role="group"
              aria-label="Quick actions"
            >
              <CustomButton
                variant="outline"
                className="font-bold tracking-wider text-sm w-full justify-center hover:bg-red-700/10 focus:ring-2 focus:ring-red-700 focus:outline-none"
                aria-label="Get directions to Harold&apos;s Chicken"
                onClick={handleGetDirections}
              >
                GET DIRECTIONS
              </CustomButton>
              <CustomButton
                className="font-bold tracking-wider text-sm w-full justify-center bg-red-700 hover:bg-red-800 focus:ring-2 focus:ring-red-700 focus:outline-none"
                aria-label="Order food now"
                asChild
              >
                <Link href="/coming-soon">
                  ORDER NOW
                </Link>
              </CustomButton>
            </div>
          </nav>
        </Container>
      </div>

      {/* Screen reader and keyboard shortcuts information */}
      <div className="sr-only" role="note" aria-label="Keyboard Shortcuts">
        <p>Press Alt + H for Home</p>
        <p>Press Alt + M for Menu</p>
        <p>Press Alt + C for Careers</p>
        <p>Press Alt + O for Our Founder</p>
        <p>Press Escape to close the mobile menu</p>
        <p>Use Tab to navigate between interactive elements</p>
      </div>
    </header>
  );
}