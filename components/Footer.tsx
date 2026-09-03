import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS } from "@/data/config";

export default function Footer() {
  return (
    <footer className="border-t border-(--border) bg-(--primary-dark) text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-white/10">
          
          {/* Footer Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0 group focus:outline-none"
            aria-label="Racks on Rent Home"
          >
            {/* Square Rack-Icon Logo */}
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden flex-shrink-0 bg-white p-0.5 border border-(--accent)/30 shadow-2xs">
              <Image
                src="/images/navbar-logo.jpeg"
                alt="Racks on Rent Logo Icon"
                fill
                sizes="(max-width: 640px) 44px, 48px"
                priority
                className="object-contain"
              />
            </div>

            {/* Separate Horizontal Logo Lockup */}
            <div className="flex flex-col justify-center">
              {/* Main Brand Title */}
              <div className="flex items-baseline font-black tracking-tighter leading-none text-xl sm:text-2xl">
                <span className="text-[#6B0F1A] font-black italic">Racks</span>
                <span className="text-[#F4E409] font-black italic ml-1">on Rent</span>
              </div>

              {/* Tagline */}
              <div className="flex items-center gap-1 mt-0.5 text-[8px] sm:text-[9px] font-extrabold uppercase tracking-[0.18em] leading-none whitespace-nowrap">
                <span className="h-[1.5px] w-3 bg-[#6B0F1A] inline-block" />
                <span className="text-[#6B0F1A]">SHARE SPACE.</span>
                <span className="text-[#F4E409]">GROW TOGETHER.</span>
                <span className="h-[1.5px] w-3 bg-[#6B0F1A] inline-block" />
              </div>
            </div>
          </Link>

          {/* Quick Nav */}
          <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-bold">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-(--accent-light) hover:text-(--accent) transition-colors py-1.5 px-1 min-h-[44px] inline-flex items-center"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Direct Contact Links */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm font-bold">
            <a
              href={SITE_CONFIG.telLink}
              className="inline-flex items-center gap-1.5 text-(--background) hover:text-(--accent) transition-colors py-1.5 px-1 min-h-[44px]"
            >
              <Phone className="w-4 h-4 text-(--accent)" />
              <span>{SITE_CONFIG.phoneDisplay}</span>
            </a>

            <span className="text-(--accent)/40 hidden sm:inline">•</span>

            <a
              href={SITE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-(--background) hover:text-(--accent) transition-colors py-1.5 px-1 min-h-[44px]"
            >
              <MessageCircle className="w-4 h-4 text-(--accent) fill-current" />
              <span>WhatsApp</span>
            </a>

            <span className="text-(--accent)/40 hidden sm:inline">•</span>

            <a
              href={SITE_CONFIG.mailtoLink}
              className="inline-flex items-center gap-1.5 text-(--background) hover:text-(--accent) transition-colors py-1.5 px-1 min-h-[44px]"
            >
              <Mail className="w-4 h-4 text-(--accent)" />
              <span>{SITE_CONFIG.email}</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 text-center text-xs text-(--accent-light)/80 font-medium">
          <p>© 2026 Racks on Rent. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
