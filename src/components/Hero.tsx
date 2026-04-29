import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero/hero-1.jpg";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section ref={ref} id="home" className="relative bg-background border-b border-[hsl(var(--rule))]">
      <div className="container-custom pt-10 md:pt-16 pb-0">
        {/* Top meta row */}
        <div className="flex items-baseline justify-between mb-8 md:mb-12">
          <p className="eyebrow">Shena Works Limited — №01 / Index</p>
          <p className="hidden sm:block eyebrow">Meru · Nairobi</p>
        </div>

        {/* The single, dominant message */}
        <div className="grid grid-cols-12 gap-4 mb-12 md:mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
            className="col-span-12 display-xl text-foreground text-balance"
          >
            We build the roads,
            <br />
            and what stands beside them.
          </motion.h1>
        </div>

        {/* Image — full bleed of container, with parallax */}
        <div className="relative overflow-hidden h-[58vh] min-h-[420px] max-h-[680px]">
          <motion.img
            style={{ y }}
            src={heroImage}
            alt="Shena Works construction site"
            className="absolute inset-0 w-full h-[115%] object-cover"
            fetchPriority="high"
          />
        </div>

        {/* Caption row beneath image */}
        <div className="grid grid-cols-12 gap-4 py-6 border-b border-[hsl(var(--rule))] mt-0">
          <div className="col-span-12 md:col-span-4">
            <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
              Fig. 01 — Project in progress, Meru
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-6">
            <p className="text-foreground/80 text-[15px] leading-[1.55]">
              A registered Kenyan firm working across roads, buildings, and the design that joins them. Run by civil engineers, architects, and the crews who know the ground.
            </p>
          </div>
          <div className="col-span-12 md:col-span-2 md:col-start-11 flex md:justify-end items-end">
            <Link to="/services" className="font-mono text-[11px] tracking-[0.2em] uppercase text-foreground border-b border-foreground pb-1 hover:opacity-60 transition-opacity">
              Practice →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
