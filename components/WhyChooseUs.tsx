import React from "react";
import { ShieldCheck, Lock, Headphones, TrendingUp } from "lucide-react";
import { WHY_CHOOSE_US } from "@/data/benefits";
import SectionHeader from "@/components/SectionHeader";

export default function WhyChooseUs() {
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    ShieldCheck,
    Lock,
    Headphones,
    TrendingUp,
  };

  return (
    <section className="py-16 sm:py-24 bg-(--background) border-t border-(--border)" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeader
          badge="Platform Advantages"
          title="Why Choose Racks on Rent?"
          subtitle="We provide a transparent platform designed to simplify supermarket display-space discovery, rental, and direct collaboration between retail stores and growing product brands."
        />

        {/* 4 Benefit Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item) => {
            const IconComp = iconMap[item.iconName] || ShieldCheck;
            return (
              <div
                key={item.id}
                className="group rounded-3xl border-2 border-(--border) bg-(--background) p-5 sm:p-6 shadow-[0_12px_35px_rgba(101,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(101,0,0,0.14)] hover:border-(--primary)/50 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.01] flex flex-col justify-between"
              >
                <div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-(--accent-light) mb-5 shadow-xs group-hover:bg-(--primary) transition-colors duration-300">
                    <IconComp className="w-8 h-8 text-(--text) group-hover:text-(--accent-light) group-hover:scale-110 transition-all duration-300" />
                  </div>
                  <h3 className="text-xl font-black text-(--text) mb-2.5 group-hover:text-(--text) transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-(--text-muted) leading-relaxed font-medium">
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
