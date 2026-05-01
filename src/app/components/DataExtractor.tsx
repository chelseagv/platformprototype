import { motion } from "motion/react";
import { useState } from "react";
import { Sparkles, Check, Plus } from "lucide-react";

const extractionFields = [
  { id: "author", label: "Author(s)", type: "text", aiDetected: "Johnson, A., Smith, B." },
  { id: "year", label: "Publication Year", type: "number", aiDetected: "2024" },
  { id: "sample", label: "Sample Size", type: "number", aiDetected: "N = 245" },
  { id: "intervention", label: "Intervention Type", type: "select", aiDetected: "Digital health intervention" },
  { id: "outcome", label: "Primary Outcome", type: "text", aiDetected: "Patient engagement score (M = 7.2, SD = 1.4)" },
  { id: "quality", label: "Study Quality", type: "select", aiDetected: "High" },
];

export default function DataExtractor() {
  const [extractedData, setExtractedData] = useState<Record<string, string>>({});
  const [showAIDetection, setShowAIDetection] = useState(false);

  const handleAIExtract = () => {
    setShowAIDetection(true);
    const aiData: Record<string, string> = {};
    extractionFields.forEach((field) => {
      aiData[field.id] = field.aiDetected;
    });
    setExtractedData(aiData);
  };

  const handleFieldChange = (fieldId: string, value: string) => {
    setExtractedData({ ...extractedData, [fieldId]: value });
  };

  return (
    <div className="w-full h-full p-8 flex flex-col">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h4 className="text-sm tracking-wider mb-1">Data Extraction Form</h4>
          <p className="text-xs text-black/60">Study ID: SR-2024-045</p>
        </div>
        <button
          onClick={handleAIExtract}
          className="px-4 py-2 bg-black text-white text-xs tracking-wider hover:bg-black/80 transition-colors flex items-center gap-2"
        >
          <Sparkles className="w-4 h-4" />
          AI Auto-Extract
        </button>
      </div>

      {/* AI Detection Banner */}
      {showAIDetection && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="mb-4 p-4 bg-blue-50 border border-blue-200"
        >
          <div className="flex items-center gap-2 text-xs">
            <Check className="w-4 h-4 text-blue-600" />
            <span className="text-blue-900">
              AI has detected and pre-filled {extractionFields.length} fields. Please review and modify as needed.
            </span>
          </div>
        </motion.div>
      )}

      {/* Extraction Fields */}
      <div className="flex-1 overflow-auto space-y-4">
        {extractionFields.map((field, index) => (
          <motion.div
            key={field.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: showAIDetection ? index * 0.1 : 0 }}
          >
            <label className="block text-xs tracking-wider uppercase text-black/60 mb-2">
              {field.label}
            </label>
            {field.type === "select" ? (
              <select
                value={extractedData[field.id] || ""}
                onChange={(e) => handleFieldChange(field.id, e.target.value)}
                className="w-full px-4 py-2 border border-black/20 text-sm focus:outline-none focus:border-black/60 transition-colors bg-white"
              >
                <option value="">Select...</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            ) : (
              <input
                type={field.type}
                value={extractedData[field.id] || ""}
                onChange={(e) => handleFieldChange(field.id, e.target.value)}
                className={`w-full px-4 py-2 border text-sm focus:outline-none focus:border-black/60 transition-colors ${
                  showAIDetection && extractedData[field.id]
                    ? "border-blue-300 bg-blue-50/30"
                    : "border-black/20 bg-white"
                }`}
                placeholder={`Enter ${field.label.toLowerCase()}`}
              />
            )}
          </motion.div>
        ))}

        {/* Add Custom Field */}
        <button className="w-full py-3 border border-dashed border-black/20 hover:border-black/40 transition-colors flex items-center justify-center gap-2 text-xs text-black/60 hover:text-black">
          <Plus className="w-4 h-4" />
          Add Custom Field
        </button>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 pt-4 border-t border-black/10 flex gap-3">
        <button className="flex-1 py-3 border border-black/20 hover:bg-black/5 transition-colors text-sm">
          Save Draft
        </button>
        <button className="flex-1 py-3 bg-green-600 hover:bg-green-700 text-white transition-colors text-sm">
          Complete Extraction
        </button>
      </div>

      {/* Progress Indicator */}
      <div className="mt-4 text-center">
        <p className="text-xs text-black/60">
          Study 12 of 26 • {Math.round((12 / 26) * 100)}% Complete
        </p>
      </div>
    </div>
  );
}
