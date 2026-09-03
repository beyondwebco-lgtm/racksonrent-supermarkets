"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { HowItWorksData, supermarketHowItWorksData } from "@/data/howItWorksData";
import HowItWorksHero from "./HowItWorksHero";
import FeatureHighlights from "./FeatureHighlights";
import JourneySelector from "./JourneySelector";
import JourneyInfographic from "./JourneyInfographic";
import ImageLightbox from "./ImageLightbox";
import HowItWorksCTA from "./HowItWorksCTA";

interface HowItWorksPageProps {
  data?: HowItWorksData;
}

export default function HowItWorksPage({
  data = supermarketHowItWorksData,
}: HowItWorksPageProps) {
  const searchParams = useSearchParams();
  const [activeRole, setActiveRole] = useState<"owner" | "brand">("owner");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sync role state with URL search params and scroll smoothly if role param present
  useEffect(() => {
    const roleParam = searchParams.get("role");
    if (roleParam === "brand") {
      setActiveRole("brand");
      scrollToJourney();
    } else if (roleParam === "owner") {
      setActiveRole("owner");
      scrollToJourney();
    }
  }, [searchParams]);

  const scrollToJourney = () => {
    setTimeout(() => {
      const element = document.getElementById("explore-journey");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleSelectRole = (role: "owner" | "brand") => {
    setActiveRole(role);
  };

  const activePerspective =
    activeRole === "owner" ? data.journey.owner : data.journey.brand;

  return (
    <div className="bg-(--background) min-h-screen pt-8 sm:pt-14 pb-20">
      <div id="app" className="w-full">
        {/* 1. Hero Section */}
        <HowItWorksHero hero={data.hero} />

        {/* 2. Feature Highlights Banner */}
        <FeatureHighlights features={data.features} />

        {/* 3. Interactive Infographic Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <JourneySelector
            sectionTitle={data.journey.sectionTitle}
            sectionSubtitle={data.journey.sectionSubtitle}
            ownerPerspective={data.journey.owner}
            brandPerspective={data.journey.brand}
            activeRole={activeRole}
            onSelectRole={handleSelectRole}
          />

          <JourneyInfographic
            perspective={activePerspective}
            onOpenModal={() => setIsModalOpen(true)}
          />
        </section>

        {/* 4. Final CTA Section */}
        <HowItWorksCTA cta={data.cta} />
      </div>

      {/* Fullscreen Lightbox Modal */}
      <ImageLightbox
        isOpen={isModalOpen}
        perspective={activePerspective}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
