"use client";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Container } from "../components/ui/container";
import mapboxgl from 'mapbox-gl';
import { useEffect, useRef } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import Image from 'next/image';
import { Button } from '../components/ui/button';

function ContactMap() {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;
    if (map.current) return;
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-90.51636, 41.50606],
      zoom: 15,
      attributionControl: true,
      logoPosition: 'bottom-right',
    });
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
    const el = document.createElement('div');
    el.setAttribute('role', 'img');
    el.setAttribute('aria-label', "Harold's Chicken location");
    el.innerHTML = '★';
    el.style.color = 'rgb(185, 28, 28)';
    el.style.fontSize = '32px';
    el.style.lineHeight = '0';
    el.style.cursor = 'pointer';
    new mapboxgl.Marker({ element: el })
      .setLngLat([-90.51636, 41.50606])
      .addTo(map.current);
    setTimeout(() => { map.current?.resize(); }, 0);
    return () => { if (map.current) { map.current.remove(); map.current = null; } };
  }, []);
  return (
    <div 
      ref={mapContainer} 
      className="h-[500px] w-full rounded-lg shadow border border-gray-200"
      style={{ position: 'relative' }}
      tabIndex={0}
      aria-label="Interactive map"
    />
  );
}

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
            Contact Us
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-10 leading-relaxed uppercase font-medium">
            Please email us directly and our team will get back to you as soon as possible.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-red-700 hover:bg-red-800 text-white text-xl font-bold px-12 py-6 rounded-md uppercase w-full sm:w-auto"
          >
            <a href="mailto:info@haroldschickensportsbar.com">
              Email Us
            </a>
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <Header variant="white" />
      <HeroSection />
      <Container as="section" className="py-16 space-y-12">
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Contact Information and Get Directions Button */}
          <div className="space-y-8 flex flex-col justify-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-display">Get in Touch</h2>
              <div className="space-y-2">
                <p className="text-lg">
                  <span className="font-semibold">Address:</span>{" "}
                  <span>425 15th St, Moline, IL 61265</span>
                </p>
                <p className="text-lg">
                  <span className="font-semibold">Email:</span>{" "}
                  <a href="mailto:info@haroldschickensportsbar.com" className="text-red-700 hover:underline">
                    info@haroldschickensportsbar.com
                  </a>
                </p>
                <p className="text-base text-[#333536] mt-2">
                  For questions or feedback, please email us directly.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-display">Business Hours</h2>
              <div className="space-y-2">
                <p className="text-lg">Monday - Thursday: 11:00 AM - 10:00 PM</p>
                <p className="text-lg">Friday - Saturday: 11:00 AM - 11:00 PM</p>
                <p className="text-lg">Sunday: 12:00 PM - 9:00 PM</p>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/place/Harold's+Chicken+Sports+Bar/@41.5062359,-90.5166081,17z/data=!4m14!1m7!3m6!1s0x87e231469fa44355:0x54cb1c7446567d9e!2sHarold's+Chicken+Sports+Bar!8m2!3d41.5062359!4d-90.5166081!16s%2Fg%2F11wtvlptzn!3m5!1s0x87e231469fa44355:0x54cb1c7446567d9e!8m2!3d41.5062359!4d-90.5166081!16s%2Fg%2F11wtvlptzn?hl=en&entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-700 text-white py-3 px-6 rounded-md hover:bg-red-800 transition-colors duration-200 font-medium text-center mt-4"
            >
              Get Directions
            </a>
          </div>
          {/* Mapbox Map on the right */}
          <div className="flex items-center justify-center w-full h-full">
            <ContactMap />
          </div>
        </div>
      </Container>
      <Footer />
    </main>
  );
}
