import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { Shield, PhoneCall } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-forest-950 text-ivory-100 border-t border-forest-900 pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Emergency / Crisis Advisory Banner */}
        <div className="mb-14 p-5 rounded-lg bg-forest-900/80 border border-forest-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded bg-forest-800/80 text-sage-300 shrink-0 mt-0.5">
              <PhoneCall className="w-4 h-4" />
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-sage-300 font-medium">
                Emergency &amp; Crisis Advisory Notice
              </p>
              <p className="text-stone-300 text-xs mt-0.5 leading-relaxed">
                This fictional practice does not provide emergency psychiatric or urgent crisis intervention. If you or someone you know is experiencing acute crisis or thoughts of self-harm, please dial <strong className="text-ivory">988</strong> (Crisis Lifeline in the US &amp; Canada), <strong className="text-ivory">911 / 112 / 999</strong>, or present to your nearest hospital emergency department.
              </p>
            </div>
          </div>
          <div className="shrink-0 font-mono text-[11px] text-sage-300 bg-forest-950/70 px-3 py-1.5 rounded border border-forest-800">
            Immediate Help: 988 / 911
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-forest-900">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="primary" theme="dark" size="lg" />
            <p className="text-stone-300 text-xs leading-relaxed max-w-sm mt-3">
              VALENCE Clinical is a specialist healthcare concept dedicated to considered ketamine medicine, rigorous clinical assessment, and integrated patient care.
            </p>

            <div className="pt-2 text-stone-400 text-xs space-y-1 font-mono text-[11px]">
              <div>Fictional Location Demonstration:</div>
              <div className="text-stone-300">Alpine Pavilion &bull; 450 Elevation Way &bull; Suite 300</div>
              <div className="text-stone-400">Consultation Enquiries: enquiries@valence-demonstration.org</div>
            </div>

            <div className="pt-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-forest-900 text-sage-300 font-mono text-[10px] tracking-wider uppercase border border-forest-800">
                <Shield className="w-3 h-3 text-sage-400" />
                NOVA Digital Studio Portfolio Project
              </span>
            </div>
          </div>

          {/* Treatment & Care */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-sage-300">
              Treatment &amp; Care
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <Link href="/treatment" className="hover:text-ivory transition-colors">
                  Ketamine Overview
                </Link>
              </li>
              <li>
                <Link href="/treatment/process" className="hover:text-ivory transition-colors">
                  Step-by-Step Process
                </Link>
              </li>
              <li>
                <Link href="/preparation" className="hover:text-ivory transition-colors">
                  Preparation &amp; Checklist
                </Link>
              </li>
              <li>
                <Link href="/patient-support" className="hover:text-ivory transition-colors">
                  Integration &amp; Support
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-ivory transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Practice & Clinicians */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-sage-300">
              Practice &amp; Clinicians
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <Link href="/approach" className="hover:text-ivory transition-colors">
                  Our Approach
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-ivory transition-colors">
                  About VALENCE
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-ivory transition-colors">
                  Clinical Care Team
                </Link>
              </li>
              <li>
                <Link href="/clinician-referrals" className="hover:text-ivory transition-colors">
                  Clinician Referrals
                </Link>
              </li>
              <li>
                <Link href="/visit" className="hover:text-ivory transition-colors">
                  Visiting &amp; Accessibility
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-ivory transition-colors">
                  Contact Practice
                </Link>
              </li>
            </ul>
          </div>

          {/* Governance & Architecture */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-sage-300">
              Standards &amp; Concept
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <Link href="/patient-resources" className="hover:text-ivory transition-colors">
                  Patient Resources &amp; Portal
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-ivory transition-colors">
                  Privacy &amp; Data Notice
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-ivory transition-colors">
                  Terms of Demonstration
                </Link>
              </li>
            </ul>

            <div className="pt-4 border-t border-forest-900 text-[10.5px] text-stone-400 leading-normal">
              Designed &amp; engineered by NOVA Digital Studio as a showcase of healthcare UX and brand architecture.
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="pt-8 text-stone-400 text-xs space-y-4">
          <div className="p-4 rounded bg-forest-900/50 border border-forest-900 text-[11px] leading-relaxed text-stone-300">
            <strong className="text-ivory font-medium">Independent Fictional Portfolio Concept Notice:</strong> This website is an independent fictional healthcare website concept developed exclusively by NOVA Digital Studio for design and architectural demonstration. It is not affiliated with, endorsed by, or operating on behalf of any existing medical clinic, healthcare system, or licensed practitioner. Ketamine is a regulated prescription pharmaceutical; any prospective medical treatment requires direct evaluation, supervision, and informed consent by licensed medical professionals. Educational content is provided for design demonstration purposes only and must not be used as clinical advice.
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[10px] text-stone-400">
            <div>
              &copy; {new Date().getFullYear()} VALENCE Clinical Concept &bull; Authored by NOVA Digital Studio. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="hover:text-ivory transition-colors">Privacy</Link>
              <span>&bull;</span>
              <Link href="/terms" className="hover:text-ivory transition-colors">Terms of Demonstration</Link>
              <span>&bull;</span>
              <Link href="/contact" className="hover:text-ivory transition-colors">Enquiries</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
