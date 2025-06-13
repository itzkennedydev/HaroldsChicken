// import { Featured } from "./components/Featured";
// import { Header } from "./components/Header";
// import { Hero } from "./components/Hero";
// import { Cravings } from "./components/Cravings";
// import { ValueProp } from "./components/ValueProp";
// import { Map } from "./components/Map";
// import { ImageCarousel } from "./components/ImageCarousel";
// import { ScrollingText } from "./components/ScrollingText";
// import { MeetOwner } from "./components/MeetOwner";
// import { Footer } from "./components/Footer";
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen relative flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("/images/legacy/HaroldsSB.jpeg")',
          filter: 'brightness(0.25) contrast(1.1) saturate(0.9)'
        }}
      />
      
      {/* Content */}
      <div className="relative max-w-2xl mx-8 text-center">
        {/* Logo */}
        <div className="mb-12">
          <Image
            src="/logos/WhiteLogo.svg"
            alt="Harold's Chicken"
            width={200}
            height={80}
            className="mx-auto"
            priority
          />
        </div>

        <h1 className="text-6xl font-light text-white mb-8 tracking-tight">
          A New Chapter
        </h1>
        <p className="text-xl text-gray-200 mb-4 font-light tracking-wide">
          Since 1950, we've been perfecting the art of flavor.
        </p>
        <p className="text-xl text-gray-200 mb-12 font-light tracking-wide">
          Our digital experience is no different.
        </p>
        <div className="w-16 h-[1px] bg-gray-500 mx-auto mb-8" />
        <p className="text-sm text-gray-400 tracking-wider">
          COMING SOON
        </p>
      </div>
    </main>
  );
}
