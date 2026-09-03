"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Maximize2, Download, CheckCircle2 } from "lucide-react";
import { JourneyPerspective } from "@/data/howItWorksData";

interface JourneyInfographicProps {
  perspective: JourneyPerspective;
  onOpenModal: () => void;
}

export default function JourneyInfographic({
  perspective,
  onOpenModal,
}: JourneyInfographicProps) {
  return (
    <div className="bg-white rounded-3xl border-2 border-(--border) p-4 sm:p-8 shadow-xl relative overflow-hidden group">
      {/* Header Badge & Title */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 pb-4 border-b border-(--border)">
        <div className="text-center sm:text-left">
          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-(--primary) bg-(--accent-light) px-3.5 py-1 rounded-full border border-(--accent)/40 mb-1.5 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-(--primary)" />
            <span>{perspective.badge}</span>
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-(--primary)">
            {perspective.heading}
          </h3>
        </div>

        <div className="flex items-center gap-2 flex-wrap justify-center">
          <button
            type="button"
            onClick={onOpenModal}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-(--accent-light) text-(--primary) border border-(--accent) text-xs font-extrabold hover:bg-(--accent) transition-all cursor-pointer shadow-2xs"
          >
            <Maximize2 className="w-4 h-4 text-(--primary)" />
            <span>Full Screen View</span>
          </button>

          <a
            href={perspective.image}
            download={perspective.downloadName}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-(--primary) text-white border border-(--primary) text-xs font-extrabold hover:bg-(--primary-dark) transition-all cursor-pointer shadow-2xs"
          >
            <Download className="w-4 h-4 text-(--accent)" />
            <span>Download Guide</span>
          </a>
        </div>
      </div>

      {/* Main Infographic Image */}
      <div
        onClick={onOpenModal}
        className="relative w-full rounded-2xl overflow-hidden border border-(--border) bg-(--background) cursor-zoom-in shadow-inner group/img transition-all duration-300 hover:shadow-2xl"
      >
        <div className="relative w-full aspect-[4/3] max-h-[750px]">
          <Image
            src={perspective.image}
            alt={perspective.alt}
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="w-full h-full object-contain transition-transform duration-500 group-hover/img:scale-[1.01]"
          />
        </div>

        <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 transition-colors flex items-center justify-center pointer-events-none">
          <span className="opacity-0 group-hover/img:opacity-100 transition-opacity bg-(--primary) text-(--accent-light) border border-(--accent) px-5 py-2.5 rounded-full text-xs font-extrabold shadow-2xl flex items-center gap-2">
            <Maximize2 className="w-4 h-4 text-(--accent)" />
            Click to Expand Full Screen
          </span>
        </div>
      </div>

      {/* Bottom Caption Bar */}
      <div className="mt-6 pt-4 border-t border-(--border) flex flex-col sm:flex-row items-center justify-between text-xs font-bold text-(--text-muted) gap-2">
        <span className="flex items-center gap-1.5 text-center sm:text-left">
          <CheckCircle2 className="w-4 h-4 text-(--primary) flex-shrink-0" />
          <span>{perspective.caption}</span>
        </span>
        <button
          type="button"
          onClick={onOpenModal}
          className="text-(--primary) font-extrabold cursor-pointer hover:underline bg-transparent border-0 p-0"
        >
          Tap Image for High Resolution View →
        </button>
      </div>
    </div>
  );
}
