import React from "react";
import { Utensils, Store, MapPin, ShieldCheck } from "lucide-react";
import { TRUST_STRIP_ITEMS } from "@/data/stats";

export default function TrustStrip() {
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Utensils,
    Store,
    MapPin,
    ShieldCheck,
  };


  return (
    <div className="bg-(--primary-dark) text-white py-6 border-y border-(--primary) shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-center">
          {TRUST_STRIP_ITEMS.map((item, idx) => {
            const IconComp = iconMap[item.iconName] || ShieldCheck;
            return (
              <div
                key={idx}
                className="group flex items-center justify-center gap-2 sm:gap-2.5 p-2.5 sm:p-3 rounded-2xl bg-(--primary-dark)/40 border border-(--accent)/20 hover:bg-(--primary-dark) hover:border-(--accent) hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                <IconComp className="w-5 h-5 text-(--accent) group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xs sm:text-sm font-extrabold text-white">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
