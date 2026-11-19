"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "../brand/Logo";
import { CLINIC_INFO } from "@/data/clinicInfo";
import {
  Clock,
  MapPin,
  Phone,
  Mail,
  ShieldAlert,
  Sparkles,
  Heart,
  Calendar,
  ExternalLink,
} from "lucide-react";

interface FooterProps {
  onOpenBrandSpec: () => void;
  onRequestConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenBrandSpec,
  onRequestConsultation,
}) => {
  return (
    <footer className="bg-charcoal text-white pt-16 pb-12 border-t border-charcoal-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Top Consultation Teaser Banner */}
        <div className="bg-gradient-to-r from-burgundy-900 via-burgundy-800 to-burgundy-900 rounded-3xl p-8 sm:p-12 border border-burgundy-700/50 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-3">
            <span className="px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest bg-white/10 text-ivory-200 border border-white/15">
              Begin Your Orthodontic Journey
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-white">
              A confident smile begins with thoughtful care.
            </h3>
            <p className="text-xs sm:text-sm text-ivory-300 leading-relaxed">
              Experience the harmony of modern digital orthodontics, bespoke appliance design, and compassionate patient care. Request a relaxed 3D discovery consultation today.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-3">
            <button
              onClick={onRequestConsultation}
              className="px-8 py-3.5 rounded-full bg-white text-burgundy font-semibold text-xs sm:text-sm hover:bg-ivory-100 transition-all shadow-elevated"
            >
              Request 3D Consultation
            </button>
            <Link
              href="/treatments"
              className="px-6 py-3.5 rounded-full border border-white/30 text-white font-medium text-xs sm:text-sm hover:bg-white/10 transition-colors text-center"
            >
              Explore Treatments
            </Link>
          </div>

          {/* Decorative geometric watermark */}
          <div className="absolute right-[-40px] bottom-[-40px] w-64 h-64 rounded-full border-[30px] border-white/5 pointer-events-none" />
        </div>

        {/* Main 4-Column Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 text-xs">
          {/* Col 1: Brand Info & Studio Notice */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="on-dark" size="lg" />
            <p className="text-ivory-400 leading-relaxed text-xs max-w-sm mt-3">
              {CLINIC_INFO.missionStatement}
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenBrandSpec}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-ivory-200 border border-white/15 text-[11px] transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-goldAccent" />
                <span>View Brand Identity Spec (NOVA Concept)</span>
              </button>
            </div>
          </div>

          {/* Col 2: Treatments */}
          <div className="space-y-3">
            <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-ivory-200">
              Treatments
            </h4>
            <ul className="space-y-2 text-ivory-400">
              <li>
                <Link href="/treatments" className="hover:text-white transition-colors">
                  Treatments Overview
                </Link>
              </li>
              <li>
                <Link href="/treatments/braces" className="hover:text-white transition-colors">
                  Aesthetic Ceramic Braces
                </Link>
              </li>
              <li>
                <Link href="/treatments/braces" className="hover:text-white transition-colors">
                  Low-Profile Metal Braces
                </Link>
              </li>
              <li>
                <Link href="/treatments" className="hover:text-white transition-colors">
                  Precision Clear Aligners
                </Link>
              </li>
              <li>
                <Link href="/treatments/bite-correction" className="hover:text-white transition-colors">
                  Bite Correction & TMJ Harmony
                </Link>
              </li>
              <li>
                <Link href="/treatments/bite-correction" className="hover:text-white transition-colors">
                  Phase I Early Interceptive Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Patient Care & Education */}
          <div className="space-y-3">
            <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-ivory-200">
              Patient Care
            </h4>
            <ul className="space-y-2 text-ivory-400">
              <li>
                <Link href="/patient-education" className="hover:text-white transition-colors">
                  Education Hub Overview
                </Link>
              </li>
              <li>
                <Link href="/patient-education/oral-hygiene" className="hover:text-white transition-colors">
                  Brushing & Flossing Guide
                </Link>
              </li>
              <li>
                <Link href="/patient-education/eating-with-braces" className="hover:text-white transition-colors">
                  Food Safety Checker
                </Link>
              </li>
              <li>
                <Link href="/patient-education/orthodontic-emergencies" className="hover:text-white transition-colors">
                  Emergency Triage & Relief
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/patient-resources" className="hover:text-white transition-colors">
                  Downloads & Forms (Demo)
                </Link>
              </li>
              <li>
                <Link href="/smile-gallery" className="hover:text-white transition-colors">
                  Smile Gallery (Demonstration)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Practice Hours & Contact Placeholders */}
          <div className="space-y-3">
            <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-ivory-200">
              Practice Hours (Demo)
            </h4>
            <div className="space-y-1.5 text-ivory-400 text-[11px]">
              {CLINIC_INFO.hours.map((h, i) => (
                <div key={i} className="flex justify-between border-b border-charcoal-light pb-1">
                  <span className="text-ivory-300">{h.days}:</span>
                  <span>{h.times}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 space-y-1.5 text-[11px] text-ivory-400">
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-goldAccent" />
                <span>{CLINIC_INFO.phone.display}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-goldAccent" />
                <span>{CLINIC_INFO.email.display}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mandatory Independent Demonstration Statement */}
        <div className="p-5 rounded-2xl bg-black/40 border border-charcoal-light space-y-2 text-[11px] text-ivory-400 leading-relaxed">
          <div className="flex items-center gap-2 text-goldAccent font-semibold uppercase tracking-wider text-[10px]">
            <ShieldAlert className="w-4 h-4 flex-shrink-0" />
            <span>Independent Demonstration & Ethical Compliance Notice</span>
          </div>
          <p className="text-ivory-300 font-medium">
            &ldquo;Independent fictional healthcare website concept created by NOVA Digital Studio. Not affiliated with or endorsed by any existing healthcare practice.&rdquo;
          </p>
          <p className="text-ivory-500 text-[10px]">
            {CLINIC_INFO.medicalDisclaimer}
          </p>
        </div>

        {/* Bottom Copyright & Studio Bar */}
        <div className="pt-4 border-t border-charcoal-light flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-ivory-500">
          <div>
            &copy; {new Date().getFullYear()} AUREA Orthodontics. Fictional Concept by NOVA Digital Studio. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link href="/patient-resources" className="hover:text-ivory-300 transition-colors">
              Patient Notice
            </Link>
            <Link href="/faq" className="hover:text-ivory-300 transition-colors">
              Clinical Policy FAQs
            </Link>
            <button
              onClick={onOpenBrandSpec}
              className="hover:text-ivory-300 transition-colors underline"
            >
              Identity Spec
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
