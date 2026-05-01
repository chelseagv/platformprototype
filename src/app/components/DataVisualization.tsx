import { motion } from "motion/react";
import { useState } from "react";
import { Download, Settings, Maximize2 } from "lucide-react";

export default function DataVisualization() {
  const [chartType, setChartType] = useState<"prisma" | "forest" | "bubble">("prisma");

  const prismaData = {
    identified: 2847,
    duplicates: 523,
    screened: 2324,
    excluded: 2156,
    fullText: 168,
    excludedFullText: 142,
    included: 26,
  };

  return (
    <div className="w-full h-full p-8 flex flex-col">
      {/* Chart Type Selector */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex gap-2">
          <button
            onClick={() => setChartType("prisma")}
            className={`px-4 py-2 text-xs tracking-wider transition-colors ${
              chartType === "prisma"
                ? "bg-black text-white"
                : "border border-black/20 hover:border-black/40"
            }`}
          >
            PRISMA
          </button>
          <button
            onClick={() => setChartType("forest")}
            className={`px-4 py-2 text-xs tracking-wider transition-colors ${
              chartType === "forest"
                ? "bg-black text-white"
                : "border border-black/20 hover:border-black/40"
            }`}
          >
            Forest Plot
          </button>
          <button
            onClick={() => setChartType("bubble")}
            className={`px-4 py-2 text-xs tracking-wider transition-colors ${
              chartType === "bubble"
                ? "bg-black text-white"
                : "border border-black/20 hover:border-black/40"
            }`}
          >
            Bubble Chart
          </button>
        </div>

        <div className="flex gap-2">
          <button className="p-2 hover:bg-black/5 transition-colors">
            <Settings className="w-4 h-4" />
          </button>
          <button className="p-2 hover:bg-black/5 transition-colors">
            <Maximize2 className="w-4 h-4" />
          </button>
          <button className="p-2 hover:bg-black/5 transition-colors">
            <Download className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Visualization Area */}
      <div className="flex-1 border border-black/10 bg-white overflow-hidden">
        {chartType === "prisma" && <PRISMADiagram data={prismaData} />}
        {chartType === "forest" && <ForestPlotPlaceholder />}
        {chartType === "bubble" && <BubbleChartPlaceholder />}
      </div>

      {/* Export Options */}
      <div className="mt-4 flex items-center justify-between text-xs">
        <span className="text-black/60">Export as:</span>
        <div className="flex gap-2">
          <button className="px-3 py-1 border border-black/20 hover:bg-black/5 transition-colors">
            PNG
          </button>
          <button className="px-3 py-1 border border-black/20 hover:bg-black/5 transition-colors">
            SVG
          </button>
          <button className="px-3 py-1 border border-black/20 hover:bg-black/5 transition-colors">
            PDF
          </button>
        </div>
      </div>
    </div>
  );
}

function PRISMADiagram({ data }: { data: any }) {
  return (
    <div className="p-8 h-full flex items-center justify-center">
      <div className="space-y-6 w-full max-w-md">
        {/* Identification */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-2 border-black p-4 text-center"
        >
          <div className="text-xs tracking-wider uppercase text-black/60 mb-2">Identification</div>
          <div className="text-2xl font-light">{data.identified.toLocaleString()}</div>
          <div className="text-xs text-black/60">Records identified</div>
        </motion.div>

        {/* Arrow */}
        <div className="flex justify-center">
          <div className="w-0.5 h-8 bg-black/20" />
        </div>

        {/* Screening with excluded */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="border-2 border-black p-4 text-center"
          >
            <div className="text-xs tracking-wider uppercase text-black/60 mb-2">Screening</div>
            <div className="text-2xl font-light">{data.screened.toLocaleString()}</div>
            <div className="text-xs text-black/60">Records screened</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute -right-48 top-1/2 -translate-y-1/2 border border-red-300 bg-red-50 p-3 text-xs w-40"
          >
            <div className="font-medium text-red-900">{data.excluded.toLocaleString()}</div>
            <div className="text-red-700">Excluded</div>
          </motion.div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center">
          <div className="w-0.5 h-8 bg-black/20" />
        </div>

        {/* Eligibility */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="border-2 border-black p-4 text-center"
          >
            <div className="text-xs tracking-wider uppercase text-black/60 mb-2">Eligibility</div>
            <div className="text-2xl font-light">{data.fullText.toLocaleString()}</div>
            <div className="text-xs text-black/60">Full-text assessed</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute -right-48 top-1/2 -translate-y-1/2 border border-red-300 bg-red-50 p-3 text-xs w-40"
          >
            <div className="font-medium text-red-900">{data.excludedFullText.toLocaleString()}</div>
            <div className="text-red-700">Excluded</div>
          </motion.div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center">
          <div className="w-0.5 h-8 bg-black/20" />
        </div>

        {/* Included */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="border-2 border-green-600 bg-green-50 p-4 text-center"
        >
          <div className="text-xs tracking-wider uppercase text-green-700 mb-2">Included</div>
          <div className="text-3xl font-light text-green-900">{data.included}</div>
          <div className="text-xs text-green-700">Studies in synthesis</div>
        </motion.div>
      </div>
    </div>
  );
}

function ForestPlotPlaceholder() {
  return (
    <div className="h-full flex items-center justify-center p-8">
      <div className="text-center">
        <div className="w-full h-64 border border-dashed border-black/20 flex items-center justify-center mb-4">
          <p className="text-xs text-black/40 tracking-wider">[Forest Plot Visualization]</p>
        </div>
        <p className="text-xs text-black/60">Effect size comparison across studies</p>
      </div>
    </div>
  );
}

function BubbleChartPlaceholder() {
  return (
    <div className="h-full flex items-center justify-center p-8">
      <div className="text-center">
        <div className="w-full h-64 border border-dashed border-black/20 flex items-center justify-center mb-4">
          <p className="text-xs text-black/40 tracking-wider">[Bubble Chart Visualization]</p>
        </div>
        <p className="text-xs text-black/60">Study distribution by year and citation count</p>
      </div>
    </div>
  );
}
