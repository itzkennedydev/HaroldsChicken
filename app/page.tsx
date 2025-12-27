import { Featured } from "./components/Featured";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Cravings } from "./components/Cravings";
import { ValueProp } from "./components/ValueProp";
import { Footer } from "./components/Footer";
import { AnnouncementBar } from "./components/AnnouncementBar";
import {
  DynamicMap,
  DynamicImageCarousel,
  DynamicScrollingText,
  DynamicMeetOwner
} from "./components/DynamicComponents";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header variant="white" />
      <Hero />
      <AnnouncementBar />
      <Featured />
      <Cravings />
      <ValueProp />
      <DynamicMap />
      <DynamicImageCarousel />
      <DynamicScrollingText />
      <DynamicMeetOwner />
      <Footer />
    </main>
  );
}
