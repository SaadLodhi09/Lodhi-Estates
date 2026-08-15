"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { OFFICES } from "@/lib/constants";
import { Phone, Mail, MapPin, Clock, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const { openViewingModal } = useApp();
  const [selectedOffice, setSelectedOffice] = useState(OFFICES[0]);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "New York",
    subject: "Private Acquisition Inquiry",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#0A0A0A]">
      <Navbar />

      <main className="pt-28 pb-24">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-8 space-y-16">
          {/* Page Header */}
          <div className="max-w-3xl">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#0F766E] font-bold block mb-2">
              Private Client Concierge
            </span>
            <h1 className="font-['Clash_Display'] text-4xl sm:text-6xl font-bold tracking-tight text-[#0A0A0A] leading-tight">
              Initiate Confidential VIP Advisory
            </h1>
            <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
              Connect directly with a Senior Partner or Managing Director across our private office desks in London, New York, Dubai, or New Delhi.
            </p>
          </div>

          {/* Global Offices Selector Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {OFFICES.map((office) => (
              <button
                key={office.city}
                type="button"
                onClick={() => setSelectedOffice(office)}
                className={`p-6 rounded-3xl border text-left transition-all cursor-pointer ${
                  selectedOffice.city === office.city
                    ? "bg-white border-[#0F766E] shadow-xl ring-2 ring-[#0F766E]/20"
                    : "bg-white/80 border-slate-200 hover:bg-white hover:border-slate-300"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-['Clash_Display'] text-lg font-bold text-slate-900 block">
                    {office.city}
                  </span>
                  <span className={`w-2 h-2 rounded-full ${selectedOffice.city === office.city ? "bg-[#0F766E]" : "bg-slate-300"}`} />
                </div>
                <span className="text-xs text-[#0F766E] font-bold block">{office.district}</span>
                <span className="text-[11px] text-slate-500 mt-1 block truncate">{office.phone}</span>
              </button>
            ))}
          </div>

          {/* Contact Form & Office Detail Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Inquiry Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl">
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 bg-teal-50 text-[#0F766E] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="font-['Clash_Display'] text-2xl font-bold text-slate-900">
                    Confidential Inquiry Received
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.name || "valued client"}. Our Managing Director for {formData.city} will contact you directly within two hours.
                  </p>
                  <div className="pt-4">
                    <span className="inline-flex items-center gap-1.5 text-xs text-[#0F766E] font-semibold bg-teal-50 px-4 py-2 rounded-full">
                      <ShieldCheck size={16} /> Strict Bilateral NDA Protocol Active
                    </span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0F766E] block mb-1">
                      Direct VIP Desk
                    </span>
                    <h3 className="font-['Clash_Display'] text-2xl font-bold text-slate-900">
                      Schedule Private Consultation
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                        Full Legal Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Lord Alexander Wright"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0F766E] focus:bg-white transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                        Confidential Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alexander@wrightcap.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0F766E] focus:bg-white transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                        Direct Mobile / WhatsApp
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 019-2834"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0F766E] focus:bg-white transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                        Target Private Desk
                      </label>
                      <select
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#0F766E] cursor-pointer"
                      >
                        <option value="New York">New York (Manhattan Desk)</option>
                        <option value="London">London (Mayfair Desk)</option>
                        <option value="Dubai">Dubai (DIFC Desk)</option>
                        <option value="New Delhi">New Delhi (Lodhi Estate Desk)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                      Advisory Scope
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#0F766E] cursor-pointer"
                    >
                      <option value="Private Acquisition">Acquiring a Luxury / Trophy Residence</option>
                      <option value="Off-Market Sourcing">Confidential Off-Market Sourcing</option>
                      <option value="Modular Turnkey">Turnkey Modular Construction Advisory</option>
                      <option value="Discreet Sale">Discreet Private Mandate for Sale</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                      Confidential Requirements
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Provide details on target price range, desired architectural style, or confidentiality constraints..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0F766E] focus:bg-white transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#0F766E] hover:bg-[#115E59] text-white rounded-full font-['Clash_Display'] font-bold text-xs uppercase tracking-wider transition shadow-lg shadow-teal-900/10 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Submit Confidential Request</span>
                    <ArrowRight size={15} />
                  </button>
                </form>
              )}
            </div>

            {/* Right: Office Detail Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#141416] text-white rounded-3xl p-8 sm:p-10 border border-zinc-800 shadow-2xl space-y-6">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#2DD4BF] font-bold block mb-1">
                    Selected Private Desk
                  </span>
                  <h3 className="font-['Clash_Display'] text-3xl font-bold text-white">
                    {selectedOffice.city} ({selectedOffice.district})
                  </h3>
                </div>

                <div className="space-y-4 text-xs text-zinc-300">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-[#2DD4BF] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-zinc-500 block font-semibold">Address</span>
                      <span className="text-white font-medium">{selectedOffice.address}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone size={18} className="text-[#2DD4BF] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-zinc-500 block font-semibold">Direct Telephone</span>
                      <span className="text-white font-medium">{selectedOffice.phone}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail size={18} className="text-[#2DD4BF] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-zinc-500 block font-semibold">Private Desk Email</span>
                      <span className="text-white font-medium">{selectedOffice.email}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock size={18} className="text-[#2DD4BF] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-zinc-500 block font-semibold">Hours of Operation</span>
                      <span className="text-white font-medium">{selectedOffice.hours}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-800">
                  <button
                    onClick={() => openViewingModal()}
                    className="w-full py-3.5 bg-zinc-800 hover:bg-zinc-700 text-white rounded-full text-xs font-bold uppercase tracking-wider transition cursor-pointer"
                  >
                    Schedule Office Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
