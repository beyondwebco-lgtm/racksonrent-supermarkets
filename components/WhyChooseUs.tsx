import React from "react";
import { ShieldCheck, Lock, Headphones, TrendingUp } from "lucide-react";
import { WHY_CHOOSE_US } from "@/data/benefits";

export default function WhyChooseUs() {
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    ShieldCheck,
    Lock,
    Headphones,
    TrendingUp,
  };

  return (
    <section className="py-16 sm:py-24 bg-[#F9FAFB] border-t border-[#E5E7EB]" id="why-choose-us">
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
              • Platform Advantages •
            </span>

            {/* Right Line */}
            <div className="w-12 sm:w-20 h-px bg-[#1F2937] opacity-40" />
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#1F2937] md:text-5xl">
            Why Choose Racks on Rent?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#6B7280] md:text-lg font-medium">
            We provide a transparent platform designed to simplify supermarket display-space discovery, rental, and direct collaboration between retail stores and growing product brands.
          </p>

        </div>

        {/* 4 Benefit Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item) => {
            const IconComp = iconMap[item.iconName] || ShieldCheck;
            return (
              <div
                key={item.id}
                className="group rounded-3xl border-2 border-[#E5E7EB] bg-[#F9FAFB] p-5 sm:p-6 shadow-[0_12px_35px_rgba(107,15,26,0.06)] hover:shadow-[0_20px_50px_rgba(107,15,26,0.14)] hover:border-[#1F2937]/50 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.01] flex flex-col justify-between"
              >
                <div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FEF9C3] mb-5 shadow-xs group-hover:bg-[#1F2937] transition-colors duration-300">
                    <IconComp className="w-8 h-8 text-[#1F2937] group-hover:text-[#FEF9C3] group-hover:scale-110 transition-all duration-300" />
                  </div>
                  <h3 className="text-xl font-black text-[#1F2937] mb-2.5 group-hover:text-[#4B5563] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
