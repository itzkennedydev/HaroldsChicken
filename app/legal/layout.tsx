"use client";

import { ReactNode } from "react";
import { Container } from "@/app/components/ui/container";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Header } from "@/app/components/Header";

const legalLinks = [
  {
    title: "Terms of Service",
    href: "/legal/terms",
    description: "Our terms and conditions of use",
  },
  {
    title: "Privacy Policy",
    href: "/legal/privacy",
    description: "How we handle your data",
  },
  {
    title: "Cookie Policy",
    href: "/legal/cookies",
    description: "Our use of cookies and tracking",
  }
];

const LegalNav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-2">
      {legalLinks.map((link) => {
        const isActive = pathname === link.href;
        
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`
              flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
              ${isActive 
                ? "bg-primary/10 text-primary hover:bg-primary/15" 
                : "hover:bg-muted"
              }
            `}
          >
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium leading-none">{link.title}</p>
              <p className="text-sm text-muted-foreground mt-1 line-clamp-1">
                {link.description}
              </p>
            </div>
          </Link>
        );
      })}
    </nav>
  );
};

export default function LegalLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Container>
        <div className="py-8 space-y-8 pt-32">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-foreground">
              Legal Information
            </h1>
            <p className="text-lg text-muted-foreground">
              Important information about your rights, responsibilities, and how we handle your data.
            </p>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <h2 className="font-semibold mb-4 text-foreground/80">
              Legal Documents
            </h2>
            <LegalNav />
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:grid md:grid-cols-[240px_1fr] md:gap-10">
            {/* Sidebar */}
            <aside className="relative border-r">
              <div className="sticky top-8 pr-6">
                <h2 className="font-semibold mb-4 text-foreground/80">
                  Legal Documents
                </h2>
                <LegalNav />
              </div>
            </aside>

            {/* Main Content */}
            <main className="min-w-0">
              <div className="max-w-3xl">
                {children}
              </div>
            </main>
          </div>

          {/* Mobile Content */}
          <div className="md:hidden">
            {children}
          </div>
          
          {/* Footer */}
          <footer className="border-t pt-8">
            <p className="text-sm text-muted-foreground text-center">
              For questions about our legal policies, please contact our legal team at{" "}
              <a 
                href="mailto:legal@example.com" 
                className="text-primary hover:underline"
              >
                legal@example.com
              </a>
            </p>
          </footer>
        </div>
      </Container>
    </div>
  );
}

export { LegalNav };