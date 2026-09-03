"use client";

import React from "react";
import { JourneyPerspective } from "@/data/howItWorksData";

interface JourneySelectorProps {
  sectionTitle: string;
  sectionSubtitle: string;
  ownerPerspective: JourneyPerspective;
  brandPerspective: JourneyPerspective;
  activeRole: "owner" | "brand";
  onSelectRole: (role: "owner" | "brand") => void;
}

export default function JourneySelector({
  sectionTitle,
  sectionSubtitle,
  ownerPerspective,
  brandPerspective,
  activeRole,
  onSelectRole,
}: JourneySelectorProps) {
  return (
    <div className="text-center mb-10" id="explore-journey">
      <h2 className="text-2xl sm:text-4xl font-extrabold text-(--primary) mb-3">
        {sectionTitle}
      </h2>
      <p className="text-sm sm:text-base text-(--text-muted) font-medium mb-6">
        {sectionSubtitle}
      </p>

      <div className="inline-flex p-1.5 rounded-2xl bg-white border border-(--border) shadow-2xs flex-wrap justify-center gap-2">
        <button
          type="button"
          onClick={() => onSelectRole("owner")}
          className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
            activeRole === "owner"
              ? "bg-(--primary) text-(--accent-light) shadow-md"
              : "text-(--text-muted) hover:text-(--primary) hover:bg-(--accent-light)/40"
          }`}
          aria-pressed={activeRole === "owner"}
        >
          {ownerPerspective.tabLabel}
        </button>

        <button
          type="button"
          onClick={() => onSelectRole("brand")}
          aria-pressed={activeRole === "brand"}
          className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
            activeRole === "brand"
              ? "bg-(--primary) text-(--accent-light) shadow-md"
              : "text-(--text-muted) hover:text-(--primary) hover:bg-(--accent-light)/40"
          }`}
        >
          {brandPerspective.tabLabel}
        </button>
      </div>
    </div>
  );
}
