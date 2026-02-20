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
  img: string;
  description: string;
  features: string[];
}

const projects: Project[] = [
  {
    name: "Tinuola Tower", location: "Banana Island, Lagos", type: "14-Floor Luxury High-Rise",
    category: ["Residential", "High-Rise"], status: "In Progress", img: tinuolaImg,
    description: "A 14-floor luxury residential tower on the prestigious Banana Island, featuring panoramic waterfront views, premium finishes, and world-class amenities.",
    features: ["14 floors of luxury apartments", "Waterfront location", "Smart home integration", "Rooftop infinity pool"],
  },
  {
    name: "Malibu Hills", location: "Abuja", type: "Luxury Estate",
    category: ["Residential"], status: "In Progress", img: malibuImg,
    description: "An exclusive luxury estate in Abuja featuring contemporary villas with modern architecture, landscaped gardens, and premium community amenities.",
    features: ["Gated luxury community", "Contemporary villa designs", "Landscaped gardens", "Community clubhouse"],
  },
  {
    name: "Zekko Hotel", location: "Ikeja GRA, Lagos", type: "6-Floor Hospitality",
    category: ["Commercial"], status: "In Progress", img: zekkoImg,
    description: "A 6-floor boutique hotel in Ikeja GRA combining modern hospitality design with Nigerian cultural elements and premium guest experiences.",
    features: ["6-floor boutique hotel", "Conference facilities", "Restaurant & lounge", "Premium room suites"],
  },
  {
    name: "Atrium Homes", location: "Ikoyi, Lagos", type: "5-Floor Residential",
    category: ["Residential"], status: "In Progress", img: atriumImg,
    description: "A 5-floor luxury residential development in the heart of Ikoyi, featuring spacious apartments with modern finishes and dedicated parking.",
    features: ["5 floors of luxury units", "Prime Ikoyi location", "Underground parking", "Rooftop terrace"],
  },
  {
    name: "Dahlia Court", location: "Lagos", type: "18-Floor Luxury Residential",
    category: ["Residential", "High-Rise"], status: "Ongoing", img: dahliaImg,
    description: "An 18-floor luxury residential tower setting new standards for high-rise living in Lagos with panoramic city views and world-class amenities.",
    features: ["18 floors", "Panoramic views", "Gym & spa", "Concierge services"],
  },
  {
    name: "Autobiography", location: "Victoria Island, Lagos", type: "18-Floor Luxury",
    category: ["Residential", "High-Rise"], status: "Ongoing", img: autobiographyImg,
    description: "An iconic 18-floor luxury development on Victoria Island, designed to be a landmark of contemporary architecture and refined living.",
    features: ["18 floors", "Iconic design", "Victoria Island waterfront", "Premium amenities"],
  },
  {
    name: "Owerri Villa", location: "Owerri", type: "Luxury Villa",
    category: ["Residential"], status: "Completed", img: owerriImg,
    description: "A stunning luxury villa in Owerri showcasing the finest in residential design with expansive living spaces and lush outdoor areas.",
    features: ["Custom luxury design", "Expansive grounds", "Smart home systems", "Premium finishes"],
  },
  {
    name: "Rice Mill", location: "Epe, Lagos", type: "Industrial Facility",
    category: ["Industrial"], status: "Completed", img: ricemillImg,
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

const filters = ["All", "Residential", "Commercial", "Industrial", "High-Rise", "Ongoing", "Completed"];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const filtered = activeFilter === "All"
    ? projects
    : ["Ongoing", "Completed"].includes(activeFilter)
      ? projects.filter((p) => p.status === (activeFilter === "Ongoing" ? "In Progress" : activeFilter))
      : projects.filter((p) => p.category.includes(activeFilter));

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

      {/* Filter & Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-2 mb-12">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2 text-xs font-semibold uppercase tracking-wide transition-all duration-300 ${
                  activeFilter === f
                    ? "bg-navy text-white shadow-[0_0_15px_hsl(var(--navy)/0.3)]"
                    : "border border-border text-muted-foreground hover:border-navy hover:text-navy"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {filtered.map((project, i) => (
              <SectionReveal key={project.name} delay={i * 60}>
                <div
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer relative overflow-hidden aspect-[4/3]"
                >
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
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <ArrowUpRight size={20} className="text-gold" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-[10px] font-semibold uppercase tracking-wide ${
                      project.status === "Completed" ? "bg-gold/80 text-navy" : "bg-white/10 text-white/70"
                    }`}>
                      {project.status}
                    </span>
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
              <div className="relative aspect-video">
                <img src={selectedProject.img} alt={selectedProject.name} className="w-full h-full object-cover" />
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
                <div className="flex items-center gap-1 text-muted-foreground text-sm mb-6">
                  <MapPin size={14} /> {selectedProject.location}
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
