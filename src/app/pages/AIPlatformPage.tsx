import { Link } from "react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import {
  ArrowLeft,
  FileText,
  Upload,
  Search,
  FileCheck,
  Database,
  BarChart3,
  Lightbulb,
  PieChart,
  CheckCircle2,
  Circle,
  Play,
  ChevronRight
} from "lucide-react";
import ProtocolBuilder from "../components/ProtocolBuilder";
import CitationScreener from "../components/CitationScreener";
import DataExtractor from "../components/DataExtractor";
import DataVisualization from "../components/DataVisualization";

export default function AIPlatformPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const stages = [
    {
      id: "protocol",
      number: "01",
      title: "Protocol Development",
      description: "Define research questions, inclusion criteria, and search strategies with AI-assisted guidance",
      icon: FileText,
      features: ["PICO Framework Builder", "AI Question Refinement", "Search Strategy Generator"],
      color: "from-blue-50 to-white",
      component: ProtocolBuilder,
    },
    {
      id: "import",
      number: "02",
      title: "Import Bibliographic Files",
      description: "Seamlessly import and deduplicate references from multiple databases",
      icon: Upload,
      features: ["Multi-format Support", "Auto-deduplication", "Database Integration"],
      color: "from-purple-50 to-white",
      component: null,
    },
    {
      id: "citation",
      number: "03",
      title: "Citation Screening",
      description: "Efficiently screen titles and abstracts with AI-powered relevance prediction",
      icon: Search,
      features: ["AI Relevance Scoring", "Dual Review Mode", "Conflict Resolution"],
      color: "from-green-50 to-white",
      component: CitationScreener,
    },
    {
      id: "fulltext",
      number: "04",
      title: "Full-Text Screening",
      description: "Review complete articles with intelligent PDF annotation and extraction",
      icon: FileCheck,
      features: ["PDF Annotation", "Criteria Checklist", "AI Text Extraction"],
      color: "from-amber-50 to-white",
      component: null,
    },
    {
      id: "extraction",
      number: "05",
      title: "Data Extraction",
      description: "Extract and organize study characteristics using customizable forms",
      icon: Database,
      features: ["Custom Forms", "AI Field Detection", "Quality Assessment"],
      color: "from-red-50 to-white",
      component: DataExtractor,
    },
    {
      id: "analysis",
      number: "06",
      title: "Analysis",
      description: "Perform meta-analysis and statistical synthesis of extracted data",
      icon: BarChart3,
      features: ["Meta-Analysis Tools", "Forest Plots", "Heterogeneity Tests"],
      color: "from-indigo-50 to-white",
      component: null,
    },
    {
      id: "synthesis",
      number: "07",
      title: "Synthesis",
      description: "Generate narrative syntheses and thematic analyses with AI support",
      icon: Lightbulb,
      features: ["Theme Detection", "Evidence Mapping", "AI Synthesis Assistant"],
      color: "from-pink-50 to-white",
      component: null,
    },
    {
      id: "visualization",
      number: "08",
      title: "Data Presentation",
      description: "Create publication-ready visualizations and PRISMA diagrams",
      icon: PieChart,
      features: ["PRISMA Generator", "Interactive Charts", "Export Options"],
      color: "from-teal-50 to-white",
      component: DataVisualization,
    },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-black">
      {/* Fixed Header */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-black/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-sm hover:opacity-60 transition-opacity">
            <ArrowLeft className="w-4 h-4" />
            <span className="tracking-wider">Back to Portfolio</span>
          </Link>
          <div className="text-xs tracking-[0.2em] uppercase text-black/60">
            AI Systematic Review Platform
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl text-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-block p-6 border border-black/10 rounded-full mb-8">
              <Database className="w-16 h-16" strokeWidth={1} />
            </div>
          </motion.div>

          <h1 className="text-6xl md:text-8xl leading-[0.95] tracking-tight mb-8">
            AI-Enabled
            <br />
            Systematic Review
            <br />
            Platform
          </h1>

          <p className="text-lg md:text-xl max-w-3xl mx-auto text-black/70 leading-relaxed mb-12">
            A conceptual prototype demonstrating how artificial intelligence can streamline
            the systematic review process while maintaining methodological rigor and
            transparency.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center justify-center gap-4 text-xs tracking-wider"
          >
            <span className="text-black/60">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronRight className="w-4 h-4 rotate-90" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Platform Overview */}
      <section className="py-32 px-6 border-t border-black/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h2 className="text-xs tracking-[0.3em] uppercase text-black/60 mb-4">Overview</h2>
              <h3 className="text-5xl tracking-tight mb-6">Eight Integrated Stages</h3>
              <p className="text-black/70 leading-relaxed mb-8">
                This platform prototype integrates AI capabilities throughout the systematic
                review workflow, from protocol development to final visualization. Each stage
                is designed following evidence-based UX principles and informed by researcher
                needs identified through empirical studies.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-light mb-2">08</div>
                  <div className="text-sm text-black/60">Workflow Stages</div>
                </div>
                <div>
                  <div className="text-3xl font-light mb-2">AI</div>
                  <div className="text-sm text-black/60">Enhanced Process</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-black/5 to-black/10 flex items-center justify-center">
                <p className="text-xs text-black/40 tracking-wider">[Insert workflow diagram here]</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stage Details - Scroll-driven */}
      {stages.map((stage, index) => (
        <StageSection key={stage.id} stage={stage} index={index} />
      ))}

      {/* Call to Action */}
      <section className="py-32 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-4xl md:text-6xl tracking-tight mb-8">
              Interested in Learning More?
            </h3>
            <p className="text-lg text-white/70 mb-12 leading-relaxed">
              This prototype represents ongoing PhD research into AI-enhanced systematic
              review methodologies. Feedback and collaboration opportunities are welcome.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="px-8 py-4 bg-white text-black text-sm tracking-wider hover:bg-white/90 transition-colors">
                Contact Researcher
              </button>
              <Link
                to="/"
                className="px-8 py-4 border border-white/20 text-sm tracking-wider hover:border-white/40 transition-colors inline-block"
              >
                Back to Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

interface StageSectionProps {
  stage: {
    id: string;
    number: string;
    title: string;
    description: string;
    icon: React.ComponentType<any>;
    features: string[];
    color: string;
    component: React.ComponentType<any> | null;
  };
  index: number;
}

function StageSection({ stage, index }: StageSectionProps) {
  const [activeFeature, setActiveFeature] = useState(0);
  const Icon = stage.icon;
  const isEven = index % 2 === 0;

  return (
    <section className="py-32 px-6 border-t border-black/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center ${
            isEven ? "" : "md:flex-row-reverse"
          }`}
        >
          {/* Content */}
          <div className={isEven ? "" : "md:order-2"}>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-6xl font-light text-black/20">{stage.number}</span>
              <Icon className="w-10 h-10" strokeWidth={1.5} />
            </div>
            <h3 className="text-4xl md:text-5xl tracking-tight mb-4">{stage.title}</h3>
            <p className="text-lg text-black/70 leading-relaxed mb-8">
              {stage.description}
            </p>

            {/* Features List */}
            <div className="space-y-4">
              <h4 className="text-xs tracking-[0.3em] uppercase text-black/60 mb-4">
                Key Features
              </h4>
              {stage.features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-3 group cursor-pointer"
                  onClick={() => setActiveFeature(idx)}
                  onMouseEnter={() => setActiveFeature(idx)}
                >
                  {activeFeature === idx ? (
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <Circle className="w-5 h-5 flex-shrink-0 opacity-30" />
                  )}
                  <span className={`text-sm ${activeFeature === idx ? "opacity-100" : "opacity-60"} transition-opacity`}>
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Interaction Hint */}
            <motion.button
              className="mt-8 flex items-center gap-2 text-sm tracking-wider border-b border-black/20 pb-1 hover:border-black/60 transition-colors group"
              whileHover={{ x: 4 }}
            >
              <Play className="w-4 h-4" />
              <span>Interact with prototype</span>
              <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          </div>

          {/* Interactive Demo Area */}
          <div className={isEven ? "" : "md:order-1"}>
            <motion.div
              className={`relative aspect-[4/3] bg-gradient-to-br ${stage.color} border border-black/10 overflow-hidden`}
              whileHover={{ scale: stage.component ? 1.02 : 1 }}
              transition={{ duration: 0.3 }}
            >
              {stage.component ? (
                <stage.component />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Icon className="w-16 h-16 mx-auto mb-4 opacity-20" strokeWidth={1} />
                    <p className="text-xs text-black/40 tracking-wider mb-2">
                      [Interactive {stage.title} Component]
                    </p>
                    <p className="text-xs text-black/30">
                      Feature: {stage.features[activeFeature]}
                    </p>
                  </div>

                  {/* Decorative Elements */}
                  <motion.div
                    className="absolute top-4 right-4 w-2 h-2 bg-black/20 rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute bottom-4 left-4 w-3 h-3 border border-black/20 rotate-45"
                    animate={{ rotate: [45, 90, 45] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </div>
              )}
            </motion.div>

            {/* Stage Number Indicator */}
            <div className="mt-4 flex items-center gap-2">
              {[...Array(8)].map((_, idx) => (
                <div
                  key={idx}
                  className={`h-0.5 flex-1 ${
                    idx === index ? "bg-black" : "bg-black/10"
                  } transition-all duration-500`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
