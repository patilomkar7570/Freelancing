import React from 'react';
import Link from 'next/link';

interface LogoProps {
  variant?: 'primary' | 'compact' | 'symbol';
  theme?: 'light' | 'dark';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  withLink?: boolean;
}

export function SoleSymbol({
  theme = 'light',
  size = 'md',
  className = '',
}: {
  theme?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}) {
  const sizeMap = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  };

  const primaryStroke = theme === 'dark' ? '#FBF9F5' : '#0A3B42';
  const secondaryStroke = theme === 'dark' ? '#65B8A6' : '#3B8A7A';

  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${sizeMap[size]} ${className}`}
      aria-label="Sole Wellbeing Logo Mark"
    >
      <circle cx="32" cy="32" r="28" fill={theme === 'dark' ? '#0A3B42' : '#F0F8F6'} />
      {/* Supportive Arch */}
      <path
        d="M 17 44 C 23 42 27 30 37 28 C 43 27 47 32 49 38"
        stroke={secondaryStroke}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Upper Foot Contour */}
      <path
        d="M 21 44 C 26 36 31 22 40 19 C 46 17 49 22 48 28"
        stroke={primaryStroke}
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      {/* Restorative Apex Node */}
      <circle cx="40" cy="19" r="3.5" fill={secondaryStroke} />
      <circle cx="40" cy="19" r="1.5" fill={theme === 'dark' ? '#0A3B42' : '#FFFFFF'} />
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
  const textColor = theme === 'dark' ? 'text-cream-100' : 'text-teal-900';
  const subtextColor = theme === 'dark' ? 'text-seafoam-300' : 'text-teal-700';

  const content = (
    <div className={`inline-flex items-center gap-3 group select-none ${className}`}>
      <SoleSymbol theme={theme} size={size} />

      {variant !== 'symbol' && (
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1.5">
            <span
              className={`font-serif tracking-tight font-medium text-lg leading-none ${textColor}`}
            >
              SOLE WELLBEING
            </span>
          </div>
          {variant === 'primary' && (
            <span
              className={`text-[9px] font-mono tracking-widest uppercase mt-0.5 font-medium ${subtextColor}`}
            >
              Clinical Foot Health &bull; Nurse Led
            </span>
          )}
        </div>
      )}
    </div>
  );

  if (withLink) {
    return (
      <Link href="/" className="inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-seafoam-400 rounded">
        {content}
      </Link>
    );
  }

  return content;
}
