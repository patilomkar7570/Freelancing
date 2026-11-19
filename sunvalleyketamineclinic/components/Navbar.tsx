'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Calendar } from 'lucide-react';
import Logo from './Logo';
import ConsultationModal from './ConsultationModal';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [treatmentDropdown, setTreatmentDropdown] = useState(false);
  const [patientsDropdown, setPatientsDropdown] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [consultModalOpen, setConsultModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setTreatmentDropdown(false);
    setPatientsDropdown(false);
    setAboutDropdown(false);
  }, [pathname]);

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-ivory-100/95 backdrop-blur-md shadow-subtle border-b border-stone-200'
            : 'bg-ivory-100 border-b border-stone-200/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo */}
            <div className="flex-shrink-0">
              <Logo variant="primary" size="md" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              <Link
                href="/approach"
                className={`px-3 py-2 text-xs font-mono tracking-wider uppercase transition-colors rounded-sm ${
                  isActive('/approach')
                    ? 'text-forest-900 font-semibold border-b-2 border-forest-800'
                    : 'text-charcoal-700 hover:text-forest-900 hover:bg-stone-200/40'
                }`}
              >
                Our Approach
              </Link>

              {/* Treatment Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setTreatmentDropdown(true)}
                onMouseLeave={() => setTreatmentDropdown(false)}
              >
                <Link
                  href="/treatment"
                  className={`inline-flex items-center gap-1 px-3 py-2 text-xs font-mono tracking-wider uppercase transition-colors rounded-sm ${
                    isActive('/treatment')
                      ? 'text-forest-900 font-semibold border-b-2 border-forest-800'
                      : 'text-charcoal-700 hover:text-forest-900 hover:bg-stone-200/40'
                  }`}
                >
                  <span>Treatment</span>
                  <ChevronDown className="w-3 h-3 transition-transform duration-200 opacity-60" />
                </Link>

                {treatmentDropdown && (
                  <div className="absolute top-full left-0 w-64 pt-1 z-50">
                    <div className="bg-white rounded-md shadow-card border border-stone-200 py-2">
                      <Link
                        href="/treatment"
                        className="block px-4 py-2.5 text-xs text-charcoal-800 hover:bg-stone-100 hover:text-forest-900 transition-colors"
                      >
                        <div className="font-medium text-charcoal-900">Clinical Overview</div>
                        <div className="text-[10px] text-charcoal-500 font-sans mt-0.5">What ketamine is &amp; clinical indications</div>
                      </Link>
                      <Link
                        href="/treatment/process"
                        className="block px-4 py-2.5 text-xs text-charcoal-800 hover:bg-stone-100 hover:text-forest-900 transition-colors border-t border-stone-100"
                      >
                        <div className="font-medium text-charcoal-900">Treatment Process</div>
                        <div className="text-[10px] text-charcoal-500 font-sans mt-0.5">Step-by-step patient pathway</div>
                      </Link>
                      <Link
                        href="/preparation"
                        className="block px-4 py-2.5 text-xs text-charcoal-800 hover:bg-stone-100 hover:text-forest-900 transition-colors border-t border-stone-100"
                      >
                        <div className="font-medium text-charcoal-900">Preparation Guide</div>
                        <div className="text-[10px] text-charcoal-500 font-sans mt-0.5">Pre-consultation reflection &amp; checklist</div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* What to Expect Direct Link */}
              <Link
                href="/treatment/process"
                className={`px-3 py-2 text-xs font-mono tracking-wider uppercase transition-colors rounded-sm ${
                  pathname === '/treatment/process'
                    ? 'text-forest-900 font-semibold border-b-2 border-forest-800'
                    : 'text-charcoal-700 hover:text-forest-900 hover:bg-stone-200/40'
                }`}
              >
                What to Expect
              </Link>

              {/* Patient Support & Resources Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setPatientsDropdown(true)}
                onMouseLeave={() => setPatientsDropdown(false)}
              >
                <Link
                  href="/patient-resources"
                  className={`inline-flex items-center gap-1 px-3 py-2 text-xs font-mono tracking-wider uppercase transition-colors rounded-sm ${
                    isActive('/patient-') || isActive('/faq')
                      ? 'text-forest-900 font-semibold border-b-2 border-forest-800'
                      : 'text-charcoal-700 hover:text-forest-900 hover:bg-stone-200/40'
                  }`}
                >
                  <span>Patient Resources</span>
                  <ChevronDown className="w-3 h-3 transition-transform duration-200 opacity-60" />
                </Link>

                {patientsDropdown && (
                  <div className="absolute top-full left-0 w-64 pt-1 z-50">
                    <div className="bg-white rounded-md shadow-card border border-stone-200 py-2">
                      <Link
                        href="/patient-resources"
                        className="block px-4 py-2.5 text-xs text-charcoal-800 hover:bg-stone-100 hover:text-forest-900 transition-colors"
                      >
                        <div className="font-medium text-charcoal-900">Resource Centre</div>
                        <div className="text-[10px] text-charcoal-500 font-sans mt-0.5">Educational guides &amp; secure portal demo</div>
                      </Link>
                      <Link
                        href="/patient-support"
                        className="block px-4 py-2.5 text-xs text-charcoal-800 hover:bg-stone-100 hover:text-forest-900 transition-colors border-t border-stone-100"
                      >
                        <div className="font-medium text-charcoal-900">Integration &amp; Support</div>
                        <div className="text-[10px] text-charcoal-500 font-sans mt-0.5">Reflective care &amp; continuity of care</div>
                      </Link>
                      <Link
                        href="/faq"
                        className="block px-4 py-2.5 text-xs text-charcoal-800 hover:bg-stone-100 hover:text-forest-900 transition-colors border-t border-stone-100"
                      >
                        <div className="font-medium text-charcoal-900">Frequently Asked Questions</div>
                        <div className="text-[10px] text-charcoal-500 font-sans mt-0.5">Clinical answers &amp; practical guidance</div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Clinicians Link */}
              <Link
                href="/clinician-referrals"
                className={`px-3 py-2 text-xs font-mono tracking-wider uppercase transition-colors rounded-sm ${
                  isActive('/clinician-referrals')
                    ? 'text-forest-900 font-semibold border-b-2 border-forest-800'
                    : 'text-charcoal-700 hover:text-forest-900 hover:bg-stone-200/40'
                }`}
              >
                For Clinicians
              </Link>

              {/* About & Team Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setAboutDropdown(true)}
                onMouseLeave={() => setAboutDropdown(false)}
              >
                <Link
                  href="/about"
                  className={`inline-flex items-center gap-1 px-3 py-2 text-xs font-mono tracking-wider uppercase transition-colors rounded-sm ${
                    isActive('/about') || isActive('/team') || isActive('/visit')
                      ? 'text-forest-900 font-semibold border-b-2 border-forest-800'
                      : 'text-charcoal-700 hover:text-forest-900 hover:bg-stone-200/40'
                  }`}
                >
                  <span>About</span>
                  <ChevronDown className="w-3 h-3 transition-transform duration-200 opacity-60" />
                </Link>

                {aboutDropdown && (
                  <div className="absolute top-full right-0 w-56 pt-1 z-50">
                    <div className="bg-white rounded-md shadow-card border border-stone-200 py-2">
                      <Link
                        href="/about"
                        className="block px-4 py-2 text-xs text-charcoal-800 hover:bg-stone-100 hover:text-forest-900 transition-colors"
                      >
                        About the Practice
                      </Link>
                      <Link
                        href="/team"
                        className="block px-4 py-2 text-xs text-charcoal-800 hover:bg-stone-100 hover:text-forest-900 transition-colors border-t border-stone-100"
                      >
                        Clinical Team &amp; Advisory
                      </Link>
                      <Link
                        href="/visit"
                        className="block px-4 py-2 text-xs text-charcoal-800 hover:bg-stone-100 hover:text-forest-900 transition-colors border-t border-stone-100"
                      >
                        Practice Environment &amp; Visit
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                className={`px-3 py-2 text-xs font-mono tracking-wider uppercase transition-colors rounded-sm ${
                  isActive('/contact')
                    ? 'text-forest-900 font-semibold border-b-2 border-forest-800'
                    : 'text-charcoal-700 hover:text-forest-900 hover:bg-stone-200/40'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Consultation Action CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => setConsultModalOpen(true)}
                className="px-4 py-2.5 rounded bg-forest-800 text-ivory text-xs font-mono uppercase tracking-wider hover:bg-forest-700 transition-all shadow-subtle hover:shadow-card flex items-center gap-2 group"
              >
                <Calendar className="w-3.5 h-3.5 text-sage-300" />
                <span>Consultation Assessment</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setConsultModalOpen(true)}
                className="px-3 py-1.5 rounded bg-forest-800 text-ivory text-[10px] font-mono uppercase tracking-wider"
              >
                Consult
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-charcoal-800 hover:text-forest-900 hover:bg-stone-200/60 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-ivory-100 border-b border-stone-300 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200 shadow-elevated">
            <div className="grid grid-cols-1 gap-1">
              <Link
                href="/"
                className="px-3 py-2 text-xs font-mono uppercase tracking-wider text-charcoal-900 hover:bg-stone-200 rounded"
              >
                Home
              </Link>
              <Link
                href="/approach"
                className="px-3 py-2 text-xs font-mono uppercase tracking-wider text-charcoal-900 hover:bg-stone-200 rounded"
              >
                Our Approach
              </Link>
              <Link
                href="/treatment"
                className="px-3 py-2 text-xs font-mono uppercase tracking-wider text-charcoal-900 hover:bg-stone-200 rounded"
              >
                Treatment Overview
              </Link>
              <Link
                href="/treatment/process"
                className="px-3 py-2 text-xs font-mono uppercase tracking-wider text-charcoal-900 hover:bg-stone-200 rounded"
              >
                Treatment Process &amp; Journey
              </Link>
              <Link
                href="/preparation"
                className="px-3 py-2 text-xs font-mono uppercase tracking-wider text-charcoal-900 hover:bg-stone-200 rounded"
              >
                Preparation Guide
              </Link>
              <Link
                href="/patient-support"
                className="px-3 py-2 text-xs font-mono uppercase tracking-wider text-charcoal-900 hover:bg-stone-200 rounded"
              >
                Patient Support &amp; Integration
              </Link>
              <Link
                href="/patient-resources"
                className="px-3 py-2 text-xs font-mono uppercase tracking-wider text-charcoal-900 hover:bg-stone-200 rounded"
              >
                Patient Resources &amp; Portal
              </Link>
              <Link
                href="/clinician-referrals"
                className="px-3 py-2 text-xs font-mono uppercase tracking-wider text-charcoal-900 hover:bg-stone-200 rounded"
              >
                Clinician Referrals
              </Link>
              <Link
                href="/about"
                className="px-3 py-2 text-xs font-mono uppercase tracking-wider text-charcoal-900 hover:bg-stone-200 rounded"
              >
                About the Practice
              </Link>
              <Link
                href="/team"
                className="px-3 py-2 text-xs font-mono uppercase tracking-wider text-charcoal-900 hover:bg-stone-200 rounded"
              >
                Clinical Team
              </Link>
              <Link
                href="/visit"
                className="px-3 py-2 text-xs font-mono uppercase tracking-wider text-charcoal-900 hover:bg-stone-200 rounded"
              >
                Visiting the Practice
              </Link>
              <Link
                href="/faq"
                className="px-3 py-2 text-xs font-mono uppercase tracking-wider text-charcoal-900 hover:bg-stone-200 rounded"
              >
                Frequently Asked Questions
              </Link>
              <Link
                href="/contact"
                className="px-3 py-2 text-xs font-mono uppercase tracking-wider text-charcoal-900 hover:bg-stone-200 rounded"
              >
                Contact &amp; Enquiries
              </Link>
            </div>

            <div className="pt-3 border-t border-stone-200">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setConsultModalOpen(true);
                }}
                className="w-full py-3 rounded bg-forest-800 text-ivory text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-sage-300" />
                <span>Request Consultation Assessment</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Global Consultation Modal */}
      <ConsultationModal
        isOpen={consultModalOpen}
        onClose={() => setConsultModalOpen(false)}
      />
    </>
  );
}
