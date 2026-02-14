import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-32 md:py-40 bg-navy-gradient">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(45_92%_53%/0.1),transparent_60%)]" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}>
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">Contact</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
              Let's Start <span className="text-gradient">Building</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Info */}
            <SectionReveal>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">Get In Touch</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Have a project in mind? We'd love to hear from you. Reach out and let's discuss how Kodai can bring your vision to life.
                  </p>
                </div>

                <div className="space-y-5">
                  {[
                    { icon: MapPin, label: "Office Address", value: "3A Adeyemi Lawson Street, Ikoyi, Lagos" },
                    { icon: Phone, label: "Phone", value: "+234 901 202 0202" },
                    { icon: Mail, label: "Email", value: "info@kodaiconstruction.com" },
                    { icon: Clock, label: "Office Hours", value: "Mon–Fri: 8AM–6PM | Sat: 9AM–2PM" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4 group">
                      <div className="w-12 h-12 rounded-xl bg-navy-gradient flex items-center justify-center shrink-0
                        group-hover:shadow-[0_0_20px_hsl(45_92%_53%/0.3)] transition-all duration-500">
                        <item.icon size={18} className="text-gold" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">{item.label}</p>
                        <p className="text-foreground">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map placeholder */}
                <div className="rounded-2xl overflow-hidden border border-border h-48 bg-muted flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin size={32} className="mx-auto mb-2 text-gold" />
                    <p className="text-sm font-medium">Ikoyi, Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
            </SectionReveal>

            {/* Form */}
            <SectionReveal delay={200}>
              <form onSubmit={handleSubmit} className="p-8 rounded-2xl border border-border bg-card space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Name *</label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground
                        focus:border-gold focus:ring-1 focus:ring-gold/50 outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                    <input
                      required type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground
                        focus:border-gold focus:ring-1 focus:ring-gold/50 outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
                    <input
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground
                        focus:border-gold focus:ring-1 focus:ring-gold/50 outline-none transition-all"
                      placeholder="+234..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Subject *</label>
                    <input
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground
                        focus:border-gold focus:ring-1 focus:ring-gold/50 outline-none transition-all"
                      placeholder="Project inquiry"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Message *</label>
                  <textarea
                    required rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground
                      focus:border-gold focus:ring-1 focus:ring-gold/50 outline-none transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gold-gradient text-navy-dark
                    font-bold text-lg transition-all duration-300 hover:shadow-[0_0_30px_hsl(45_92%_53%/0.5)] hover:scale-[1.02]"
                >
                  Send Message <Send size={18} />
                </button>
              </form>
            </SectionReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
