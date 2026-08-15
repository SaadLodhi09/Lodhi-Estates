"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { NEIGHBORHOODS } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";

export default function EnclavePortfolios() {
  return (
    <section className="py-32 bg-[#FDFBF7] border-t border-slate-200/60">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div className="space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#0F766E] block">
              Prime Enclaves
            </span>
            <h2 className="font-sans text-3xl sm:text-5xl font-bold tracking-tight text-[#0A0A0A]">
              Where exceptional homes belong
            </h2>
          </div>

          <Link
            href="/neighborhoods"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-900 hover:text-[#0F766E] transition group"
          >
            <span>Explore All Enclaves</span>
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* 3 Location Photography Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NEIGHBORHOODS.map((nb) => (
            <Link
              key={nb.id}
              href={`/neighborhoods`}
              className="group relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-lg border border-black/5 flex flex-col justify-end p-8 transition-all duration-700 hover:shadow-2xl hover:-translate-y-1"
            >
              <Image
                src={nb.image}
                alt={nb.name}
                fill
                className="object-cover group-hover:scale-106 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              <div className="relative z-10 text-white space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#2DD4BF] block">
                  {nb.propertiesCount} Curated Residences
                </span>
                <h3 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-[#2DD4BF] transition">
                  {nb.name}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                  {nb.description}
                </p>

                <div className="pt-3 border-t border-white/20 flex items-center justify-between text-xs text-slate-200">
                  <span>{nb.avgPriceSqFt}</span>
                  <span className="flex items-center gap-1 font-bold text-white group-hover:translate-x-1 transition">
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
