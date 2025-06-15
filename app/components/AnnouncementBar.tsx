import { Container } from "./ui/container";

export function AnnouncementBar() {
  return (
    <div className="w-full bg-[#cd2f27] text-white py-2 sm:py-4 font-sans">
      <Container>
        <div className="flex items-center justify-center gap-1 sm:gap-4 flex-wrap">
          <span className="text-xl sm:text-2xl -mt-1 animate-slide-in-and-twinkle" style={{ animationDelay: '0.1s' }}>★</span>
          <span className="text-xl sm:text-2xl -mt-1 animate-slide-in-and-twinkle" style={{ animationDelay: '0.2s' }}>★</span>
          <span className="text-xl sm:text-2xl -mt-1 animate-slide-in-and-twinkle" style={{ animationDelay: '0.3s' }}>★</span>
          <p className="text-base sm:text-lg font-medium uppercase tracking-wide animate-[slideIn_0.5s_ease-out] text-center" style={{ animationDelay: '0.4s' }}>
            Grand Opening: June 27th - 29th
          </p>
          <span className="text-xl sm:text-2xl -mt-1 animate-slide-in-and-twinkle" style={{ animationDelay: '0.3s' }}>★</span>
          <span className="text-xl sm:text-2xl -mt-1 animate-slide-in-and-twinkle" style={{ animationDelay: '0.2s' }}>★</span>
          <span className="text-xl sm:text-2xl -mt-1 animate-slide-in-and-twinkle" style={{ animationDelay: '0.1s' }}>★</span>
        </div>
      </Container>
    </div>
  );
} 