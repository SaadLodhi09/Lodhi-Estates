export interface Property {
  id: string;
  slug: string;
  title: string;
  headline: string;
  location: string;
  neighborhood: string;
  city: string;
  price: string;
  priceNumeric: number;
  type: "Villa" | "Penthouse" | "Mansion" | "Modern Modular" | "Waterfront";
  status: "For Sale" | "For Rent" | "Exclusive Off-Market";
  bedrooms: number;
  bathrooms: number;
  area: string;
  sqftNumeric: number;
  lotSize?: string;
  yearBuilt?: number;
  garage?: string;
  image: string;
  gallery: string[];
  tag?: string;
  description: string;
  highlights: string[];
  amenities: string[];
  features: {
    architecturalStyle: string;
    view: string;
    heatingCooling: string;
    security: string;
  };
  agent: {
    name: string;
    role: string;
    phone: string;
    email: string;
    image: string;
  };
}

export interface Neighborhood {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  propertiesCount: number;
  avgPriceSqFt: string;
  lifestyleRating: number;
  image: string;
  highlights: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  phone: string;
  email: string;
  specialization: string;
  closedVolume: string;
}

export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Stat {
  label: string;
  value: number;
  prefix?: string;
  suffix: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}
