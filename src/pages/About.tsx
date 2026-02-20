import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Leaf, Award, Users, Target, Eye, X } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import promiseBg from "@/assets/kodai-promise-bg.jpg";
import heroAbout from "@/assets/hero-about.jpg";
import teamElie from "@/assets/team-elie.png";

const values = [
  { icon: Award, title: "Excellence", desc: "Delivering world-class quality in every detail of our work." },
  { icon: Shield, title: "Safety", desc: "Uncompromising safety standards on every project site." },
  { icon: Leaf, title: "Sustainability", desc: "Building for the future with environmentally conscious practices." },
  { icon: Users, title: "Accountability", desc: "Standing behind our work with transparent communication." },
];

const team = [
  {
    name: "Mehrez Boutros",
    role: "Founder & CEO",
    initials: "MB",
    bio: "Mehrez Boutros is the Founder and CEO of Kodai Construction, setting the standards of modern architecture and structural innovation in Nigeria. Before founding Kodai Construction, he served as Partner and General Manager at Arkland Structures Limited, where he led several landmark projects from conception and design to completion—most notably in Eko Atlantic City, Lagos. Under his leadership, Arkland delivered multiple high-end residential and commercial buildings across Nigeria, including La Paz Apartments in Victoria Island and A & A Towers in Eko Atlantic City.\n\nMehrez holds a Bachelor's degree in Civil Engineering and a Master's degree in Structural Engineering from Notre Dame University, Beirut, Lebanon. With over a decade of professional experience, he has held key leadership roles in renowned infrastructure and structural development projects across the Middle East. Mehrez is a philanthropist and a member of the American Society of Civil Engineers (ASCE). He combines technical expertise with visionary leadership. Through innovation, collaboration, and strategic partnerships, he continues to challenge conventional design approaches, leading Kodai Construction to deliver world-class commercial and residential structures that are transforming the architectural landscape of Nigeria.",
  },
  {
    name: "Elie Akiki",
    role: "General Manager",
    initials: "EA",
    photo: teamElie,
    bio: "Elie Akiki is the General Manager of Kodai Construction Company Limited, bringing over a decade of expertise in project and operations management. Before joining Kodai Construction, he served as an award-winning Project Manager and pioneer Operations Manager at Arkland Structures Limited, where he led the delivery of iconic towers that transformed the Lagos skyline.\n\nKnown for his strategic leadership and precision, he excels at simplifying complex operations, optimizing resources, and driving sustainable construction solutions. Elie is a team player and transformational leader, he continues to shape the future of modern construction and design excellence in Nigeria and beyond. Through creativity, discipline, and innovation, Elie Akiki continues to shape the future of construction management and modern architectural excellence in Nigeria and beyond.",
  },
  {
    name: "Geoff Harum",
    role: "Head of HR",
    initials: "GH",
    bio: "Geoff Harum is an expert in human capital development, employee creativity, and social innovation, with over 15 years of experience advising C-suite executives and HR leaders across diverse sectors. He currently serves as the Head of Human Resources at Kodai Construction Company Limited, where he leads strategic people management initiatives, fosters innovation, and builds sustainable organizational structures.\n\nBefore joining Kodai Construction, Geoff served as Personal Assistant to a former United Nations Deputy Secretary-General and as Group Human Resources Manager at Arkland Structures Limited, where he played a pivotal role in shaping the company's workforce strategy and culture. Geoff is also the Founder of the World Professional Council, an AI-powered professional and occupational ecosystem that connects experts globally to co-create innovative solutions. He hosts the World Professional Forum, an annual gathering of global thought leaders to initiate dialogue on the future of work.\n\nGeoff has academic advancement in Public Administration, Theology, and a stint in Law, combining these disciplines to bring a holistic and human-centered approach to leadership and organizational development.",
  },
  {
    name: "Meshack Oberhiri",
    role: "Head of Account & Finance",
    initials: "MO",
    bio: "Meshack Oberhiri is a distinguished professional with over 15 years of experience working and driving innovative growth in Nigeria. He is a student member of the Institute of Chartered Accountants of Nigeria (ICAN) as well as a Member of the Chartered Institute of Bankers of Nigeria (CIBN).\n\nHis proven commitment to excellence, integrity, and delivering value in dynamic corporate environments is unequalled and unparalleled. He is currently the Head of Account & Finance at Kodai Construction Company Limited.",
  },
  {
    name: "Tunji Oyeshiku",
    role: "Head of Architecture",
    initials: "TO",
    bio: "Tunji Oyeshiku is the Head of Architecture at Kodai Construction Company, overseeing multiple sectors including residential estates, commercial developments, hospitality spaces, and high-rise buildings.\n\nWith over a decade of professional experience in architecture and construction, Tunji has developed a reputation for delivering designs that balance innovation, functionality, and constructability. His expertise spans conceptual design, project management, and design coordination, ensuring that every project moves seamlessly from vision to execution.\n\nHe oversees multidisciplinary teams, guiding them to achieve design excellence through precision, collaboration, and adherence to global best practices. His leadership philosophy blends creativity with practicality; ensuring that each project not only meets aesthetic and technical standards but also contributes meaningfully to the built environment.\n\nDriven by a passion for modern architecture and sustainable design, Tunji continues to push understanding of context, proportion, and human experience; core principles that have earned him recognition as a trusted professional within Nigeria's architectural and construction industry.",
  },
];

const About = () => {
  const [selectedMember, setSelectedMember] = useState<typeof team[0] | null>(null);

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-32 md:py-44">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroAbout})` }}
        />
        <div className="absolute inset-0 bg-navy/75" />
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
      <section className="relative py-24 overflow-hidden">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {team.map((member, i) => (
              <SectionReveal key={member.name} delay={i * 80}>
                <div
                  onClick={() => setSelectedMember(member)}
                  className="group cursor-pointer bg-background border border-border hover:border-navy/30 hover:shadow-lg transition-all duration-400"
                >
                  {/* Photo placeholder */}
                  <div className="aspect-[3/4] bg-light-bg flex items-center justify-center overflow-hidden">
                    {member.photo ? (
                      <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-b from-secondary to-light-bg flex items-center justify-center">
                        <span className="text-5xl md:text-6xl font-display font-black text-navy/15 group-hover:text-navy/25 transition-colors duration-400">
                          {member.initials}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-display font-bold text-foreground tracking-tight">{member.name}</h3>
                    <p className="text-xs font-semibold uppercase tracking-wide text-navy/60 mb-3">{member.role}</p>
                    <p className="text-xs text-gold font-semibold uppercase tracking-wide group-hover:underline">
                      View Full Bio →
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Bio Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-navy/70 backdrop-blur-sm p-4"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-background max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
            >
              {/* Header */}
              <div className="relative bg-navy p-8 md:p-10">
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-white/10 flex items-center justify-center shrink-0">
                    <span className="text-2xl font-display font-black text-gold">
                      {selectedMember.initials}
                    </span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-display font-black text-white tracking-tight">{selectedMember.name}</h2>
                    <p className="text-sm font-semibold uppercase tracking-wide text-gold/80">{selectedMember.role}</p>
                  </div>
                </div>
              </div>
              {/* Bio */}
              <div className="p-8 md:p-10">
                {selectedMember.bio.split("\n\n").map((paragraph, idx) => (
                  <p key={idx} className="text-foreground/70 leading-relaxed mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default About;
