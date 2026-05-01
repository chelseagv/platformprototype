import { motion } from "motion/react";
import { useState } from "react";
import { Sparkles, Check } from "lucide-react";

export default function ProtocolBuilder() {
  const [picoParts, setPicoParts] = useState({
    population: "",
    intervention: "",
    comparison: "",
    outcome: "",
  });

  const [showSuggestion, setShowSuggestion] = useState(false);

  const handleAIRefine = () => {
    setShowSuggestion(true);
    setTimeout(() => setShowSuggestion(false), 3000);
  };

  return (
    <div className="w-full h-full p-8 flex flex-col">
      <div className="mb-6">
        <h4 className="text-sm tracking-wider mb-2">PICO Framework Builder</h4>
        <p className="text-xs text-black/60">Define your research question components</p>
      </div>

      <div className="flex-1 space-y-4">
        <PICoField
          label="Population"
          placeholder="e.g., Adults with type 2 diabetes"
          value={picoParts.population}
          onChange={(val) => setPicoParts({ ...picoParts, population: val })}
        />
        <PICoField
          label="Intervention"
          placeholder="e.g., Continuous glucose monitoring"
          value={picoParts.intervention}
          onChange={(val) => setPicoParts({ ...picoParts, intervention: val })}
        />
        <PICoField
          label="Comparison"
          placeholder="e.g., Standard blood glucose testing"
          value={picoParts.comparison}
          onChange={(val) => setPicoParts({ ...picoParts, comparison: val })}
        />
        <PICoField
          label="Outcome"
          placeholder="e.g., HbA1c levels"
          value={picoParts.outcome}
          onChange={(val) => setPicoParts({ ...picoParts, outcome: val })}
        />
      </div>

      <div className="mt-6 pt-4 border-t border-black/10">
        <button
          onClick={handleAIRefine}
          className="w-full py-3 bg-black text-white text-xs tracking-wider hover:bg-black/80 transition-colors flex items-center justify-center gap-2"
        >
          <Sparkles className="w-4 h-4" />
          AI Refine Research Question
        </button>

        {showSuggestion && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 bg-green-50 border border-green-200 text-xs"
          >
            <div className="flex items-start gap-2">
              <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-green-900 mb-1">AI Suggestion:</p>
                <p className="text-green-800 leading-relaxed">
                  "In adults with type 2 diabetes, how does continuous glucose monitoring
                  compare to standard blood glucose testing in improving HbA1c levels?"
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

function PICoField({
  label,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (val: string) => void;
}) {
  return (
    <div>
      <label className="block text-xs tracking-wider uppercase text-black/60 mb-2">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 border border-black/20 text-sm focus:outline-none focus:border-black/60 transition-colors bg-white"
      />
    </div>
  );
}
