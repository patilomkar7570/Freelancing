import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Compass, Home, BookOpen, HelpCircle } from 'lucide-react';
import Logo from '@/components/Logo';

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center py-20 px-4 sm:px-6">
      <div className="max-w-xl w-full text-center space-y-8 bg-white/70 p-8 sm:p-12 rounded-xl border border-stone-200 shadow-card backdrop-blur-sm">
        <div className="flex justify-center">
          <Logo variant="symbol" size="lg" />
        </div>

        <div className="space-y-3">
          <span className="editorial-tag text-sage-600">404 &bull; Clinical Navigation</span>
          <h1 className="font-serif text-4xl sm:text-5xl text-forest-900 font-normal">
            Page Not Found
          </h1>
          <p className="text-charcoal-600 text-sm leading-relaxed max-w-md mx-auto">
            The clinical resource or page you requested could not be located. You may have followed an outdated link or entered an incorrect address.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left pt-2">
          <Link
            href="/"
            className="p-3.5 rounded-lg border border-stone-200 hover:border-forest-700 hover:bg-stone-50 transition-colors flex items-center gap-3 group"
          >
            <div className="p-2 rounded bg-sage-100 text-forest-800">
              <Home className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-forest-900 font-medium">Home</div>
              <div className="text-[11px] text-charcoal-500">Practice overview</div>
            </div>
          </Link>

          <Link
            href="/treatment"
            className="p-3.5 rounded-lg border border-stone-200 hover:border-forest-700 hover:bg-stone-50 transition-colors flex items-center gap-3 group"
          >
            <div className="p-2 rounded bg-sage-100 text-forest-800">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-forest-900 font-medium">Treatment</div>
              <div className="text-[11px] text-charcoal-500">Clinical overview &amp; care</div>
            </div>
          </Link>

          <Link
            href="/treatment/process"
            className="p-3.5 rounded-lg border border-stone-200 hover:border-forest-700 hover:bg-stone-50 transition-colors flex items-center gap-3 group"
          >
            <div className="p-2 rounded bg-sage-100 text-forest-800">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-forest-900 font-medium">Process</div>
              <div className="text-[11px] text-charcoal-500">Step-by-step pathway</div>
            </div>
          </Link>

          <Link
            href="/faq"
            className="p-3.5 rounded-lg border border-stone-200 hover:border-forest-700 hover:bg-stone-50 transition-colors flex items-center gap-3 group"
          >
            <div className="p-2 rounded bg-sage-100 text-forest-800">
              <HelpCircle className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-forest-900 font-medium">FAQs</div>
              <div className="text-[11px] text-charcoal-500">Common questions</div>
            </div>
          </Link>
        </div>

        <div className="pt-4 border-t border-stone-200">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-forest-800 hover:text-forest-950 underline underline-offset-4"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Return to Practice Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
