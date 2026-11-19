import React from 'react';
import Link from 'next/link';
import { ShieldAlert, ArrowLeft, PhoneCall } from 'lucide-react';

export const metadata = {
  title: 'Terms of Demonstration & Healthcare Disclaimer | VALENCE Clinical',
  description:
    'Legal terms of demonstration, non-affiliation notice, and medical disclaimer for the VALENCE Clinical concept developed by NOVA Digital Studio.',
};

export default function TermsPage() {
  return (
    <div className="space-y-16 py-12 pb-24">
      {/* Header */}
      <section className="bg-stone-100/80 border-b border-stone-200 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-stone-200 text-charcoal-700 text-[10px] font-mono uppercase tracking-widest">
            <span>Governance &bull; Terms of Demonstration</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl text-forest-900 font-normal tracking-tight">
            Terms of Demonstration &amp; Medical Disclaimer
          </h1>
          <p className="text-xs font-mono text-stone-500">
            Portfolio Showcase &bull; NOVA Digital Studio &bull; Non-Operating Entity
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10 text-charcoal-700 text-sm leading-relaxed font-light">
        {/* Mandatory Prominent Notice */}
        <div className="p-6 rounded-xl bg-forest-950 text-ivory-100 border border-forest-800 space-y-3">
          <div className="flex items-center gap-2 text-sage-300 font-mono text-xs uppercase tracking-wider font-semibold">
            <ShieldAlert className="w-4 h-4 text-sage-400" />
            <span>Fictional Healthcare Website Demonstration Notice</span>
          </div>
          <p className="text-xs text-stone-200 leading-relaxed font-light">
            <strong>&ldquo;Independent fictional healthcare website concept by NOVA Digital Studio. Not affiliated with or endorsed by any existing healthcare provider. Educational content is for design demonstration only.&rdquo;</strong>
          </p>
        </div>

        {/* Emergency Warning */}
        <div className="p-5 rounded-lg bg-stone-100 border border-stone-300 space-y-2 text-xs">
          <div className="flex items-center gap-2 font-mono text-forest-900 font-medium uppercase tracking-wider">
            <PhoneCall className="w-4 h-4 text-forest-800" />
            <span>Emergency Psychiatric / Medical Disclaimer</span>
          </div>
          <p className="text-charcoal-700 leading-relaxed">
            If you or someone you know is in acute distress, experiencing thoughts of self-harm, or undergoing a medical emergency, do not attempt to contact this website. Please immediately call <strong className="text-forest-950 font-medium">988</strong> (Suicide &amp; Crisis Lifeline in the US &amp; Canada), <strong className="text-forest-950 font-medium">911 / 112 / 999</strong>, or present to your local hospital emergency department.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-serif text-2xl text-forest-900 font-normal">
            1. Nature of the Website
          </h2>
          <p>
            VALENCE Clinical is an entirely fictional medical practice brand conceived, designed, and developed by NOVA Digital Studio. The purpose of this project is to illustrate contemporary best practices in specialist healthcare digital architecture, editorial typography, patient reassurance, and clinical UX design.
          </p>
          <p>
            VALENCE Clinical is not an active medical practice, does not maintain a commercial clinic, does not hold clinical licenses, and does not provide diagnosis, prescribing, or clinical treatment of any kind.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-serif text-2xl text-forest-900 font-normal">
            2. No Doctor-Patient Relationship
          </h2>
          <p>
            No communication through this website—including form submissions, consultation simulations, telephone placeholders, or email exchanges—establishes a doctor-patient relationship, psychotherapist-patient relationship, or any confidential clinical obligation.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-serif text-2xl text-forest-900 font-normal">
            3. Educational &amp; Architectural Content Only
          </h2>
          <p>
            All information provided regarding ketamine pharmacology, NMDA receptor mechanisms, treatment-resistant depression, and supervised administration is compiled from published academic literature for design demonstration purposes. It does not constitute individual medical advice, psychiatric consultation, or clinical directives. Individuals seeking medical care must consult a licensed medical professional in their jurisdiction.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-serif text-2xl text-forest-900 font-normal">
            4. Absence of Commercial Affiliation
          </h2>
          <p>
            This demonstration is completely independent. It is not affiliated with, endorsed by, sponsored by, or connected to any commercial ketamine clinic, pharmaceutical manufacturer, hospital network, or existing healthcare organization.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-serif text-2xl text-forest-900 font-normal">
            5. Intellectual Property &amp; Portfolio Attribution
          </h2>
          <p>
            The visual design, brand mark, editorial layout, and code architecture of VALENCE Clinical are intellectual property authored by NOVA Digital Studio as an independent creative demonstration.
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
