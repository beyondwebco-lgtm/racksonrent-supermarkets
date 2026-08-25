"use client";

import React, { useState } from "react";
import { Store, Utensils, HelpCircle, MessageCircle, CheckCircle2, AlertCircle } from "lucide-react";
import { SITE_CONFIG } from "@/data/config";

type RoleType = "gym-owner" | "wellness" | "general";

interface EnquiryFormProps {
  selectedRole?: RoleType;
  initialSearchValues?: {
    location?: string;
    spaceType?: string;
    rackSize?: string;
    category?: string;
  };
  onRoleChange?: (role: RoleType) => void;
}

export default function EnquiryForm({ selectedRole = "gym-owner", initialSearchValues, onRoleChange }: EnquiryFormProps) {
  const [internalRole, setInternalRole] = useState<RoleType | null>(null);

  const role = internalRole ?? selectedRole;

  const [formData, setFormData] = useState({
    fullName: "",
    bakeryName: "",
    brandName: "",
    phone: "",
    city: initialSearchValues?.location || "",
    availableSpace: initialSearchValues?.spaceType || "Supermarket Shelf Display",
    requiredSpace: initialSearchValues?.spaceType || "Supermarket Shelf Display",
    rackSize: initialSearchValues?.rackSize || "Small Display",
    category: initialSearchValues?.category || "Packaged Foods & FMCG",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleRoleSelect = (newRole: RoleType) => {
    setInternalRole(newRole);
    if (onRoleChange) {
      onRoleChange(newRole);
    }
    setErrors({});
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (role === "gym-owner" && !formData.bakeryName.trim()) newErrors.bakeryName = "Supermarket / Store Name is required";
    if (role === "wellness" && !formData.brandName.trim()) newErrors.brandName = "Brand Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone Number is required";
    if (!formData.city.trim() && !initialSearchValues?.location) newErrors.city = "City is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const activeCity = formData.city || initialSearchValues?.location || "";
    const activeSpaceType = formData.availableSpace || initialSearchValues?.spaceType || "Supermarket Shelf Display";
    const activeRequiredSpace = formData.requiredSpace || initialSearchValues?.spaceType || "Supermarket Shelf Display";
    const activeRackSize = formData.rackSize || initialSearchValues?.rackSize || "Small Display";
    const activeCategory = formData.category || initialSearchValues?.category || "Packaged Foods & FMCG";

    let roleText = "Supermarket Owner";
    let detailsText = "";

    if (role === "gym-owner") {
      roleText = "Supermarket Owner";
      detailsText = `Name: ${formData.fullName}\nSupermarket Name: ${formData.bakeryName}\nPhone: ${formData.phone}\nCity: ${activeCity}\nAvailable Space: ${activeSpaceType}\nDisplay Space Size: ${activeRackSize}\nMessage: ${formData.message || "N/A"}`;
    } else if (role === "wellness") {
      roleText = "Product Brand / Entrepreneur";
      detailsText = `Name: ${formData.fullName}\nBrand Name: ${formData.brandName}\nPhone: ${formData.phone}\nCity: ${activeCity}\nProduct Category: ${activeCategory}\nRequired Space: ${activeRequiredSpace}\nPreferred Space Size: ${activeRackSize}\nMessage: ${formData.message || "N/A"}`;
    } else {
      roleText = "General Enquiry";
      detailsText = `Name: ${formData.fullName}\nPhone: ${formData.phone}\nCity: ${activeCity}\nMessage: ${formData.message || "N/A"}`;
    }

    const messageText = `Hello Racks on Rent,

I am interested in supermarket display space opportunities.

Role: ${roleText}
${detailsText}`;

    const waUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(messageText)}`;

    setSubmitted(true);
    setTimeout(() => {
      window.open(waUrl, "_blank");
    }, 300);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#F9FAFB] border-t border-[#E5E7EB]" id="contact">
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
              • Get In Touch •
            </span>

            {/* Right Line */}
            <div className="w-12 sm:w-20 h-px bg-[#1F2937] opacity-40" />
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#1F2937] md:text-5xl">
            Tell Us What You Are Looking For
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#6B7280] md:text-lg font-medium">
            Choose your role, enter your supermarket or product details, and continue directly on WhatsApp.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Role Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center p-1.5 bg-[#FEF9C3]/30 rounded-2xl mb-8 gap-1.5 border border-[#E5E7EB] shadow-xs">
            <button
              type="button"
              onClick={() => handleRoleSelect("gym-owner")}
              className={`flex-1 min-w-[120px] sm:min-w-[140px] min-h-[44px] flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                role === "gym-owner"
                  ? "bg-[#1F2937] text-[#FEF9C3] shadow-xs"
                  : "text-[#1F2937] hover:bg-[#FEF9C3]"
              }`}
            >
              <Store className="w-4 h-4 flex-shrink-0" />
              <span>Supermarket Owner</span>
            </button>

            <button
              type="button"
              onClick={() => handleRoleSelect("wellness")}
              className={`flex-1 min-w-[120px] sm:min-w-[140px] min-h-[44px] flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                role === "wellness"
                  ? "bg-[#1F2937] text-[#FEF9C3] shadow-xs"
                  : "text-[#1F2937] hover:bg-[#FEF9C3]"
              }`}
            >
              <Utensils className="w-4 h-4 flex-shrink-0" />
              <span>Brand / Food Entrepreneur</span>
            </button>

            <button
              type="button"
              onClick={() => handleRoleSelect("general")}
              className={`flex-1 min-w-[120px] sm:min-w-[140px] min-h-[44px] flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                role === "general"
                  ? "bg-[#1F2937] text-[#FEF9C3] shadow-xs"
                  : "text-[#1F2937] hover:bg-[#FEF9C3]"
              }`}
            >
              <HelpCircle className="w-4 h-4 flex-shrink-0" />
              <span>General Enquiry</span>
            </button>
          </div>

          {/* Form Box */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4 sm:space-y-5 rounded-3xl border-2 border-[#E5E7EB] bg-[#F9FAFB] p-4 sm:p-10 shadow-[0_12px_35px_rgba(107,15,26,0.06)]"
          >
            {submitted && (
              <div className="bg-[#FEF9C3] border border-[#1F2937]/30 text-[#1F2937] p-4 rounded-2xl flex items-center gap-3 text-sm font-bold">
                <CheckCircle2 className="w-5 h-5 text-[#1F2937] flex-shrink-0" />
                <span>Opening WhatsApp with your enquiry details...</span>
              </div>
            )}

            {/* Common Field: Full Name */}
            <div>
              <label className="block text-xs font-bold text-[#1F2937] uppercase tracking-wider mb-1.5" htmlFor="fullName">
                Full Name *
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Rahul Sharma"
                className={`w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-[#4B5563] outline-none transition placeholder:text-[#6B7280]/70 focus:border-[#1F2937] focus:ring-4 focus:ring-[#FEF9C3] text-sm sm:text-base min-h-[44px] ${
                  errors.fullName ? "border-red-500 bg-red-50/30" : ""
                }`}
              />
              {errors.fullName && <p className="text-xs text-red-600 mt-1 font-semibold">{errors.fullName}</p>}
            </div>

            {/* Supermarket Owner specific field */}
            {role === "gym-owner" && (
              <div>
                <label className="block text-xs font-bold text-[#1F2937] uppercase tracking-wider mb-1.5" htmlFor="bakeryName">
                  Supermarket / Store Name *
                </label>
                <input
                  id="bakeryName"
                  name="bakeryName"
                  type="text"
                  value={formData.bakeryName}
                  onChange={handleChange}
                  placeholder="e.g. FreshMart Supermarket"
                  className={`w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-[#4B5563] outline-none transition placeholder:text-[#6B7280]/70 focus:border-[#1F2937] focus:ring-4 focus:ring-[#FEF9C3] text-sm ${
                    errors.bakeryName ? "border-red-500 bg-red-50/30" : ""
                  }`}
                />
                {errors.bakeryName && <p className="text-xs text-red-600 mt-1 font-semibold">{errors.bakeryName}</p>}
              </div>
            )}

            {/* Product Brand Entrepreneur specific field */}
            {role === "wellness" && (
              <div>
                <label className="block text-xs font-bold text-[#1F2937] uppercase tracking-wider mb-1.5" htmlFor="brandName">
                  Brand Name *
                </label>
                <input
                  id="brandName"
                  name="brandName"
                  type="text"
                  value={formData.brandName}
                  onChange={handleChange}
                  placeholder="e.g. FreshBites Foods"
                  className={`w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-[#4B5563] outline-none transition placeholder:text-[#6B7280]/70 focus:border-[#1F2937] focus:ring-4 focus:ring-[#FEF9C3] text-sm ${
                    errors.brandName ? "border-red-500 bg-red-50/30" : ""
                  }`}
                />
                {errors.brandName && <p className="text-xs text-red-600 mt-1 font-semibold">{errors.brandName}</p>}
              </div>
            )}

            {/* Phone & City Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#1F2937] uppercase tracking-wider mb-1.5" htmlFor="phone">
                  Phone Number *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="7995424477"
                  className={`w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-[#4B5563] outline-none transition placeholder:text-[#6B7280]/70 focus:border-[#1F2937] focus:ring-4 focus:ring-[#FEF9C3] text-sm ${
                    errors.phone ? "border-red-500 bg-red-50/30" : ""
                  }`}
                />
                {errors.phone && <p className="text-xs text-red-600 mt-1 font-semibold">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1F2937] uppercase tracking-wider mb-1.5" htmlFor="city">
                  City *
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  value={formData.city || initialSearchValues?.location || ""}
                  onChange={handleChange}
                  placeholder="e.g. Hyderabad"
                  className={`w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-[#4B5563] outline-none transition placeholder:text-[#6B7280]/70 focus:border-[#1F2937] focus:ring-4 focus:ring-[#FEF9C3] text-sm ${
                    errors.city ? "border-red-500 bg-red-50/30" : ""
                  }`}
                />
                {errors.city && <p className="text-xs text-red-600 mt-1 font-semibold">{errors.city}</p>}
              </div>
            </div>

            {/* Supermarket Owner Space & Size Fields */}
            {role === "gym-owner" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#1F2937] uppercase tracking-wider mb-1.5" htmlFor="availableSpace">
                    Available Retail Space Type
                  </label>
                  <select
                    id="availableSpace"
                    name="availableSpace"
                    value={formData.availableSpace || initialSearchValues?.spaceType || "Supermarket Shelf Display"}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-[#4B5563] outline-none transition focus:border-[#1F2937] focus:ring-4 focus:ring-[#FEF9C3] text-sm"
                  >
                    <option value="Supermarket Shelf Display">Supermarket Shelf Display</option>
                    <option value="End-Cap Display">End-Cap Display</option>
                    <option value="Checkout Counter Display">Checkout Counter Display</option>
                    <option value="Refrigerated Display Space">Refrigerated Display Space</option>
                    <option value="Tabletop & Grab-and-Go Rack">Tabletop & Grab-and-Go Rack</option>
                    <option value="Entrance & Feature Corner">Entrance & Feature Corner</option>
                    <option value="Custom Space">Custom Space</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1F2937] uppercase tracking-wider mb-1.5" htmlFor="rackSize">
                    Display Space Size
                  </label>
                  <select
                    id="rackSize"
                    name="rackSize"
                    value={formData.rackSize || initialSearchValues?.rackSize || "Small — Up to 2×1 ft"}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-[#4B5563] outline-none transition focus:border-[#1F2937] focus:ring-4 focus:ring-[#FEF9C3] text-sm"
                  >
                    <option value="Small — Up to 2×1 ft">Small — Up to 2×1 ft</option>
                    <option value="Medium — Up to 3×2 ft">Medium — Up to 3×2 ft</option>
                    <option value="Large — Up to 5×2 ft">Large — Up to 5×2 ft</option>
                    <option value="Countertop">Countertop</option>
                    <option value="Custom">Custom</option>
                  </select>
                </div>
              </div>
            )}

            {/* Product Brand Entrepreneur Category, Space & Size Fields */}
            {role === "wellness" && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#1F2937] uppercase tracking-wider mb-1.5" htmlFor="category">
                      Product Category
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category || initialSearchValues?.category || "Packaged Foods & FMCG"}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-[#4B5563] outline-none transition focus:border-[#1F2937] focus:ring-4 focus:ring-[#FEF9C3] text-sm"
                    >
                      <option value="Packaged Foods & FMCG">Packaged Foods & FMCG</option>
                      <option value="Beverages & Ready-to-Drink Products">Beverages & Ready-to-Drink Products</option>
                      <option value="Healthy Foods & Wellness Products">Healthy Foods & Wellness Products</option>
                      <option value="Personal Care & Beauty">Personal Care & Beauty</option>
                      <option value="Household & Cleaning Products">Household & Cleaning Products</option>
                      <option value="Specialty Foods & Local Brands">Specialty Foods & Local Brands</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1F2937] uppercase tracking-wider mb-1.5" htmlFor="requiredSpace">
                      Required Space Type
                    </label>
                    <select
                      id="requiredSpace"
                      name="requiredSpace"
                      value={formData.requiredSpace || initialSearchValues?.spaceType || "Supermarket Shelf Display"}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-[#4B5563] outline-none transition focus:border-[#1F2937] focus:ring-4 focus:ring-[#FEF9C3] text-sm"
                    >
                      <option value="Supermarket Shelf Display">Supermarket Shelf Display</option>
                      <option value="End-Cap Display">End-Cap Display</option>
                      <option value="Checkout Counter Display">Checkout Counter Display</option>
                      <option value="Refrigerated Display Space">Refrigerated Display Space</option>
                      <option value="Tabletop & Grab-and-Go Rack">Tabletop & Grab-and-Go Rack</option>
                      <option value="Entrance & Feature Corner">Entrance & Feature Corner</option>
                      <option value="Custom Space">Custom Space</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1F2937] uppercase tracking-wider mb-1.5" htmlFor="rackSize">
                    Display Space Size
                  </label>
                  <select
                    id="rackSize"
                    name="rackSize"
                    value={formData.rackSize || initialSearchValues?.rackSize || "Small — Up to 2×1 ft"}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-[#4B5563] outline-none transition focus:border-[#1F2937] focus:ring-4 focus:ring-[#FEF9C3] text-sm"
                  >
                    <option value="Small — Up to 2×1 ft">Small — Up to 2×1 ft</option>
                    <option value="Medium — Up to 3×2 ft">Medium — Up to 3×2 ft</option>
                    <option value="Large — Up to 5×2 ft">Large — Up to 5×2 ft</option>
                    <option value="Countertop">Countertop</option>
                    <option value="Custom">Custom</option>
                  </select>
                </div>
              </div>
            )}

            {/* Message Field */}
            <div>
              <label className="block text-xs font-bold text-[#1F2937] uppercase tracking-wider mb-1.5" htmlFor="message">
                Short Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder="Share your available supermarket space, product category, rental preference, or any additional requirements..."
                className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-[#4B5563] outline-none transition placeholder:text-[#6B7280]/70 focus:border-[#1F2937] focus:ring-4 focus:ring-[#FEF9C3] text-sm"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#FACC15] hover:bg-[#111827] text-[#111827] hover:text-[#FACC15] border border-[#1F2937]/20 py-3.5 px-6 font-extrabold text-base shadow-xs transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Submit & Continue on WhatsApp</span>
              </button>

              <p className="text-xs text-[#6B7280] text-center mt-3 flex items-center justify-center gap-1 font-semibold">
                <AlertCircle className="w-3.5 h-3.5 text-[#1F2937]" />
                <span>Your information is used only to respond to your supermarket space enquiry.</span>
              </p>
            </div>
          </form>
        </div>


      </div>
    </section>
  );
}

