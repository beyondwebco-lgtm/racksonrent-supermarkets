"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { POPULAR_CATEGORIES, CategoryItem } from "@/data/categories";
import SectionHeader from "@/components/SectionHeader";

export default function PopularCategories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const totalItems = POPULAR_CATEGORIES.length;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);

  // Autoplay functionality (every 4.5 seconds)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  // Swipe support for touch devices
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX !== null && touchEndX !== null) {
      const distance = touchStartX - touchEndX;
      if (distance > 40) {
        nextSlide();
      } else if (distance < -40) {
        prevSlide();
      }
    }
    setTouchStartX(null);
    setTouchEndX(null);
    setIsPaused(false);
  };

  const handleCategoryClick = (index: number) => {
    if (index === activeIndex) {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section
      className="py-16 sm:py-24 bg-(--background) overflow-hidden"
      id="categories"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeader
          badge="Supermarket Display Categories"
          title="Popular Supermarket Product Categories"
          subtitle="Explore high-demand packaged foods, beverages, wellness products, personal-care items, household products, specialty foods, and emerging consumer brands displayed inside supermarkets across India."
        />

        {/* Center-Focused Carousel Container */}
        <div className="relative max-w-5xl mx-auto px-2 sm:px-12">
          
          {/* Previous Arrow Button */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous category"
            className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-(--primary) text-(--accent-light) border-2 border-(--accent) flex items-center justify-center shadow-xl transition-all hover:bg-(--primary-dark) hover:text-(--accent) hover:scale-110 active:scale-95 cursor-pointer touch-target"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
          </button>

          {/* Next Arrow Button */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next category"
            className="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-(--primary) text-(--accent-light) border-2 border-(--accent) flex items-center justify-center shadow-xl transition-all hover:bg-(--primary-dark) hover:text-(--accent) hover:scale-110 active:scale-95 cursor-pointer touch-target"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
          </button>

          {/* Carousel Stage */}
          <div
            className="relative h-[500px] sm:h-[560px] flex items-center justify-center touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {POPULAR_CATEGORIES.map((cat: CategoryItem, index: number) => {
              // Calculate relative position with infinite loop wrapping
              let diff = index - activeIndex;
              if (diff > totalItems / 2) diff -= totalItems;
              if (diff < -totalItems / 2) diff += totalItems;

              const isActive = diff === 0;
              const isPrev = diff === -1;
              const isNext = diff === 1;

              // Hide items further away than prev/next for clean visual focus
              if (!isActive && !isPrev && !isNext) {
                return null;
              }

              return (
                <div
                  key={cat.id}
                  onClick={() => handleCategoryClick(index)}
                  style={{
                    transform: isActive
                      ? "translateX(0%) scale(1)"
                      : isPrev
                      ? "translateX(-75%) scale(0.85)"
                      : "translateX(75%) scale(0.85)",
                    opacity: isActive ? 1 : 0.4,
                    filter: isActive ? "blur(0px)" : "blur(2px)",
                    zIndex: isActive ? 10 : 1,
                    transition:
                      "transform 600ms ease, opacity 600ms ease, filter 600ms ease",
                  }}
                  className={`group absolute w-[calc(100vw-72px)] max-w-[340px] sm:w-[360px] cursor-pointer select-none rounded-3xl border-2 bg-(--background) p-4 sm:p-6 shadow-2xl flex flex-col justify-between overflow-hidden ${
                    isActive
                      ? "border-(--primary) shadow-[0_20px_50px_rgba(101,0,0,0.22)]"
                      : "border-(--border) pointer-events-auto hover:opacity-75"
                  }`}
                >
                  <div>
                    {/* Badge */}
                    {cat.badge && (
                      <span className="inline-block rounded-full bg-(--accent-light) px-3 py-1 text-xs font-extrabold text-(--text) border border-(--border) mb-3">
                        {cat.badge}
                      </span>
                    )}

                    {/* Image Container */}
                    <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-[#F8F8FA] border border-(--border) mb-4 flex items-center justify-center">
                      <Image
                        src={cat.image}
                        alt={cat.alt}
                        fill
                        sizes="(max-width: 640px) 290px, 360px"
                        priority={isActive}
                        loading={isActive ? "eager" : "lazy"}
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div className="px-1">
                      <h3 className="font-extrabold text-base sm:text-lg lg:text-xl text-(--text) group-hover:text-(--text) transition-colors duration-300 leading-snug mb-2 whitespace-normal break-words">
                        {cat.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-(--text-muted) leading-relaxed font-medium line-clamp-2">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer CTA */}
                  <div className="mt-5 pt-3 border-t border-(--border) px-1 flex items-center justify-between text-xs sm:text-sm font-extrabold text-(--text)">
                    <span>Explore Spaces</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination Indicators */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {POPULAR_CATEGORIES.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  index === activeIndex
                    ? "w-8 h-2.5 bg-(--primary)"
                    : "w-2.5 h-2.5 bg-[#E5E7EB] hover:bg-(--primary)/50"
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

