export interface CategoryItem {
  id: string;
  name: string;
  description: string;
  iconName: string;
  image: string;
  alt: string;
  badge?: string;
}

export const POPULAR_CATEGORIES: CategoryItem[] = [
  {
    id: "packaged-foods-snacks",
    name: "Packaged Foods & Snacks",
    description: "Packaged snacks, biscuits, chips, roasted products, gourmet foods, healthy munchies, breakfast products, and specialty food items.",
    iconName: "ShoppingBag",
    image: "/categories/packaged-snacks.png",
    alt: "Packaged foods and snacks displayed on supermarket shelves",
    badge: "High Demand",
  },
  {
    id: "beverages-ready-to-drink",
    name: "Beverages & Ready-to-Drink Products",
    description: "Cold brews, juices, sparkling waters, energy drinks, kombucha, iced teas, and functional beverages.",
    iconName: "Sparkles",
    image: "/categories/desserts-chocolates.png",
    alt: "Beverages and ready-to-drink products inside supermarket display racks",
    badge: "Popular",
  },
  {
    id: "healthy-foods-wellness",
    name: "Healthy Foods & Wellness Products",
    description: "Organic snacks, protein bars, superfood mixes, gluten-free foods, granolas, and wellness supplements.",
    iconName: "ShoppingBag",
    image: "/categories/healthy-foods.png",
    alt: "Healthy foods, organic snacks, and wellness products on display",
    badge: "Top Seller",
  },
  {
    id: "personal-care-beauty",
    name: "Personal Care & Beauty",
    description: "Skincare products, organic soaps, hair care essentials, body care items, cosmetics, and personal wellness products.",
    iconName: "HeartHandshake",
    image: "/categories/beverages.png",
    alt: "Personal care and beauty products in store display",
    badge: "Trending",
  },
  {
    id: "household-cleaning",
    name: "Household & Cleaning Products",
    description: "Eco-friendly cleaners, home care products, laundry items, paper products, and household utility goods.",
    iconName: "Gift",
    image: "/categories/artisanal-products.png",
    alt: "Household and cleaning products on retail display racks",
    badge: "Popular",
  },
  {
    id: "specialty-foods-local",
    name: "Specialty Foods & Local Brands",
    description: "Regional delicacies, artisanal condiments, spice mixes, specialty pickles, gourmet preserves, and local snacks.",
    iconName: "Sparkles",
    image: "/categories/lifestyle-accessories.png",
    alt: "Specialty foods and local product brands displayed on supermarket racks",
    badge: "Creative",
  },
];


