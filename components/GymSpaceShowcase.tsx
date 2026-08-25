"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import {
  Stethoscope,
  ShoppingBag,
  Sparkles,
  Apple,
  HeartHandshake,
  Zap,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Tag,
  ShieldCheck,
  Users,
  Layers,
  Headphones,
  MapPin,
  ArrowRight,
  Cake,
  Cookie,
  Utensils,
  Store,
} from "lucide-react";

import {
  SHOWCASE_CATEGORIES,
  SHOWCASE_TRUST_ITEMS,
  ShowcaseCategory,
} from "@/data/showcase";

interface GymSpaceShowcaseProps {
  onSelectCategoryAction?: (
    role: "gym-owner" | "wellness",
    prefillData: { spaceType?: string; category?: string }
  ) => void;
}

export default function GymSpaceShowcase({
  onSelectCategoryAction,
}: GymSpaceShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const showcaseRef = useRef<HTMLDivElement>(null);

  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Stethoscope,
    ShoppingBag,
    Sparkles,
    Apple,
    HeartHandshake,
    Zap,
    ShieldCheck,
    Users,
    Layers,
    Headphones,
    MapPin,
    Cake,
    Cookie,
    Utensils,
  };


  const activeCategory: ShowcaseCategory = SHOWCASE_CATEGORIES[activeIndex];

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % SHOWCASE_CATEGORIES.length);
    setTimeout(() => setIsAnimating(false), 450);
  }, [isAnimating]);

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(
      (prev) => (prev - 1 + SHOWCASE_CATEGORIES.length) % SHOWCASE_CATEGORIES.length
    );
    setTimeout(() => setIsAnimating(false), 450);
  }, [isAnimating]);

  // Autoplay rotation every 7 seconds
  useEffect(() => {
    if (isAutoplayPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(interval);
  }, [handleNext, isAutoplayPaused]);

  // Keyboard Arrow Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "SELECT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }
      if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  // Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX - touchEndX;
    if (Math.abs(diffX) > 40) {
      if (diffX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  const handleCtaPrimaryClick = () => {
    if (onSelectCategoryAction) {
      onSelectCategoryAction("gym-owner", {
        spaceType: activeCategory.spaceTypePrimary,
      });
    }
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCtaSecondaryClick = () => {
    if (onSelectCategoryAction) {
      onSelectCategoryAction("wellness", {
        category: activeCategory.categorySecondary,
      });
    }
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="py-16 sm:py-24 bg-[#F9FAFB] border-b border-[#E5E7EB] relative overflow-hidden"
      id="opportunities"
      onMouseEnter={() => setIsAutoplayPaused(true)}
      onMouseLeave={() => setIsAutoplayPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
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
              • Supermarket Display Opportunities •
            </span>

            {/* Right Line */}
            <div className="w-12 sm:w-20 h-px bg-[#1F2937] opacity-40" />
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#1F2937] md:text-5xl">
            <span className="hidden sm:inline">Choose What You Want to Display Inside a Supermarket</span>
            <span className="sm:hidden">Explore Supermarket Display Formats</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#6B7280] md:text-lg font-medium">
            Explore supermarket shelves, checkout counters, end-cap displays, refrigerated sections, promotional racks, tabletop displays, grab-and-go areas, and premium product spaces inside active retail stores.
          </p>
        </div>


        {/* Category Tab Bar (Flex Wrap - Fully Visible Without Horizontal Scroll) */}
        <div className="mb-10 flex items-center justify-center">
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center max-w-5xl mx-auto px-2">
            {SHOWCASE_CATEGORIES.map((cat, idx) => {
              const IconComp = iconMap[cat.iconName] || Layers;
              const isActive = idx === activeIndex;
              return (
                <button
                  type="button"
                  key={cat.id}
                  onClick={() => {
                    if (isAnimating) return;
                    setIsAnimating(true);
                    setActiveIndex(idx);
                    setTimeout(() => setIsAnimating(false), 450);
                  }}
                  className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-extrabold border transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#1F2937] text-[#FEF9C3] border-[#FACC15] shadow-md scale-105"
                      : "bg-[#F9FAFB] text-[#1F2937] border-[#E5E7EB] hover:bg-[#FEF9C3]/40"
                  }`}
                >
                  <IconComp className={`w-4 h-4 flex-shrink-0 ${isActive ? "text-[#FACC15]" : "text-[#1F2937]"}`} />
                  <span className="whitespace-normal text-left">{cat.shortName}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Interactive Showcase Panel */}
        <div
          ref={showcaseRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative bg-[#F9FAFB] rounded-3xl border-2 border-[#1F2937] p-4 sm:p-10 px-4 sm:px-14 lg:px-16 shadow-[0_24px_70px_rgba(107,15,26,0.12)] overflow-hidden"
        >
          {/* Left Arrow Button on Left Side of Box */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous space category"
            className="absolute left-1.5 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-[#1F2937] text-[#FEF9C3] border-2 border-[#FACC15] flex items-center justify-center shadow-lg hover:bg-[#111827] hover:text-[#FACC15] hover:scale-105 transition-all cursor-pointer active:scale-95 touch-target"
          >
            <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 stroke-[3]" />
          </button>

          {/* Right Arrow Button on Right Side of Box */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next space category"
            className="absolute right-1.5 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-[#1F2937] text-[#FEF9C3] border-2 border-[#FACC15] flex items-center justify-center shadow-lg hover:bg-[#111827] hover:text-[#FACC15] hover:scale-105 transition-all cursor-pointer active:scale-95 touch-target"
          >
            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 stroke-[3]" />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center px-6 sm:px-0">
            
            {/* Left Column: Category Content */}
            <div
              className={`lg:col-span-7 space-y-5 sm:space-y-6 transition-all duration-450 ${
                isAnimating ? "opacity-30 scale-98 translate-x-2" : "opacity-100 scale-100 translate-x-0"
              }`}
            >
              <div>
                <span className="inline-flex rounded-full bg-[#FEF9C3] px-3.5 py-1 text-xs font-black text-[#1F2937] border border-[#1F2937]/20">
                  {activeCategory.eyebrow}
                </span>
                <h3 className="mt-2.5 text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#1F2937] leading-snug">
                  {activeCategory.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-base text-[#6B7280] leading-relaxed font-medium">
                  {activeCategory.description}
                </p>
              </div>

              {/* Suitable Products / Services */}
              <div>
                <span className="block text-xs font-extrabold text-[#1F2937] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5" />
                  <span>Suitable For</span>
                </span>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {activeCategory.suitableFor.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-[#FEF9C3]/60 text-[#111827] text-[11px] sm:text-xs font-bold border border-[#1F2937]/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Benefits */}
              <div>
                <span className="block text-xs font-extrabold text-[#1F2937] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Key Benefits</span>
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeCategory.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#4B5563] font-extrabold">
                      <CheckCircle2 className="w-4 h-4 text-[#1F2937] flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="button"
                  onClick={handleCtaPrimaryClick}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FACC15] text-[#111827] border border-[#1F2937]/30 px-5 sm:px-6 py-3 font-extrabold text-xs sm:text-sm shadow-xs hover:bg-[#111827] hover:text-[#FACC15] transition-all cursor-pointer min-h-[44px]"
                >
                  <Utensils className="w-4 h-4" />
                  <span>{activeCategory.primaryCta}</span>
                </button>

                <button
                  type="button"
                  onClick={handleCtaSecondaryClick}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1F2937] text-[#FEF9C3] border border-[#1F2937] px-5 sm:px-6 py-3 font-extrabold text-xs sm:text-sm shadow-xs hover:bg-[#111827] hover:text-[#FACC15] transition-all cursor-pointer min-h-[44px]"
                >
                  <Store className="w-4 h-4 text-[#FACC15]" />
                  <span>{activeCategory.secondaryCta}</span>
                </button>
              </div>

            </div>

            {/* Right Column: Featured Category Image */}
            <div className="lg:col-span-5 relative mt-4 lg:mt-0">
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#1F2937]/20 bg-[#111827] shadow-[0_16px_40px_rgba(107,15,26,0.15)] aspect-4/5 w-full max-w-lg mx-auto group">
                <Image
                  key={activeCategory.id}
                  src={activeCategory.image}
                  alt={activeCategory.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className={`object-cover object-top transition-all duration-500 group-hover:scale-105 ${
                    isAnimating ? "opacity-40 scale-102" : "opacity-100 scale-100"
                  }`}
                />
                
                {/* Dark Gradient at Bottom for Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

                {/* Floating Category Label */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-[#111827] text-white px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-2xl border-2 border-[#FACC15] shadow-xl flex items-center justify-between text-xs sm:text-sm lg:text-base font-bold tracking-wide z-10">
                  <span className="whitespace-normal leading-tight">{activeCategory.title} Space</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#FACC15] flex-shrink-0 ml-2" />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Compact Trust Supporting Strip */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 pt-6 border-t border-[#E5E7EB]">
          {SHOWCASE_TRUST_ITEMS.map((item, idx) => {
            const IconComp = iconMap[item.iconName] || ShieldCheck;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 rounded-2xl bg-[#F9FAFB] border border-[#E5E7EB] shadow-2xs"
              >
                <div className="p-2 rounded-xl bg-[#FEF9C3] text-[#1F2937] flex-shrink-0">
                  <IconComp className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-[#1F2937] leading-tight">
                    {item.label}
                  </h4>
                  <p className="text-[10px] text-[#6B7280] font-bold mt-0.5">
                    {item.desc}
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
