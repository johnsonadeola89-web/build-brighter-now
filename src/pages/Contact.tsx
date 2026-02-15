import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import { useToast } from "@/hooks/use-toast";
import heroContact from "@/assets/hero-contact.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "", email: "", phone: "", projectType: "", budgetRange: "", timeline: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Inquiry Submitted", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", phone: "", projectType: "", budgetRange: "", timeline: "", message: "" });
  };

  const inputClass = "w-full px-4 py-3 border border-border bg-background text-foreground text-sm focus:border-navy focus:ring-0 outline-none transition-all duration-300";
  const labelClass = "block text-xs font-semibold uppercase tracking-wide text-foreground mb-2";

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-32 md:py-44">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroContact})` }}
        />
        <div className="absolute inset-0 bg-navy/75" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }} className="max-w-3xl">
            <p className="font-thin-label text-[11px] text-gold/60 mb-6">Contact</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-white leading-[0.95] tracking-tight">
              Let's Build Something<br />That Lasts
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 max-w-5xl mx-auto">
            {/* Info */}
            <div className="lg:col-span-2">
              <SectionReveal>
                <div className="space-y-8">
                  <div>
                    <p className="font-thin-label text-[11px] text-muted-foreground mb-4">Get In Touch</p>
                    <p className="text-foreground/60 leading-relaxed">
                      Have a project in mind? Reach out and let's discuss how Kodai can bring your vision to life.
                    </p>
                  </div>

                  <div className="space-y-5 pt-4">
                    {[
                      { icon: MapPin, label: "Office", value: "1A Chief Albert Iyorah Street, Lekki Phase 1, Lekki, Lagos" },
                      { icon: Phone, label: "Phone", value: "+234 912 444 4445" },
                      { icon: Mail, label: "Email", value: "info@kodaiconstruction.com" },
                      { icon: Clock, label: "Hours", value: "Mon–Fri: 8AM–6PM | Sat: 9AM–2PM" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-start gap-4">
                        <item.icon size={16} className="text-navy/40 mt-0.5 shrink-0" />
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-1">{item.label}</p>
                          <p className="text-sm text-foreground">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Google Maps Embed */}
                  <div className="border border-border overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7286!2d3.4737!3d6.4371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf53e38b6e3a7%3A0xd6f5cd7e4f0c3c5e!2sChief%20Albert%20Iyorah%20Street%2C%20Lekki%20Phase%201%2C%20Lagos!5e0!3m2!1sen!2sng!4v1700000000000"
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Kodai Construction Office Location"
                    />
                  </div>
                </div>
              </SectionReveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <SectionReveal delay={100}>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Name *</label>
                      <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} placeholder="Your name" />
                    </div>
                    <div>
                      <label className={labelClass}>Email *</label>
                      <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Phone</label>
                      <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} placeholder="+234..." />
                    </div>
                    <div>
                      <label className={labelClass}>Project Type</label>
                      <select value={form.projectType} onChange={(e) => setForm({ ...form, projectType: e.target.value })} className={inputClass}>
                        <option value="">Select type</option>
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="industrial">Industrial</option>
                        <option value="consulting">Consulting</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Budget Range</label>
                      <select value={form.budgetRange} onChange={(e) => setForm({ ...form, budgetRange: e.target.value })} className={inputClass}>
                        <option value="">Select range</option>
                        <option value="under-500m">Under ₦500M</option>
                        <option value="500m-1b">₦500M – ₦1B</option>
                        <option value="1b-5b">₦1B – ₦5B</option>
                        <option value="above-5b">Above ₦5B</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Timeline</label>
                      <select value={form.timeline} onChange={(e) => setForm({ ...form, timeline: e.target.value })} className={inputClass}>
                        <option value="">Select timeline</option>
                        <option value="immediate">Immediate</option>
                        <option value="3-months">Within 3 months</option>
                        <option value="6-months">Within 6 months</option>
                        <option value="1-year">Within 1 year</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>Message *</label>
                    <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputClass} resize-none`} placeholder="Tell us about your project..." />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold uppercase tracking-wide
                      bg-gold text-navy hover:bg-gold-light hover:shadow-[0_0_25px_hsl(var(--gold)/0.4)] transition-all duration-300"
                  >
                    Submit Inquiry <ArrowRight size={14} />
                  </button>
                </form>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
