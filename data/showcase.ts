export interface ShowcaseCategory {
  id: string;
  eyebrow: string;
  title: string;
  shortName: string;
  description: string;
  suitableFor: string[];
  benefits: string[];
  primaryCta: string;
  secondaryCta: string;
  image: string;
  iconName: string;
  rolePrimary: "gym-owner" | "wellness";
  spaceTypePrimary: string;
  roleSecondary: "gym-owner" | "wellness";
  categorySecondary: string;
}

export const SHOWCASE_CATEGORIES: ShowcaseCategory[] = [
  {
    id: "packaged-foods-snacks",
    eyebrow: "Category 01",
    title: "Supermarket Packaged Foods & Snacks",
    shortName: "Packaged Foods & Snacks",
    description:
      "Display packaged snacks, biscuits, chips, roasted products, gourmet foods, healthy munchies, breakfast products, and specialty food items on visible supermarket shelves and promotional display racks.",
    suitableFor: [
      "Packaged snacks",
      "Chips & crisps",
      "Biscuits",
      "Breakfast products",
      "Roasted snacks",
      "Gourmet foods",
      "Healthy packaged foods",
    ],
    benefits: [
      "Prime supermarket shelf placement",
      "High visibility among active shoppers",
      "Product discovery and impulse purchases",
      "Additional rental income for supermarket owners",
      "Affordable offline exposure for growing brands",
    ],
    primaryCta: "List Supermarket Space",
    secondaryCta: "Find Space for Packaged Foods",
    image: "/categories/packaged-snacks.png",
    iconName: "ShoppingBag",
    rolePrimary: "gym-owner",
    spaceTypePrimary: "Supermarket Shelf Display",
    roleSecondary: "wellness",
    categorySecondary: "Packaged Foods & FMCG",
  },
  {
    id: "beverages-ready-to-drink",
    eyebrow: "Category 02",
    title: "Supermarket Beverages & Ready-to-Drink Products",
    shortName: "Beverages & Ready-to-Drink Products",
    description:
      "Feature cold brews, artisan juices, sparkling waters, energy drinks, kombucha, iced teas, and functional beverages in supermarket beverage racks and refrigerated display zones.",
    suitableFor: [
      "Cold brew coffees",
      "Artisan juices & smoothies",
      "Sparkling water & sodas",
      "Energy & sports drinks",
      "Kombucha & probiotic drinks",
      "Flavored iced teas",
      "Functional wellness drinks",
    ],
    benefits: [
      "Top placement in high-traffic beverage aisles",
      "Direct reach to thirsty, active shoppers",
      "High repeat-purchase FMCG category",
      "Increased store checkout impulse buys",
      "Flexible weekly & monthly retail space rentals",
    ],
    primaryCta: "List Supermarket Drink Space",
    secondaryCta: "Find Space for Beverages",
    image: "/categories/desserts-chocolates.png",
    iconName: "Sparkles",
    rolePrimary: "gym-owner",
    spaceTypePrimary: "Refrigerated / Shelf Display",
    roleSecondary: "wellness",
    categorySecondary: "Beverages & Ready-to-Drink Products",
  },
  {
    id: "healthy-foods-wellness",
    eyebrow: "Category 03",
    title: "Supermarket Healthy Foods & Wellness Products",
    shortName: "Healthy Foods & Wellness Products",
    description:
      "Showcase organic snacks, protein bars, superfood mixes, gluten-free items, granolas, seeds, and wellness supplements on dedicated health food shelves inside busy supermarkets.",
    suitableFor: [
      "Organic snacks & dry fruits",
      "Protein & energy bars",
      "Superfood powder mixes",
      "Gluten-free & keto products",
      "Granolas & muesli",
      "Nutritional supplements",
      "Herbal & green teas",
    ],
    benefits: [
      "Reach health-conscious supermarket shoppers",
      "High footfall in organic & wellness aisles",
      "Premium product positioning in retail stores",
      "High repeat customer purchases",
      "Great for emerging D2C wellness brands",
    ],
    primaryCta: "List Wellness Display Space",
    secondaryCta: "Find Space for Healthy Foods",
    image: "/categories/healthy-foods.png",
    iconName: "ShoppingBag",
    rolePrimary: "gym-owner",
    spaceTypePrimary: "Supermarket Shelf Display",
    roleSecondary: "wellness",
    categorySecondary: "Healthy Foods & Wellness Products",
  },
  {
    id: "personal-care-beauty",
    eyebrow: "Category 04",
    title: "Supermarket Personal Care & Beauty",
    shortName: "Personal Care & Beauty",
    description:
      "Rent display rack space inside supermarkets for skincare products, organic soaps, hair care essentials, body lotions, natural cosmetics, and personal grooming accessories.",
    suitableFor: [
      "Natural skincare essentials",
      "Handmade organic soaps",
      "Hair care oils & shampoos",
      "Body lotions & scrubs",
      "Clean beauty cosmetics",
      "Grooming & personal care items",
    ],
    benefits: [
      "High visibility in personal care store sections",
      "Complements daily supermarket shopping runs",
      "Broad appeal to household decision-makers",
      "Long shelf-life personal care items",
      "Flexible end-cap & shelf display options",
    ],
    primaryCta: "List Personal Care Space",
    secondaryCta: "Find Space for Personal Care",
    image: "/categories/beverages.png",
    iconName: "HeartHandshake",
    rolePrimary: "gym-owner",
    spaceTypePrimary: "End-Cap Display",
    roleSecondary: "wellness",
    categorySecondary: "Personal Care & Beauty",
  },
  {
    id: "household-cleaning",
    eyebrow: "Category 05",
    title: "Supermarket Household & Cleaning Products",
    shortName: "Household & Cleaning Products",
    description:
      "Feature eco-friendly cleaning solutions, home care supplies, dishwashing gels, paper products, and household utility items on prominent retail shelves.",
    suitableFor: [
      "Eco-friendly cleaning agents",
      "Dishwashing gels & detergents",
      "Air fresheners & room sprays",
      "Bamboo & paper products",
      "Surface cleaners & wipes",
      "Household utility supplies",
    ],
    benefits: [
      "Essential daily-need category with consistent demand",
      "High average order quantity per customer",
      "Strong supermarket footfall conversion",
      "Steady monthly rental income for store owners",
      "Affordable retail access for homecare brands",
    ],
    primaryCta: "List Household Product Space",
    secondaryCta: "Find Space for Household Products",
    image: "/categories/artisanal-products.png",
    iconName: "Gift",
    rolePrimary: "gym-owner",
    spaceTypePrimary: "Supermarket Shelf Display",
    roleSecondary: "wellness",
    categorySecondary: "Household & Cleaning Products",
  },
  {
    id: "specialty-foods-local",
    eyebrow: "Category 06",
    title: "Supermarket Specialty Foods & Local Brands",
    shortName: "Specialty Foods & Local Brands",
    description:
      "Display regional delicacies, artisanal sauces, spice blends, specialty pickles, gourmet preserves, and handcrafted food items on promotional supermarket feature stands.",
    suitableFor: [
      "Regional snacks & sweets",
      "Artisanal sauces & dips",
      "Authentic spice blends",
      "Gourmet pickles & jams",
      "Handcrafted specialty foods",
    ],
    benefits: [
      "Attract foodies and curious supermarket shoppers",
      "High perceived value & local product appeal",
      "Strong impulse buying near entrance & checkout",
      "Ideal for local manufacturers & food startups",
      "Enhances store product variety and uniqueness",
    ],
    primaryCta: "List Specialty Food Space",
    secondaryCta: "Find Space for Specialty Foods",
    image: "/categories/lifestyle-accessories.png",
    iconName: "Sparkles",
    rolePrimary: "gym-owner",
    spaceTypePrimary: "Promotional Feature Stand",
    roleSecondary: "wellness",
    categorySecondary: "Specialty Foods & Local Brands",
  },
];

export const SHOWCASE_TRUST_ITEMS = [
  { label: "Verified Supermarket Spaces", desc: "Curated & footfall-checked", iconName: "ShieldCheck" },
  { label: "High Customer Footfall", desc: "Active supermarket shoppers", iconName: "Users" },
  { label: "Flexible Display Formats", desc: "Shelves, counters, racks & display corners", iconName: "Layers" },
  { label: "Dedicated Brand Support", desc: "Pan-India matching team", iconName: "Headphones" },
  { label: "Pan India Expansion", desc: "Growing supermarket partner network", iconName: "MapPin" },
];


