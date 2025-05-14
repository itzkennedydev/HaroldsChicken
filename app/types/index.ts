export type ButtonVariant = "default" | "outline" | "ghost";

export interface MenuItem {
  label: string;
  href: string;
  shortcut: string;
  isExternal?: boolean;
  badge?: {
    text: string;
    className: string;
  };
}

export interface CarouselImage {
  src: string;
  alt: string;
}

export interface HeaderProps {
  variant?: 'white' | 'default';
} 