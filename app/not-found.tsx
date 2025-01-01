'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Container } from './components/ui/container'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

export default function NotFound() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <Header />
      <main className="w-full">
        <section 
          className="flex items-center justify-center min-h-[900px] w-full"
          aria-label="404 Error Page"
        >
          {/* Content */}
          <Container className="flex justify-center items-center py-16">
            <div className={`max-w-2xl mx-auto transition-all duration-1000 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#202124] mb-8 leading-tight uppercase text-center">
                Oh Cluck!
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-[#333536] mb-10 leading-relaxed uppercase text-center font-medium">
                Looks Like This Page Flew The Coop. Don&apos;t Worry Though – Our Chicken Isn&apos;t Going Anywhere.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#407E57] hover:bg-[#407E57]/90 text-white text-xl font-bold px-12 py-6 uppercase w-full sm:w-auto 
                    focus:ring-2 focus:ring-offset-2 focus:ring-[#407E57] focus:outline-none transition-all duration-200"
                >
                  <Link href="/">
                    Back to Home
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#407E57] text-[#407E57] hover:bg-[#407E57]/10 text-xl font-bold px-12 py-6 uppercase w-full sm:w-auto 
                    focus:ring-2 focus:ring-offset-2 focus:ring-[#407E57] focus:outline-none transition-all duration-200"
                >
                  <Link href="/menu">
                    View Menu
                  </Link>
                </Button>
              </div>

              {/* Quick Links */}
              <div className="mt-12 text-center">
                <p className="text-[#333536] font-medium uppercase mb-4">Popular Pages</p>
                <div className="flex flex-wrap justify-center gap-6">
                  <Link 
                    href="/sports-bar" 
                    className="text-[#475467] hover:text-[#407E57] font-bold uppercase text-sm transition-colors"
                  >
                    Sports Bar
                  </Link>
                  <Link 
                    href="/locations" 
                    className="text-[#475467] hover:text-[#407E57] font-bold uppercase text-sm transition-colors"
                  >
                    Locations
                  </Link>
                  <Link 
                    href="/catering" 
                    className="text-[#475467] hover:text-[#407E57] font-bold uppercase text-sm transition-colors"
                  >
                    Catering
                  </Link>
                  <Link 
                    href="/contact" 
                    className="text-[#475467] hover:text-[#407E57] font-bold uppercase text-sm transition-colors"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}