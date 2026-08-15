"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { NEIGHBORHOODS } from "@/lib/constants";
import { ArrowUpRight, Star } from "lucide-react";

export default function EnclaveMarquee() {
  return (
    <section className="py-28 px-6 sm:px-12 bg-[#FDFBF7] border-t border-slate-200/60">
      <div className="max-w-[1400px] mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#0F766E] block">
              Prime Geographic Enclaves
            </span>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#0A0A0A]">
              Global Coveted Addresses
            </h2>
          </div>

          <Link
            href="/neighborhoods"
            className="text-xs font-bold uppercase tracking-wider text-[#0F766E] hover:underline flex items-center gap-1"
          >
            <span>View All Enclave Dossiers</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* 3 Enclave Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NEIGHBORHOODS.map((nb) => (
            <Link
              key={nb.id}
              href="/neighborhoods"
              className="group relative aspect-[4/5] rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 p-7 flex flex-col justify-end border border-slate-200"
            >
              <Image
                src={nb.image}
                alt={nb.name}
                fill
                className="object-cover group-hover:scale-106 transition-transform duration-700 brightness-[0.75]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              <div className="relative z-10 space-y-2 text-white">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[#2DD4BF] text-[10px] font-bold uppercase tracking-wider">
                    {nb.propertiesCount} Active Listings
                  </span>
                  <span className="flex items-center gap-1 text-xs text-amber-300 font-bold">
                    <Star size={12} className="fill-amber-300" />
                    <span>{nb.lifestyleRating} / 10 Index</span>
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-semibold text-white group-hover:text-[#2DD4BF] transition">
                  {nb.name}
                </h3>

                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                  {nb.description}
                </p>

                <div className="pt-3 border-t border-white/20 flex items-center justify-between text-xs text-slate-300">
                  <span>Avg: {nb.avgPriceSqFt}</span>
                  <span className="text-white font-bold group-hover:translate-x-1 transition flex items-center gap-1">
                    Explore ↗
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
