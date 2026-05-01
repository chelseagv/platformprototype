import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { CheckCircle2, XCircle, AlertCircle, ChevronRight } from "lucide-react";

const mockCitations = [
  {
    id: 1,
    title: "Machine learning approaches for systematic literature reviews: A comparative study",
    authors: "Smith, J., Johnson, A., Williams, B.",
    year: 2024,
    journal: "Journal of Information Science",
    abstract: "This study examines various machine learning techniques for automating systematic review processes...",
    aiScore: 0.92,
  },
  {
    id: 2,
    title: "Natural language processing in healthcare: A systematic review",
    authors: "Chen, L., Rodriguez, M.",
    year: 2023,
    journal: "Medical Informatics Review",
    abstract: "We conducted a comprehensive review of NLP applications in healthcare settings...",
    aiScore: 0.78,
  },
  {
    id: 3,
    title: "Blockchain technology in supply chain management",
    authors: "Anderson, K., Thompson, R.",
    year: 2023,
    journal: "Supply Chain Quarterly",
    abstract: "This paper explores the implementation of blockchain solutions in modern supply chains...",
    aiScore: 0.15,
  },
];

type Decision = "include" | "exclude" | "maybe";

export default function CitationScreener() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [decisions, setDecisions] = useState<Decision[]>([]);
  const [direction, setDirection] = useState(0);

  const currentCitation = mockCitations[currentIndex];
  const progress = ((currentIndex + decisions.length) / mockCitations.length) * 100;

  const handleDecision = (decision: Decision) => {
    setDecisions([...decisions, decision]);
    setDirection(decision === "include" ? 1 : -1);

    setTimeout(() => {
      if (currentIndex < mockCitations.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    }, 300);
  };

  const getScoreColor = (score: number) => {
    if (score >= 0.7) return "text-green-600 bg-green-50";
    if (score >= 0.4) return "text-amber-600 bg-amber-50";
    return "text-red-600 bg-red-50";
  };

  const getScoreLabel = (score: number) => {
    if (score >= 0.7) return "High Relevance";
    if (score >= 0.4) return "Medium Relevance";
    return "Low Relevance";
  };

  return (
    <div className="w-full h-full p-8 flex flex-col">
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs tracking-wider">
            Citation {currentIndex + 1} of {mockCitations.length}
          </span>
          <span className="text-xs text-black/60">{Math.round(progress)}% Complete</span>
        </div>
        <div className="h-1 bg-black/10 overflow-hidden">
          <motion.div
            className="h-full bg-black"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Citation Card */}
      <div className="flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: direction * 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * 50 }}
            transition={{ duration: 0.3 }}
            className="h-full border border-black/10 p-6 flex flex-col bg-white"
          >
            {/* AI Relevance Score */}
            <div className="mb-4">
              <div className={`inline-flex items-center gap-2 px-3 py-1 text-xs ${getScoreColor(currentCitation.aiScore)}`}>
                <span className="font-medium">AI Score: {(currentCitation.aiScore * 100).toFixed(0)}%</span>
                <span>•</span>
                <span>{getScoreLabel(currentCitation.aiScore)}</span>
              </div>
            </div>

            {/* Citation Details */}
            <h4 className="text-lg leading-tight mb-3">{currentCitation.title}</h4>
            <p className="text-xs text-black/60 mb-4">
              {currentCitation.authors} ({currentCitation.year}) — {currentCitation.journal}
            </p>
            <p className="text-sm text-black/70 leading-relaxed flex-1 overflow-auto">
              {currentCitation.abstract}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Decision Buttons */}
      <div className="mt-6 grid grid-cols-3 gap-3">
        <button
          onClick={() => handleDecision("exclude")}
          className="py-3 border border-red-200 hover:bg-red-50 transition-colors flex items-center justify-center gap-2 text-sm"
        >
          <XCircle className="w-4 h-4 text-red-600" />
          <span>Exclude</span>
        </button>
        <button
          onClick={() => handleDecision("maybe")}
          className="py-3 border border-amber-200 hover:bg-amber-50 transition-colors flex items-center justify-center gap-2 text-sm"
        >
          <AlertCircle className="w-4 h-4 text-amber-600" />
          <span>Maybe</span>
        </button>
        <button
          onClick={() => handleDecision("include")}
          className="py-3 bg-green-600 hover:bg-green-700 text-white transition-colors flex items-center justify-center gap-2 text-sm"
        >
          <CheckCircle2 className="w-4 h-4" />
          <span>Include</span>
        </button>
      </div>

      {/* Stats */}
      <div className="mt-4 pt-4 border-t border-black/10 grid grid-cols-3 gap-4 text-center">
        <div>
          <div className="text-lg font-light text-green-600">{decisions.filter((d) => d === "include").length}</div>
          <div className="text-xs text-black/60">Included</div>
        </div>
        <div>
          <div className="text-lg font-light text-amber-600">{decisions.filter((d) => d === "maybe").length}</div>
          <div className="text-xs text-black/60">Maybe</div>
        </div>
        <div>
          <div className="text-lg font-light text-red-600">{decisions.filter((d) => d === "exclude").length}</div>
          <div className="text-xs text-black/60">Excluded</div>
        </div>
      </div>
    </div>
  );
}
