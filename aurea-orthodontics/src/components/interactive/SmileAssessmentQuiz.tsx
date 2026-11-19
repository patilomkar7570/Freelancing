"use client";

import React, { useState } from "react";
import { Sparkles, ArrowRight, RotateCcw, Check, ShieldCheck, Calendar } from "lucide-react";

interface QuestionStep {
  id: string;
  question: string;
  subtitle: string;
  options: {
    label: string;
    sublabel: string;
    value: string;
  }[];
}

const QUESTIONS: QuestionStep[] = [
  {
    id: "ageGroup",
    question: "Who is exploring orthodontic care?",
    subtitle: "Bone biology and growth windows guide the most effective approach.",
    options: [
      { label: "Adult (18+)", sublabel: "Focus on discreet aesthetics and healthy bite balance", value: "adult" },
      { label: "Adolescent (11–17)", sublabel: "Taking advantage of teen growth spurts for alignment", value: "teen" },
      { label: "Child (Age 7–10)", sublabel: "Early interceptive guidance and airway expansion", value: "child" },
    ],
  },
  {
    id: "primaryGoal",
    question: "What is your primary smile or bite priority?",
    subtitle: "Select the condition most relevant to your current smile.",
    options: [
      { label: "Crowding & Overlapping", sublabel: "Teeth twisted or overlapping due to tight arch perimeter", value: "crowding" },
      { label: "Spacing & Gaps", sublabel: "Prominent gap between front teeth or generalized spacing", value: "spacing" },
      { label: "Deep Overbite or Underbite", sublabel: "Jaws misaligned, front teeth overlap or bite backwards", value: "bite" },
      { label: "Subtle Aesthetic Touch-Up", sublabel: "Mild relapse or fine-tuning before a special milestone", value: "refinement" },
    ],
  },
  {
    id: "lifestyle",
    question: "Which appliance characteristic matters most to you?",
    subtitle: "Every lifestyle has an optimal orthodontic partner.",
    options: [
      { label: "Maximum Discretion", sublabel: "Virtually invisible, removable for dining & events", value: "discreet" },
      { label: "Set-and-Forget Reliability", sublabel: "Fixed appliance that works 24/7 without tracking hours", value: "fixed" },
      { label: "Gentle Growth Modulation", sublabel: "Non-invasive expansion for growing facial structures", value: "growth" },
    ],
  },
];

interface SmileAssessmentQuizProps {
  onRequestConsultation?: () => void;
}

export const SmileAssessmentQuiz: React.FC<SmileAssessmentQuizProps> = ({ onRequestConsultation }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);

  const handleSelectOption = (value: string) => {
    const q = QUESTIONS[currentQuestionIndex];
    const newAnswers = { ...answers, [q.id]: value };
    setAnswers(newAnswers);

    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentQuestionIndex(0);
    setShowResult(false);
  };

  // Determine tailored recommendation
  const getRecommendation = () => {
    if (answers.ageGroup === "child") {
      return {
        title: "Early Interceptive Guidance (Phase I)",
        badge: "Growth Optimization Pathway",
        duration: "Typically 9 to 14 months",
        description: "An early assessment harnesses your child's natural facial growth. Gentle palatal expansion or space maintainers create room for erupting permanent teeth, reducing the need for permanent extractions later.",
        idealModalities: ["Gentle Palatal Expander", "Partial Fixed Braces (2x4)", "Myofunctional Guidance"],
        reassurance: "Most children evaluated at age 7 do not need immediate treatment, but periodic monitoring gives total peace of mind.",
      };
    }

    if (answers.lifestyle === "discreet" || answers.primaryGoal === "refinement") {
      return {
        title: "Precision Clear Aligner Therapy",
        badge: "Discreet Aesthetic Pathway",
        duration: "Typically 6 to 18 months",
        description: "Custom digital aligners offer smooth, virtually imperceptible tooth movement. Enjoy complete freedom to remove them for business dining, presentations, and unrestricted dental flossing.",
        idealModalities: ["Biocompatible 3D Clear Aligners", "Digital Optical Scans (No Putty)", "SmartForce Micro-Attachments"],
        reassurance: "Monitored every 6 to 8 weeks with digital progress tracking for maximum precision and predictability.",
      };
    }

    return {
      title: "Aesthetic Ceramic or Modern Low-Profile Braces",
      badge: "Comprehensive Bio-Mechanical Pathway",
      duration: "Typically 12 to 22 months",
      description: "Translucent ceramic brackets blend with your tooth shade while providing uninterrupted, continuous three-dimensional torque control. Ideal for resolving complex bite discrepancies, deep overbites, and severe rotations.",
      idealModalities: ["Monocrystalline Sapphire Brackets", "Shape-Memory NiTi Archwires", "Precision Bite Coordination"],
      reassurance: "Engineered with rounded low-profile edges to safeguard delicate oral tissues throughout your journey.",
    };
  };

  const currentQ = QUESTIONS[currentQuestionIndex];
  const recommendation = showResult ? getRecommendation() : null;

  return (
    <div className="bg-white rounded-3xl border border-borderSoft shadow-card overflow-hidden">
      {/* Top Banner */}
      <div className="bg-burgundy text-white px-6 py-4 sm:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-goldAccent" />
          <span className="text-xs uppercase tracking-widest font-semibold text-ivory-200">
            Interactive Smile Pathway Navigator
          </span>
        </div>
        <span className="text-xs text-ivory-300 font-mono">
          {showResult ? "Assessment Complete" : `Step ${currentQuestionIndex + 1} of ${QUESTIONS.length}`}
        </span>
      </div>

      <div className="p-6 sm:p-8">
        {!showResult ? (
          <div>
            {/* Progress Bar */}
            <div className="w-full bg-ivory-200 h-1.5 rounded-full mb-6 overflow-hidden">
              <div
                className="bg-burgundy h-full transition-all duration-300 rounded-full"
                style={{ width: `${((currentQuestionIndex + 1) / QUESTIONS.length) * 100}%` }}
              />
            </div>

            <div className="mb-6">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-charcoal">
                {currentQ.question}
              </h3>
              <p className="text-sm text-mutedText mt-1">{currentQ.subtitle}</p>
            </div>

            <div className="space-y-3">
              {currentQ.options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleSelectOption(option.value)}
                  className="w-full p-4 rounded-2xl border border-borderSoft bg-ivory-50 hover:bg-blush/40 hover:border-burgundy text-left transition-all group flex items-center justify-between"
                >
                  <div>
                    <div className="font-semibold text-charcoal group-hover:text-burgundy transition-colors text-sm sm:text-base">
                      {option.label}
                    </div>
                    <div className="text-xs text-mutedText mt-0.5">{option.sublabel}</div>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-borderSoft group-hover:border-burgundy group-hover:bg-burgundy group-hover:text-white flex items-center justify-center text-mutedText transition-all flex-shrink-0 ml-3">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
              ))}
            </div>

            {currentQuestionIndex > 0 && (
              <div className="mt-6 flex justify-start">
                <button
                  type="button"
                  onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
                  className="text-xs text-mutedText hover:text-charcoal underline"
                >
                  Go back to previous question
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blush text-burgundy border border-burgundy-200">
                {recommendation?.badge}
              </span>
              <button
                type="button"
                onClick={handleReset}
                className="text-xs text-mutedText hover:text-charcoal flex items-center gap-1.5 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Retake Assessment
              </button>
            </div>

            <div>
              <h3 className="font-serif text-2xl sm:text-3xl text-charcoal">
                {recommendation?.title}
              </h3>
              <div className="flex items-center gap-2 mt-2 text-xs text-burgundy font-medium">
                <Calendar className="w-4 h-4" />
                Estimated Timeline: {recommendation?.duration}
              </div>
              <p className="text-sm text-charcoal/80 leading-relaxed mt-3">
                {recommendation?.description}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-ivory-100 border border-borderSoft">
              <div className="text-xs font-semibold uppercase tracking-wider text-charcoal mb-2">
                Recommended Modality Highlights
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {recommendation?.idealModalities.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-charcoal">
                    <Check className="w-3.5 h-3.5 text-burgundy flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-blush-soft border border-burgundy-100 flex items-start gap-2.5 text-xs text-burgundy-900">
              <ShieldCheck className="w-4 h-4 text-burgundy flex-shrink-0 mt-0.5" />
              <span>
                <strong>Clinical Note:</strong> {recommendation?.reassurance} Actual suitability is confirmed through digital 3D intraoral diagnostic imaging during your consultation.
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              {onRequestConsultation && (
                <button
                  type="button"
                  onClick={onRequestConsultation}
                  className="flex-1 py-3.5 px-6 rounded-full bg-burgundy text-white font-semibold text-sm hover:bg-burgundy-700 transition-colors text-center shadow-sm"
                >
                  Book 3D Smile Consultation (Demo)
                </button>
              )}
              <button
                type="button"
                onClick={handleReset}
                className="py-3 px-6 rounded-full border border-borderSoft text-charcoal text-sm hover:bg-ivory-100 transition-colors text-center"
              >
                Explore Another Profile
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
