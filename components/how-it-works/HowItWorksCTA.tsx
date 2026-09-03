"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Store, ShoppingBag } from "lucide-react";
import { HowItWorksCTAConfig } from "@/data/howItWorksData";

interface HowItWorksCTAProps {
  cta: HowItWorksCTAConfig;
}

export default function HowItWorksCTA({ cta }: HowItWorksCTAProps) {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-br from-(--primary) via-(--primary) to-(--primary) rounded-[2.5rem] p-8 sm:p-14 text-center shadow-2xl relative overflow-hidden border-2 border-(--accent)/30">
        <div className="absolute top-0 right-0 w-64 h-64 bg-(--accent)/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

        <div className="relative z-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-(--accent) px-4 py-1 text-xs font-extrabold text-(--primary) mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-(--primary)" />
            <span>{cta.badge}</span>
          </span>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
            {cta.title}
          </h2>

          <p className="text-(--accent-light) text-sm sm:text-lg mb-8 max-w-2xl mx-auto font-medium">
            {cta.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href={cta.ownerButtonHref}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-(--accent) px-7 py-3.5 text-sm sm:text-base font-black text-(--primary) shadow-lg hover:bg-white hover:-translate-y-0.5 transition-all duration-300"
            >
              <Store className="w-5 h-5 text-(--primary)" />
              <span>{cta.ownerButtonText}</span>
            </Link>

            <Link
              href={cta.brandButtonHref}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-white/10 border-2 border-white/20 px-7 py-3.5 text-sm sm:text-base font-black text-white hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-300"
            >
              <ShoppingBag className="w-5 h-5 text-(--accent-light)" />
              <span>{cta.brandButtonText}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
