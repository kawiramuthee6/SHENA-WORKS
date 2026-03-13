import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight, Mail, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/shena-works-logo.png";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "What We Do",
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
  { name: "Our Work", href: "/portfolio" },
  { name: "Contact Us", href: "/contact" },
];

interface NavbarProps {
  onQuoteClick?: () => void;
}

const Navbar = ({ onQuoteClick }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
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
      {/* Top Info Bar */}
      <div className={`hidden lg:block bg-navy-dark text-cream/80 text-xs transition-all duration-300 ${scrolled ? "h-0 overflow-hidden opacity-0" : "h-9 opacity-100"}`}>
        <div className="container-custom h-full flex items-center justify-between">
          <div className="flex items-center gap-5">
            <a href="mailto:info@shenaworks.co.ke" className="flex items-center gap-1.5 hover:text-cream transition-colors">
              <Mail className="h-3 w-3" />
              info@shenaworks.co.ke
            </a>
            <a href="tel:+254707243053" className="flex items-center gap-1.5 hover:text-cream transition-colors">
              <Phone className="h-3 w-3" />
              (+254) 707-243053
            </a>
          </div>
          <div className="text-cream/50 text-[10px] tracking-wider uppercase">
            Building Excellence Since Day One
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 bg-white border-b border-border/50 ${scrolled ? "shadow-md" : "shadow-sm"}`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 flex-shrink-0" onClick={() => setIsOpen(false)}>
              <img src={logo} alt="Shena Works Limited" className="h-14 w-auto" />
            </Link>

            {/* Desktop Navigation - Centered */}
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
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-1 ${
                        isActive(item.href)
                          ? "text-navy-dark border-b-2 border-accent rounded-none"
                          : "text-muted-foreground hover:text-navy-dark"
                      }`}
                    >
                      {item.name}
                      {item.dropdown && (
                        <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${activeDropdown === item.name ? "rotate-180" : ""}`} />
                      )}
                    </Link>

                    {/* Dropdown */}
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
                                  ? "bg-muted text-navy-dark border-accent font-medium"
                                  : "text-muted-foreground hover:bg-muted/50 hover:text-navy-dark border-transparent hover:border-accent/50"
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

            {/* Desktop CTA */}
            <div className="hidden lg:block flex-shrink-0">
              {onQuoteClick ? (
                <Button variant="gold" size="default" onClick={onQuoteClick}>
                  Get Quote
                </Button>
              ) : (
                <Button variant="gold" size="default" asChild>
                  <Link to="/contact">Get Quote</Link>
                </Button>
              )}
            </div>

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

      {/* Mobile Navigation - Side Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[300px] max-w-[85vw] bg-white z-[70] lg:hidden flex flex-col shadow-2xl"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-5 h-20 border-b border-border/50">
                <img src={logo} alt="Shena Works" className="h-10 w-auto" />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5 text-muted-foreground" />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="flex-1 overflow-y-auto py-4">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                          className={`flex items-center justify-between w-full px-6 py-3.5 text-[15px] transition-colors ${
                            isActive(item.href)
                              ? "text-navy-dark font-semibold"
                              : "text-foreground/70 hover:text-navy-dark"
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
                                    isActive(subItem.href)
                                      ? "text-navy-dark font-medium border-l-2 border-accent ml-6 pl-4"
                                      : "text-muted-foreground hover:text-navy-dark"
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
                        className={`block px-6 py-3.5 text-[15px] transition-colors ${
                          isActive(item.href)
                            ? "text-navy-dark font-semibold"
                            : "text-foreground/70 hover:text-navy-dark"
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                    <div className="mx-6 border-b border-border/30" />
                  </div>
                ))}
              </div>

              {/* Drawer Footer */}
              <div className="p-5 border-t border-border/50 space-y-3">
                {onQuoteClick ? (
                  <Button variant="gold" className="w-full" onClick={() => { onQuoteClick(); setIsOpen(false); }}>
                    Get Quote
                  </Button>
                ) : (
                  <Button variant="gold" className="w-full" asChild>
                    <Link to="/contact" onClick={() => setIsOpen(false)}>Get Quote</Link>
                  </Button>
                )}
                <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground pt-1">
                  <a href="tel:+254707243053" className="flex items-center gap-1 hover:text-navy-dark transition-colors">
                    <Phone className="h-3 w-3" />
                    Call Us
                  </a>
                  <span className="text-border">|</span>
                  <a href="mailto:info@shenaworks.co.ke" className="flex items-center gap-1 hover:text-navy-dark transition-colors">
                    <Mail className="h-3 w-3" />
                    Email
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
