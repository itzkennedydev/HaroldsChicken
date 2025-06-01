import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Container } from "../components/ui/container";

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
    <div className="bg-gray-50 border border-gray-200 rounded-lg px-6 py-5 max-w-lg mx-auto text-center space-y-2 mt-8 mb-10">
      <div className="text-xs md:text-sm text-gray-500">
        <span className="font-medium">Food Safety Notice:</span> Consuming raw or undercooked meats, poultry, seafood, shellfish or eggs may increase your risk of food borne illnesses, especially if you have certain medical conditions.
      </div>
      <div className="text-xs md:text-sm text-gray-500">
        <span className="font-medium">Freshness Commitment:</span> Because freshness is of the utmost importance to us here at Harold's Chicken & Sport Bar, all orders are prepared 'fresh to order'. Although this may at times involve longer than normal wait times, we promise you that our deliciously flavored Chicago style chicken and fish is well worth the wait!
      </div>
      <div className="text-xs md:text-sm text-gray-500">
        <span className="font-medium">Service Charge:</span> 18 percent gratuity
      </div>
    </div>
  );
}

export default function MenuPage() {
  return (
    <div className="bg-white min-h-screen pb-16">
      <Header variant="white" />
      <MenuBanner />
      <Container as="main" className="pt-8">
        {/* MAIN CATEGORIES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-0">
          {/* CHICKEN SECTION */}
          <Card className="bg-white text-black border-red-700">
            <CardHeader className="bg-red-700 rounded-t-xl p-6">
              <CardTitle className="text-3xl text-white tracking-wider text-center">CHICKEN</CardTitle>
            </CardHeader>
            <CardContent className="bg-white text-black p-6">
              {/* Wings */}
              <div className="border-b border-red-700 pb-6 mb-6">
                <h3 className="text-2xl text-red-700 font-bold mb-3">Wings</h3>
                <ul className="space-y-2">
                  <MenuItem name="4 Wings" price={16} />
                  <MenuItem name="6 Wings" price={19} />
                  <MenuItem name="8 Wings" price={23} />
                  <MenuItem name="10 Wings" price={24} />
                  <MenuItem name="12 pc Wings" price={21} />
                  <MenuItem name="18 pc Wings" price={34} />
                  <MenuItem name="24 pc Wings" price={42} />
                  <MenuItem name="Extra Wing" price={6} />
                </ul>
              </div>
              {/* Chicken Tenders */}
              <div className="border-b border-red-700 pb-6 mb-6">
                <h3 className="text-2xl text-red-700 font-bold mb-3">Chicken Tenders</h3>
                <ul className="space-y-2">
                  <MenuItem name="Tenders 4 pcs" price={14} />
                  <MenuItem name="Tenders 6 pcs" price={17} />
                  <MenuItem name="Tenders 8 pcs" price={21} />
                </ul>
              </div>
              {/* Chicken Pieces */}
              <div className="border-b border-red-700 pb-6 mb-6">
                <h3 className="text-2xl text-red-700 font-bold mb-3">Chicken Pieces</h3>
                <ul className="space-y-2">
                  <MenuItem name="1/4 White" price={14} />
                  <MenuItem name="1/4 Dark" price={11} />
                  <MenuItem name="1/2 White" price={22} />
                  <MenuItem name="1/2 Dark" price={19} />
                  <MenuItem name="1/2 Mixed" price={18} />
                  <MenuItem name="8 pc Mixed" price={28} />
                  <MenuItem name="16 pc Mixed" price={40} />
                  <MenuItem name="24 pc Mixed" price={53} />
                  <MenuItem name="Extra Leg or Thigh" price={7} />
                  <MenuItem name="Extra Breast" price={7} />
                </ul>
              </div>
              {/* Gizzards & Livers */}
              <div className="border-b border-red-700 pb-6 mb-6">
                <h3 className="text-2xl text-red-700 font-bold mb-3">Gizzards & Livers</h3>
                <ul className="space-y-2">
                  <MenuItem name="Small Gizzard" price={11} />
                  <MenuItem name="Large Gizzard" price={14} />
                  <MenuItem name="Small Liver" price={10} />
                  <MenuItem name="Large Liver" price={13} />
                </ul>
              </div>
              {/* Specialty Chicken Items */}
              <div>
                <h3 className="text-2xl text-red-700 font-bold mb-3">Specialty Chicken Items</h3>
                <ul className="space-y-2">
                  <MenuItem name="Chicken Sandwich" price={21} />
                  <MenuItem name="Chicken & Waffles" price={19} />
                </ul>
              </div>
            </CardContent>
          </Card>
          {/* FISH & SEAFOOD SECTION */}
          <Card className="bg-white text-black border-red-700">
            <CardHeader className="bg-red-700 rounded-t-xl p-6">
              <CardTitle className="text-3xl text-white tracking-wider text-center">FISH & SEAFOOD</CardTitle>
            </CardHeader>
            <CardContent className="bg-white text-black p-6">
              {/* Catfish */}
              <div className="border-b border-red-700 pb-6 mb-6">
                <h3 className="text-2xl text-red-700 font-bold mb-3">Catfish</h3>
                <ul className="space-y-2">
                  <MenuItem name="Small Catfish" price={14} />
                  <MenuItem name="Large Catfish" price={22} />
                  <MenuItem name="12 pc Catfish" price={42} />
                  <MenuItem name="Small Cat Nugget" price={14} />
                  <MenuItem name="Large Cat Nugget" price={19} />
                  <MenuItem name="Extra Catfish" price={6} />
                </ul>
              </div>
              {/* Perch */}
              <div className="border-b border-red-700 pb-6 mb-6">
                <h3 className="text-2xl text-red-700 font-bold mb-3">Perch</h3>
                <ul className="space-y-2">
                  <MenuItem name="Small Perch" price={15} />
                  <MenuItem name="Large Perch" price={22} />
                  <MenuItem name="12 pc Perch" price={47} />
                  <MenuItem name="Extra Perch" price={6} />
                </ul>
              </div>
              {/* Whiting */}
              <div className="border-b border-red-700 pb-6 mb-6">
                <h3 className="text-2xl text-red-700 font-bold mb-3">Whiting</h3>
                <ul className="space-y-2">
                  <MenuItem name="Small Whiting" price={15} />
                  <MenuItem name="Large Whiting" price={21} />
                </ul>
              </div>
              {/* Shrimp */}
              <div>
                <h3 className="text-2xl text-red-700 font-bold mb-3">Shrimp</h3>
                <ul className="space-y-2">
                  <MenuItem name="8 pc Shrimp" price={20} />
                  <MenuItem name="Buffalo Shrimp" price={22} />
                  <MenuItem name="Extra Shrimp" price={11} />
                </ul>
              </div>
            </CardContent>
          </Card>
          {/* APPETIZERS & SIDES SECTION */}
          <Card className="bg-white text-black border-red-700">
            <CardHeader className="bg-red-700 rounded-t-xl p-6">
              <CardTitle className="text-3xl text-white tracking-wider text-center">APPETIZERS & SIDES</CardTitle>
            </CardHeader>
            <CardContent className="bg-white text-black p-6">
              {/* Fried Appetizers */}
              <div className="border-b border-red-700 pb-6 mb-6">
                <h3 className="text-2xl text-red-700 font-bold mb-3">Fried Appetizers</h3>
                <ul className="space-y-2">
                  <MenuItem name="Jalapeno Poppers" price={11} />
                  <MenuItem name="Mac & Cheese Bites" price={11} />
                  <MenuItem name="Mac & Cheese Bites (alternate)" price={9} />
                  <MenuItem name="Mozz Sticks (3)" price={6} />
                  <MenuItem name="Mozz Sticks (5)" price={8} />
                  <MenuItem name="Mushrooms" price={10} />
                  <MenuItem name="Pizza Puff" price={7} />
                  <MenuItem name="Pizza Puff & Fries" price={10} />
                  <MenuItem name="Zucchini Sticks" price={11} />
                  <MenuItem name="Sweet Corn Bites" price={9} />
                  <MenuItem name="Broccoli n Cheddar Bites" price={9} />
                  <MenuItem name="Spicy Cheese Curds" price={10} />
                  <MenuItem name="Black Bean & Cheese Firecrackers" price={11} />
                </ul>
              </div>
              {/* Okra */}
              <div className="border-b border-red-700 pb-6 mb-6">
                <h3 className="text-2xl text-red-700 font-bold mb-3">Okra</h3>
                <ul className="space-y-2">
                  <MenuItem name="Okra 1/2 lb" price={5} />
                  <MenuItem name="Okra 1 lb" price={10} />
                </ul>
              </div>
              {/* Coleslaw */}
              <div>
                <h3 className="text-2xl text-red-700 font-bold mb-3">Coleslaw</h3>
                <ul className="space-y-2">
                  <MenuItem name="Coleslaw 2 oz" price={1} />
                  <MenuItem name="Coleslaw 8 oz" price={5} />
                  <MenuItem name="Coleslaw 16 oz" price={9} />
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* SAUCES & EXTRAS + BEVERAGES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 mt-10">
          {/* SAUCES & EXTRAS SECTION */}
          <Card className="bg-white text-black border-red-700">
            <CardHeader className="bg-red-700 rounded-t-xl p-6">
              <CardTitle className="text-3xl text-white tracking-wider text-center">SAUCES & EXTRAS</CardTitle>
            </CardHeader>
            <CardContent className="bg-white text-black p-6">
              {/* Harold's Signature Sauces */}
              <div className="border-b border-red-700 pb-6 mb-6">
                <h3 className="text-2xl text-red-700 font-bold mb-3">Harold's Signature Sauces</h3>
                <ul className="space-y-2">
                  <MenuItem name="Harold's Signature Sauce Bottle" price={19} />
                  <MenuItem name="Squirt Bottle" price={13} />
                  <MenuItem name="Gallon Mild Sauce" price={35} />
                  <MenuItem name="2 oz Mild" price={1} />
                </ul>
              </div>
              {/* Condiments & Extras */}
              <div>
                <h3 className="text-2xl text-red-700 font-bold mb-3">Condiments & Extras</h3>
                <ul className="space-y-2">
                  <MenuItem name="Extra Bread" price={1} />
                  <MenuItem name="2 oz Ranch" price={1} />
                  <MenuItem name="Hot Peppers" price={1} />
                </ul>
              </div>
            </CardContent>
          </Card>
          {/* BEVERAGES SECTION */}
          <Card className="bg-white text-black border-red-700">
            <CardHeader className="bg-red-700 rounded-t-xl p-6">
              <CardTitle className="text-3xl text-white tracking-wider text-center">BEVERAGES</CardTitle>
            </CardHeader>
            <CardContent className="bg-white text-black p-6">
              {/* Specialty Cocktails */}
              <div className="border-b border-red-700 pb-6 mb-6">
                <h3 className="text-2xl text-red-700 font-bold mb-3">Specialty Cocktails</h3>
                <ul className="space-y-3">
                  <Cocktail name="K Sago Sunset" price={9} ingredients={["Don Julio Reposado","Orange Juice","Fresh Lime Juice","Splash Grenadine","Orange and Cherry"]} />
                  <Cocktail name="Mayweather Margarita" price={13.5} ingredients={["Hennessy","Tequila","Triple Sec","Fresh Lime Juice","Splash of Orange Juice","Orange Slice"]} />
                  <Cocktail name="Tasha's Tropical Twist" price={8.5} ingredients={["Malibu Rum","Curacao","Pineapple Juice","Fresh Lime Juice","Cherry"]} />
                  <Cocktail name="Joni's Jumper" price={7} ingredients={["Vodka","Mix-berry Puree","Fresh Lemon Juice","Club Soda","Lime"]} />
                  <Cocktail name="LaMello's LemonADE" price={9} ingredients={["Crown Royal Peach","Lemonade","Sprite","Grenadine","Peach"]} />
                  <Cocktail name="A Shedeur Summer" price={7.5} ingredients={["Vodka","Peach Schnapps","Strawberry Puree","Orange Juice","Splash Sprite","Orange"]} />
                  <Cocktail name="The MRJ" price={12.5} ingredients={["Patron Reposado","Triple Sec","Dragon Fruit","Pineapple Juice","Fresh Lime","Lime"]} />
                  <Cocktail name="Tha D Rose" price={11} ingredients={["Vodka","Rum","Gin","Peach Schnapps","Strawberry","Sprite","Lemon"]} />
                </ul>
              </div>
              {/* Non-Alcoholic Beverages */}
              <div>
                <h3 className="text-2xl text-red-700 font-bold mb-3">Non-Alcoholic Beverages</h3>
                <ul className="space-y-2">
                  <MenuItem name="Bottled Water" price={4} />
                  <MenuItem name="Soft Drinks" price={6} />
                  <MenuItem name="Calypso" price={6} />
                  <MenuItem name="Can Soda" price={3} />
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* PARTY PANS SECTION - moved here */}
        <Card className="mb-10 bg-white text-black border-red-700">
          <CardHeader className="bg-red-700 rounded-t-xl p-6">
            <CardTitle className="text-3xl text-white tracking-wider text-center">PARTY PANS</CardTitle>
          </CardHeader>
          <CardContent className="bg-white text-black p-6">
            {/* Wing Party Pans */}
            <div className="border-b border-red-700 pb-6 mb-6">
              <h3 className="text-2xl text-red-700 font-bold mb-3">Wing Party Pans</h3>
              <ul className="space-y-2">
                <MenuItem name="Party Pan 50 Wings" price={104} />
                <MenuItem name="Party Pan 75 Wings" price={132} />
                <MenuItem name="Party Pan 100 Wings" price={208} />
                <MenuItem name="Party Pan 150 Wings" price={250} />
                <MenuItem name="Party Pan 200 Wings" price={348} />
              </ul>
            </div>
            {/* Mixed Chicken Party Pans */}
            <div>
              <h3 className="text-2xl text-red-700 font-bold mb-3">Mixed Chicken Party Pans</h3>
              <ul className="space-y-2">
                <MenuItem name="Party Pan 50 pcs Mixed" price={97} />
                <MenuItem name="Party Pan 100 pcs Mixed" price={181} />
                <MenuItem name="Party Pan 150 pcs Mixed" price={243} />
                <MenuItem name="Party Pan 200 pcs Mixed" price={313} />
              </ul>
            </div>
          </CardContent>
        </Card>
        {/* DESSERTS SECTION */}
        <Card className="mb-10 bg-white text-black border-red-700">
          <CardHeader className="bg-red-700 rounded-t-xl p-6">
            <CardTitle className="text-3xl text-white tracking-wider text-center">DESSERTS</CardTitle>
          </CardHeader>
          <CardContent className="bg-white text-black p-6">
            <MenuItem name="Cookie" price={7} />
          </CardContent>
        </Card>
        {/* NOTICES BANNER */}
        <MenuNotices />
      </Container>
      <Footer />
    </div>
  );
}

function MenuItem({ name, price }: { name: string; price: number }) {
  return (
    <li className="flex justify-between items-center text-lg md:text-xl font-semibold text-black">
      <span>{name}</span>
      <span className="text-red-700 font-bold text-xl md:text-2xl">${price}</span>
    </li>
  );
}

function Cocktail({ name, price, ingredients }: { name: string; price: number; ingredients: string[] }) {
  return (
    <li>
      <div className="flex justify-between items-center text-lg md:text-xl font-semibold text-black">
        <span>{name}</span>
        <span className="text-red-700 font-bold text-xl md:text-2xl">${price}</span>
      </div>
      <ul className="ml-2 text-base text-gray-700 list-disc list-inside">
        {ingredients.map((ing, i) => (
          <li key={i}>{ing}</li>
        ))}
      </ul>
    </li>
  );
} 