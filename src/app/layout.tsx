import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import ScrollProgress from "@/components/ui/ScrollProgress";
import ScheduleViewingModal from "@/components/ui/ScheduleViewingModal";
import FavoritesDrawer from "@/components/ui/FavoritesDrawer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lodhi Estates — Where Nature Meets Quiet Luxury",
  description:
    "Curated private portfolio of prime architectural residences, cantilevered glass pavilions, and coastal sanctuaries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${playfair.variable} ${cormorant.variable} scroll-smooth`}
    >
      <body className="antialiased bg-[#FDFBF7] text-[#0A0A0A] min-h-screen selection:bg-[#0F766E] selection:text-white">
        <AppProvider>
          <ScrollProgress />
          <ScheduleViewingModal />
          <FavoritesDrawer />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
