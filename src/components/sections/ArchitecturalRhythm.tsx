"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

export default function ArchitecturalRhythm() {
  return (
    <section className="py-32 bg-white border-t border-slate-200/60">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left: Full Height Clean Architectural Image */}
          <div className="lg:col-span-6 relative aspect-[4/3] lg:aspect-[5/4] rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-100">
            <Image
              src="/images/hero-sovex.jpg"
              alt="Intelligent Architecture Glass Residence"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#2DD4BF] block">
                Design Philosophy
              </span>
              <p className="font-sans text-xl font-bold mt-0.5">
                Harmonious Living with Nature
              </p>
            </div>
          </div>

          {/* Right: Clean Editorial Copy & Metrics */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#0F766E] block">
                Intelligent Architecture
              </span>
              <h2 className="font-sans text-3xl sm:text-5xl font-bold tracking-tight text-[#0A0A0A] leading-tight">
                Homes that bring serenity through space.
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg">
              Every residence in our private portfolio is chosen for its structural purity, seamless indoor-outdoor transitions, and organic materials that age with timeless grace.
            </p>

            {/* 3 Clean Distinctions */}
            <div className="space-y-4 pt-2">
              {[
                {
                  title: "Zero-Threshold Panoramic Glass",
                  desc: "Floor-to-ceiling glass systems that slide entirely into concealed pockets for boundless nature views.",
                },
                {
                  title: "Monolithic Travertine & Natural Timber",
                  desc: "Authentic raw materials hand-finished by master European stonemasons and Japanese woodworkers.",
                },
                {
                  title: "Turnkey Confidential Handover",
                  desc: "Fully commissioned, furnished, and protected under bilateral non-disclosure protocols.",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full bg-teal-50 text-[#0F766E] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-bold text-slate-900">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Link CTA */}
            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-black hover:bg-slate-800 text-white rounded-full text-xs font-semibold uppercase tracking-wider transition shadow-lg"
              >
                <span>Read Our Heritage Story</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
