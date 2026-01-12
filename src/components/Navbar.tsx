import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/shena-works-logo.png";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { 
    name: "What We Do", 
    href: "#services",
    dropdown: [
      { name: "Road Construction", href: "#services" },
      { name: "General Construction", href: "#services" },
      { name: "Architecture & Consultancy", href: "#services" },
      { name: "Interior Design", href: "#services" },
      { name: "Bills of Quantities", href: "#services" },
      { name: "Project Management", href: "#services" },
    ]
  },
  { name: "Our Work", href: "#portfolio" },
  { name: "Contact Us", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-elegant"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2">
            <img src={logo} alt="Shena Works Limited" className="h-14 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 ${
                    scrolled
                      ? "text-foreground hover:text-accent"
                      : "text-cream hover:text-gold"
                  }`}
                >
                  {item.name}
                  {item.dropdown && <ChevronDown className="h-4 w-4" />}
                </a>
                
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
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-3 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <Button variant={scrolled ? "gold" : "hero"} size="lg" asChild>
              <a href="#contact">Get Quote</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-md ${
              scrolled ? "text-foreground" : "text-cream"
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
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 text-foreground hover:bg-accent rounded-md mx-2 transition-colors"
                    >
                      {item.name}
                    </a>
                    {item.dropdown && (
                      <div className="pl-8 space-y-1">
                        {item.dropdown.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="px-4 pt-2">
                  <Button variant="gold" className="w-full" asChild>
                    <a href="#contact">Get Quote</a>
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
