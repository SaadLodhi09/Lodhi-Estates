"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroLiquid from "@/components/sections/HeroLiquid";
import ResidenceShowcase from "@/components/sections/ResidenceShowcase";
import ArchitecturalBento from "@/components/sections/ArchitecturalBento";
import EnclaveMarquee from "@/components/sections/EnclaveMarquee";
import VIPInquiryDesk from "@/components/sections/VIPInquiryDesk";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#0A0A0A]">
      <Navbar />
      <main>
        <HeroLiquid />
        <ResidenceShowcase />
        <ArchitecturalBento />
        <EnclaveMarquee />
        <VIPInquiryDesk />
      </main>
      <Footer />
    </div>
  );
}
