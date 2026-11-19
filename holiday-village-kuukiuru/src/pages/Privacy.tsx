import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Info } from 'lucide-react';

export const Privacy: React.FC = () => {
  return (
    <div className="py-16 md:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <div className="space-y-4">
        <div className="inline-block font-mono text-[11px] tracking-[0.24em] uppercase font-medium text-nordic-cabin">
          Transparency & Data Protection
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-normal text-nordic-charcoal">
          Privacy Notice & Demonstration Policy
        </h1>
        <p className="text-sm text-nordic-muted">
          Last revised: November 2026 · Hospitality Design Showcase by NOVA Digital Studio
        </p>
      </div>

      <div className="bg-nordic-snow p-8 sm:p-12 rounded-3xl border border-nordic-border shadow-sm space-y-8 text-sm text-nordic-charcoal leading-relaxed">
        
        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-normal text-nordic-charcoal">
            1. Nature of this Website
          </h2>
          <p className="text-nordic-muted">
            This website is an independent architectural redesign and user experience demonstration crafted by <strong>NOVA Digital Studio</strong>. <strong>Kuura Riverside Resort</strong> is a fictional brand concept created to showcase contemporary Scandinavian digital hospitality, fluid responsive design, and visual storytelling.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-normal text-nordic-charcoal">
            2. Zero Collection of Personal Guest Data
          </h2>
          <p className="text-nordic-muted">
            We adhere strictly to privacy-by-design and GDPR principles. All interactive demonstration interfaces (including the Reservation Enquiry form and Contact form) run exclusively client-side in your browser.
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-nordic-muted">
            <li>No guest details, dates, or contact numbers are transmitted to external servers.</li>
            <li>No personal inquiries or reservations are processed or stored.</li>
            <li>No advertising trackers, invasive profiling cookies, or third-party pixels are utilized.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-normal text-nordic-charcoal">
            3. Search Engine Directives
          </h2>
          <p className="text-nordic-muted">
            To maintain its status as an independent demonstration concept, this website deploys strict <code>noindex, nofollow</code> robot meta directives and standard HTTP disclaimers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-normal text-nordic-charcoal">
            4. Inquiries & Feedback
          </h2>
          <p className="text-nordic-muted">
            For inquiries regarding digital design, web development, or creative direction, please contact NOVA Digital Studio.
          </p>
        </section>

      </div>

      <div className="text-center">
        <Link
          to="/"
          className="text-xs font-mono uppercase tracking-widest text-nordic-forest hover:text-nordic-cabin underline"
        >
          Return to Homepage
        </Link>
      </div>

    </div>
  );
};
