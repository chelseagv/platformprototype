import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, FileText, BookOpen, FlaskConical, Shapes, Bot } from "lucide-react";

export default function LandingPage() {
  const researchPhases = [
    {
      id: "proposal",
      title: "Research Proposal",
      description: "Initial research questions, objectives, and methodology",
      icon: FileText,
      status: "Coming Soon",
      link: null,
    },
    {
      id: "scoping",
      title: "Scoping Review",
      description: "Comprehensive literature mapping and knowledge synthesis",
      icon: BookOpen,
      status: "Coming Soon",
      link: null,
    },
    {
      id: "empirical",
      title: "Empirical Studies",
      description: "Primary research and data collection activities",
      icon: FlaskConical,
      status: "Coming Soon",
      link: null,
    },
    {
      id: "framework",
      title: "Proposed Framework",
      description: "Theoretical contributions and practical implications",
      icon: Shapes,
      status: "Coming Soon",
      link: null,
    },
    {
      id: "ai-platform",
      title: "AI Systematic Review Platform",
      description: "Interactive prototype for AI-enabled systematic literature reviews",
      icon: Bot,
      status: "View Prototype",
      link: "/ai-platform",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-black/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-sm tracking-[0.2em] uppercase">UX Research Portfolio</h1>
              <p className="text-xs text-black/60 mt-1">PhD Student</p>
            </div>
            <nav className="flex gap-8 text-xs tracking-wider">
              <a href="#work" className="hover:opacity-60 transition-opacity">Work</a>
              <a href="#about" className="hover:opacity-60 transition-opacity">About</a>
              <a href="#contact" className="hover:opacity-60 transition-opacity">Contact</a>
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="pt-40 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2 className="text-7xl md:text-9xl leading-[0.9] tracking-tight mb-8">
              Designing
              <br />
              the Future of
              <br />
              Research
            </h2>
            <p className="text-lg md:text-xl max-w-2xl text-black/70 leading-relaxed">
              Exploring how AI and human-centered design can transform
              the systematic review process and advance evidence-based research.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research Phases Grid */}
      <section id="work" className="py-20 px-6 bg-black/[0.02]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h3 className="text-xs tracking-[0.3em] uppercase text-black/60 mb-2">Research Journey</h3>
            <p className="text-4xl md:text-5xl tracking-tight">Phases & Artifacts</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchPhases.map((phase, index) => {
              const Icon = phase.icon;
              const isActive = phase.link !== null;

              return (
                <motion.div
                  key={phase.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {isActive ? (
                    <Link to={phase.link} className="block group">
                      <div className="border border-black/10 bg-white p-8 hover:border-black/30 transition-all duration-500 hover:shadow-lg">
                        <div className="flex items-start justify-between mb-6">
                          <Icon className="w-8 h-8" strokeWidth={1.5} />
                          <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                        </div>
                        <h4 className="text-2xl tracking-tight mb-3">{phase.title}</h4>
                        <p className="text-sm text-black/60 leading-relaxed mb-4">
                          {phase.description}
                        </p>
                        <span className="inline-block text-xs tracking-wider uppercase border-b border-black pb-1">
                          {phase.status}
                        </span>
                      </div>
                    </Link>
                  ) : (
                    <div className="border border-black/10 bg-white p-8 opacity-60">
                      <div className="flex items-start justify-between mb-6">
                        <Icon className="w-8 h-8" strokeWidth={1.5} />
                      </div>
                      <h4 className="text-2xl tracking-tight mb-3">{phase.title}</h4>
                      <p className="text-sm text-black/60 leading-relaxed mb-4">
                        {phase.description}
                      </p>
                      <span className="inline-block text-xs tracking-wider uppercase text-black/40">
                        {phase.status}
                      </span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-black/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h5 className="text-xs tracking-[0.2em] uppercase mb-4">About This Research</h5>
              <p className="text-sm text-black/70 leading-relaxed">
                This portfolio documents a PhD research journey exploring the intersection
                of AI, UX design, and systematic literature reviews.
              </p>
            </div>
            <div>
              <h5 className="text-xs tracking-[0.2em] uppercase mb-4">Contact</h5>
              <p className="text-sm text-black/70">[Your Email]</p>
              <p className="text-sm text-black/70">[Your Institution]</p>
            </div>
            <div>
              <h5 className="text-xs tracking-[0.2em] uppercase mb-4">Links</h5>
              <div className="flex flex-col gap-2">
                <a href="#" className="text-sm text-black/70 hover:text-black transition-colors">[ORCID]</a>
                <a href="#" className="text-sm text-black/70 hover:text-black transition-colors">[Google Scholar]</a>
                <a href="#" className="text-sm text-black/70 hover:text-black transition-colors">[ResearchGate]</a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-black/10 text-center">
            <p className="text-xs text-black/50">© 2026 — UX Research Portfolio</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
