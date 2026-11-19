import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader } from '../components/ui/SectionHeader';
import { VerificationBadge } from '../components/ui/VerificationBadge';
import { ACCOMMODATIONS, BUSINESS_CONFIG } from '../data/contentConfig';
import { Check, ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';

export const AccommodationOverview: React.FC = () => {
  return (
    <div className="py-16 md:py-24 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-block font-mono text-[11px] tracking-[0.24em] uppercase font-medium text-nordic-cabin">
          Lapland Living Since 1986
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-nordic-charcoal">
          Accommodation on the Kemijoki River
        </h1>
        <p className="text-base sm:text-lg text-nordic-muted leading-relaxed">
          From independent timber cottages with private saunas to scenic riverside camping and versatile hotel apartments, discover quiet comfort in Finnish Lapland.
        </p>
      </div>

      {/* Transparent Rates Notice */}
      <div className="bg-nordic-surface p-6 rounded-2xl border border-nordic-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
        <div className="flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-nordic-pine shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-semibold text-nordic-forest uppercase tracking-wider text-[11px] block">
              Official Rate Verification Policy
            </span>
            <p className="text-nordic-charcoal/80">
              {BUSINESS_CONFIG.ratesDisclaimer}
            </p>
          </div>
        </div>
        <Link
          to="/reservations"
          className="shrink-0 bg-nordic-forest hover:bg-nordic-pine text-nordic-snow px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors"
        >
          Check Availability
        </Link>
      </div>

      {/* Detailed Units Presentation */}
      <div className="space-y-16">
        {ACCOMMODATIONS.map((unit, index) => (
          <div
            key={unit.id}
            id={unit.slug}
            className={`bg-nordic-snow rounded-3xl overflow-hidden border border-nordic-border shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Visual preview */}
            <div className={`lg:col-span-6 relative aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden ${
              index % 2 === 1 ? 'lg:order-2' : ''
            }`}>
              <img
                src={unit.images.hero}
                alt={unit.images.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                {unit.badge && (
                  <span className="bg-nordic-forest/90 text-nordic-snow text-[10px] font-mono uppercase tracking-wider px-3 py-1 rounded-md backdrop-blur-sm">
                    {unit.badge}
                  </span>
                )}
                <VerificationBadge status={unit.verificationStatus} />
              </div>
            </div>

            {/* Content Details */}
            <div className={`p-8 sm:p-12 lg:col-span-6 space-y-6 ${
              index % 2 === 1 ? 'lg:order-1' : ''
            }`}>
              <div className="space-y-2">
                <span className="font-mono text-[10px] tracking-widest uppercase text-nordic-pine font-medium">
                  {unit.category === 'cottages' ? 'Duplex Timber Cottages' : unit.category === 'rooms' ? 'Lodge Rooms & Suites' : 'Riverfront Camping'}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-nordic-charcoal font-normal">
                  {unit.name}
                </h2>
                <p className="text-sm text-nordic-muted leading-relaxed">
                  {unit.description}
                </p>
              </div>

              {/* Specifications pills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs border-y border-nordic-border py-4">
                <div>
                  <span className="text-[10px] font-mono uppercase text-nordic-muted block">Capacity</span>
                  <span className="font-semibold text-nordic-charcoal">
                    {unit.capacityAdults} Adults {unit.capacityChildren > 0 ? `+ ${unit.capacityChildren} Kids` : ''}
                  </span>
                </div>
                {unit.areaM2 && (
                  <div>
                    <span className="text-[10px] font-mono uppercase text-nordic-muted block">Floor Area</span>
                    <span className="font-semibold text-nordic-charcoal">{unit.areaM2} m²</span>
                  </div>
                )}
                <div>
                  <span className="text-[10px] font-mono uppercase text-nordic-muted block">Rates</span>
                  <span className="font-semibold text-nordic-pine">Contact for current</span>
                </div>
              </div>

              {/* Key Verified Amenities */}
              <div className="space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-nordic-forest font-semibold block">
                  Verified Inclusions & Equipment:
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-nordic-charcoal">
                  {unit.verifiedAmenities.slice(0, 6).map((amenity, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-nordic-pine shrink-0 mt-0.5" />
                      <span>{amenity}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA row */}
              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <Link
                  to={`/accommodation/${unit.slug}`}
                  className="bg-nordic-forest hover:bg-nordic-pine text-nordic-snow px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
                >
                  <span>Detailed Specifications</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/reservations"
                  className="bg-nordic-surface hover:bg-nordic-border text-nordic-charcoal px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  Enquire for Dates
                </Link>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
