import React from "react";

export type LogoVariant =
  | "horizontal" // Monogram + AUREA + Specialist Orthodontics
  | "stacked" // Monogram on top, text centered below
  | "monogram" // Standalone AO geometric symbol
  | "monochrome-dark" // All charcoal/black
  | "monochrome-light" // All white
  | "on-dark" // Optimized for deep burgundy or charcoal backgrounds
  | "favicon"; // 32x32 / 48x48 icon

interface LogoProps {
  variant?: LogoVariant;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showTagline?: boolean;
}

/**
 * AUREA Orthodontics - Original AO Monogram & Logo System
 * Combines an architectural parabolic dental arch ('A') with a continuous
 * harmonic circle ('O') forming an interlocking golden ratio ligature.
 */
export const MonogramSymbol: React.FC<{
  className?: string;
  primaryColor?: string;
  accentColor?: string;
  size?: number;
}> = ({
  className = "",
  primaryColor = "#702D3B",
  accentColor = "#C59B6D",
  size = 40,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="AUREA Orthodontics Monogram"
    >
      <defs>
        <linearGradient id="aoBurgundyGrad" x1="15" y1="20" x2="85" y2="85" gradientUnits="userSpaceOnUse">
          <stop stopColor={primaryColor} />
          <stop offset="1" stopColor={primaryColor === "#FFFFFF" ? "#F2E8E9" : "#421D29"} />
        </linearGradient>
        <linearGradient id="aoAccentGrad" x1="50" y1="20" x2="85" y2="80" gradientUnits="userSpaceOnUse">
          <stop stopColor={accentColor} />
          <stop offset="1" stopColor={accentColor === "#FFFFFF" ? "#FFFFFF" : "#A67A4E"} />
        </linearGradient>
      </defs>

      {/* Subtle outer proportional guide ring (soft architectural harmony) */}
      <circle
        cx="50"
        cy="50"
        r="46"
        stroke={primaryColor}
        strokeWidth="1.2"
        strokeOpacity="0.18"
        strokeDasharray="2 3"
      />

      {/* The 'O' Harmonic Circle (Right-interlocked) */}
      <ellipse
        cx="63"
        cy="52"
        rx="24"
        ry="27"
        stroke={accentColor}
        strokeWidth="5"
        strokeLinecap="round"
        transform="rotate(-5 63 52)"
      />

      {/* The 'A' Parabolic Dental Arch (Apex at top center-left, elegant legs) */}
      <path
        d="M26 82 L43 25 C44.5 20 49.5 20 51 25 L68 82"
        stroke="url(#aoBurgundyGrad)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Smile Arc / Crossbar of 'A' (A subtle upward curvature symbolizing smile arc harmony) */}
      <path
        d="M33 63 Q47 70 61 63"
        stroke={accentColor}
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Small precision vertex dot (representing focal alignment & orthodontic accuracy) */}
      <circle cx="47" cy="22" r="2.5" fill={accentColor} />
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({
  variant = "horizontal",
  className = "",
  size = "md",
  showTagline = true,
}) => {
  const isDark = variant === "on-dark" || variant === "monochrome-light";
  const isMonochromeDark = variant === "monochrome-dark";
  const isMonochromeLight = variant === "monochrome-light";

  const primaryColor = isMonochromeLight
    ? "#FFFFFF"
    : isDark
    ? "#FFFFFF"
    : isMonochromeDark
    ? "#252326"
    : "#702D3B";

  const accentColor = isMonochromeLight
    ? "#FFFFFF"
    : isMonochromeDark
    ? "#252326"
    : isDark
    ? "#E5D0B8"
    : "#C59B6D";

  const symbolSizes = {
    sm: 32,
    md: 42,
    lg: 54,
    xl: 72,
  };

  const currentSymbolSize = symbolSizes[size];

  if (variant === "monogram" || variant === "favicon") {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <MonogramSymbol
          size={variant === "favicon" ? 32 : currentSymbolSize}
          primaryColor={primaryColor}
          accentColor={accentColor}
        />
      </div>
    );
  }

  if (variant === "stacked") {
    return (
      <div className={`inline-flex flex-col items-center text-center ${className}`}>
        <MonogramSymbol
          size={currentSymbolSize + 8}
          primaryColor={primaryColor}
          accentColor={accentColor}
        />
        <div className="mt-3">
          <span
            className={`font-serif text-2xl lg:text-3xl tracking-[0.22em] font-normal block leading-tight ${
              isDark ? "text-white" : "text-charcoal"
            }`}
          >
            AUREA
          </span>
          {showTagline && (
            <span
              className={`text-[9px] uppercase tracking-[0.3em] font-medium block mt-1 ${
                isDark ? "text-ivory-300" : "text-mutedText"
              }`}
            >
              Specialist Orthodontics
            </span>
          )}
        </div>
      </div>
    );
  }

  // Primary horizontal layout
  return (
    <div className={`inline-flex items-center gap-3.5 group ${className}`}>
      <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
        <MonogramSymbol
          size={currentSymbolSize}
          primaryColor={primaryColor}
          accentColor={accentColor}
        />
      </div>
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-baseline gap-1.5">
          <span
            className={`font-serif text-2xl lg:text-[26px] tracking-[0.2em] font-normal transition-colors ${
              isDark ? "text-white" : "text-charcoal"
            }`}
          >
            AUREA
          </span>
        </div>
        {showTagline && (
          <span
            className={`text-[8.5px] uppercase tracking-[0.28em] font-medium mt-1 ${
              isDark ? "text-ivory-300" : "text-mutedText"
            }`}
          >
            Specialist Orthodontics
          </span>
        )}
      </div>
    </div>
  );
};
