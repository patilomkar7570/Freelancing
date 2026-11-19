"use client";

import React, { useState } from "react";
import { BITE_CONDITIONS, BiteCondition } from "@/data/biteConditions";
import { Info, CheckCircle, AlertTriangle, ArrowRight, Sparkles } from "lucide-react";

/**
 * High-precision vector anatomical diagrams for each orthodontic condition.
 * Clean, medical-grade architectural illustrations.
 */
const ConditionDiagram: React.FC<{ type: BiteCondition["diagramVisual"] }> = ({ type }) => {
  return (
    <div className="relative w-full h-56 sm:h-64 bg-ivory-100 rounded-2xl border border-borderSoft flex items-center justify-center p-4 overflow-hidden">
      {type === "crowding" && (
        <svg viewBox="0 0 300 160" className="w-full max-w-[280px] h-auto" fill="none">
          <text x="150" y="24" textAnchor="middle" className="text-[10px] fill-mutedText font-mono uppercase tracking-wider">
            Staggered & Rotated Incisors
          </text>
          {/* Upper arch reference curve */}
          <path d="M40 120 Q150 40 260 120" stroke="#E8E1DF" strokeWidth="3" strokeDasharray="4 4" />
          {/* Overlapping teeth simulation */}
          {/* Central Left */}
          <rect x="132" y="58" width="22" height="34" rx="4" fill="#FFFFFF" stroke="#702D3B" strokeWidth="2.5" transform="rotate(-8 143 75)" />
          {/* Central Right (overlapping forward) */}
          <rect x="146" y="52" width="22" height="34" rx="4" fill="#F8F6F2" stroke="#421D29" strokeWidth="2.5" transform="rotate(12 157 69)" />
          {/* Lateral Left (pushed back) */}
          <rect x="110" y="66" width="18" height="30" rx="3.5" fill="#FFFFFF" stroke="#702D3B" strokeWidth="2" transform="rotate(15 119 81)" />
          {/* Lateral Right */}
          <rect x="170" y="64" width="18" height="30" rx="3.5" fill="#FFFFFF" stroke="#702D3B" strokeWidth="2" transform="rotate(-14 179 79)" />
          {/* Canines */}
          <polygon points="90,105 102,80 108,105" fill="#FFFFFF" stroke="#702D3B" strokeWidth="2" />
          <polygon points="210,105 198,80 192,105" fill="#FFFFFF" stroke="#702D3B" strokeWidth="2" />
          {/* Irregular force arrows */}
          <path d="M125 50 L140 65" stroke="#C59B6D" strokeWidth="2" markerEnd="url(#arrow)" />
          <path d="M175 48 L160 62" stroke="#C59B6D" strokeWidth="2" markerEnd="url(#arrow)" />
        </svg>
      )}

      {type === "overbite" && (
        <svg viewBox="0 0 300 160" className="w-full max-w-[280px] h-auto" fill="none">
          <text x="150" y="24" textAnchor="middle" className="text-[10px] fill-mutedText font-mono uppercase tracking-wider">
            &gt;80% Vertical Incisor Coverage
          </text>
          {/* Palate line */}
          <path d="M60 45 C110 40 190 40 240 45" stroke="#E8E1DF" strokeWidth="3" />
          {/* Upper central incisor (covering lower) */}
          <rect x="135" y="42" width="30" height="52" rx="4" fill="#FFFFFF" stroke="#702D3B" strokeWidth="3" />
          {/* Lower central incisor (hidden deep behind upper) */}
          <rect x="140" y="70" width="22" height="42" rx="3.5" fill="#EFECE6" stroke="#C59B6D" strokeWidth="2.5" strokeDasharray="3 2" />
          {/* Vertical overlap dimension line */}
          <line x1="175" y1="42" x2="175" y2="94" stroke="#702D3B" strokeWidth="2" />
          <polyline points="171,46 175,42 179,46" stroke="#702D3B" strokeWidth="2" fill="none" />
          <polyline points="171,90 175,94 179,90" stroke="#702D3B" strokeWidth="2" fill="none" />
          <text x="185" y="72" className="text-[10px] fill-burgundy font-bold">Deep Overlap</text>
          {/* Lower jaw baseline */}
          <line x1="80" y1="125" x2="220" y2="125" stroke="#E8E1DF" strokeWidth="2" strokeDasharray="2 3" />
        </svg>
      )}

      {type === "underbite" && (
        <svg viewBox="0 0 300 160" className="w-full max-w-[280px] h-auto" fill="none">
          <text x="150" y="24" textAnchor="middle" className="text-[10px] fill-mutedText font-mono uppercase tracking-wider">
            Lower Incisors Anterior to Upper Arch
          </text>
          {/* Upper incisor (tucked back) */}
          <rect x="122" y="46" width="24" height="42" rx="4" fill="#FFFFFF" stroke="#702D3B" strokeWidth="2.5" />
          {/* Lower incisor (protruding in front of upper) */}
          <rect x="144" y="66" width="24" height="46" rx="4" fill="#FFFFFF" stroke="#421D29" strokeWidth="3" />
          {/* Reverse relationship indicator */}
          <path d="M110 98 Q140 120 175 105" stroke="#C59B6D" strokeWidth="2" strokeDasharray="3 3" />
          <text x="150" y="135" textAnchor="middle" className="text-[10px] fill-burgundy font-bold">
            Class III Occlusal Relationship
          </text>
        </svg>
      )}

      {type === "crossbite" && (
        <svg viewBox="0 0 300 160" className="w-full max-w-[280px] h-auto" fill="none">
          <text x="150" y="24" textAnchor="middle" className="text-[10px] fill-mutedText font-mono uppercase tracking-wider">
            Transverse Arch Inversion
          </text>
          {/* Normal side (Left): Upper outside lower */}
          <rect x="75" y="52" width="28" height="30" rx="3" fill="#FFFFFF" stroke="#702D3B" strokeWidth="2" />
          <rect x="80" y="86" width="24" height="30" rx="3" fill="#F8F6F2" stroke="#702D3B" strokeWidth="2" />
          <text x="88" y="132" textAnchor="middle" className="text-[9px] fill-mutedText">Normal</text>

          <line x1="150" y1="40" x2="150" y2="135" stroke="#E8E1DF" strokeWidth="1.5" strokeDasharray="3 3" />

          {/* Crossbite side (Right): Upper locked inside lower */}
          <rect x="195" y="52" width="26" height="30" rx="3" fill="#FFFFFF" stroke="#421D29" strokeWidth="2.5" />
          <rect x="185" y="86" width="28" height="30" rx="3" fill="#F8F6F2" stroke="#C59B6D" strokeWidth="2.5" />
          <text x="200" y="132" textAnchor="middle" className="text-[9px] fill-burgundy font-bold">Crossbite (Inverted)</text>
        </svg>
      )}

      {type === "openbite" && (
        <svg viewBox="0 0 300 160" className="w-full max-w-[280px] h-auto" fill="none">
          <text x="150" y="24" textAnchor="middle" className="text-[10px] fill-mutedText font-mono uppercase tracking-wider">
            Vertical Gap Between Incisal Edges
          </text>
          {/* Upper incisor */}
          <rect x="135" y="38" width="30" height="36" rx="4" fill="#FFFFFF" stroke="#702D3B" strokeWidth="2.5" />
          {/* Lower incisor (with clear vertical daylight gap) */}
          <rect x="135" y="98" width="30" height="36" rx="4" fill="#FFFFFF" stroke="#702D3B" strokeWidth="2.5" />
          {/* Vertical gap highlight */}
          <line x1="150" y1="76" x2="150" y2="96" stroke="#C59B6D" strokeWidth="2.5" />
          <polyline points="146,80 150,76 154,80" stroke="#C59B6D" strokeWidth="2" fill="none" />
          <polyline points="146,92 150,96 154,92" stroke="#C59B6D" strokeWidth="2" fill="none" />
          <text x="175" y="90" className="text-[10px] fill-goldAccent font-bold">Open Aperture</text>
          {/* Back molars contacting */}
          <rect x="70" y="66" width="25" height="38" rx="3" fill="#E8E1DF" stroke="#777177" strokeWidth="1.5" />
          <rect x="205" y="66" width="25" height="38" rx="3" fill="#E8E1DF" stroke="#777177" strokeWidth="1.5" />
        </svg>
      )}

      {type === "overjet" && (
        <svg viewBox="0 0 300 160" className="w-full max-w-[280px] h-auto" fill="none">
          <text x="150" y="24" textAnchor="middle" className="text-[10px] fill-mutedText font-mono uppercase tracking-wider">
            Horizontal Protrusion (Overjet)
          </text>
          {/* Upper protruding incisor (angled forward) */}
          <g transform="rotate(-15 170 50)">
            <rect x="155" y="45" width="28" height="48" rx="4" fill="#FFFFFF" stroke="#702D3B" strokeWidth="3" />
          </g>
          {/* Lower normal incisor */}
          <rect x="110" y="75" width="24" height="44" rx="4" fill="#F8F6F2" stroke="#421D29" strokeWidth="2.5" />
          {/* Horizontal gap arrow */}
          <line x1="136" y1="88" x2="182" y2="88" stroke="#C59B6D" strokeWidth="2" />
          <polyline points="178,84 182,88 178,92" stroke="#C59B6D" strokeWidth="2" fill="none" />
          <polyline points="140,84 136,88 140,92" stroke="#C59B6D" strokeWidth="2" fill="none" />
          <text x="160" y="112" textAnchor="middle" className="text-[10px] fill-burgundy font-bold">
            Excessive Overjet Gap
          </text>
        </svg>
      )}

      {type === "spacing" && (
        <svg viewBox="0 0 300 160" className="w-full max-w-[280px] h-auto" fill="none">
          <text x="150" y="24" textAnchor="middle" className="text-[10px] fill-mutedText font-mono uppercase tracking-wider">
            Midline Diastema & Gaps
          </text>
          {/* Left central incisor */}
          <rect x="115" y="55" width="26" height="48" rx="4" fill="#FFFFFF" stroke="#702D3B" strokeWidth="2.5" />
          {/* Right central incisor */}
          <rect x="159" y="55" width="26" height="48" rx="4" fill="#FFFFFF" stroke="#702D3B" strokeWidth="2.5" />
          {/* Central Diastema Gap */}
          <line x1="142" y1="78" x2="158" y2="78" stroke="#C59B6D" strokeWidth="2" />
          <polyline points="145,74 141,78 145,82" stroke="#C59B6D" strokeWidth="1.5" fill="none" />
          <polyline points="155,74 159,78 155,82" stroke="#C59B6D" strokeWidth="1.5" fill="none" />
          <text x="150" y="125" textAnchor="middle" className="text-[10px] fill-goldAccent font-bold">
            Diastema Space
          </text>
        </svg>
      )}
    </div>
  );
};

export const BiteVisualizer: React.FC = () => {
  const [selectedCondition, setSelectedCondition] = useState<BiteCondition>(BITE_CONDITIONS[0]);

  return (
    <div className="bg-white rounded-3xl border border-borderSoft shadow-card overflow-hidden">
      {/* Condition Tab Selector */}
      <div className="bg-ivory-100 border-b border-borderSoft p-3 sm:p-4 overflow-x-auto flex gap-2 no-scrollbar">
        {BITE_CONDITIONS.map((cond) => {
          const isSelected = selectedCondition.id === cond.id;
          return (
            <button
              key={cond.id}
              onClick={() => setSelectedCondition(cond)}
              className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all flex items-center gap-1.5 ${
                isSelected
                  ? "bg-burgundy text-white shadow-sm"
                  : "bg-white text-charcoal border border-borderSoft hover:border-burgundy/40"
              }`}
            >
              <span>{cond.name}</span>
            </button>
          );
        })}
      </div>

      {/* Main Condition Explorer */}
      <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Visual Diagram & Quick Facts */}
        <div className="lg:col-span-5 space-y-4">
          <ConditionDiagram type={selectedCondition.diagramVisual} />

          <div className="p-4 rounded-2xl bg-ivory-50 border border-borderSoft text-xs space-y-2">
            <div className="flex items-center gap-1.5 text-burgundy font-semibold uppercase tracking-wider text-[10px]">
              <Info className="w-3.5 h-3.5" />
              Clinical Prevalence
            </div>
            <p className="text-mutedText">{selectedCondition.prevalence}</p>
          </div>

          <div className="p-4 rounded-2xl bg-blush-soft border border-burgundy-100 text-xs">
            <div className="font-semibold text-burgundy flex items-center gap-1.5 mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              AUREA Practice Insight
            </div>
            <p className="text-burgundy-900 leading-relaxed">
              {selectedCondition.clinicalInsight}
            </p>
          </div>
        </div>

        {/* Right Column: Detailed Breakdown */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-burgundy">
              {selectedCondition.subtitle}
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-charcoal mt-1">
              {selectedCondition.name}
            </h3>
            <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed mt-3">
              {selectedCondition.description}
            </p>
          </div>

          {/* Potential Consequences if Unaddressed */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal mb-3 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              Potential Clinical Consequences if Unaddressed
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {selectedCondition.potentialConsequences.map((item, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-ivory-100 border border-borderSoft text-xs text-charcoal flex items-start gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-burgundy flex-shrink-0 mt-1.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Modern Orthodontic Treatment Strategy */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal mb-3 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-burgundy" />
              How AUREA Modern Orthodontics Corrects This
            </h4>
            <div className="space-y-2">
              {selectedCondition.treatmentApproach.map((approach, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-white border border-borderSoft text-xs sm:text-sm text-charcoal flex items-start gap-2.5 shadow-sm"
                >
                  <div className="w-5 h-5 rounded-full bg-blush text-burgundy flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <span>{approach}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
