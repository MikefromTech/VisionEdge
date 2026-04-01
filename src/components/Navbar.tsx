import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Industries", path: "/industries" },
  { label: "Market Strategy", path: "/market-strategy" },
  { label: "Risk & Compliance", path: "/risk-compliance" },
  { label: "Technology", path: "/technology" },
  { label: "Success Metrics", path: "/success-metrics" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "gradient-navy shadow-2xl py-2"
          : "bg-primary/80 backdrop-blur-md py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="VisionaryEdge Consultancy" className="h-10 w-auto rounded" />
          <div className="hidden sm:block">
            <span className="text-primary-foreground font-serif font-bold text-lg leading-tight block">
              VisionaryEdge
            </span>
            <span className="text-accent text-[10px] font-medium tracking-wider uppercase">
              Consultancy
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path}>
              <Button
                variant="navLink"
                size="sm"
                className={`text-xs ${
                  location.pathname === item.path ? "text-accent" : ""
                }`}
              >
                {item.label}
              </Button>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <Link to="/contact">
            <Button variant="gold" size="sm">
              Book Consultation
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-primary-foreground p-2"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden gradient-navy border-t border-gold/20"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`py-2 px-3 rounded text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? "text-accent bg-primary/30"
                      : "text-primary-foreground/80 hover:text-accent"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link to="/contact" className="mt-2">
                <Button variant="gold" className="w-full">
                  Book Consultation
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
