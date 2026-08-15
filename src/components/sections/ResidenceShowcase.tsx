"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PROPERTIES } from "@/lib/constants";
import { useApp } from "@/context/AppContext";
import { Heart, ArrowUpRight, BedDouble, Bath, Maximize2, MapPin } from "lucide-react";

export default function ResidenceShowcase() {
  const { toggleFavorite, isFavorite } = useApp();
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Villa", "Penthouse", "Modern Modular"];

  const filteredProperties =
    activeFilter === "All"
      ? PROPERTIES
      : PROPERTIES.filter((p) => p.type === activeFilter);

  return (
    <section className="py-28 px-6 sm:px-12 bg-[#FDFBF7] border-t border-slate-200/60">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#0F766E] block">
              Curated Portfolio
            </span>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#0A0A0A]">
              Signature Residences
            </h2>
            <p className="text-sm text-slate-600 max-w-lg leading-relaxed">
              Hand-selected architectural achievements embodying structural purity, panoramic natural light, and quiet distinction.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  activeFilter === cat
                    ? "bg-[#0F766E] text-white shadow-md shadow-teal-900/10"
                    : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300"
                }`}
              >
                {cat === "All" ? "All Residences" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => {
            const favorited = isFavorite(property.id);

            return (
              <div
                key={property.id}
                className="group bg-white rounded-3xl overflow-hidden flex flex-col justify-between border border-slate-200/80 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
              >
                {/* Photo Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Top Heart Badge */}
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

                {/* Card Info */}
                <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-[#0A0A0A] group-hover:text-[#0F766E] transition truncate">
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

                  {/* Specs & Pricing */}
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
                        <span className="text-xl font-bold text-[#0A0A0A]">
                          {property.price}
                        </span>
                      </div>

                      <Link
                        href={`/properties/${property.slug}`}
                        className="px-4 py-2 rounded-full bg-slate-100 hover:bg-[#0F766E] hover:text-white text-slate-800 text-xs font-semibold uppercase tracking-wider transition flex items-center gap-1.5"
                      >
                        <span>Explore</span>
                        <ArrowUpRight size={13} />
                      </Link>
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
