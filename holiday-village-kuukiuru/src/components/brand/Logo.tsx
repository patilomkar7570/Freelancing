import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'horizontal' | 'compact' | 'symbol';
  theme?: 'light' | 'dark' | 'monochrome';
  className?: string;
  withLink?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'horizontal',
  theme = 'light',
  className = '',
  withLink = true
}) => {
  const starFill = theme === 'dark' ? '#FCFCF9' : (theme === 'monochrome' ? 'currentColor' : '#263D32');
  const riverStroke = theme === 'dark' ? '#9EB8B5' : (theme === 'monochrome' ? 'currentColor' : '#405B48');
  const cabinStroke = theme === 'dark' ? '#FCFCF9' : (theme === 'monochrome' ? 'currentColor' : '#263D32');
  const primaryText = theme === 'dark' ? 'text-[#FCFCF9]' : (theme === 'monochrome' ? 'text-current' : 'text-[#263D32]');
  const secondaryText = theme === 'dark' ? 'text-[#9EB8B5]' : (theme === 'monochrome' ? 'text-current opacity-80' : 'text-[#77766D]');

  const SymbolSVG = (
    <svg
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-9 h-9 md:w-10 md:h-10 shrink-0 transition-transform duration-300 group-hover:scale-105"
      aria-label="Kuura Riverside Resort symbol"
    >
      <circle cx="22" cy="22" r="21" stroke={theme === 'dark' ? '#405B48' : '#DDDCD2'} strokeWidth="1" strokeDasharray="2 2" className="opacity-60" />
      
      {/* Pohjantähti (The Northern Star) radiating at top apex */}
      <path
        d="M22 6L23.4 11.2L28 12L23.4 12.8L22 18L20.6 12.8L16 12L20.6 11.2L22 6Z"
        fill={starFill}
      />
      
      {/* Minimalist Nordic Timber Gable / Mountain ridge */}
      <path
        d="M11 25L22 14L33 25"
        stroke={cabinStroke}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Flowing Kemijoki River ribbons */}
      <path
        d="M9 31C13.5 31 16.5 27.5 22 27.5C27.5 27.5 30.5 31 35 31"
        stroke={riverStroke}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M12 36C15.5 36 18 33.5 22 33.5C26 33.5 28.5 36 32 36"
        stroke={riverStroke}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeOpacity={0.7}
      />
    </svg>
  );

  const content = (
    <div className={`group inline-flex items-center gap-3 select-none ${className}`}>
      {SymbolSVG}

      {variant !== 'symbol' && (
        <div className="flex flex-col justify-center">
          <span
            className={`font-mono text-[9px] md:text-[10px] tracking-[0.28em] uppercase font-medium ${secondaryText} transition-colors`}
          >
            Riverside Resort
          </span>
          <span
            className={`font-serif tracking-[0.14em] font-medium leading-none text-xl md:text-2xl ${primaryText} transition-colors`}
          >
            KUURA
          </span>
          {variant === 'horizontal' && (
            <span className={`text-[9px] tracking-[0.18em] uppercase ${secondaryText} opacity-90 hidden sm:inline-block font-sans mt-0.5`}>
              Kemijoki · Lapland · Retreat
            </span>
          )}
        </div>
      )}
    </div>
  );

  if (withLink) {
    return (
      <Link to="/" className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-nordic-pine rounded-md">
        {content}
      </Link>
    );
  }

  return content;
};
