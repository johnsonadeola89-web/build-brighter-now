import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4";
import promiseBg from "@/assets/kodai-promise-bg.jpg";
import zekkoImg from "@/assets/project-zekko.jpg";
import malibuImg from "@/assets/project-malibu.jpg";
import tinuolaImg from "@/assets/project-tinuola.jpg";
import atriumImg from "@/assets/project-atrium.jpg";
import autobiographyImg from "@/assets/project-autobiography.jpg";
import dahliaImg from "@/assets/project-dahlia.jpg";
import ricemillImg from "@/assets/project-ricemill.jpg";
import owerriImg from "@/assets/project-overriding-villa.jpg";
import AnimatedCounter from "@/components/AnimatedCounter";
import SectionReveal from "@/components/SectionReveal";

const services = [
  {
    title: "Integrated Design & Engineering",
    desc: "Architectural, structural, and MEP design from concept through construction documents.",
  },
  {
    title: "Construction Delivery",
    desc: "Full-scope general contracting for high-rise, mid-rise, residential, and commercial projects.",
  },
  {
    title: "Technical Consulting",
    desc: "Feasibility studies, BOQ reviews, construction audits, and engineering-grade coordination.",
  },
  {
    title: "Engineering-Grade Coordination",
    desc: "MEP integration, smart building systems, and sustainable energy efficiency solutions.",
  },
];

const featuredProjects = [
  { name: "Malibu Hills", location: "Abuja", type: "Luxury Estate", img: malibuImg },
  { name: "Tinuola Tower", location: "Banana Island", type: "14-Floor High-Rise", img: tinuolaImg },
  { name: "Zekko Hotel", location: "Ikeja GRA", type: "6-Floor Hospitality", img: zekkoImg },
  { name: "Rice Mill", location: "Epe", type: "Industrial Facility", img: ricemillImg },
  { name: "Owerri Villa", location: "Owerri", type: "Luxury Villa", img: owerriImg },
];

const Index = () => {
  return (
    <div className="overflow-hidden">
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-end pb-24 md:pb-32">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src={heroVideo}
        />
        <div className="absolute inset-0 bg-navy/60" />

        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.6, duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white leading-[0.95] mb-6 tracking-tight">
              High-Rise &<br />Mid-Rise<br />Construction Experts
            </h1>
            <p className="text-base md:text-lg text-white/60 max-w-lg mb-10 font-body leading-relaxed">
              Making the Impossible Possible — delivering world-class construction across Nigeria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/portfolio"
                className="px-8 py-4 text-sm font-semibold uppercase tracking-wide bg-gold text-navy
                  transition-all duration-400 hover:bg-gold-light hover:shadow-[0_0_20px_hsl(var(--gold)/0.4)]"
              >
                View Projects
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 text-sm font-semibold uppercase tracking-wide border border-white/40 text-white
                  transition-all duration-400 hover:bg-white hover:text-navy hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                Request Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Authority Overview ── */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <SectionReveal>
              <p className="font-thin-label text-[11px] text-muted-foreground mb-6">About Kodai</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-foreground leading-[1.05] mb-8 tracking-tight">
                Building with technical precision and structured delivery.
              </h2>
              <p className="text-foreground/70 text-lg leading-relaxed mb-6">
                Kodai Construction is a premium construction firm specializing in high-rise and mid-rise building construction across Nigeria. Our integrated approach combines design, engineering, and construction under one roof — ensuring seamless delivery from concept to completion.
              </p>
              <p className="text-foreground/70 text-lg leading-relaxed">
                With the Kodai Promise — industry-leading post-construction guarantees — every project comes with our ironclad commitment to quality and accountability.
              </p>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ── Kodai Promise (Animated Counters) ── */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${promiseBg})` }}
        />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="container mx-auto px-6 relative z-10">
          <SectionReveal>
            <p className="font-thin-label text-[11px] text-gold/60 text-center mb-6">The Kodai Promise</p>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 max-w-4xl mx-auto mt-8">
            <AnimatedCounter end={3} suffix=" Years" label="Post-Construction Support" description="Free maintenance & support after handover" />
            <AnimatedCounter end={10} suffix=" Years" label="Leakage Guarantee" description="Full waterproofing warranty coverage" />
            <AnimatedCounter end={30} suffix=" Years" label="Structural Guarantee" description="Foundation & structural integrity assurance" />
          </div>
        </div>
      </section>

      {/* ── Services Snapshot ── */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <SectionReveal>
            <p className="font-thin-label text-[11px] text-muted-foreground mb-6">Our Services</p>
            <h2 className="text-3xl md:text-4xl font-display font-black text-foreground mb-16 tracking-tight">
              What We Do
            </h2>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border max-w-5xl mx-auto border border-border">
            {services.map((service, i) => (
              <SectionReveal key={service.title} delay={i * 100}>
                <div className="group p-8 md:p-10 bg-background hover:bg-navy transition-all duration-400 h-full">
                  <p className="font-thin-label text-[10px] text-navy/40 group-hover:text-white/40 mb-4 transition-colors duration-400">0{i + 1}</p>
                  <h3 className="text-lg md:text-xl font-display font-bold text-foreground group-hover:text-gold mb-3 tracking-tight transition-colors duration-400">{service.title}</h3>
                  <p className="text-sm text-foreground/60 group-hover:text-white/80 leading-relaxed mb-6 transition-colors duration-400">{service.desc}</p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-navy group-hover:text-white
                      opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    Learn More <ArrowRight size={12} />
                  </Link>
                </div>
              </SectionReveal>
            ))}
          </div>
          <SectionReveal>
            <div className="text-center mt-12">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold uppercase tracking-wide
                  border-2 border-navy text-navy hover:bg-gold hover:border-gold hover:text-navy hover:shadow-[0_0_20px_hsl(var(--gold)/0.3)] transition-all duration-300"
              >
                See Full Services <ArrowRight size={14} />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section className="py-24 md:py-32 bg-light-bg">
        <div className="container mx-auto px-6">
          <SectionReveal>
            <p className="font-thin-label text-[11px] text-muted-foreground mb-6">Selected Work</p>
            <h2 className="text-3xl md:text-4xl font-display font-black text-foreground mb-16 tracking-tight">
              Featured Projects
            </h2>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {featuredProjects.map((project, i) => (
              <SectionReveal key={project.name} delay={i * 80}>
                <Link to="/portfolio" className="group relative block overflow-hidden aspect-[4/3]">
                  <img
                    src={project.img}
                    alt={project.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/60 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                    <p className="text-white/0 group-hover:text-gold/80 text-xs uppercase tracking-widest mb-1 transition-colors duration-400">{project.type}</p>
                    <h3 className="text-white/0 group-hover:text-white text-lg font-display font-bold transition-colors duration-400">{project.name}</h3>
                    <p className="text-white/0 group-hover:text-white/50 text-sm transition-colors duration-400">{project.location}</p>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                    <ArrowUpRight size={20} className="text-gold" />
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
          <SectionReveal>
            <div className="text-center mt-12">
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold uppercase tracking-wide
                  bg-navy text-white hover:bg-gold hover:text-navy hover:shadow-[0_0_20px_hsl(var(--gold)/0.3)] transition-all duration-300"
              >
                View Full Portfolio <ArrowRight size={14} />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── Instagram Feed ── */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <SectionReveal>
            <p className="font-thin-label text-[11px] text-muted-foreground mb-6">Follow Along</p>
            <h2 className="text-3xl md:text-4xl font-display font-black text-foreground mb-16 tracking-tight">
              Inside the Build
            </h2>
          </SectionReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-w-4xl mx-auto">
            {[zekkoImg, autobiographyImg, malibuImg, tinuolaImg, atriumImg, dahliaImg].map((img, i) => (
              <SectionReveal key={i} delay={i * 60}>
                <a
                  href="https://www.instagram.com/kodaiconstruction/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block overflow-hidden aspect-square"
                >
                  <img
                    src={img}
                    alt={`Kodai Construction site ${i + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/50 transition-all duration-400 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </div>
                </a>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-24 md:py-32 bg-navy">
        <div className="container mx-auto px-6 text-center">
          <SectionReveal>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-white leading-[1.05] mb-4 tracking-tight">
              Let's Build Something<br />That Lasts
            </h2>
            <p className="text-gold/60 text-sm font-thin-label tracking-[0.15em] mb-10">Making the Impossible Possible</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-4 text-sm font-semibold uppercase tracking-wide
                bg-gold text-navy hover:bg-gold-light hover:shadow-[0_0_25px_hsl(var(--gold)/0.4)] transition-all duration-300"
            >
              Start Your Project <ArrowRight size={16} />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
};

export default Index;
