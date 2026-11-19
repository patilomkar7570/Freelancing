'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShieldAlert, Info, X, ChevronRight } from 'lucide-react';

export default function ConceptNoticeBar() {
  const [isMinimized, setIsMinimized] = useState(false);

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 z-50 animate-fade-in">
        <button
          onClick={() => setIsMinimized(false)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest-900/90 text-ivory-100 border border-stone-300/40 text-xs shadow-elevated backdrop-blur-md hover:bg-forest-850 transition-colors"
          title="Click to view portfolio demonstration notice"
        >
          <Info className="w-3.5 h-3.5 text-sage-300" />
          <span className="font-mono text-[10px] tracking-wider uppercase">Portfolio Concept Notice</span>
        </button>
      </div>
    );
  }

  return (
    <aside
      aria-label="Demonstration notice"
      className="bg-forest-950 text-ivory-100 border-b border-forest-800/80 px-4 py-2 relative z-50 text-[11px] leading-relaxed transition-all"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4">
        <div className="flex items-center gap-2.5">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-sm bg-sage-500/20 text-sage-300 font-mono text-[9.5px] uppercase tracking-wider font-medium shrink-0">
            <ShieldAlert className="w-3 h-3 text-sage-400" />
            NOVA Portfolio Demonstration
          </span>
          <p className="text-stone-300 font-sans">
            <strong className="text-ivory font-medium">Independent fictional healthcare website concept</strong> by <span className="underline decoration-sage-500/50 underline-offset-2">NOVA Digital Studio</span>. Not affiliated with or endorsed by any existing healthcare provider. Educational content is for design demonstration only.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0 self-end sm:self-auto text-[10px] font-mono">
          <Link
            href="/terms"
            className="text-sage-300 hover:text-ivory inline-flex items-center gap-0.5 transition-colors underline underline-offset-2"
          >
            Review Terms &amp; Scope <ChevronRight className="w-2.5 h-2.5" />
          </Link>
          <button
            onClick={() => setIsMinimized(true)}
            className="text-stone-400 hover:text-ivory p-0.5 rounded hover:bg-forest-800/60 transition-colors"
            aria-label="Minimize demonstration notice"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
}
