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
      <section className="relative py-32 md:py-44 bg-navy">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }} className="max-w-3xl">
            <p className="font-thin-label text-[11px] text-gold/60 mb-6">About Us</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-white leading-[0.95] tracking-tight">
              Our Story. Our Values.<br />Our Promise.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <SectionReveal>
            <p className="font-thin-label text-[11px] text-muted-foreground mb-6">Our Story</p>
            <div className="space-y-6 text-foreground/70 text-lg leading-relaxed">
              <p>
                Founded with a vision to revolutionize the construction industry, Kodai Construction has grown from a small team of passionate engineers to a leading construction company in Nigeria. With each project, we have pushed the boundaries of what's possible, setting new standards in quality and innovation.
              </p>
              <p>
                Our integrated approach — combining design, engineering, and construction under one roof — ensures seamless delivery from concept to completion. We don't just build structures; we build landmarks that define skylines.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-light-bg">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border max-w-4xl mx-auto border border-border">
            <SectionReveal>
              <div className="p-8 md:p-12 bg-background h-full">
                <Target size={20} className="text-navy/40 mb-6" />
                <h3 className="text-xl font-display font-black text-foreground mb-4 tracking-tight">Mission</h3>
                <p className="text-foreground/60 leading-relaxed">
                  To deliver exceptional construction solutions that exceed our clients' expectations, utilizing our expertise and commitment to quality, innovation, and sustainability.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={100}>
              <div className="p-8 md:p-12 bg-background h-full">
                <Eye size={20} className="text-gold/60 mb-6" />
                <h3 className="text-xl font-display font-black text-foreground mb-4 tracking-tight">Vision</h3>
                <p className="text-foreground/60 leading-relaxed">
                  We envision a future where Kodai Construction is synonymous with pioneering projects that transform the landscape and inspire communities, driven by our passion for making the impossible possible.
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
            <p className="font-thin-label text-[11px] text-muted-foreground mb-4">What We Stand For</p>
            <h2 className="text-3xl md:text-4xl font-display font-black text-foreground mb-16 tracking-tight">
              Core Values
            </h2>
          </SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border max-w-5xl mx-auto border border-border">
            {values.map((v, i) => (
              <SectionReveal key={v.title} delay={i * 80}>
                <div className="group p-8 bg-background hover:bg-secondary transition-all duration-400 h-full">
                  <v.icon size={20} className="text-navy/40 mb-6 group-hover:text-navy transition-colors duration-300" />
                  <h3 className="text-lg font-display font-bold text-foreground mb-2 tracking-tight">{v.title}</h3>
                  <p className="text-sm text-foreground/60">{v.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Kodai Promise */}
      <section className="py-24 bg-navy">
        <div className="container mx-auto px-6">
          <SectionReveal>
            <p className="font-thin-label text-[11px] text-gold/60 text-center mb-6">The Kodai Promise</p>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 max-w-4xl mx-auto mt-8">
            <AnimatedCounter end={3} suffix=" Years" label="Post-Delivery Support" description="Free maintenance & support after handover" />
            <AnimatedCounter end={10} suffix=" Years" label="Leakage Guarantee" description="Full waterproofing warranty coverage" />
            <AnimatedCounter end={30} suffix=" Years" label="Structural Guarantee" description="Foundation & structural integrity assurance" />
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <SectionReveal>
            <p className="font-thin-label text-[11px] text-muted-foreground mb-4">Our People</p>
            <h2 className="text-3xl md:text-4xl font-display font-black text-foreground mb-16 tracking-tight">
              Leadership Team
            </h2>
          </SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border max-w-5xl mx-auto border border-border">
            {team.map((member, i) => (
              <SectionReveal key={member.name} delay={i * 80}>
                <div className="group p-8 bg-background hover:bg-secondary transition-all duration-400 h-full">
                  <div className="w-16 h-16 bg-navy flex items-center justify-center mb-6">
                    <span className="text-lg font-display font-black text-white">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <h3 className="text-lg font-display font-bold text-foreground tracking-tight">{member.name}</h3>
                  <p className="text-xs font-semibold uppercase tracking-wide text-navy/60 mb-3">{member.role}</p>
                  <p className="text-sm text-foreground/50 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                    {member.bio}
                  </p>
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
