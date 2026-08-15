"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { OFFICES } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-20 pb-12 px-4 sm:px-8 text-slate-900">
      <div className="max-w-[1300px] mx-auto space-y-16">
        {/* Top Row: Brand & Global Desks */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-['Clash_Display'] text-2xl font-bold tracking-tight text-[#0A0A0A]">
                LODHI<span className="text-[#0F766E]">.</span>ESTATES
              </span>
            </Link>
            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              Established in 1999. Representing premier architectural landmarks, cantilevered waterfront promontories, and turnkey Scandinavian modular residences worldwide.
            </p>
          </div>

          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs">
            {OFFICES.map((off) => (
              <div key={off.city} className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C59B27] block">
                  {off.city} Desk
                </span>
                <p className="text-slate-900 font-semibold">{off.district}</p>
                <p className="text-slate-500 text-[11px] leading-relaxed">{off.address}</p>
                <p className="text-[#0F766E] font-medium text-[11px]">{off.phone}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Lodhi Estates International Private Office. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/properties" className="hover:text-slate-900 transition">Collection</Link>
            <Link href="/about" className="hover:text-slate-900 transition">Heritage</Link>
            <Link href="/services" className="hover:text-slate-900 transition">Services</Link>
            <Link href="/neighborhoods" className="hover:text-slate-900 transition">Enclaves</Link>
            <Link href="/contact" className="hover:text-slate-900 transition">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
