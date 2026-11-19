import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'horizontal' | 'compact' | 'symbol';
  theme?: 'light' | 'dark' | 'monochrome';
  className?: string;
  withLink?: boolean;
  langPrefix?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'horizontal',
  theme = 'light',
  className = '',
  withLink = true,
  langPrefix = 'en'
}) => {
  // Theme color mappings
  const starFill = theme === 'dark' ? '#FDFCF8' : (theme === 'monochrome' ? 'currentColor' : '#263E32');
  const riverStroke = theme === 'dark' ? '#8DA8A9' : (theme === 'monochrome' ? 'currentColor' : '#40594A');
  const boatFill = theme === 'dark' ? '#B58B69' : (theme === 'monochrome' ? 'currentColor' : '#B58B69');
  const ridgeStroke = theme === 'dark' ? '#FDFCF8' : (theme === 'monochrome' ? 'currentColor' : '#263E32');
  const primaryText = theme === 'dark' ? 'text-[#FDFCF8]' : (theme === 'monochrome' ? 'text-current' : 'text-[#263E32]');
  const secondaryText = theme === 'dark' ? 'text-[#8DA8A9]' : (theme === 'monochrome' ? 'text-current opacity-80' : 'text-[#77786F]');

  const SymbolSVG = (
    <svg
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-10 h-10 shrink-0 transition-transform duration-300 group-hover:scale-105"
      aria-label="Ahkun Tupa symbol"
    >
      {/* Background delicate dotted ring */}
      <circle cx="22" cy="22" r="21" stroke={theme === 'dark' ? '#40594A' : '#DEDCD2'} strokeWidth="1" strokeDasharray="2 2" className="opacity-60" />

      {/* Northern Star / Golden Lemmenjoki flake at top apex */}
      <path
        d="M22 6L23.3 10.7L28 12L23.3 13.3L22 18L20.7 13.3L16 12L20.7 10.7L22 6Z"
        fill={starFill}
      />

      {/* Mountain fell ridge / Joenkielinen & traditional timber roof */}
      <path
        d="M10 24L22 13.5L34 24"
        stroke={ridgeStroke}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Traditional Wooden Riverboat (Nuoli-jokivene) silhouette */}
      <path
        d="M12 28.5C17 31 27 31 32 28.5L30.5 26C25.5 27.2 18.5 27.2 13.5 26L12 28.5Z"
        fill={boatFill}
      />

      {/* Flowing Lemmenjoki river currents */}
      <path
        d="M8 32C13.5 32 16.5 28.5 22 28.5C27.5 28.5 30.5 32 36 32"
        stroke={riverStroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M11 36.5C15 36.5 18 34 22 34C26 34 29 36.5 33 36.5"
        stroke={riverStroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeOpacity={0.7}
      />
    </svg>
  );

  const content = (
    <div className={`group inline-flex items-center gap-3 select-none ${className}`}>
      {SymbolSVG}

      {variant !== 'symbol' && (
        <div className="flex flex-col justify-center text-left">
          <span
            className={`font-mono text-[9px] md:text-[10px] tracking-[0.28em] uppercase font-medium ${secondaryText} transition-colors`}
          >
            Lemmenjoki · Est. 1955
          </span>
          <span
            className={`font-serif tracking-[0.12em] font-medium leading-none text-xl md:text-2xl ${primaryText} transition-colors`}
          >
            AHKUN TUPA
          </span>
          {variant === 'horizontal' && (
            <span className={`text-[9px] tracking-[0.18em] uppercase ${secondaryText} opacity-90 hidden sm:inline-block font-sans mt-0.5`}>
              Holiday Village & Riverboat Excursions
            </span>
          )}
        </div>
      )}
    </div>
  );

  if (withLink) {
    return (
      <Link to={`/${langPrefix}`} className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-ahkun-pine rounded-md">
        {content}
      </Link>
    );
  }

  return content;
};
