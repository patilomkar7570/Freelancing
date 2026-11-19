import React, { useState } from 'react';
import { Info, X } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../data/contentConfig';

export const DisclaimerBanner: React.FC = () => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="bg-nordic-forest text-nordic-snow text-xs border-b border-[#355243] py-2 px-4 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Info className="w-4 h-4 text-nordic-lake shrink-0" aria-hidden="true" />
          <p className="leading-snug">
            <span className="font-semibold text-nordic-lake uppercase tracking-wider text-[10px] mr-1">
              Demonstration Concept:
            </span>
            {BUSINESS_CONFIG.conceptNotice.bannerText}
          </p>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="text-nordic-lake hover:text-nordic-snow transition-colors p-1 rounded focus:outline-none focus-visible:ring-1 focus-visible:ring-nordic-lake"
          aria-label="Dismiss banner"
          title="Dismiss banner"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
