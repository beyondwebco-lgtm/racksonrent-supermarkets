export interface SpaceTypeItem {
  id: string;
  name: string;
  description: string;
  iconName: string;
}

export const COMPACT_SPACE_TYPES: SpaceTypeItem[] = [
  {
    id: "supermarket-shelf",
    name: "Supermarket Shelf Display",
    description: "Eye-level or top-shelf display placement on primary supermarket retail aisles.",
    iconName: "Layers",
  },
  {
    id: "endcap-display",
    name: "End-Cap Display",
    description: "High-impact aisle-end rack capturing every shopper browsing between main aisles.",
    iconName: "Store",
  },
  {
    id: "checkout-counter",
    name: "Checkout Counter Display",
    description: "High-visibility point-of-sale display right beside billing registers.",
    iconName: "Store",
  },
  {
    id: "refrigerated-display",
    name: "Refrigerated Display Space",
    description: "Chilled shelf or fridge rack for cold brews, beverages, and fresh products.",
    iconName: "ShieldCheck",
  },
  {
    id: "tabletop-stand",
    name: "Tabletop & Grab-and-Go Rack",
    description: "Promotional standalone rack placed in high-footfall store entrance areas.",
    iconName: "Gift",
  },
  {
    id: "entrance-stand",
    name: "Entrance & Feature Corner",
    description: "Front store window or entrance feature display rack attracting walk-in shoppers.",
    iconName: "Box",
  },
];

export const RACK_SIZES = [
  { id: "small", name: "Small Display", dimensions: "Up to 2x1 ft" },
  { id: "medium", name: "Medium Display", dimensions: "Up to 3x2 ft" },
  { id: "large", name: "Large Display", dimensions: "Up to 5x2 ft" },
  { id: "countertop", name: "Countertop Space", dimensions: "Billing Counter Area" },
  { id: "custom", name: "Custom Space", dimensions: "Full Retail Section" },
];


