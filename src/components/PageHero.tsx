import { motion } from "framer-motion";
import heroImage from "@/assets/hero/hero-1.jpg";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

const PageHero = ({ title, subtitle, children }: PageHeroProps) => {
  return (
    <section className="relative h-[50vh] min-h-[320px] max-h-[480px] overflow-hidden flex items-center justify-center">
      {/* Background image with fade overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt={title}
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Multi-layer fade for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/70 via-navy-dark/60 to-navy-dark/80" />
        <div className="absolute inset-0 bg-navy/20 backdrop-blur-[1px]" />
      </div>

      {/* Optional extra elements (back button, dropdown, etc.) */}
      {children && (
        <div className="absolute inset-0 z-10 container-custom px-4">
          {children}
        </div>
      )}

      {/* Text content */}
      <div className="container-custom relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-cream uppercase tracking-wide mb-3">
            {title}
          </h1>
          {subtitle && (
            <>
              <div className="w-12 h-[1px] bg-cream/30 mx-auto mb-3" />
              <p className="text-cream/70 text-sm md:text-base max-w-2xl mx-auto">
                {subtitle}
              </p>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;
