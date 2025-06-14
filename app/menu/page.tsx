"use client"

import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Container } from "../components/ui/container";
import { useState, useRef, useEffect } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Slider } from "../components/ui/slider";
import { Search, Filter, X, ChevronDown, ChevronUp, Tag, DollarSign, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Fuse from 'fuse.js';

function MenuBanner() {
  return (
    <section className="relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px] w-full">
      <Image
        src="/images/CareersBG.png"
        alt="Harold's Chicken team members working together"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/40" />
      <Container className="relative z-10 flex items-center min-h-[400px] sm:min-h-[500px] md:min-h-[600px]">
        <div className="max-w-2xl text-white mx-auto text-center py-12 sm:py-16 md:py-24 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 md:mb-8 uppercase whitespace-nowrap">
            Discover Our Menu
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 md:mb-10 leading-relaxed uppercase font-medium">
            Explore our full selection of Harold's Chicken & Sport Bar favorites, from classic wings to signature sides and more.
          </p>
          <Button 
            size="lg"
            className="bg-red-700 hover:bg-red-800 text-white text-lg sm:text-xl font-bold px-8 sm:px-12 py-4 sm:py-6 uppercase w-full sm:w-auto"
            asChild
          >
            <Link href="/coming-soon">
              Order Now
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}

function MenuNotices() {
  return (
    <Card className="mt-16 mb-16 border border-gray-200">
      <CardHeader className="bg-[#F8F9FA] rounded-t-xl p-8">
        <CardTitle className="text-2xl text-[#202124] tracking-wider text-center font-bold">Important Notices</CardTitle>
      </CardHeader>
      <CardContent className="p-8 space-y-6">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="mt-1">
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

          <div className="flex items-start gap-4">
            <div className="mt-1">
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

          <div className="flex items-start gap-4">
            <div className="mt-1">
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

          <div className="flex items-start gap-4">
            <div className="mt-1">
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

          <div className="flex items-start gap-4">
            <div className="mt-1">
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
      </CardContent>
    </Card>
  );
}

function MenuItem({ name, price, note, badge }: { name: string; price: number; note?: string; badge?: { text: string; className: string } }) {
  return (
    <li className="group relative hover:bg-[#F8F9FA]/50 transition-all duration-300 rounded-lg p-4 border-b border-gray-100 last:border-b-0">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-[#202124] group-hover:text-red-700 transition-colors duration-300 flex items-center gap-2">
            {name}
            {badge && (
              <span className="ml-2 px-3 py-1 rounded-full text-xs font-bold uppercase bg-red-700 text-white">{badge.text}</span>
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
  setSearchQuery, 
  showFilters, 
  setShowFilters 
}: { 
  searchQuery: string; 
  setSearchQuery: (query: string) => void; 
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
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
    "Party Pans"
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
      <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
        <div className="relative flex-1">
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

        <Button
          variant="outline"
          size="lg"
          onClick={() => setShowFilters(!showFilters)}
          className={cn(
            "flex items-center justify-center gap-2 transition-colors h-[44px] sm:h-[52px] px-4 sm:px-6",
            showFilters ? "bg-[#F8F9FA] border-gray-200 text-red-700" : ""
          )}
        >
          <Filter size={18} />
          <span className="sm:hidden">Filter</span>
          <span className="hidden sm:inline">Filters</span>
          {showFilters ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </Button>
      </div>

      {/* Search Tips */}
      {!searchQuery && (
        <div className="mt-2 sm:mt-3 text-sm sm:text-base text-[#333536]">
          Try searching for: chicken wings, catfish, party pans, or beverages
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
  { name: "Jalapeno Poppers", price: 11 },
  { name: "Mac & Cheese Bites", price: 9 },
  { name: "Mozz Sticks (3)", price: 6 },
  { name: "Mozz Sticks (5)", price: 8 },
  { name: "Mushrooms", price: 10 },
  { name: "Pizza Puff", price: 7 },
  { name: "Pizza Puff & Fries", price: 10 },
  { name: "Zucchini Sticks", price: 11 },
  { name: "Sweet Corn Bites", price: 9 },
  { name: "Broccoli n Cheddar Bites", price: 9 },
  { name: "Spicy Cheese Curds", price: 10 },
  { name: "Black Bean & Cheese Firecrackers", price: 11 }
];
const sides: MenuItemType[] = [
  { name: "Okra 1/2 lb", price: 5 },
  { name: "Okra 1 lb", price: 10 },
  { name: "Coleslaw 2 oz", price: 2 },
  { name: "Coleslaw 8 oz", price: 5 },
  { name: "Coleslaw 16 oz", price: 9 },
  { name: "Small Fry", price: 4 },
  { name: "Large Fry", price: 7 }
];

// Helper type guard for badge
// function hasBadge(item: { badge?: { text: string; className: string } }): item is { badge: { text: string; className: string } } {
//   return !!item.badge && typeof item.badge.text === 'string' && typeof item.badge.className === 'string';
// }

export default function MenuPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 350]);
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { id: "CHICKEN", label: "Chicken" },
    { id: "FISH & SEAFOOD", label: "Fish & Seafood" },
    { id: "APPETIZERS & SIDES", label: "Appetizers & Sides" },
    { id: "BEVERAGES", label: "Beverages" },
    { id: "PARTY PANS", label: "Party Pans" },
    { id: "FISH COMBOS", label: "Fish Combos" },
    { id: "DESSERTS", label: "Desserts" },
    { id: "SAUCES & EXTRAS", label: "Sauces & Extras" }
  ];

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategories([]);
    setPriceRange([0, 350]);
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
    { name: "4 Wings", price: 14 },
    { name: "6 Wings", price: 17 },
    { name: "8 Wings", price: 21 },
    { name: "10 Wings", price: 22 },
    { name: "Extra Wing", price: 4 }
  ];
  const chickenTenders = [
    { name: "Tenders 4 pcs", price: 14 },
    { name: "Tenders 6 pcs", price: 17 },
    { name: "Tenders 8 pcs", price: 21 }
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
    { name: "Chicken Sandwich", price: 19 },
    { name: "Chicken & Waffles", price: 21 }
  ];
  const chickenWingBuckets = [
    { name: "12 pc Wings", price: 24 },
    { name: "18 pc Wings", price: 36, badge: { text: "Best Value", className: "bg-yellow-400 text-black" } },
    { name: "24 pc Wings", price: 47 }
  ];
  const mixedChickenBuckets = [
    { name: "8 Piece (Mixed)", price: 20 },
    { name: "16 Piece (Mixed)", price: 30 },
    { name: "24 Piece (Mixed)", price: 45 }
  ];
  const filteredChickenItems = filterMenuItems(chickenItems);
  const filteredChickenTenders = filterMenuItems(chickenTenders);
  const filteredChickenPieces = filterMenuItems(chickenPieces);
  const filteredSpecialtyChicken = filterMenuItems(specialtyChicken);
  const filteredChickenWingBuckets = filterMenuItems(chickenWingBuckets);
  const filteredMixedChickenBuckets = filterMenuItems(mixedChickenBuckets);
  const showChickenSection =
    filteredChickenItems.length > 0 ||
    filteredChickenTenders.length > 0 ||
    filteredChickenPieces.length > 0 ||
    filteredSpecialtyChicken.length > 0 ||
    filteredChickenWingBuckets.length > 0 ||
    filteredMixedChickenBuckets.length > 0;

  // FISH & SEAFOOD SECTION
  const fishCatfish = [
    { name: "Small Catfish", price: 15 },
    { name: "Large Catfish", price: 22 },
    { name: "12 pc Catfish", price: 42 },
    { name: "Small Cat Nugget", price: 14 },
    { name: "Large Cat Nugget", price: 19 },
    { name: "Extra Catfish", price: 4 }
  ];
  const catfishBuckets = [
    { name: "12 pc Catfish", price: 25 },
    { name: "24 pc Catfish", price: 45 }
  ];
  const fishPerch = [
    { name: "Small Perch", price: 14 },
    { name: "Large Perch", price: 22 },
    { name: "12 pc Perch", price: 47 },
    { name: "Extra Perch", price: 4 }
  ];
  const perchBuckets = [
    { name: "12 pc Perch", price: 25 },
    { name: "24 pc Perch", price: 45 }
  ];
  const fishWhiting = [
    { name: "Small Whiting", price: 15 },
    { name: "Large Whiting", price: 21 }
  ];
  const fishShrimp = [
    { name: "8 pc Shrimp", price: 20 },
    { name: "Buffalo Shrimp", price: 21 },
    { name: "Extra Shrimp", price: 4 }
  ];
  const filteredFishCatfish = filterMenuItems(fishCatfish);
  const filteredCatfishBuckets = filterMenuItems(catfishBuckets);
  const filteredFishPerch = filterMenuItems(fishPerch);
  const filteredPerchBuckets = filterMenuItems(perchBuckets);
  const filteredFishWhiting = filterMenuItems(fishWhiting);
  const filteredFishShrimp = filterMenuItems(fishShrimp);
  const showFishSection = filteredFishCatfish.length > 0 || filteredFishPerch.length > 0 || filteredFishWhiting.length > 0 || filteredFishShrimp.length > 0 || filteredCatfishBuckets.length > 0 || filteredPerchBuckets.length > 0;

  // SAUCES & EXTRAS SECTION
  const sauces = [
    { name: "Harold's Signature Mild Sauce Bottle", price: 19 },
    { name: "Harold's Signature HOT Sauce Bottle", price: 15 },
    { name: "Gallon Mild Sauce", price: 47 }
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
    { name: "Extra perch", price: 4 },
    { name: "Extra shrimp", price: 4 }
  ];
  const filteredSauces = filterMenuItems(sauces);
  const filteredCondiments = filterMenuItems(condiments);
  const showSaucesSection = filteredSauces.length > 0 || filteredCondiments.length > 0;

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
    { name: "Soft Drinks", price: 6, note: "unlimited refills" },
    { name: "Calypso", price: 5 },
    { name: "Special Flavored Lemonades", price: 4, note: "no free refill" },
    { name: "Can Soda", price: 3 }
  ];
  const filteredSpecialtyCocktails = filterCocktails(specialtyCocktails);
  const filteredNonAlcoholic = filterMenuItems(nonAlcoholic);
  const showBeveragesSection = filteredSpecialtyCocktails.length > 0 || filteredNonAlcoholic.length > 0;

  // FISH COMBOS SECTION
  const fishCombos = [
    { name: "Catfish & 1/4 Chicken (White)", price: 27 },
    { name: "Perch & 1/4 Chicken (Dark)", price: 23 },
    { name: "Perch & 1/4 Chicken (White)", price: 24 },
    { name: "2 Catfish & 3 Wings", price: 23 },
    { name: "2 Perch & 3 Wings", price: 20 },
    { name: "Liver & 3 Wings", price: 19 },
    { name: "Gizzard & 3 Wings", price: 19 },
    { name: "2 Catfish & 5 Shrimp", price: 25.25 },
    { name: "2 Perch & 5 Shrimp", price: 22.25 },
    { name: "5 Shrimp & 3 Wings", price: 25.25 },
    { name: "5 Shrimp & 1/4 Chicken (White)", price: 28 },
    { name: "5 Shrimp & 1/4 Chicken (Dark)", price: 23 }
  ];
  const filteredFishCombos = filterMenuItems(fishCombos);
  const showFishCombosSection = filteredFishCombos.length > 0;

  // DESSERTS SECTION
  const desserts = [
    { name: "Cookies", price: 7 },
    { name: "Honey Biscuits (5)", price: 10 },
    { name: "Honey Biscuits (10)", price: 15 }
  ];
  const filteredDesserts = filterMenuItems(desserts);
  const showDessertsSection = filteredDesserts.length > 0;

  // Build a flat array of all menu items with category and subCategory
  const allMenuItems = [
    // Chicken
    ...chickenItems.map(item => ({ ...item, category: 'CHICKEN', subCategory: 'Wing Dinners' })),
    ...chickenTenders.map(item => ({ ...item, category: 'CHICKEN', subCategory: 'Chicken Tenders' })),
    ...chickenPieces.map(item => ({ ...item, category: 'CHICKEN', subCategory: 'Chicken Pieces' })),
    ...specialtyChicken.map(item => ({ ...item, category: 'CHICKEN', subCategory: 'Specialty Chicken Items' })),
    // Fish & Seafood
    ...fishCatfish.map(item => ({ ...item, category: 'FISH & SEAFOOD', subCategory: 'Catfish' })),
    ...fishPerch.map(item => ({ ...item, category: 'FISH & SEAFOOD', subCategory: 'Perch' })),
    ...fishWhiting.map(item => ({ ...item, category: 'FISH & SEAFOOD', subCategory: 'Whiting' })),
    ...fishShrimp.map(item => ({ ...item, category: 'FISH & SEAFOOD', subCategory: 'Shrimp' })),
    // Sauces & Extras
    ...sauces.map(item => ({ ...item, category: 'SAUCES & EXTRAS', subCategory: "Harold's Signature Sauces" })),
    ...condiments.map(item => ({ ...item, category: 'SAUCES & EXTRAS', subCategory: 'Condiments & Extras' })),
    // Appetizers & Sides
    ...friedAppetizers.map(item => ({ ...item, category: 'APPETIZERS & SIDES', subCategory: 'Fried Appetizers' })),
    ...sides.map(item => ({ ...item, category: 'APPETIZERS & SIDES', subCategory: 'Sides' })),
    // Beverages
    ...specialtyCocktails.map(item => ({ ...item, category: 'BEVERAGES', subCategory: 'Specialty Cocktails' })),
    ...nonAlcoholic.map(item => ({ ...item, category: 'BEVERAGES', subCategory: 'Non-Alcoholic Beverages' })),
    // Fish Combos
    ...fishCombos.map(item => ({ ...item, category: 'FISH COMBOS', subCategory: 'Fish Combos' })),
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
        {/* Enhanced Search and Filter Section */}
        <div className="mb-8 sm:mb-12 space-y-4 sm:space-y-6">
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            showFilters={showFilters}
            setShowFilters={setShowFilters}
          />

          {/* Enhanced Filter Panel */}
          {showFilters && (
            <div className="bg-gradient-to-b from-[#F8F9FA] to-white p-4 sm:p-6 md:p-8 rounded-lg space-y-6 sm:space-y-8 border border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-xl sm:text-2xl font-bold text-[#202124]">Filter Menu</h3>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={clearFilters} 
                  className="flex items-center gap-2 text-red-700 hover:text-red-800"
                >
                  <X size={16} />
                  Clear All
                </Button>
              </div>

              {/* Categories */}
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-[#202124] mb-3 sm:mb-4 flex items-center gap-2">
                  <Tag size={16} className="text-red-700" />
                  Categories
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={selectedCategories.includes(category.id) ? "default" : "outline"}
                      className={cn(
                        "w-full justify-start gap-2 transition-all duration-300 text-sm sm:text-base",
                        selectedCategories.includes(category.id)
                          ? "bg-red-700 text-white hover:bg-red-800"
                          : "hover:bg-[#F8F9FA] border-gray-200"
                      )}
                      onClick={() => toggleCategory(category.id)}
                    >
                      {category.label}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-[#202124] mb-3 sm:mb-4 flex items-center gap-2">
                  <DollarSign size={16} className="text-red-700" />
                  Price Range
                </h4>
                <div className="px-2">
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={350}
                    step={1}
                    className="mb-3 sm:mb-4"
                  />
                  <div className="flex justify-between text-sm sm:text-base text-[#333536]">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Active Filters Display */}
          {(selectedCategories.length > 0 || searchQuery || priceRange[0] > 0 || priceRange[1] < 350) && (
            <div className="flex flex-wrap gap-2">
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
              {(priceRange[0] > 0 || priceRange[1] < 350) && (
                <Badge variant="secondary" className="flex items-center gap-1 bg-[#F8F9FA] text-[#202124] border border-gray-200 text-sm">
                  Price: ${priceRange[0]} - ${priceRange[1]}
                  <X
                    size={12}
                    className="cursor-pointer hover:text-red-700"
                    onClick={() => setPriceRange([0, 350])}
                  />
                </Badge>
              )}
            </div>
          )}
        </div>

        {Object.entries(groupedResults).length === 0 && (
          <div className="w-full text-center text-gray-500 py-8 text-lg">No results found</div>
        )}

        {/* MAIN MENU SECTIONS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {showChickenSection && (
            <Card className="bg-white border-2 border-gray-200 h-full transition-all duration-300">
              <CardHeader className="bg-[#1a1a1a] rounded-t-xl p-4 sm:p-6 md:p-8">
                <CardTitle className="text-xl sm:text-2xl text-white font-bold text-center uppercase">CHICKEN</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 bg-white">
                {/* Wing Dinners */}
                <div>
                  <h3 className="text-xl font-bold text-[#202124] mb-4 flex items-center">
                    <span className="w-1 h-6 bg-red-700"></span>
                    <span className="bg-gray-300 px-6 py-1 h-6 flex items-center">Wing Dinners</span>
                  </h3>
                  <ul className="space-y-2">
                    {filteredChickenItems.map((item, index) => (
                      <MenuItem key={index} {...item} />
                    ))}
                  </ul>
                </div>

                {/* Chicken Tenders */}
                <div>
                  <h3 className="text-xl font-bold text-[#202124] mb-4 flex items-center">
                    <span className="w-1 h-6 bg-red-700"></span>
                    <span className="bg-gray-300 px-6 py-1 h-6 flex items-center">Chicken Tenders</span>
                  </h3>
                  <ul className="space-y-2">
                    {filteredChickenTenders.map((item, index) => (
                      <MenuItem key={index} {...item} />
                    ))}
                  </ul>
                </div>

                {/* Chicken Pieces */}
                <div>
                  <h3 className="text-xl font-bold text-[#202124] mb-4 flex items-center">
                    <span className="w-1 h-6 bg-red-700"></span>
                    <span className="bg-gray-300 px-6 py-1 h-6 flex items-center">Chicken Pieces</span>
                  </h3>
                  <ul className="space-y-2">
                    {filteredChickenPieces.map((item, index) => (
                      <MenuItem key={index} {...item} />
                    ))}
                  </ul>
                </div>

                {/* Specialty Chicken Items */}
                <div>
                  <h3 className="text-xl font-bold text-[#202124] mb-4 flex items-center">
                    <span className="w-1 h-6 bg-red-700"></span>
                    <span className="bg-gray-300 px-6 py-1 h-6 flex items-center">Specialty Chicken Items</span>
                  </h3>
                  <ul className="space-y-2">
                    {filteredSpecialtyChicken.map((item, index) => (
                      <MenuItem key={index} {...item} />
                    ))}
                  </ul>
                </div>

                {/* Chicken Wing Buckets */}
                <div>
                  <h3 className="text-xl font-bold text-[#202124] mb-4 flex items-center">
                    <span className="w-1 h-6 bg-red-700"></span>
                    <span className="bg-gray-300 px-6 py-1 h-6 flex items-center">Chicken Wing Buckets</span>
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
                    <span className="bg-gray-300 px-6 py-1 h-6 flex items-center">Mixed Chicken Buckets</span>
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
                    <span className="bg-gray-300 px-6 py-1 h-6 flex items-center">Catfish</span>
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
                    <span className="bg-gray-300 px-6 py-1 h-6 flex items-center">Catfish Buckets</span>
                  </h3>
                  <ul className="space-y-2">
                    {filteredCatfishBuckets.map((item, index) => (
                      <MenuItem key={index} {...item} />
                    ))}
                  </ul>
                </div>

                {/* Perch */}
                <div>
                  <h3 className="text-xl font-bold text-[#202124] mb-4 flex items-center">
                    <span className="w-1 h-6 bg-red-700"></span>
                    <span className="bg-gray-300 px-6 py-1 h-6 flex items-center">Perch</span>
                  </h3>
                  <ul className="space-y-2">
                    {filteredFishPerch.map((item, index) => (
                      <MenuItem key={index} {...item} />
                    ))}
                  </ul>
                </div>

                {/* Perch Buckets */}
                <div>
                  <h3 className="text-xl font-bold text-[#202124] mb-4 flex items-center">
                    <span className="w-1 h-6 bg-red-700"></span>
                    <span className="bg-gray-300 px-6 py-1 h-6 flex items-center">Perch Buckets</span>
                  </h3>
                  <ul className="space-y-2">
                    {filteredPerchBuckets.map((item, index) => (
                      <MenuItem key={index} {...item} />
                    ))}
                  </ul>
                </div>

                {/* Whiting */}
                <div>
                  <h3 className="text-xl font-bold text-[#202124] mb-4 flex items-center">
                    <span className="w-1 h-6 bg-red-700"></span>
                    <span className="bg-gray-300 px-6 py-1 h-6 flex items-center">Whiting</span>
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
                    <span className="bg-gray-300 px-6 py-1 h-6 flex items-center">Shrimp</span>
                  </h3>
                  <ul className="space-y-2">
                    {filteredFishShrimp.map((item, index) => (
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
                      <span className="bg-gray-300 px-6 py-1 h-6 flex items-center">Harold's Signature Sauces</span>
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
                      <span className="bg-gray-300 px-6 py-1 h-6 flex items-center">Condiments & Extras</span>
                    </h3>
                    <ul className="space-y-2">
                      {filteredCondiments.map((item, index) => (
                        <MenuItem key={index} {...item} />
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* APPETIZERS & SIDES SECTION */}
          {(!selectedCategories.length || selectedCategories.includes("APPETIZERS & SIDES")) && (
            <Card className="bg-white border-2 border-gray-200 h-full transition-all duration-300">
              <CardHeader className="bg-[#1a1a1a] rounded-t-xl p-4 sm:p-6 md:p-8">
                <CardTitle className="text-xl sm:text-2xl text-white font-bold text-center uppercase">APPETIZERS & SIDES</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 bg-white">
                {/* Fried Appetizers */}
                <div>
                  <h3 className="text-xl font-bold text-[#202124] mb-4 flex items-center">
                    <span className="w-1 h-6 bg-red-700"></span>
                    <span className="bg-gray-300 px-6 py-1 h-6 flex items-center">Fried Appetizers</span>
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
                    <span className="bg-gray-300 px-6 py-1 h-6 flex items-center">Sides</span>
                  </h3>
                  <ul className="space-y-2">
                    {sides.map((item, index) => (
                      <MenuItem key={index} {...item} />
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          )}

          {/* BEVERAGES SECTION */}
          {showBeveragesSection && (
            <Card className="bg-white border-2 border-gray-200 h-full transition-all duration-300">
              <CardHeader className="bg-[#1a1a1a] rounded-t-xl p-4 sm:p-6 md:p-8">
                <CardTitle className="text-xl sm:text-2xl text-white font-bold text-center uppercase">BEVERAGES</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 bg-white">
                {/* Specialty Cocktails */}
                <div>
                  <h3 className="text-xl font-bold text-[#202124] mb-4 flex items-center">
                    <span className="w-1 h-6 bg-red-700"></span>
                    <span className="bg-gray-300 px-6 py-1 h-6 flex items-center">Specialty Cocktails</span>
                  </h3>
                  <ul className="space-y-3">
                    {filteredSpecialtyCocktails.map((cocktail, index) => (
                      <Cocktail key={index} {...cocktail} />
                    ))}
                  </ul>
                </div>

                {/* Non-Alcoholic Beverages */}
                <div>
                  <h3 className="text-xl font-bold text-[#202124] mb-4 flex items-center">
                    <span className="w-1 h-6 bg-red-700"></span>
                    <span className="bg-gray-300 px-6 py-1 h-6 flex items-center">Non-Alcoholic Beverages</span>
                  </h3>
                  <ul className="space-y-2">
                    {filteredNonAlcoholic.map((item, index) => (
                      <MenuItem key={index} {...item} />
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          )}

          {/* FISH COMBOS SECTION */}
          {showFishCombosSection && (
            <Card className="bg-white border-2 border-gray-200 h-full transition-all duration-300">
              <CardHeader className="bg-[#1a1a1a] rounded-t-xl p-4 sm:p-6 md:p-8">
                <CardTitle className="text-xl sm:text-2xl text-white font-bold text-center uppercase">FISH COMBOS</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 md:p-8 bg-white">
                <ul className="space-y-2">
                  {filteredFishCombos.map((item, index) => (
                    <MenuItem key={index} {...item} />
                  ))}
                </ul>
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
                        <span className="bg-gray-300 px-6 py-1 h-6 flex items-center">Wing Party Pans</span>
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
                        <span className="bg-gray-300 px-6 py-1 h-6 flex items-center">Mixed Chicken Party Pans</span>
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
                <CardContent className="p-4 sm:p-6 md:p-8 bg-white">
                  <div className="max-w-2xl mx-auto">
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