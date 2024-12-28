"use client";

import { Button } from "./ui/button";
import mapboxgl from 'mapbox-gl';
import { useEffect, useRef } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';

export function Map() {
  const mapContainer = useRef<HTMLDivElement>(null);
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

    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    const el = document.createElement('div');
    el.setAttribute('role', 'img');
    el.setAttribute('aria-label', "Harold's Chicken location");
    el.innerHTML = '★';
    el.style.color = '#407E57';
    el.style.fontSize = '32px';
    el.style.lineHeight = '0';
    el.style.cursor = 'pointer';

    new mapboxgl.Marker({ element: el })
      .setLngLat([-90.51636, 41.50606])
      .addTo(map.current);

    setTimeout(() => {
      map.current?.resize();
    }, 0);

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  const handleGetDirections = () => {
    const address = encodeURIComponent("425 15th St, Moline, IL 61265");
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${address}`, '_blank');
  };

  return (
    <section 
      className="w-full bg-[#F9F9F9]"
      aria-label="Location Information"
    >
      <div className="flex flex-col md:flex-row relative w-full">
        <div 
          className="w-full md:w-1/2 relative"
          role="region"
          aria-label="Map showing Harold's Chicken location"
        >
          <div 
            ref={mapContainer} 
            className="h-[500px] w-full"
            style={{ position: 'relative' }}
            tabIndex={0}
            aria-label="Interactive map"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center py-8 px-8 md:px-16">
          <div className="space-y-8">
            <h2 
              className="text-5xl md:text-7xl font-bold text-[#202124] leading-tight uppercase"
              tabIndex={0}
            >
              We&apos;re Right 
              <br />
              NEXT DOOR
            </h2>
            <div className="flex">
              <Button 
                size="lg"
                className="bg-[#407E57] hover:bg-[#407E57]/90 text-white font-bold px-8 py-6 uppercase text-base w-auto focus:ring-2 focus:ring-offset-2 focus:ring-[#407E57] focus:outline-none"
                onClick={handleGetDirections}
                aria-label="Get directions to Harold's Chicken"
              >
                DIRECTIONS
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}