"use client";

import React from "react";
import { Layers, Store, TrendingUp } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function HeroStats() {
  const statsList = [
    {
      id: "spaces",
      targetNumber: 500,
      prefix: "",
      suffix: "+",
      label: "Supermarket Spaces Listed",
      icon: <Layers className="w-6 h-6 text-(--accent) group-hover:scale-110 transition-transform duration-300" />,
    },
    {
      id: "brands",
      targetNumber: 1000,
      prefix: "",
      suffix: "+",
      label: "Product Brands Connected",
      icon: <Store className="w-6 h-6 text-(--accent) group-hover:scale-110 transition-transform duration-300" />,
    },
    {
      id: "earnings",
      targetNumber: 5,
      prefix: "₹ ",
      suffix: " Lakhs+",
      label: "Extra Income Generated",
      icon: <TrendingUp className="w-6 h-6 text-(--accent) group-hover:scale-110 transition-transform duration-300" />,
    },
  ];

  return (
    <div className="bg-[#1F1F1F] text-white py-6 border-y border-(--primary-dark) shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-(--primary-dark)/60">
          {statsList.map((stat) => (
            <div
              key={stat.id}
              className="pt-4 first:pt-0 sm:pt-0 flex flex-col items-center justify-center space-y-1 p-3 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-(--primary-dark)/40 group cursor-default"
            >
              <div className="p-2.5 rounded-2xl bg-(--primary-dark)/50 mb-1 group-hover:bg-(--primary-dark) transition-colors">
                {stat.icon}
              </div>
              <span className="text-3xl sm:text-4xl font-black text-(--accent) tracking-tight">
                <AnimatedCounter
                  targetNumber={stat.targetNumber}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  durationMs={1200}
                />
              </span>
              <span className="text-xs sm:text-sm font-bold text-white/90 uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

