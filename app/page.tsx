import { Featured } from "./components/Featured";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Cravings } from "./components/Cravings";
import { ValueProp } from "./components/ValueProp";
import { Map } from "./components/Map";
import { ImageCarousel } from "./components/ImageCarousel";
import { ScrollingText } from "./components/ScrollingText";
import { MeetOwner } from "./components/MeetOwner";
import { Footer } from "./components/Footer";
import { AnnouncementBar } from "./components/AnnouncementBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header variant="white" />
      <Hero />
      <AnnouncementBar />
      <Featured />
      <Cravings />
      <ValueProp />
      <Map />
      <ImageCarousel />
      <ScrollingText />
      <MeetOwner />
      <Footer />
    </main>
  );
}
