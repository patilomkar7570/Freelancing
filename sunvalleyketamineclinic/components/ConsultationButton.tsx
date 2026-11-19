'use client';

import React, { useState } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import ConsultationModal from './ConsultationModal';

interface ConsultationButtonProps {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'dark' | 'ghost';
  className?: string;
  showIcon?: boolean;
}

export default function ConsultationButton({
  children,
  variant = 'primary',
  className = '',
  showIcon = true,
}: ConsultationButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded text-xs font-mono uppercase tracking-wider transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary:
      'bg-forest-800 text-ivory hover:bg-forest-700 shadow-subtle hover:shadow-card focus:ring-forest-800 px-5 py-3',
    secondary:
      'bg-sage-200 text-forest-900 hover:bg-sage-300 focus:ring-sage-400 px-5 py-3 font-medium',
    outline:
      'border border-forest-800 text-forest-900 hover:bg-forest-800 hover:text-ivory focus:ring-forest-800 px-5 py-3',
    dark:
      'bg-ivory-100 text-forest-900 hover:bg-white shadow-card focus:ring-ivory-200 px-5 py-3 font-medium',
    ghost:
      'text-forest-900 hover:bg-stone-200/50 px-4 py-2.5',
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {showIcon && <Calendar className="w-3.5 h-3.5 opacity-80" />}
        <span>{children || 'Request Consultation Assessment'}</span>
        {variant === 'primary' && <ArrowRight className="w-3 h-3 ml-0.5 opacity-70" />}
      </button>

      <ConsultationModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
