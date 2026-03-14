import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
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
      className="mb-6"
    >
      <ol className="flex items-center gap-1.5 text-sm">
        {/* Breadcrumb Items */}
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <li key={index} className="flex items-center gap-1.5">
              {index > 0 && <ChevronRight className="w-3.5 h-3.5 text-cream/50" />}
              {item.href && !isLast ? (
                <Link
                  to={item.href}
                  className="text-cream/70 hover:text-cream transition-all duration-200 hover:underline underline-offset-4"
                >
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "text-cream font-medium" : "text-cream/70"}>
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
