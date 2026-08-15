"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { PROPERTIES } from "@/lib/constants";
import { useApp } from "@/context/AppContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Heart,
  Share2,
  MapPin,
  BedDouble,
  Bath,
  Maximize2,
  CheckCircle2,
  Phone,
  Mail,
  ArrowLeft,
  ArrowUpRight,
  ShieldCheck,
  Calendar,
  Layers,
} from "lucide-react";

export default function PropertyDetailPage() {
  const params = useParams();
  const slug = params?.id as string;
  const { toggleFavorite, isFavorite, openViewingModal } = useApp();

  const property = PROPERTIES.find((p) => p.slug === slug || p.id === slug) || PROPERTIES[0];
  const favorited = isFavorite(property.id);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<"overview" | "amenities" | "floorplan">("overview");
  const [copiedShare, setCopiedShare] = useState(false);

  // Financing estimation
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const downPayment = (property.priceNumeric * downPaymentPercent) / 100;
  const loanAmount = property.priceNumeric - downPayment;
  const monthlyPayment =
    (loanAmount * (0.055 / 12) * Math.pow(1 + 0.055 / 12, 360)) /
    (Math.pow(1 + 0.055 / 12, 360) - 1);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2000);
    }
  };

  const similarProperties = PROPERTIES.filter((p) => p.id !== property.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#0A0A0A]">
      <Navbar />

      <main className="pt-28 pb-24">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-8">
          {/* Breadcrumb & Navigation */}
          <div className="flex items-center justify-between py-6">
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-[#0F766E] transition"
            >
              <ArrowLeft size={14} />
              <span>Back to Collection</span>
            </Link>

            <div className="flex items-center gap-3">
              <button
                onClick={handleShare}
                className="p-2.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <Share2 size={15} />
                <span className="hidden sm:inline">{copiedShare ? "Link Copied!" : "Share"}</span>
              </button>

              <button
                onClick={() => toggleFavorite(property.id)}
                className="p-2.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-rose-500 transition cursor-pointer shadow-xs"
                title="Save residence"
              >
                <Heart
                  size={16}
                  className={favorited ? "fill-rose-500 text-rose-500" : ""}
                />
              </button>
            </div>
          </div>

          {/* Top Header: Title, Location & Price */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-teal-50 text-[#0F766E] text-[10px] font-bold uppercase tracking-wider">
                  {property.tag || property.type}
                </span>
                <span className="text-xs text-slate-400 font-semibold">•</span>
                <span className="text-xs text-slate-500 font-medium">MLS #{property.id.toUpperCase()}</span>
              </div>
              <h1 className="font-['Clash_Display'] text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
                {property.title}
              </h1>
              <p className="text-sm text-slate-500 flex items-center gap-1.5 pt-1">
                <MapPin size={15} className="text-[#0F766E]" />
                <span>{property.location}</span>
              </p>
            </div>

            <div className="lg:text-right flex flex-col justify-end space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                Asking Valuation
              </span>
              <span className="font-['Clash_Display'] text-3xl sm:text-4xl font-bold text-slate-900 block">
                {property.price}
              </span>
              <span className="text-xs text-[#0F766E] font-semibold">
                Est. ${(monthlyPayment || 0).toLocaleString("en-US", { maximumFractionDigits: 0 })}/mo with 20% down
              </span>
            </div>
          </div>

          {/* Gallery Showcase Lightbox Switcher */}
          <div className="space-y-4 mb-14">
            <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden bg-slate-900 shadow-2xl border border-slate-200">
              <Image
                src={property.gallery[activeImageIndex] || property.image}
                alt={property.title}
                fill
                priority
                className="object-cover transition-all duration-700"
              />
              <div className="absolute bottom-6 left-6 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-semibold">
                Photo {activeImageIndex + 1} of {property.gallery.length}
              </div>
            </div>

            {/* Thumbnail selector rail */}
            <div className="grid grid-cols-4 gap-3 sm:gap-4">
              {property.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative aspect-[16/10] rounded-2xl overflow-hidden border-2 transition-all cursor-pointer ${
                    activeImageIndex === idx
                      ? "border-[#0F766E] ring-2 ring-[#0F766E]/20 scale-101"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image src={img} alt="Thumbnail" fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Key Specifications Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 p-6 bg-white rounded-3xl border border-slate-200 shadow-sm mb-14">
            <div className="text-center p-3">
              <BedDouble size={20} className="text-[#0F766E] mx-auto mb-1.5" />
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Bedrooms</span>
              <span className="font-['Clash_Display'] text-lg font-bold text-slate-900">{property.bedrooms} Suites</span>
            </div>
            <div className="text-center p-3">
              <Bath size={20} className="text-[#0F766E] mx-auto mb-1.5" />
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Bathrooms</span>
              <span className="font-['Clash_Display'] text-lg font-bold text-slate-900">{property.bathrooms} Baths</span>
            </div>
            <div className="text-center p-3">
              <Maximize2 size={20} className="text-[#0F766E] mx-auto mb-1.5" />
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Living Area</span>
              <span className="font-['Clash_Display'] text-lg font-bold text-slate-900">{property.area}</span>
            </div>
            <div className="text-center p-3">
              <Layers size={20} className="text-[#0F766E] mx-auto mb-1.5" />
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Lot Size</span>
              <span className="font-['Clash_Display'] text-xs font-bold text-slate-900 truncate block mt-1">{property.lotSize || "Private Grounds"}</span>
            </div>
            <div className="text-center p-3">
              <Calendar size={20} className="text-[#0F766E] mx-auto mb-1.5" />
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Commissioned</span>
              <span className="font-['Clash_Display'] text-lg font-bold text-slate-900">{property.yearBuilt || 2024}</span>
            </div>
            <div className="text-center p-3">
              <ShieldCheck size={20} className="text-[#0F766E] mx-auto mb-1.5" />
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Garage</span>
              <span className="font-['Clash_Display'] text-xs font-bold text-slate-900 truncate block mt-1">{property.garage || "Underground Bays"}</span>
            </div>
          </div>

          {/* Main Content Layout: Left Details + Right Concierge Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
            {/* Left Column: Narrative Tabs */}
            <div className="lg:col-span-8 space-y-10">
              {/* Tab Navigation */}
              <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`pb-2 px-3 text-xs font-bold uppercase tracking-wider border-b-2 transition cursor-pointer ${
                    activeTab === "overview"
                      ? "border-[#0F766E] text-[#0F766E]"
                      : "border-transparent text-slate-500 hover:text-slate-900"
                  }`}
                >
                  Architectural Narrative
                </button>
                <button
                  onClick={() => setActiveTab("amenities")}
                  className={`pb-2 px-3 text-xs font-bold uppercase tracking-wider border-b-2 transition cursor-pointer ${
                    activeTab === "amenities"
                      ? "border-[#0F766E] text-[#0F766E]"
                      : "border-transparent text-slate-500 hover:text-slate-900"
                  }`}
                >
                  Amenities Bento ({property.amenities.length})
                </button>
                <button
                  onClick={() => setActiveTab("floorplan")}
                  className={`pb-2 px-3 text-xs font-bold uppercase tracking-wider border-b-2 transition cursor-pointer ${
                    activeTab === "floorplan"
                      ? "border-[#0F766E] text-[#0F766E]"
                      : "border-transparent text-slate-500 hover:text-slate-900"
                  }`}
                >
                  CAD Architectural Plans
                </button>
              </div>

              {/* Tab 1: Overview */}
              {activeTab === "overview" && (
                <div className="space-y-8 animate-fadeIn">
                  <div className="space-y-4">
                    <h3 className="font-['Clash_Display'] text-2xl font-bold text-slate-900">
                      The Residence Dossier
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                      {property.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-['Clash_Display'] text-lg font-bold text-slate-900">
                      Signature Architectural Distinctions
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {property.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-slate-200 shadow-xs">
                          <CheckCircle2 size={16} className="text-[#0F766E] flex-shrink-0 mt-0.5" />
                          <span className="text-xs text-slate-700 leading-relaxed">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Amenities */}
              {activeTab === "amenities" && (
                <div className="space-y-6 animate-fadeIn">
                  <h3 className="font-['Clash_Display'] text-2xl font-bold text-slate-900">
                    Bespoke Amenities & Technology
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {property.amenities.map((item, i) => (
                      <div key={i} className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#0F766E]" />
                        <span className="text-xs font-semibold text-slate-800">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 3: Floorplan */}
              {activeTab === "floorplan" && (
                <div className="p-10 bg-white rounded-3xl border border-slate-200 text-center space-y-4 shadow-sm animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-teal-50 text-[#0F766E] flex items-center justify-center mx-auto">
                    <ShieldCheck size={28} />
                  </div>
                  <h3 className="font-['Clash_Display'] text-xl font-bold text-slate-900">
                    Confidential Architectural CAD Plans
                  </h3>
                  <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
                    Full engineering drawings, electrical schematics, and high-resolution CAD floor plans are available under bilateral NDA verification.
                  </p>
                  <button
                    onClick={() => openViewingModal(property)}
                    className="px-6 py-3 bg-[#0F766E] hover:bg-[#115E59] text-white rounded-full text-xs font-bold uppercase tracking-wider transition shadow-md"
                  >
                    Request Confidential CAD Dossier
                  </button>
                </div>
              )}

              {/* Mortgage & Financial Calculator Card */}
              <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-['Clash_Display'] text-xl font-bold text-slate-900">
                    Mortgage & Equity Modeler
                  </h3>
                  <span className="text-xs text-[#0F766E] font-bold">5.5% Fixed Rate (30 Yrs)</span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                    <span>Down Payment: {downPaymentPercent}%</span>
                    <span>${(downPayment || 0).toLocaleString("en-US", { maximumFractionDigits: 0 })}</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="60"
                    step="5"
                    value={downPaymentPercent}
                    onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                    className="w-full accent-[#0F766E] cursor-pointer"
                  />
                </div>

                <div className="p-5 bg-slate-50 rounded-2xl flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Est. Monthly Debt Service</span>
                    <span className="font-['Clash_Display'] text-2xl font-bold text-[#0F766E]">
                      ${(monthlyPayment || 0).toLocaleString("en-US", { maximumFractionDigits: 0 })} / mo
                    </span>
                  </div>
                  <button
                    onClick={() => openViewingModal(property)}
                    className="px-5 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-black transition"
                  >
                    Structure Jumbo Loan
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Private Agent Concierge Card */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-[#141416] text-white rounded-3xl p-8 border border-zinc-800 shadow-2xl space-y-6 sticky top-28">
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-zinc-800 border border-zinc-700 flex-shrink-0">
                    <Image
                      src={property.agent.image}
                      alt={property.agent.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#2DD4BF] block">
                      Lead Principal
                    </span>
                    <h4 className="font-['Clash_Display'] text-lg font-bold text-white">
                      {property.agent.name}
                    </h4>
                    <p className="text-xs text-zinc-400">{property.agent.role}</p>
                  </div>
                </div>

                <div className="space-y-3 text-xs text-zinc-300">
                  <div className="flex items-center gap-2.5">
                    <Phone size={15} className="text-[#2DD4BF]" />
                    <span>{property.agent.phone}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail size={15} className="text-[#2DD4BF]" />
                    <span>{property.agent.email}</span>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <button
                    onClick={() => openViewingModal(property)}
                    className="w-full py-4 bg-[#0F766E] hover:bg-[#115E59] text-white rounded-full font-bold text-xs uppercase tracking-wider transition shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Schedule Private Showing</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Similar Residences Carousel */}
          <div className="space-y-8 pt-12 border-t border-slate-200">
            <h3 className="font-['Clash_Display'] text-2xl font-bold text-slate-900">
              Similar Architectural Masterworks
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {similarProperties.map((p) => (
                <div
                  key={p.id}
                  className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-105 transition" />
                  </div>
                  <div className="p-6 space-y-3">
                    <h4 className="font-['Clash_Display'] text-lg font-bold text-slate-900 group-hover:text-[#0F766E] transition">
                      {p.title}
                    </h4>
                    <p className="text-xs text-slate-500">{p.location}</p>
                    <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                      <span className="font-['Clash_Display'] text-lg font-bold text-slate-900">{p.price}</span>
                      <Link
                        href={`/properties/${p.slug}`}
                        className="text-xs font-bold uppercase tracking-wider text-[#0F766E] hover:underline"
                      >
                        Explore ↗
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
