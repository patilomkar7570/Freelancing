export interface AccommodationUnit {
  id: string;
  name: string;
  category: 'cottages' | 'rooms' | 'camping';
  subtitle: string;
  description: string;
  areaM2?: number;
  capacityAdults: number;
  capacityChildren: number;
  roomsDescription: string;
  verifiedAmenities: string[];
  additionalFeatures: string[];
  seasonalRatesNote: string;
  verificationStatus: 'verified_from_official_records' | 'requires_property_reconfirmation';
  images: {
    hero: string;
    gallery: string[];
    alt: string;
  };
  slug: string;
  badge?: string;
}

export interface ActivityItem {
  id: string;
  title: string;
  season: 'winter' | 'summer' | 'year-round';
  category: 'water' | 'forest' | 'snow' | 'leisure';
  summary: string;
  description: string;
  verifiedEquipment: string[];
  locationNote: string;
  image: string;
  requiresPermitOrFee?: boolean;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'winter' | 'summer' | 'aerial' | 'accommodation' | 'nature' | 'sauna' | 'activities';
  image: string;
  caption: string;
  season?: 'winter' | 'summer';
  alt: string;
}

export interface ReservationFormData {
  fullName: string;
  email: string;
  phone: string;
  accommodationType: string;
  arrivalDate: string;
  departureDate: string;
  adultsCount: number;
  childrenCount: number;
  notes: string;
  agreedToTerms: boolean;
}
