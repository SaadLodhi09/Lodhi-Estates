"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SERVICES } from "@/lib/constants";
import { useApp } from "@/context/AppContext";
import { ArrowUpRight, Check, Building2, Compass, Layers, TrendingUp } from "lucide-react";

export default function ServicesPage() {
  const { openViewingModal } = useApp();

  const iconMap: Record<string, React.ReactNode> = {
    Building2: <Building2 size={24} />,
    Compass: <Compass size={24} />,
    Layers: <Layers size={24} />,
    TrendingUp: <TrendingUp size={24} />,
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#0A0A0A]">
      <Navbar />

      <main className="pt-28 pb-24">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-8 space-y-20">
          {/* Header */}
          <div className="max-w-3xl space-y-3">
            <span className="text-[11px] uppercase font-bold tracking-[0.25em] text-[#0F766E] block">
              Private Client Advisory
            </span>
            <h1 className="font-['Clash_Display'] text-4xl sm:text-6xl font-bold tracking-tight text-[#0A0A0A]">
              Bespoke Real Estate Services
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed pt-2">
              From confidential off-market acquisitions to turnkey 30–60 day modular construction, our senior partners coordinate every detail with Swiss precision.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((svc) => (
              <div
                key={svc.id}
                className="p-8 sm:p-10 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-teal-50 text-[#0F766E] flex items-center justify-center">
                    {iconMap[svc.icon] || <Building2 size={24} />}
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      {svc.tagline}
                    </span>
                    <h3 className="font-['Clash_Display'] text-2xl font-bold text-slate-900">
                      {svc.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {svc.description}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    {svc.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-4 h-4 rounded-full bg-teal-50 text-[#0F766E] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check size={11} strokeWidth={3} />
                        </div>
                        <span className="text-xs text-slate-700">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => openViewingModal()}
                    className="px-6 py-3 bg-[#0F766E] hover:bg-[#115E59] text-white rounded-full text-xs font-bold uppercase tracking-wider transition shadow-sm flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Engage Advisory</span>
                    <ArrowUpRight size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
