"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Property } from "@/types";

interface PropertyCardProps {
  property: Property;
  index: number;
  featured?: boolean;
}

export default function PropertyCard({
  property,
  index,
  featured = false,
}: PropertyCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`group cursor-pointer ${featured ? "md:col-span-2 md:row-span-2" : ""}`}
    >
      {/* Double-bezel outer shell */}
      <div className="rounded-[1.5rem] bg-border/30 p-1.5 ring-1 ring-border/50 transition-shadow duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-[0_16px_64px_rgba(15,118,110,0.12)]">
        {/* Inner core */}
        <div className="rounded-[calc(1.5rem-0.375rem)] bg-card overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]">
          {/* Image container */}
          <div className={`relative overflow-hidden ${featured ? "aspect-[4/3]" : "aspect-[3/2]"}`}>
            <Image
              src={property.image}
              alt={property.title}
              fill
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
              sizes={featured ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Tag */}
            {property.tag && (
              <span className="absolute top-4 left-4 rounded-full bg-primary px-4 py-1.5 text-[11px] uppercase tracking-[0.15em] font-medium text-white">
                {property.tag}
              </span>
            )}

            {/* Price overlay on hover */}
            <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
              <p className="text-white font-heading text-2xl tracking-wide">
                {property.price}
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="p-5 md:p-6">
            <h3 className="font-heading text-lg md:text-xl text-foreground tracking-wide">
              {property.title}
            </h3>
            <p className="text-muted text-sm mt-1">{property.location}</p>

            {/* Property meta */}
            <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border">
              <span className="text-xs text-muted font-medium tracking-wide">
                {property.bedrooms} Beds
              </span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span className="text-xs text-muted font-medium tracking-wide">
                {property.bathrooms} Baths
              </span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span className="text-xs text-muted font-medium tracking-wide">
                {property.area}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
