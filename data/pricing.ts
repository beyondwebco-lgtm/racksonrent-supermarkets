export interface PricingTier {
  id: string;
  title: string;
  targetRole: string;
  priceDisplay: string;
  period: string;
  description: string;
  features: string[];
  ctaLabel: string;
  roleType: "gym-owner" | "wellness";
  highlighted?: boolean;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "supermarket-listing",
    title: "Supermarket Space Listing",
    targetRole: "For Supermarket Owners",
    priceDisplay: "Free",
    period: "Forever",
    description: "List your unused supermarket shelves, end-caps, counter space, or display corners and start earning extra monthly income.",
    features: [
      "Zero listing & setup fees",
      "Direct brand enquiry matching",
      "Set your own space rent terms",
      "Full approval over displayed products"
    ],
    ctaLabel: "List Your Store Space",
    roleType: "gym-owner",
    highlighted: true
  },
  {
    id: "brand-space-rental",
    title: "Display Space Placement",
    targetRole: "For Product Brands & Entrepreneurs",
    priceDisplay: "Flexible Plans",
    period: "Daily, Weekly or Monthly",
    description: "Display and sell your food, beverage, FMCG, or personal care products inside top local supermarkets.",
    features: [
      "Access high daily supermarket customer footfall",
      "Flexible space sizes & display formats",
      "Direct contact with supermarket owners",
      "No heavy standalone retail overhead"
    ],
    ctaLabel: "Find Supermarket Space",
    roleType: "wellness",
    highlighted: false
  }
];


