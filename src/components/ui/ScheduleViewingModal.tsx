"use client";

import React, { useState, useEffect } from "react";
import { useApp } from "@/context/AppContext";
import { X, Calendar, Clock, User, Phone, Mail, CheckCircle2, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function ScheduleViewingModal() {
  const { isViewingModalOpen, closeViewingModal, selectedPropertyForViewing } = useApp();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    timeSlot: "11:00 AM - 12:30 PM",
    notes: "",
  });

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isViewingModalOpen) {
        closeViewingModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isViewingModalOpen, closeViewingModal]);

  if (!isViewingModalOpen) return null;

  const property = selectedPropertyForViewing;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setTimeout(() => {
        setSubmitted(false);
        closeViewingModal();
      }, 2000);
    }, 500);
  };

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) closeViewingModal();
      }}
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-2xl overflow-y-auto"
    >
      <div className="relative w-full max-w-xl bg-[#12101B] text-[#F3EFFB] rounded-3xl shadow-2xl overflow-hidden border border-white/15 my-auto">
        {/* Header with Prominent Close Button */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-white/10 bg-[#161322]">
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#E5B869] font-bold block">
              Private Concierge
            </span>
            <h3 className="font-['Clash_Display'] text-xl font-bold text-white mt-0.5">
              Schedule Private Showing
            </h3>
          </div>
          <button
            onClick={closeViewingModal}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#2DD4BF] hover:text-[#0A0910] text-white flex items-center justify-center transition cursor-pointer border border-white/10"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-6">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-[#2DD4BF]/10 text-[#2DD4BF] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 size={36} />
              </div>
              <h4 className="font-['Clash_Display'] text-2xl font-bold text-white">
                Viewing Request Transmitted
              </h4>
              <p className="text-xs sm:text-sm text-[#B3ADC2] max-w-md mx-auto leading-relaxed">
                Thank you, {formData.name || "valued client"}. Our senior partner representing{" "}
                <span className="font-semibold text-white">{property?.title}</span> will contact you directly within 2 hours to confirm your private chauffeur and bilateral NDA credentials.
              </p>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 text-xs text-[#2DD4BF] font-semibold bg-[#2DD4BF]/10 px-4 py-1.5 rounded-full border border-[#2DD4BF]/20">
                  <ShieldCheck size={14} /> Strict Bilateral NDA Protocol Active
                </span>
              </div>
            </div>
          ) : (
            <div>
              {/* Property Snapshot */}
              {property && (
                <div className="flex items-center gap-4 p-3 bg-[#181526] rounded-2xl border border-white/10 mb-6">
                  <div className="relative w-20 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-black/40">
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="font-['Clash_Display'] text-sm font-bold text-white truncate">
                      {property.title}
                    </h5>
                    <p className="text-xs text-[#726C88] truncate">{property.location}</p>
                    <p className="text-xs font-bold text-[#E5B869] mt-0.5">
                      {property.price}
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#726C88] mb-1.5">
                      Full Legal Name
                    </label>
                    <div className="relative">
                      <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#726C88]" />
                      <input
                        type="text"
                        required
                        placeholder="Lord Alexander Wright"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-[#0A0910]/80 border border-white/10 rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-[#2DD4BF] transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#726C88] mb-1.5">
                      Confidential Email
                    </label>
                    <div className="relative">
                      <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#726C88]" />
                      <input
                        type="email"
                        required
                        placeholder="alexander@wrightcap.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-[#0A0910]/80 border border-white/10 rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-[#2DD4BF] transition"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#726C88] mb-1.5">
                      Direct Mobile / WhatsApp
                    </label>
                    <div className="relative">
                      <Phone size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#726C88]" />
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 019-2834"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-[#0A0910]/80 border border-white/10 rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-[#2DD4BF] transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#726C88] mb-1.5">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <Calendar size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#726C88]" />
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-[#0A0910]/80 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#2DD4BF] transition [color-scheme:dark]"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#726C88] mb-1.5">
                    Preferred Time Window
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {["10:00 AM - 11:30 AM", "02:00 PM - 03:30 PM", "05:00 PM - 06:30 PM"].map((slot) => (
                      <button
                        type="button"
                        key={slot}
                        onClick={() => setFormData({ ...formData, timeSlot: slot })}
                        className={`flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl border text-[11px] font-semibold transition cursor-pointer ${
                          formData.timeSlot === slot
                            ? "bg-[#2DD4BF] text-[#0A0910] border-[#2DD4BF]"
                            : "bg-[#0A0910]/60 text-[#B3ADC2] border-white/10 hover:border-white/20 hover:text-white"
                        }`}
                      >
                        <Clock size={12} />
                        <span className="truncate">{slot}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#726C88] mb-1.5">
                    Confidential Requirements / Notes
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Inquiring on behalf of family office; requiring private helipad or security annex..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full p-3 bg-[#0A0910]/80 border border-white/10 rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-[#2DD4BF] transition resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#2DD4BF] hover:bg-[#25bca9] text-[#0A0910] rounded-xl font-['Clash_Display'] font-bold text-xs uppercase tracking-wider transition shadow-xl shadow-[#2DD4BF]/20 flex items-center justify-center gap-2 cursor-pointer hover:scale-101"
                  >
                    <span>Confirm Confidential Showing Request</span>
                  </button>
                  <p className="text-[10px] text-center text-[#726C88] mt-3 flex items-center justify-center gap-1.5">
                    <ShieldCheck size={13} className="text-[#34d399]" />
                    <span>Protected under bilateral non-disclosure agreement.</span>
                  </p>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
