import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader } from '../components/ui/SectionHeader';
import { VerificationBadge } from '../components/ui/VerificationBadge';
import { ACCOMMODATIONS, BUSINESS_CONFIG } from '../data/contentConfig';
import { Check, CalendarCheck, ArrowLeft, Flame, Bath, Waves, Tv, ShieldCheck } from 'lucide-react';

export const AccommodationCottages: React.FC = () => {
  const cottage = ACCOMMODATIONS.find(a => a.id === 'duplex-cottages')!;

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

      {/* Header & Badges */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-nordic-cabin font-medium">
              Duplex Cottage Specification
            </span>
            <VerificationBadge status={cottage.verificationStatus} />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-nordic-charcoal font-normal">
            Duplex Riverside Cottages (45 m²)
          </h1>
          <p className="text-base sm:text-lg text-nordic-muted leading-relaxed max-w-3xl">
            Autonomous traditional Finnish timber cabins designed for 4 adults plus 2 children. Featuring private built-in saunas, open stone fireplaces, full kitchens, drying rooms, and outdoor verandas facing the northern woods.
          </p>
        </div>

        <div className="lg:col-span-4 bg-nordic-surface p-6 rounded-2xl border border-nordic-border space-y-4">
          <div className="text-xs font-mono uppercase tracking-wider text-nordic-muted">
            Rates & Reservation
          </div>
          <div className="font-serif text-2xl text-nordic-forest font-normal">
            Contact us for current rates
          </div>
          <p className="text-xs text-nordic-muted leading-relaxed">
            Historical seasonal rates ranged between 90€ and 150€ / 24-hour stay. For current availability and verified quotes, please submit an enquiry.
          </p>
          <Link
            to="/reservations"
            className="w-full flex items-center justify-center gap-2 bg-nordic-forest hover:bg-nordic-pine text-nordic-snow py-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors shadow-md"
          >
            <CalendarCheck className="w-4 h-4" />
            <span>Enquire for Duplex Cottage</span>
          </Link>
        </div>
      </div>

      {/* Hero Visual Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 rounded-2xl overflow-hidden aspect-[16/10] shadow-md">
          <img
            src={cottage.images.hero}
            alt={cottage.images.alt}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="grid grid-rows-2 gap-4">
          {cottage.images.gallery.slice(0, 2).map((img, i) => (
            <div key={i} className="rounded-2xl overflow-hidden aspect-[16/10] shadow-md">
              <img
                src={img}
                alt="Duplex interior"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Specifications Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div className="bg-nordic-snow p-8 rounded-2xl border border-nordic-border space-y-4">
          <h3 className="font-serif text-2xl text-nordic-charcoal font-normal flex items-center gap-2">
            <Flame className="w-5 h-5 text-nordic-cabin" />
            <span>Cabin Layout</span>
          </h3>
          <ul className="space-y-3 text-xs text-nordic-charcoal">
            <li className="flex justify-between border-b border-nordic-border/60 pb-2">
              <span className="text-nordic-muted">Floor Area</span>
              <span className="font-semibold">45 m²</span>
            </li>
            <li className="flex justify-between border-b border-nordic-border/60 pb-2">
              <span className="text-nordic-muted">Capacity</span>
              <span className="font-semibold">4 adults + 2 children</span>
            </li>
            <li className="flex justify-between border-b border-nordic-border/60 pb-2">
              <span className="text-nordic-muted">Room Count</span>
              <span className="font-semibold">2 separate rooms</span>
            </li>
            <li className="flex justify-between border-b border-nordic-border/60 pb-2">
              <span className="text-nordic-muted">Bathroom</span>
              <span className="font-semibold">Shower & Lavatory</span>
            </li>
            <li className="flex justify-between">
              <span className="text-nordic-muted">Outdoor</span>
              <span className="font-semibold">Private Terrace / Veranda</span>
            </li>
          </ul>
        </div>

        <div className="bg-nordic-snow p-8 rounded-2xl border border-nordic-border space-y-4 lg:col-span-2">
          <h3 className="font-serif text-2xl text-nordic-charcoal font-normal flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-nordic-pine" />
            <span>Verified Equipment & Comfort Features</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-nordic-charcoal">
            {cottage.verifiedAmenities.map((amenity, i) => (
              <div key={i} className="flex items-start gap-2.5 p-2 rounded-lg bg-nordic-surface/50">
                <Check className="w-4 h-4 text-nordic-pine shrink-0 mt-0.5" />
                <span>{amenity}</span>
              </div>
            ))}
          </div>
          <div className="pt-2 text-xs text-nordic-muted">
            <span className="font-semibold text-nordic-forest block mb-1">Check-in & Practical Notes:</span>
            Arrival from 16:00, departure up to 12:00. Bed-clothes and towels may be brought along or rented. Final cleaning may be completed by guests or arranged for an additional fee.
          </div>
        </div>

      </div>

    </div>
  );
};
