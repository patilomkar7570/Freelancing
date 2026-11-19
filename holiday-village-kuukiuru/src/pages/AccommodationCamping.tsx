import React from 'react';
import { Link } from 'react-router-dom';
import { VerificationBadge } from '../components/ui/VerificationBadge';
import { ArrowLeft, CalendarCheck, Check, Tent, Compass, Waves, ShieldCheck } from 'lucide-react';

export const AccommodationCamping: React.FC = () => {
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
              Outdoor Hospitality
            </span>
            <VerificationBadge status="verified_from_official_records" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-nordic-charcoal font-normal">
            Riverside Camping & Motorhome Grounds
          </h1>
          <p className="text-base sm:text-lg text-nordic-muted leading-relaxed max-w-3xl">
            Pitch your tent or park your caravan right along the gentle shoreline of the Kemijoki River. Enjoy clean Lapland air, evening campfires at the national kota shelter, and easy access to resort service buildings.
          </p>
        </div>

        {/* 5th Night Free Badge Card */}
        <div className="lg:col-span-4 bg-[#EAE8DE] p-6 rounded-2xl border border-nordic-border space-y-3">
          <div className="inline-block font-mono text-[10px] tracking-widest uppercase text-nordic-cabin font-semibold">
            Special Verified Property Policy
          </div>
          <h3 className="font-serif text-2xl text-nordic-charcoal font-normal">
            5th Night Free for Campers
          </h3>
          <p className="text-xs text-nordic-muted leading-relaxed">
            As established in official property policies: camping in tents and mobile homes is complimentary on every 5th subsequent day of continuous stay.
          </p>
          <div className="pt-2">
            <Link
              to="/reservations"
              className="w-full inline-flex items-center justify-center gap-2 bg-nordic-forest hover:bg-nordic-pine text-nordic-snow py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Pitch or Camper Enquiry</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Visual Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl overflow-hidden aspect-[16/10] shadow-md">
          <img
            src="https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=1200&auto=format&fit=crop"
            alt="Camper parked along quiet riverbank in Lapland"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="rounded-2xl overflow-hidden aspect-[16/10] shadow-md">
          <img
            src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1200&auto=format&fit=crop"
            alt="Tent pitched in peaceful pine glade beside the water"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>

      {/* Facilities & Amenities */}
      <div className="bg-nordic-snow p-8 sm:p-12 rounded-3xl border border-nordic-border shadow-sm space-y-6">
        <h2 className="font-serif text-3xl text-nordic-charcoal font-normal">
          Campground Amenities & Infrastructure
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs text-nordic-charcoal">
          <div className="p-4 rounded-xl bg-nordic-surface/60 space-y-1.5">
            <span className="font-semibold text-nordic-forest block font-mono text-[11px] uppercase">
              Electrical Hookups
            </span>
            <p className="text-nordic-muted">
              Seasonal electrical connections available for campervans, caravans, and winter engine pre-heaters.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-nordic-surface/60 space-y-1.5">
            <span className="font-semibold text-nordic-forest block font-mono text-[11px] uppercase">
              Sanitary Service Building
            </span>
            <p className="text-nordic-muted">
              Warm modern lavatories, freshwater taps, showers, and shared dishwashing sinks.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-nordic-surface/60 space-y-1.5">
            <span className="font-semibold text-nordic-forest block font-mono text-[11px] uppercase">
              Finnish Kota Shelter
            </span>
            <p className="text-nordic-muted">
              Open-hearth traditional Lappish timber kota for evening barbecue, warmth, and shared stories.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-nordic-surface/60 space-y-1.5">
            <span className="font-semibold text-nordic-forest block font-mono text-[11px] uppercase">
              Guest Boat Berth & Pier
            </span>
            <p className="text-nordic-muted">
              Direct shoreline access to launch personal canoes, kayaks, or access rental boats.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-nordic-surface/60 space-y-1.5">
            <span className="font-semibold text-nordic-forest block font-mono text-[11px] uppercase">
              Children’s Recreation
            </span>
            <p className="text-nordic-muted">
              Dedicated playground and miniature golf course located right on property grounds.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-nordic-surface/60 space-y-1.5">
            <span className="font-semibold text-nordic-forest block font-mono text-[11px] uppercase">
              Long-Term Parking
            </span>
            <p className="text-nordic-muted">
              Monthly tourist transport parking packages for both summer and winter travel rigs.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};
