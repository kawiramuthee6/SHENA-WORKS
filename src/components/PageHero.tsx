import { motion } from "framer-motion";
import heroImage from "@/assets/hero/hero-1.jpg";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  /** Short label like "Studio" or "Practice / 04" */
  eyebrow?: string;
  /** Optional override image */
  image?: string;
  children?: React.ReactNode;
}

const PageHero = ({ title, subtitle, eyebrow, image, children }: PageHeroProps) => {
  return (
    <section className="relative bg-background border-b border-[hsl(var(--rule))]">
      <div className="container-custom pt-14 md:pt-20 pb-10 md:pb-14">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-7">
            {eyebrow && <p className="eyebrow mb-6">{eyebrow}</p>}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
              className="display-xl text-foreground text-balance"
            >
              {title}
            </motion.h1>
          </div>
          {subtitle && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="col-span-12 md:col-span-4 md:col-start-9"
            >
              <p className="body-lead text-pretty">{subtitle}</p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Optional inset image strip */}
      <div className="container-custom pb-10 md:pb-14">
        <div className="aspect-[16/7] w-full overflow-hidden">
          <img
            src={image || heroImage}
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>
      </div>

      {children}
    </section>
  );
};

export default PageHero;
