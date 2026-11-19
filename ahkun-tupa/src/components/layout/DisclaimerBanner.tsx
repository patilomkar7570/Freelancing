import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { BUSINESS_CONFIG } from '../../data/contentConfig';
import { Info, X } from 'lucide-react';

export const DisclaimerBanner: React.FC = () => {
  const [dismissed, setDismissed] = useState(false);
  const { language } = useLanguage();

  if (dismissed) return null;

  const labels = {
    en: 'Independent Concept Preview:',
    fi: 'Itsenäinen Verkkosivustokonsepti:',
    de: 'Unabhängiges Konzept-Vorschau:',
  };

  return (
    <div className="bg-ahkun-forest text-ahkun-white text-xs border-b border-[#355243] py-2 px-4 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Info className="w-4 h-4 text-ahkun-river shrink-0" aria-hidden="true" />
          <p className="leading-snug">
            <span className="font-semibold text-ahkun-river uppercase tracking-wider text-[10px] mr-1">
              {labels[language]}
            </span>
            {BUSINESS_CONFIG.conceptNotice.bannerText[language]}
          </p>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="text-ahkun-river hover:text-ahkun-white transition-colors p-1 rounded focus:outline-none focus-visible:ring-1 focus-visible:ring-ahkun-river"
          aria-label="Dismiss banner"
          title="Dismiss banner"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
