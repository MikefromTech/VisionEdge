import { Link } from "react-router-dom";
import { Facebook, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="gradient-navy text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="VisionaryEdge Consultancy" className="h-12 w-auto rounded" />
              <div>
                <span className="font-serif font-bold text-lg block leading-tight">VisionaryEdge</span>
                <span className="text-accent text-[10px] tracking-wider uppercase">Consultancy</span>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Your Business, Our Expertise. Bridging the gap between having a dream and building a compliant, credible, and competitive business.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.facebook.com/share/1CMA9nntvk/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://wa.me/263784211463?text=Hello%20VisionaryEdge"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-green-500 hover:text-white transition-colors"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-accent text-sm font-semibold mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-accent text-sm font-semibold mb-4 uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                "Company Registration",
                "Corporate Secretarial",
                "Business Advisory",
                "Digital Marketing",
                "Training & Capacity",
                "Subscription Advisory",
              ].map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-accent text-sm font-semibold mb-4 uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-primary-foreground/70">
                <MapPin size={16} className="text-accent mt-0.5 shrink-0" />
                <a
                  href="https://maps.google.com/?q=Batanai+Gardens+Jason+Moyo+Avenue+Harare+Zimbabwe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  Office No.428, 4th Floor, Batanai Gardens, Jason Moyo Avenue, Harare, Zimbabwe
                </a>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <Phone size={16} className="text-accent shrink-0" />
                <a href="tel:+263784211463" className="hover:text-accent transition-colors">+263 784211463</a>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <Mail size={16} className="text-accent shrink-0" />
                <a href="mailto:deonmwaita@gmail.com" className="hover:text-accent transition-colors">deonmwaita@gmail.com</a>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <MessageCircle size={16} className="text-accent shrink-0" />
                <a href="https://wa.me/263784211463?text=Hello%20VisionaryEdge" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">WhatsApp Us</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/50">
          <p>© {new Date().getFullYear()} VisionaryEdge Consultancy (Private Limited). All rights reserved.</p>
          <p>Harare, Zimbabwe</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
