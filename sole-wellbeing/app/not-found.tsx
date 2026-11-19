import React from 'react';
import Link from 'next/link';
import { Home, ArrowLeft, HelpCircle, Calendar, Sparkles } from 'lucide-react';
import Logo from '@/components/Logo';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 rounded-2xl border border-pebble-300 shadow-card">
        <div className="flex justify-center">
          <Logo variant="symbol" size="lg" />
        </div>

        <div className="space-y-2">
          <span className="clinical-tag text-seafoam-700">404 Error &bull; Page Not Found</span>
          <h1 className="font-serif text-3xl sm:text-4xl text-teal-950 font-normal">
            Lost Your Footing?
          </h1>
          <p className="text-xs text-slatecharcoal-600 leading-relaxed font-sans">
            The page you were searching for has moved or does not exist. Let us guide you back to comfortable ground.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-2">
          <Link
            href="/"
            className="p-3 rounded-xl border border-pebble-300 hover:border-teal-700 hover:bg-cream-100 flex items-center gap-2 text-xs font-semibold text-teal-950 transition-colors"
          >
            <Home className="w-4 h-4 text-seafoam-600" />
            <span>Homepage</span>
          </Link>
          <Link
            href="/services"
            className="p-3 rounded-xl border border-pebble-300 hover:border-teal-700 hover:bg-cream-100 flex items-center gap-2 text-xs font-semibold text-teal-950 transition-colors"
          >
            <Sparkles className="w-4 h-4 text-seafoam-600" />
            <span>Treatments</span>
          </Link>
        </div>

        <div className="pt-2 border-t border-pebble-200">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-teal-900 hover:text-teal-700 font-semibold"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
