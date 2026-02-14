"use client"

import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Container } from "../components/ui/container";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import { useState, useRef, useEffect } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Search, X, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import Fuse from 'fuse.js';

function MenuBanner() {
  return (
    <section className="relative min-h-[600px] w-full">
      <Image
        src="https://d3kd1cq6xnp2l4.cloudfront.net/harolds_chicken/public/images/CareersBG.png"
        alt="Harold's Chicken team members working together"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex items-center min-h-[600px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-white mx-auto text-center py-24">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight uppercase">
            Our Menu
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-10 leading-relaxed uppercase font-medium">
            Explore our full selection of Harold's Chicken & Sport Bar favorites, from classic wings to signature sides and more.
          </p>
          <Button
            size="lg"
            className="bg-red-700 hover:bg-red-800 text-white text-xl font-bold px-8 sm:px-12 py-6 uppercase w-full sm:w-auto"
            onClick={() => window.open('https://www.doordash.com/store/harold\'s-chicken-sports-bar-moline-35999947/80495166/', '_blank')}
          >
            Order Now
          </Button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-red-700" />
    </section>
  );
}

function MenuIncluded() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <Card>
      <div className="bg-white border-2 border-red-700 py-8 px-8 rounded-lg relative">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close notice"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-red-700">ALL DINNERS & COMBOS INCLUDE</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 text-lg md:text-xl font-medium">
            <span className="text-[#202124]">Fries</span>
            <span className="text-red-700">&bull;</span>
            <span className="text-[#202124]">Bread</span>
            <span className="text-red-700">&bull;</span>
            <span className="text-[#202124]">Cole Slaw*</span>
          </div>
        </div>
      </div>
    </Card>
  );
}

function MenuNotices() {
  return (
    <Card className="mt-16 mb-16 border border-gray-200">
      <CardHeader className="bg-[#F8F9FA] rounded-t-xl p-8">
        <CardTitle className="text-2xl text-[#202124] tracking-wider text-center font-bold">Important Notices</CardTitle>
      </CardHeader>
      <CardContent className="p-8">
        {/* Two-column grid for all notices */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Food Quality & Safety */}
          <div className="space-y-8">
            <div className="flex items-start gap-8">
              <div className="mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-red-700"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="M12 8v4" />
                  <path d="M12 16h.01" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#202124] mb-2">Food Safety Notice</h4>
                <p className="text-[#333536] leading-relaxed">
                  Consuming raw or undercooked meats, poultry, seafood, shellfish or eggs may increase your risk of food borne illnesses, especially if you have certain medical conditions.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-8">
              <div className="mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-red-700"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="M12 8v4" />
                  <path d="M12 16h.01" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#202124] mb-2">Freshness Commitment</h4>
                <p className="text-[#333536] leading-relaxed">
                  Because freshness is of the utmost importance to us here at Harold's Chicken & Sport Bar, all orders are prepared 'fresh to order'. As a result, this will involve longer than normal wait times, we promise you that our deliciously flavored Chicago style chicken and fish is well worth the wait!
                </p>
              </div>
            </div>

            <div className="flex items-start gap-8">
              <div className="mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-red-700"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="M12 8v4" />
                  <path d="M12 16h.01" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#202124] mb-2">Pricing Notice</h4>
                <p className="text-[#333536] leading-relaxed">
                  Prices subject to change without notice.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Policies & Charges */}
          <div className="space-y-8">
            <div className="flex items-start gap-8">
              <div className="mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-red-700"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="M12 8v4" />
                  <path d="M12 16h.01" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#202124] mb-2">Service Charge</h4>
                <p className="text-[#333536] leading-relaxed">
                  18 percent gratuity will be added to large parties of six or more.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-8">
              <div className="mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-red-700"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="M12 8v4" />
                  <path d="M12 16h.01" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#202124] mb-2">Substitution Policy</h4>
                <p className="text-[#333536] leading-relaxed">
                  No substitutions are allowed.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-8">
              <div className="mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-red-700"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="M12 8v4" />
                  <path d="M12 16h.01" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#202124] mb-2">Refund Policy</h4>
                <p className="text-[#333536] leading-relaxed">
                  Only remakes or food exchanges are allowed. We do not offer exchange of cash refunds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function formatPrice(price: number) {
  return Number.isInteger(price) ? `$${price}` : `$${price.toFixed(2)}`;
}

function MenuItem({ name, price, note, badge }: { name: string; price: number; note?: string; badge?: { text: string; className: string } }) {
  return (
    <li className="group relative hover:bg-[#F8F9FA]/50 transition-all duration-300 rounded-lg p-4 border-b border-gray-100 last:border-b-0">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-[#202124] group-hover:text-red-700 transition-colors duration-300 flex items-center gap-4">
            {name}
            {badge && (
              <span className="ml-4 px-4 py-2 rounded-full text-xs font-bold uppercase bg-red-700 text-white">{badge.text}</span>
            )}
          </span>
          <span className="text-red-700 font-bold text-xl">
            {formatPrice(price)}
          </span>
        </div>
        {note && (
          <span className="text-[#333536] italic">{note}</span>
        )}
      </div>
    </li>
  );
}

function SearchBar({
  searchQuery,
  setSearchQuery
}: {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}) {
  const [isSearching, setIsSearching] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const popularSearches = [
    "Chicken Wings",
    "Catfish",
    "Tenders",
    "Pizza Puff",
    "Waffles",
    "Combos",
    "Lemonade",
    "Appetizers"
  ];

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    setIsSearching(true);

    setTimeout(() => {
      if (value.trim() === "") {
        setSuggestions(popularSearches);
      } else {
        const filtered = popularSearches.filter(item =>
          item.toLowerCase().includes(value.toLowerCase())
        );
        setSuggestions(filtered);
      }
      setIsSearching(false);
    }, 300);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={searchRef}>
      <div className="relative">
        <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-[#333536]" size={18} />
        <Input
          type="text"
          placeholder="Search for chicken, fish, sides, or beverages..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          className={cn(
            "pl-10 sm:pl-12 pr-10 sm:pr-12 py-4 sm:py-6 text-base sm:text-lg rounded-xl border border-gray-200 transition-all duration-300",
            "focus:border-red-700 focus:ring-2 focus:ring-red-100",
            "hover:border-gray-300",
            "placeholder:text-[#333536]"
          )}
        />
        {isSearching && (
          <Loader2 className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-[#333536] animate-spin" size={18} />
        )}
        {searchQuery && !isSearching && (
          <button
            onClick={() => {
              setSearchQuery("");
              setSuggestions(popularSearches);
            }}
            className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-[#333536] hover:text-[#202124]"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {showSuggestions && (searchQuery || suggestions.length > 0) && (
        <div className="absolute z-50 w-full mt-2 bg-white rounded-lg border-2 border-gray-200 max-h-60 overflow-y-auto">
          {suggestions.length > 0 ? (
            <div className="py-2">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className={cn(
                    "w-full px-4 py-3 text-left hover:bg-[#F8F9FA] transition-colors",
                    "flex items-center gap-3",
                    "focus:outline-none focus:bg-[#F8F9FA]"
                  )}
                >
                  <Search size={16} className="text-[#333536]" />
                  <span className="text-[#202124]">{suggestion}</span>
                </button>
              ))}
            </div>
          ) : (
            <div className="px-4 py-3 text-[#333536] text-center">
              No results found
            </div>
          )}
        </div>
      )}
    </div>
  );
}

interface MenuItemType {
  name: string;
  price: number;
  note?: string;
  category?: string;
  subCategory?: string;
  badge?: { text: string; className: string };
}

// ============================================================
// MENU DATA — Updated to match new physical menu
// ============================================================

// APPETIZERS
const appetizers: MenuItemType[] = [
  { name: "Honey Biscuits (5ct)", price: 10 },
  { name: "Honey Biscuits (10ct)", price: 15 },
  { name: "Fried Pickle Boat", price: 11 },
  { name: "Spicy Cheese Curds", price: 12 },
  { name: "Fried Okra Basket", price: 9 },
];

// CATFISH DINNERS — Served with fries, bread, and coleslaw
const catfishDinners: MenuItemType[] = [
  { name: "Small Catfish (One Fillet)", price: 13 },
  { name: "Large Catfish (Two Fillets)", price: 16 },
  { name: "Small Catfish Nugget", price: 15 },
  { name: "Large Catfish Nugget", price: 18 },
];

// CATFISH BUCKETS
const catfishBuckets: MenuItemType[] = [
  { name: "12 PC Bucket", price: 45 },
  { name: "24 PC Bucket", price: 74 },
];

// CHICKEN PIECES — Served with fries, bread, and coleslaw
const chickenPieces: MenuItemType[] = [
  { name: "1/4 White", price: 11 },
  { name: "1/4 Dark", price: 9 },
  { name: "1/2 White", price: 21 },
  { name: "1/2 Dark", price: 15 },
  { name: "1/2 Mixed", price: 18 },
];

// COMBOS — Served with fries, bread, and coleslaw
const combos: MenuItemType[] = [
  { name: "3 Wings & 2 Catfish", price: 23 },
  { name: "3 Wings & Gizzards", price: 17 },
  { name: "3 Wings & 5 Shrimp", price: 20 },
];

// PIZZA
const pizza: MenuItemType[] = [
  { name: "1 Pizza Puff and Fries", price: 10 },
  { name: "1 Pizza Puff", price: 7 },
];

// WING DINNERS — Served with fries, bread, and coleslaw
const wingDinners: MenuItemType[] = [
  { name: "4 Wings", price: 12 },
  { name: "6 Wings", price: 15 },
  { name: "8 Wings", price: 18 },
  { name: "10 Wings", price: 22 },
];

// CHICKEN WING BUCKETS — Free Fries!
const chickenWingBuckets: MenuItemType[] = [
  { name: "12 PCS Wings", price: 33, note: "Free Fries!" },
  { name: "18 PCS Wings", price: 43, note: "Free Fries!" },
  { name: "24 PCS Wings", price: 53, note: "Free Fries!" },
];

// CHICKEN TENDERS — Served with fries, bread, and coleslaw
const chickenTenders: MenuItemType[] = [
  { name: "4 PCS Tenders", price: 14.50 },
  { name: "6 PCS Tenders", price: 16.50 },
  { name: "8 PCS Tenders", price: 19.50 },
];

// CHICKEN & WAFFLES — Includes 1 Free OJ
const chickenWaffles: MenuItemType[] = [
  { name: "Chicken & Waffles (5 Wings or Tenders)", price: 22.50, note: "Includes 1 Free OJ" },
  { name: "1/2 Order Chicken & Waffles (3 Wings or Tenders)", price: 15, note: "Includes 1 Free OJ" },
];

// CHICKEN SANDWICH
const chickenSandwich: MenuItemType[] = [
  { name: "Chicken Sandwich", price: 19, note: "Fried chicken breast dipped in Harold's mild or hot sauce, choice of pepperjack cheese, pickles, on a sweet brioche bun. Served with fries, two honey biscuits and a pop." },
];

// HAROLD'S SPECIALTY SAUCES
const signatureSauces: MenuItemType[] = [
  { name: "Harold's Signature Mild Sauce Bottle", price: 19 },
  { name: "Harold's Signature Hot Sauce Bottle", price: 15 },
];

// HAROLD'S SPECIALTY COCKTAILS
const specialtyCocktails: MenuItemType[] = [
  { name: "Mr. J", price: 15 },
  { name: "Mayweather", price: 13.50 },
  { name: "LaMello's Lemonade", price: 11 },
  { name: "K. Sago", price: 10 },
  { name: "Forbidden Green Apple", price: 12 },
];

// HAROLD'S FLAVORED LEMONADES — Non-Alcoholic
const flavoredLemonades: MenuItemType[] = [
  { name: "Honey Mango Lemonade", price: 4 },
  { name: "Dragonfruit Lemonade", price: 4 },
  { name: "Peach Lemonade", price: 4 },
  { name: "Blueberry Lemonade", price: 4 },
  { name: "Strawberry Lemonade", price: 4 },
];

// SIDES & EXTRAS
const sidesExtras: MenuItemType[] = [
  { name: "Mild Sauce", price: 7 },
  { name: "Hot Sauce", price: 0.50 },
  { name: "Hot Peppers (2)", price: 1 },
  { name: "Coleslaw", price: 7 },
  { name: "Basket of Fries (Small)", price: 5 },
  { name: "Basket of Fries (Large)", price: 7 },
  { name: "Extra Lemon Pepper", price: 1 },
  { name: "Extra Breast", price: 6.50 },
  { name: "Extra Wing", price: 2.50 },
  { name: "Extra Tender", price: 3.50 },
  { name: "Extra Catfish", price: 7 },
];

// SAUCE OPTIONS — informational list, no prices
const sauceOptions = [
  "Mild", "Hot", "BBQ", "Ranch", "Buffalo Ranch", "Ketchup",
  "Signature Sauce", "Boss Sauce", "Sweet Revenge", "Honey Jerk BBQ",
  "Danger", "Chipotle"
];

export default function MenuPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 400]);
  const [activeTab, setActiveTab] = useState("all");

  const categories = [
    { id: "APPETIZERS", label: "Appetizers" },
    { id: "CHICKEN", label: "Chicken" },
    { id: "CATFISH", label: "Catfish" },
    { id: "COMBOS & PIZZA", label: "Combos & Pizza" },
    { id: "DRINKS", label: "Drinks" },
    { id: "SIDES & EXTRAS", label: "Sides & Extras" },
  ];

  const toggleCategory = (category: string) => {
    const newCategories = selectedCategories.includes(category)
      ? selectedCategories.filter(c => c !== category)
      : [...selectedCategories, category];

    setSelectedCategories(newCategories);

    if (newCategories.length === 0) {
      setActiveTab("all");
    } else if (newCategories.length === 1) {
      setActiveTab(newCategories[0]);
    } else {
      setActiveTab("all");
    }
  };

  const handleTabChange = (tabValue: string) => {
    setActiveTab(tabValue);
    if (tabValue === "all") {
      setSelectedCategories([]);
    } else {
      setSelectedCategories([tabValue]);
    }
    setSearchQuery("");
  };

  // Build flat array of all menu items with category and subCategory for Fuse.js search
  const allMenuItems: MenuItemType[] = [
    // Appetizers
    ...appetizers.map(item => ({ ...item, category: 'APPETIZERS', subCategory: 'Appetizers' })),
    // Chicken
    ...wingDinners.map(item => ({ ...item, category: 'CHICKEN', subCategory: 'Wing Dinners' })),
    ...chickenTenders.map(item => ({ ...item, category: 'CHICKEN', subCategory: 'Chicken Tenders' })),
    ...chickenPieces.map(item => ({ ...item, category: 'CHICKEN', subCategory: 'Chicken Pieces' })),
    ...chickenWingBuckets.map(item => ({ ...item, category: 'CHICKEN', subCategory: 'Chicken Wing Buckets' })),
    ...chickenWaffles.map(item => ({ ...item, category: 'CHICKEN', subCategory: 'Chicken & Waffles' })),
    ...chickenSandwich.map(item => ({ ...item, category: 'CHICKEN', subCategory: 'Chicken Sandwich' })),
    // Catfish
    ...catfishDinners.map(item => ({ ...item, category: 'CATFISH', subCategory: 'Catfish Dinners' })),
    ...catfishBuckets.map(item => ({ ...item, category: 'CATFISH', subCategory: 'Catfish Buckets' })),
    // Combos & Pizza
    ...combos.map(item => ({ ...item, category: 'COMBOS & PIZZA', subCategory: 'Combos' })),
    ...pizza.map(item => ({ ...item, category: 'COMBOS & PIZZA', subCategory: 'Pizza' })),
    // Drinks
    ...specialtyCocktails.map(item => ({ ...item, category: 'DRINKS', subCategory: "Harold's Specialty Cocktails" })),
    ...flavoredLemonades.map(item => ({ ...item, category: 'DRINKS', subCategory: "Harold's Flavored Lemonades" })),
    // Sides & Extras
    ...signatureSauces.map(item => ({ ...item, category: 'SIDES & EXTRAS', subCategory: "Harold's Signature Sauces" })),
    ...sidesExtras.map(item => ({ ...item, category: 'SIDES & EXTRAS', subCategory: 'Sides & Extras' })),
  ];

  // Set up Fuse.js
  const fuse = new Fuse(allMenuItems, {
    keys: ['name', 'note'],
    threshold: 0.3,
  });

  // Get filtered results
  const fuseResults = searchQuery
    ? fuse.search(searchQuery).map(result => result.item)
    : allMenuItems;

  // Apply price and category filters
  const filteredResults = fuseResults.filter(item => {
    const matchesCategory = !selectedCategories.length || selectedCategories.includes(item.category!);
    const matchesPrice = item.price >= priceRange[0] && item.price <= priceRange[1];
    return matchesCategory && matchesPrice;
  });

  // Group results by category > subCategory
  const groupedResults: Record<string, Record<string, MenuItemType[]>> = {};
  filteredResults.forEach((item: MenuItemType) => {
    if (!groupedResults[item.category!]) groupedResults[item.category!] = {};
    if (!groupedResults[item.category!][item.subCategory!]) groupedResults[item.category!][item.subCategory!] = [];
    groupedResults[item.category!][item.subCategory!].push(item);
  });

  // Helper to check if a category has results
  const hasCategory = (cat: string) => !!groupedResults[cat];

  // Helper to get items for a sub-category
  const getSubItems = (cat: string, sub: string): MenuItemType[] =>
    groupedResults[cat]?.[sub] ?? [];

  return (
    <div className="bg-white min-h-screen pb-8 sm:pb-16">
      <Header variant="white" />
      <MenuBanner />
      <Container as="main" className="pt-8 sm:pt-12 md:pt-16">
        {/* Menu Included Notice */}
        <div className="mb-8">
          <MenuIncluded />
        </div>

        {/* Search */}
        <div className="mb-8 space-y-4">
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>

        {Object.entries(groupedResults).length === 0 && (
          <div className="w-full text-center text-gray-500 py-8 text-lg">No results found</div>
        )}

        {/* MENU TABS */}
        <div className="mb-8">
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 h-auto p-2 bg-gray-100 rounded-xl">
              <TabsTrigger
                value="all"
                className="text-sm sm:text-base font-medium px-2 sm:px-4 py-2 sm:py-3 data-[state=active]:bg-red-700 data-[state=active]:text-white rounded-lg transition-all"
              >
                All Items
              </TabsTrigger>
              <TabsTrigger
                value="APPETIZERS"
                className="text-sm sm:text-base font-medium px-2 sm:px-4 py-2 sm:py-3 data-[state=active]:bg-red-700 data-[state=active]:text-white rounded-lg transition-all"
              >
                Appetizers
              </TabsTrigger>
              <TabsTrigger
                value="CHICKEN"
                className="text-sm sm:text-base font-medium px-2 sm:px-4 py-2 sm:py-3 data-[state=active]:bg-red-700 data-[state=active]:text-white rounded-lg transition-all"
              >
                Chicken
              </TabsTrigger>
              <TabsTrigger
                value="CATFISH"
                className="text-sm sm:text-base font-medium px-2 sm:px-4 py-2 sm:py-3 data-[state=active]:bg-red-700 data-[state=active]:text-white rounded-lg transition-all"
              >
                Catfish
              </TabsTrigger>
              <TabsTrigger
                value="COMBOS & PIZZA"
                className="text-sm sm:text-base font-medium px-2 sm:px-4 py-2 sm:py-3 data-[state=active]:bg-red-700 data-[state=active]:text-white rounded-lg transition-all"
              >
                Combos & Pizza
              </TabsTrigger>
              <TabsTrigger
                value="DRINKS"
                className="text-sm sm:text-base font-medium px-2 sm:px-4 py-2 sm:py-3 data-[state=active]:bg-red-700 data-[state=active]:text-white rounded-lg transition-all"
              >
                Drinks
              </TabsTrigger>
              <TabsTrigger
                value="SIDES & EXTRAS"
                className="text-sm sm:text-base font-medium px-2 sm:px-4 py-2 sm:py-3 data-[state=active]:bg-red-700 data-[state=active]:text-white rounded-lg transition-all"
              >
                Sides & Extras
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Active Filters Display */}
        {(selectedCategories.length > 0 || searchQuery || priceRange[0] > 0 || priceRange[1] < 400) && (
          <div className="mb-8 flex flex-wrap gap-2">
            {selectedCategories.map((category) => (
              <Badge
                key={category}
                variant="secondary"
                className="flex items-center gap-1 bg-[#F8F9FA] text-[#202124] border border-gray-200 text-sm"
              >
                {categories.find(c => c.id === category)?.label}
                <X
                  size={12}
                  className="cursor-pointer hover:text-red-700"
                  onClick={() => toggleCategory(category)}
                />
              </Badge>
            ))}
            {searchQuery && (
              <Badge variant="secondary" className="flex items-center gap-1 bg-[#F8F9FA] text-[#202124] border border-gray-200 text-sm">
                Search: {searchQuery}
                <X
                  size={12}
                  className="cursor-pointer hover:text-red-700"
                  onClick={() => setSearchQuery("")}
                />
              </Badge>
            )}
            {(priceRange[0] > 0 || priceRange[1] < 400) && (
              <Badge variant="secondary" className="flex items-center gap-1 bg-[#F8F9FA] text-[#202124] border border-gray-200 text-sm">
                Price: ${priceRange[0]} - ${priceRange[1]}
                <X
                  size={12}
                  className="cursor-pointer hover:text-red-700"
                  onClick={() => setPriceRange([0, 400])}
                />
              </Badge>
            )}
          </div>
        )}

        {/* MAIN MENU SECTIONS */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-12 md:gap-16">

          {/* APPETIZERS SECTION */}
          {hasCategory('APPETIZERS') && (
            <Card className="bg-white border-2 border-gray-200 h-full transition-all duration-300">
              <CardHeader className="bg-[#1a1a1a] rounded-t-xl p-4 sm:p-6 md:p-8">
                <CardTitle className="text-xl sm:text-2xl text-white font-bold text-center uppercase">APPETIZERS</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 md:p-8 bg-white">
                <ul className="space-y-1">
                  {getSubItems('APPETIZERS', 'Appetizers').map((item, index) => (
                    <MenuItem key={index} {...item} />
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {/* WING DINNERS & TENDERS SECTION */}
          {hasCategory('CHICKEN') && (getSubItems('CHICKEN', 'Wing Dinners').length > 0 || getSubItems('CHICKEN', 'Chicken Tenders').length > 0) && (
            <Card className="bg-white border-2 border-gray-200 h-full transition-all duration-300">
              <CardHeader className="bg-[#1a1a1a] rounded-t-xl p-4 sm:p-6 md:p-8">
                <CardTitle className="text-xl sm:text-2xl text-white font-bold text-center uppercase">WING DINNERS & TENDERS</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 bg-white">
                {getSubItems('CHICKEN', 'Wing Dinners').length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold text-[#202124] mb-4 flex items-center">
                      <span className="w-1 h-6 bg-red-700"></span>
                      <span className="bg-gray-200 px-6 py-1 h-6 flex items-center text-gray-800">Wing Dinners</span>
                    </h3>
                    <p className="text-sm text-[#333536] italic mb-3">Served with fries, bread, and coleslaw</p>
                    <ul className="space-y-1">
                      {getSubItems('CHICKEN', 'Wing Dinners').map((item, index) => (
                        <MenuItem key={index} {...item} />
                      ))}
                    </ul>
                  </div>
                )}
                {getSubItems('CHICKEN', 'Chicken Tenders').length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold text-[#202124] mb-4 flex items-center">
                      <span className="w-1 h-6 bg-red-700"></span>
                      <span className="bg-gray-200 px-6 py-1 h-6 flex items-center text-gray-800">Chicken Tenders</span>
                    </h3>
                    <p className="text-sm text-[#333536] italic mb-3">Served with fries, bread, and coleslaw</p>
                    <ul className="space-y-1">
                      {getSubItems('CHICKEN', 'Chicken Tenders').map((item, index) => (
                        <MenuItem key={index} {...item} />
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* CHICKEN PIECES, BUCKETS & SPECIALS SECTION */}
          {hasCategory('CHICKEN') && (getSubItems('CHICKEN', 'Chicken Pieces').length > 0 || getSubItems('CHICKEN', 'Chicken Wing Buckets').length > 0 || getSubItems('CHICKEN', 'Chicken & Waffles').length > 0 || getSubItems('CHICKEN', 'Chicken Sandwich').length > 0) && (
            <Card className="bg-white border-2 border-gray-200 h-full transition-all duration-300">
              <CardHeader className="bg-[#1a1a1a] rounded-t-xl p-4 sm:p-6 md:p-8">
                <CardTitle className="text-xl sm:text-2xl text-white font-bold text-center uppercase">CHICKEN PIECES & SPECIALS</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 bg-white">
                {getSubItems('CHICKEN', 'Chicken Pieces').length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold text-[#202124] mb-4 flex items-center">
                      <span className="w-1 h-6 bg-red-700"></span>
                      <span className="bg-gray-200 px-6 py-1 h-6 flex items-center text-gray-800">Chicken Pieces</span>
                    </h3>
                    <p className="text-sm text-[#333536] italic mb-3">Served with fries, bread, and coleslaw</p>
                    <ul className="space-y-1">
                      {getSubItems('CHICKEN', 'Chicken Pieces').map((item, index) => (
                        <MenuItem key={index} {...item} />
                      ))}
                    </ul>
                  </div>
                )}
                {getSubItems('CHICKEN', 'Chicken Wing Buckets').length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold text-[#202124] mb-4 flex items-center">
                      <span className="w-1 h-6 bg-red-700"></span>
                      <span className="bg-gray-200 px-6 py-1 h-6 flex items-center text-gray-800">Chicken Wing Buckets</span>
                    </h3>
                    <ul className="space-y-1">
                      {getSubItems('CHICKEN', 'Chicken Wing Buckets').map((item, index) => (
                        <MenuItem key={index} {...item} />
                      ))}
                    </ul>
                  </div>
                )}
                {getSubItems('CHICKEN', 'Chicken & Waffles').length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold text-[#202124] mb-4 flex items-center">
                      <span className="w-1 h-6 bg-red-700"></span>
                      <span className="bg-gray-200 px-6 py-1 h-6 flex items-center text-gray-800">Chicken & Waffles</span>
                    </h3>
                    <ul className="space-y-1">
                      {getSubItems('CHICKEN', 'Chicken & Waffles').map((item, index) => (
                        <MenuItem key={index} {...item} />
                      ))}
                    </ul>
                  </div>
                )}
                {getSubItems('CHICKEN', 'Chicken Sandwich').length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold text-[#202124] mb-4 flex items-center">
                      <span className="w-1 h-6 bg-red-700"></span>
                      <span className="bg-gray-200 px-6 py-1 h-6 flex items-center text-gray-800">Chicken Sandwich</span>
                    </h3>
                    <ul className="space-y-1">
                      {getSubItems('CHICKEN', 'Chicken Sandwich').map((item, index) => (
                        <MenuItem key={index} {...item} />
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* CATFISH SECTION */}
          {hasCategory('CATFISH') && (
            <Card className="bg-white border-2 border-gray-200 h-full transition-all duration-300">
              <CardHeader className="bg-[#1a1a1a] rounded-t-xl p-4 sm:p-6 md:p-8">
                <CardTitle className="text-xl sm:text-2xl text-white font-bold text-center uppercase">CATFISH</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 bg-white">
                {getSubItems('CATFISH', 'Catfish Dinners').length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold text-[#202124] mb-4 flex items-center">
                      <span className="w-1 h-6 bg-red-700"></span>
                      <span className="bg-gray-200 px-6 py-1 h-6 flex items-center text-gray-800">Catfish Dinners</span>
                    </h3>
                    <p className="text-sm text-[#333536] italic mb-3">Served with fries, bread, and coleslaw</p>
                    <ul className="space-y-1">
                      {getSubItems('CATFISH', 'Catfish Dinners').map((item, index) => (
                        <MenuItem key={index} {...item} />
                      ))}
                    </ul>
                  </div>
                )}
                {getSubItems('CATFISH', 'Catfish Buckets').length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold text-[#202124] mb-4 flex items-center">
                      <span className="w-1 h-6 bg-red-700"></span>
                      <span className="bg-gray-200 px-6 py-1 h-6 flex items-center text-gray-800">Catfish Buckets</span>
                    </h3>
                    <ul className="space-y-1">
                      {getSubItems('CATFISH', 'Catfish Buckets').map((item, index) => (
                        <MenuItem key={index} {...item} />
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* COMBOS & PIZZA SECTION */}
          {hasCategory('COMBOS & PIZZA') && (
            <Card className="bg-white border-2 border-gray-200 h-full transition-all duration-300">
              <CardHeader className="bg-[#1a1a1a] rounded-t-xl p-4 sm:p-6 md:p-8">
                <CardTitle className="text-xl sm:text-2xl text-white font-bold text-center uppercase">COMBOS & PIZZA</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 bg-white">
                {getSubItems('COMBOS & PIZZA', 'Combos').length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold text-[#202124] mb-4 flex items-center">
                      <span className="w-1 h-6 bg-red-700"></span>
                      <span className="bg-gray-200 px-6 py-1 h-6 flex items-center text-gray-800">Combos</span>
                    </h3>
                    <p className="text-sm text-[#333536] italic mb-3">Served with fries, bread, and coleslaw</p>
                    <ul className="space-y-1">
                      {getSubItems('COMBOS & PIZZA', 'Combos').map((item, index) => (
                        <MenuItem key={index} {...item} />
                      ))}
                    </ul>
                  </div>
                )}
                {getSubItems('COMBOS & PIZZA', 'Pizza').length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold text-[#202124] mb-4 flex items-center">
                      <span className="w-1 h-6 bg-red-700"></span>
                      <span className="bg-gray-200 px-6 py-1 h-6 flex items-center text-gray-800">Pizza</span>
                    </h3>
                    <ul className="space-y-1">
                      {getSubItems('COMBOS & PIZZA', 'Pizza').map((item, index) => (
                        <MenuItem key={index} {...item} />
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* DRINKS SECTION */}
          {hasCategory('DRINKS') && (
            <Card className="bg-white border-2 border-gray-200 h-full transition-all duration-300">
              <CardHeader className="bg-[#1a1a1a] rounded-t-xl p-4 sm:p-6 md:p-8">
                <CardTitle className="text-xl sm:text-2xl text-white font-bold text-center uppercase">DRINKS</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 bg-white">
                {getSubItems('DRINKS', "Harold's Specialty Cocktails").length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold text-[#202124] mb-4 flex items-center">
                      <span className="w-1 h-6 bg-red-700"></span>
                      <span className="bg-gray-200 px-6 py-1 h-6 flex items-center text-gray-800">Harold&apos;s Specialty Cocktails</span>
                    </h3>
                    <ul className="space-y-1">
                      {getSubItems('DRINKS', "Harold's Specialty Cocktails").map((item, index) => (
                        <MenuItem key={index} {...item} />
                      ))}
                    </ul>
                  </div>
                )}
                {getSubItems('DRINKS', "Harold's Flavored Lemonades").length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold text-[#202124] mb-4 flex items-center">
                      <span className="w-1 h-6 bg-red-700"></span>
                      <span className="bg-gray-200 px-6 py-1 h-6 flex items-center text-gray-800">Harold&apos;s Flavored Lemonades</span>
                    </h3>
                    <p className="text-sm text-[#333536] italic mb-3">Non-Alcoholic</p>
                    <ul className="space-y-1">
                      {getSubItems('DRINKS', "Harold's Flavored Lemonades").map((item, index) => (
                        <MenuItem key={index} {...item} />
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* SIDES & EXTRAS SECTION */}
          {hasCategory('SIDES & EXTRAS') && (
            <Card className="bg-white border-2 border-gray-200 h-full transition-all duration-300">
              <CardHeader className="bg-[#1a1a1a] rounded-t-xl p-4 sm:p-6 md:p-8">
                <CardTitle className="text-xl sm:text-2xl text-white font-bold text-center uppercase">SIDES & EXTRAS</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 bg-white">
                {getSubItems('SIDES & EXTRAS', "Harold's Signature Sauces").length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold text-[#202124] mb-4 flex items-center">
                      <span className="w-1 h-6 bg-red-700"></span>
                      <span className="bg-gray-200 px-6 py-1 h-6 flex items-center text-gray-800">Harold&apos;s Signature Sauces</span>
                    </h3>
                    <ul className="space-y-1">
                      {getSubItems('SIDES & EXTRAS', "Harold's Signature Sauces").map((item, index) => (
                        <MenuItem key={index} {...item} />
                      ))}
                    </ul>
                  </div>
                )}
                {getSubItems('SIDES & EXTRAS', 'Sides & Extras').length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold text-[#202124] mb-4 flex items-center">
                      <span className="w-1 h-6 bg-red-700"></span>
                      <span className="bg-gray-200 px-6 py-1 h-6 flex items-center text-gray-800">Sides & Extras</span>
                    </h3>
                    <ul className="space-y-1">
                      {getSubItems('SIDES & EXTRAS', 'Sides & Extras').map((item, index) => (
                        <MenuItem key={index} {...item} />
                      ))}
                    </ul>
                  </div>
                )}
                {/* Sauce Options — informational grid */}
                <div>
                  <h3 className="text-xl font-bold text-[#202124] mb-4 flex items-center">
                    <span className="w-1 h-6 bg-red-700"></span>
                    <span className="bg-gray-200 px-6 py-1 h-6 flex items-center text-gray-800">Sauce Options</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {sauceOptions.map((sauce, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-[#F8F9FA] border border-gray-200 rounded-full text-sm font-medium text-[#202124]"
                      >
                        {sauce}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

        </div>

        {/* Restaurant Notices */}
        <MenuNotices />
      </Container>
      <Footer />
    </div>
  );
}
