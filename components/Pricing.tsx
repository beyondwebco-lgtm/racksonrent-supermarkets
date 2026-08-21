"use client";

import React from "react";
import { CheckCircle2, Store, Utensils } from "lucide-react";
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
    <section className="py-16 sm:py-24 bg-[#FFFDF5] border-t border-[#F0E2E4]" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-4 w-full mb-6">
            {/* Left Line */}
            <div className="w-12 sm:w-20 h-px bg-[#6B0F1A] opacity-40" />

            {/* Pill Badge */}
            <span
              className="
                px-5 py-2
                rounded-full
                border-2 border-[#6B0F1A]
                bg-[#F4E409]
                text-[#3D0710] font-bold
                text-xs sm:text-sm
                tracking-widest uppercase
                whitespace-nowrap
                select-none
              "
            >
              • Transparent Pricing •
            </span>

            {/* Right Line */}
            <div className="w-12 sm:w-20 h-px bg-[#6B0F1A] opacity-40" />
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#6B0F1A] md:text-5xl">
            Simple & Transparent Options
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#5F5F5F] md:text-lg font-medium">
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
                  ? "border-[#6B0F1A] bg-[#FFF6A3]/20 shadow-[0_16px_40px_rgba(107,15,26,0.12)]"
                  : "border-[#F0E2E4] bg-[#FFFDF5] shadow-[0_12px_35px_rgba(107,15,26,0.06)]"
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3.5 left-6 bg-[#6B0F1A] text-[#FFF6A3] text-[10px] font-black tracking-widest uppercase py-1 px-3.5 rounded-full border border-[#FFF6A3]/20">
                  Most Popular
                </span>
              )}

              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#F0E2E4]">
                  <h3 className="text-xl font-extrabold text-[#6B0F1A] group-hover:text-[#B8913A] transition-colors duration-300">
                    {tier.title}
                  </h3>
                  <div className="p-3 rounded-2xl bg-[#FFF6A3] text-[#6B0F1A]">
                    {tier.roleType === "gym-owner" ? <Store className="w-6 h-6" /> : <Tag className="w-6 h-6" />}
                  </div>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-black text-[#6B0F1A]">
                    {tier.priceDisplay}
                  </span>
                  <span className="text-sm font-bold text-[#5F5F5F] ml-2">
                    / {tier.period}
                  </span>
                  <p className="text-xs text-[#5F5F5F] mt-2 font-medium">
                    {tier.description}
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  {tier.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#6B0F1A] flex-shrink-0" />
                      <span className="text-sm font-extrabold text-[#B8913A]">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => handlePricingClick(tier.roleType)}
                className={`w-full py-4 px-6 rounded-full font-extrabold transition-all shadow-xs cursor-pointer text-center ${
                  tier.highlighted
                    ? "bg-[#F4E409] text-[#3D0710] border border-[#6B0F1A]/20 hover:bg-[#3D0710] hover:text-[#F4E409]"
                    : "bg-[#6B0F1A] text-[#FFF6A3] hover:bg-[#3D0710] hover:text-[#F4E409]"
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
