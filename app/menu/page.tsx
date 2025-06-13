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

function MenuBanner() {
  return (
    <section className="relative min-h-[420px] md:min-h-[520px] w-full">
      <Image
        src="/images/ValueProp/ChickenImg.jpg"
        alt="Harold's Chicken and fries"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/60" />
      <Container className="relative z-10 flex items-center justify-center min-h-[420px] md:min-h-[520px]">
        <div className="w-full text-center py-16 md:py-28 max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight uppercase text-white drop-shadow-lg">
            Discover Our Menu
          </h1>
          <p className="text-lg md:text-2xl font-medium mb-2 md:mb-6 leading-relaxed text-white drop-shadow-sm">
            Explore our full selection of Harold's Chicken &amp; Sport Bar favorites, from classic wings to signature sides and more.
          </p>
        </div>
      </Container>
    </section>
  );
}

function MenuNotices() {
  return (
    <Card className="mt-8 mb-10 border-red-700">
      <CardHeader className="bg-red-700 rounded-t-xl p-4">
        <CardTitle className="text-xl text-white tracking-wider text-center">Important Notices</CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
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
              <h4 className="font-semibold text-gray-900 mb-1">Food Safety Notice</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Consuming raw or undercooked meats, poultry, seafood, shellfish or eggs may increase your risk of food borne illnesses, especially if you have certain medical conditions.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
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
              <h4 className="font-semibold text-gray-900 mb-1">Freshness Commitment</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Because freshness is of the utmost importance to us here at Harold's Chicken & Sport Bar, all orders are prepared 'fresh to order'. Although this may at times involve longer than normal wait times, we promise you that our deliciously flavored Chicago style chicken and fish is well worth the wait!
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
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
              <h4 className="font-semibold text-gray-900 mb-1">Service Charge</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                18 percent gratuity will be added to all orders.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function MenuItem({ name, price, note }: { name: string; price: number; note?: string }) {
  return (
    <li className="group hover:bg-gray-50 transition-colors duration-200 rounded-lg p-3">
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <span className="text-lg md:text-xl font-semibold text-black group-hover:text-red-700 transition-colors duration-200">
            {name}
          </span>
          <span className="text-red-700 font-bold text-xl md:text-2xl">
            ${price}
          </span>
        </div>
        {note && (
          <span className="text-sm italic text-gray-600">{note}</span>
        )}
      </div>
    </li>
  );
}

function Cocktail({ name, price, ingredients }: { name: string; price: number; ingredients: string[] }) {
  return (
    <li className="group hover:bg-gray-50 transition-colors duration-200 rounded-lg p-3">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <span className="text-lg md:text-xl font-semibold text-black group-hover:text-red-700 transition-colors duration-200">
            {name}
          </span>
          <span className="text-red-700 font-bold text-xl md:text-2xl">
            ${price}
          </span>
        </div>
        <ul className="ml-2 text-base text-gray-700 list-disc list-inside space-y-1">
          {ingredients.map((ing, i) => (
            <li key={i} className="text-gray-600">{ing}</li>
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
      <div className="flex gap-4 items-center">
        <div className="relative flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              type="text"
              placeholder="Search for chicken, fish, sides, or beverages..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              className={cn(
                "pl-10 pr-10 py-6 text-lg rounded-xl border-2 transition-all duration-200",
                "focus:border-red-500 focus:ring-2 focus:ring-red-200",
                "hover:border-gray-300",
                "placeholder:text-gray-400"
              )}
            />
            {isSearching && (
              <Loader2 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 animate-spin" size={20} />
            )}
            {searchQuery && !isSearching && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSuggestions(popularSearches);
                }}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X size={20} />
              </button>
            )}
          </div>

          {/* Search Suggestions Dropdown */}
          {showSuggestions && (searchQuery || suggestions.length > 0) && (
            <div className="absolute z-50 w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 max-h-60 overflow-y-auto">
              {suggestions.length > 0 ? (
                <div className="py-2">
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className={cn(
                        "w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors",
                        "flex items-center gap-2",
                        "focus:outline-none focus:bg-gray-50"
                      )}
                    >
                      <Search size={16} className="text-gray-400" />
                      <span>{suggestion}</span>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="px-4 py-3 text-gray-500 text-center">
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
            "flex items-center gap-2 transition-colors h-[52px] px-6",
            showFilters ? "bg-red-50 border-red-200 text-red-700" : ""
          )}
        >
          <Filter size={20} />
          Filters
          {showFilters ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </Button>
      </div>

      {/* Search Tips */}
      {!searchQuery && (
        <div className="mt-2 text-sm text-gray-500">
          Try searching for: chicken wings, catfish, party pans, or beverages
        </div>
      )}
    </div>
  );
}

export default function MenuPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 50]);
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { id: "CHICKEN", label: "Chicken", icon: "🍗" },
    { id: "FISH & SEAFOOD", label: "Fish & Seafood", icon: "🐟" },
    { id: "APPETIZERS & SIDES", label: "Appetizers & Sides", icon: "🥗" },
    { id: "BEVERAGES", label: "Beverages", icon: "🥤" },
    { id: "PARTY PANS", label: "Party Pans", icon: "🎉" },
    { id: "FISH COMBOS", label: "Fish Combos", icon: "🍽️" },
    { id: "DESSERTS", label: "Desserts", icon: "🍪" },
    { id: "SAUCES & EXTRAS", label: "Sauces & Extras", icon: "🧂" }
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
    setPriceRange([0, 50]);
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

  return (
    <div className="bg-white min-h-screen pb-16">
      <Header variant="white" />
      <MenuBanner />
      <Container as="main" className="pt-8">
        {/* Enhanced Search and Filter Section */}
        <div className="mb-8 space-y-4">
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            showFilters={showFilters}
            setShowFilters={setShowFilters}
          />

          {/* Enhanced Filter Panel */}
          {showFilters && (
            <div className="bg-gray-50 p-6 rounded-lg space-y-6 border border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">Filter Menu</h3>
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
                <h4 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <Tag size={18} />
                  Categories
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={selectedCategories.includes(category.id) ? "default" : "outline"}
                      className={cn(
                        "w-full justify-start gap-2 transition-colors",
                        selectedCategories.includes(category.id)
                          ? "bg-red-700 text-white hover:bg-red-800"
                          : "hover:bg-gray-100"
                      )}
                      onClick={() => toggleCategory(category.id)}
                    >
                      <span className="text-lg">{category.icon}</span>
                      {category.label}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h4 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <DollarSign size={18} />
                  Price Range
                </h4>
                <div className="px-2">
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={50}
                    step={1}
                    className="mb-4"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Active Filters Display */}
          {(selectedCategories.length > 0 || searchQuery || priceRange[0] > 0 || priceRange[1] < 50) && (
            <div className="flex flex-wrap gap-2">
              {selectedCategories.map((category) => (
                <Badge
                  key={category}
                  variant="secondary"
                  className="flex items-center gap-1 bg-red-100 text-red-700"
                >
                  {categories.find(c => c.id === category)?.icon} {categories.find(c => c.id === category)?.label}
                  <X
                    size={14}
                    className="cursor-pointer hover:text-red-800"
                    onClick={() => toggleCategory(category)}
                  />
                </Badge>
              ))}
              {searchQuery && (
                <Badge variant="secondary" className="flex items-center gap-1 bg-red-100 text-red-700">
                  Search: {searchQuery}
                  <X
                    size={14}
                    className="cursor-pointer hover:text-red-800"
                    onClick={() => setSearchQuery("")}
                  />
                </Badge>
              )}
              {(priceRange[0] > 0 || priceRange[1] < 50) && (
                <Badge variant="secondary" className="flex items-center gap-1 bg-red-100 text-red-700">
                  Price: ${priceRange[0]} - ${priceRange[1]}
                  <X
                    size={14}
                    className="cursor-pointer hover:text-red-800"
                    onClick={() => setPriceRange([0, 50])}
                  />
                </Badge>
              )}
            </div>
          )}
        </div>

        {/* MAIN MENU SECTIONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* CHICKEN SECTION - Long section */}
          {(!selectedCategories.length || selectedCategories.includes("CHICKEN")) && (
            <Card className="bg-white text-black border-red-700 h-full">
              <CardHeader className="bg-red-700 rounded-t-xl p-6">
                <CardTitle className="text-3xl text-white tracking-wider text-center">CHICKEN</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-8">
                {/* Wing Dinners */}
                <div>
                  <h3 className="text-2xl text-red-700 font-bold mb-4">Wing Dinners</h3>
                  <ul className="space-y-2">
                    {filterMenuItems([
                      { name: "4 Wings", price: 8 },
                      { name: "6 Wings", price: 9.5 },
                      { name: "8 Wings", price: 11.5 },
                      { name: "10 Wings", price: 12 },
                      { name: "Extra Wing", price: 3 }
                    ]).map((item, index) => (
                      <MenuItem key={index} {...item} />
                    ))}
                  </ul>
                </div>

                {/* Chicken Tenders */}
                <div>
                  <h3 className="text-2xl text-red-700 font-bold mb-4">Chicken Tenders</h3>
                  <ul className="space-y-2">
                    {filterMenuItems([
                      { name: "Tenders 4 pcs", price: 7 },
                      { name: "Tenders 6 pcs", price: 8.5 },
                      { name: "Tenders 8 pcs", price: 10.5 }
                    ]).map((item, index) => (
                      <MenuItem key={index} {...item} />
                    ))}
                  </ul>
                </div>

                {/* Chicken Pieces */}
                <div>
                  <h3 className="text-2xl text-red-700 font-bold mb-4">Chicken Pieces</h3>
                  <ul className="space-y-2">
                    {filterMenuItems([
                      { name: "1/4 White", price: 7 },
                      { name: "1/4 Dark", price: 5.5 },
                      { name: "1/2 White", price: 11 },
                      { name: "1/2 Dark", price: 9.5 },
                      { name: "1/2 Mixed", price: 9 },
                      { name: "8 pc Mixed", price: 14 },
                      { name: "16 pc Mixed", price: 20 },
                      { name: "24 pc Mixed", price: 26.5 },
                      { name: "Extra Leg or Thigh", price: 3.5 },
                      { name: "Extra Breast", price: 3.5 }
                    ]).map((item, index) => (
                      <MenuItem key={index} {...item} />
                    ))}
                  </ul>
                </div>

                {/* Specialty Chicken Items */}
                <div>
                  <h3 className="text-2xl text-red-700 font-bold mb-4">Specialty Chicken Items</h3>
                  <ul className="space-y-2">
                    {filterMenuItems([
                      { name: "Chicken Sandwich", price: 10.5 },
                      { name: "Chicken & Waffles", price: 9.5 }
                    ]).map((item, index) => (
                      <MenuItem key={index} {...item} />
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          )}

          {/* FISH & SEAFOOD SECTION - Long section */}
          {(!selectedCategories.length || selectedCategories.includes("FISH & SEAFOOD")) && (
            <Card className="bg-white text-black border-red-700 h-full">
              <CardHeader className="bg-red-700 rounded-t-xl p-6">
                <CardTitle className="text-3xl text-white tracking-wider text-center">FISH & SEAFOOD</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-8">
                {/* Catfish */}
                <div>
                  <h3 className="text-2xl text-red-700 font-bold mb-4">Catfish</h3>
                  <ul className="space-y-2">
                    {filterMenuItems([
                      { name: "Small Catfish", price: 14 },
                      { name: "Large Catfish", price: 22 },
                      { name: "12 pc Catfish", price: 42 },
                      { name: "Small Cat Nugget", price: 14 },
                      { name: "Large Cat Nugget", price: 19 },
                      { name: "Extra Catfish", price: 6 }
                    ]).map((item, index) => (
                      <MenuItem key={index} {...item} />
                    ))}
                  </ul>
                </div>

                {/* Perch */}
                <div>
                  <h3 className="text-2xl text-red-700 font-bold mb-4">Perch</h3>
                  <ul className="space-y-2">
                    {filterMenuItems([
                      { name: "Small Perch", price: 15 },
                      { name: "Large Perch", price: 22 },
                      { name: "12 pc Perch", price: 47 },
                      { name: "Extra Perch", price: 6 }
                    ]).map((item, index) => (
                      <MenuItem key={index} {...item} />
                    ))}
                  </ul>
                </div>

                {/* Whiting */}
                <div>
                  <h3 className="text-2xl text-red-700 font-bold mb-4">Whiting</h3>
                  <ul className="space-y-2">
                    {filterMenuItems([
                      { name: "Small Whiting", price: 15 },
                      { name: "Large Whiting", price: 21 }
                    ]).map((item, index) => (
                      <MenuItem key={index} {...item} />
                    ))}
                  </ul>
                </div>

                {/* Shrimp */}
                <div>
                  <h3 className="text-2xl text-red-700 font-bold mb-4">Shrimp</h3>
                  <ul className="space-y-2">
                    {filterMenuItems([
                      { name: "8 pc Shrimp", price: 20 },
                      { name: "Buffalo Shrimp", price: 22 },
                      { name: "Extra Shrimp", price: 11 }
                    ]).map((item, index) => (
                      <MenuItem key={index} {...item} />
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          )}

          {/* SAUCES & EXTRAS SECTION - Long section */}
          {(!selectedCategories.length || selectedCategories.includes("SAUCES & EXTRAS")) && (
            <Card className="bg-white text-black border-red-700 h-full">
              <CardHeader className="bg-red-700 rounded-t-xl p-6">
                <CardTitle className="text-3xl text-white tracking-wider text-center">SAUCES & EXTRAS</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-8">
                {/* Harold's Signature Sauces */}
                <div>
                  <h3 className="text-2xl text-red-700 font-bold mb-4">Harold's Signature Sauces</h3>
                  <ul className="space-y-2">
                    {filterMenuItems([
                      { name: "Harold's Signature Sauce Bottle", price: 19 },
                      { name: "Squirt Bottle", price: 13 },
                      { name: "Gallon Mild Sauce", price: 35 },
                      { name: "2 oz Mild", price: 1 }
                    ]).map((item, index) => (
                      <MenuItem key={index} {...item} />
                    ))}
                  </ul>
                </div>

                {/* Condiments & Extras */}
                <div>
                  <h3 className="text-2xl text-red-700 font-bold mb-4">Condiments & Extras</h3>
                  <ul className="space-y-2">
                    {filterMenuItems([
                      { name: "2oz Mild Sauce", price: 2 },
                      { name: "Hot Sauce", price: 2 },
                      { name: 'Hot Pepper "3"', price: 2 },
                      { name: "Cole Slaw (Half Pint)", price: 5 },
                      { name: "Cole Slaw (Pint)", price: 7 },
                      { name: "Extra lemon pepper", price: 0.75 },
                      { name: "Extra leg", price: 7 },
                      { name: "Extra thigh", price: 7 },
                      { name: "Extra breast", price: 7 },
                      { name: "Extra wing", price: 6 },
                      { name: "Extra tender", price: 5 },
                      { name: "Extra catfish", price: 7 },
                      { name: "Extra perch", price: 7 },
                      { name: "Extra shrimp", price: 11 }
                    ]).map((item, index) => (
                      <MenuItem key={index} {...item} />
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          )}

          {/* APPETIZERS & SIDES SECTION - Medium section */}
          {(!selectedCategories.length || selectedCategories.includes("APPETIZERS & SIDES")) && (
            <Card className="bg-white text-black border-red-700 h-full">
              <CardHeader className="bg-red-700 rounded-t-xl p-6">
                <CardTitle className="text-3xl text-white tracking-wider text-center">APPETIZERS & SIDES</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-8">
                {/* Fried Appetizers */}
                <div>
                  <h3 className="text-2xl text-red-700 font-bold mb-4">Fried Appetizers</h3>
                  <ul className="space-y-2">
                    {filterMenuItems([
                      { name: "Jalapeno Poppers", price: 11 },
                      { name: "Mac & Cheese Bites", price: 11 },
                      { name: "Mac & Cheese Bites (alternate)", price: 9 },
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
                    ]).map((item, index) => (
                      <MenuItem key={index} {...item} />
                    ))}
                  </ul>
                </div>

                {/* Sides */}
                <div>
                  <h3 className="text-2xl text-red-700 font-bold mb-4">Sides</h3>
                  <ul className="space-y-2">
                    {filterMenuItems([
                      { name: "Okra 1/2 lb", price: 5 },
                      { name: "Okra 1 lb", price: 10 },
                      { name: "Coleslaw 2 oz", price: 1 },
                      { name: "Coleslaw 8 oz", price: 5 },
                      { name: "Coleslaw 16 oz", price: 9 },
                      { name: "Small Fry", price: 4 },
                      { name: "Large Fry", price: 7 }
                    ]).map((item, index) => (
                      <MenuItem key={index} {...item} />
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          )}

          {/* BEVERAGES SECTION - Medium section */}
          {(!selectedCategories.length || selectedCategories.includes("BEVERAGES")) && (
            <Card className="bg-white text-black border-red-700 h-full">
              <CardHeader className="bg-red-700 rounded-t-xl p-6">
                <CardTitle className="text-3xl text-white tracking-wider text-center">BEVERAGES</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-8">
                {/* Specialty Cocktails */}
                <div>
                  <h3 className="text-2xl text-red-700 font-bold mb-4">Specialty Cocktails</h3>
                  <ul className="space-y-3">
                    {filterCocktails([
                      { name: "K Sago Sunset", price: 9, ingredients: ["Don Julio Reposado","Orange Juice","Fresh Lime Juice","Splash Grenadine","Orange and Cherry"] },
                      { name: "Mayweather Margarita", price: 13.5, ingredients: ["Hennessy","Tequila","Triple Sec","Fresh Lime Juice","Splash of Orange Juice","Orange Slice"] },
                      { name: "Tasha's Tropical Twist", price: 8.5, ingredients: ["Malibu Rum","Curacao","Pineapple Juice","Fresh Lime Juice","Cherry"] },
                      { name: "Joni's Jumper", price: 7, ingredients: ["Vodka","Mix-berry Puree","Fresh Lemon Juice","Club Soda","Lime"] },
                      { name: "LaMello's LemonADE", price: 9, ingredients: ["Crown Royal Peach","Lemonade","Sprite","Grenadine","Peach"] },
                      { name: "A Shedeur Summer", price: 7.5, ingredients: ["Vodka","Peach Schnapps","Strawberry Puree","Orange Juice","Splash Sprite","Orange"] },
                      { name: "The MRJ", price: 12.5, ingredients: ["Patron Reposado","Triple Sec","Dragon Fruit","Pineapple Juice","Fresh Lime","Lime"] },
                      { name: "Tha D Rose", price: 11, ingredients: ["Vodka","Rum","Gin","Peach Schnapps","Strawberry","Sprite","Lemon"] }
                    ]).map((cocktail, index) => (
                      <Cocktail key={index} {...cocktail} />
                    ))}
                  </ul>
                </div>

                {/* Non-Alcoholic Beverages */}
                <div>
                  <h3 className="text-2xl text-red-700 font-bold mb-4">Non-Alcoholic Beverages</h3>
                  <ul className="space-y-2">
                    {filterMenuItems([
                      { name: "Bottled Water", price: 4 },
                      { name: "Soft Drinks", price: 6 },
                      { name: "Calypso", price: 6 },
                      { name: "Special Flavored Lemonades", price: 4, note: "no free refill" },
                      { name: "Can Soda", price: 3 }
                    ]).map((item, index) => (
                      <MenuItem key={index} {...item} />
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          )}

          {/* FISH COMBOS SECTION - Medium section */}
          {(!selectedCategories.length || selectedCategories.includes("FISH COMBOS")) && (
            <Card className="bg-white text-black border-red-700 h-full">
              <CardHeader className="bg-red-700 rounded-t-xl p-6">
                <CardTitle className="text-3xl text-white tracking-wider text-center">FISH COMBOS</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-2">
                  {filterMenuItems([
                    { name: "Catfish & 1/4 Chicken (White)", price: 27 },
                    { name: "Perch & 1/4 Chicken (Dark)", price: 23 },
                    { name: "Perch & 1/4 Chicken (White)", price: 24 },
                    { name: "2 Catfish & 3 Wings", price: 23 },
                    { name: "2 Perch & 3 Wings", price: 23 },
                    { name: "Liver & 3 Wings", price: 19 },
                    { name: "Gizzard & 3 Wings", price: 19 },
                    { name: "2 Catfish & 5 Shrimp", price: 25.25 },
                    { name: "2 Perch & 5 Shrimp", price: 22.25 },
                    { name: "5 Shrimp & 3 Wings", price: 25.25 },
                    { name: "5 Shrimp & 1/4 Chicken (White)", price: 28 },
                    { name: "5 Shrimp & 1/4 Chicken (Dark)", price: 25 }
                  ]).map((item, index) => (
                    <MenuItem key={index} {...item} />
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {/* Full width row container */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* PARTY PANS SECTION */}
            {(!selectedCategories.length || selectedCategories.includes("PARTY PANS")) && (
              <Card className="bg-white text-black border-red-700 h-full">
                <CardHeader className="bg-red-700 rounded-t-xl p-6">
                  <CardTitle className="text-3xl text-white tracking-wider text-center">PARTY PANS</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Wing Party Pans */}
                    <div>
                      <h3 className="text-2xl text-red-700 font-bold mb-4">Wing Party Pans</h3>
                      <ul className="space-y-2">
                        {filterMenuItems([
                          { name: "Party Pan 50 Wings", price: 104 },
                          { name: "Party Pan 75 Wings", price: 132 },
                          { name: "Party Pan 100 Wings", price: 208 },
                          { name: "Party Pan 150 Wings", price: 250 },
                          { name: "Party Pan 200 Wings", price: 348 }
                        ]).map((item, index) => (
                          <MenuItem key={index} {...item} />
                        ))}
                      </ul>
                    </div>

                    {/* Mixed Chicken Party Pans */}
                    <div>
                      <h3 className="text-2xl text-red-700 font-bold mb-4">Mixed Chicken Party Pans</h3>
                      <ul className="space-y-2">
                        {filterMenuItems([
                          { name: "Party Pan 50 pcs Mixed", price: 97 },
                          { name: "Party Pan 100 pcs Mixed", price: 181 },
                          { name: "Party Pan 150 pcs Mixed", price: 243 },
                          { name: "Party Pan 200 pcs Mixed", price: 313 }
                        ]).map((item, index) => (
                          <MenuItem key={index} {...item} />
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* DESSERTS SECTION */}
            {(!selectedCategories.length || selectedCategories.includes("DESSERTS")) && (
              <Card className="bg-white text-black border-red-700 h-full">
                <CardHeader className="bg-red-700 rounded-t-xl p-6">
                  <CardTitle className="text-3xl text-white tracking-wider text-center">DESSERTS</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="max-w-2xl mx-auto">
                    <ul className="space-y-2">
                      {filterMenuItems([
                        { name: "Cookie", price: 7 },
                        { name: "Honey Biscuits (5)", price: 10 },
                        { name: "Honey Biscuits (10)", price: 15 }
                      ]).map((item, index) => (
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