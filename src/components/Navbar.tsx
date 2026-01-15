import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
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
      { name: "Road Construction", href: "/services#roads" },
      { name: "General Construction", href: "/services#construction" },
      { name: "Architecture & Consultancy", href: "/services#architecture" },
      { name: "Interior Design", href: "/services#interior" },
      { name: "Bills of Quantities", href: "/services#boq" },
      { name: "Project Management", href: "/services#project-management" },
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
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHomePage
          ? "bg-card/95 backdrop-blur-md shadow-elegant"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Shena Works Limited" className="h-14 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 ${
                    isActive(item.href)
                      ? "text-gold"
                      : scrolled || !isHomePage
                      ? "text-foreground hover:text-accent"
                      : "text-cream hover:text-gold"
                  }`}
                >
                  {item.name}
                  {item.dropdown && <ChevronDown className="h-4 w-4" />}
                </Link>
                
                {/* Dropdown */}
                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-card rounded-lg shadow-elegant overflow-hidden z-50"
                    >
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-3 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <Button 
              variant={scrolled || !isHomePage ? "gold" : "hero"} 
              size="lg" 
              onClick={onQuoteClick}
              asChild={!onQuoteClick}
            >
              {onQuoteClick ? "Get Quote" : <Link to="/contact">Get Quote</Link>}
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-md ${
              scrolled || !isHomePage ? "text-foreground" : "text-cream"
            }`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-card rounded-lg mb-4 overflow-hidden shadow-elegant"
            >
              <div className="py-4 space-y-1">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 rounded-md mx-2 transition-colors ${
                        isActive(item.href)
                          ? "text-gold bg-accent"
                          : "text-foreground hover:bg-accent"
                      }`}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <div className="pl-8 space-y-1">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="px-4 pt-2">
                  <Button variant="gold" className="w-full" asChild>
                    <Link to="/contact">Get Quote</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
