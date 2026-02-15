import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import kodaiLogo from "@/assets/kodai-logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "About", path: "/about" },
  { name: "Sustainability", path: "/sustainability" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 2.6, duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-5">
        <Link to="/" className="flex items-center">
          <img
            src={kodaiLogo}
            alt="Kodai"
            className={`h-8 w-auto transition-all duration-300 ${
              !scrolled ? "brightness-0 invert" : ""
            }`}
          />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-[13px] font-medium tracking-wide uppercase transition-colors duration-300 group ${
                scrolled ? "text-foreground" : "text-white"
              } ${location.pathname === link.path ? "opacity-100" : "opacity-70 hover:opacity-100"}`}
            >
              {link.name}
              <span
                className={`absolute -bottom-1 left-0 h-px transition-all duration-300 ${
                  scrolled ? "bg-navy" : "bg-gold"
                } ${location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"}`}
              />
            </Link>
          ))}
          <Link
            to="/contact"
            className={`ml-2 px-6 py-2.5 text-[13px] font-semibold uppercase tracking-wide transition-all duration-300 ${
              scrolled
                ? "bg-navy text-white hover:bg-gold hover:text-navy hover:shadow-[0_0_20px_hsl(var(--gold)/0.3)]"
                : "bg-gold text-navy hover:bg-gold-light hover:shadow-[0_0_20px_hsl(var(--gold)/0.3)]"
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-2 ${scrolled ? "text-foreground" : "text-white"}`}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-border"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-lg font-display font-medium ${
                    location.pathname === link.path
                      ? "text-navy"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-2 px-6 py-3 text-center font-semibold uppercase tracking-wide bg-navy text-white hover:bg-navy-light transition-all duration-300"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
