"use client";

import React, { useState } from "react";
import { Search, MapPin, Layers, Maximize2, Tag } from "lucide-react";
import { COMPACT_SPACE_TYPES, RACK_SIZES } from "@/data/spaceTypes";
import { POPULAR_CATEGORIES } from "@/data/categories";

interface SpaceSearchProps {
  onSearch?: (searchParams: {
    location: string;
    spaceType: string;
    rackSize: string;
    category: string;
  }) => void;
}

export default function SpaceSearch({ onSearch }: SpaceSearchProps) {
  const [location, setLocation] = useState("");
  const [spaceType, setSpaceType] = useState("Supermarket Shelf Display");
  const [rackSize, setRackSize] = useState("Small Display");
  const [category, setCategory] = useState("Packaged Foods & FMCG");


  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({
        location,
        spaceType,
        rackSize,
        category,
      });
    }
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-6 bg-[#F9FAFB] relative -mt-6 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <form
          onSubmit={handleSearchSubmit}
          className="bg-[#F9FAFB] rounded-3xl border-2 border-[#1F2937] p-4 sm:p-5 shadow-[0_16px_40px_rgba(107,15,26,0.12)]"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 items-end">
            
            {/* Location Input */}
            <div>
              <label className="block text-xs font-bold text-[#1F2937] uppercase tracking-wider mb-1 flex items-center gap-1" htmlFor="search-location">
                <MapPin className="w-3.5 h-3.5 text-[#1F2937]" />
                <span>Location</span>
              </label>
              <input
                id="search-location"
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Hyderabad"
                className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3 py-2.5 text-[#4B5563] text-xs sm:text-sm outline-none transition focus:border-[#1F2937] focus:ring-2 focus:ring-[#FEF9C3] font-medium min-h-[44px]"
              />
            </div>

            {/* Space Type Select */}
            <div>
              <label className="block text-xs font-bold text-[#1F2937] uppercase tracking-wider mb-1 flex items-center gap-1" htmlFor="search-space-type">
                <Layers className="w-3.5 h-3.5 text-[#1F2937]" />
                <span>Supermarket Display</span>
              </label>
              <select
                id="search-space-type"
                value={spaceType}
                onChange={(e) => setSpaceType(e.target.value)}
                className="w-full max-w-full rounded-xl border border-[#E5E7EB] bg-white px-3 py-2.5 text-[#4B5563] text-xs sm:text-sm outline-none transition focus:border-[#1F2937] focus:ring-2 focus:ring-[#FEF9C3] font-medium min-h-[44px] truncate"
              >
                {COMPACT_SPACE_TYPES.map((st) => (
                  <option key={st.id} value={st.name}>
                    {st.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Space Size Select */}
            <div>
              <label className="block text-xs font-bold text-[#1F2937] uppercase tracking-wider mb-1 flex items-center gap-1" htmlFor="search-rack-size">
                <Maximize2 className="w-3.5 h-3.5 text-[#1F2937]" />
                <span>Space Size</span>
              </label>
              <select
                id="search-rack-size"
                value={rackSize}
                onChange={(e) => setRackSize(e.target.value)}
                className="w-full max-w-full rounded-xl border border-[#E5E7EB] bg-white px-3 py-2.5 text-[#4B5563] text-xs sm:text-sm outline-none transition focus:border-[#1F2937] focus:ring-2 focus:ring-[#FEF9C3] font-medium min-h-[44px] truncate"
              >
                {RACK_SIZES.map((rs) => (
                  <option key={rs.id} value={rs.name}>
                    {rs.name} ({rs.dimensions})
                  </option>
                ))}
              </select>
            </div>

            {/* Category Select */}
            <div>
              <label className="block text-xs font-bold text-[#1F2937] uppercase tracking-wider mb-1 flex items-center gap-1" htmlFor="search-category">
                <Tag className="w-3.5 h-3.5 text-[#1F2937]" />
                <span>Category</span>
              </label>
              <select
                id="search-category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full max-w-full rounded-xl border border-[#E5E7EB] bg-white px-3 py-2.5 text-[#4B5563] text-xs sm:text-sm outline-none transition focus:border-[#1F2937] focus:ring-2 focus:ring-[#FEF9C3] font-medium min-h-[44px] truncate"
              >
                {POPULAR_CATEGORIES.slice(0, 9).map((cat) => (
                  <option key={cat.id} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Button (Single Line on Desktop) */}
            <div className="col-span-1">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#FACC15] text-[#111827] border border-[#1F2937]/30 px-4 py-2.5 font-extrabold text-xs sm:text-sm shadow-xs hover:bg-[#111827] hover:text-[#FACC15] transition-all cursor-pointer min-h-[44px]"
              >
                <Search className="w-4 h-4" />
                <span>Search Spaces</span>
              </button>
            </div>

          </div>
        </form>
      </div>
    </section>
  );
}

