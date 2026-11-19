import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader } from '../components/ui/SectionHeader';
import { VerificationBadge } from '../components/ui/VerificationBadge';
import { SAUNA_DETAILS } from '../data/contentConfig';
import { Flame, Waves, CalendarCheck, Check, Sparkles, HeartHandshake } from 'lucide-react';

export const SaunaRelaxation: React.FC = () => {
  return (
    <div className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-block font-mono text-[11px] tracking-[0.24em] uppercase font-medium text-nordic-cabin">
          Authentic Finnish Tradition
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-nordic-charcoal">
          The Sauna Experience at Kuura
        </h1>
        <p className="text-base sm:text-lg text-nordic-muted leading-relaxed">
          {SAUNA_DETAILS.headline}
        </p>
      </div>

      {/* Hero Visual Pair */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7 rounded-3xl overflow-hidden aspect-[16/10] shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop"
            alt="Traditional Finnish wooden sauna interior with ladle, pail, and glowing warmth"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="md:col-span-5 space-y-6">
          <span className="font-mono text-xs uppercase tracking-widest text-nordic-pine font-medium">
            Nordic Wellbeing Ritual
          </span>
          <h2 className="font-serif text-3xl font-normal text-nordic-charcoal">
            The Ancient Dialogue of Fire, Stone, and Cold Water
          </h2>
          <p className="text-sm text-nordic-muted leading-relaxed">
            In Finland, sauna is not a luxury hotel perk — it is an essential part of life. At Kuura Riverside Resort, our sauna ritual is embraced directly alongside the flowing waters of the Kemijoki River.
          </p>
          <div className="p-4 rounded-xl bg-nordic-surface border border-nordic-border space-y-2 text-xs">
            <span className="font-semibold text-nordic-forest block font-mono uppercase">
              Sauna Guidelines & Etiquette:
            </span>
            <ul className="space-y-1 text-nordic-charcoal">
              {SAUNA_DETAILS.etiquette.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-nordic-pine shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Verified Sauna Facilities Grid */}
      <div className="space-y-8">
        <div className="border-b border-nordic-border pb-4 flex items-center justify-between">
          <h2 className="font-serif text-3xl text-nordic-charcoal font-normal">
            Verified Sauna Facilities on Property
          </h2>
          <VerificationBadge status="verified_from_official_records" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SAUNA_DETAILS.facilities.map((fac, i) => (
            <div
              key={i}
              className="bg-nordic-snow p-8 rounded-2xl border border-nordic-border shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-full bg-nordic-surface flex items-center justify-center text-nordic-cabin">
                  <Flame className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-2xl font-normal text-nordic-charcoal">
                  {fac.name}
                </h3>
                <div className="inline-block font-mono text-[10px] uppercase tracking-wider text-nordic-forest bg-nordic-surface px-2.5 py-1 rounded">
                  Capacity: {fac.capacity}
                </div>
                <p className="text-xs text-nordic-muted leading-relaxed">
                  {fac.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-nordic-border/70 text-[11px] font-mono text-nordic-pine">
                {fac.verificationNote}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Booking CTA banner */}
      <div className="bg-nordic-forest text-nordic-snow p-8 sm:p-12 rounded-3xl text-center space-y-6">
        <h3 className="font-serif text-3xl sm:text-4xl font-normal text-nordic-snow">
          Reserve a Private Riverside Sauna Session
        </h3>
        <p className="text-sm text-nordic-snow/80 max-w-xl mx-auto font-light leading-relaxed">
          Both private birch-heated sessions and in-cabin saunas are available for staying guests. Inquire during your reservation request.
        </p>
        <Link
          to="/reservations"
          className="inline-flex items-center gap-2 bg-nordic-cabin hover:bg-[#8D4430] text-nordic-snow px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shadow-lg"
        >
          <CalendarCheck className="w-4 h-4" />
          <span>Inquire About Sauna Booking</span>
        </Link>
      </div>

    </div>
  );
};
