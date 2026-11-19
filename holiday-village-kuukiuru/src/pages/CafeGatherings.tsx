import React from 'react';
import { Link } from 'react-router-dom';
import { VerificationBadge } from '../components/ui/VerificationBadge';
import { CAFE_DETAILS } from '../data/contentConfig';
import { Coffee, Flame, Users, CalendarCheck, Check, Sparkles } from 'lucide-react';

export const CafeGatherings: React.FC = () => {
  return (
    <div className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-block font-mono text-[11px] tracking-[0.24em] uppercase font-medium text-nordic-cabin">
          Nordic Hospitality & Events
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-nordic-charcoal">
          {CAFE_DETAILS.title}
        </h1>
        <p className="text-base sm:text-lg text-nordic-muted leading-relaxed">
          {CAFE_DETAILS.headline}
        </p>
      </div>

      {/* Visual & Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 rounded-3xl overflow-hidden aspect-[16/10] shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1200&auto=format&fit=crop"
            alt="Warm Finnish timber cafe interior with glowing fireplace"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-nordic-pine font-medium">
              Social Hearth
            </span>
            <VerificationBadge status="verified_from_official_records" />
          </div>
          <h2 className="font-serif text-3xl font-normal text-nordic-charcoal">
            Warm Fires & Shared Northern Celebrations
          </h2>
          <p className="text-sm text-nordic-muted leading-relaxed">
            {CAFE_DETAILS.description}
          </p>
          <div className="p-4 rounded-xl bg-nordic-surface border border-nordic-border space-y-1 text-xs">
            <div className="flex items-center gap-2 text-nordic-forest font-semibold font-mono uppercase">
              <Users className="w-4 h-4 text-nordic-cabin" />
              <span>Event Capacity: {CAFE_DETAILS.capacity}</span>
            </div>
            <p className="text-nordic-muted">
              {CAFE_DETAILS.cateringNote}
            </p>
          </div>
        </div>
      </div>

      {/* Verified Features Grid */}
      <div className="space-y-8">
        <h2 className="font-serif text-3xl text-nordic-charcoal font-normal border-b border-nordic-border pb-4">
          Gathering Spaces & Amenities
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAFE_DETAILS.features.map((feature, i) => (
            <div
              key={i}
              className="bg-nordic-snow p-6 rounded-2xl border border-nordic-border shadow-sm flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="w-8 h-8 rounded-full bg-nordic-surface flex items-center justify-center text-nordic-pine">
                  <Coffee className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-xl font-normal text-nordic-charcoal">
                  {feature.title}
                </h3>
                <p className="text-xs text-nordic-muted leading-relaxed">
                  {feature.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Events Enquiry Banner */}
      <div className="bg-[#263D32] text-nordic-snow p-8 sm:p-12 rounded-3xl text-center space-y-6">
        <h3 className="font-serif text-3xl sm:text-4xl font-normal text-nordic-snow">
          Planning a Milestone, Jubilee, or Corporate Retreat?
        </h3>
        <p className="text-sm text-nordic-snow/80 max-w-xl mx-auto font-light leading-relaxed">
          Kuura Riverside Resort welcomes private gatherings of up to 40 people with tailored lodging, kota campfire dinners, and private sauna sessions.
        </p>
        <Link
          to="/reservations"
          className="inline-flex items-center gap-2 bg-nordic-cabin hover:bg-[#8D4430] text-nordic-snow px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shadow-lg"
        >
          <CalendarCheck className="w-4 h-4" />
          <span>Submit Event Gathering Enquiry</span>
        </Link>
      </div>

    </div>
  );
};
