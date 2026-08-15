"use client";

import React, { useState } from "react";
import { CheckCircle2, ArrowUpRight, ShieldCheck } from "lucide-react";

export default function VIPInquiryDesk() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    office: "New York",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-28 px-6 sm:px-12 bg-white border-t border-slate-200/60">
      <div className="max-w-[1100px] mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#0F766E] block">
            Private Client Concierge
          </span>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#0A0A0A]">
            Initiate Private Inquiry
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Direct coordination with our Managing Partners across London, New York, Dubai, or New Delhi.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-[#FDFBF7] rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-teal-50 text-[#0F766E] flex items-center justify-center mx-auto">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900">
                Confidential Inquiry Transmitted
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, {formData.name || "valued client"}. Our Managing Director for {formData.office} will connect with you directly within two hours under strict bilateral NDA protocols.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                    className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0F766E] transition"
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
                    className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0F766E] transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                    className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0F766E] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
                    Target Private Desk
                  </label>
                  <select
                    value={formData.office}
                    onChange={(e) => setFormData({ ...formData, office: e.target.value })}
                    className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-[#0F766E] cursor-pointer"
                  >
                    <option value="New York">New York (Manhattan Desk)</option>
                    <option value="London">London (Mayfair Desk)</option>
                    <option value="Dubai">Dubai (DIFC Desk)</option>
                    <option value="New Delhi">New Delhi (Lodhi Estate Desk)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
                  Acquisition Scope or Specific Residence
                </label>
                <textarea
                  rows={3}
                  placeholder="Specify desired architectural style, price bracket, or preferred viewing schedule..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-4 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0F766E] transition resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <ShieldCheck size={16} className="text-[#0F766E]" />
                  <span>Strict Bilateral NDA Protocol Active</span>
                </div>

                <button
                  type="submit"
                  className="px-8 py-4 bg-[#0F766E] hover:bg-[#115E59] text-white rounded-full font-semibold text-xs uppercase tracking-wider transition-all shadow-xl shadow-teal-900/10 flex items-center justify-center gap-2 cursor-pointer hover:scale-102"
                >
                  <span>Transmit Confidential Request</span>
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
