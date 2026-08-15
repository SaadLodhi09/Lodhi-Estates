"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Compass, ShieldCheck, Layers } from "lucide-react";

export default function ArchitecturalBento() {
  return (
    <section className="py-28 px-6 sm:px-12 bg-white border-t border-slate-200/60">
      <div className="max-w-[1400px] mx-auto space-y-16">
        {/* Header */}
        <div className="max-w-2xl space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#0F766E] block">
            Architectural Intelligence
          </span>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#0A0A0A] leading-tight">
            Crafted for light, silence, and permanency.
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Every residence in our private registry is evaluated through four core architectural pillars, ensuring enduring aesthetic and capital longevity.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Giant Visual Feature Card */}
          <div className="md:col-span-8 bg-slate-900 rounded-3xl overflow-hidden p-8 sm:p-10 flex flex-col justify-between border border-slate-800 relative min-h-[420px] text-white">
            <div className="absolute inset-0 z-0 opacity-40">
              <Image
                src="/images/hero-sovex.jpg"
                alt="Architectural Cantilever"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
            </div>

            <div className="relative z-10 space-y-2">
              <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[#2DD4BF] text-[10px] font-bold uppercase tracking-wider inline-block">
                Pillar 01
              </span>
              <h3 className="text-2xl sm:text-4xl font-medium text-white">
                Zero-Threshold Structural Glass
              </h3>
            </div>

            <div className="relative z-10 space-y-4 max-w-xl">
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Frameless floor-to-ceiling glass apertures engineered with concealed ceiling and floor pockets. Boundaries between internal sanctuaries and external nature dissolve completely.
              </p>
              <div className="flex flex-wrap gap-2 text-[11px] text-white">
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md">Acoustical Quadruple Glazing</span>
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md">Solar Low-E Infrared Shield</span>
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md">Concealed Track Drainage</span>
              </div>
            </div>
          </div>

          {/* Card 2: Modular Engineering Card */}
          <div className="md:col-span-4 bg-[#FDFBF7] rounded-3xl p-8 flex flex-col justify-between border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 space-y-6">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#C59B27] flex items-center justify-center">
                <Layers size={24} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                Pillar 02
              </span>
              <h3 className="text-xl font-semibold text-slate-900">
                Turnkey Modular in 30–60 Days
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Precision-engineered off-site in climate-controlled facilities with laser tolerance, eliminating contractor delays and weather disruption.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
              <span className="text-xs text-[#0F766E] font-bold">Passivhaus A+ Certified</span>
              <Link href="/services" className="text-xs text-slate-900 hover:text-[#0F766E] font-bold flex items-center gap-1">
                Details ↗
              </Link>
            </div>
          </div>

          {/* Card 3: Monolithic Materials */}
          <div className="md:col-span-4 bg-[#FDFBF7] rounded-3xl p-8 flex flex-col justify-between border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 space-y-6">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-[#0F766E] flex items-center justify-center">
                <Compass size={24} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                Pillar 03
              </span>
              <h3 className="text-xl font-semibold text-slate-900">
                Monolithic Raw Materials
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Roman travertine, charred Japanese Yakisugi cedar, and board-formed architectural concrete that patinate with timeless beauty.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
              <span className="text-xs text-[#C59B27] font-bold">Zero Synthetic Polymers</span>
              <span className="text-xs text-slate-400">Natural Stone</span>
            </div>
          </div>

          {/* Card 4: Bilateral NDA Protection */}
          <div className="md:col-span-8 bg-[#FDFBF7] rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <ShieldCheck size={24} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                Pillar 04
              </span>
              <h3 className="text-2xl font-semibold text-slate-900">
                Confidential Private Mandate Protocol
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg">
                Over 45% of our closed sales transpire off-market without public listing, secured by bilateral non-disclosure agreements and private bank coordination.
              </p>
            </div>

            <Link
              href="/contact"
              className="px-6 py-3.5 bg-[#0F766E] hover:bg-[#115E59] text-white rounded-full font-semibold text-xs uppercase tracking-wider transition whitespace-nowrap shadow-lg flex-shrink-0"
            >
              Initiate Mandate ↗
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
