import Image from "next/image";
import { Container } from "../components/ui/container";

const brandNavy = "#232f3e";
const brandOrange = "#ff9900";
const brandInk = "#0f172a";

export default function AWSHoldPage() {
  return (
    <main
      className="min-h-screen bg-slate-50 text-[--aws-ink]"
      style={{ fontFamily: "'Amazon Ember','Helvetica Neue','Arial','sans-serif'" }}
    >
      <div className="bg-white border-b border-slate-200" style={{ ["--aws-navy" as string]: brandNavy }}>
        <Container className="py-4 md:py-5 flex items-center justify-center">
          <div className="relative h-9 w-[200px] md:h-10 md:w-[220px]">
            <Image
              src="/logos/Amazon_Web_Services_2025.svg.png"
              alt="Amazon Web Services"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Container>
      </div>

      <div className="flex items-center">
        <Container className="w-full py-12 sm:py-14 md:py-20 px-4 sm:px-6 md:px-0">
          <div className="max-w-3xl mx-auto">
            <div className="overflow-hidden rounded-xl md:rounded-2xl bg-white text-[--aws-ink] shadow-lg md:shadow-xl shadow-slate-200/80 border border-slate-200">
              <div
                className="px-6 md:px-8 py-3 md:py-3.5 text-[11px] md:text-xs lg:text-sm font-semibold tracking-[0.18em] uppercase"
                style={{ background: brandOrange, color: brandNavy }}
              >
                Service notice
              </div>

              <div className="p-6 sm:p-7 md:p-10 space-y-6 sm:space-y-7">
                <div className="space-y-3">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-[--aws-ink]">
                    This application is temporarily unavailable
                  </h1>
                  <p className="text-base sm:text-lg text-slate-700 leading-relaxed md:leading-8">
                    Access to this application has been disabled due to an account issue.
                    Service will be restored automatically once the issue has been resolved.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 sm:p-6 space-y-2.5">
                  <p className="font-semibold text-[--aws-ink] tracking-[0.02em]">Next steps</p>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    If you are the site owner, sign in to your account dashboard or contact support to restore service.
                  </p>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    Customer content associated with this site remains securely retained.
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-6 text-xs sm:text-sm text-slate-500 text-center px-4">
              AWS and the AWS logo are trademarks of Amazon.com, Inc. or its affiliates.
            </p>
          </div>
        </Container>
      </div>
    </main>
  );
}
