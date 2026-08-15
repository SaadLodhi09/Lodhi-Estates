"use client";

import React, { useEffect } from "react";
import { useApp } from "@/context/AppContext";
import { X, Trash2, ArrowUpRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FavoritesDrawer() {
  const {
    isFavoritesDrawerOpen,
    closeFavoritesDrawer,
    savedProperties,
    toggleFavorite,
    openViewingModal,
  } = useApp();

  // ESC key listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isFavoritesDrawerOpen) {
        closeFavoritesDrawer();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFavoritesDrawerOpen, closeFavoritesDrawer]);

  if (!isFavoritesDrawerOpen) return null;

  return (
    <div className="fixed inset-0 z-[99999] overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={closeFavoritesDrawer}
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#12101B] text-[#F3EFFB] border-l border-white/10 shadow-2xl flex flex-col justify-between">
          {/* Drawer Header with Close Button */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#161322]">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-[#2DD4BF]/10 text-[#2DD4BF] flex items-center justify-center">
                <Sparkles size={16} />
              </div>
              <div>
                <h3 className="font-['Clash_Display'] text-lg font-bold text-white">
                  Saved Portfolio
                </h3>
                <span className="text-[11px] text-[#726C88]">
                  {savedProperties.length} {savedProperties.length === 1 ? "Residence" : "Residences"} Saved
                </span>
              </div>
            </div>

            <button
              onClick={closeFavoritesDrawer}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#2DD4BF] hover:text-[#0A0910] text-white flex items-center justify-center transition cursor-pointer border border-white/10"
              aria-label="Close drawer"
            >
              <X size={16} />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="p-6 flex-1 overflow-y-auto space-y-4">
            {savedProperties.length === 0 ? (
              <div className="py-20 text-center space-y-3">
                <p className="font-['Clash_Display'] text-lg text-white font-semibold">
                  No Residences Saved Yet
                </p>
                <p className="text-xs text-[#726C88] max-w-xs mx-auto leading-relaxed">
                  Click the heart icon on any residence card in the directory or showcase to bookmark it.
                </p>
                <Link
                  href="/properties"
                  onClick={closeFavoritesDrawer}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#2DD4BF] text-[#0A0910] rounded-xl font-bold text-xs uppercase tracking-wider mt-4 shadow-lg shadow-[#2DD4BF]/20"
                >
                  <span>Explore Collection</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            ) : (
              savedProperties.map((prop) => (
                <div
                  key={prop.id}
                  className="p-3.5 bg-[#181526] rounded-2xl border border-white/10 flex items-center gap-3.5 group hover:border-[#2DD4BF]/40 transition"
                >
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-black/40">
                    <Image
                      src={prop.image}
                      alt={prop.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-['Clash_Display'] text-sm font-bold text-white truncate">
                      {prop.title}
                    </h4>
                    <p className="text-xs text-[#726C88] truncate">{prop.location}</p>
                    <p className="text-xs font-bold text-[#E5B869] mt-0.5">{prop.price}</p>

                    <div className="flex items-center gap-3 mt-2">
                      <Link
                        href={`/properties/${prop.slug}`}
                        onClick={closeFavoritesDrawer}
                        className="text-[10px] font-bold uppercase tracking-wider text-[#2DD4BF] hover:underline"
                      >
                        View Dossier ↗
                      </Link>
                      <button
                        onClick={() => toggleFavorite(prop.id)}
                        className="text-[10px] text-rose-400/80 hover:text-rose-400 flex items-center gap-1 cursor-pointer"
                      >
                        <Trash2 size={11} /> Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer */}
          {savedProperties.length > 0 && (
            <div className="p-6 border-t border-white/10 bg-[#161322] space-y-3">
              <button
                onClick={() => {
                  closeFavoritesDrawer();
                  openViewingModal(savedProperties[0]);
                }}
                className="w-full py-4 bg-[#2DD4BF] hover:bg-[#25bca9] text-[#0A0910] rounded-xl font-['Clash_Display'] font-bold text-xs uppercase tracking-wider transition shadow-xl shadow-[#2DD4BF]/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Inquire on Saved Residences</span>
                <ArrowUpRight size={14} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
