import React, { Suspense } from "react";
import type { Metadata } from "next";
import HowItWorksPage from "@/components/how-it-works/HowItWorksPage";
import { supermarketHowItWorksData } from "@/data/howItWorksData";
import { SITE_CONFIG } from "@/data/config";

export const metadata: Metadata = {
  title: "How It Works - Racks on Rent | Retail Partnership & Display Space Guide",
  description:
    "Learn how Racks on Rent connects supermarket & retail store owners with FMCG brands and product startups. Simple 6-step process to list space or rent retail displays.",
  openGraph: {
    title: "How It Works - Racks on Rent | Retail Partnership & Display Space Guide",
    description:
      "Learn how Racks on Rent connects supermarket & retail store owners with FMCG brands and product startups.",
    url: `${SITE_CONFIG.domain}/how-it-works`,
    siteName: SITE_CONFIG.name,
    locale: "en_IN",
    type: "website",
  },
};

function HowItWorksLoading() {
  return (
    <div className="min-h-screen bg-(--background) flex items-center justify-center p-8">
      <div className="text-center">
        <div className="w-10 h-10 border-4 border-(--primary) border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-sm font-bold text-(--primary)">Loading How It Works...</p>
      </div>
    </div>
  );
}

export default function HowItWorksRoute() {
  return (
    <Suspense fallback={<HowItWorksLoading />}>
      <HowItWorksPage data={supermarketHowItWorksData} />
    </Suspense>
  );
}
