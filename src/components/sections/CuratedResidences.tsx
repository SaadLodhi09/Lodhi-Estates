"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PROPERTIES } from "@/lib/constants";
import { useApp } from "@/context/AppContext";
import { Heart, ArrowUpRight, MapPin } from "lucide-react";

export default function CuratedResidences() {
  const { toggleFavorite, isFavorite } = useApp();
  const featured = PROPERTIES.slice(0, 3);

  return (
    <section className="py-32 bg-[#FDFBF7]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div className="space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#0F766E] block">
              Curated Residences
            </span>
            <h2 className="font-sans text-3xl sm:text-5xl font-bold tracking-tight text-[#0A0A0A]">
              Designed for quiet distinction
            </h2>
          </div>

          <Link
            href="/properties"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-900 hover:text-[#0F766E] transition group"
          >
            <span>View All ({PROPERTIES.length})</span>
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* 3-Column Luxury Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((property) => {
            const favorited = isFavorite(property.id);

            return (
              <div
                key={property.id}
                className="group flex flex-col bg-white rounded-[2rem] overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-2xl transition-all duration-700 hover:-translate-y-1"
              >
                {/* Photo Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Favorite Heart Button */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      toggleFavorite(property.id);
                    }}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-slate-700 hover:text-rose-500 transition shadow-sm cursor-pointer"
                  >
                    <Heart
                      size={16}
                      className={favorited ? "fill-rose-500 text-rose-500" : ""}
                    />
                  </button>

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-[10px] font-semibold uppercase tracking-wider border border-white/20">
                      {property.tag || property.type}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <span className="font-sans text-xl font-bold text-slate-900 block group-hover:text-[#0F766E] transition truncate">
                      {property.title}
                    </span>
                    <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                      <MapPin size={13} className="text-[#0F766E]" />
                      <span className="truncate">{property.location}</span>
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed mt-3 line-clamp-2">
                      {property.headline}
                    </p>
                  </div>

                  {/* Price & Explore Pill */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                        Price
                      </span>
                      <span className="font-sans text-xl font-bold text-slate-900 block">
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
