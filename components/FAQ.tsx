"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { EIGHT_FAQS } from "@/data/faqs";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF5] border-y border-[#F0E2E4]" id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-4 w-full mb-6">
            {/* Left Line */}
            <div className="w-12 sm:w-20 h-px bg-[#6B0F1A] opacity-40" />

            {/* Pill Badge */}
            <span
              className="
                px-5 py-2
                rounded-full
                border-2 border-[#6B0F1A]
                bg-[#F4E409]
                text-[#3D0710] font-bold
                text-xs sm:text-sm
                tracking-widest uppercase
                whitespace-nowrap
                select-none
              "
            >
              • Got Questions? •
            </span>

            {/* Right Line */}
            <div className="w-12 sm:w-20 h-px bg-[#6B0F1A] opacity-40" />
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#6B0F1A] md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#5F5F5F] md:text-lg font-medium">
            Everything you need to know about Racks on Rent, supermarket display spaces, and the retail space-sharing process.
          </p>
        </div>

        {/* 8 Accessible FAQ Accordion with Smooth Grid Expansion */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {EIGHT_FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`group rounded-2xl border transition-all duration-300 shadow-xs overflow-hidden ${
                  isOpen
                    ? "border-[#6B0F1A] bg-[#FFF6A3]/40 shadow-sm"
                    : "border-[#F0E2E4] bg-[#FFFDF5] hover:border-[#6B0F1A]/50 hover:bg-[#FFF6A3]/20 hover:-translate-y-0.5"
                }`}
              >
                <button
                  type="button"
                  id={`faq-btn-${faq.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${faq.id}`}
                  onClick={() => toggleItem(faq.id)}
                  className="w-full flex items-center justify-between gap-3 sm:gap-4 p-4 sm:p-6 text-left font-black text-sm sm:text-base md:text-lg text-[#6B0F1A] hover:text-[#B8913A] focus:outline-none transition-colors cursor-pointer min-h-[48px]"
                >
                  <span className="group-hover:text-[#B8913A] group-hover:translate-x-1 transition-all duration-200 break-words">{faq.question}</span>
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen ? "rotate-180 bg-[#6B0F1A] text-[#FFF6A3]" : "bg-[#FFF6A3] text-[#6B0F1A] group-hover:bg-[#6B0F1A] group-hover:text-[#FFF6A3]"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </span>
                </button>

                <div
                  id={`faq-content-${faq.id}`}
                  role="region"
                  aria-labelledby={`faq-btn-${faq.id}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-6 sm:px-6 pt-1 text-[#5F5F5F] text-sm sm:text-base leading-relaxed border-t border-[#F0E2E4] bg-[#FFFDF5] font-medium">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
