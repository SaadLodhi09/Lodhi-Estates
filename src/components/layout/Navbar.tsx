"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useApp } from "@/context/AppContext";
import { Heart, Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { favorites, openFavoritesDrawer, openViewingModal } = useApp();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Collection", href: "/properties" },
    { label: "Heritage", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Enclaves", href: "/neighborhoods" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 pt-4 pb-2 pointer-events-none">
        <nav
          className={`max-w-[1300px] mx-auto flex items-center justify-between px-6 py-3.5 rounded-2xl pointer-events-auto transition-all duration-300 ${
            scrolled
              ? "bg-white/90 backdrop-blur-2xl border border-slate-200/80 shadow-xl"
              : "bg-white/75 backdrop-blur-xl border border-slate-200/60 shadow-lg"
          }`}
        >
          {/* Logo in Clash Display */}
          <Link href="/" className="flex items-center gap-1.5 group">
            <span className="font-['Clash_Display'] text-lg sm:text-xl font-bold tracking-tight text-[#0A0A0A] group-hover:text-[#0F766E] transition">
              LODHI<span className="text-[#0F766E]">.</span>ESTATES
            </span>
          </Link>

          {/* Desktop Center Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-1.5 text-xs font-medium rounded-xl transition-all duration-200 ${
                    isActive
                      ? "text-[#0F766E] bg-teal-50 font-bold shadow-xs"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Live Status Badge */}
            <button
              onClick={() => openViewingModal()}
              className="hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-[11px] font-semibold text-[#0F766E] hover:bg-teal-100 transition cursor-pointer"
            >
              <span className="w-2 h-2 rounded-full bg-[#0F766E] pulse-active" />
              <span>Available for Private Viewings</span>
            </button>

            {/* Saved Favorites Drawer Button */}
            <button
              onClick={openFavoritesDrawer}
              className="relative p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 transition cursor-pointer"
              title="Saved Residences"
            >
              <Heart
                size={16}
                className={favorites.length > 0 ? "fill-rose-500 text-rose-500" : ""}
              />
              {favorites.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                  {favorites.length}
                </span>
              )}
            </button>

            {/* Reserve Viewing CTA */}
            <button
              onClick={() => openViewingModal()}
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#0F766E] hover:bg-[#115E59] text-white px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md shadow-teal-900/10 cursor-pointer hover:scale-102"
            >
              <span>Book Viewing</span>
              <ArrowUpRight size={13} />
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 md:hidden"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-3xl flex flex-col justify-center px-8 text-[#0A0A0A] md:hidden">
          <div className="space-y-6">
            <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#0F766E] block">
              Navigation
            </span>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block font-['Clash_Display'] text-3xl font-bold text-slate-900 hover:text-[#0F766E] transition"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-10 mt-10 border-t border-slate-200">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openViewingModal();
              }}
              className="w-full py-4 bg-[#0F766E] text-white rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg"
            >
              Reserve Private Viewing
            </button>
          </div>
        </div>
      )}
    </>
  );
}
