import React from 'react';
import { Link } from 'react-router-dom';
import { VerificationBadge } from '../components/ui/VerificationBadge';
import { ArrowLeft, CalendarCheck, Check, Users, Home, Sparkles } from 'lucide-react';

interface RoomWing {
  id: string;
  name: string;
  level: string;
  areaM2: number;
  capacity: string;
  rooms: string;
  features: string[];
  historicalRange: string;
}

const ROOM_WINGS: RoomWing[] = [
  {
    id: 'gf-right',
    name: 'Ground Floor — Right Wing Suite',
    level: 'Ground Floor',
    areaM2: 55,
    capacity: '5 adults + 2 children',
    rooms: '2 rooms, private kitchen, lavatory, shower',
    features: [
      'Direct panoramic river view from windows',
      'Open brick fireplace',
      'Full kitchen with dishwasher & microwave oven',
      'Electric underfloor heating',
      'Spacious wardrobe & TV-set'
    ],
    historicalRange: '95€ – 170€'
  },
  {
    id: 'ff-left',
    name: 'First Floor — Left Wing Apartment',
    level: 'First Floor',
    areaM2: 42,
    capacity: '4 adults + 2 children',
    rooms: '2 rooms, private kitchen, lavatory, shower',
    features: [
      'Complete private kitchen with dishwasher & refrigerator',
      'Microwave oven & cookware',
      'Private bathroom with shower & WC',
      'Television & comfortable lounge seating',
      'Quiet top-floor woodland aspect'
    ],
    historicalRange: '80€ – 140€'
  },
  {
    id: 'ff-right',
    name: 'First Floor — Right Wing River Suite',
    level: 'First Floor',
    areaM2: 23,
    capacity: '2 adults + 1 child',
    rooms: '1 room, private lavatory, shower',
    features: [
      'Atmospheric open fireplace in bedroom suite',
      'Direct scenic river view',
      'Private en-suite shower & lavatory',
      'Television and cozy reading armchairs'
    ],
    historicalRange: '70€ – 110€'
  },
  {
    id: 'gf-left',
    name: 'Ground Floor — Left Wing Budget Room',
    level: 'Ground Floor',
    areaM2: 6,
    capacity: '2 persons',
    rooms: '1 compact room, shared use shower & lavatory',
    features: [
      'Private washstand inside room',
      'Wardrobe for storage',
      'Television',
      'Shared access to main building modern shower & lavatory'
    ],
    historicalRange: '45€ – 60€'
  }
];

export const AccommodationRooms: React.FC = () => {
  return (
    <div className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Back link */}
      <div>
        <Link
          to="/accommodation"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-nordic-muted hover:text-nordic-charcoal transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Accommodation</span>
        </Link>
      </div>

      {/* Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-nordic-cabin font-medium">
              Main Building Lodgings
            </span>
            <VerificationBadge status="verified_from_official_records" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-nordic-charcoal font-normal">
            Hotel-Style Rooms & Apartments
          </h1>
          <p className="text-base sm:text-lg text-nordic-muted leading-relaxed max-w-3xl">
            Preserving the authentic architecture of Kuukiuru’s main timber building. Each wing offers an independent layout — from economical twin traveler bases to grand 55 m² family suites overlooking the Kemijoki River.
          </p>
        </div>

        {/* Group buyout card */}
        <div className="lg:col-span-4 bg-nordic-forest text-nordic-snow p-6 rounded-2xl shadow-xl space-y-4">
          <div className="flex items-center gap-2 text-nordic-lake text-xs font-mono uppercase">
            <Users className="w-4 h-4" />
            <span>Full Lodge Reservation</span>
          </div>
          <h3 className="font-serif text-2xl font-normal">
            Exclusive Main Building Buyout
          </h3>
          <p className="text-xs text-nordic-snow/80 leading-relaxed">
            The entire main building may be reserved by large family groups or corporate retreats, accommodating up to 12 adults + 5 children comfortably across all four wings.
          </p>
          <Link
            to="/reservations"
            className="w-full inline-flex items-center justify-center gap-2 bg-nordic-cabin hover:bg-[#8D4430] text-nordic-snow py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            Enquire for Full Buyout
          </Link>
        </div>
      </div>

      {/* Distinct Wings Presentation */}
      <div className="space-y-8">
        <h2 className="font-serif text-3xl text-nordic-charcoal font-normal border-b border-nordic-border pb-4">
          Distinct Wing Configurations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ROOM_WINGS.map((wing) => (
            <div
              key={wing.id}
              className="bg-nordic-snow p-8 rounded-2xl border border-nordic-border shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-nordic-pine bg-nordic-surface px-2.5 py-1 rounded">
                    {wing.level}
                  </span>
                  <span className="font-mono text-xs text-nordic-forest font-semibold">
                    {wing.areaM2} m²
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-normal text-nordic-charcoal">
                  {wing.name}
                </h3>

                <div className="text-xs text-nordic-muted space-y-1">
                  <div><strong>Capacity:</strong> {wing.capacity}</div>
                  <div><strong>Layout:</strong> {wing.rooms}</div>
                </div>

                <div className="space-y-2 pt-2 border-t border-nordic-border/70">
                  <span className="text-[11px] font-mono uppercase text-nordic-forest font-semibold block">
                    Features:
                  </span>
                  <ul className="space-y-1.5 text-xs text-nordic-charcoal">
                    {wing.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-nordic-pine shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-nordic-border flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase text-nordic-muted block">Current Rates</span>
                  <span className="text-xs font-semibold text-nordic-forest">Contact us for quote</span>
                </div>
                <Link
                  to="/reservations"
                  className="bg-nordic-surface hover:bg-nordic-border/80 text-nordic-charcoal px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  Enquire Unit
                </Link>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
