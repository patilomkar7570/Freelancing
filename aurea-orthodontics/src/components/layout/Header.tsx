"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  Calendar,
  Sparkles,
  Shield,
  HelpCircle,
  FileText,
  AlertTriangle,
  HeartPulse,
} from "lucide-react";
import { Logo } from "../brand/Logo";
import { CLINIC_INFO } from "@/data/clinicInfo";

interface HeaderProps {
  onRequestConsultation: () => void;
  onOpenBrandSpec: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onRequestConsultation,
  onOpenBrandSpec,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [treatmentsDropdown, setTreatmentsDropdown] = useState(false);
  const [educationDropdown, setEducationDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setTreatmentsDropdown(false);
    setEducationDropdown(false);
  }, [pathname]);

  return (
    <>
      {/* Top Pre-Header Bar */}
      <div className="bg-burgundy-900 text-ivory-200 text-[11px] py-1.5 px-4 sm:px-8 border-b border-burgundy-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-goldAccent animate-pulse-subtle" />
            <span className="font-medium tracking-wide">
              AAO-Aligned Specialist Orthodontics &bull; Pediatric, Adolescent & Adult Care
            </span>
          </div>

          <div className="flex items-center gap-4 text-[10px] text-ivory-300">
            <button
              onClick={onOpenBrandSpec}
              className="hover:text-white flex items-center gap-1 transition-colors underline underline-offset-2"
            >
              <Sparkles className="w-3 h-3 text-goldAccent" />
              <span>Brand Identity Spec</span>
            </button>
            <span className="hidden md:inline text-white/30">&bull;</span>
            <span className="hidden md:inline">
              Portfolio Concept by NOVA Digital Studio
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-card border-b border-borderSoft/80 py-3.5"
            : "bg-white/90 backdrop-blur-sm border-b border-borderSoft/50 py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex-shrink-0" aria-label="AUREA Orthodontics Home">
            <Logo variant="horizontal" size="md" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6 text-[13px] font-medium text-charcoal">
            <Link
              href="/"
              className={`hover:text-burgundy transition-colors ${
                pathname === "/" ? "text-burgundy font-semibold" : ""
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`hover:text-burgundy transition-colors ${
                pathname === "/about" ? "text-burgundy font-semibold" : ""
              }`}
            >
              About
            </Link>

            <Link
              href="/team"
              className={`hover:text-burgundy transition-colors ${
                pathname === "/team" ? "text-burgundy font-semibold" : ""
              }`}
            >
              Our Team
            </Link>

            {/* Treatments Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setTreatmentsDropdown(true)}
              onMouseLeave={() => setTreatmentsDropdown(false)}
            >
              <button
                className={`flex items-center gap-1 hover:text-burgundy transition-colors py-2 ${
                  pathname.startsWith("/treatments") ? "text-burgundy font-semibold" : ""
                }`}
                aria-expanded={treatmentsDropdown}
              >
                <span>Treatments</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {treatmentsDropdown && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-elevated border border-borderSoft py-2 z-50 animate-slide-up">
                  <Link
                    href="/treatments"
                    className="block px-4 py-2.5 text-xs text-charcoal hover:bg-ivory-100 font-medium"
                  >
                    All Treatments Overview
                  </Link>
                  <Link
                    href="/treatments/braces"
                    className="block px-4 py-2.5 text-xs text-charcoal hover:bg-ivory-100"
                  >
                    Aesthetic Braces & Clear Aligners
                  </Link>
                  <Link
                    href="/treatments/bite-correction"
                    className="block px-4 py-2.5 text-xs text-charcoal hover:bg-ivory-100"
                  >
                    Bite Correction & Jaw Alignment
                  </Link>
                </div>
              )}
            </div>

            {/* Patient Education Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setEducationDropdown(true)}
              onMouseLeave={() => setEducationDropdown(false)}
            >
              <button
                className={`flex items-center gap-1 hover:text-burgundy transition-colors py-2 ${
                  pathname.startsWith("/patient-education") ? "text-burgundy font-semibold" : ""
                }`}
                aria-expanded={educationDropdown}
              >
                <span>Patient Education</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {educationDropdown && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-elevated border border-borderSoft py-2 z-50 animate-slide-up">
                  <Link
                    href="/patient-education"
                    className="block px-4 py-2.5 text-xs text-charcoal hover:bg-ivory-100 font-medium"
                  >
                    Education Hub Overview
                  </Link>
                  <Link
                    href="/patient-education/oral-hygiene"
                    className="block px-4 py-2.5 text-xs text-charcoal hover:bg-ivory-100"
                  >
                    Oral Hygiene & Cleaning Guide
                  </Link>
                  <Link
                    href="/patient-education/eating-with-braces"
                    className="block px-4 py-2.5 text-xs text-charcoal hover:bg-ivory-100"
                  >
                    Eating with Braces & Food Checker
                  </Link>
                  <Link
                    href="/patient-education/orthodontic-emergencies"
                    className="block px-4 py-2.5 text-xs text-charcoal hover:bg-ivory-100"
                  >
                    Orthodontic Emergencies & Triage
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/smile-gallery"
              className={`hover:text-burgundy transition-colors ${
                pathname === "/smile-gallery" ? "text-burgundy font-semibold" : ""
              }`}
            >
              Smile Gallery
            </Link>

            <Link
              href="/faq"
              className={`hover:text-burgundy transition-colors ${
                pathname === "/faq" ? "text-burgundy font-semibold" : ""
              }`}
            >
              FAQs
            </Link>

            <Link
              href="/patient-resources"
              className={`hover:text-burgundy transition-colors ${
                pathname === "/patient-resources" ? "text-burgundy font-semibold" : ""
              }`}
            >
              Resources
            </Link>

            <Link
              href="/contact"
              className={`hover:text-burgundy transition-colors ${
                pathname === "/contact" ? "text-burgundy font-semibold" : ""
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Action CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onRequestConsultation}
              className="px-5 py-2.5 rounded-full bg-burgundy text-white text-xs font-semibold hover:bg-burgundy-700 transition-all shadow-sm hover:shadow-card flex items-center gap-2 group"
            >
              <Calendar className="w-3.5 h-3.5 text-ivory-200" />
              <span>Request Consultation</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="xl:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-charcoal hover:bg-ivory-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-borderSoft px-6 py-6 space-y-4 animate-fade-in max-h-[80vh] overflow-y-auto">
            <nav className="flex flex-col space-y-3 text-sm font-medium text-charcoal">
              <Link href="/" className="hover:text-burgundy py-1">
                Home
              </Link>
              <Link href="/about" className="hover:text-burgundy py-1">
                About AUREA
              </Link>
              <Link href="/team" className="hover:text-burgundy py-1">
                Our Specialist Team
              </Link>

              <div className="pt-2 border-t border-borderSoft/60">
                <span className="text-[10px] font-bold uppercase tracking-wider text-burgundy block mb-2">
                  Treatments
                </span>
                <div className="pl-3 space-y-2 text-xs">
                  <Link href="/treatments" className="block text-charcoal hover:text-burgundy">
                    Treatments Overview
                  </Link>
                  <Link href="/treatments/braces" className="block text-charcoal hover:text-burgundy">
                    Ceramic & Metal Braces
                  </Link>
                  <Link href="/treatments/bite-correction" className="block text-charcoal hover:text-burgundy">
                    Bite Correction & Alignment
                  </Link>
                </div>
              </div>

              <div className="pt-2 border-t border-borderSoft/60">
                <span className="text-[10px] font-bold uppercase tracking-wider text-burgundy block mb-2">
                  Patient Education
                </span>
                <div className="pl-3 space-y-2 text-xs">
                  <Link href="/patient-education" className="block text-charcoal hover:text-burgundy">
                    Education Hub Overview
                  </Link>
                  <Link href="/patient-education/oral-hygiene" className="block text-charcoal hover:text-burgundy">
                    Oral Hygiene & Cleaning
                  </Link>
                  <Link href="/patient-education/eating-with-braces" className="block text-charcoal hover:text-burgundy">
                    Eating with Braces & Food Checker
                  </Link>
                  <Link href="/patient-education/orthodontic-emergencies" className="block text-charcoal hover:text-burgundy">
                    Orthodontic Emergencies
                  </Link>
                </div>
              </div>

              <div className="pt-2 border-t border-borderSoft/60 space-y-2 text-sm">
                <Link href="/smile-gallery" className="block hover:text-burgundy py-1">
                  Smile Gallery (Demonstration)
                </Link>
                <Link href="/faq" className="block hover:text-burgundy py-1">
                  Frequently Asked Questions
                </Link>
                <Link href="/patient-resources" className="block hover:text-burgundy py-1">
                  Patient Resources & Downloads
                </Link>
                <Link href="/contact" className="block hover:text-burgundy py-1">
                  Contact & Practice Location
                </Link>
              </div>
            </nav>

            <div className="pt-4 border-t border-borderSoft space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestConsultation();
                }}
                className="w-full py-3 rounded-full bg-burgundy text-white text-xs font-semibold text-center hover:bg-burgundy-700 transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Request Initial Consultation</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBrandSpec();
                }}
                className="w-full py-2.5 rounded-full border border-borderSoft text-charcoal text-xs font-medium text-center hover:bg-ivory-100 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-goldAccent" />
                <span>View Brand Identity Spec (NOVA Concept)</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
