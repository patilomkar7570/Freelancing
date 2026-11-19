'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Calendar, Sparkles, Home, ChevronDown } from 'lucide-react';
import Logo from './Logo';
import BookingModal from './BookingModal';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdown(false);
  }, [pathname]);

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <>
      {/* Top Clinical Announcement Bar */}
      <div className="bg-teal-950 text-white text-[11px] px-4 py-1.5 border-b border-teal-900/80 font-sans">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-seafoam-400 animate-pulse" />
            <span>
              <strong>Sole Wellbeing:</strong> Nurse-Led Clinical Foot Care &amp; Dedicated Domiciliary Home Visits
            </span>
          </div>
          <div className="flex items-center gap-4 text-seafoam-200 font-mono text-[10.5px]">
            <a href="tel:07123456789" className="hover:text-white transition-colors flex items-center gap-1">
              <Phone className="w-3 h-3 text-seafoam-400" />
              <span>07123 456789</span>
            </a>
            <span>&bull;</span>
            <span className="text-white/80">NHS Trained &bull; Enhanced DBS Checked</span>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-cream-100/95 backdrop-blur-md shadow-soft border-b border-pebble-300'
            : 'bg-cream-100 border-b border-pebble-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Logo variant="primary" size="md" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              <Link
                href="/"
                className={`px-3 py-2 text-xs font-mono tracking-wider uppercase transition-colors rounded-lg ${
                  pathname === '/'
                    ? 'text-teal-950 font-semibold bg-pebble-200/50'
                    : 'text-slatecharcoal-700 hover:text-teal-950 hover:bg-pebble-100'
                }`}
              >
                Home
              </Link>

              <Link
                href="/about"
                className={`px-3 py-2 text-xs font-mono tracking-wider uppercase transition-colors rounded-lg ${
                  isActive('/about')
                    ? 'text-teal-950 font-semibold bg-pebble-200/50'
                    : 'text-slatecharcoal-700 hover:text-teal-950 hover:bg-pebble-100'
                }`}
              >
                About Cally
              </Link>

              {/* Treatments Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesDropdown(true)}
                onMouseLeave={() => setServicesDropdown(false)}
              >
                <Link
                  href="/services"
                  className={`inline-flex items-center gap-1 px-3 py-2 text-xs font-mono tracking-wider uppercase transition-colors rounded-lg ${
                    isActive('/services') || isActive('/diabetic-care')
                      ? 'text-teal-950 font-semibold bg-pebble-200/50'
                      : 'text-slatecharcoal-700 hover:text-teal-950 hover:bg-pebble-100'
                  }`}
                >
                  <span>Treatments</span>
                  <ChevronDown className="w-3 h-3 opacity-60" />
                </Link>

                {servicesDropdown && (
                  <div className="absolute top-full left-0 w-64 pt-1 z-50">
                    <div className="bg-white rounded-xl shadow-card border border-pebble-300 py-2">
                      <Link
                        href="/services"
                        className="block px-4 py-2 text-xs text-slatecharcoal-800 hover:bg-cream-100 hover:text-teal-950"
                      >
                        <div className="font-semibold text-teal-950">All Treatments Menu</div>
                        <div className="text-[10px] text-slatecharcoal-500 font-sans">Full clinical procedure list</div>
                      </Link>
                      <Link
                        href="/diabetic-care"
                        className="block px-4 py-2 text-xs text-slatecharcoal-800 hover:bg-cream-100 hover:text-teal-950 border-t border-pebble-100"
                      >
                        <div className="font-semibold text-teal-950">Diabetic Foot Care</div>
                        <div className="text-[10px] text-slatecharcoal-500 font-sans">Neurovascular &amp; ulcer prevention</div>
                      </Link>
                      <Link
                        href="/home-visits"
                        className="block px-4 py-2 text-xs text-slatecharcoal-800 hover:bg-cream-100 hover:text-teal-950 border-t border-pebble-100"
                      >
                        <div className="font-semibold text-teal-950">Domiciliary Home Visits</div>
                        <div className="text-[10px] text-slatecharcoal-500 font-sans">Mobile foot care at home</div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/home-visits"
                className={`px-3 py-2 text-xs font-mono tracking-wider uppercase transition-colors rounded-lg ${
                  pathname === '/home-visits'
                    ? 'text-teal-950 font-semibold bg-pebble-200/50'
                    : 'text-slatecharcoal-700 hover:text-teal-950 hover:bg-pebble-100'
                }`}
              >
                Home Visits
              </Link>

              <Link
                href="/triage"
                className={`px-3 py-2 text-xs font-mono tracking-wider uppercase transition-colors rounded-lg ${
                  isActive('/triage')
                    ? 'text-teal-950 font-semibold bg-pebble-200/50'
                    : 'text-slatecharcoal-700 hover:text-teal-950 hover:bg-pebble-100'
                }`}
              >
                Symptom Checker
              </Link>

              <Link
                href="/pricing"
                className={`px-3 py-2 text-xs font-mono tracking-wider uppercase transition-colors rounded-lg ${
                  isActive('/pricing')
                    ? 'text-teal-950 font-semibold bg-pebble-200/50'
                    : 'text-slatecharcoal-700 hover:text-teal-950 hover:bg-pebble-100'
                }`}
              >
                Fees
              </Link>

              <Link
                href="/faq"
                className={`px-3 py-2 text-xs font-mono tracking-wider uppercase transition-colors rounded-lg ${
                  isActive('/faq')
                    ? 'text-teal-950 font-semibold bg-pebble-200/50'
                    : 'text-slatecharcoal-700 hover:text-teal-950 hover:bg-pebble-100'
                }`}
              >
                FAQs
              </Link>

              <Link
                href="/contact"
                className={`px-3 py-2 text-xs font-mono tracking-wider uppercase transition-colors rounded-lg ${
                  isActive('/contact')
                    ? 'text-teal-950 font-semibold bg-pebble-200/50'
                    : 'text-slatecharcoal-700 hover:text-teal-950 hover:bg-pebble-100'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => setBookingModalOpen(true)}
                className="px-4 py-2.5 rounded-xl bg-teal-900 text-white text-xs font-sans font-semibold tracking-wide hover:bg-teal-800 transition-all shadow-sm hover:shadow-card flex items-center gap-2"
              >
                <Calendar className="w-3.5 h-3.5 text-seafoam-400" />
                <span>Book Appointment</span>
              </button>
            </div>

            {/* Mobile menu triggers */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setBookingModalOpen(true)}
                className="px-3 py-1.5 rounded-lg bg-teal-900 text-white text-xs font-sans font-semibold"
              >
                Book
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slatecharcoal-800 hover:text-teal-950 hover:bg-pebble-200"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-cream-100 border-b border-pebble-300 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-150">
            <div className="grid grid-cols-1 gap-1">
              <Link href="/" className="px-3 py-2 text-xs font-mono uppercase tracking-wider text-slatecharcoal-900 hover:bg-pebble-200 rounded-lg">
                Home
              </Link>
              <Link href="/about" className="px-3 py-2 text-xs font-mono uppercase tracking-wider text-slatecharcoal-900 hover:bg-pebble-200 rounded-lg">
                About Cally
              </Link>
              <Link href="/services" className="px-3 py-2 text-xs font-mono uppercase tracking-wider text-slatecharcoal-900 hover:bg-pebble-200 rounded-lg">
                Treatments Menu
              </Link>
              <Link href="/diabetic-care" className="px-3 py-2 text-xs font-mono uppercase tracking-wider text-slatecharcoal-900 hover:bg-pebble-200 rounded-lg">
                Diabetic Foot Care
              </Link>
              <Link href="/home-visits" className="px-3 py-2 text-xs font-mono uppercase tracking-wider text-slatecharcoal-900 hover:bg-pebble-200 rounded-lg">
                Home Visits &amp; Domiciliary
              </Link>
              <Link href="/triage" className="px-3 py-2 text-xs font-mono uppercase tracking-wider text-slatecharcoal-900 hover:bg-pebble-200 rounded-lg">
                Symptom Checker Tool
              </Link>
              <Link href="/pricing" className="px-3 py-2 text-xs font-mono uppercase tracking-wider text-slatecharcoal-900 hover:bg-pebble-200 rounded-lg">
                Pricing &amp; Fees
              </Link>
              <Link href="/faq" className="px-3 py-2 text-xs font-mono uppercase tracking-wider text-slatecharcoal-900 hover:bg-pebble-200 rounded-lg">
                Frequently Asked Questions
              </Link>
              <Link href="/contact" className="px-3 py-2 text-xs font-mono uppercase tracking-wider text-slatecharcoal-900 hover:bg-pebble-200 rounded-lg">
                Contact &amp; Coverage
              </Link>
            </div>

            <div className="pt-3 border-t border-pebble-200">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setBookingModalOpen(true);
                }}
                className="w-full py-3 rounded-xl bg-teal-900 text-white text-xs font-sans font-semibold flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-seafoam-400" />
                <span>Book Appointment Online</span>
              </button>
            </div>
          </div>
        )}
      </header>

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </>
  );
}
