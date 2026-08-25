import React from "react";
import { Store, Search, Calendar, ShoppingBag, TrendingUp, ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "List Store Space",
      description: "Supermarket owners list available shelves, racks, counters, promotional areas, refrigerated spaces, or display corners.",
      icon: Store,
    },
    {
      number: 2,
      title: "Browse Supermarket Spaces",
      description: "Brands and entrepreneurs search available retail spaces by city, location, size, category, and display type.",
      icon: Search,
    },
    {
      number: 3,
      title: "Reserve a Space",
      description: "Choose a suitable supermarket display location and agree on a daily, weekly, or monthly rental arrangement.",
      icon: Calendar,
    },
    {
      number: 4,
      title: "Display & Sell",
      description: "Products are displayed inside the supermarket where shoppers can discover, interact with, and purchase them.",
      icon: ShoppingBag,
    },
    {
      number: 5,
      title: "Shared Success",
      description: "Supermarket owners earn additional income from unused display space while brands gain valuable offline visibility and customer access.",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-(--accent-light)/30 border-y border-(--border)" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
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
              • 5-Step Process •
            </span>

            {/* Right Line */}
            <div className="w-12 sm:w-20 h-px bg-(--primary) opacity-40" />
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-(--primary) md:text-5xl">
            How It Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-(--text-muted) md:text-lg font-medium">
            Five simple steps to connect supermarket owners with FMCG brands, food businesses, local manufacturers, and entrepreneurs looking for high-visibility retail display space.
          </p>
        </div>

        {/* 5 Step Cards with Desktop Arrows */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 relative">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div key={step.number} className="relative flex flex-col group">
                <div className="rounded-3xl border border-(--border) bg-(--background) p-5 shadow-[0_12px_35px_rgba(101,0,0,0.06)] flex flex-col items-center text-center relative group-hover:-translate-y-1.5 group-hover:scale-[1.01] group-hover:border-(--primary)/50 group-hover:shadow-[0_20px_45px_rgba(101,0,0,0.12)] transition-all duration-300 h-full">
                  
                  {/* Step Number Circle */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-(--primary) font-black text-(--accent-light) mb-4 shadow-sm text-base border-2 border-(--accent) group-hover:scale-110 group-hover:bg-(--accent) group-hover:text-(--primary) group-hover:border-(--primary) transition-all duration-300">
                    {step.number}
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-(--accent-light) mb-3 text-(--primary) group-hover:bg-(--primary) group-hover:text-(--accent-light) transition-colors duration-300">
                    <IconComp className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-black text-(--primary) mb-2 group-hover:text-(--primary) transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-(--text-muted) leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>

                {/* Connecting Desktop Arrow */}
                {idx < steps.length - 1 && (
                  <>
                    <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full bg-(--accent) text-(--primary) shadow-sm border border-(--primary)/20 group-hover:translate-x-1 group-hover:bg-(--primary-dark) group-hover:text-(--accent) transition-all duration-300">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex lg:hidden justify-center py-2 text-(--primary)">
                      <span className="w-6 h-6 rounded-full bg-(--accent-light) border border-(--primary)/20 flex items-center justify-center text-xs font-bold text-(--primary)">↓</span>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

