export interface HowItWorksFeature {
  icon: string; // Lucide icon name or identifier, e.g. "Zap", "Users", "Building2", "ShieldCheck"
  title: string;
  description: string;
}

export interface JourneyPerspective {
  label: string;
  tabLabel: string;
  badge: string;
  heading: string;
  image: string;
  alt: string;
  downloadName: string;
  caption: string;
}

export interface HowItWorksHeroConfig {
  backHomeLabel: string;
  backHomeHref: string;
  badge: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  stepsLabel: string;
  partnershipLabel: string;
}

export interface HowItWorksCTAConfig {
  badge: string;
  title: string;
  description: string;
  ownerButtonText: string;
  ownerButtonHref: string;
  brandButtonText: string;
  brandButtonHref: string;
}

export interface HowItWorksData {
  categoryName: string;
  hero: HowItWorksHeroConfig;
  features: HowItWorksFeature[];
  journey: {
    sectionTitle: string;
    sectionSubtitle: string;
    owner: JourneyPerspective;
    brand: JourneyPerspective;
  };
  cta: HowItWorksCTAConfig;
}

/**
 * Default Configurable Placeholder Data
 * Used as a reference master schema across different Racks on Rent verticals.
 */
export const defaultHowItWorksData: HowItWorksData = {
  categoryName: "[CATEGORY NAME]",

  hero: {
    backHomeLabel: "Back to Home",
    backHomeHref: "/",
    badge: "[CATEGORY] RETAIL PARTNERSHIP",
    title: "How It Works",
    description: "[INSERT CATEGORY-SPECIFIC DESCRIPTION]",
    image: "/images/placeholders/how-it-works-hero.svg",
    alt: "[CATEGORY] retail partnership display",
    stepsLabel: "6 Simple Steps",
    partnershipLabel: "Win-Win Partnership",
  },

  features: [
    {
      icon: "Zap",
      title: "[FAST SETUP BENEFIT]",
      description: "[INSERT FEATURE DESCRIPTION]",
    },
    {
      icon: "Users",
      title: "[FOOTFALL BENEFIT]",
      description: "[INSERT FEATURE DESCRIPTION]",
    },
    {
      icon: "Building2",
      title: "[SPACE OWNER BENEFIT]",
      description: "[INSERT FEATURE DESCRIPTION]",
    },
    {
      icon: "ShieldCheck",
      title: "[LOW RISK BENEFIT]",
      description: "[INSERT FEATURE DESCRIPTION]",
    },
  ],

  journey: {
    sectionTitle: "Explore the Journey",
    sectionSubtitle: "Select your perspective to view the detailed step-by-step process infographic",
    owner: {
      label: "[SPACE OWNER TYPE]",
      tabLabel: "For [SPACE OWNER TYPE]",
      badge: "[SPACE OWNER TYPE] GUIDE",
      heading: "[OWNER JOURNEY HEADLINE]",
      image: "/images/placeholders/owner-journey.svg",
      alt: "[SPACE OWNER TYPE] journey infographic",
      downloadName: "RacksOnRent_Owner_Guide.svg",
      caption: "[OWNER JOURNEY SUMMARY]",
    },
    brand: {
      label: "[BRAND / STARTUP TYPE]",
      tabLabel: "For [BRAND / STARTUP TYPE]",
      badge: "BRANDS & STARTUPS GUIDE",
      heading: "[BRAND JOURNEY HEADLINE]",
      image: "/images/placeholders/brand-journey.svg",
      alt: "[BRAND / STARTUP TYPE] journey infographic",
      downloadName: "RacksOnRent_Brand_Guide.svg",
      caption: "[BRAND JOURNEY SUMMARY]",
    },
  },

  cta: {
    badge: "START TODAY",
    title: "Ready to Turn Space Into Opportunity?",
    description: "[INSERT CATEGORY-SPECIFIC CTA DESCRIPTION]",
    ownerButtonText: "List Your Space",
    ownerButtonHref: "/#contact",
    brandButtonText: "Showcase Your Brand",
    brandButtonHref: "/#contact",
  },
};

/**
 * Supermarket Vertical Dataset
 * Specific dataset for Supermarket & Retail Stores vertical
 */
export const supermarketHowItWorksData: HowItWorksData = {
  categoryName: "Supermarket",

  hero: {
    backHomeLabel: "Back to Home",
    backHomeHref: "/",
    badge: "SUPERMARKET RETAIL PARTNERSHIP",
    title: "How It Works",
    description: "Transforming unused supermarket shelves, end-caps, and display corners into high-visibility, revenue-generating retail display opportunities.",
    image: "/images/placeholders/how-it-works-hero.svg",
    alt: "Supermarket retail display racks and product counters",
    stepsLabel: "6 Simple Steps",
    partnershipLabel: "Win-Win Partnership",
  },

  features: [
    {
      icon: "Zap",
      title: "Fast Setup",
      description: "Get display racks and product stands active inside prime supermarket locations within days.",
    },
    {
      icon: "Users",
      title: "Built-In Footfall",
      description: "Tap into thousands of daily grocery shoppers, families, and regular retail visitors.",
    },
    {
      icon: "Building2",
      title: "Passive Store Income",
      description: "Monetize unutilized floor corners, checkout areas, and rack ends into steady rental revenue.",
    },
    {
      icon: "ShieldCheck",
      title: "Low Risk Growth",
      description: "Showcase FMCG and food products offline with minimal overhead and flexible rental terms.",
    },
  ],

  journey: {
    sectionTitle: "Explore the Journey",
    sectionSubtitle: "Select your perspective to view the detailed step-by-step process infographic",
    owner: {
      label: "Supermarket Owners",
      tabLabel: "For Supermarket Owners",
      badge: "SUPERMARKET OWNERS GUIDE",
      heading: "Sublet Store Space. Share Success.",
      image: "/images/placeholders/owner-journey.svg",
      alt: "How It Works for Supermarket Owners Infographic",
      downloadName: "RacksOnRent_Supermarket_Owners_Guide.svg",
      caption: "6 Easy Steps to Turn Store Space Into Steady Rental Income",
    },
    brand: {
      label: "Retail Brands & Startups",
      tabLabel: "For Retail Brands & Startups",
      badge: "BRANDS & STARTUPS GUIDE",
      heading: "Your Product. Your Shelf. Your Growth.",
      image: "/images/placeholders/brand-journey.svg",
      alt: "How It Works for Retail Brands Infographic",
      downloadName: "RacksOnRent_Brands_Guide.svg",
      caption: "6 Easy Steps to Showcase Products in Top Supermarkets",
    },
  },

  cta: {
    badge: "START TODAY",
    title: "Ready to Turn Space Into Opportunity?",
    description: "Whether you own a supermarket store or want to expand your retail brand, we connect you for mutual success.",
    ownerButtonText: "List Your Space",
    ownerButtonHref: "/#contact",
    brandButtonText: "Showcase Your Brand",
    brandButtonHref: "/#contact",
  },
};
