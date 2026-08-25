import React from "react";
import { Users, ShieldCheck, Phone, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/data/config";

export default function TopBar() {
  return (
    <div className="bg-(--primary) text-white text-[11px] sm:text-xs border-b border-(--primary-dark) py-2 px-3 sm:px-6 lg:px-8 font-semibold relative z-50 overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Left Side */}
        <div className="flex items-center gap-1.5 text-(--accent-light) truncate min-w-0">
          <Users className="w-3.5 h-3.5 text-(--accent) flex-shrink-0" />
          <span className="truncate">{SITE_CONFIG.topBarTextLeft}</span>
        </div>

        {/* Centre Side */}
        <div className="hidden md:flex items-center gap-1.5 text-white/90 font-medium">
          <ShieldCheck className="w-3.5 h-3.5 text-(--accent) flex-shrink-0" />
          <span>{SITE_CONFIG.topBarTextCenter}</span>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
          <a
            href={SITE_CONFIG.telLink}
            className="flex items-center gap-1 hover:text-(--accent) transition-colors"
          >
            <Phone className="w-3 h-3 text-(--accent)" />
            <span>{SITE_CONFIG.phoneFormatted}</span>
          </a>

          <span className="text-(--accent)/40 hidden sm:inline">•</span>

          <a
            href={SITE_CONFIG.mailtoLink}
            className="hidden sm:flex items-center gap-1 hover:text-(--accent) transition-colors"
          >
            <Mail className="w-3 h-3 text-(--accent)" />
            <span>{SITE_CONFIG.email}</span>
          </a>
        </div>

      </div>
    </div>
  );
}
