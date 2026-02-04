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
      transition={{ duration: 0.3 }}
      aria-label="Breadcrumb"
      className="mb-6"
    >
      <ol className="flex items-center space-x-2 text-sm">
        {/* Home Link */}
        <li>
          <Link
            to="/"
            className="flex items-center text-cream/70 hover:text-gold transition-colors"
            aria-label="Home"
          >
            <Home className="w-4 h-4" />
          </Link>
        </li>

        {/* Breadcrumb Items */}
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <li key={index} className="flex items-center space-x-2">
              <ChevronRight className="w-4 h-4 text-cream/50" />
              {item.href && !isLast ? (
                <Link
                  to={item.href}
                  className="text-cream/70 hover:text-gold transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "text-gold font-medium" : "text-cream/70"}>
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
