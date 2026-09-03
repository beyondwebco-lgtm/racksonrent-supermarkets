"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { Download, X } from "lucide-react";
import { JourneyPerspective } from "@/data/howItWorksData";

interface ImageLightboxProps {
  isOpen: boolean;
  perspective: JourneyPerspective;
  onClose: () => void;
}

export default function ImageLightbox({
  isOpen,
  perspective,
  onClose,
}: ImageLightboxProps) {
  // ESC key listener & body scroll lock
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    },
    [isOpen, onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`${perspective.label} High Resolution View`}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      {/* Header Controls */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 flex items-center gap-3">
        <a
          href={perspective.image}
          download={perspective.downloadName}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-(--accent) text-(--primary) text-xs font-black hover:bg-white transition shadow-lg"
        >
          <Download className="w-4 h-4" />
          <span>Download High Res</span>
        </a>

        <button
          type="button"
          onClick={onClose}
          className="p-2.5 rounded-full bg-white/20 hover:bg-white text-white hover:text-(--primary) transition-all cursor-pointer shadow-lg"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Image Container */}
      <div className="relative max-w-5xl w-full max-h-[90vh] overflow-auto rounded-2xl p-2 bg-white/10 border border-white/20">
        <div className="relative w-full aspect-[4/3] min-h-[400px]">
          <Image
            src={perspective.image}
            alt={perspective.alt}
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="w-full h-auto object-contain rounded-xl shadow-2xl mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
