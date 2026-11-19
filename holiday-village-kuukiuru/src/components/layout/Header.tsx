import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from '../brand/Logo';
import { DisclaimerBanner } from './DisclaimerBanner';
import { 
  ChevronDown, 
  Menu, 
  X, 
  CalendarCheck, 
  Home, 
  Compass, 
  Flame, 
  Coffee, 
  Camera, 
  MapPin, 
  Mail, 
  Trees, 
  Snowflake, 
  Sun,
  Tent
} from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [stayDropdownOpen, setStayDropdownOpen] = useState(false);
  const [experiencesDropdownOpen, setExperiencesDropdownOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
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

  // Determine navbar background based on scroll and page
  const headerBgClass = isHomePage
    ? isScrolled
      ? 'bg-[#F5F2E9]/95 backdrop-blur-md shadow-sm border-b border-nordic-border/70 text-nordic-charcoal'
      : 'bg-transparent text-[#FCFCF9] [text-shadow:_0_1px_8px_rgb(0_0_0_/_40%)]'
    : 'bg-[#F5F2E9] border-b border-nordic-border text-nordic-charcoal';

  const logoTheme = isHomePage && !isScrolled ? 'dark' : 'light';

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      <DisclaimerBanner />
      
      <div className={`transition-all duration-300 ${headerBgClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">
            
            {/* Logo */}
            <Logo variant="horizontal" theme={logoTheme} />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-3 text-sm font-medium" aria-label="Main navigation">
              
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
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-md transition-colors ${
                    location.pathname.startsWith('/accommodation')
                      ? 'text-nordic-cabin font-semibold'
                      : 'hover:text-nordic-cabin'
                  }`}
                >
                  <span>Stay</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${stayDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {stayDropdownOpen && (
                  <div className="absolute top-full left-0 w-72 bg-[#FCFCF9] text-nordic-charcoal rounded-lg shadow-xl border border-nordic-border p-2 py-3 mt-1 text-left animate-in fade-in slide-in-from-top-2 duration-150 [text-shadow:none]">
                    <div className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider text-nordic-muted">
                      Accommodation Categories
                    </div>
                    <Link
                      to="/accommodation/cottages"
                      className="flex items-start gap-3 p-2.5 rounded-md hover:bg-nordic-surface transition-colors"
                    >
                      <Home className="w-4 h-4 text-nordic-cabin mt-0.5 shrink-0" />
                      <div>
                        <div className="text-sm font-semibold">Duplex Cottages</div>
                        <div className="text-xs text-nordic-muted">45 m² · Sauna & Fireplace · Up to 6 guests</div>
                      </div>
                    </Link>
                    <Link
                      to="/accommodation/rooms"
                      className="flex items-start gap-3 p-2.5 rounded-md hover:bg-nordic-surface transition-colors"
                    >
                      <Trees className="w-4 h-4 text-nordic-pine mt-0.5 shrink-0" />
                      <div>
                        <div className="text-sm font-semibold">Lodge Rooms & Apartments</div>
                        <div className="text-xs text-nordic-muted">6 m² to 55 m² · River views · Group buyout</div>
                      </div>
                    </Link>
                    <Link
                      to="/accommodation/camping"
                      className="flex items-start gap-3 p-2.5 rounded-md hover:bg-nordic-surface transition-colors"
                    >
                      <Tent className="w-4 h-4 text-nordic-forest mt-0.5 shrink-0" />
                      <div>
                        <div className="text-sm font-semibold">Riverside Camping & Caravans</div>
                        <div className="text-xs text-nordic-muted">Shoreline camper pitches · 5th night free</div>
                      </div>
                    </Link>
                    <div className="border-t border-nordic-border my-1.5 pt-1.5">
                      <Link
                        to="/accommodation"
                        className="block px-3 py-1.5 text-xs text-nordic-forest hover:text-nordic-cabin font-medium"
                      >
                        Explore all accommodation →
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
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-md transition-colors ${
                    location.pathname.startsWith('/experiences')
                      ? 'text-nordic-cabin font-semibold'
                      : 'hover:text-nordic-cabin'
                  }`}
                >
                  <span>Experiences</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${experiencesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {experiencesDropdownOpen && (
                  <div className="absolute top-full left-0 w-64 bg-[#FCFCF9] text-nordic-charcoal rounded-lg shadow-xl border border-nordic-border p-2 py-3 mt-1 text-left animate-in fade-in slide-in-from-top-2 duration-150 [text-shadow:none]">
                    <div className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider text-nordic-muted">
                      Seasonal Recreation
                    </div>
                    <Link
                      to="/experiences/winter"
                      className="flex items-start gap-3 p-2.5 rounded-md hover:bg-nordic-surface transition-colors"
                    >
                      <Snowflake className="w-4 h-4 text-nordic-lake mt-0.5 shrink-0" />
                      <div>
                        <div className="text-sm font-semibold">Winter in Lapland</div>
                        <div className="text-xs text-nordic-muted">Skiing, snowmobiles & snow dips</div>
                      </div>
                    </Link>
                    <Link
                      to="/experiences/summer"
                      className="flex items-start gap-3 p-2.5 rounded-md hover:bg-nordic-surface transition-colors"
                    >
                      <Sun className="w-4 h-4 text-nordic-cabin mt-0.5 shrink-0" />
                      <div>
                        <div className="text-sm font-semibold">Summer on the Kemijoki</div>
                        <div className="text-xs text-nordic-muted">Fishing, canoeing & midnight sun</div>
                      </div>
                    </Link>
                    <div className="border-t border-nordic-border my-1.5 pt-1.5">
                      <Link
                        to="/experiences"
                        className="block px-3 py-1.5 text-xs text-nordic-forest hover:text-nordic-cabin font-medium"
                      >
                        All activities overview →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Direct links */}
              <Link
                to="/sauna-and-relaxation"
                className={`px-3 py-2 rounded-md transition-colors ${
                  location.pathname === '/sauna-and-relaxation' ? 'text-nordic-cabin font-semibold' : 'hover:text-nordic-cabin'
                }`}
              >
                Sauna & Relaxation
              </Link>

              <Link
                to="/cafe-and-gatherings"
                className={`px-3 py-2 rounded-md transition-colors ${
                  location.pathname === '/cafe-and-gatherings' ? 'text-nordic-cabin font-semibold' : 'hover:text-nordic-cabin'
                }`}
              >
                Café
              </Link>

              <Link
                to="/gallery"
                className={`px-3 py-2 rounded-md transition-colors ${
                  location.pathname === '/gallery' ? 'text-nordic-cabin font-semibold' : 'hover:text-nordic-cabin'
                }`}
              >
                Gallery
              </Link>

              <Link
                to="/location"
                className={`px-3 py-2 rounded-md transition-colors ${
                  location.pathname === '/location' ? 'text-nordic-cabin font-semibold' : 'hover:text-nordic-cabin'
                }`}
              >
                Location
              </Link>

              <Link
                to="/contact"
                className={`px-3 py-2 rounded-md transition-colors ${
                  location.pathname === '/contact' ? 'text-nordic-cabin font-semibold' : 'hover:text-nordic-cabin'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                to="/reservations"
                className="inline-flex items-center gap-2 bg-nordic-forest hover:bg-nordic-pine text-nordic-snow px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all shadow-md hover:shadow-lg [text-shadow:none]"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Book Your Stay</span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-nordic-pine ${
                  isHomePage && !isScrolled ? 'text-nordic-snow' : 'text-nordic-charcoal'
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
        <div className="fixed inset-0 top-auto z-40 bg-nordic-bg/98 backdrop-blur-xl border-t border-nordic-border h-[calc(100vh-80px)] overflow-y-auto p-6 flex flex-col justify-between text-nordic-charcoal animate-in fade-in duration-200">
          <div className="space-y-6">
            
            <div className="text-xs font-mono uppercase tracking-widest text-nordic-muted">
              Explore Holiday Village Kuukiuru
            </div>

            <div className="space-y-2">
              <div className="font-serif text-lg font-semibold text-nordic-forest mb-2">Accommodation</div>
              <div className="pl-3 space-y-2.5 border-l-2 border-nordic-border">
                <Link to="/accommodation" className="block text-sm font-medium hover:text-nordic-cabin">
                  Accommodation Overview
                </Link>
                <Link to="/accommodation/cottages" className="block text-sm text-nordic-muted hover:text-nordic-charcoal">
                  Duplex Cottages (45 m² · Sauna)
                </Link>
                <Link to="/accommodation/rooms" className="block text-sm text-nordic-muted hover:text-nordic-charcoal">
                  Lodge Rooms & Family Apartments
                </Link>
                <Link to="/accommodation/camping" className="block text-sm text-nordic-muted hover:text-nordic-charcoal">
                  Riverside Motorhome & Camping Pitches
                </Link>
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-serif text-lg font-semibold text-nordic-forest mb-2">Experiences</div>
              <div className="pl-3 space-y-2.5 border-l-2 border-nordic-border">
                <Link to="/experiences" className="block text-sm font-medium hover:text-nordic-cabin">
                  All Experiences Overview
                </Link>
                <Link to="/experiences/winter" className="block text-sm text-nordic-muted hover:text-nordic-charcoal">
                  Winter in Lapland (Skiing & Safaris)
                </Link>
                <Link to="/experiences/summer" className="block text-sm text-nordic-muted hover:text-nordic-charcoal">
                  Summer on the Kemijoki (Boating & Midnight Sun)
                </Link>
              </div>
            </div>

            <div className="space-y-3 pt-2 border-t border-nordic-border text-base font-medium">
              <Link to="/sauna-and-relaxation" className="flex items-center gap-3 py-1 hover:text-nordic-cabin">
                <Flame className="w-4 h-4 text-nordic-cabin" />
                <span>Sauna & Relaxation</span>
              </Link>
              <Link to="/cafe-and-gatherings" className="flex items-center gap-3 py-1 hover:text-nordic-cabin">
                <Coffee className="w-4 h-4 text-nordic-pine" />
                <span>Café & Gatherings</span>
              </Link>
              <Link to="/gallery" className="flex items-center gap-3 py-1 hover:text-nordic-cabin">
                <Camera className="w-4 h-4 text-nordic-lake" />
                <span>Photo Gallery</span>
              </Link>
              <Link to="/location" className="flex items-center gap-3 py-1 hover:text-nordic-cabin">
                <MapPin className="w-4 h-4 text-nordic-forest" />
                <span>How to Find Us</span>
              </Link>
              <Link to="/contact" className="flex items-center gap-3 py-1 hover:text-nordic-cabin">
                <Mail className="w-4 h-4 text-nordic-muted" />
                <span>Contact & Reception</span>
              </Link>
            </div>
          </div>

          <div className="pt-8 pb-4">
            <Link
              to="/reservations"
              className="w-full flex items-center justify-center gap-2 bg-nordic-forest text-nordic-snow py-3.5 rounded-xl font-semibold tracking-wider uppercase text-xs shadow-lg"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Book Your Stay</span>
            </Link>
            <p className="text-[11px] text-center text-nordic-muted mt-3">
              Independent concept preview · Inquiries are non-operational
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
