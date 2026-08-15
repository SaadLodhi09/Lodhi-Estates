"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PROPERTIES } from "@/lib/constants";
import { useApp } from "@/context/AppContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Heart,
  ArrowUpRight,
  Search,
  BedDouble,
  Bath,
  Maximize2,
  MapPin,
  Grid,
  List,
} from "lucide-react";

export default function PropertiesDirectoryPage() {
  const { toggleFavorite, isFavorite } = useApp();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedNeighborhood, setSelectedNeighborhood] = useState("All");
  const [maxPrice, setMaxPrice] = useState(15000000);
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const types = ["All", "Villa", "Penthouse", "Modern Modular"];
  const neighborhoods = ["All", "Mediterranean Heights", "Royal Gardens", "Greenfield Estates", "Marina Bay"];

  const filteredProperties = PROPERTIES.filter((property) => {
    const matchesSearch =
      property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.headline.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType = selectedType === "All" || property.type === selectedType;
    const matchesNeighborhood =
      selectedNeighborhood === "All" || property.neighborhood === selectedNeighborhood;
    const matchesPrice = property.priceNumeric <= maxPrice;

    return matchesSearch && matchesType && matchesNeighborhood && matchesPrice;
  }).sort((a, b) => {
    if (sortBy === "price-asc") return a.priceNumeric - b.priceNumeric;
    if (sortBy === "price-desc") return b.priceNumeric - a.priceNumeric;
    if (sortBy === "area-desc") return b.sqftNumeric - a.sqftNumeric;
    return 0;
  });

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#0A0A0A]">
      <Navbar />

      <main className="pt-28 pb-24">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <span className="text-[11px] uppercase font-bold tracking-[0.25em] text-[#0F766E] block mb-2">
              Private Registry
            </span>
            <h1 className="font-['Clash_Display'] text-4xl sm:text-6xl font-bold tracking-tight text-[#0A0A0A]">
              The Master Collection
            </h1>
            <p className="text-sm text-slate-600 mt-3 leading-relaxed">
              Explore our curated portfolio of prime architectural residences, cliffside travertine promontories, and turnkey modular retreats.
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="bg-white rounded-3xl p-5 mb-10 border border-slate-200 shadow-sm space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              {/* Search input */}
              <div className="md:col-span-4 relative">
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search by name, location, or style..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0F766E] focus:bg-white transition"
                />
              </div>

              {/* Type selector */}
              <div className="md:col-span-3">
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#0F766E] cursor-pointer"
                >
                  {types.map((t) => (
                    <option key={t} value={t}>
                      {t === "All" ? "All Architecture Types" : t}
                    </option>
                  ))}
                </select>
              </div>

              {/* Neighborhood selector */}
              <div className="md:col-span-3">
                <select
                  value={selectedNeighborhood}
                  onChange={(e) => setSelectedNeighborhood(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#0F766E] cursor-pointer"
                >
                  {neighborhoods.map((n) => (
                    <option key={n} value={n}>
                      {n === "All" ? "All Enclaves" : n}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort by */}
              <div className="md:col-span-2">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#0F766E] cursor-pointer"
                >
                  <option value="featured">Featured Order</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="area-desc">Square Footage</option>
                </select>
              </div>
            </div>

            {/* Results count & view toggles */}
            <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs text-slate-500">
              <span>
                Showing <strong className="text-slate-900">{filteredProperties.length}</strong> of {PROPERTIES.length} residences
              </span>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-1.5 rounded-xl border ${viewMode === "grid" ? "bg-teal-50 text-[#0F766E] border-[#0F766E]" : "bg-slate-50 text-slate-500 border-slate-200"}`}
                >
                  <Grid size={15} />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-1.5 rounded-xl border ${viewMode === "list" ? "bg-teal-50 text-[#0F766E] border-[#0F766E]" : "bg-slate-50 text-slate-500 border-slate-200"}`}
                >
                  <List size={15} />
                </button>
              </div>
            </div>
          </div>

          {/* Properties Grid / List */}
          {filteredProperties.length === 0 ? (
            <div className="bg-white rounded-3xl p-16 text-center space-y-4 border border-slate-200 shadow-sm">
              <h3 className="font-['Clash_Display'] text-2xl font-bold text-slate-900">
                No Residences Match Criteria
              </h3>
              <p className="text-xs text-slate-500">
                Try adjusting your search query or reset your price and type filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedType("All");
                  setSelectedNeighborhood("All");
                  setMaxPrice(15000000);
                }}
                className="px-6 py-2.5 bg-[#0F766E] text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-md"
              >
                Reset Filters
              </button>
            </div>
          ) : viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => {
                const favorited = isFavorite(property.id);

                return (
                  <div
                    key={property.id}
                    className="group bg-white rounded-3xl overflow-hidden flex flex-col justify-between border border-slate-200/80 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                      <Image
                        src={property.image}
                        alt={property.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />

                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          toggleFavorite(property.id);
                        }}
                        className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-slate-700 hover:text-rose-500 transition shadow-sm cursor-pointer"
                      >
                        <Heart
                          size={16}
                          className={favorited ? "fill-rose-500 text-rose-500" : ""}
                        />
                      </button>

                      <div className="absolute top-3.5 left-3.5">
                        <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-[10px] font-semibold uppercase tracking-wider border border-white/20">
                          {property.tag || property.type}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-['Clash_Display'] text-xl font-bold text-[#0A0A0A] group-hover:text-[#0F766E] transition truncate">
                          {property.title}
                        </h3>

                        <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                          <MapPin size={12} className="text-[#0F766E]" />
                          <span className="truncate">{property.location}</span>
                        </p>

                        <p className="text-xs text-slate-600 line-clamp-2 mt-3 leading-relaxed">
                          {property.headline}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-100 space-y-4">
                        <div className="flex items-center justify-between text-xs text-slate-500">
                          <span className="flex items-center gap-1">
                            <BedDouble size={13} className="text-[#0F766E]" />
                            <span>{property.bedrooms} Beds</span>
                          </span>
                          <span className="flex items-center gap-1">
                            <Bath size={13} className="text-[#0F766E]" />
                            <span>{property.bathrooms} Baths</span>
                          </span>
                          <span className="flex items-center gap-1">
                            <Maximize2 size={13} className="text-[#0F766E]" />
                            <span>{property.area}</span>
                          </span>
                        </div>

                        <div className="flex items-center justify-between pt-1">
                          <div>
                            <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                              Valuation
                            </span>
                            <span className="font-['Clash_Display'] text-xl font-bold text-[#0A0A0A]">
                              {property.price}
                            </span>
                          </div>

                          <Link
                            href={`/properties/${property.slug}`}
                            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-[#0F766E] hover:text-white text-slate-800 text-xs font-bold uppercase tracking-wider transition flex items-center gap-1.5"
                          >
                            <span>Dossier</span>
                            <ArrowUpRight size={13} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredProperties.map((property) => (
                <div
                  key={property.id}
                  className="bg-white rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-200 shadow-sm"
                >
                  <div className="relative w-full md:w-56 aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 flex-shrink-0">
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 space-y-1">
                    <span className="text-[10px] uppercase font-bold text-[#0F766E]">
                      {property.tag || property.type}
                    </span>
                    <h3 className="font-['Clash_Display'] text-xl font-bold text-slate-900">
                      {property.title}
                    </h3>
                    <p className="text-xs text-slate-500">{property.location}</p>
                    <p className="text-xs text-slate-600 line-clamp-2 mt-1">{property.headline}</p>
                  </div>

                  <div className="text-right flex-shrink-0 space-y-2">
                    <span className="font-['Clash_Display'] text-2xl font-bold text-slate-900 block">
                      {property.price}
                    </span>
                    <Link
                      href={`/properties/${property.slug}`}
                      className="px-5 py-2.5 bg-[#0F766E] text-white font-bold text-xs uppercase tracking-wider rounded-full inline-flex items-center gap-1 shadow-sm"
                    >
                      <span>View Dossier</span>
                      <ArrowUpRight size={13} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
