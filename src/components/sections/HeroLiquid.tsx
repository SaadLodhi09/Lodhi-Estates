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
      statLabel: "Private villas designed for comfort, privacy, and connection with nature",
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
      statLabel: "Immersive sanctuary where every space is crafted for relaxation and silence",
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
    <section className="relative w-full min-h-[100dvh] h-auto lg:h-[100dvh] flex flex-col justify-end pt-28 pb-10 sm:pb-16 px-4 sm:px-8 lg:px-12 overflow-hidden bg-[#FDFBF7]">
      {/* Background High-Res Photograph */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src={current.image}
          alt={`${current.titleTop} ${current.titleBottom}`}
          fill
          priority
          className="object-cover transition-all duration-1000 ease-out"
        />
        {/* Subtle Vignette & Gradient for Crisp Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/20" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-12">
        {/* Left Side: Headline & Editorial Copy */}
        <div className="max-w-2xl text-white space-y-4 sm:space-y-5">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white text-[11px] sm:text-xs font-medium tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF]" />
            <span>{current.tag}</span>
          </div>

          {/* Luxury Real Estate Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-medium tracking-tight text-white leading-[1.1] drop-shadow-md">
            <span className="font-light block">{current.titleTop}</span>
            <span className="font-normal block mt-0.5 sm:mt-1">{current.titleBottom}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-white/85 font-light leading-relaxed max-w-xl">
            {current.subtitle}
          </p>

          {/* Action Links */}
          <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
            <Link
              href="/properties"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 bg-white hover:bg-slate-100 text-slate-900 rounded-full font-semibold text-xs uppercase tracking-wider transition-all shadow-xl hover:scale-102 flex-1 sm:flex-initial"
            >
              <span>Explore Collection</span>
              <ArrowUpRight size={14} />
            </Link>

            <button
              onClick={() => openViewingModal(current.property)}
              className="px-5 sm:px-6 py-3 sm:py-3.5 bg-black/50 hover:bg-black/70 text-white rounded-full font-medium text-xs uppercase tracking-wider transition-all border border-white/25 cursor-pointer backdrop-blur-md flex-1 sm:flex-initial"
            >
              Reserve Viewing
            </button>
          </div>
        </div>

        {/* Right Side: Responsive Touch Rail (Velora Reference) */}
        <div className="w-full lg:w-auto flex items-center gap-3 sm:gap-4 overflow-x-auto no-scrollbar pb-2 lg:pb-0 snap-x snap-mandatory">
          {heroSlides.slice(0, 2).map((slide, idx) => {
            const isActive = activeSlideIndex === idx;

            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveSlideIndex(idx)}
                className={`w-[160px] sm:w-[195px] lg:w-[215px] rounded-[22px] sm:rounded-[26px] p-3 sm:p-4 bg-white text-left text-slate-900 shadow-2xl transition-all duration-500 flex-shrink-0 cursor-pointer border snap-start ${
                  isActive
                    ? "border-white ring-2 ring-white scale-101 opacity-100 shadow-white/10"
                    : "border-slate-100 opacity-90 hover:opacity-100"
                }`}
              >
                {/* Thumbnail image */}
                <div className="relative aspect-[16/10] w-full rounded-[14px] sm:rounded-[16px] overflow-hidden mb-2.5 sm:mb-3 bg-slate-100">
                  <Image
                    src={slide.image}
                    alt={`${slide.titleTop} ${slide.titleBottom}`}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Bold Stat Number */}
                <span className="font-sans text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-slate-900 block leading-none">
                  {slide.statNumber}
                </span>

                {/* Clean unclipped 2-line description */}
                <p className="text-[10px] sm:text-[11px] text-slate-500 font-normal leading-relaxed mt-1 line-clamp-2">
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
