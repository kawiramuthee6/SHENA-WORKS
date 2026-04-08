import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight, Mail, Phone, Instagram } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/shena-works-logo.png";

const navItems = [
  { name: "HOME", href: "/" },
  { name: "ABOUT US", href: "/about" },
  {
    name: "WHAT WE DO",
    href: "/services",
    dropdown: [
      { name: "Road Construction", href: "/services/road-construction" },
      { name: "General Construction", href: "/services/general-construction" },
      { name: "Architecture & Consultancy", href: "/services/architecture" },
      { name: "Interior Design", href: "/services/interior-design" },
      { name: "Bills of Quantities", href: "/services/bills-of-quantities" },
      { name: "Project Management", href: "/services/project-management" },
    ]
  },
  {
    name: "OUR WORK",
    href: "/portfolio",
    dropdown: [
      { name: "All Projects", href: "/portfolio" },
      { name: "Commercial Construction", href: "/portfolio/commercial" },
      { name: "Road & Cabro Construction", href: "/portfolio/road-cabro" },
      { name: "Hospitality Construction", href: "/portfolio/hospitality" },
    ]
  },
  { name: "CONTACT US", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <>
      {/* Top Info Bar - always visible */}
      <div className="hidden lg:block bg-white text-navy-dark text-xs border-b border-border/30">
        <div className="container-custom h-7 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <a href="mailto:shenaworksltd@gmail.com" className="flex items-center gap-1.5 hover:text-gold-dark transition-colors">
              <Mail className="h-3 w-3" />
              shenaworksltd@gmail.com
            </a>
            <a href="tel:+254718971896" className="flex items-center gap-1.5 hover:text-gold-dark transition-colors">
              <Phone className="h-3 w-3" />
              (+254) 718-971896
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/shenaworksltd" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-gold-dark transition-colors">
              <Instagram className="h-3 w-3" />
              Follow Us
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar - always white bg */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 left-0 right-0 z-50 bg-white transition-all duration-500 ${scrolled ? "shadow-md border-b border-border/30" : ""}`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 flex-shrink-0" onClick={() => setIsOpen(false)}>
              <img src={logo} alt="Shena Works Limited" className="h-16 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center flex-1 px-8">
              <div className="flex items-center space-x-1">
                {navItems.map((item) => (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      to={item.href}
                      className={`px-4 py-2 text-[13px] font-semibold tracking-wide transition-all duration-300 flex items-center gap-1 ${
                        isActive(item.href)
                          ? "text-navy-dark border-b-2 border-navy-dark"
                          : "text-navy-dark hover:text-gold-dark"
                      }`}
                    >
                      {item.name}
                      {item.dropdown && (
                        <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${activeDropdown === item.name ? "rotate-180" : ""}`} />
                      )}
                    </Link>

                    <AnimatePresence>
                      {item.dropdown && activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-1 w-60 bg-white rounded-lg shadow-lg border border-border/50 overflow-hidden z-50"
                        >
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className={`block px-4 py-3 text-sm transition-colors border-l-2 ${
                                isActive(subItem.href)
                                  ? "bg-muted text-navy-dark border-navy-dark font-medium"
                                  : "text-muted-foreground hover:bg-muted/50 hover:text-navy-dark border-transparent hover:border-navy-dark/50"
                              }`}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block w-16 flex-shrink-0" />

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[300px] max-w-[85vw] bg-white z-[70] lg:hidden flex flex-col shadow-2xl"
            >
              <div className="flex items-center justify-between px-5 h-20 border-b border-border/50">
                <img src={logo} alt="Shena Works" className="h-12 w-auto" />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5 text-muted-foreground" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-4">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                          className={`flex items-center justify-between w-full px-6 py-3.5 text-[13px] font-semibold tracking-wide transition-colors ${
                            isActive(item.href) ? "text-navy-dark" : "text-foreground hover:text-teal-600"
                          }`}
                        >
                          {item.name}
                          <ChevronRight className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === item.name ? "rotate-90" : ""}`} />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden bg-muted/30"
                            >
                              {item.dropdown.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  to={subItem.href}
                                  onClick={() => { setIsOpen(false); setActiveDropdown(null); }}
                                  className={`block pl-10 pr-6 py-3 text-sm transition-colors ${
                                    isActive(subItem.href) ? "text-navy-dark font-medium" : "text-muted-foreground hover:text-navy-dark"
                                  }`}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`block px-6 py-3.5 text-[13px] font-semibold tracking-wide transition-colors ${
                          isActive(item.href) ? "text-navy-dark" : "text-foreground hover:text-teal-600"
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                    <div className="mx-6 border-b border-border/30" />
                  </div>
                ))}
              </div>

              <div className="p-5 border-t border-border/50 space-y-3">
                <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                  <a href="tel:+254707243053" className="flex items-center gap-1 hover:text-navy-dark transition-colors">
                    <Phone className="h-3 w-3" /> Call Us
                  </a>
                  <span className="text-border">|</span>
                  <a href="mailto:shenaworksltd@gmail.com" className="flex items-center gap-1 hover:text-navy-dark transition-colors">
                    <Mail className="h-3 w-3" /> Email
                  </a>
                  <span className="text-border">|</span>
                  <a href="https://www.instagram.com/shenaworksltd" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-navy-dark transition-colors">
                    <Instagram className="h-3 w-3" /> Instagram
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
