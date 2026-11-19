import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Language } from '../../types';
import { FlagFI, FlagEN, FlagDE } from '../brand/Flags';
import { ChevronDown, Globe } from 'lucide-react';

interface LanguageOption {
  code: Language;
  name: string;
  nativeName: string;
  FlagComponent: React.FC<{ className?: string }>;
}

const LANGUAGES: LanguageOption[] = [
  { code: 'fi', name: 'Finnish', nativeName: 'Suomi', FlagComponent: FlagFI },
  { code: 'en', name: 'English', nativeName: 'English', FlagComponent: FlagEN },
  { code: 'de', name: 'German', nativeName: 'Deutsch', FlagComponent: FlagDE },
];

export const LanguageSelector: React.FC<{ variant?: 'desktop' | 'mobile'; dark?: boolean }> = ({
  variant = 'desktop',
  dark = false
}) => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentOption = LANGUAGES.find(l => l.code === language) || LANGUAGES[1];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (variant === 'mobile') {
    return (
      <div className="space-y-2">
        <div className="text-[10px] font-mono uppercase tracking-widest text-ahkun-muted flex items-center gap-1.5">
          <Globe className="w-3.5 h-3.5" />
          <span>Select Language / Valitse kieli / Sprache</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {LANGUAGES.map((lang) => {
            const isSelected = language === lang.code;
            const Flag = lang.FlagComponent;
            return (
              <button
                key={lang.code}
                type="button"
                onClick={() => setLanguage(lang.code)}
                className={`flex flex-col items-center justify-center p-2.5 rounded-xl border text-xs font-medium transition-all ${
                  isSelected
                    ? 'bg-ahkun-forest text-ahkun-white border-ahkun-forest shadow-sm'
                    : 'bg-ahkun-white text-ahkun-charcoal border-ahkun-border hover:bg-ahkun-bg'
                }`}
              >
                <Flag className="w-5 h-3.5 mb-1" />
                <span className="font-semibold text-[11px]">{lang.nativeName}</span>
                <span className="text-[9px] uppercase font-mono opacity-80">{lang.code}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  const Flag = currentOption.FlagComponent;

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className={`inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full border text-xs font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-ahkun-pine ${
          dark
            ? 'bg-black/20 hover:bg-black/30 text-ahkun-white border-white/20'
            : 'bg-ahkun-white hover:bg-ahkun-bg text-ahkun-charcoal border-ahkun-border shadow-sm'
        }`}
      >
        <Flag className="w-4 h-2.5" />
        <span className="font-semibold">{currentOption.nativeName}</span>
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-1.5 w-44 rounded-xl bg-ahkun-white text-ahkun-charcoal border border-ahkun-border shadow-xl p-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
          <div className="px-2 py-1 text-[9px] font-mono uppercase tracking-wider text-ahkun-muted border-b border-ahkun-border mb-1">
            Choose Language
          </div>
          {LANGUAGES.map((lang) => {
            const isSelected = language === lang.code;
            const ItemFlag = lang.FlagComponent;
            return (
              <button
                key={lang.code}
                type="button"
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-xs transition-colors ${
                  isSelected
                    ? 'bg-ahkun-bg text-ahkun-forest font-semibold'
                    : 'hover:bg-ahkun-bg/70 text-ahkun-charcoal'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <ItemFlag className="w-4 h-3" />
                  <span>{lang.nativeName}</span>
                </div>
                <span className="font-mono text-[10px] uppercase text-ahkun-muted">
                  {lang.code}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
