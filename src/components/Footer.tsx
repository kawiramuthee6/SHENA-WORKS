import { motion } from "framer-motion";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUp
} from "lucide-react";
import logo from "@/assets/shena-works-logo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark pt-16 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src={logo} alt="Shena Works Limited" className="h-16 mb-4" />
            <p className="text-cream/70 mb-4">
              Roads & Building Construction Contractors.
              <br />
              Connecting Communities. Building the Future.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-cream/10 rounded-lg flex items-center justify-center text-cream hover:bg-gold hover:text-navy-dark transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-cream/10 rounded-lg flex items-center justify-center text-cream hover:bg-gold hover:text-navy-dark transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-cream/10 rounded-lg flex items-center justify-center text-cream hover:bg-gold hover:text-navy-dark transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-cream/10 rounded-lg flex items-center justify-center text-cream hover:bg-gold hover:text-navy-dark transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-serif font-bold text-cream mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Services", "Portfolio", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(" ", "-")}`}
                      className="text-cream/70 hover:text-gold transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-serif font-bold text-cream mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              {[
                "Road Construction",
                "General Construction",
                "Architecture",
                "Interior Design",
                "Project Management",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-cream/70 hover:text-gold transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-serif font-bold text-cream mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+254718971896"
                  className="flex items-center gap-3 text-cream/70 hover:text-gold transition-colors"
                >
                  <Phone className="w-5 h-5 text-gold" />
                  +254 718 971 896
                </a>
              </li>
              <li>
                <a
                  href="mailto:shenaworksltd@gmail.com"
                  className="flex items-center gap-3 text-cream/70 hover:text-gold transition-colors"
                >
                  <Mail className="w-5 h-5 text-gold" />
                  shenaworksltd@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Meru,Kenya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-cream/70 hover:text-gold transition-colors"
                >
                  <MapPin className="w-5 h-5 text-gold" />
                  Meru & Nairobi, Kenya
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/50 text-sm text-center md:text-left">
            © {currentYear} Shena Works Limited. All rights reserved.
          </p>
          
          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-navy-dark transition-all duration-300"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
