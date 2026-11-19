"use client";

import React, { useState } from "react";
import { X, Sparkles, Check, Copy, Palette, Type, ShieldCheck } from "lucide-react";
import { Logo, MonogramSymbol } from "./Logo";

interface BrandSpecModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrandSpecModal: React.FC<BrandSpecModalProps> = ({ isOpen, onClose }) => {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"logo" | "colors" | "typography" | "manifesto">("logo");

  if (!isOpen) return null;

  const colorSwatches = [
    { name: "Primary Burgundy", hex: "#702D3B", role: "Primary brand mark, primary CTAs, key headlines", text: "#FFFFFF" },
    { name: "Deep Burgundy", hex: "#421D29", role: "Accent surfaces, editorial hero banners, depth elements", text: "#FFFFFF" },
    { name: "Warm Ivory", hex: "#F8F6F2", role: "Primary page canvas, calm clinical breathing space", text: "#252326" },
    { name: "Soft Blush", hex: "#F2E8E9", role: "Subtle card highlights, badges, delicate borders", text: "#702D3B" },
    { name: "Charcoal Slate", hex: "#252326", role: "High-contrast reading typography, editorial titles", text: "#FFFFFF" },
    { name: "Muted Text", hex: "#777177", role: "Secondary metadata, clinical descriptions, captions", text: "#FFFFFF" },
    { name: "Soft Border", hex: "#E8E1DF", role: "Delicate architectural grid lines and dividers", text: "#252326" },
    { name: "Golden Sand Accent", hex: "#C59B6D", role: "Precision vertex dot, smile arc curve, highlights", text: "#FFFFFF" },
  ];

  const handleCopy = (hex: string) => {
    navigator.clipboard?.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-charcoal/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-elevated border border-borderSoft overflow-hidden my-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-burgundy-800 to-burgundy-600 text-white px-6 py-6 sm:px-8 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] tracking-wider uppercase font-semibold bg-white/15 text-ivory-100 border border-white/20">
                Brand System Specification
              </span>
              <span className="text-xs text-ivory-300">NOVA Digital Studio Portfolio Concept</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl tracking-wide mt-2">
              AUREA Orthodontics Identity
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Close brand specification modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-borderSoft bg-ivory-100 px-6 sm:px-8">
          <button
            onClick={() => setActiveTab("logo")}
            className={`py-3.5 px-4 text-xs sm:text-sm font-medium border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === "logo"
                ? "border-burgundy text-burgundy font-semibold"
                : "border-transparent text-mutedText hover:text-charcoal"
            }`}
          >
            <Sparkles className="w-4 h-4" />
            Logo System (7 Variants)
          </button>
          <button
            onClick={() => setActiveTab("colors")}
            className={`py-3.5 px-4 text-xs sm:text-sm font-medium border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === "colors"
                ? "border-burgundy text-burgundy font-semibold"
                : "border-transparent text-mutedText hover:text-charcoal"
            }`}
          >
            <Palette className="w-4 h-4" />
            Color Palette & Tokens
          </button>
          <button
            onClick={() => setActiveTab("typography")}
            className={`py-3.5 px-4 text-xs sm:text-sm font-medium border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === "typography"
                ? "border-burgundy text-burgundy font-semibold"
                : "border-transparent text-mutedText hover:text-charcoal"
            }`}
          >
            <Type className="w-4 h-4" />
            Typography Hierarchy
          </button>
          <button
            onClick={() => setActiveTab("manifesto")}
            className={`py-3.5 px-4 text-xs sm:text-sm font-medium border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === "manifesto"
                ? "border-burgundy text-burgundy font-semibold"
                : "border-transparent text-mutedText hover:text-charcoal"
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            Creative Rationale
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto">
          {activeTab === "logo" && (
            <div className="space-y-8">
              <div>
                <h3 className="font-heading text-lg font-bold text-charcoal">
                  Original Initials-Based Monogram & Brand Logo System
                </h3>
                <p className="text-sm text-mutedText mt-1">
                  The AUREA identity is built from an original &ldquo;AO&rdquo; ligature symbol. The architectural parabolic arch (&ldquo;A&rdquo;) evokes both classical structure and the natural human dental arch, while the interlocked golden circle (&ldquo;O&rdquo;) represents cyclical care and orthodontic harmony. An upward subtle curve forms the crossbar, symbolizing the golden smile arc.
                </p>
              </div>

              {/* Grid of 7 Logo Variants */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* 1. Primary Horizontal (Light) */}
                <div className="p-6 rounded-2xl bg-ivory-100 border border-borderSoft flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-charcoal">
                      1. Primary Horizontal (Light)
                    </span>
                    <span className="text-[10px] text-mutedText bg-white px-2 py-0.5 rounded border border-borderSoft">
                      Default Desktop Navigation
                    </span>
                  </div>
                  <div className="py-4 flex items-center justify-center">
                    <Logo variant="horizontal" size="lg" />
                  </div>
                  <p className="text-xs text-mutedText mt-3">
                    Full brand wordmark with letterspaced serif title and tracked sans subline.
                  </p>
                </div>

                {/* 2. Compact Stacked */}
                <div className="p-6 rounded-2xl bg-ivory-100 border border-borderSoft flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-charcoal">
                      2. Compact Stacked
                    </span>
                    <span className="text-[10px] text-mutedText bg-white px-2 py-0.5 rounded border border-borderSoft">
                      Stationery & Packaging
                    </span>
                  </div>
                  <div className="py-3 flex items-center justify-center">
                    <Logo variant="stacked" size="md" />
                  </div>
                  <p className="text-xs text-mutedText mt-3">
                    Centered vertical lockup for patient appointment cards and clinic merchandise.
                  </p>
                </div>

                {/* 3. Standalone Monogram */}
                <div className="p-6 rounded-2xl bg-ivory-100 border border-borderSoft flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-charcoal">
                      3. Standalone AO Monogram
                    </span>
                    <span className="text-[10px] text-mutedText bg-white px-2 py-0.5 rounded border border-borderSoft">
                      Social & Embossing
                    </span>
                  </div>
                  <div className="py-4 flex items-center justify-center">
                    <Logo variant="monogram" size="xl" />
                  </div>
                  <p className="text-xs text-mutedText mt-3">
                    Geometric mark for social avatars, app icons, wax seals, and lab packaging.
                  </p>
                </div>

                {/* 4. Dark Background Version */}
                <div className="p-6 rounded-2xl bg-burgundy-800 border border-burgundy-700 flex flex-col justify-between text-white">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-ivory-200">
                      4. Dark Background (Deep Burgundy)
                    </span>
                    <span className="text-[10px] text-ivory-300 bg-white/10 px-2 py-0.5 rounded border border-white/20">
                      Footer & Hero
                    </span>
                  </div>
                  <div className="py-4 flex items-center justify-center">
                    <Logo variant="on-dark" size="lg" />
                  </div>
                  <p className="text-xs text-ivory-300 mt-3">
                    Crisp white letterforms and warm gold accent tuned for dark burgundy backgrounds.
                  </p>
                </div>

                {/* 5. Monochrome Charcoal */}
                <div className="p-6 rounded-2xl bg-white border border-borderSoft flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-charcoal">
                      5. Monochrome (Charcoal)
                    </span>
                    <span className="text-[10px] text-mutedText bg-ivory-100 px-2 py-0.5 rounded border border-borderSoft">
                      Single-Color Print
                    </span>
                  </div>
                  <div className="py-4 flex items-center justify-center">
                    <Logo variant="monochrome-dark" size="lg" />
                  </div>
                  <p className="text-xs text-mutedText mt-3">
                    Single-pigment black/charcoal for laser engraving, surgical charts, and receipts.
                  </p>
                </div>

                {/* 6. Monochrome Light */}
                <div className="p-6 rounded-2xl bg-charcoal-dark border border-charcoal-light flex flex-col justify-between text-white">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-ivory-200">
                      6. Monochrome (White on Charcoal)
                    </span>
                    <span className="text-[10px] text-ivory-300 bg-white/10 px-2 py-0.5 rounded border border-white/20">
                      Reverse Single-Color
                    </span>
                  </div>
                  <div className="py-4 flex items-center justify-center">
                    <Logo variant="monochrome-light" size="lg" />
                  </div>
                  <p className="text-xs text-ivory-300 mt-3">
                    100% white vector for signage backlighting and architectural glass frosting.
                  </p>
                </div>

                {/* 7. Favicon */}
                <div className="p-6 rounded-2xl bg-ivory-100 border border-borderSoft flex flex-col justify-between md:col-span-2">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-charcoal">
                      7. Favicon (Micro-Scalability Test)
                    </span>
                    <span className="text-[10px] text-mutedText bg-white px-2 py-0.5 rounded border border-borderSoft">
                      16px / 32px / 48px Viewport
                    </span>
                  </div>
                  <div className="py-4 flex items-center justify-center gap-8">
                    <div className="flex flex-col items-center gap-1.5">
                      <div className="w-8 h-8 rounded-lg bg-burgundy-800 p-1 flex items-center justify-center shadow">
                        <MonogramSymbol size={22} primaryColor="#FFFFFF" accentColor="#E5D0B8" />
                      </div>
                      <span className="text-[10px] text-mutedText">32x32 Tab</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5">
                      <div className="w-12 h-12 rounded-xl bg-ivory-50 p-2 flex items-center justify-center border border-borderSoft shadow-soft">
                        <MonogramSymbol size={32} primaryColor="#702D3B" accentColor="#C59B6D" />
                      </div>
                      <span className="text-[10px] text-mutedText">48x48 Bookmark</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5">
                      <div className="w-16 h-16 rounded-2xl bg-white p-3 flex items-center justify-center border border-borderSoft shadow-card">
                        <MonogramSymbol size={44} primaryColor="#702D3B" accentColor="#C59B6D" />
                      </div>
                      <span className="text-[10px] text-mutedText">64x64 Touch Icon</span>
                    </div>
                  </div>
                  <p className="text-xs text-mutedText mt-3 text-center">
                    Constructed with precise stroke weights ensuring the AO ligature remains legible at minimal pixel densities.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "colors" && (
            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-lg font-bold text-charcoal">
                  Curated Healthcare Color Palette
                </h3>
                <p className="text-sm text-mutedText mt-1">
                  Built around calming warm ivory and crisp clinical white, with deep burgundy used selectively for reassurance, prestige, and focal action points.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {colorSwatches.map((color) => (
                  <div
                    key={color.hex}
                    className="p-4 rounded-2xl border border-borderSoft bg-white hover:shadow-card transition-shadow flex flex-col justify-between"
                  >
                    <div>
                      <div
                        className="w-full h-20 rounded-xl shadow-inner flex items-end p-2.5 justify-between"
                        style={{ backgroundColor: color.hex }}
                      >
                        <span
                          className="text-[11px] font-mono font-semibold"
                          style={{ color: color.text }}
                        >
                          {color.hex}
                        </span>
                        <button
                          onClick={() => handleCopy(color.hex)}
                          className="p-1 rounded bg-black/20 hover:bg-black/40 text-white transition-colors"
                          title="Copy Hex Code"
                        >
                          {copiedColor === color.hex ? (
                            <Check className="w-3.5 h-3.5 text-green-300" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                      <h4 className="font-semibold text-charcoal text-sm mt-3">{color.name}</h4>
                      <p className="text-xs text-mutedText mt-1">{color.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "typography" && (
            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-lg font-bold text-charcoal">
                  Refined Typography Direction
                </h3>
                <p className="text-sm text-mutedText mt-1">
                  A high-craft triad uniting architectural precision, editorial prestige, and clinical legibility.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-6 rounded-2xl bg-ivory-100 border border-borderSoft">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-burgundy">
                      Display & Editorial Headings
                    </span>
                    <span className="text-xs font-mono text-mutedText">Instrument Serif</span>
                  </div>
                  <p className="font-serif text-3xl sm:text-4xl text-charcoal italic">
                    &ldquo;A confident smile begins with thoughtful care.&rdquo;
                  </p>
                  <p className="text-xs text-mutedText mt-2">
                    Used for heroic statements, patient quotes, and editorial section intros.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-ivory-100 border border-borderSoft">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-burgundy">
                      Section Headings & UI Architecture
                    </span>
                    <span className="text-xs font-mono text-mutedText">Manrope (SemiBold / Bold)</span>
                  </div>
                  <h4 className="font-heading text-2xl font-bold text-charcoal">
                    Architectural Symmetry & Biological Orthodontics
                  </h4>
                  <p className="text-xs text-mutedText mt-2">
                    Geometric, balanced, and contemporary. Lends clinical authority to headers and cards.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-ivory-100 border border-borderSoft">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-burgundy">
                      Body Copy & Medical Guidance
                    </span>
                    <span className="text-xs font-mono text-mutedText">Inter</span>
                  </div>
                  <p className="text-sm text-charcoal leading-relaxed">
                    Clear aligners exert calibrated, gentle forces along the periodontal ligament to guide teeth through natural alveolar bone remodeling. Exceptional readability ensures complex orthodontic guidance is effortlessly absorbed by patients of all ages.
                  </p>
                  <p className="text-xs text-mutedText mt-2">
                    Engineered for high readability across dense medical guidelines and mobile screens.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "manifesto" && (
            <div className="space-y-4 text-sm text-charcoal leading-relaxed">
              <h3 className="font-heading text-lg font-bold text-charcoal">
                Portfolio Demonstration Manifesto
              </h3>
              <p>
                This project was created by <strong>NOVA Digital Studio</strong> as an original demonstration of high-calibre specialist healthcare digital design.
              </p>
              <div className="p-4 rounded-xl bg-blush/60 border border-burgundy-200 text-xs text-burgundy-900 space-y-1.5">
                <p className="font-semibold">Independent Portfolio Concept Notice:</p>
                <p>
                  AUREA Orthodontics is a completely fictional specialist dental brand. It does not represent any real-world clinic, physical facility, or licensed practitioner. All clinical case studies and testimonials are illustrative simulations created solely to evaluate healthcare user experience, information architecture, and brand identity design.
                </p>
              </div>
              <p className="text-xs text-mutedText">
                Built strictly with original SVG vector assets, custom medical content, conservative clinical guidance, and responsive interaction design.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-ivory-200 px-6 py-4 sm:px-8 border-t border-borderSoft flex items-center justify-between">
          <span className="text-xs text-mutedText">
            Design Tokens: Primary Burgundy (#702D3B) &bull; Warm Ivory (#F8F6F2)
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full text-xs font-semibold bg-burgundy text-white hover:bg-burgundy-700 transition-colors"
          >
            Close Spec Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
