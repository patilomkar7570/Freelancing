import React from 'react';
import { ShieldCheck, HelpCircle } from 'lucide-react';

interface VerificationBadgeProps {
  status?: 'verified_from_official_records' | 'requires_property_reconfirmation';
  customText?: string;
  className?: string;
}

export const VerificationBadge: React.FC<VerificationBadgeProps> = ({
  status = 'verified_from_official_records',
  customText,
  className = ''
}) => {
  if (status === 'verified_from_official_records') {
    return (
      <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider uppercase bg-[#E2EBE5] text-[#263D32] border border-[#C5D8CC] ${className}`}>
        <ShieldCheck className="w-3 h-3 text-nordic-pine" />
        <span>{customText || 'Official Spec'}</span>
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider uppercase bg-[#F3EDE2] text-[#8C5D2C] border border-[#E5D7BF] ${className}`}>
      <HelpCircle className="w-3 h-3 text-[#A4513B]" />
      <span>{customText || 'Requires Confirmation'}</span>
    </span>
  );
};
