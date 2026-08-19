export interface OpportunityExample {
  id: string;
  title: string;
  location: string;
  spaceType: string;
  suitableFor: string;
  approxSize: string;
  arrangement: string;
  badgeText: string;
  description: string;
  bgGradient: string;
}

export const SAMPLE_OPPORTUNITIES: OpportunityExample[] = [
  {
    id: "supermarket-shelf-display",
    title: "Eye-Level Supermarket Aisle Shelf",
    location: "Hyderabad (Banjara Hills / Jubilee Hills)",
    spaceType: "Eye-Level Shelf Display inside high-footfall supermarket",
    suitableFor: "Packaged snacks, biscuits, chips, roasted products & gourmet foods",
    approxSize: "4 ft x 2 ft display shelf",
    arrangement: "Monthly Supermarket Space Rental",
    badgeText: "Featured Supermarket",
    description: "Prime eye-level shelf display inside a popular supermarket serving 1000+ daily shoppers.",
    bgGradient: "from-[#3D0710] to-[#6B0F1A]"
  },
  {
    id: "checkout-counter-rack",
    title: "Checkout Register Impulse Rack",
    location: "Vijayawada (MG Road area)",
    spaceType: "Countertop display stand right beside supermarket billing register",
    suitableFor: "Energy bars, chewing gums, artisan chocolates & grab-and-go snacks",
    approxSize: "3 ft countertop display rack",
    arrangement: "Weekly / Monthly Space Rental",
    badgeText: "High Footfall",
    description: "Top impulse-buy location right at the billing counter capturing every supermarket shopper during checkout.",
    bgGradient: "from-yellow-950/90 to-amber-950/90"
  },
  {
    id: "endcap-promotional-display",
    title: "High-Visibility Aisle End-Cap Rack",
    location: "Bengaluru (Indiranagar / HSR Layout)",
    spaceType: "Promotional end-cap display stand at major aisle intersection",
    suitableFor: "Beverages, functional drinks, healthy snacks & personal care items",
    approxSize: "4 ft x 1.5 ft end-cap unit",
    arrangement: "Monthly Sublet Space Arrangement",
    badgeText: "Prime End-Cap",
    description: "Illuminated end-cap display positioned at the intersection of main grocery aisles.",
    bgGradient: "from-[#3D0710] to-[#6B0F1A]"
  },
  {
    id: "beverage-chilled-rack",
    title: "Chilled Beverage & Fridge Rack Space",
    location: "Visakhapatnam (Beach Road area)",
    spaceType: "Refrigerated shelf space in drink section",
    suitableFor: "Cold brews, sparkling juices, kombucha & energy drinks",
    approxSize: "4 ft x 1.5 ft fridge shelf",
    arrangement: "Monthly Supermarket Sublet",
    badgeText: "Chilled Rack",
    description: "Eye-catching refrigerated shelf space inside a bustling coastal retail supermarket.",
    bgGradient: "from-amber-900/90 to-stone-900/90"
  },
  {
    id: "wellness-health-corner",
    title: "Healthy Foods & Organic Corner",
    location: "Chennai (Velachery area)",
    spaceType: "Feature shelf corner near organic food section",
    suitableFor: "Organic foods, gluten-free snacks, protein bars & superfood mixes",
    approxSize: "3.5 ft retail showcase",
    arrangement: "Monthly Space Rental",
    badgeText: "Health & Organic",
    description: "Premium retail display corner ideal for health-conscious shoppers and wellness products.",
    bgGradient: "from-rose-950/90 to-pink-950/90"
  },
  {
    id: "entrance-feature-stand",
    title: "Store Entrance Feature Display Unit",
    location: "Guntur (Lakshmipuram area)",
    spaceType: "Floor-standing promotional display unit near store entrance",
    suitableFor: "Specialty foods, new FMCG launches, regional snacks & gift packs",
    approxSize: "5 ft x 2 ft promotional rack",
    arrangement: "Flexible Monthly Rental",
    badgeText: "High Visibility",
    description: "High-impact entrance spot inside a busy supermarket attracting store walk-in traffic.",
    bgGradient: "from-purple-950/90 to-rose-950/90"
  }
];


