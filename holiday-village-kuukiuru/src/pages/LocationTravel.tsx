import React from 'react';
import { BUSINESS_CONFIG } from '../data/contentConfig';
import { VerificationBadge } from '../components/ui/VerificationBadge';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Compass, 
  Train, 
  Plane, 
  Car, 
  ArrowUpRight, 
  CalendarCheck,
  ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const LocationTravel: React.FC = () => {
  return (
    <div className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-block font-mono text-[11px] tracking-[0.24em] uppercase font-medium text-nordic-cabin">
          Travel & Arrival Guide
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-nordic-charcoal">
          How to Find Us
        </h1>
        <p className="text-base sm:text-lg text-nordic-muted leading-relaxed">
          Holiday Village Kuukiuru is situated along the scenic riverbanks of Kemijoki in Vuostimo, between Kemijärvi and Sodankylä, nestled close to the Pyhä and Luosto fells.
        </p>
      </div>

      {/* Primary Location Card & Verified Coordinates */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        <div className="lg:col-span-5 bg-nordic-snow p-8 rounded-3xl border border-nordic-border shadow-sm flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-nordic-pine font-medium">
                Official Address
              </span>
              <VerificationBadge status="verified_from_official_records" />
            </div>

            <div className="space-y-1">
              <h2 className="font-serif text-3xl font-normal text-nordic-charcoal">
                {BUSINESS_CONFIG.name}
              </h2>
              <p className="text-sm text-nordic-muted leading-relaxed">
                {BUSINESS_CONFIG.location.address}<br />
                {BUSINESS_CONFIG.location.village}, {BUSINESS_CONFIG.location.postalCode} {BUSINESS_CONFIG.location.municipality}<br />
                {BUSINESS_CONFIG.location.region}, {BUSINESS_CONFIG.location.country}
              </p>
            </div>

            <div className="pt-2 border-t border-nordic-border space-y-2 text-xs text-nordic-charcoal">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-nordic-pine shrink-0" />
                <span className="font-mono">Coordinates: 66.8623° N, 27.2458° E</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-nordic-pine shrink-0" />
                <span>Check-in: from 16:00 · Check-out: up to 12:00</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-nordic-pine shrink-0" />
                <span>{BUSINESS_CONFIG.contact.primaryPhone} / {BUSINESS_CONFIG.contact.secondaryPhone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-nordic-pine shrink-0" />
                <span>{BUSINESS_CONFIG.contact.email}</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-nordic-border">
            <a
              href={BUSINESS_CONFIG.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-nordic-forest hover:bg-nordic-pine text-nordic-snow py-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors shadow"
            >
              <span>Open in Google Maps Navigation</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Embedded Map Representation */}
        <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-nordic-border shadow-md bg-nordic-surface relative min-h-[380px]">
          <iframe
            title="Holiday Village Kuukiuru Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15418.805562768565!2d27.2458!3d66.8623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x442df15277873461%3A0x600b84742cb3a69!2sKuukiuruntie%2013%2C%2098360%20Kemij%C3%A4rvi%2C%20Finland!5e0!3m2!1sen!2sfi!4v1700000000000"
            className="w-full h-full border-0 absolute inset-0 filter saturate-[0.85] contrast-[1.05]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>

      {/* Transit & Distances Grid */}
      <div className="space-y-6">
        <h2 className="font-serif text-3xl text-nordic-charcoal font-normal border-b border-nordic-border pb-4">
          Travel Connections & Distances
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-nordic-snow p-6 rounded-2xl border border-nordic-border space-y-3">
            <div className="w-10 h-10 rounded-full bg-nordic-surface flex items-center justify-center text-nordic-forest">
              <Train className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-normal text-nordic-charcoal">
              By Train (Kemijärvi Station)
            </h3>
            <p className="text-xs text-nordic-muted leading-relaxed">
              Direct overnight VR sleeper trains operate daily from Helsinki to Kemijärvi railway station (approx. 11.5 hours). Kuukiuru is located 30 km north of the station.
            </p>
            <div className="text-[11px] font-mono text-nordic-pine">
              Distance: 30 km (~25 min drive)
            </div>
          </div>

          <div className="bg-nordic-snow p-6 rounded-2xl border border-nordic-border space-y-3">
            <div className="w-10 h-10 rounded-full bg-nordic-surface flex items-center justify-center text-nordic-forest">
              <Plane className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-normal text-nordic-charcoal">
              By Air (Rovaniemi & Kittilä)
            </h3>
            <p className="text-xs text-nordic-muted leading-relaxed">
              Rovaniemi International Airport (RVN) is 115 km southwest. Kittilä Airport (KTT) is 110 km northwest. Rental cars and preliminary transfers are available upon request.
            </p>
            <div className="text-[11px] font-mono text-nordic-pine">
              RVN: 115 km (1h 20m) · KTT: 110 km (1h 25m)
            </div>
          </div>

          <div className="bg-nordic-snow p-6 rounded-2xl border border-nordic-border space-y-3">
            <div className="w-10 h-10 rounded-full bg-nordic-surface flex items-center justify-center text-nordic-forest">
              <Car className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-normal text-nordic-charcoal">
              By Car & Scenic Fells
            </h3>
            <p className="text-xs text-nordic-muted leading-relaxed">
              Accessible via Highway 5 / E75 between Kemijärvi and Sodankylä onto regional road 962 towards Vuostimo. Complimentary car-heating plug hookups for winter travelers.
            </p>
            <div className="text-[11px] font-mono text-nordic-pine">
              Pyhä Ski Fell: 28 km · Luosto: 48 km
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
