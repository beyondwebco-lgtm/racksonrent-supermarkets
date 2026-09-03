"use client";

import React from "react";
import {
  Zap,
  Users,
  Building2,
  ShieldCheck,
  Store,
  ShoppingBag,
  TrendingUp,
  Sparkles,
  CheckCircle2,
  LucideIcon,
} from "lucide-react";
import { HowItWorksFeature } from "@/data/howItWorksData";

interface FeatureHighlightsProps {
  features: HowItWorksFeature[];
}

const iconMap: Record<string, LucideIcon> = {
  zap: Zap,
  users: Users,
  building: Building2,
  building2: Building2,
  shield: ShieldCheck,
  shieldcheck: ShieldCheck,
  store: Store,
  shoppingbag: ShoppingBag,
  trendingup: TrendingUp,
  sparkles: Sparkles,
  checkcircle2: CheckCircle2,
};

function getIconComponent(iconName: string): LucideIcon {
  const normalized = iconName.toLowerCase().replace(/[^a-z0-9]/g, "");
  return iconMap[normalized] || Zap;
}

export default function FeatureHighlights({ features }: FeatureHighlightsProps) {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feature, idx) => {
          const IconComp = getIconComponent(feature.icon);
          return (
            <div
              key={idx}
              className="bg-white p-5 rounded-2xl border border-(--border) shadow-2xs hover:shadow-md hover:border-(--accent)/60 transition-all duration-300 group"
            >
              <div className="p-2.5 rounded-xl bg-(--accent-light)/60 inline-block mb-3 group-hover:bg-(--accent-light) transition-colors">
                <IconComp className="w-6 h-6 text-(--primary)" />
              </div>
              <h3 className="text-base font-extrabold text-(--primary) mb-1">
                {feature.title}
              </h3>
              <p className="text-xs text-(--text-muted) leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
