"use client";

import React from "react";
import { CheckCircle2, Utensils, Store } from "lucide-react";
import { ROLE_CARDS } from "@/data/benefits";

interface RoleSelectionProps {
  onSelectRole?: (role: "gym-owner" | "wellness") => void;
}

export default function RoleSelection({ onSelectRole }: RoleSelectionProps) {
  const handleRoleClick = (role: "gym-owner" | "wellness") => {
    if (onSelectRole) {
      onSelectRole(role);
    }
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#F9FAFB]" id="choose-role">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-4 w-full mb-6">
            {/* Left Line */}
            <div className="w-12 sm:w-20 h-px bg-[#1F2937] opacity-40" />

            {/* Pill Badge */}
            <span
              className="
                px-5 py-2
                rounded-full
                border-2 border-[#1F2937]
                bg-[#FACC15]
                text-[#111827] font-bold
                text-xs sm:text-sm
                tracking-widest uppercase
                whitespace-nowrap
                select-none
              "
            >
              • Role Selection •
            </span>

            {/* Right Line */}
            <div className="w-12 sm:w-20 h-px bg-[#1F2937] opacity-40" />
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#1F2937] md:text-5xl">
            Choose What Best Describes You
          </h2>
        </div>

        {/* Two Large Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {ROLE_CARDS.map((card) => {
            const isGymOwner = card.role === "gym-owner";
            return (
              <div
                key={card.id}
                className="rounded-3xl border-2 border-[#E5E7EB] bg-[#F9FAFB] p-8 shadow-[0_12px_35px_rgba(107,15,26,0.06)] hover:shadow-[0_20px_50px_rgba(107,15,26,0.14)] hover:border-[#1F2937]/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FEF9C3] text-[#1F2937] mb-6 shadow-xs">
                    {isGymOwner ? <Store className="w-6 h-6" /> : <Utensils className="w-6 h-6" />}
                  </div>


                  <h3 className="text-2xl font-black text-[#1F2937] mb-3 group-hover:text-[#4B5563] transition-colors duration-300">
                    {card.heading}
                  </h3>

                  <p className="text-base text-[#6B7280] leading-relaxed mb-6 font-medium">
                    {card.text}
                  </p>

                  <div className="space-y-3 mb-8">
                    {card.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#1F2937] flex-shrink-0" />
                        <span className="text-sm font-extrabold text-[#4B5563]">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleRoleClick(card.role)}
                  className={`w-full py-3.5 px-6 rounded-full font-extrabold transition-all shadow-xs cursor-pointer text-center ${
                    isGymOwner
                      ? "bg-[#FACC15] text-[#111827] border border-[#1F2937]/20 hover:bg-[#111827] hover:text-[#FACC15]"
                      : "bg-[#1F2937] text-[#FEF9C3] hover:bg-[#111827] hover:text-[#FACC15]"
                  }`}
                >
                  {card.ctaLabel}
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
