"use client";

import React from "react";
import { CheckCircle2, Store, Tag } from "lucide-react";
import { PRICING_TIERS, PricingTier } from "@/data/pricing";

interface PricingProps {
  onSelectRole?: (role: "gym-owner" | "wellness") => void;
}

export default function Pricing({ onSelectRole }: PricingProps) {
  const handlePricingClick = (roleType: "gym-owner" | "wellness") => {
    if (onSelectRole) {
      onSelectRole(roleType);
    }
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-(--background) border-t border-(--border)" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-4 w-full mb-6">
            {/* Left Line */}
            <div className="w-12 sm:w-20 h-px bg-[#1F1F1F] opacity-40" />

            {/* Pill Badge */}
            <span
              className="
                px-5 py-2
                rounded-full
                border-2 border-[#1F1F1F]
                bg-(--accent)
                text-(--primary) font-bold
                text-xs sm:text-sm
                tracking-widest uppercase
                whitespace-nowrap
                select-none
              "
            >
              • Transparent Pricing •
            </span>

            {/* Right Line */}
            <div className="w-12 sm:w-20 h-px bg-[#1F1F1F] opacity-40" />
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-(--text) md:text-5xl">
            Simple & Transparent Options
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-(--text-muted) md:text-lg font-medium">
            No hidden commissions. Direct, transparent terms tailored for supermarket owners and product brands.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {PRICING_TIERS.map((tier: PricingTier) => (
            <div
              key={tier.id}
              className={`group rounded-3xl border-2 p-8 flex flex-col justify-between transition-all duration-300 relative ${
                tier.highlighted
                  ? "border-[#1F1F1F] bg-(--accent-light)/20 shadow-[0_16px_40px_rgba(101,0,0,0.12)]"
                  : "border-(--border) bg-(--background) shadow-[0_12px_35px_rgba(101,0,0,0.06)]"
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3.5 left-6 bg-[#1F1F1F] text-(--accent-light) text-[10px] font-black tracking-widest uppercase py-1 px-3.5 rounded-full border border-(--accent-light)/20">
                  Most Popular
                </span>
              )}

              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-(--border)">
                  <h3 className="text-xl font-extrabold text-(--text) group-hover:text-(--text) transition-colors duration-300">
                    {tier.title}
                  </h3>
                  <div className="p-3 rounded-2xl bg-(--accent-light) text-(--text)">
                    {tier.roleType === "gym-owner" ? <Store className="w-6 h-6" /> : <Tag className="w-6 h-6" />}
                  </div>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-black text-(--text)">
                    {tier.priceDisplay}
                  </span>
                  <span className="text-sm font-bold text-(--text-muted) ml-2">
                    / {tier.period}
                  </span>
                  <p className="text-xs text-(--text-muted) mt-2 font-medium">
                    {tier.description}
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  {tier.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-(--text) flex-shrink-0" />
                      <span className="text-sm font-extrabold text-(--text)">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => handlePricingClick(tier.roleType)}
                className={`w-full py-4 px-6 rounded-full font-extrabold transition-all shadow-xs cursor-pointer text-center ${
                  tier.highlighted
                    ? "bg-(--accent) text-(--primary) border border-[#1F1F1F]/20 hover:bg-(--primary-dark) hover:text-(--accent)"
                    : "bg-[#1F1F1F] text-(--accent-light) hover:bg-(--primary-dark) hover:text-(--accent)"
                }`}
              >
                {tier.ctaLabel}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
