import React from 'react';
import { Link } from 'react-router-dom';

export const Terms: React.FC = () => {
  return (
    <div className="py-16 md:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <div className="space-y-4">
        <div className="inline-block font-mono text-[11px] tracking-[0.24em] uppercase font-medium text-nordic-cabin">
          Demonstration Terms
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-normal text-nordic-charcoal">
          Terms & Concept Demonstration Notice
        </h1>
        <p className="text-sm text-nordic-muted">
          Design Concept by NOVA Digital Studio
        </p>
      </div>

      <div className="bg-nordic-snow p-8 sm:p-12 rounded-3xl border border-nordic-border shadow-sm space-y-8 text-sm text-nordic-charcoal leading-relaxed">
        
        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-normal text-nordic-charcoal">
            1. Purpose of this Demonstration
          </h2>
          <p className="text-nordic-muted">
            This digital portfolio demonstration is created by NOVA Digital Studio to showcase high-level brand identity, Scandinavian editorial UI/UX, and responsive web performance for tourism properties in Finnish Lapland.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-normal text-nordic-charcoal">
            2. Intellectual Property & Brand Clarification
          </h2>
          <p className="text-nordic-muted">
            The business name "Holiday Village Kuukiuru" is used solely to identify the real-world subject of this independent redesign concept. The logo symbol, typography layouts, and visual system presented here are original concepts created by NOVA Digital Studio and do not represent the registered trademarks or official identity of Holiday Village Kuukiuru.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-normal text-nordic-charcoal">
            3. Accuracy of Information & Rates
          </h2>
          <p className="text-nordic-muted">
            Historical room dimensions, facilities, and regional activity notes have been gathered from public archives. Historical prices are explicitly marked as archival references and must not be construed as current commercial offerings. Current rates, seasonal availability, and terms of stay must be verified directly with Holiday Village Kuukiuru.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-normal text-nordic-charcoal">
            4. Non-Commercial Status
          </h2>
          <p className="text-nordic-muted">
            No payments are collected, no financial transactions occur, and no commercial services are sold through this demonstration website.
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
