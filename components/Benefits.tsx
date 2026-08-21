import React from "react";
import { CheckCircle2, Store, Utensils } from "lucide-react";
import { BENEFITS_COMPARISON } from "@/data/benefits";

export default function Benefits() {
  const { gymOwners, wellnessBusinesses } = BENEFITS_COMPARISON;

  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF5]" id="benefits">
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
              • Mutual Value •
            </span>

            {/* Right Line */}
            <div className="w-12 sm:w-20 h-px bg-[#6B0F1A] opacity-40" />
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#6B0F1A] md:text-5xl">
            A Simple Win for Both Sides
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#5F5F5F] md:text-lg font-medium">
            Discover how space sharing delivers immediate advantages to both supermarket owners and product brands.
          </p>
        </div>

        {/* 2-Column Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Gift Shop Owners */}
          <div className="group rounded-3xl border-2 border-[#F0E2E4] bg-[#FFFDF5] p-8 shadow-[0_12px_35px_rgba(107,15,26,0.06)] hover:border-[#6B0F1A]/30 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 border-b border-[#F0E2E4] pb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF6A3] text-[#6B0F1A]">
                  <Store className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-[#6B0F1A] group-hover:text-[#B8913A] transition-colors duration-300">
                  {gymOwners.title}
                </h3>
              </div>


              <div className="space-y-4">
                {gymOwners.points.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#6B0F1A] flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base font-extrabold text-[#B8913A]">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Wellness Businesses */}
          <div className="group rounded-3xl border-2 border-[#F0E2E4] bg-[#FFFDF5] p-8 shadow-[0_12px_35px_rgba(107,15,26,0.06)] hover:border-[#6B0F1A]/30 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 border-b border-[#F0E2E4] pb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF6A3] text-[#6B0F1A]">
                  <Utensils className="w-6 h-6" />
                </div>

                <h3 className="text-2xl font-black text-[#6B0F1A] group-hover:text-[#B8913A] transition-colors duration-300">
                  {wellnessBusinesses.title}
                </h3>
              </div>

              <div className="space-y-4">
                {wellnessBusinesses.points.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#6B0F1A] flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base font-extrabold text-[#B8913A]">
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
