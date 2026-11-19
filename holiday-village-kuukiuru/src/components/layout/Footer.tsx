import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../brand/Logo';
import { BUSINESS_CONFIG } from '../../data/contentConfig';
import { MapPin, Phone, Mail, Clock, ShieldAlert, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-nordic-forest text-nordic-snow pt-16 pb-12 border-t border-[#344d40]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-[#3b5749]">
          
          {/* Brand & Concept summary */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="horizontal" theme="dark" />
            <p className="text-nordic-snow/80 text-sm leading-relaxed max-w-sm pt-2">
              Quiet Finnish Lapland retreat established in 1986 along the pristine Kemijoki River. Wood-fired saunas, autonomous duplex cottages, and authentic year-round Nordic wilderness.
            </p>
            <div className="pt-2 text-xs font-mono text-nordic-lake space-y-1">
              <div>Coordinates: 66.8623° N, 27.2458° E</div>
              <div>Kemijärvi · Vuostimo · Finnish Lapland</div>
            </div>
          </div>

          {/* Quick links: Stay */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-widest text-nordic-lake font-medium">
              Accommodation
            </h3>
            <ul className="space-y-2 text-sm text-nordic-snow/80">
              <li>
                <Link to="/accommodation" className="hover:text-nordic-snow transition-colors">
                  All Lodging
                </Link>
              </li>
              <li>
                <Link to="/accommodation/cottages" className="hover:text-nordic-snow transition-colors">
                  Duplex Cottages (45 m²)
                </Link>
              </li>
              <li>
                <Link to="/accommodation/rooms" className="hover:text-nordic-snow transition-colors">
                  Lodge Rooms & Apartments
                </Link>
              </li>
              <li>
                <Link to="/accommodation/camping" className="hover:text-nordic-snow transition-colors">
                  Riverside Motorhome & Tents
                </Link>
              </li>
              <li>
                <Link to="/reservations" className="hover:text-nordic-snow transition-colors text-nordic-lake font-medium">
                  Reservation Enquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick links: Experience & Facilities */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-widest text-nordic-lake font-medium">
              Discover
            </h3>
            <ul className="space-y-2 text-sm text-nordic-snow/80">
              <li>
                <Link to="/experiences" className="hover:text-nordic-snow transition-colors">
                  Seasonal Activities
                </Link>
              </li>
              <li>
                <Link to="/experiences/winter" className="hover:text-nordic-snow transition-colors">
                  Winter in Lapland
                </Link>
              </li>
              <li>
                <Link to="/experiences/summer" className="hover:text-nordic-snow transition-colors">
                  Summer on the Kemijoki
                </Link>
              </li>
              <li>
                <Link to="/sauna-and-relaxation" className="hover:text-nordic-snow transition-colors">
                  Riverside Sauna Ritual
                </Link>
              </li>
              <li>
                <Link to="/cafe-and-gatherings" className="hover:text-nordic-snow transition-colors">
                  Café & Kota Gatherings
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-nordic-snow transition-colors">
                  Photo Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Location details */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-widest text-nordic-lake font-medium">
              Location & Details
            </h3>
            <div className="space-y-2.5 text-xs text-nordic-snow/80 leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-nordic-lake mt-0.5 shrink-0" />
                <span>
                  {BUSINESS_CONFIG.location.address},<br />
                  {BUSINESS_CONFIG.location.postalCode} {BUSINESS_CONFIG.location.municipality}, Finland
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-nordic-lake shrink-0" />
                <span>{BUSINESS_CONFIG.contact.primaryPhone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-nordic-lake shrink-0" />
                <span>{BUSINESS_CONFIG.contact.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-nordic-lake shrink-0" />
                <span>Check-in 16:00 · Check-out 12:00</span>
              </div>
              <div className="pt-1">
                <a
                  href={BUSINESS_CONFIG.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-nordic-lake hover:underline"
                >
                  <span>Open in Google Maps</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Mandatory Transparency & Legal Disclosure */}
        <div className="py-8 border-b border-[#3b5749] text-xs text-nordic-snow/70 space-y-3">
          <div className="flex items-start gap-2 text-nordic-lake">
            <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5" />
            <div className="font-semibold uppercase tracking-wider text-[11px]">
              Brand Transparency & Independent Demonstration Notice
            </div>
          </div>
          <p className="leading-relaxed">
            {BUSINESS_CONFIG.conceptNotice.bannerText}
            This digital proposal was crafted independently by NOVA Digital Studio to illustrate contemporary Nordic hospitality UX, responsive architecture, and visual storytelling. All historical business attributes, capacities, and facilities are referenced from public archives and marked for official property verification before production commercial use. Reservation enquiries submitted on this demonstration website are non-operational simulations.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-nordic-snow/60">
          <div>
            © 1986–{new Date().getFullYear()} Holiday Village Kuukiuru. Redesign demonstration by NOVA Digital Studio.
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/privacy" className="hover:text-nordic-snow transition-colors">
              Privacy Notice
            </Link>
            <Link to="/terms" className="hover:text-nordic-snow transition-colors">
              Terms & Concept Guidelines
            </Link>
            <Link to="/location" className="hover:text-nordic-snow transition-colors">
              Directions & Map
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
