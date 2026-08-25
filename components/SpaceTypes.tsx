import React from "react";
import { Layers, Grid, Store, Coffee, Gift, Box } from "lucide-react";
import { COMPACT_SPACE_TYPES } from "@/data/spaceTypes";

export default function SpaceTypes() {
  const iconMap: Record<string, React.ReactNode> = {
    Layers: <Layers className="w-6 h-6 text-[#1F1F1F] group-hover:text-[#FEF9C3] transition-colors" />,
    Grid: <Grid className="w-6 h-6 text-[#1F1F1F] group-hover:text-[#FEF9C3] transition-colors" />,
    Store: <Store className="w-6 h-6 text-[#1F1F1F] group-hover:text-[#FEF9C3] transition-colors" />,
    Coffee: <Coffee className="w-6 h-6 text-[#1F1F1F] group-hover:text-[#FEF9C3] transition-colors" />,
    Gift: <Gift className="w-6 h-6 text-[#1F1F1F] group-hover:text-[#FEF9C3] transition-colors" />,
    Box: <Box className="w-6 h-6 text-[#1F1F1F] group-hover:text-[#FEF9C3] transition-colors" />,
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FEF9C3]/30 border-y border-[#E5E7EB]" id="space-types">
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
                bg-[#FACC15]
                text-[#3D0710] font-bold
                text-xs sm:text-sm
                tracking-widest uppercase
                whitespace-nowrap
                select-none
              "
            >
              • Available Formats •
            </span>

            {/* Right Line */}
            <div className="w-12 sm:w-20 h-px bg-[#1F1F1F] opacity-40" />
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#1F1F1F] md:text-5xl">
            What Kind of Space Can Be Offered?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#6B7280] md:text-lg font-medium">
            Explore popular supermarket display options that suit eye-level shelves, end-cap racks, checkout registers, refrigerated zones, and feature corners.
          </p>

        </div>

        {/* Compact Grid with 6 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {COMPACT_SPACE_TYPES.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] p-6 shadow-[0_12px_35px_rgba(107,15,26,0.06)] hover:shadow-[0_20px_50px_rgba(107,15,26,0.14)] transition-all duration-300 hover:-translate-y-1 hover:border-[#1F1F1F]/30 flex flex-col justify-between group"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FEF9C3] text-[#1F1F1F] group-hover:bg-[#1F1F1F] transition-colors mb-4">
                  {iconMap[item.iconName]}
                </div>
                <h3 className="font-extrabold text-lg text-[#1F1F1F] group-hover:text-[#4B5563] transition-colors duration-300 mb-2">
                  {item.name}
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
