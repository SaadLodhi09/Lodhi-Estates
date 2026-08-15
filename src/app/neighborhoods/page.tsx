"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { NEIGHBORHOODS, PROPERTIES } from "@/lib/constants";
import { ArrowUpRight, Star, MapPin, Check } from "lucide-react";

export default function NeighborhoodsPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#0A0A0A]">
      <Navbar />

      <main className="pt-28 pb-24">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-8 space-y-20">
          {/* Header */}
          <div className="max-w-3xl space-y-3">
            <span className="text-[11px] uppercase font-bold tracking-[0.25em] text-[#0F766E] block">
              Prime Geographic Intelligence
            </span>
            <h1 className="font-['Clash_Display'] text-4xl sm:text-6xl font-bold tracking-tight text-[#0A0A0A]">
              Coveted Enclave Dossiers
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed pt-2">
              Comprehensive neighborhood analysis covering privacy indices, security infrastructure, average price per square foot, and active luxury residences.
            </p>
          </div>

          {/* Neighborhoods Showcase */}
          <div className="space-y-16">
            {NEIGHBORHOODS.map((nb, idx) => {
              const activeProperties = PROPERTIES.filter((p) => p.neighborhood === nb.name);

              return (
                <div
                  key={nb.id}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm p-8 sm:p-12 space-y-8"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    {/* Left Photo */}
                    <div className="lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 shadow-md">
                      <Image src={nb.image} alt={nb.name} fill className="object-cover" />
                      <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">
                        {nb.propertiesCount} Curated Residences
                      </div>
                    </div>

                    {/* Right Info */}
                    <div className="lg:col-span-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-[#0F766E] font-bold uppercase tracking-wider">{nb.tagline}</span>
                        <span className="flex items-center gap-1 text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                          <Star size={12} className="fill-amber-500 text-amber-500" />
                          <span>{nb.lifestyleRating} / 10 Index</span>
                        </span>
                      </div>

                      <h2 className="font-['Clash_Display'] text-3xl sm:text-4xl font-bold text-slate-900">
                        {nb.name}
                      </h2>

                      <p className="text-sm text-slate-600 leading-relaxed">
                        {nb.description}
                      </p>

                      <div className="grid grid-cols-2 gap-3 py-2">
                        {nb.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                            <Check size={13} className="text-[#0F766E] flex-shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] uppercase font-bold text-slate-400 block">Average Valuation</span>
                          <span className="font-['Clash_Display'] text-xl font-bold text-slate-900">{nb.avgPriceSqFt}</span>
                        </div>
                        <Link
                          href={`/properties?neighborhood=${encodeURIComponent(nb.name)}`}
                          className="px-6 py-2.5 bg-[#0F766E] hover:bg-[#115E59] text-white rounded-full text-xs font-bold uppercase tracking-wider transition shadow-sm flex items-center gap-1.5"
                        >
                          <span>Explore Residences</span>
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
      </main>

      <Footer />
    </div>
  );
}
