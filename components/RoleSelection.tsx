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
    <section className="py-16 sm:py-24 bg-(--background)" id="choose-role">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-4 w-full mb-6">
            {/* Left Line */}
            <div className="w-12 sm:w-20 h-px bg-(--primary) opacity-40" />

            {/* Pill Badge */}
            <span
              className="
                px-5 py-2
                rounded-full
                border-2 border-(--primary)
                bg-(--accent)
                text-(--primary) font-bold
                text-xs sm:text-sm
                tracking-widest uppercase
                whitespace-nowrap
                select-none
              "
            >
              • Role Selection •
            </span>

            {/* Right Line */}
            <div className="w-12 sm:w-20 h-px bg-(--primary) opacity-40" />
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-(--text) md:text-5xl">
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
                className="rounded-3xl border-2 border-(--border) bg-(--background) p-8 shadow-[0_12px_35px_rgba(101,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(101,0,0,0.14)] hover:border-(--primary)/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-(--accent-light) text-(--text) mb-6 shadow-xs">
                    {isGymOwner ? <Store className="w-6 h-6" /> : <Utensils className="w-6 h-6" />}
                  </div>


                  <h3 className="text-2xl font-black text-(--text) mb-3 group-hover:text-(--text) transition-colors duration-300">
                    {card.heading}
                  </h3>

                  <p className="text-base text-(--text-muted) leading-relaxed mb-6 font-medium">
                    {card.text}
                  </p>

                  <div className="space-y-3 mb-8">
                    {card.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-(--text) flex-shrink-0" />
                        <span className="text-sm font-extrabold text-(--text)">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleRoleClick(card.role)}
                  className={`w-full py-3.5 px-6 rounded-full font-extrabold transition-all shadow-xs cursor-pointer text-center ${
                    isGymOwner
                      ? "bg-(--accent) text-(--primary) border border-(--primary)/20 hover:bg-(--primary-dark) hover:text-(--accent)"
                      : "bg-(--primary) text-(--accent-light) hover:bg-(--primary-dark) hover:text-(--accent)"
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
