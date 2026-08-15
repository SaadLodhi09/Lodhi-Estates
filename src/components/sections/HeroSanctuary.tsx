"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { PROPERTIES } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";

export default function HeroSanctuary() {
  const { openViewingModal } = useApp();
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const slides = [
    {
      image: "/images/hero-bright-villa.jpg",
      tag: "Coastal Villa Sanctuary",
      title: "Where nature meets quiet luxury",
      subtitle:
        "A curated collection of private villas and architectural residences designed for serene living, where contemporary design organically blends with nature.",
      statNumber: "180°",
      statLabel: "Private villas designed for comfort, privacy, and uninterrupted connection with nature",
      property: PROPERTIES[0], // Villa Solaria
    },
    {
      image: "/images/hero-velora.jpg",
      tag: "Forest Glass Pavilion",
      title: "Architecture in harmony with light",
      subtitle:
        "Cantilevered cedar rooflines and frameless glass walls framing pristine forest groves and calm reflection pools.",
      statNumber: "100%",
      statLabel: "Immersive private sanctuary where every space is crafted for relaxation and silence",
      property: PROPERTIES[1], // Velora Pavilion
    },
    {
      image: "/images/hero-sovex.jpg",
      tag: "Modernist Cantilever",
      title: "Homes that move you",
      subtitle:
        "Intelligent structural engineering combining Roman travertine, western cedar, and serene water courtyards.",
      statNumber: "A+",
      statLabel: "Certified passive house insulation with off-grid solar and geothermal climate control",
      property: PROPERTIES[2], // Glass & Timber Cantilever
    },
  ];

  const currentSlide = slides[activeSlideIndex];

  return (
    <section className="relative w-full h-[100dvh] min-h-[700px] flex flex-col justify-end pb-12 sm:pb-16 px-4 sm:px-8 overflow-hidden">
      {/* Full-Bleed Background Photograph */}
      <div className="absolute inset-0 z-0">
        <Image
          src={currentSlide.image}
          alt={currentSlide.title}
          fill
          priority
          className="object-cover transition-all duration-1000 ease-out"
        />
        {/* Subtle Gradient Overlay for High Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/20" />
      </div>

      {/* Main Content: Text Over Empty Space (Velora Villas & Haven Reference) */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full flex flex-col lg:flex-row lg:items-end justify-between gap-10">
        {/* Left Side: Eyebrow + Massive Headline + Subtext */}
        <div className="max-w-2xl text-white space-y-4">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white/90 text-[11px] font-medium tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF]" />
            <span>{currentSlide.tag}</span>
          </div>

          {/* Headline */}
          <h1 className="font-sans text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] drop-shadow-md">
            {currentSlide.title}
          </h1>

          {/* Clean Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-white/80 leading-relaxed max-w-xl">
            {currentSlide.subtitle}
          </p>

          {/* Clean Action Links */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white hover:text-[#2DD4BF] transition group"
            >
              <span>Explore Collection</span>
              <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                <ArrowUpRight size={13} />
              </span>
            </Link>

            <span className="text-white/30 hidden sm:inline">•</span>

            <button
              onClick={() => openViewingModal(currentSlide.property)}
              className="text-xs font-semibold uppercase tracking-wider text-white/70 hover:text-white transition cursor-pointer"
            >
              Reserve Viewing
            </button>
          </div>
        </div>

        {/* Right Side: Dual Floating Stat / Preview Cards (Exact Velora Villas Reference) */}
        <div className="flex items-center gap-4 overflow-x-auto pb-2 lg:pb-0 max-w-full">
          {slides.map((slide, idx) => {
            const isActive = activeSlideIndex === idx;

            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveSlideIndex(idx)}
                className={`w-[200px] sm:w-[220px] rounded-3xl p-3 sm:p-4 bg-white text-left text-slate-900 shadow-2xl transition-all duration-500 flex-shrink-0 cursor-pointer ${
                  isActive
                    ? "ring-2 ring-white scale-102 opacity-100"
                    : "opacity-85 hover:opacity-100 hover:scale-101"
                }`}
              >
                {/* Thumbnail image */}
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-3 bg-slate-100">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Bold Stat Number */}
                <span className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 block leading-none">
                  {slide.statNumber}
                </span>

                {/* Clean Description */}
                <p className="text-[10px] sm:text-[11px] text-slate-500 leading-snug mt-1.5 line-clamp-2">
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
