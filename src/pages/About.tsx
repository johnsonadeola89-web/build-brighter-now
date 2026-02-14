import { motion } from "framer-motion";
import { Shield, Leaf, Award, Users, Target, Eye } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import AnimatedCounter from "@/components/AnimatedCounter";

const values = [
  { icon: Award, title: "Excellence", desc: "Delivering world-class quality in every detail of our work." },
  { icon: Shield, title: "Safety", desc: "Uncompromising safety standards on every project site." },
  { icon: Leaf, title: "Sustainability", desc: "Building for the future with environmentally conscious practices." },
  { icon: Users, title: "Accountability", desc: "Standing behind our work with transparent communication." },
];

const team = [
  { name: "Mehrez Boutros", role: "Founder & CEO", bio: "Visionary leader with decades of experience in large-scale construction across Africa and the Middle East." },
  { name: "Elie Akiki", role: "General Manager", bio: "Seasoned construction executive driving operational excellence and project delivery." },
  { name: "Geoff Harum", role: "Head of HR", bio: "People-first leader building and nurturing Kodai's world-class construction talent." },
  { name: "Meshack Oberhiri", role: "Head of Account & Finance", bio: "Financial strategist ensuring fiscal responsibility and project profitability." },
  { name: "Tunji Oyeshiku", role: "Head of Architecture", bio: "Creative architect blending modern design with functional construction solutions." },
];

const About = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-32 md:py-40 bg-navy-gradient">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(45_92%_53%/0.1),transparent_60%)]" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}>
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">About Us</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
              Building Nigeria's Future,
              <br />
              <span className="text-gradient">One Landmark at a Time</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <SectionReveal>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8 text-center">
              Our <span className="text-gradient">Story</span>
            </h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Kodai Construction Limited is a premium construction firm specializing in high-rise and mid-rise building construction across Nigeria. With a portfolio spanning luxury residences, commercial developments, and industrial facilities, we bring international standards to the Nigerian construction landscape.
              </p>
              <p>
                Founded with a vision to transform Nigeria's skyline, Kodai has grown into a trusted partner for developers, investors, and property owners who demand nothing less than excellence. Our integrated approach — combining design, engineering, and construction under one roof — ensures seamless delivery from concept to completion.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <SectionReveal>
              <div className="p-8 rounded-2xl border border-border bg-card h-full">
                <div className="w-12 h-12 rounded-xl bg-navy-gradient flex items-center justify-center mb-4">
                  <Target size={22} className="text-gold" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver construction projects of the highest quality, on time and within budget, while maintaining the safest working environments and fostering sustainable building practices.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={150}>
              <div className="p-8 rounded-2xl border border-border bg-card h-full">
                <div className="w-12 h-12 rounded-xl bg-navy-gradient flex items-center justify-center mb-4">
                  <Eye size={22} className="text-gold" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted and respected construction company in West Africa, known for iconic buildings, innovative methods, and an unwavering commitment to our clients.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <SectionReveal>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-12 text-center">
              Our Core <span className="text-gradient">Values</span>
            </h2>
          </SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <SectionReveal key={v.title} delay={i * 100}>
                <div className="group p-6 rounded-2xl border border-border bg-card text-center
                  hover:border-gold/40 hover:-translate-y-2 transition-all duration-500
                  hover:shadow-[0_0_30px_hsl(45_92%_53%/0.1)]">
                  <div className="w-14 h-14 mx-auto rounded-xl bg-navy-gradient flex items-center justify-center mb-4
                    group-hover:shadow-[0_0_20px_hsl(45_92%_53%/0.3)] transition-all duration-500">
                    <v.icon size={24} className="text-gold" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Kodai Promise */}
      <section className="py-20 bg-navy-gradient">
        <div className="container mx-auto px-6">
          <SectionReveal>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-12 text-center">
              The Kodai <span className="text-gradient">Promise</span>
            </h2>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <AnimatedCounter end={3} suffix="-Year" label="Post-Delivery Support" description="Free maintenance & support after handover" />
            <AnimatedCounter end={10} suffix="-Year" label="Leakage Guarantee" description="Full waterproofing warranty coverage" />
            <AnimatedCounter end={30} suffix="-Year" label="Structural Guarantee" description="Foundation & structural integrity assurance" />
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <SectionReveal>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-12 text-center">
              Leadership <span className="text-gradient">Team</span>
            </h2>
          </SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {team.map((member, i) => (
              <SectionReveal key={member.name} delay={i * 100}>
                <div className="group relative p-6 rounded-2xl border border-border bg-card overflow-hidden
                  hover:border-gold/40 transition-all duration-500 hover:shadow-[0_0_30px_hsl(45_92%_53%/0.1)]">
                  <div className="w-20 h-20 mx-auto rounded-full bg-navy-gradient flex items-center justify-center mb-4">
                    <span className="text-2xl font-display font-bold text-gold">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-display font-bold text-foreground">{member.name}</h3>
                    <p className="text-gold text-sm font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
