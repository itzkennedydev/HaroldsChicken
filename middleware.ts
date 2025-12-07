import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const MAINTENANCE_MODE = false;

export function middleware(req: NextRequest) {
  if (!MAINTENANCE_MODE) return NextResponse.next();

  const { pathname } = req.nextUrl;

  // Allow the maintenance page and assets to load.
  const passthrough =
    pathname.startsWith("/aws") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/robots") ||
    pathname.startsWith("/sitemap") ||
    pathname.startsWith("/logos") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/fonts");

  if (passthrough) return NextResponse.next();

  const url = req.nextUrl.clone();
  url.pathname = "/aws";
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/:path*"],
};
