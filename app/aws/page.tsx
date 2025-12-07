import Image from "next/image";
import { Container } from "../components/ui/container";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function MaintenancePage() {
  return (
    <>
      <Header variant="white" />
      <main className="min-h-screen bg-white">
        <div className="flex items-center">
          <Container className="w-full py-12 sm:py-14 md:py-20">
            <div className="max-w-3xl mx-auto">
              <div className="overflow-hidden rounded-xl md:rounded-2xl bg-white shadow-lg md:shadow-xl shadow-slate-200/80 border border-slate-200">
                <div className="p-6 sm:p-7 md:p-10 space-y-6 sm:space-y-7 text-center">
                  <div className="space-y-4">
                    <div className="flex justify-center">
                      <div className="relative h-16 w-48 md:h-20 md:w-60">
                        <Image
                          src="/logos/HaroldsMainLogo.svg"
                          alt="Harold's Chicken"
                          fill
                          className="object-contain"
                          priority
                        />
                      </div>
                    </div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-slate-900">
                      We&apos;re Currently Updating Our Site
                    </h1>
                    <p className="text-base sm:text-lg text-slate-700 leading-relaxed md:leading-8">
                      We&apos;re making some improvements to provide you with a better experience. 
                      Please check back soon!
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 sm:p-6 space-y-3">
                    <p className="font-semibold text-slate-900">In the meantime</p>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      Visit us in person to enjoy our delicious chicken and sides. 
                      We look forward to serving you!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </main>
      <Footer />
    </>
  );
}
