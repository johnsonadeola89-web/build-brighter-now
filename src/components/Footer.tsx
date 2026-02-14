import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import kodaiLogo from "@/assets/kodai-logo.png";

const Footer = () => {
  return (
    <footer className="bg-navy-gradient text-white/80">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <img src={kodaiLogo} alt="Kodai" className="h-12 w-auto" />
            <p className="text-sm leading-relaxed text-white/60">
              High-Rise & Mid-Rise Construction Experts. Committed to a Promise of Excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-gold font-display text-lg font-semibold">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: "Portfolio", path: "/portfolio" },
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm hover:text-gold transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-gold font-display text-lg font-semibold">Contact</h4>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                <span>3A Adeyemi Lawson Street, Ikoyi, Lagos</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-gold shrink-0" />
                <span>+234 901 202 0202</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-gold shrink-0" />
                <span>info@kodaiconstruction.com</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="text-gold font-display text-lg font-semibold">Office Hours</h4>
            <div className="text-sm space-y-1">
              <p>Monday – Friday: 8:00 AM – 6:00 PM</p>
              <p>Saturday: 9:00 AM – 2:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Kodai Construction. All rights reserved.</p>
          <p>Committed to a Promise of Excellence</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
