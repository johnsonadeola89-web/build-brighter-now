import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import heroServices from "@/assets/hero-services.jpg";

const services = [
  {
    num: "01",
    title: "Integrated Design & Build",
    subtitle: "Architectural, Structural, MEP Design",
    description: "Our in-house design team delivers fully coordinated architectural, structural, and MEP design packages. We manage the entire design process from schematic design through construction documents.",
    features: [
      "Full architectural design and visualization",
      "Structural engineering and analysis",
      "MEP systems design and coordination",
      "BIM modeling and clash detection",
      "Regulatory compliance and approvals",
    ],
  },
  {
    num: "02",
    title: "General Construction Contracting",
    subtitle: "Site Development, High-Rise Builds, Finishing",
    description: "As a full-service general contractor, we manage every aspect of construction delivery — from groundbreaking to handover — with strict adherence to quality, safety, and timeline commitments.",
    features: [
      "Site preparation and foundation works",
      "Reinforced concrete and steel structures",
      "High-rise and mid-rise construction",
      "Interior finishing and fit-out",
      "External works and landscaping",
    ],
  },
  {
    num: "03",
    title: "Construction & Technical Consulting",
    subtitle: "Feasibility, BOQ Reviews, Audits",
    description: "Our consulting team provides expert guidance on construction feasibility, cost optimization, and technical reviews to ensure your project is set up for success from day one.",
    features: [
      "Project feasibility assessments",
      "Bill of Quantities preparation and review",
      "Construction methodology planning",
      "Independent technical audits",
      "Value engineering solutions",
    ],
  },
  {
    num: "04",
    title: "Engineering-Grade Coordination",
    subtitle: "MEP Integration, Smart Systems, Energy Efficiency",
    description: "We bring engineering precision to every project through advanced MEP integration, smart building systems, and sustainable design practices that maximize efficiency and comfort.",
    features: [
      "Integrated MEP coordination",
      "Smart building automation systems",
      "Energy-efficient design solutions",
      "Sustainable construction practices",
      "Quality assurance and testing",
    ],
  },
  {
    num: "05",
    title: "Facility Management",
    subtitle: "Post-Construction Operations & Asset Performance",
    description: "Our involvement extends beyond construction. We provide structured facility management services that protect asset value, optimize performance, and ensure operational continuity.",
    features: [
      "Preventive maintenance programs",
      "Structural monitoring",
      "MEP systems management",
      "Operational performance reviews",
      "Long-term asset protection strategy",
    ],
  },
];

const Services = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-32 md:py-44">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroServices})` }}
        />
        <div className="absolute inset-0 bg-navy/75" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="max-w-3xl"
          >
            <p className="font-thin-label text-[11px] text-gold/60 mb-6">Our Services</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-white leading-[0.95] tracking-tight">
              Complete Construction Delivery, From Concept to Concrete
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {services.map((service, i) => (
              <SectionReveal key={service.title} delay={i * 80}>
                <div className={`py-12 md:py-16 ${i !== services.length - 1 ? "border-b border-border" : ""}`}>
                  <div className="flex items-start gap-6 md:gap-10">
                    <span className="font-thin-label text-[11px] text-navy/30 pt-2 hidden md:block">{service.num}</span>
                    <div className="flex-1">
                      <p className="font-thin-label text-[10px] text-muted-foreground mb-3">{service.subtitle}</p>
                      <h2 className="text-2xl md:text-3xl font-display font-black text-foreground mb-4 tracking-tight">{service.title}</h2>
                      <p className="text-foreground/60 leading-relaxed mb-8 max-w-2xl">{service.description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-3 text-sm text-foreground/80">
                            <CheckCircle2 size={14} className="text-gold shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-navy
                          hover:text-gold hover:gap-3 transition-all duration-300"
                      >
                        {service.title === "Facility Management" ? "Discuss Facility Management" : "Discuss Your Project"} <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy">
        <div className="container mx-auto px-6 text-center">
          <SectionReveal>
            <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-6 tracking-tight">
              Ready to Start Your Project?
            </h2>
            <p className="text-white/50 max-w-lg mx-auto mb-10">
              Let's discuss how Kodai can deliver your vision with precision and excellence.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 text-sm font-semibold uppercase tracking-wide
                bg-gold text-navy hover:bg-gold-light hover:shadow-[0_0_25px_hsl(var(--gold)/0.4)] transition-all duration-300"
            >
              Get a Quote <ArrowRight size={14} />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
};

export default Services;