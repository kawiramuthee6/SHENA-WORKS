import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
    <footer className="bg-navy-dark pt-12 sm:pt-16 pb-8">
      <div className="container-custom px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-10 sm:mb-12">
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
              <a href="#" className="w-10 h-10 bg-cream/10 rounded-lg flex items-center justify-center text-cream hover:bg-cream hover:text-navy-dark transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/shenaworksltd" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-cream/10 rounded-lg flex items-center justify-center text-cream hover:bg-cream hover:text-navy-dark transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-cream/10 rounded-lg flex items-center justify-center text-cream hover:bg-cream hover:text-navy-dark transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-cream/10 rounded-lg flex items-center justify-center text-cream hover:bg-cream hover:text-navy-dark transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <h4 className="text-lg font-serif font-bold text-cream mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-cream/70 hover:text-cream transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-cream/70 hover:text-cream transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-cream/70 hover:text-cream transition-colors">What We Do</Link></li>
              <li><Link to="/portfolio" className="text-cream/70 hover:text-cream transition-colors">Our Work</Link></li>
              <li><Link to="/contact" className="text-cream/70 hover:text-cream transition-colors">Contact Us</Link></li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <h4 className="text-lg font-serif font-bold text-cream mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services/road-construction" className="text-cream/70 hover:text-cream transition-colors">Road Construction</Link></li>
              <li><Link to="/services/general-construction" className="text-cream/70 hover:text-cream transition-colors">General Construction</Link></li>
              <li><Link to="/services/architecture" className="text-cream/70 hover:text-cream transition-colors">Architecture</Link></li>
              <li><Link to="/services/interior-design" className="text-cream/70 hover:text-cream transition-colors">Interior Design</Link></li>
              <li><Link to="/services/bills-of-quantities" className="text-cream/70 hover:text-cream transition-colors">Bills of Quantities</Link></li>
              <li><Link to="/services/project-management" className="text-cream/70 hover:text-cream transition-colors">Project Management</Link></li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
            <h4 className="text-lg font-serif font-bold text-cream mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+254718971896" className="flex items-center gap-3 text-cream/70 hover:text-cream transition-colors">
                  <Phone className="w-5 h-5 text-cream/50" />
                  +254 718 971 896
                </a>
              </li>
              <li>
                <a href="mailto:shenaworksltd@gmail.com" className="flex items-center gap-3 text-cream/70 hover:text-cream transition-colors">
                  <Mail className="w-5 h-5 text-cream/50" />
                  shenaworksltd@gmail.com
                </a>
              </li>
              <li>
                <a href="https://maps.google.com/?q=Meru,Kenya" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-cream/70 hover:text-cream transition-colors">
                  <MapPin className="w-5 h-5 text-cream/50" />
                  Meru & Nairobi, Kenya
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/50 text-sm text-center md:text-left">
            © {currentYear} Shena Works Limited. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-cream/10 rounded-full flex items-center justify-center text-cream hover:bg-cream hover:text-navy-dark transition-all duration-300"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
