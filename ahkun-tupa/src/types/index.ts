export type Language = 'en' | 'fi' | 'de';

export interface AccommodationUnit {
  id: string;
  slug: string;
  name: Record<Language, string>;
  category: 'kelo-cabins' | 'riverside-cabins' | 'camping';
  subtitle: Record<Language, string>;
  description: Record<Language, string>;
  capacityAdults: number;
  capacityChildren: number;
  roomsDescription: Record<Language, string>;
  verifiedAmenities: Record<Language, string[]>;
  additionalFeatures: Record<Language, string[]>;
  ratesNote: Record<Language, string>;
  verificationStatus: 'verified_from_official_records' | 'requires_property_reconfirmation';
  images: {
    hero: string;
    gallery: string[];
    alt: string;
  };
  badge: Record<Language, string>;
}

export interface ActivityItem {
  id: string;
  slug: string;
  title: Record<Language, string>;
  season: 'summer' | 'winter' | 'autumn' | 'year-round';
  category: 'river' | 'gold' | 'hiking' | 'fishing' | 'winter';
  summary: Record<Language, string>;
  description: Record<Language, string>;
  verifiedInclusions: Record<Language, string[]>;
  duration?: Record<Language, string>;
  timingNote?: Record<Language, string>;
  image: string;
}

export interface GalleryPhoto {
  id: string;
  title: Record<Language, string>;
  category: 'cabins' | 'river' | 'wilderness' | 'summer' | 'winter' | 'restaurant' | 'activities';
  image: string;
  caption: Record<Language, string>;
  alt: string;
}

export interface ReservationFormData {
  fullName: string;
  email: string;
  phone: string;
  accommodationType: string;
  arrivalDate: string;
  departureDate: string;
  guestsCount: number;
  specialRequests: string;
  agreedToTerms: boolean;
}
