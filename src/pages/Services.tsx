import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Building2, HardHat, Lightbulb, Wrench, CheckCircle2 } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";

const services = [
  {
    icon: Building2,
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
    icon: HardHat,
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
    icon: Lightbulb,
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
    icon: Wrench,
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
];

const Services = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-32 md:py-40 bg-navy-gradient">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(45_92%_53%/0.1),transparent_60%)]" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">Our Services</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
              Complete Construction Delivery,
              <br />
              <span className="text-gradient">From Concept to Concrete</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              We offer a comprehensive suite of construction services to bring your vision to life — on time, on budget, and beyond expectations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-16">
            {services.map((service, i) => (
              <SectionReveal key={service.title} delay={i * 100}>
                <div className="group p-8 md:p-12 rounded-2xl border border-border bg-card 
                  hover:border-gold/30 transition-all duration-500 hover:shadow-[0_0_50px_hsl(45_92%_53%/0.08)]">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-xl bg-navy-gradient flex items-center justify-center shrink-0
                      group-hover:shadow-[0_0_25px_hsl(45_92%_53%/0.3)] transition-all duration-500">
                      <service.icon size={28} className="text-gold" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-2">{service.subtitle}</p>
                      <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">{service.title}</h2>
                      <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2 text-sm text-foreground/80">
                            <CheckCircle2 size={14} className="text-gold shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-gradient">
        <div className="container mx-auto px-6 text-center">
          <SectionReveal>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Ready to Start <span className="text-gradient">Your Project?</span>
            </h2>
            <p className="text-white/60 max-w-lg mx-auto mb-8">
              Let's discuss how Kodai can deliver your vision with precision and excellence.
            </p>
            <Link
              to="/contact"
              className="inline-flex px-10 py-4 rounded-full bg-gold-gradient text-navy-dark font-bold text-lg
                transition-all duration-300 hover:shadow-[0_0_30px_hsl(45_92%_53%/0.5)] hover:scale-105"
            >
              Get a Quote
            </Link>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
};

export default Services;
