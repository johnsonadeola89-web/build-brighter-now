import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Building2, HardHat, Lightbulb } from "lucide-react";
import heroImg from "@/assets/hero-construction.jpg";
import zekkoImg from "@/assets/project-zekko.jpg";
import malibuImg from "@/assets/project-malibu.jpg";
import tinuolaImg from "@/assets/project-tinuola.jpg";
import atriumImg from "@/assets/project-atrium.jpg";
import AnimatedCounter from "@/components/AnimatedCounter";
import SectionReveal from "@/components/SectionReveal";

const services = [
  {
    icon: Building2,
    title: "Design & Engineering",
    desc: "Integrated architectural, structural, and MEP design solutions from concept to construction documents.",
  },
  {
    icon: HardHat,
    title: "Construction Delivery",
    desc: "Full-scope general contracting for high-rise, mid-rise, residential, and commercial projects.",
  },
  {
    icon: Lightbulb,
    title: "Technical Consulting",
    desc: "Feasibility studies, BOQ reviews, construction audits, and engineering-grade coordination.",
  },
];

const featuredProjects = [
  { name: "Zekko Hotel", location: "Ikeja GRA", type: "Hospitality", img: zekkoImg },
  { name: "Malibu Hills", location: "Abuja", type: "Luxury Estate", img: malibuImg },
  { name: "Tinuola Tower", location: "Banana Island", type: "14-Floor High-Rise", img: tinuolaImg },
  { name: "Atrium Homes", location: "Ikoyi", type: "5-Floor Residential", img: atriumImg },
];

const Index = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/80 via-navy-dark/60 to-navy-dark/90" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-6">
              High-Rise & Mid-Rise
              <br />
              <span className="text-gradient">Construction Experts</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 font-body">
              Committed to a Promise of Excellence — delivering world-class construction across Nigeria
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/portfolio"
                className="px-8 py-4 rounded-full bg-gold-gradient text-navy-dark font-semibold text-lg
                  transition-all duration-300 hover:shadow-[0_0_30px_hsl(45_92%_53%/0.5)] hover:scale-105"
              >
                View Our Work
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold text-lg
                  transition-all duration-300 hover:border-gold hover:text-gold"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center pt-2">
            <div className="w-1.5 h-3 rounded-full bg-gold" />
          </div>
        </motion.div>
      </section>

      {/* Kodai Promise */}
      <section className="bg-navy-gradient py-20">
        <div className="container mx-auto px-6">
          <SectionReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                The Kodai <span className="text-gradient">Promise</span>
              </h2>
              <p className="text-white/60 max-w-xl mx-auto">
                Every project comes with our ironclad commitment to quality and accountability
              </p>
            </div>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <AnimatedCounter end={3} suffix="-Year" label="Post-Delivery Support" description="Free maintenance & support after handover" />
            <AnimatedCounter end={10} suffix="-Year" label="Leakage Guarantee" description="Full waterproofing warranty coverage" />
            <AnimatedCounter end={30} suffix="-Year" label="Structural Guarantee" description="Foundation & structural integrity assurance" />
          </div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <SectionReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                What We <span className="text-gradient">Do</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                End-to-end construction delivery from concept to concrete
              </p>
            </div>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((service, i) => (
              <SectionReveal key={service.title} delay={i * 150}>
                <div className="group p-8 rounded-2xl border border-border bg-card hover:border-gold/50 
                  transition-all duration-500 hover:shadow-[0_0_40px_hsl(45_92%_53%/0.1)] hover:-translate-y-2">
                  <div className="w-14 h-14 rounded-xl bg-navy-gradient flex items-center justify-center mb-6
                    group-hover:shadow-[0_0_20px_hsl(45_92%_53%/0.3)] transition-all duration-500">
                    <service.icon size={24} className="text-gold" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.desc}</p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:gap-3 transition-all duration-300"
                  >
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-6">
          <SectionReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Featured <span className="text-gradient">Projects</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                A selection of landmark developments across Nigeria
              </p>
            </div>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {featuredProjects.map((project, i) => (
              <SectionReveal key={project.name} delay={i * 100}>
                <Link to="/portfolio" className="group relative block rounded-2xl overflow-hidden aspect-[4/3]">
                  <img
                    src={project.img}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-1">{project.type}</p>
                    <h3 className="text-xl font-display font-bold text-white mb-1">{project.name}</h3>
                    <p className="text-white/60 text-sm">{project.location}</p>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                      <ArrowRight size={16} className="text-navy-dark" />
                    </div>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
          <SectionReveal>
            <div className="text-center mt-12">
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-primary text-primary
                  font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                View All Projects <ArrowRight size={16} />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(45_92%_53%/0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(45_92%_53%/0.2),transparent_50%)]" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <SectionReveal>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Let's Build Something
              <br />
              <span className="text-gradient">That Lasts</span>
            </h2>
            <p className="text-white/60 max-w-xl mx-auto mb-10">
              Partner with Kodai Construction for your next landmark project. From vision to reality, we deliver excellence.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gold-gradient text-navy-dark 
                font-bold text-lg transition-all duration-300 hover:shadow-[0_0_40px_hsl(45_92%_53%/0.5)] hover:scale-105
                animate-glow-pulse"
            >
              Start Your Project <ArrowRight size={18} />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
};

export default Index;
