"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import type { Property } from "@/types";
import { PROPERTIES } from "@/lib/constants";

interface AppContextType {
  favorites: string[];
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
  savedProperties: Property[];
  isViewingModalOpen: boolean;
  selectedPropertyForViewing: Property | null;
  openViewingModal: (property?: Property) => void;
  closeViewingModal: (e?: React.MouseEvent) => void;
  isFavoritesDrawerOpen: boolean;
  openFavoritesDrawer: () => void;
  closeFavoritesDrawer: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isViewingModalOpen, setIsViewingModalOpen] = useState(false);
  const [selectedPropertyForViewing, setSelectedPropertyForViewing] = useState<Property | null>(null);
  const [isFavoritesDrawerOpen, setIsFavoritesDrawerOpen] = useState(false);

  // Load favorites from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("lodhi_favorites");
      if (saved) {
        setFavorites(JSON.parse(saved));
      }
    } catch {
      // Fallback
    }
  }, []);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const exists = prev.includes(id);
      const next = exists ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem("lodhi_favorites", JSON.stringify(next));
      } catch {
        // Fallback
      }
      return next;
    });
  };

  const isFavorite = (id: string) => favorites.includes(id);

  const savedProperties = PROPERTIES.filter((p) => favorites.includes(p.id));

  const openViewingModal = (property?: Property) => {
    setSelectedPropertyForViewing(property || PROPERTIES[0]);
    setIsViewingModalOpen(true);
  };

  const closeViewingModal = () => {
    setIsViewingModalOpen(false);
  };

  const openFavoritesDrawer = () => setIsFavoritesDrawerOpen(true);
  const closeFavoritesDrawer = () => setIsFavoritesDrawerOpen(false);

  return (
    <AppContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite,
        savedProperties,
        isViewingModalOpen,
        selectedPropertyForViewing,
        openViewingModal,
        closeViewingModal,
        isFavoritesDrawerOpen,
        openFavoritesDrawer,
        closeFavoritesDrawer,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
