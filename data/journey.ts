export interface JourneyStep {
  stepNumber: number;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  iconName: string;
  visualTag: string;
}

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    stepNumber: 1,
    title: "List Store Space",
    shortDescription: "Supermarket owners list available shelves, racks, counters, promotional areas, refrigerated spaces, or display corners.",
    detailedDescription: "Supermarket owners post available eye-level racks, checkout counters, end-cap displays, or entrance corners looking for partner FMCG and food brands.",
    iconName: "Store",
    visualTag: "Store Sublet"
  },
  {
    stepNumber: 2,
    title: "Browse Supermarket Spaces",
    shortDescription: "Brands and entrepreneurs search available retail spaces by city, location, size, category, and display type.",
    detailedDescription: "Brands search by supermarket location, display size, shopper footfall, and product category to find the ideal retail spot.",
    iconName: "Eye",
    visualTag: "Targeted Discovery"
  },
  {
    stepNumber: 3,
    title: "Reserve a Space",
    shortDescription: "Choose a suitable supermarket display location and agree on a daily, weekly, or monthly rental arrangement.",
    detailedDescription: "Brands agree on flexible daily, weekly, or monthly rental terms directly with the supermarket owner with zero standalone store overhead.",
    iconName: "UserCheck",
    visualTag: "Flexible Rental"
  },
  {
    stepNumber: 4,
    title: "Display & Sell",
    shortDescription: "Products are displayed inside the supermarket where shoppers can discover, interact with, and purchase them.",
    detailedDescription: "Packaged foods, beverages, personal care, or household products are attractively arranged inside the supermarket store.",
    iconName: "Maximize2",
    visualTag: "Retail Display Setup"
  },
  {
    stepNumber: 5,
    title: "Shared Success",
    shortDescription: "Supermarket owners earn additional income from unused display space while brands gain valuable offline visibility and customer access.",
    detailedDescription: "A win-win relationship: supermarket owners earn rental income from underutilized space while brands scale offline presence.",
    iconName: "TrendingUp",
    visualTag: "Shared Success"
  }
];


