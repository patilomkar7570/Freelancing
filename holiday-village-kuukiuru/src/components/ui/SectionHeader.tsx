import React from 'react';

interface SectionHeaderProps {
  tag?: string;
  title: string;
  italicWord?: string;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  tag,
  title,
  italicWord,
  description,
  align = 'left',
  dark = false,
  className = ''
}) => {
  const isCenter = align === 'center';
  
  return (
    <div className={`space-y-3 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {tag && (
        <div className={`inline-block font-mono text-[11px] tracking-[0.22em] uppercase font-medium ${
          dark ? 'text-nordic-lake' : 'text-nordic-cabin'
        }`}>
          {tag}
        </div>
      )}
      
      <h2 className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-[1.15] ${
        dark ? 'text-nordic-snow' : 'text-nordic-charcoal'
      }`}>
        {title}
        {italicWord && (
          <span className="italic font-serif ml-2 font-normal text-nordic-pine">
            {italicWord}
          </span>
        )}
      </h2>

      {description && (
        <p className={`text-base sm:text-lg leading-relaxed ${
          dark ? 'text-nordic-snow/80' : 'text-nordic-muted'
        }`}>
          {description}
        </p>
      )}
    </div>
  );
};
