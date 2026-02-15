import { motion } from "framer-motion";
import { Leaf, Shield, CheckCircle2, Search } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";

const sections = [
  {
    icon: Leaf,
    title: "Sustainability Practices",
    description: "We integrate sustainable construction methods throughout our projects, minimizing environmental impact while maximizing efficiency and longevity.",
    points: [
      "Energy-efficient building designs",
      "Waste reduction and recycling programs",
      "Sustainable material sourcing",
      "Green building certifications compliance",
      "Carbon footprint monitoring",
    ],
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Our rigorous quality assurance protocols ensure every project meets the highest standards of structural integrity, safety, and finishing quality.",
    points: [
      "ISO-aligned quality management systems",
      "Third-party testing and verification",
      "Continuous monitoring throughout construction",
      "Documentation and traceability",
      "Post-completion quality audits",
    ],
  },
  {
    icon: CheckCircle2,
    title: "Material Standards",
    description: "We source and use only premium-grade materials that meet or exceed international construction standards, ensuring durability and performance.",
    points: [
      "Premium-grade concrete and steel",
      "International standard compliance",
      "Supplier vetting and certification",
      "Material testing protocols",
      "Traceability from source to site",
    ],
  },
  {
    icon: Search,
    title: "Inspection Process",
    description: "Our multi-stage inspection process covers every phase of construction, from foundation to finishing, ensuring zero-defect delivery.",
    points: [
      "Foundation and structural inspections",
      "MEP systems verification",
      "Finishing and fit-out reviews",
      "Safety compliance checks",
      "Final handover inspections",
    ],
  },
];

const Sustainability = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-32 md:py-44 bg-charcoal">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }} className="max-w-3xl">
            <p className="font-thin-label text-[11px] text-white/40 mb-6">Sustainability & Quality</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-white leading-[0.95] tracking-tight">
              Building Responsibly,<br />Delivering Excellence
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Sections */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          {sections.map((section, i) => (
            <SectionReveal key={section.title} delay={i * 80}>
              <div className={`py-12 md:py-16 ${i !== sections.length - 1 ? "border-b border-border" : ""}`}>
                <div className="flex items-start gap-6 md:gap-10">
                  <section.icon size={20} className="text-foreground/30 mt-1 shrink-0 hidden md:block" />
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-display font-black text-foreground mb-4 tracking-tight">{section.title}</h2>
                    <p className="text-foreground/60 leading-relaxed mb-8 max-w-2xl">{section.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {section.points.map((point) => (
                        <div key={point} className="flex items-center gap-3 text-sm text-foreground/70">
                          <div className="w-1 h-1 bg-foreground/40 shrink-0" />
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Sustainability;
