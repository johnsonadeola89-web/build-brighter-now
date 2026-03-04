import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, ArrowRight, ArrowUpRight } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import heroPortfolio from "@/assets/hero-portfolio.jpg";
import zekkoImg from "@/assets/project-zekko.jpg";
import malibuImg from "@/assets/project-malibu.jpg";
import tinuolaImg from "@/assets/project-tinuola.jpg";
import atriumImg from "@/assets/project-atrium.jpg";
import ricemillImg from "@/assets/project-ricemill.jpg";
import owerriImg from "@/assets/project-overriding-villa.jpg";
import dahliaImg from "@/assets/project-dahlia.jpg";
import autobiographyImg from "@/assets/project-autobiography.jpg";

interface Project {
  name: string;
  location: string;
  type: string;
  category: string[];
  status: string;
  scope: string;
  img: string;
  description: string;
  features: string[];
}

const projects: Project[] = [
  {
    name: "Autobiography Residences", location: "Dideolu Estate, Victoria Island, Lagos", type: "G+8 Floors",
    category: ["Under Construction"], status: "Under Construction", scope: "Design & Build", img: autobiographyImg,
    description: "Three residential towers on Victoria Island featuring 8 floors of luxury apartments, penthouses, and world-class amenities in a secured development.",
    features: ["Three residential towers", "1, 2 & 3-Bedroom apartments", "Penthouses", "Swimming pool & cabana", "Rooftop luxury spaces"],
  },
  {
    name: "Dahlia Court", location: "Lagos", type: "G+18 Floors",
    category: ["Under Construction"], status: "Under Construction", scope: "Design & Build", img: dahliaImg,
    description: "A G+18 floor luxury residential tower setting new standards for high-rise living in Lagos with panoramic city views and world-class amenities.",
    features: ["G+18 floors", "Panoramic views", "Gym & spa", "Concierge services"],
  },
  {
    name: "Tinuola Towers", location: "Banana Island, Lagos", type: "G+14 Floors",
    category: ["Under Construction"], status: "Under Construction", scope: "Design & Build", img: tinuolaImg,
    description: "A G+14 floor luxury residential tower on the prestigious Banana Island, featuring 38 units with a curvilinear wave-form façade, double-height concierge lobby, and resort-style amenities.",
    features: ["38 luxury residential units", "3 & 4-Bedroom apartments & maisonettes", "Curvilinear façade design", "Swimming pool & fitness center", "Café & residents lounge"],
  },
  {
    name: "Atrium Homes Residences", location: "Adeyemi Lawson, Ikoyi, Lagos", type: "G+5 Floors",
    category: ["Design / Consulting"], status: "Design / Consulting", scope: "Design & Build", img: atriumImg,
    description: "A luxury residential development in the heart of Ikoyi featuring 4-bedroom maisonettes, duplex penthouses, private lifts, and premium finishes.",
    features: ["4-Bedroom maisonettes & duplex penthouses", "Private lift per residence", "2 BQ per unit", "Structured parking", "Premium interior finishes"],
  },
  {
    name: "Zekko Hotel", location: "Oduduwa Way, Ikeja GRA, Lagos", type: "Boutique Hotel",
    category: ["Design / Consulting"], status: "Design / Consulting", scope: "Engineering Advisory", img: zekkoImg,
    description: "A boutique hotel in Ikeja GRA featuring diverse suite categories, rooftop dining, spa & wellness facilities, and a multipurpose event hall.",
    features: ["Standard to executive suites", "Rooftop VIP & outdoor restaurants", "Spa, wellness & gym", "Multipurpose event hall"],
  },
  {
    name: "Malibu Hills", location: "Asokoro, Abuja", type: "Luxury Estate",
    category: ["Design / Consulting"], status: "Design / Consulting", scope: "Engineering Advisory", img: malibuImg,
    description: "A landscape-driven luxury estate in Asokoro, Abuja featuring villas, apartments, and penthouses with resort-style amenities and lifestyle facilities.",
    features: ["Villas, apartments & penthouses", "Spa, hammam & yoga garden", "Tennis & basketball courts", "Eco play park & event lawn", "Restaurants & lifestyle facilities"],
  },
  {
    name: "Owerri Villa", location: "Owerri", type: "G+2 Floors",
    category: ["Design Only"], status: "Design Only", scope: "Design Only", img: owerriImg,
    description: "A stunning G+2 luxury villa in Owerri showcasing the finest in residential design with expansive living spaces and lush outdoor areas.",
    features: ["G+2 floors", "Custom luxury design", "Expansive grounds", "Smart home systems", "Premium finishes"],
  },
  {
    name: "Rice Mill", location: "Epe, Lagos", type: "Industrial Facility",
    category: ["Design Only"], status: "Design Only", scope: "Design Only", img: ricemillImg,
    description: "A modern industrial rice processing facility in Epe, built to international standards with efficient production line layouts.",
    features: ["Industrial-grade construction", "Production line optimization", "Storage facilities", "Administrative offices"],
  },
];

const teamProjects = [
  "A&A Tower — High-rise residential",
  "Phoenix Tower — Mixed-use development",
  "The Address — Luxury residential",
  "Bloom Towers — Twin tower residential",
  "Blue Waters — Waterfront development",
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-32 md:py-44">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroPortfolio})` }}
        />
        <div className="absolute inset-0 bg-navy/75" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }} className="max-w-3xl">
            <p className="font-thin-label text-[11px] text-gold/60 mb-6">Portfolio</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-white leading-[0.95] tracking-tight">
              Our Work Speaks<br />for Itself
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 max-w-5xl mx-auto">
            {projects.map((project, i) => (
              <SectionReveal key={project.name} delay={i * 60}>
                <div
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer relative overflow-hidden"
                >
                  <img
                    src={project.img}
                    alt={project.name}
                    loading="lazy"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                  {/* Category tag */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 text-[10px] font-semibold uppercase tracking-wider bg-navy/70 text-gold backdrop-blur-sm border border-gold/20">
                      {project.status}
                    </span>
                  </div>

                  {/* Expand icon */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <ArrowUpRight size={20} className="text-gold" />
                  </div>

                  {/* Project info */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-gold/70 text-[10px] uppercase tracking-[0.2em] mb-1">{project.type}</p>
                    <h3 className="text-white text-lg font-display font-bold leading-tight">{project.name}</h3>
                    <p className="text-white/50 text-sm mt-0.5">{project.location}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Projects */}
      <section className="py-16 bg-light-bg">
        <div className="container mx-auto px-6 max-w-3xl">
          <SectionReveal>
            <p className="font-thin-label text-[11px] text-muted-foreground mb-4">Track Record</p>
            <h2 className="text-2xl md:text-3xl font-display font-black text-foreground mb-8 tracking-tight">
              Projects by Our Team
            </h2>
            <div className="space-y-2">
              {teamProjects.map((p) => (
                <div key={p} className="flex items-center gap-3 py-3 border-b border-border last:border-0">
                  <ArrowRight size={12} className="text-navy/40 shrink-0" />
                  <span className="text-foreground/80 text-sm">{p}</span>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-navy/70 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-background max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <div className="relative">
                <img src={selectedProject.img} alt={selectedProject.name} className="w-full h-auto object-contain" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-navy/50 text-white hover:bg-navy/70 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="p-8">
                <p className="font-thin-label text-[10px] text-gold mb-2">{selectedProject.type}</p>
                <h2 className="text-2xl font-display font-black text-foreground mb-2 tracking-tight">{selectedProject.name}</h2>
                <div className="flex items-center gap-1 text-muted-foreground text-sm mb-4">
                  <MapPin size={14} /> {selectedProject.location}
                </div>
                <div className="flex flex-wrap gap-3 mb-6">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-semibold uppercase tracking-wide text-navy">Status:</span>
                    <span className="text-foreground/70">{selectedProject.status}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-semibold uppercase tracking-wide text-navy">Scope:</span>
                    <span className="text-foreground/70">{selectedProject.scope}</span>
                  </div>
                </div>
                <p className="text-foreground/70 leading-relaxed mb-8">{selectedProject.description}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-navy mb-4">Key Features</p>
                <div className="grid grid-cols-2 gap-3">
                  {selectedProject.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-foreground/70">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;