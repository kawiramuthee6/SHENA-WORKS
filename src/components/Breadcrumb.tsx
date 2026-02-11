import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { motion } from "framer-motion";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      aria-label="Breadcrumb"
      className="mb-8"
    >
      <ol className="flex items-center gap-2 text-sm bg-cream/10 backdrop-blur-sm rounded-full px-5 py-2.5 w-fit border border-cream/15">
        {/* Home Link */}
        <li>
          <Link
            to="/"
            className="flex items-center text-cream/80 hover:text-gold transition-colors duration-200"
            aria-label="Home"
          >
            <Home className="w-3.5 h-3.5" />
          </Link>
        </li>

        {/* Breadcrumb Items */}
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <li key={index} className="flex items-center gap-2">
              <ChevronRight className="w-3 h-3 text-cream/40" />
              {item.href && !isLast ? (
                <Link
                  to={item.href}
                  className="text-cream/80 hover:text-gold transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "text-gold font-semibold" : "text-cream/80"}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </motion.nav>
  );
};

export default Breadcrumb;
