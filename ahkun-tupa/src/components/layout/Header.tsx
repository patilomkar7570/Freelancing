import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { Logo } from '../brand/Logo';
import { DisclaimerBanner } from './DisclaimerBanner';
import { LanguageSelector } from './LanguageSelector';
import { UI_TRANSLATIONS } from '../../data/contentConfig';
import { 
  ChevronDown, 
  Menu, 
  X, 
  CalendarCheck, 
  Home, 
  Compass, 
  Coffee, 
  Camera, 
  MapPin, 
  Mail, 
  Trees, 
  Waves,
  Tent,
  Sparkles
} from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [stayDropdownOpen, setStayDropdownOpen] = useState(false);
  const [experiencesDropdownOpen, setExperiencesDropdownOpen] = useState(false);
  
  const { language, getLocalizedPath } = useLanguage();
  const location = useLocation();

  const isHomePage = location.pathname === `/${language}` || location.pathname === `/${language}/` || location.pathname === '/';
  
  const stayRef = useRef<HTMLDivElement>(null);
  const expRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setStayDropdownOpen(false);
    setExperiencesDropdownOpen(false);
  }, [location.pathname]);

  // Click outside listener for dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (stayRef.current && !stayRef.current.contains(event.target as Node)) {
        setStayDropdownOpen(false);
      }
      if (expRef.current && !expRef.current.contains(event.target as Node)) {
        setExperiencesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const t = UI_TRANSLATIONS.nav;

  // Header background styling based on scroll state
  const headerBgClass = isHomePage
    ? isScrolled
      ? 'bg-[#F6F3EB]/95 backdrop-blur-md shadow-sm border-b border-ahkun-border/70 text-ahkun-charcoal'
      : 'bg-transparent text-[#FDFCF8] [text-shadow:_0_1px_8px_rgb(0_0_0_/_40%)]'
    : 'bg-[#F6F3EB] border-b border-ahkun-border text-ahkun-charcoal';

  const logoTheme = isHomePage && !isScrolled ? 'dark' : 'light';

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      <DisclaimerBanner />
      
      <div className={`transition-all duration-300 ${headerBgClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">
            
            {/* Logo */}
            <Logo variant="horizontal" theme={logoTheme} langPrefix={language} />

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-1 2xl:space-x-3 text-sm font-medium" aria-label="Main navigation">
              
              {/* Stay Dropdown */}
              <div 
                ref={stayRef}
                className="relative"
                onMouseEnter={() => setStayDropdownOpen(true)}
                onMouseLeave={() => setStayDropdownOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setStayDropdownOpen(!stayDropdownOpen)}
                  aria-expanded={stayDropdownOpen}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-md hover:text-ahkun-timber transition-colors"
                >
                  <span>{t.stay[language]}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${stayDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {stayDropdownOpen && (
                  <div className="absolute top-full left-0 w-80 bg-ahkun-white text-ahkun-charcoal rounded-xl shadow-xl border border-ahkun-border p-2.5 mt-1 text-left animate-in fade-in slide-in-from-top-2 duration-150 [text-shadow:none] z-50">
                    <div className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-ahkun-muted">
                      {t.stay[language]}
                    </div>
                    <Link
                      to={getLocalizedPath('accommodation/kelo-cabins')}
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-ahkun-bg transition-colors"
                    >
                      <Trees className="w-4 h-4 text-ahkun-timber mt-0.5 shrink-0" />
                      <div>
                        <div className="text-sm font-semibold">
                          {language === 'fi' ? 'Kelomökit joen toisella puolella' : language === 'de' ? 'Kelo-Hütten am Fluss' : 'Kelo Log Cabins Across River'}
                        </div>
                        <div className="text-xs text-ahkun-muted">
                          {language === 'fi' ? 'Oma soutuvene · Avotakka · Rantasauna' : language === 'de' ? 'Eigenes Ruderboot · Kamin · Ufersauna' : 'Private rowing boat · Open fireplace · Sauna'}
                        </div>
                      </div>
                    </Link>
                    <Link
                      to={getLocalizedPath('accommodation/riverside-cabins')}
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-ahkun-bg transition-colors"
                    >
                      <Home className="w-4 h-4 text-ahkun-pine mt-0.5 shrink-0" />
                      <div>
                        <div className="text-sm font-semibold">
                          {language === 'fi' ? 'Rantamökit & Huoneet' : language === 'de' ? 'Uferhütten & Zimmer' : 'Riverside Cabins & Rooms'}
                        </div>
                        <div className="text-xs text-ahkun-muted">
                          {language === 'fi' ? 'Sähköistetyt mökit · Huoltorakennus' : language === 'de' ? 'Beheizte Hütten · Nahe dem Anleger' : 'Electrified cabins steps from pier'}
                        </div>
                      </div>
                    </Link>
                    <Link
                      to={getLocalizedPath('accommodation/camping')}
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-ahkun-bg transition-colors"
                    >
                      <Tent className="w-4 h-4 text-ahkun-forest mt-0.5 shrink-0" />
                      <div>
                        <div className="text-sm font-semibold">
                          {language === 'fi' ? 'Asuntoauto- & Teltta-alue' : language === 'de' ? 'Wohnmobil & Zeltplatz' : 'Caravan & Tent Camping'}
                        </div>
                        <div className="text-xs text-ahkun-muted">
                          {language === 'fi' ? 'Sähköpaikat rannassa · Huoltotilat' : language === 'de' ? 'Stromanschlüsse am Ufer' : 'Shoreline pitches with power hookups'}
                        </div>
                      </div>
                    </Link>
                    <div className="border-t border-ahkun-border my-1 pt-1">
                      <Link
                        to={getLocalizedPath('accommodation')}
                        className="block px-3 py-1.5 text-xs text-ahkun-forest hover:text-ahkun-timber font-medium"
                      >
                        {t.allAccommodation[language]} →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Experiences Dropdown */}
              <div 
                ref={expRef}
                className="relative"
                onMouseEnter={() => setExperiencesDropdownOpen(true)}
                onMouseLeave={() => setExperiencesDropdownOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setExperiencesDropdownOpen(!experiencesDropdownOpen)}
                  aria-expanded={experiencesDropdownOpen}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-md hover:text-ahkun-timber transition-colors"
                >
                  <span>{t.experiences[language]}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${experiencesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {experiencesDropdownOpen && (
                  <div className="absolute top-full left-0 w-80 bg-ahkun-white text-ahkun-charcoal rounded-xl shadow-xl border border-ahkun-border p-2.5 mt-1 text-left animate-in fade-in slide-in-from-top-2 duration-150 [text-shadow:none] z-50">
                    <div className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-ahkun-muted">
                      {t.experiences[language]}
                    </div>
                    <Link
                      to={getLocalizedPath('experiences')}
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-ahkun-bg transition-colors"
                    >
                      <Waves className="w-4 h-4 text-ahkun-river mt-0.5 shrink-0" />
                      <div>
                        <div className="text-sm font-semibold">
                          {language === 'fi' ? 'Jokiveneretki Ravadas-putouksille' : language === 'de' ? 'Flussbootfahrt Ravadas-Fälle' : 'Riverboat to Ravadas Falls'}
                        </div>
                        <div className="text-xs text-ahkun-muted">
                          {language === 'fi' ? '20 km kanjoniristeily · Nuotiokahvit' : language === 'de' ? '20 km Schluchtenfahrt · Lagerfeuer' : '20 km canyon cruise · Campfire coffee'}
                        </div>
                      </div>
                    </Link>
                    <Link
                      to={getLocalizedPath('experiences')}
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-ahkun-bg transition-colors"
                    >
                      <Sparkles className="w-4 h-4 text-ahkun-timber mt-0.5 shrink-0" />
                      <div>
                        <div className="text-sm font-semibold">
                          {language === 'fi' ? 'Aito Kullanhuuhdonta' : language === 'de' ? 'Echtes Goldwaschen' : 'Authentic Gold Panning'}
                        </div>
                        <div className="text-xs text-ahkun-muted">
                          {language === 'fi' ? 'Kultamaat · Vaskooliopetus · Omat hiput' : language === 'de' ? 'Historische Claims · Eigene Funde' : 'Historic claims · Keep your gold flakes'}
                        </div>
                      </div>
                    </Link>
                    <Link
                      to={getLocalizedPath('experiences')}
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-ahkun-bg transition-colors"
                    >
                      <Compass className="w-4 h-4 text-ahkun-forest mt-0.5 shrink-0" />
                      <div>
                        <div className="text-sm font-semibold">
                          {language === 'fi' ? 'Vaellus Kansallispuistossa' : language === 'de' ? 'Wandern im Nationalpark' : 'National Park Hiking'}
                        </div>
                        <div className="text-xs text-ahkun-muted">
                          {language === 'fi' ? 'Joenkielinen-tunturi (534 m) · Reitit pihasta' : language === 'de' ? 'Joenkielinen-Gipfel · Pfade ab Hof' : 'Joenkielinen fell peak (534m) · Trails at door'}
                        </div>
                      </div>
                    </Link>
                    <div className="border-t border-ahkun-border my-1 pt-1">
                      <Link
                        to={getLocalizedPath('experiences')}
                        className="block px-3 py-1.5 text-xs text-ahkun-forest hover:text-ahkun-timber font-medium"
                      >
                        {t.allExperiences[language]} →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Direct links */}
              <Link
                to={getLocalizedPath('restaurant')}
                className="px-3 py-2 rounded-md hover:text-ahkun-timber transition-colors"
              >
                {t.restaurant[language]}
              </Link>

              <Link
                to={getLocalizedPath('gallery')}
                className="px-3 py-2 rounded-md hover:text-ahkun-timber transition-colors"
              >
                {t.gallery[language]}
              </Link>

              <Link
                to={getLocalizedPath('location')}
                className="px-3 py-2 rounded-md hover:text-ahkun-timber transition-colors"
              >
                {t.location[language]}
              </Link>

              <Link
                to={getLocalizedPath('contact')}
                className="px-3 py-2 rounded-md hover:text-ahkun-timber transition-colors"
              >
                {t.contact[language]}
              </Link>
            </nav>

            {/* Desktop Actions: Language Selector & Booking CTA */}
            <div className="hidden lg:flex items-center space-x-3">
              <LanguageSelector variant="desktop" dark={isHomePage && !isScrolled} />
              <Link
                to={getLocalizedPath('reservations')}
                className="inline-flex items-center gap-2 bg-ahkun-forest hover:bg-ahkun-pine text-ahkun-white px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all shadow-md hover:shadow-lg [text-shadow:none]"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>{t.bookCta[language]}</span>
              </Link>
            </div>

            {/* Mobile menu trigger */}
            <div className="flex lg:hidden items-center gap-3">
              <LanguageSelector variant="desktop" dark={isHomePage && !isScrolled} />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ahkun-pine ${
                  isHomePage && !isScrolled ? 'text-ahkun-white' : 'text-ahkun-charcoal'
                }`}
                aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-auto z-40 bg-ahkun-bg/98 backdrop-blur-xl border-t border-ahkun-border h-[calc(100vh-80px)] overflow-y-auto p-6 flex flex-col justify-between text-ahkun-charcoal animate-in fade-in duration-200">
          <div className="space-y-6">
            
            {/* Language Selector in Mobile */}
            <LanguageSelector variant="mobile" />

            <div className="space-y-2 pt-2 border-t border-ahkun-border">
              <div className="font-serif text-lg font-semibold text-ahkun-forest mb-2">
                {t.stay[language]}
              </div>
              <div className="pl-3 space-y-2 border-l-2 border-ahkun-border">
                <Link to={getLocalizedPath('accommodation')} className="block text-sm font-medium hover:text-ahkun-timber">
                  {t.allAccommodation[language]}
                </Link>
                <Link to={getLocalizedPath('accommodation/kelo-cabins')} className="block text-sm text-ahkun-muted hover:text-ahkun-charcoal">
                  {language === 'fi' ? 'Kelomökit joen toisella puolella' : language === 'de' ? 'Kelo-Hütten am anderen Ufer' : 'Kelo Log Cabins Across River'}
                </Link>
                <Link to={getLocalizedPath('accommodation/riverside-cabins')} className="block text-sm text-ahkun-muted hover:text-ahkun-charcoal">
                  {language === 'fi' ? 'Rantamökit & Huoneet' : language === 'de' ? 'Uferhütten & Zimmer' : 'Riverside Cabins & Rooms'}
                </Link>
                <Link to={getLocalizedPath('accommodation/camping')} className="block text-sm text-ahkun-muted hover:text-ahkun-charcoal">
                  {language === 'fi' ? 'Asuntoauto- & Telttailualue' : language === 'de' ? 'Wohnmobil & Zeltplatz' : 'Caravan & Tent Camping'}
                </Link>
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-serif text-lg font-semibold text-ahkun-forest mb-2">
                {t.experiences[language]}
              </div>
              <div className="pl-3 space-y-2 border-l-2 border-ahkun-border">
                <Link to={getLocalizedPath('experiences')} className="block text-sm font-medium hover:text-ahkun-timber">
                  {t.allExperiences[language]}
                </Link>
                <Link to={getLocalizedPath('experiences')} className="block text-sm text-ahkun-muted hover:text-ahkun-charcoal">
                  {language === 'fi' ? 'Jokiveneretket Ravadas-putouksille' : language === 'de' ? 'Flussboot zu Ravadas-Wasserfällen' : 'Riverboat to Ravadas Falls'}
                </Link>
                <Link to={getLocalizedPath('experiences')} className="block text-sm text-ahkun-muted hover:text-ahkun-charcoal">
                  {language === 'fi' ? 'Kullanhuuhdonta kultamailla' : language === 'de' ? 'Goldwaschen an den Claims' : 'Gold Panning at Historic Claims'}
                </Link>
              </div>
            </div>

            <div className="space-y-3 pt-2 border-t border-ahkun-border text-base font-medium">
              <Link to={getLocalizedPath('restaurant')} className="flex items-center gap-3 py-1 hover:text-ahkun-timber">
                <Coffee className="w-4 h-4 text-ahkun-timber" />
                <span>{t.restaurant[language]}</span>
              </Link>
              <Link to={getLocalizedPath('gallery')} className="flex items-center gap-3 py-1 hover:text-ahkun-timber">
                <Camera className="w-4 h-4 text-ahkun-river" />
                <span>{t.gallery[language]}</span>
              </Link>
              <Link to={getLocalizedPath('location')} className="flex items-center gap-3 py-1 hover:text-ahkun-timber">
                <MapPin className="w-4 h-4 text-ahkun-forest" />
                <span>{t.location[language]}</span>
              </Link>
              <Link to={getLocalizedPath('contact')} className="flex items-center gap-3 py-1 hover:text-ahkun-timber">
                <Mail className="w-4 h-4 text-ahkun-muted" />
                <span>{t.contact[language]}</span>
              </Link>
            </div>
          </div>

          <div className="pt-8 pb-4">
            <Link
              to={getLocalizedPath('reservations')}
              className="w-full flex items-center justify-center gap-2 bg-ahkun-forest text-ahkun-white py-3.5 rounded-xl font-semibold tracking-wider uppercase text-xs shadow-lg"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>{t.bookCta[language]}</span>
            </Link>
            <p className="text-[11px] text-center text-ahkun-muted mt-3">
              Independent concept preview · Inquiries are non-operational
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
