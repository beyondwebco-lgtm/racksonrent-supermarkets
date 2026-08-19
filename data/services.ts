export interface ServiceSupported {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: "packaged" | "beverages" | "healthy" | "display";
}

export const SERVICES_SUPPORTED: ServiceSupported[] = [
  {
    id: "packaged-foods",
    title: "Packaged Foods & Snacks",
    description: "Packaged snacks, biscuits, chips, roasted products, gourmet foods, and breakfast items.",
    iconName: "ShoppingBag",
    category: "packaged"
  },
  {
    id: "beverages-rtd",
    title: "Beverages & Ready-to-Drink Products",
    description: "Cold brews, juices, sparkling waters, energy drinks, kombucha, and functional beverages.",
    iconName: "Sparkles",
    category: "beverages"
  },
  {
    id: "healthy-wellness",
    title: "Healthy Foods & Wellness Products",
    description: "Organic snacks, protein bars, superfood mixes, gluten-free items, and supplements.",
    iconName: "ShoppingBag",
    category: "healthy"
  },
  {
    id: "personal-care",
    title: "Personal Care & Beauty",
    description: "Skincare products, organic soaps, hair care essentials, body care, and cosmetics.",
    iconName: "HeartHandshake",
    category: "packaged"
  },
  {
    id: "household-cleaning",
    title: "Household & Cleaning Products",
    description: "Eco-friendly cleaners, home care supplies, paper products, and household items.",
    iconName: "Gift",
    category: "packaged"
  },
  {
    id: "specialty-foods",
    title: "Specialty Foods & Local Brands",
    description: "Regional delicacies, artisanal sauces, spice blends, and handcrafted food items.",
    iconName: "Sparkles",
    category: "display"
  },
  {
    id: "supermarket-shelves",
    title: "Supermarket Shelf Displays",
    description: "Primary aisle wooden and metal shelf displays positioned at eye level.",
    iconName: "Layers",
    category: "display"
  },
  {
    id: "endcap-racks",
    title: "Aisle End-Cap Racks",
    description: "Promotional end-cap display racks located at major aisle intersections.",
    iconName: "Store",
    category: "display"
  },
  {
    id: "checkout-counters",
    title: "Checkout Register Racks",
    description: "Point-of-sale impulse display stands right beside store billing counters.",
    iconName: "ShieldCheck",
    category: "display"
  }
];


