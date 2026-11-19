import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { Logo } from '../brand/Logo';
import { BUSINESS_CONFIG, UI_TRANSLATIONS } from '../../data/contentConfig';
import { MapPin, Phone, Mail, Clock, ShieldAlert, ArrowUpRight, Compass, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  const { language, getLocalizedPath } = useLanguage();
  const t = UI_TRANSLATIONS.nav;
  const c = UI_TRANSLATIONS.common;

  return (
    <footer className="bg-ahkun-forest text-ahkun-white pt-16 pb-12 border-t border-[#344d40]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-[#3b5749]">
          
          {/* Brand & Concept summary */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="horizontal" theme="dark" langPrefix={language} />
            <p className="text-ahkun-white/80 text-sm leading-relaxed max-w-sm pt-2">
              {BUSINESS_CONFIG.heritageNote[language]}
            </p>
            <div className="pt-2 text-xs font-mono text-ahkun-river space-y-1">
              <div>Coordinates: 68.7584° N, 26.2331° E</div>
              <div>Njurgulahti · Lemmenjoki · Inari · Finnish Lapland</div>
            </div>
          </div>

          {/* Quick links: Stay */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-widest text-ahkun-river font-medium">
              {t.stay[language]}
            </h3>
            <ul className="space-y-2 text-sm text-ahkun-white/80">
              <li>
                <Link to={getLocalizedPath('accommodation')} className="hover:text-ahkun-white transition-colors">
                  {t.allAccommodation[language]}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath('accommodation/kelo-cabins')} className="hover:text-ahkun-white transition-colors">
                  {language === 'fi' ? 'Perinteiset Kelomökit' : language === 'de' ? 'Kelo-Blockhütten' : 'Kelo Log Cabins'}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath('accommodation/riverside-cabins')} className="hover:text-ahkun-white transition-colors">
                  {language === 'fi' ? 'Rantamökit & Huoneet' : language === 'de' ? 'Uferhütten & Zimmer' : 'Riverside Cabins & Rooms'}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath('accommodation/camping')} className="hover:text-ahkun-white transition-colors">
                  {language === 'fi' ? 'Asuntoauto- & Telttailualue' : language === 'de' ? 'Wohnmobil & Zeltplatz' : 'Caravan & Tent Camping'}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath('reservations')} className="hover:text-ahkun-white transition-colors text-ahkun-river font-medium">
                  {t.bookCta[language]}
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick links: Experience & Facilities */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-widest text-ahkun-river font-medium">
              {t.experiences[language]}
            </h3>
            <ul className="space-y-2 text-sm text-ahkun-white/80">
              <li>
                <Link to={getLocalizedPath('experiences')} className="hover:text-ahkun-white transition-colors">
                  {language === 'fi' ? 'Ravadas-putousten Jokiveneretket' : language === 'de' ? 'Flussboot zu Ravadas-Wasserfällen' : 'Ravadas Falls Riverboat Cruise'}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath('experiences')} className="hover:text-ahkun-white transition-colors">
                  {language === 'fi' ? 'Kullanhuuhdonta Kultamailla' : language === 'de' ? 'Goldwaschen an den Claims' : 'Gold Panning at Historic Claims'}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath('experiences')} className="hover:text-ahkun-white transition-colors">
                  {language === 'fi' ? 'Lemmenjoen Vaellusreitit' : language === 'de' ? 'Wanderpfade im Nationalpark' : 'National Park Hiking Trails'}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath('restaurant')} className="hover:text-ahkun-white transition-colors">
                  {t.restaurant[language]}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath('gallery')} className="hover:text-ahkun-white transition-colors">
                  {t.gallery[language]}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Map Links */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-widest text-ahkun-river font-medium">
              {t.location[language]}
            </h3>
            <div className="space-y-2.5 text-xs text-ahkun-white/80 leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-ahkun-river mt-0.5 shrink-0" />
                <span>
                  {BUSINESS_CONFIG.location.address},<br />
                  {BUSINESS_CONFIG.location.postalCode} {BUSINESS_CONFIG.location.village},<br />
                  {BUSINESS_CONFIG.location.municipality}, Finland
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-ahkun-river shrink-0" />
                <span>{BUSINESS_CONFIG.contact.primaryPhone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-ahkun-river shrink-0" />
                <span>{BUSINESS_CONFIG.contact.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-ahkun-river shrink-0" />
                <span>Check-in 15:00 · Check-out 12:00</span>
              </div>

              {/* Two separate, clearly labelled map buttons */}
              <div className="pt-2 flex flex-col gap-1.5 font-mono text-[11px]">
                <a
                  href={BUSINESS_CONFIG.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-ahkun-river hover:underline"
                >
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  <span>{c.openInGoogleMaps[language]}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>

                <a
                  href={BUSINESS_CONFIG.location.appleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-ahkun-river hover:underline"
                >
                  <Compass className="w-3.5 h-3.5 shrink-0" />
                  <span>{c.openInAppleMaps[language]}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>

                <a
                  href={BUSINESS_CONFIG.location.officialWebsiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-ahkun-white/70 hover:text-ahkun-white hover:underline pt-1"
                >
                  <Globe className="w-3.5 h-3.5 shrink-0" />
                  <span>{c.officialWebsite[language]}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Transparency Notice */}
        <div className="py-8 border-b border-[#3b5749] text-xs text-ahkun-white/70 space-y-3">
          <div className="flex items-start gap-2 text-ahkun-river">
            <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5" />
            <div className="font-semibold uppercase tracking-wider text-[11px]">
              Brand Transparency & Independent Demonstration Notice
            </div>
          </div>
          <p className="leading-relaxed">
            {BUSINESS_CONFIG.conceptNotice.bannerText[language]}
            {language === 'fi' && ' Kaikki yritystiedot, majoituskapasiteetit ja reitit perustuvat julkisiin tietoihin ja ne ovat esitetty havainnollistamistarkoituksessa.'}
            {language === 'de' && ' Alle Betriebsdaten, Unterkünfte und Exkursionsangaben dienen Demonstrationszwecken. Buchungsanfragen auf dieser Konzeptseite sind nicht operativ.'}
            {language === 'en' && ' All operational details, capacities, and excursion programs reflect verified public business archives and are presented for independent digital demonstration purposes. Inquiries submitted on this concept website are non-operational simulations.'}
          </p>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ahkun-white/60">
          <div>
            © 1955–{new Date().getFullYear()} {BUSINESS_CONFIG.name}. {c.designedBy[language]}.
          </div>
          <div className="flex items-center space-x-6">
            <Link to={getLocalizedPath('privacy')} className="hover:text-ahkun-white transition-colors">
              {language === 'fi' ? 'Tietosuoja' : language === 'de' ? 'Datenschutz' : 'Privacy Notice'}
            </Link>
            <Link to={getLocalizedPath('terms')} className="hover:text-ahkun-white transition-colors">
              {language === 'fi' ? 'Käyttöehdot' : language === 'de' ? 'AGB' : 'Terms of Concept'}
            </Link>
            <Link to={getLocalizedPath('location')} className="hover:text-ahkun-white transition-colors">
              {t.location[language]}
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
