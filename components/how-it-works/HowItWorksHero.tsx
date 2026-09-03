"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Sparkles, CheckCircle2 } from "lucide-react";
import { HowItWorksHeroConfig } from "@/data/howItWorksData";

interface HowItWorksHeroProps {
  hero: HowItWorksHeroConfig;
}

export default function HowItWorksHero({ hero }: HowItWorksHeroProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 sm:mb-20">
      <div className="text-center max-w-3xl mx-auto mb-10">
        {/* Back to Home Button */}
        <Link
          href={hero.backHomeHref}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-(--primary) hover:text-(--primary-dark) bg-(--accent-light)/60 px-4 py-1.5 rounded-full border border-(--border) mb-6 transition-all hover:bg-(--accent-light) shadow-2xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{hero.backHomeLabel}</span>
        </Link>

        {/* Partnership Badge */}
        <div className="flex justify-center mb-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-(--primary) px-4 py-1 text-xs font-extrabold text-(--accent-light) shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-(--accent)" />
            <span>{hero.badge}</span>
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-(--primary) mb-4">
          {hero.title}
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg leading-relaxed text-(--text-muted) max-w-2xl mx-auto font-medium">
          {hero.description}
        </p>
      </div>

      {/* Hero Image Container */}
      <div className="relative max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-xl border-2 border-(--border) bg-white group">
        <div className="relative aspect-[16/9] max-h-[340px] sm:max-h-[380px] w-full overflow-hidden">
          <Image
            src={hero.image}
            alt={hero.alt}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            priority
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

          {/* Floating Badges */}
          <div className="absolute bottom-4 left-4 sm:left-6 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-(--border) shadow-md flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-(--primary)" />
            <span className="text-xs sm:text-sm font-extrabold text-(--primary)">
              {hero.stepsLabel}
            </span>
          </div>

          <div className="absolute bottom-4 right-4 sm:right-6 bg-(--primary) text-(--accent-light) px-3.5 py-1.5 rounded-xl border border-(--accent)/40 shadow-md flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-(--accent)" />
            <span className="text-xs sm:text-sm font-extrabold">
              {hero.partnershipLabel}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
