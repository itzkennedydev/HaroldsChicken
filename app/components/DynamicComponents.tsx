"use client";

import dynamic from "next/dynamic";

// Dynamic imports for heavy components - loaded only when needed in the browser
// Map component loads mapbox-gl which is ~500KB
export const DynamicMap = dynamic(
  () => import("./Map").then(mod => ({ default: mod.Map })),
  {
    loading: () => (
      <div className="w-full h-[500px] bg-gray-100 animate-pulse flex items-center justify-center">
        <span className="text-gray-400">Loading map...</span>
      </div>
    ),
    ssr: false, // Mapbox requires window object
  }
);

// ImageCarousel with many images - defer loading
export const DynamicImageCarousel = dynamic(
  () => import("./ImageCarousel").then(mod => ({ default: mod.ImageCarousel })),
  {
    loading: () => (
      <div className="w-full h-[320px] bg-gray-100 animate-pulse" />
    ),
  }
);

// ScrollingText - lightweight but can be deferred
export const DynamicScrollingText = dynamic(
  () => import("./ScrollingText").then(mod => ({ default: mod.ScrollingText })),
  {
    loading: () => <div className="w-full h-16 bg-red-700" />,
  }
);

// MeetOwner - below fold, can be deferred
export const DynamicMeetOwner = dynamic(
  () => import("./MeetOwner").then(mod => ({ default: mod.MeetOwner })),
  {
    loading: () => <div className="w-full h-[400px] bg-white animate-pulse" />,
  }
);
