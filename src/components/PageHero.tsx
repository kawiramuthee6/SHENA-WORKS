import { motion } from "framer-motion";
import heroImage from "@/assets/hero/hero-1.jpg";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

const PageHero = ({ title, subtitle, children }: PageHeroProps) => {
  return (
    <section className="relative h-[60vh] min-h-[400px] max-h-[600px] overflow-hidden flex items-end">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt={title}
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Gradient overlay — darker at bottom for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>

      {/* Optional extra elements */}
      {children && (
        <div className="absolute inset-0 z-10 container-custom px-4">
          {children}
        </div>
      )}

      {/* Text content — left-aligned at bottom */}
      <div className="container-custom relative z-10 px-4 sm:px-6 pb-10 md:pb-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-tight mb-4">
            {title}
          </h1>
          {/* Accent line */}
          <div className="w-16 h-1 bg-red-500 mb-5" />
          {subtitle && (
            <p className="text-white/80 text-base md:text-lg max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;
