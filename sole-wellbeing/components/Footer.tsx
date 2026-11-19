import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { ShieldCheck, Phone, Mail, MapPin, Heart, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-teal-950 text-cream-100 border-t border-teal-900 pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-teal-900/80">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="primary" theme="dark" size="lg" />
            <p className="text-slatecharcoal-400 text-xs sm:text-sm leading-relaxed max-w-sm mt-2 font-light">
              Nurse-led clinical foot health care providing routine podiatric treatments, painful corn &amp; callus removal, diabetic neurovascular assessments, and dedicated domiciliary home visits across the local community.
            </p>

            <div className="pt-2 space-y-2 text-xs font-mono text-slatecharcoal-400">
              <div className="flex items-center gap-2 text-cream-100">
                <ShieldCheck className="w-4 h-4 text-seafoam-400 shrink-0" />
                <span>BSc Hons Adult Nurse &bull; NMC Registered &bull; FHP Dip</span>
              </div>
              <div className="flex items-center gap-2 text-cream-100">
                <ShieldCheck className="w-4 h-4 text-seafoam-400 shrink-0" />
                <span>Fully Insured &bull; Enhanced DBS Checked &bull; Autoclave Sterilized</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-seafoam-300 font-semibold">
              Clinical Treatments
            </h4>
            <ul className="space-y-2 text-xs text-slatecharcoal-300">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Routine Toenail Care
                </Link>
              </li>
              <li>
                <Link href="/services#corns" className="hover:text-white transition-colors">
                  Corn &amp; Callus Debridement
                </Link>
              </li>
              <li>
                <Link href="/services#ingrown" className="hover:text-white transition-colors">
                  Ingrowing Toenail Care
                </Link>
              </li>
              <li>
                <Link href="/diabetic-care" className="hover:text-white transition-colors">
                  Diabetic Neurovascular Review
                </Link>
              </li>
              <li>
                <Link href="/services#verruca" className="hover:text-white transition-colors">
                  Verruca Treatments
                </Link>
              </li>
              <li>
                <Link href="/triage" className="hover:text-white transition-colors">
                  Foot Symptom Checker
                </Link>
              </li>
            </ul>
          </div>

          {/* Practice & Home Visits */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-seafoam-300 font-semibold">
              Practice &amp; Care
            </h4>
            <ul className="space-y-2 text-xs text-slatecharcoal-300">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Cally (NHS Nurse)
                </Link>
              </li>
              <li>
                <Link href="/home-visits" className="hover:text-white transition-colors">
                  Domiciliary Home Visits
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Transparent Fees
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact &amp; Coverage Radius
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours & Contact */}
          <div className="space-y-3 text-xs">
            <h4 className="font-mono text-xs uppercase tracking-widest text-seafoam-300 font-semibold">
              Direct Contact
            </h4>
            <div className="space-y-2 text-slatecharcoal-300 font-mono text-[11px]">
              <div className="flex items-center gap-2 text-cream-100">
                <Phone className="w-3.5 h-3.5 text-seafoam-400 shrink-0" />
                <span>07123 456789</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-seafoam-400 shrink-0" />
                <span>cally@solewellbeing.co.uk</span>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <Clock className="w-3.5 h-3.5 text-seafoam-400 shrink-0 mt-0.5" />
                <span>Mon – Fri: 08:30 – 17:30<br />Sat: By Appointment</span>
              </div>
            </div>
            <p className="text-[10px] text-slatecharcoal-400 pt-1 font-sans">
              Home visits arranged across town and surrounding village communities.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slatecharcoal-400">
          <div>
            &copy; {new Date().getFullYear()} Sole Wellbeing Foot Health. All rights reserved.
          </div>
          <div className="flex items-center gap-3 text-[11px]">
            <span>Clinical Standards &bull; Infection Prevention &bull; NHS Trained</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
