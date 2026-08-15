"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { TEAM_MEMBERS, STATS, PRESS_MENTIONS } from "@/lib/constants";
import { ArrowUpRight, ShieldCheck, Award, Building2, Globe2 } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#0A0A0A]">
      <Navbar />

      <main className="pt-28 pb-24">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-8 space-y-24">
          {/* Header */}
          <div className="max-w-3xl space-y-3">
            <span className="text-[11px] uppercase font-bold tracking-[0.25em] text-[#0F766E] block">
              Heritage Since 1999
            </span>
            <h1 className="font-['Clash_Display'] text-4xl sm:text-6xl font-bold tracking-tight text-[#0A0A0A]">
              Where Legacy Meets Quiet Luxury
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed pt-2">
              For over two decades, Lodhi Estates has served as the private advisory desk for prominent family offices, collectors, and architectural purists acquiring the world&apos;s most coveted residences.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-8 sm:p-12 bg-white rounded-3xl border border-slate-200 shadow-sm">
            {STATS.map((stat, i) => (
              <div key={i} className="text-center space-y-1">
                <div className="font-['Clash_Display'] text-3xl sm:text-4xl font-bold text-slate-900">
                  {stat.prefix}
                  {stat.value}
                  {stat.suffix}
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {stat.label}
                </div>
                <p className="text-[11px] text-slate-500">{stat.description}</p>
              </div>
            ))}
          </div>

          {/* Core Principles */}
          <div className="space-y-12">
            <div className="max-w-2xl space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#0F766E] block">
                Foundational Tenets
              </span>
              <h2 className="font-['Clash_Display'] text-3xl sm:text-4xl font-bold text-slate-900">
                The Four Pillars of Private Advisory
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Absolute Discretion",
                  desc: "Every transaction, family office structure, and viewing protocol is secured under strict bilateral non-disclosure agreements.",
                  icon: ShieldCheck,
                },
                {
                  title: "Architectural Rigor",
                  desc: "We exclusively represent residences that exhibit structural purity, authentic raw materials, and enduring design integrity.",
                  icon: Building2,
                },
                {
                  title: "Global Private Reach",
                  desc: "Private office desks in London, New York, Dubai, and New Delhi facilitating cross-border family capital allocations.",
                  icon: Globe2,
                },
              ].map((item, idx) => (
                <div key={idx} className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 text-[#0F766E] flex items-center justify-center">
                    <item.icon size={22} />
                  </div>
                  <h3 className="font-['Clash_Display'] text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Senior Leadership Team */}
          <div className="space-y-12">
            <div className="max-w-2xl space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#0F766E] block">
                Managing Principals
              </span>
              <h2 className="font-['Clash_Display'] text-3xl sm:text-4xl font-bold text-slate-900">
                Senior Leadership Desk
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {TEAM_MEMBERS.map((member) => (
                <div key={member.id} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between">
                  <div className="relative aspect-[4/5] w-full bg-slate-100">
                    <Image src={member.image} alt={member.name} fill className="object-cover" />
                  </div>
                  <div className="p-6 space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0F766E] block">{member.role}</span>
                    <h3 className="font-['Clash_Display'] text-lg font-bold text-slate-900">{member.name}</h3>
                    <p className="text-xs text-slate-500 line-clamp-2">{member.bio}</p>
                    <div className="pt-3 border-t border-slate-100 text-xs font-bold text-slate-800">
                      Closed Volume: {member.closedVolume}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Press Quotes */}
          <div className="p-10 sm:p-14 bg-slate-900 text-white rounded-3xl space-y-8">
            <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#2DD4BF] block text-center">
              Global Recognition & Press
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {PRESS_MENTIONS.map((item, idx) => (
                <div key={idx} className="space-y-2 p-6 bg-slate-800/60 rounded-2xl border border-slate-700">
                  <p className="font-serif italic text-base sm:text-lg text-slate-200">“{item.quote}”</p>
                  <span className="text-xs font-bold text-[#2DD4BF] block">— {item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
