"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { PROPERTIES } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";

export default function HeroLiquid() {
  const { openViewingModal } = useApp();
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const heroSlides = [
    {
      image: "/images/hero-bright-villa.jpg",
      tag: "Private Villa Retreat",
      titleTop: "Where nature",
      titleBottom: "meets quiet luxury",
      subtitle:
        "A collection of private villas designed for serene living, where architecture organically blends with nature.",
      statNumber: "180°",
      statLabel: "Private villas designed for comfort, privacy, and uninterrupted connection with nature",
      property: PROPERTIES[0], // Villa Solaria
    },
    {
      image: "/images/hero-velora.jpg",
      tag: "Architectural Pavilion",
      titleTop: "Homes that",
      titleBottom: "move you",
      subtitle:
        "Cantilevered cedar rooflines and frameless glass walls framing pristine forest groves and calm reflection pools.",
      statNumber: "100%",
      statLabel: "Immersive experience of nature, where every space is designed for relaxation and silence",
      property: PROPERTIES[1], // Velora Pavilion
    },
    {
      image: "/images/hero-sovex.jpg",
      tag: "Modernist Cantilever",
      titleTop: "Intelligent design,",
      titleBottom: "timeless living",
      subtitle:
        "Precision-engineered Scandinavian modular masterworks crafted with net-zero passivhaus thermal efficiency.",
      statNumber: "A+",
      statLabel: "Certified passive house engineering with off-grid solar and geothermal climate control",
      property: PROPERTIES[2], // Glass & Timber Cantilever
    },
  ];

  const current = heroSlides[activeSlideIndex];

  return (
    <section className="relative w-full h-[100dvh] min-h-[700px] flex flex-col justify-end pb-12 sm:pb-16 px-6 sm:px-12 overflow-hidden bg-[#FDFBF7]">
      {/* Background High-Res Photograph */}
      <div className="absolute inset-0 z-0">
        <Image
          src={current.image}
          alt={`${current.titleTop} ${current.titleBottom}`}
          fill
          priority
          className="object-cover transition-all duration-1000 ease-out"
        />
        {/* Subtle Vignette & Gradient for Crisp Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20" />
      </div>

      {/* Main Content: Text Over Empty Space (Exact Velora Villas Reference) */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full flex flex-col lg:flex-row lg:items-end justify-between gap-8 sm:gap-12">
        {/* Left Side: Headline & Editorial Copy */}
        <div className="max-w-2xl text-white space-y-4 sm:space-y-5">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-xs font-medium tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF]" />
            <span>{current.tag}</span>
          </div>

          {/* Luxury Real Estate Headline (Velora Villas Style) */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1.08] drop-shadow-md">
            <span className="font-light block">{current.titleTop}</span>
            <span className="font-normal block mt-1">{current.titleBottom}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-white/85 font-light leading-relaxed max-w-xl">
            {current.subtitle}
          </p>

          {/* Action Links */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-100 text-slate-900 rounded-full font-semibold text-xs uppercase tracking-wider transition-all shadow-xl hover:scale-102"
            >
              <span>Explore Collection</span>
              <ArrowUpRight size={14} />
            </Link>

            <button
              onClick={() => openViewingModal(current.property)}
              className="px-6 py-3.5 bg-black/40 hover:bg-black/60 text-white rounded-full font-medium text-xs uppercase tracking-wider transition-all border border-white/25 cursor-pointer backdrop-blur-md"
            >
              Reserve Viewing
            </button>
          </div>
        </div>

        {/* Right Side: Dual Floating White Stat Cards (Velora Villas Reference) */}
        <div className="flex items-center gap-4 sm:gap-5 flex-shrink-0">
          {heroSlides.slice(0, 2).map((slide, idx) => {
            const isActive = activeSlideIndex === idx;

            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveSlideIndex(idx)}
                className={`w-[185px] sm:w-[215px] rounded-[26px] p-3.5 sm:p-4 bg-white text-left text-slate-900 shadow-2xl transition-all duration-500 flex-shrink-0 cursor-pointer border ${
                  isActive
                    ? "border-white ring-2 ring-white scale-102 opacity-100 shadow-white/10"
                    : "border-slate-100 opacity-90 hover:opacity-100 hover:scale-101"
                }`}
              >
                {/* Thumbnail image with squircle border */}
                <div className="relative aspect-[16/10] w-full rounded-[16px] overflow-hidden mb-3 bg-slate-100">
                  <Image
                    src={slide.image}
                    alt={`${slide.titleTop} ${slide.titleBottom}`}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Bold Stat Number */}
                <span className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 block leading-none">
                  {slide.statNumber}
                </span>

                {/* Clean, unclipped 2-line description */}
                <p className="text-[10px] sm:text-[11px] text-slate-500 font-normal leading-relaxed mt-1.5 line-clamp-2">
                  {slide.statLabel}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
