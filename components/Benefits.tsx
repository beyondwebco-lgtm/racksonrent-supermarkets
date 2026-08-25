import React from "react";
import { CheckCircle2, Store, Utensils } from "lucide-react";
import { BENEFITS_COMPARISON } from "@/data/benefits";

export default function Benefits() {
  const { gymOwners, wellnessBusinesses } = BENEFITS_COMPARISON;

  return (
    <section className="py-16 sm:py-24 bg-(--background)" id="benefits">
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
              • Mutual Value •
            </span>

            {/* Right Line */}
            <div className="w-12 sm:w-20 h-px bg-[#1F1F1F] opacity-40" />
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-(--text) md:text-5xl">
            A Simple Win for Both Sides
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-(--text-muted) md:text-lg font-medium">
            Discover how space sharing delivers immediate advantages to both supermarket owners and product brands.
          </p>
        </div>

        {/* 2-Column Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Gift Shop Owners */}
          <div className="group rounded-3xl border-2 border-(--border) bg-(--background) p-8 shadow-[0_12px_35px_rgba(101,0,0,0.06)] hover:border-[#1F1F1F]/30 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 border-b border-(--border) pb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-(--accent-light) text-(--text)">
                  <Store className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-(--text) group-hover:text-(--text) transition-colors duration-300">
                  {gymOwners.title}
                </h3>
              </div>


              <div className="space-y-4">
                {gymOwners.points.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-(--text) flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base font-extrabold text-(--text)">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Wellness Businesses */}
          <div className="group rounded-3xl border-2 border-(--border) bg-(--background) p-8 shadow-[0_12px_35px_rgba(101,0,0,0.06)] hover:border-[#1F1F1F]/30 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 border-b border-(--border) pb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-(--accent-light) text-(--text)">
                  <Utensils className="w-6 h-6" />
                </div>

                <h3 className="text-2xl font-black text-(--text) group-hover:text-(--text) transition-colors duration-300">
                  {wellnessBusinesses.title}
                </h3>
              </div>

              <div className="space-y-4">
                {wellnessBusinesses.points.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-(--text) flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base font-extrabold text-(--text)">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
