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
import Link from "next/link";
import Fuse from 'fuse.js';

function MenuBanner() {
  return (
    <section className="relative min-h-[600px] w-full">
      <Image
        src="/images/CareersBG.png"
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
            asChild
          >
            <Link href="/coming-soon">
              Order Now
            </Link>
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
            <span className="text-red-700">•</span>
            <span className="text-[#202124]">Bread</span>
            <span className="text-red-700">•</span>
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
                  18 percent gratuity will be added to all orders.
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
            ${price}
          </span>
        </div>
        {note && (
          <span className="text-[#333536] italic">{note}</span>
        )}
      </div>
    </li>
  );
}

function Cocktail({ name, price, ingredients }: { name: string; price: number; ingredients: string[] }) {
  return (
    <li className="group relative hover:bg-[#F8F9FA]/50 transition-all duration-300 rounded-lg p-4 border-b border-gray-100 last:border-b-0">
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-[#202124] group-hover:text-red-700 transition-colors duration-300">
            {name}
          </span>
          <span className="text-red-700 font-bold text-xl">
            ${price}
          </span>
        </div>
        <ul className="ml-2 text-[#333536] list-disc list-inside space-y-1">
          {ingredients.map((ing, i) => (
            <li key={i}>{ing}</li>
          ))}
        </ul>
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

  // Sample popular searches and menu items for suggestions
  const popularSearches = [
    "Chicken Wings",
    "Catfish",
    "Fried Chicken",
    "Spicy",
    "Party Pans",
    "Buffalo Shrimp",
    "Tenders",
    "Appetizers"
  ];

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    setIsSearching(true);
    
    // Simulate search delay
    setTimeout(() => {
      if (value.trim() === "") {
        setSuggestions(popularSearches);
      } else {
        // Filter suggestions based on input
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

  // Close suggestions when clicking outside
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

      {/* Search Suggestions Dropdown */}
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

// Define MenuItemType for type safety
interface MenuItemType {
  name: string;
  price: number;
  note?: string;
  category?: string;
  subCategory?: string;
  ingredients?: string[];
  badge?: { text: string; className: string };
}

// Define friedAppetizers and sides arrays at the top
const friedAppetizers: MenuItemType[] = [
  { name: "Mozz Sticks (3)", price: 6 },
  { name: "Mozz Sticks (5)", price: 8 },
  { name: "Black Bean Firecrackers", price: 12 },
  { name: "Mac + Cheese Bites", price: 11 },
  { name: "Corn Nugget", price: 8 },
  { name: "Spicy Curd", price: 13 },
  { name: "Broccoli Bite", price: 12 },
  { name: "Breaded Mushrooms", price: 8 },
  { name: "Onzared", price: 18, note: "1 lb." },
  { name: "Buffalo Shrimp 8oz", price: 0 }
];
const sides: MenuItemType[] = [
  { name: "Small Okra", price: 5 },
  { name: "Large Okra", price: 10 },
  { name: "Coleslaw 2 oz", price: 1.6 },
  { name: "Coleslaw 4 oz", price: 2.6 },
  { name: "Small Fries", price: 4 },
  { name: "Large Fries", price: 7 },
  { name: "8inch Cheese Pizza", price: 13, note: "Comes with a free fountain drink" }
];

// Helper type guard for badge
// function hasBadge(item: { badge?: { text: string; className: string } }): item is { badge: { text: string; className: string } } {
//   return !!item.badge && typeof item.badge.text === 'string' && typeof item.badge.className === 'string';
// }

export default function MenuPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 400]);
  const [activeTab, setActiveTab] = useState("all");

  const categories = [
    { id: "CHICKEN WINGS", label: "Chicken Wings" },
    { id: "CHICKEN PIECES & BUCKETS", label: "Chicken Pieces & Buckets" },
    { id: "FISH & SEAFOOD", label: "Fish & Seafood" },
    { id: "APPETIZERS & SIDES", label: "Appetizers & Sides" },
    { id: "COCKTAILS", label: "Cocktails" },
    { id: "PARTY PANS", label: "Party Pans" },
    { id: "DESSERTS", label: "Desserts" },
    { id: "SAUCES & EXTRAS", label: "Sauces & Extras" }
  ];

  const toggleCategory = (category: string) => {
    const newCategories = selectedCategories.includes(category)
      ? selectedCategories.filter(c => c !== category)
      : [...selectedCategories, category];
    
    setSelectedCategories(newCategories);
    
    // Update active tab based on selected categories
    if (newCategories.length === 0) {
      setActiveTab("all");
    } else if (newCategories.length === 1) {
      setActiveTab(newCategories[0]);
    } else {
      setActiveTab("all"); // Multiple categories selected, show all
    }
  };


  const handleTabChange = (tabValue: string) => {
    setActiveTab(tabValue);
    if (tabValue === "all") {
      setSelectedCategories([]);
    } else {
      setSelectedCategories([tabValue]);
    }
    // Clear search when switching tabs for better UX
    setSearchQuery("");
  };

  const filterMenuItems = (items: { name: string; price: number; note?: string }[]) => {
    return items.filter(item => {
      const matchesSearch = searchQuery === "" || 
        item.name.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesPrice = item.price >= priceRange[0] && item.price <= priceRange[1];
      
      return matchesSearch && matchesPrice;
    });
  };

  const filterCocktails = (cocktails: { name: string; price: number; ingredients: string[] }[]) => {
    return cocktails.filter(cocktail => {
      const matchesSearch = searchQuery === "" || 
        cocktail.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cocktail.ingredients.some(ing => ing.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesPrice = cocktail.price >= priceRange[0] && cocktail.price <= priceRange[1];
      
      return matchesSearch && matchesPrice;
    });
  };

  // Add before the return in MenuPage
  const partyPanWings = [
    { name: "Party Pan 50 Wings", price: 125 },
    { name: "Party Pan 75 Wings", price: 160 },
    { name: "Party Pan 100 Wings", price: 208 },
    { name: "Party Pan 150 Wings", price: 249 },
    { name: "Party Pan 200 Wings", price: 348 }
  ];
  const partyPanMixed = [
    { name: "Party Pan 50 pcs Mixed", price: 97 },
    { name: "Party Pan 100 pcs Mixed", price: 181 },
    { name: "Party Pan 150 pcs Mixed", price: 243 },
    { name: "Party Pan 200 pcs Mixed", price: 312 }
  ];
  const filteredPartyWings = filterMenuItems(partyPanWings);
  const filteredPartyMixed = filterMenuItems(partyPanMixed);

  // CHICKEN SECTION
  const chickenItems = [
    { name: "4 Wing Bucket w/ Fries", price: 12 },
    { name: "6 Wing Bucket w/ Fries", price: 14 },
    { name: "8 Wing Bucket w/ Fries", price: 18 },
    { name: "10 Wing Bucket w/ Fries", price: 22 },
    { name: "Extra Wing", price: 4 }
  ];
  const chickenTenders = [
    { name: "4 pcs Tenders/Fries", price: 12 },
    { name: "6 pcs Tenders/Fries", price: 15 },
    { name: "8 pcs Tenders/Fries", price: 17 },
    { name: "Swamp & Gizzards Small", price: 12 }
  ];
  const chickenPieces = [
    { name: "1/4 White", price: 11 },
    { name: "1/4 Dark", price: 9 },
    { name: "1/2 White", price: 21 },
    { name: "1/2 Dark", price: 15 },
    { name: "1/2 Mixed", price: 18 },
    { name: "2 Breasts", price: 16 },
    { name: "Extra Leg or Thigh", price: 4 },
    { name: "Extra Breast", price: 4 }
  ];
  const specialtyChicken = [
    { name: "Chicken Sandwich", price: 19, note: "Comes with fries & cookie" },
    { name: "Chicken & Waffles", price: 15, note: "3 wings" }
  ];
  const chickenWingBuckets = [
    { name: "12 Wing Bucket w/ Fries Large", price: 33 },
    { name: "18 Wing Bucket w/ Large Fry", price: 43 },
    { name: "24 Wing Bucket w/ 2 Large Fry", price: 53 }
  ];
  const mixedChickenBuckets = [
    { name: "8 Piece (Mixed)", price: 20, note: "Does not include fries" },
    { name: "16 Piece (Mixed)", price: 30, note: "Does not include fries" },
    { name: "24 Piece (Mixed)", price: 45, note: "Does not include fries" }
  ];
  const filteredChickenItems = filterMenuItems(chickenItems);
  const filteredChickenTenders = filterMenuItems(chickenTenders);
  const filteredChickenPieces = filterMenuItems(chickenPieces);
  const filteredSpecialtyChicken = filterMenuItems(specialtyChicken);
  const filteredChickenWingBuckets = filterMenuItems(chickenWingBuckets);
  const filteredMixedChickenBuckets = filterMenuItems(mixedChickenBuckets);
  const showChickenWingsSection =
    (selectedCategories.length === 0 || selectedCategories.includes("CHICKEN WINGS")) &&
    (filteredChickenItems.length > 0 ||
    filteredChickenTenders.length > 0 ||
    filteredSpecialtyChicken.length > 0);
  const showChickenPiecesBucketsSection =
    (selectedCategories.length === 0 || selectedCategories.includes("CHICKEN PIECES & BUCKETS")) &&
    (filteredChickenPieces.length > 0 ||
    filteredChickenWingBuckets.length > 0 ||
    filteredMixedChickenBuckets.length > 0);

  // FISH & SEAFOOD SECTION
  const fishCatfish = [
    { name: "Small Dry", price: 12 },
    { name: "Large Dry", price: 15 },
    { name: "Brushed 12 pc w/ Lemon", price: 4 },
    { name: "Brushed 24 pc w/ 2 sides", price: 94 },
    { name: "Nugget Small Left w/ Swell", price: 15 },
    { name: "Nugget Large 9oz", price: 18 }
  ];
  const catfishBuckets = [
    { name: "12 pc Catfish", price: 60, note: "Does not include fries" },
    { name: "24 pc Catfish", price: 84, note: "Does not include fries" }
  ];

  const fishWhiting = [
    { name: "Small Whiting", price: 15 },
    { name: "Large Whiting", price: 21 }
  ];
  const fishShrimp = [
    { name: "Buffalo Shrimp 8ct App", price: 0 },
    { name: "Buffalo Shrimp Dinner", price: 18 },
    { name: "5 Shrimp Swing", price: 20 }
  ];
  const fishLobster = [
    { name: "Lobster with Fries", price: 30.6 }
  ];
  const filteredFishCatfish = filterMenuItems(fishCatfish);
  const filteredCatfishBuckets = filterMenuItems(catfishBuckets);
  const filteredFishWhiting = filterMenuItems(fishWhiting);
  const filteredFishShrimp = filterMenuItems(fishShrimp);
  const filteredFishLobster = filterMenuItems(fishLobster);
  const showFishSection = 
    (selectedCategories.length === 0 || selectedCategories.includes("FISH & SEAFOOD")) &&
    (filteredFishCatfish.length > 0 || filteredFishWhiting.length > 0 || filteredFishShrimp.length > 0 || filteredCatfishBuckets.length > 0 || filteredFishLobster.length > 0);

  // SAUCES & EXTRAS SECTION
  const sauces = [
    { name: "Harold's Signature Mild Sauce Bottle", price: 19 },
    { name: "Harold's Signature HOT Sauce Bottle", price: 15 },
    { name: "Gallon of Sauce", price: 70 }
  ];
  const condiments = [
    { name: "2oz Mild Sauce", price: 1 },
    { name: "Hot Sauce", price: 2 },
    { name: 'Hot Pepper "3"', price: 1 },
    { name: "Cole Slaw (Half Pint)", price: 5 },
    { name: "Cole Slaw (Pint)", price: 7 },
    { name: "Extra lemon pepper", price: 0.75 },
    { name: "Extra leg", price: 4 },
    { name: "Extra thigh", price: 4 },
    { name: "Extra breast", price: 4 },
    { name: "Extra wing", price: 4 },
    { name: "Extra tender", price: 5 },
    { name: "Extra catfish", price: 4 },
    { name: "Extra shrimp", price: 4 }
  ];
  const filteredSauces = filterMenuItems(sauces);
  const filteredCondiments = filterMenuItems(condiments);
  const showSaucesSection = 
    (selectedCategories.length === 0 || selectedCategories.includes("SAUCES & EXTRAS")) &&
    (filteredSauces.length > 0 || filteredCondiments.length > 0);

  // BEVERAGES SECTION
  const specialtyCocktails = [
    { name: "K Sago Sunset", price: 9, ingredients: ["Don Julio Reposado","Orange Juice","Fresh Lime Juice","Splash Grenadine","Orange and Cherry"] },
    { name: "Mayweather Margarita", price: 13.5, ingredients: ["Hennessy","Tequila","Triple Sec","Fresh Lime Juice","Splash of Orange Juice","Orange Slice"] },
    { name: "Tasha's Tropical Twist", price: 8.5, ingredients: ["Malibu Rum","Curacao","Pineapple Juice","Fresh Lime Juice","Cherry"] },
    { name: "Joni's Jumper", price: 7, ingredients: ["Vodka","Mix-berry Puree","Fresh Lemon Juice","Club Soda","Lime"] },
    { name: "LaMello's LemonADE", price: 9, ingredients: ["Crown Royal Peach","Lemonade","Sprite","Grenadine","Peach"] },
    { name: "A Shedeur Summer", price: 7.5, ingredients: ["Vodka","Peach Schnapps","Strawberry Puree","Orange Juice","Splash Sprite","Orange"] },
    { name: "The MRJ", price: 12.5, ingredients: ["Patron Reposado","Triple Sec","Dragon Fruit","Pineapple Juice","Fresh Lime","Lime"] },
    { name: "The Rosita", price: 11, ingredients: ["Vodka","Rum","Gin","Peach Schnapps","Strawberry","Sprite","Lemon"] }
  ];
  const nonAlcoholic = [
    { name: "Bottled Water", price: 3 },
    { name: "Soft Drinks", price: 3, note: "unlimited refills" },
    { name: "Calypso", price: 5 },
    { name: "Special Flavored Lemonades", price: 4, note: "no free refill" },
    { name: "Can Soda", price: 3 }
  ];
  const filteredSpecialtyCocktails = filterCocktails(specialtyCocktails);
  const filteredNonAlcoholic = filterMenuItems(nonAlcoholic);
  const showCocktailsSection = 
    (selectedCategories.length === 0 || selectedCategories.includes("COCKTAILS")) &&
    filteredSpecialtyCocktails.length > 0;
  const showNonAlcoholicSection = 
    (selectedCategories.length === 0 || selectedCategories.includes("SAUCES & EXTRAS")) &&
    filteredNonAlcoholic.length > 0;

  // FISH COMBOS SECTION
  const fishCombos = [
    { name: "Catfish & 1/4 Chicken (White)", price: 27 },
    { name: "2 Catfish & 3 Wings", price: 23 },
    { name: "Liver & 3 Wings", price: 19 },
    { name: "Gizzard & 3 Wings", price: 19 },
    { name: "2 Catfish & 5 Shrimp", price: 25.25 },
    { name: "5 Shrimp & 3 Wings", price: 25.25 },
    { name: "5 Shrimp & 1/4 Chicken (White)", price: 28 },
    { name: "5 Shrimp & 1/4 Chicken (Dark)", price: 23 }
  ];
  const filteredFishCombos = filterMenuItems(fishCombos);
  const showFishCombosSection = 
    (selectedCategories.length === 0 || selectedCategories.includes("APPETIZERS & SIDES")) &&
    filteredFishCombos.length > 0;

  // DESSERTS SECTION
  const desserts = [
    { name: "Cookies", price: 3 },
    { name: "Honey Biscuits (5)", price: 10 },
    { name: "Honey Biscuits (10)", price: 15 }
  ];
  const filteredDesserts = filterMenuItems(desserts);
  const showDessertsSection = 
    (selectedCategories.length === 0 || selectedCategories.includes("DESSERTS")) &&
    filteredDesserts.length > 0;

  // Build a flat array of all menu items with category and subCategory
  const allMenuItems = [
    // Chicken Wings
    ...chickenItems.map(item => ({ ...item, category: 'CHICKEN WINGS', subCategory: 'Wing Dinners' })),
    ...chickenTenders.map(item => ({ ...item, category: 'CHICKEN WINGS', subCategory: 'Chicken Tenders' })),
    ...specialtyChicken.map(item => ({ ...item, category: 'CHICKEN WINGS', subCategory: 'Specialty Chicken Items' })),
    // Chicken Pieces & Buckets
    ...chickenPieces.map(item => ({ ...item, category: 'CHICKEN PIECES & BUCKETS', subCategory: 'Chicken Pieces' })),
    ...chickenWingBuckets.map(item => ({ ...item, category: 'CHICKEN PIECES & BUCKETS', subCategory: 'Chicken Wing Buckets' })),
    ...mixedChickenBuckets.map(item => ({ ...item, category: 'CHICKEN PIECES & BUCKETS', subCategory: 'Mixed Chicken Buckets' })),
    // Fish & Seafood
    ...fishCatfish.map(item => ({ ...item, category: 'FISH & SEAFOOD', subCategory: 'Catfish' })),
    ...fishWhiting.map(item => ({ ...item, category: 'FISH & SEAFOOD', subCategory: 'Whiting' })),
    ...fishShrimp.map(item => ({ ...item, category: 'FISH & SEAFOOD', subCategory: 'Shrimp' })),
    // Sauces & Extras
    ...sauces.map(item => ({ ...item, category: 'SAUCES & EXTRAS', subCategory: "Harold's Signature Sauces" })),
    ...condiments.map(item => ({ ...item, category: 'SAUCES & EXTRAS', subCategory: 'Condiments & Extras' })),
    ...nonAlcoholic.map(item => ({ ...item, category: 'SAUCES & EXTRAS', subCategory: 'Non-Alcoholic Beverages' })),
    // Appetizers & Sides
    ...friedAppetizers.map(item => ({ ...item, category: 'APPETIZERS & SIDES', subCategory: 'Fried Appetizers' })),
    ...sides.map(item => ({ ...item, category: 'APPETIZERS & SIDES', subCategory: 'Sides' })),
    ...fishCombos.map(item => ({ ...item, category: 'APPETIZERS & SIDES', subCategory: 'Fish Combos' })),
    // Cocktails
    ...specialtyCocktails.map(item => ({ ...item, category: 'COCKTAILS', subCategory: 'Specialty Cocktails' })),
    // Party Pans
    ...partyPanWings.map(item => ({ ...item, category: 'PARTY PANS', subCategory: 'Wing Party Pans' })),
    ...partyPanMixed.map(item => ({ ...item, category: 'PARTY PANS', subCategory: 'Mixed Chicken Party Pans' })),
    // Desserts
    ...desserts.map(item => ({ ...item, category: 'DESSERTS', subCategory: 'Desserts' })),
  ];

  // Set up Fuse.js
  const fuse = new Fuse(allMenuItems, {
    keys: ['name', 'note', 'ingredients'],
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

  // Type groupedResults
  const groupedResults: Record<string, Record<string, MenuItemType[]>> = {};
  filteredResults.forEach((item: MenuItemType) => {
    if (!groupedResults[item.category!]) groupedResults[item.category!] = {};
    if (!groupedResults[item.category!][item.subCategory!]) groupedResults[item.category!][item.subCategory!] = [];
    groupedResults[item.category!][item.subCategory!].push(item);
  });

  return (
    <div className="bg-white min-h-screen pb-8 sm:pb-16">
      <Header variant="white" />
      <MenuBanner />
      <Container as="main" className="pt-8 sm:pt-12 md:pt-16">
        {/* Menu Included Notice */}
        <div className="mb-8">
          <MenuIncluded />
        </div>

        {/* Enhanced Search and Filter Section */}
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
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 h-auto p-2 bg-gray-100 rounded-xl">
              <TabsTrigger 
                value="all" 
                className="text-sm sm:text-base font-medium px-2 sm:px-4 py-2 sm:py-3 data-[state=active]:bg-red-700 data-[state=active]:text-white rounded-lg transition-all"
              >
                All Items
              </TabsTrigger>
              <TabsTrigger 
                value="CHICKEN WINGS" 
                className="text-sm sm:text-base font-medium px-2 sm:px-4 py-2 sm:py-3 data-[state=active]:bg-red-700 data-[state=active]:text-white rounded-lg transition-all"
              >
                Wings
              </TabsTrigger>
              <TabsTrigger 
                value="CHICKEN PIECES & BUCKETS" 
                className="text-sm sm:text-base font-medium px-2 sm:px-4 py-2 sm:py-3 data-[state=active]:bg-red-700 data-[state=active]:text-white rounded-lg transition-all"
              >
                Chicken Pieces & Buckets
              </TabsTrigger>
              <TabsTrigger 
                value="FISH & SEAFOOD" 
                className="text-sm sm:text-base font-medium px-2 sm:px-4 py-2 sm:py-3 data-[state=active]:bg-red-700 data-[state=active]:text-white rounded-lg transition-all"
              >
                Fish
              </TabsTrigger>
              <TabsTrigger 
                value="APPETIZERS & SIDES" 
                className="text-sm sm:text-base font-medium px-2 sm:px-4 py-2 sm:py-3 data-[state=active]:bg-red-700 data-[state=active]:text-white rounded-lg transition-all"
              >
                Sides
              </TabsTrigger>
              <TabsTrigger 
                value="COCKTAILS" 
                className="text-sm sm:text-base font-medium px-2 sm:px-4 py-2 sm:py-3 data-[state=active]:bg-red-700 data-[state=active]:text-white rounded-lg transition-all"
              >
                Cocktails
              </TabsTrigger>
              <TabsTrigger 
                value="PARTY PANS" 
                className="text-sm sm:text-base font-medium px-2 sm:px-4 py-2 sm:py-3 data-[state=active]:bg-red-700 data-[state=active]:text-white rounded-lg transition-all"
              >
                Party Pans
              </TabsTrigger>
              <TabsTrigger 
                value="SAUCES & EXTRAS" 
                className="text-sm sm:text-base font-medium px-2 sm:px-4 py-2 sm:py-3 data-[state=active]:bg-red-700 data-[state=active]:text-white rounded-lg transition-all"
              >
                Extras
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
          {/* CHICKEN WINGS SECTION */}
          {showChickenWingsSection && (
            <Card className="bg-white border-2 border-gray-200 h-full transition-all duration-300">
              <CardHeader className="bg-[#1a1a1a] rounded-t-xl p-4 sm:p-6 md:p-8">
                <CardTitle className="text-xl sm:text-2xl text-white font-bold text-center uppercase">CHICKEN WINGS</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 bg-white">
                {/* Wing Dinners */}
                <div>
                  <h3 className="text-xl font-bold text-[#202124] mb-4 flex items-center">
                    <span className="w-1 h-6 bg-red-700"></span>
                    <span className="bg-gray-200 px-6 py-1 h-6 flex items-center text-gray-800">Wing Dinners</span>
                  </h3>
                  <ul className="space-y-1">
                    {filteredChickenItems.map((item, index) => (
                      <MenuItem key={index} {...item} />
                    ))}
                  </ul>
                </div>

                {/* Chicken Tenders */}
                <div>
                  <h3 className="text-xl font-bold text-[#202124] mb-4 flex items-center">
                    <span className="w-1 h-6 bg-red-700"></span>
                    <span className="bg-gray-200 px-6 py-1 h-6 flex items-center text-gray-800">Chicken Tenders</span>
                  </h3>
                  <ul className="space-y-2">
                    {filteredChickenTenders.map((item, index) => (
                      <MenuItem key={index} {...item} />
                    ))}
                  </ul>
                </div>

                {/* Specialty Chicken Items */}
                <div>
                  <h3 className="text-xl font-bold text-[#202124] mb-4 flex items-center">
                    <span className="w-1 h-6 bg-red-700"></span>
                    <span className="bg-gray-200 px-6 py-1 h-6 flex items-center text-gray-800">Specialty Chicken Items</span>
                  </h3>
                  <ul className="space-y-2">
                    {filteredSpecialtyChicken.map((item, index) => (
                      <MenuItem key={index} {...item} />
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          )}

          {/* CHICKEN PIECES & BUCKETS SECTION */}
          {showChickenPiecesBucketsSection && (
            <Card className="bg-white border-2 border-gray-200 h-full transition-all duration-300">
              <CardHeader className="bg-[#1a1a1a] rounded-t-xl p-4 sm:p-6 md:p-8">
                <CardTitle className="text-xl sm:text-2xl text-white font-bold text-center uppercase">CHICKEN PIECES & BUCKETS</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 bg-white">
                {/* Chicken Pieces */}
                <div>
                  <h3 className="text-xl font-bold text-[#202124] mb-4 flex items-center">
                    <span className="w-1 h-6 bg-red-700"></span>
                    <span className="bg-gray-200 px-6 py-1 h-6 flex items-center text-gray-800">Chicken Pieces</span>
                  </h3>
                  <ul className="space-y-2">
                    {filteredChickenPieces.map((item, index) => (
                      <MenuItem key={index} {...item} />
                    ))}
                  </ul>
                </div>

                {/* Chicken Wing Buckets */}
                <div>
                  <h3 className="text-xl font-bold text-[#202124] mb-4 flex items-center">
                    <span className="w-1 h-6 bg-red-700"></span>
                    <span className="bg-gray-200 px-6 py-1 h-6 flex items-center text-gray-800">Chicken Wing Buckets</span>
                  </h3>
                  <ul className="space-y-2">
                    {filteredChickenWingBuckets.map((item, index) => (
                      <MenuItem key={index} {...item} />
                    ))}
                  </ul>
                </div>

                {/* Mixed Chicken Buckets */}
                <div>
                  <h3 className="text-xl font-bold text-[#202124] mb-4 flex items-center">
                    <span className="w-1 h-6 bg-red-700"></span>
                    <span className="bg-gray-200 px-6 py-1 h-6 flex items-center text-gray-800">Mixed Chicken Buckets</span>
                  </h3>
                  <ul className="space-y-2">
                    {filteredMixedChickenBuckets.map((item, index) => (
                      <MenuItem key={index} {...item} />
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          )}

          {/* FISH & SEAFOOD SECTION */}
          {showFishSection && (
            <Card className="bg-white border-2 border-gray-200 h-full transition-all duration-300">
              <CardHeader className="bg-[#1a1a1a] rounded-t-xl p-4 sm:p-6 md:p-8">
                <CardTitle className="text-xl sm:text-2xl text-white font-bold text-center uppercase">FISH & SEAFOOD</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 bg-white">
                {/* Catfish */}
                <div>
                  <h3 className="text-xl font-bold text-[#202124] mb-4 flex items-center">
                    <span className="w-1 h-6 bg-red-700"></span>
                    <span className="bg-gray-200 px-6 py-1 h-6 flex items-center text-gray-800">Catfish</span>
                  </h3>
                  <ul className="space-y-2">
                    {filteredFishCatfish.map((item, index) => (
                      <MenuItem key={index} {...item} />
                    ))}
                  </ul>
                </div>

                {/* Catfish Buckets */}
                <div>
                  <h3 className="text-xl font-bold text-[#202124] mb-4 flex items-center">
                    <span className="w-1 h-6 bg-red-700"></span>
                    <span className="bg-gray-200 px-6 py-1 h-6 flex items-center text-gray-800">Catfish Buckets</span>
                  </h3>
                  <ul className="space-y-2">
                    {filteredCatfishBuckets.map((item, index) => (
                      <MenuItem key={index} {...item} />
                    ))}
                  </ul>
                </div>



                {/* Whiting */}
                <div>
                  <h3 className="text-xl font-bold text-[#202124] mb-4 flex items-center">
                    <span className="w-1 h-6 bg-red-700"></span>
                    <span className="bg-gray-200 px-6 py-1 h-6 flex items-center text-gray-800">Whiting</span>
                  </h3>
                  <ul className="space-y-2">
                    {filteredFishWhiting.map((item, index) => (
                      <MenuItem key={index} {...item} />
                    ))}
                  </ul>
                </div>

                {/* Shrimp */}
                <div>
                  <h3 className="text-xl font-bold text-[#202124] mb-4 flex items-center">
                    <span className="w-1 h-6 bg-red-700"></span>
                    <span className="bg-gray-200 px-6 py-1 h-6 flex items-center text-gray-800">Shrimp</span>
                  </h3>
                  <ul className="space-y-2">
                    {filteredFishShrimp.map((item, index) => (
                      <MenuItem key={index} {...item} />
                    ))}
                  </ul>
                </div>

                {/* Lobster */}
                <div>
                  <h3 className="text-xl font-bold text-[#202124] mb-4 flex items-center">
                    <span className="w-1 h-6 bg-red-700"></span>
                    <span className="bg-gray-200 px-6 py-1 h-6 flex items-center text-gray-800">Lobster</span>
                  </h3>
                  <ul className="space-y-2">
                    {filteredFishLobster.map((item, index) => (
                      <MenuItem key={index} {...item} />
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          )}

          {/* SAUCES & EXTRAS SECTION */}
          {showSaucesSection && (
            <Card className="bg-white border-2 border-gray-200 h-full transition-all duration-300">
              <CardHeader className="bg-[#1a1a1a] rounded-t-xl p-4 sm:p-6 md:p-8">
                <CardTitle className="text-xl sm:text-2xl text-white font-bold text-center uppercase">SAUCES & EXTRAS</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 bg-white">
                {filteredSauces.length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold text-[#202124] mb-4 flex items-center">
                      <span className="w-1 h-6 bg-red-700"></span>
                      <span className="bg-gray-200 px-6 py-1 h-6 flex items-center text-gray-800">Harold's Signature Sauces</span>
                    </h3>
                    <ul className="space-y-2">
                      {filteredSauces.map((item, index) => (
                        <MenuItem key={index} {...item} />
                      ))}
                    </ul>
                  </div>
                )}
                {filteredCondiments.length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold text-[#202124] mb-4 flex items-center">
                      <span className="w-1 h-6 bg-red-700"></span>
                      <span className="bg-gray-200 px-6 py-1 h-6 flex items-center text-gray-800">Condiments & Extras</span>
                    </h3>
                    <ul className="space-y-2">
                      {filteredCondiments.map((item, index) => (
                        <MenuItem key={index} {...item} />
                      ))}
                    </ul>
                  </div>
                )}

                {/* Non-Alcoholic Beverages */}
                {showNonAlcoholicSection && (
                  <div>
                    <h3 className="text-xl font-bold text-[#202124] mb-4 flex items-center">
                      <span className="w-1 h-6 bg-red-700"></span>
                      <span className="bg-gray-200 px-6 py-1 h-6 flex items-center text-gray-800">Non-Alcoholic Beverages</span>
                    </h3>
                    <ul className="space-y-2">
                      {filteredNonAlcoholic.map((item, index) => (
                        <MenuItem key={index} {...item} />
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* APPETIZERS & SIDES SECTION */}
          {(selectedCategories.length === 0 || selectedCategories.includes("APPETIZERS & SIDES")) && (
            <Card className="bg-white border-2 border-gray-200 h-full transition-all duration-300">
              <CardHeader className="bg-[#1a1a1a] rounded-t-xl p-4 sm:p-6 md:p-8">
                <CardTitle className="text-xl sm:text-2xl text-white font-bold text-center uppercase">APPETIZERS & SIDES</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 bg-white">
                {/* Fried Appetizers */}
                <div>
                  <h3 className="text-xl font-bold text-[#202124] mb-4 flex items-center">
                    <span className="w-1 h-6 bg-red-700"></span>
                    <span className="bg-gray-200 px-6 py-1 h-6 flex items-center text-gray-800">Fried Appetizers</span>
                  </h3>
                  <ul className="space-y-2">
                    {friedAppetizers.map((item, index) => (
                      <MenuItem key={index} {...item} />
                    ))}
                  </ul>
                </div>

                {/* Sides */}
                <div>
                  <h3 className="text-xl font-bold text-[#202124] mb-4 flex items-center">
                    <span className="w-1 h-6 bg-red-700"></span>
                    <span className="bg-gray-200 px-6 py-1 h-6 flex items-center text-gray-800">Sides</span>
                  </h3>
                  <ul className="space-y-2">
                    {sides.map((item, index) => (
                      <MenuItem key={index} {...item} />
                    ))}
                  </ul>
                </div>

                {/* Fish Combos */}
                {showFishCombosSection && (
                  <div>
                    <h3 className="text-xl font-bold text-[#202124] mb-4 flex items-center">
                      <span className="w-1 h-6 bg-red-700"></span>
                      <span className="bg-gray-200 px-6 py-1 h-6 flex items-center text-gray-800">Fish Combos</span>
                    </h3>
                    <ul className="space-y-2">
                      {filteredFishCombos.map((item, index) => (
                        <MenuItem key={index} {...item} />
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* COCKTAILS SECTION */}
          {showCocktailsSection && (
            <Card className="bg-white border-2 border-gray-200 h-full transition-all duration-300">
              <CardHeader className="bg-[#1a1a1a] rounded-t-xl p-4 sm:p-6 md:p-8">
                <CardTitle className="text-xl sm:text-2xl text-white font-bold text-center uppercase">COCKTAILS</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 bg-white">
                {/* Specialty Cocktails */}
                <div>
                  <h3 className="text-xl font-bold text-[#202124] mb-4 flex items-center">
                    <span className="w-1 h-6 bg-red-700"></span>
                    <span className="bg-gray-200 px-6 py-1 h-6 flex items-center text-gray-800">Specialty Cocktails</span>
                  </h3>
                  <ul className="space-y-3">
                    {filteredSpecialtyCocktails.map((cocktail, index) => (
                      <Cocktail key={index} {...cocktail} />
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          )}


          {/* PARTY PANS AND DESSERTS CONTAINER */}
          <div className="col-span-1 lg:col-span-2 xl:col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {/* PARTY PANS SECTION */}
            {(!selectedCategories.length || selectedCategories.includes("PARTY PANS")) && (
              <Card className="bg-white border-2 border-gray-200 h-full transition-all duration-300">
                <CardHeader className="bg-[#1a1a1a] rounded-t-xl p-4 sm:p-6 md:p-8">
                  <CardTitle className="text-xl sm:text-2xl text-white font-bold text-center uppercase">PARTY PANS</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 md:p-8 bg-white">
                  <div className="grid grid-cols-1 gap-8">
                    {/* Wing Party Pans */}
                    <div>
                      <h3 className="text-xl font-bold text-[#202124] mb-4 flex items-center">
                        <span className="w-1 h-6 bg-red-700"></span>
                        <span className="bg-gray-200 px-6 py-1 h-6 flex items-center text-gray-800">Wing Party Pans</span>
                      </h3>
                      <ul className="space-y-2">
                        {filteredPartyWings.length === 0 ? (
                          <li className="text-gray-500 italic">No items found for your search/filter.</li>
                        ) : (
                          filteredPartyWings.map((item, index) => (
                            <MenuItem key={index} {...item} />
                          ))
                        )}
                      </ul>
                    </div>

                    {/* Mixed Chicken Party Pans */}
                    <div>
                      <h3 className="text-xl font-bold text-[#202124] mb-4 flex items-center">
                        <span className="w-1 h-6 bg-red-700"></span>
                        <span className="bg-gray-200 px-6 py-1 h-6 flex items-center text-gray-800">Mixed Chicken Party Pans</span>
                      </h3>
                      <ul className="space-y-2">
                        {filteredPartyMixed.length === 0 ? (
                          <li className="text-gray-500 italic">No items found for your search/filter.</li>
                        ) : (
                          filteredPartyMixed.map((item, index) => (
                            <MenuItem key={index} {...item} />
                          ))
                        )}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* DESSERTS SECTION */}
            {showDessertsSection && (
              <Card className="bg-white border-2 border-gray-200 h-full transition-all duration-300">
                <CardHeader className="bg-[#1a1a1a] rounded-t-xl p-4 sm:p-6 md:p-8">
                  <CardTitle className="text-xl sm:text-2xl text-white font-bold text-center uppercase">DESSERTS</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 bg-white">
                  <div>
                    <h3 className="text-xl font-bold text-[#202124] mb-4 flex items-center">
                      <span className="w-1 h-6 bg-red-700"></span>
                      <span className="bg-gray-200 px-6 py-1 h-6 flex items-center text-gray-800">Desserts</span>
                    </h3>
                    <ul className="space-y-2">
                      {filteredDesserts.map((item, index) => (
                        <MenuItem key={index} {...item} />
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Restaurant Notices */}
        <MenuNotices />
      </Container>
      <Footer />
    </div>
  );
} 