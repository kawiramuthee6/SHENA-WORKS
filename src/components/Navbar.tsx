import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/shena-works-logo.png";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Projects",
    href: "/portfolio",
    dropdown: [
      { name: "All Projects", href: "/portfolio" },
      { name: "Commercial", href: "/portfolio/commercial" },
      { name: "Roads & Cabro", href: "/portfolio/road-cabro" },
      { name: "Hospitality", href: "/portfolio/hospitality" },
    ]
  },
  {
    name: "Services",
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
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const isActive = (href: string) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

  return (
    <>
      <header className="sticky top-0 z-50 bg-background border-b border-[hsl(var(--rule))]">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Wordmark + logo */}
            <Link to="/" className="flex items-center gap-3 flex-shrink-0" onClick={() => setIsOpen(false)}>
              <img src={logo} alt="" className="h-9 w-auto" />
              <span className="hidden sm:flex flex-col leading-none">
                <span className="font-serif text-[17px] tracking-tight text-foreground">Shena Works</span>
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-1">Est. Kenya</span>
              </span>
            </Link>

            {/* Desktop nav — flat, no underline boxes */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative h-20 flex items-center"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.href}
                    className={`text-[13px] tracking-wide transition-colors relative ${
                      isActive(item.href)
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.name}
                    {isActive(item.href) && (
                      <span className="absolute -bottom-[31px] left-0 right-0 h-px bg-foreground" />
                    )}
                  </Link>

                  <AnimatePresence>
                    {item.dropdown && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 min-w-[240px] bg-background border-x border-b border-[hsl(var(--rule))]"
                      >
                        {item.dropdown.map((subItem, i) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className={`flex items-center gap-3 px-5 py-3 text-[13px] transition-colors ${
                              i !== 0 ? "border-t border-[hsl(var(--rule))]" : ""
                            } ${
                              isActive(subItem.href)
                                ? "text-foreground bg-secondary"
                                : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                            }`}
                          >
                            <span className="font-mono text-[10px] text-muted-foreground/60">{String(i + 1).padStart(2, "0")}</span>
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Right meta — desktop */}
            <div className="hidden lg:flex items-center gap-5">
              <a href="mailto:shenaworksltd@gmail.com" className="font-mono text-[11px] tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors">
                shenaworksltd@gmail.com
              </a>
            </div>

            {/* Mobile toggle — text, no icon */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden font-mono text-[11px] tracking-[0.2em] uppercase text-foreground px-2"
              aria-label="Toggle menu"
            >
              {isOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu — full width, no drawer rounding */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-40 bg-background lg:hidden flex flex-col overflow-y-auto"
          >
            <div className="container-custom py-8 flex-1">
              <p className="eyebrow mb-6">Navigate</p>
              {navItems.map((item, i) => (
                <div key={item.name} className="border-t border-[hsl(var(--rule))]">
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        className="w-full flex items-baseline justify-between py-5 text-left"
                      >
                        <span className="flex items-baseline gap-3">
                          <span className="font-mono text-[11px] text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                          <span className="font-serif text-2xl text-foreground">{item.name}</span>
                        </span>
                        <span className="font-mono text-[11px] text-muted-foreground">{activeDropdown === item.name ? "—" : "+"}</span>
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-8 pb-4"
                          >
                            {item.dropdown.map((sub) => (
                              <Link
                                key={sub.name}
                                to={sub.href}
                                onClick={() => setIsOpen(false)}
                                className="block py-2 text-[14px] text-muted-foreground hover:text-foreground"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-baseline gap-3 py-5"
                    >
                      <span className="font-mono text-[11px] text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                      <span className="font-serif text-2xl text-foreground">{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
              <div className="border-t border-[hsl(var(--rule))]" />

              <div className="mt-12 grid gap-2">
                <p className="eyebrow">Reach</p>
                <a href="mailto:shenaworksltd@gmail.com" className="font-serif text-xl text-foreground">shenaworksltd@gmail.com</a>
                <a href="tel:+254718971896" className="text-muted-foreground">+254 718 971 896</a>
                <a href="https://www.instagram.com/shenaworksltd" target="_blank" rel="noopener noreferrer" className="text-muted-foreground">Instagram — @shenaworksltd</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
