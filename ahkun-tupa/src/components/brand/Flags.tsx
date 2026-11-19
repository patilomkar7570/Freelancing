import React from 'react';

export const FlagFI: React.FC<{ className?: string }> = ({ className = 'w-4 h-3' }) => (
  <svg viewBox="0 0 18 11" className={`${className} rounded-[2px] shadow-sm shrink-0`} aria-label="Suomi flag">
    <rect width="18" height="11" fill="#FFFFFF"/>
    <rect x="5" width="3" height="11" fill="#003580"/>
    <rect y="4" width="18" height="3" fill="#003580"/>
  </svg>
);

export const FlagEN: React.FC<{ className?: string }> = ({ className = 'w-4 h-3' }) => (
  <svg viewBox="0 0 60 30" className={`${className} rounded-[2px] shadow-sm shrink-0`} aria-label="English flag">
    <clipPath id="s">
      <path d="M0,0 v30 h60 v-30 z"/>
    </clipPath>
    <clipPath id="t">
      <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>
    </clipPath>
    <g clipPath="url(#s)">
      <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
      <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
    </g>
  </svg>
);

export const FlagDE: React.FC<{ className?: string }> = ({ className = 'w-4 h-3' }) => (
  <svg viewBox="0 0 5 3" className={`${className} rounded-[2px] shadow-sm shrink-0`} aria-label="Deutsch flag">
    <rect width="5" height="1" y="0" fill="#000000"/>
    <rect width="5" height="1" y="1" fill="#DD0000"/>
    <rect width="5" height="1" y="2" fill="#FFCE00"/>
  </svg>
);
