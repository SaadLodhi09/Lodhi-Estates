"use client";

import React, { useState } from "react";
import { CheckCircle2, ArrowUpRight, ShieldCheck } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export default function PrivateConcierge() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-32 bg-white border-t border-slate-200/60">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-8">
        <div className="text-center space-y-4 mb-16">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#0F766E] block">
            Private Client Concierge
          </span>
          <h2 className="font-sans text-3xl sm:text-5xl font-bold tracking-tight text-[#0A0A0A]">
            Reserve your private viewing
          </h2>
          <p className="text-sm text-slate-500 max-w-lg mx-auto leading-relaxed">
            Connect directly with a Senior Managing Director to arrange confidential previews, private chauffeur access, or off-market acquisitions.
          </p>
        </div>

        {/* Minimal White Form Card */}
        <div className="bg-[#FDFBF7] rounded-[2.5rem] p-8 sm:p-14 border border-slate-200/80 shadow-xl">
          {submitted ? (
            <div className="py-12 text-center space-y-3">
              <div className="w-14 h-14 bg-teal-50 text-[#0F766E] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="font-sans text-2xl font-bold text-slate-900">
                Viewing Request Received
              </h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, {formData.name || "valued client"}. Our Senior Director will contact you directly within 2 hours under strict bilateral NDA protocols.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
                    Full Legal Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Lord Alexander Wright"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0F766E] focus:ring-1 focus:ring-[#0F766E] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
                    Confidential Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alexander@wrightcap.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0F766E] focus:ring-1 focus:ring-[#0F766E] transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
                    Direct Mobile / WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 019-2834"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0F766E] focus:ring-1 focus:ring-[#0F766E] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
                    Direct Desk Line
                  </label>
                  <div className="px-5 py-4 bg-slate-100 border border-slate-200 rounded-2xl text-xs font-semibold text-slate-700 flex items-center justify-between">
                    <span>{CONTACT_INFO.phone}</span>
                    <span className="text-[10px] text-[#0F766E] font-bold uppercase tracking-wider">24/7 VIP Desk</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
                  Preferred Residence or Confidential Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="Specify property reference, preferred viewing schedule, or family office requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-5 bg-white border border-slate-200 rounded-2xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0F766E] focus:ring-1 focus:ring-[#0F766E] transition resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <ShieldCheck size={16} className="text-[#0F766E]" />
                  <span>Strict Bilateral Non-Disclosure Protocol</span>
                </div>

                <button
                  type="submit"
                  className="px-8 py-4 bg-black hover:bg-slate-800 text-white rounded-full text-xs font-semibold uppercase tracking-wider transition-all shadow-xl hover:scale-102 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Submit Confidential Request</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
