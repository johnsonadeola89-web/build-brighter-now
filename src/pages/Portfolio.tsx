import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, ArrowRight } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import zekkoImg from "@/assets/project-zekko.jpg";
import malibuImg from "@/assets/project-malibu.jpg";
import tinuolaImg from "@/assets/project-tinuola.jpg";
import atriumImg from "@/assets/project-atrium.jpg";

interface Project {
  name: string;
  location: string;
  type: string;
  category: string;
  status: string;
  img: string;
  description: string;
  features: string[];
}

const projects: Project[] = [
  {
    name: "Tinuola Tower", location: "Banana Island, Lagos", type: "14-Floor Luxury High-Rise",
    category: "Residential", status: "In Progress", img: tinuolaImg,
    description: "A 14-floor luxury residential tower on the prestigious Banana Island, featuring panoramic waterfront views, premium finishes, and world-class amenities.",
    features: ["14 floors of luxury apartments", "Waterfront location", "Smart home integration", "Rooftop infinity pool"],
  },
  {
    name: "Malibu Hills", location: "Abuja", type: "Luxury Estate",
    category: "Residential", status: "In Progress", img: malibuImg,
    description: "An exclusive luxury estate in Abuja featuring contemporary villas with modern architecture, landscaped gardens, and premium community amenities.",
    features: ["Gated luxury community", "Contemporary villa designs", "Landscaped gardens", "Community clubhouse"],
  },
  {
    name: "Zekko Hotel", location: "Ikeja GRA, Lagos", type: "6-Floor Hospitality",
    category: "Commercial", status: "In Progress", img: zekkoImg,
    description: "A 6-floor boutique hotel in Ikeja GRA combining modern hospitality design with Nigerian cultural elements and premium guest experiences.",
    features: ["6-floor boutique hotel", "Conference facilities", "Restaurant & lounge", "Premium room suites"],
  },
  {
    name: "Atrium Homes", location: "Ikoyi, Lagos", type: "5-Floor Residential",
    category: "Residential", status: "In Progress", img: atriumImg,
    description: "A 5-floor luxury residential development in the heart of Ikoyi, featuring spacious apartments with modern finishes and dedicated parking.",
    features: ["5 floors of luxury units", "Prime Ikoyi location", "Underground parking", "Rooftop terrace"],
  },
  {
    name: "Dahlia Court", location: "Lagos", type: "18-Floor Luxury Residential",
    category: "Residential", status: "Planned", img: tinuolaImg,
    description: "An 18-floor luxury residential tower setting new standards for high-rise living in Lagos with panoramic city views and world-class amenities.",
    features: ["18 floors", "Panoramic views", "Gym & spa", "Concierge services"],
  },
  {
    name: "Autobiography", location: "Victoria Island, Lagos", type: "18-Floor Luxury",
    category: "Residential", status: "Planned", img: tinuolaImg,
    description: "An iconic 18-floor luxury development on Victoria Island, designed to be a landmark of contemporary architecture and refined living.",
    features: ["18 floors", "Iconic design", "Victoria Island waterfront", "Premium amenities"],
  },
  {
    name: "Owerri Villa", location: "Owerri", type: "Luxury Villa",
    category: "Residential", status: "Completed", img: malibuImg,
    description: "A stunning luxury villa in Owerri showcasing the finest in residential design with expansive living spaces and lush outdoor areas.",
    features: ["Custom luxury design", "Expansive grounds", "Smart home systems", "Premium finishes"],
  },
  {
    name: "Rice Mill", location: "Epe, Lagos", type: "Industrial Facility",
    category: "Industrial", status: "Completed", img: atriumImg,
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

const filters = ["All", "Residential", "Commercial", "Industrial"];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-32 md:py-40 bg-navy-gradient">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(45_92%_53%/0.1),transparent_60%)]" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}>
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">Portfolio</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
              Our Work <span className="text-gradient">Speaks for Itself</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeFilter === f
                    ? "bg-gold-gradient text-navy-dark shadow-[0_0_20px_hsl(45_92%_53%/0.3)]"
                    : "border border-border text-muted-foreground hover:border-gold/50 hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filtered.map((project, i) => (
              <SectionReveal key={project.name} delay={i * 80}>
                <div
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer rounded-2xl overflow-hidden border border-border bg-card
                    hover:border-gold/30 transition-all duration-500 hover:shadow-[0_0_30px_hsl(45_92%_53%/0.1)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.img}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-3 right-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === "Completed" ? "bg-green-500/20 text-green-400"
                        : project.status === "In Progress" ? "bg-gold/20 text-gold"
                        : "bg-white/20 text-white"
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-1">{project.type}</p>
                    <h3 className="text-lg font-display font-bold text-foreground mb-1">{project.name}</h3>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                      <MapPin size={12} /> {project.location}
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Projects */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-6 max-w-3xl">
          <SectionReveal>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8 text-center">
              Projects by <span className="text-gradient">Our Team</span>
            </h2>
            <div className="space-y-3">
              {teamProjects.map((p) => (
                <div key={p} className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card">
                  <ArrowRight size={14} className="text-gold shrink-0" />
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-border"
            >
              <div className="relative aspect-video">
                <img src={selectedProject.img} alt={selectedProject.name} className="w-full h-full object-cover rounded-t-2xl" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="p-8">
                <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-2">{selectedProject.type}</p>
                <h2 className="text-2xl font-display font-bold text-foreground mb-2">{selectedProject.name}</h2>
                <div className="flex items-center gap-1 text-muted-foreground text-sm mb-4">
                  <MapPin size={14} /> {selectedProject.location}
                </div>
                <p className="text-foreground/80 leading-relaxed mb-6">{selectedProject.description}</p>
                <h4 className="text-sm font-semibold text-foreground mb-3">Key Features</h4>
                <div className="grid grid-cols-2 gap-2">
                  {selectedProject.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-foreground/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold" />
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
