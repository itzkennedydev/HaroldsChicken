import { MenuItem, CarouselImage } from '../types';

export const SCROLL_THRESHOLD = 20;
export const MOBILE_MENU_FOCUS_DELAY = 100;

export const menuItems: MenuItem[] = [
  { label: "HOME", href: "/", shortcut: 'h' },
  { label: "MENU", href: "/menu", shortcut: 'm' },
  { label: "CAREERS", href: "/careers", shortcut: 'c' },
  { label: "OUR FOUNDER", href: "/our-founder", shortcut: 'o' },
];

export const carouselImages: CarouselImage[] = [
  { src: "/images/Celebs/Chance.jpg", alt: "Chance the Rapper at Harold's Chicken" },
  { src: "/images/Celebs/Kanye.png", alt: "Kanye West at Harold's Chicken" },
  { src: "/images/Celebs/Mark.png", alt: "Mark Wahlberg at Harold's Chicken" },
  { src: "/images/Celebs/Usher.png", alt: "Usher at Harold's Chicken" },
  { src: "/images/Celebs/JB.jpg", alt: "Blanton at Harold's Chicken" },
  { src: "/images/Celebs/Blanton.jpeg", alt: "Blanton at Harold's Chicken" },
  { src: "/images/Bday.jpg", alt: "Mr.J" },
  { src: "/images/Celebs/HaroldsCar.JPG", alt: "Harold's Car" },
  { src: "/images/Celebs/Owner.jpg", alt: "Owner of Harold's Chicken" },
];

export const CAROUSEL_CONFIG = {
  MOBILE: {
    slideWidth: 280,
    gapWidth: 16,
    scrollSpeed: 0.8,
  },
  TABLET: {
    slideWidth: 400,
    gapWidth: 24,
    scrollSpeed: 1.2,
  },
  DESKTOP: {
    slideWidth: 600,
    gapWidth: 32,
    scrollSpeed: 1.8,
  },
}; 