import React from 'react';
import Link from 'next/link';
import { ShieldCheck, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Privacy Notice & Data Governance | VALENCE Clinical',
  description:
    'Privacy notice and healthcare data governance framework for the VALENCE Clinical design demonstration by NOVA Digital Studio.',
};

export default function PrivacyPage() {
  return (
    <div className="space-y-16 py-12 pb-24">
      {/* Header */}
      <section className="bg-stone-100/80 border-b border-stone-200 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-stone-200 text-charcoal-700 text-[10px] font-mono uppercase tracking-widest">
            <span>Governance &bull; Privacy Architecture</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl text-forest-900 font-normal tracking-tight">
            Privacy Notice &amp; Data Governance
          </h1>
          <p className="text-xs font-mono text-stone-500">
            Last Updated &bull; Design Demonstration Version &bull; NOVA Digital Studio
          </p>
        </div>
      </section>

      {/* Main Legal Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10 text-charcoal-700 text-sm leading-relaxed font-light">
        {/* Core Notice */}
        <div className="p-6 rounded-xl bg-forest-950 text-ivory-100 border border-forest-800 space-y-3">
          <div className="flex items-center gap-2 text-sage-300 font-mono text-xs uppercase tracking-wider font-semibold">
            <ShieldCheck className="w-4 h-4 text-sage-400" />
            <span>Fictional Concept Disclosure</span>
          </div>
          <p className="text-xs text-stone-300 leading-relaxed font-light">
            VALENCE Clinical is an independent fictional portfolio demonstration created exclusively by NOVA Digital Studio. It is not an operating medical clinic and does not collect, sell, or process real medical records. This Privacy Notice outlines the data governance principles modeled by this architecture.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-serif text-2xl text-forest-900 font-normal">
            1. Principles of Healthcare Data Minimization
          </h2>
          <p>
            In modern healthcare web engineering, informational websites must never serve as the direct repository for Protected Health Information (PHI). Clinical ethics dictate that public-facing marketing websites adhere to strict data minimization principles:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xs">
            <li>No collection of patient diagnoses, prescription histories, or clinical notes on public web forms.</li>
            <li>No submission of government identification, insurance policy numbers, or dates of birth over unauthenticated channels.</li>
            <li>Immediate cryptographic redirection of prospective patients to authorized, certified clinical EHR gateways for any diagnostic communication.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="font-serif text-2xl text-forest-900 font-normal">
            2. Web Analytics and Tracker Prohibition
          </h2>
          <p>
            Many commercial healthcare websites inadvertently leak patient browsing habits to advertising networks via third-party pixels. Our architectural standard strictly prohibits:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xs">
            <li>No third-party tracking pixels (e.g. Meta Pixel, TikTok tracking, or commercial ad-network scripts).</li>
            <li>No cross-site fingerprinting or behavioral remarketing.</li>
            <li>No sale or leasing of visitor IP addresses or interaction telemetry.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="font-serif text-2xl text-forest-900 font-normal">
            3. Demonstration Form Submissions
          </h2>
          <p>
            Any inquiries submitted through the interactive demonstration forms on this website (such as consultation requests or clinician enquiry simulators) are processed locally within browser memory or non-persistent demonstration sandboxes. No information is transmitted to third-party data brokers or persistent marketing databases.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-serif text-2xl text-forest-900 font-normal">
            4. Standards for Operational Medical Deployment
          </h2>
          <p>
            When NOVA Digital Studio designs production infrastructure for licensed specialist medical clinics, the production stack implements:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xs">
            <li>Certified Electronic Health Record (EHR) integrations with TLS 1.3 encryption in transit and AES-256 at rest.</li>
            <li>Hardware-backed Multi-Factor Authentication (MFA) for clinician and patient portal access.</li>
            <li>Immutable audit logging tracking every record view, modification, and transmission.</li>
            <li>Strict adherence to regional healthcare statutory requirements (including HIPAA in the US, GDPR in the EU/UK, and PIPEDA in Canada).</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="font-serif text-2xl text-forest-900 font-normal">
            5. Contact Regarding Design Governance
          </h2>
          <p>
            For inquiries regarding the digital architecture or portfolio demonstration created by NOVA Digital Studio, please contact our design studio representatives via the practice contact channels.
          </p>
        </div>

        <div className="pt-6 border-t border-stone-200">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-forest-800 hover:text-forest-950 underline underline-offset-4"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Return to Practice Homepage
          </Link>
        </div>
      </section>
    </div>
  );
}
