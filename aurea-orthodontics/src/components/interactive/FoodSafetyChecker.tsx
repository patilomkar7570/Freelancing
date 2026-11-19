"use client";

import React, { useState } from "react";
import { FOOD_DATABASE, ADJUSTMENT_DAY_MENU, FoodItem } from "@/data/eatingWithBraces";
import { Search, CheckCircle, AlertTriangle, XCircle, Utensils, Sparkles } from "lucide-react";

export const FoodSafetyChecker: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<"all" | "safe" | "caution" | "avoid">("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    "all",
    "Dairy & Soft",
    "Fruits & Vegetables",
    "Proteins & Meats",
    "Grains & Breads",
    "Snacks & Sweets",
  ];

  const filteredFoods = FOOD_DATABASE.filter((food) => {
    const matchesSearch =
      food.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      food.advice.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === "all" || food.status === selectedStatus;
    const matchesCat = selectedCategory === "all" || food.category === selectedCategory;
    return matchesSearch && matchesStatus && matchesCat;
  });

  return (
    <div className="space-y-8">
      {/* Search and Filters Bar */}
      <div className="bg-white p-6 rounded-3xl border border-borderSoft shadow-card space-y-4">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-mutedText absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search foods (e.g., apples, popcorn, pasta, nuts, chocolate)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full border border-borderSoft bg-ivory-50 text-xs sm:text-sm focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy"
            />
          </div>

          {/* Status Tabs */}
          <div className="flex gap-1.5 bg-ivory-100 p-1 rounded-full border border-borderSoft text-xs overflow-x-auto">
            <button
              onClick={() => setSelectedStatus("all")}
              className={`px-3.5 py-2 rounded-full font-medium transition-all ${
                selectedStatus === "all"
                  ? "bg-burgundy text-white shadow-sm"
                  : "text-mutedText hover:text-charcoal"
              }`}
            >
              All Items
            </button>
            <button
              onClick={() => setSelectedStatus("safe")}
              className={`px-3.5 py-2 rounded-full font-medium transition-all flex items-center gap-1 ${
                selectedStatus === "safe"
                  ? "bg-emerald-700 text-white shadow-sm"
                  : "text-emerald-800 hover:text-emerald-950"
              }`}
            >
              <CheckCircle className="w-3 h-3" />
              Safe & Soft
            </button>
            <button
              onClick={() => setSelectedStatus("caution")}
              className={`px-3.5 py-2 rounded-full font-medium transition-all flex items-center gap-1 ${
                selectedStatus === "caution"
                  ? "bg-amber-600 text-white shadow-sm"
                  : "text-amber-700 hover:text-amber-900"
              }`}
            >
              <AlertTriangle className="w-3 h-3" />
              Modify First
            </button>
            <button
              onClick={() => setSelectedStatus("avoid")}
              className={`px-3.5 py-2 rounded-full font-medium transition-all flex items-center gap-1 ${
                selectedStatus === "avoid"
                  ? "bg-rose-700 text-white shadow-sm"
                  : "text-rose-800 hover:text-rose-950"
              }`}
            >
              <XCircle className="w-3 h-3" />
              Strictly Avoid
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-lg text-xs transition-colors ${
                selectedCategory === cat
                  ? "bg-charcoal text-white font-medium"
                  : "bg-ivory-100 text-mutedText hover:text-charcoal"
              }`}
            >
              {cat === "all" ? "All Categories" : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredFoods.map((item) => (
          <div
            key={item.id}
            className="p-5 rounded-2xl bg-white border border-borderSoft shadow-sm hover:shadow-card transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] uppercase tracking-wider text-mutedText font-semibold">
                  {item.category}
                </span>
                {item.status === "safe" && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    <CheckCircle className="w-3 h-3" />
                    Safe to Eat
                  </span>
                )}
                {item.status === "caution" && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                    <AlertTriangle className="w-3 h-3" />
                    Cut / Soften
                  </span>
                )}
                {item.status === "avoid" && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">
                    <XCircle className="w-3 h-3" />
                    Avoid (Risk)
                  </span>
                )}
              </div>

              <h4 className="font-heading text-base font-bold text-charcoal">{item.name}</h4>
              <p className="text-xs text-charcoal/80 leading-relaxed mt-2">{item.advice}</p>
            </div>

            {item.substituteTip && (
              <div className="mt-4 pt-3 border-t border-borderSoft/60 text-[11px] text-burgundy flex items-start gap-1.5">
                <Sparkles className="w-3 h-3 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Tip:</strong> {item.substituteTip}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredFoods.length === 0 && (
        <div className="text-center py-12 bg-white rounded-3xl border border-borderSoft">
          <Utensils className="w-8 h-8 text-mutedText mx-auto mb-2 opacity-50" />
          <p className="text-sm font-semibold text-charcoal">No specific food matched your search</p>
          <p className="text-xs text-mutedText mt-1">
            General rule of thumb: If it is hard, sticky, chewy, or crunchy, modify or avoid it!
          </p>
        </div>
      )}

      {/* Sample Adjustment Day Menu Callout */}
      <div className="bg-gradient-to-br from-ivory-100 to-blush/40 p-6 sm:p-8 rounded-3xl border border-borderSoft">
        <div className="flex items-center gap-2 mb-2">
          <Utensils className="w-4 h-4 text-burgundy" />
          <span className="text-xs font-bold uppercase tracking-wider text-burgundy">
            Recommended Menu for New Wires & Activation Days
          </span>
        </div>
        <h3 className="font-serif text-2xl text-charcoal mb-4">
          Nutritious & Gentle 1-Day Eating Plan
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div className="p-4 rounded-2xl bg-white border border-borderSoft shadow-sm">
            <span className="font-bold text-burgundy uppercase tracking-wider text-[10px] block mb-1">
              Breakfast
            </span>
            <p className="text-charcoal leading-relaxed">{ADJUSTMENT_DAY_MENU.breakfast}</p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-borderSoft shadow-sm">
            <span className="font-bold text-burgundy uppercase tracking-wider text-[10px] block mb-1">
              Lunch
            </span>
            <p className="text-charcoal leading-relaxed">{ADJUSTMENT_DAY_MENU.lunch}</p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-borderSoft shadow-sm">
            <span className="font-bold text-burgundy uppercase tracking-wider text-[10px] block mb-1">
              Dinner
            </span>
            <p className="text-charcoal leading-relaxed">{ADJUSTMENT_DAY_MENU.dinner}</p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-borderSoft shadow-sm">
            <span className="font-bold text-burgundy uppercase tracking-wider text-[10px] block mb-1">
              Snack / Dessert
            </span>
            <p className="text-charcoal leading-relaxed">{ADJUSTMENT_DAY_MENU.snack}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
