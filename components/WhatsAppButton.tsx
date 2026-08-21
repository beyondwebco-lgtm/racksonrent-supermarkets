"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/data/config";

export default function WhatsAppButton() {
  return (
    <a
      href={SITE_CONFIG.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enquire on WhatsApp"
      className="fixed bottom-4 sm:bottom-5 right-4 sm:right-5 bottom-[calc(1rem+env(safe-area-inset-bottom))] right-[calc(1rem+env(safe-area-inset-right))] z-40 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-3.5 sm:px-4 py-3 rounded-full shadow-xl border border-[#25D366]/20 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#25D366]/50 cursor-pointer min-h-[48px] min-w-[48px]"
    >
      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-white flex-shrink-0" />
      <span className="font-extrabold text-xs sm:text-sm hidden sm:inline-block pr-1 text-white">
        Enquire on WhatsApp
      </span>
    </a>
  );
}
