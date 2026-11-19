import React from 'react';
import Link from 'next/link';

interface LogoProps {
  variant?: 'primary' | 'compact' | 'symbol';
  theme?: 'light' | 'dark' | 'monochrome';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  withLink?: boolean;
}

export function ValenceSymbol({
  theme = 'light',
  size = 'md',
  className = '',
}: {
  theme?: 'light' | 'dark' | 'monochrome';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}) {
  const sizeMap = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const primaryStroke =
    theme === 'dark' ? '#F7F5F0' : theme === 'monochrome' ? '#111111' : '#263D35';
  const secondaryStroke =
    theme === 'dark' ? '#A7B5A4' : theme === 'monochrome' ? '#444444' : '#6F806C';
  const nodeFill =
    theme === 'dark' ? '#A7B5A4' : theme === 'monochrome' ? '#111111' : '#263D35';
  const ringStroke =
    theme === 'dark'
      ? 'rgba(167, 181, 164, 0.4)'
      : theme === 'monochrome'
      ? 'rgba(0, 0, 0, 0.2)'
      : 'rgba(38, 61, 53, 0.2)';

  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${sizeMap[size]} transition-transform duration-300 ${className}`}
      aria-label="VALENCE Clinical Logo Symbol"
    >
      {/* Outer subtle containment ring */}
      <circle
        cx="32"
        cy="32"
        r="28"
        stroke={ringStroke}
        strokeWidth="1.2"
        strokeDasharray="2 3"
      />
      {/* Outer balance arc - representing equilibrium & clinical precision */}
      <path
        d="M 16 18 C 21 28 26 40 32 46 C 38 40 43 28 48 18"
        stroke={primaryStroke}
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Inner harmony arc */}
      <path
        d="M 22 19 C 26 27 29 35 32 39 C 35 35 38 27 42 19"
        stroke={secondaryStroke}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Central harmonic node / equilibrium focal point */}
      <circle cx="32" cy="27" r="3.2" fill={nodeFill} />
      <circle
        cx="32"
        cy="27"
        r="1.2"
        fill={theme === 'dark' ? '#14231E' : '#F7F5F0'}
      />
      {/* Base grounding line */}
      <path
        d="M 28 51 L 36 51"
        stroke={secondaryStroke}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Logo({
  variant = 'primary',
  theme = 'light',
  className = '',
  size = 'md',
  withLink = true,
}: LogoProps) {
  const isDark = theme === 'dark';
  const isMono = theme === 'monochrome';

  const textColor = isDark
    ? 'text-[#F7F5F0]'
    : isMono
    ? 'text-black'
    : 'text-[#263D35]';

  const subtextColor = isDark
    ? 'text-[#A7B5A4]'
    : isMono
    ? 'text-neutral-500'
    : 'text-[#6F806C]';

  const content = (
    <div className={`inline-flex items-center gap-3 group select-none ${className}`}>
      <ValenceSymbol theme={theme} size={size} />

      {variant !== 'symbol' && (
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1.5">
            <span
              className={`font-serif tracking-[0.14em] font-medium text-lg leading-none ${textColor} group-hover:opacity-90 transition-opacity`}
            >
              VALENCE
            </span>
            {variant === 'primary' && (
              <span
                className={`text-[9px] font-mono tracking-[0.2em] uppercase font-medium ${subtextColor} pl-1 border-l border-current/25`}
              >
                CLINICAL
              </span>
            )}
          </div>
          {variant === 'primary' && (
            <span
              className={`text-[8.5px] font-mono tracking-[0.16em] uppercase mt-1 ${subtextColor}`}
            >
              Specialist Ketamine Care
            </span>
          )}
        </div>
      )}
    </div>
  );

  if (withLink) {
    return (
      <Link href="/" className="inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 rounded-sm">
        {content}
      </Link>
    );
  }

  return content;
}
