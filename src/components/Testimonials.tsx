import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Eng. Silas M. Kinoti, EBS",
    role: "Director General, Kenya Urban Roads Authority",
    content: "A highly professional and reliable engineering firm, consistently delivering quality work with strong technical expertise and timely execution.",
  },
  {
    name: "Charles Imunde",
    role: "Director, The Pin Hideout",
    content: "From initial consultation to final handover, the team delivered with remarkable attention to detail. The quality of construction exceeded our expectations.",
  },
  {
    name: "Directors, Black Perch Lounge",
    role: "Black Perch Lounge",
    content: "Shena Works turned our vision into a landmark in Meru — innovative grass-tile flooring, ambient lighting, and construction quality that holds up.",
  },
  {
    name: "Rashid Juma",
    role: "Director, Stone Lodge & Villas",
    content: "Outstanding craftsmanship. They understood the vision and translated it into a stunning reality — equally strong in construction and finishing.",
  },
  {
    name: "Dominic Bundi",
    role: "Owner, Dukes Cottages",
    content: "Built our cottages with skill and precision, on schedule. They are our go-to construction partner for any future developments.",
  },
];

const Testimonials = () => {
  const [showAll, setShowAll] = useState(false);
  const list = showAll ? testimonials : testimonials.slice(0, 2);

  return (
    <section className="border-b border-[hsl(var(--rule))]">
      <div className="container-custom py-20 md:py-28">
        <div className="flex items-baseline justify-between mb-14 md:mb-20">
          <p className="eyebrow">№05 — In their words</p>
          <p className="hidden sm:block eyebrow">{testimonials.length} entries</p>
        </div>

        <div>
          <AnimatePresence mode="popLayout">
            {list.map((t, i) => (
              <motion.figure
                key={t.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="grid grid-cols-12 gap-6 py-12 md:py-16 border-t border-[hsl(var(--rule))]"
              >
                <div className="col-span-12 md:col-span-2">
                  <p className="font-mono text-[11px] text-muted-foreground">{String(i + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}</p>
                </div>
                <blockquote className="col-span-12 md:col-span-7">
                  <p className="font-serif text-2xl md:text-3xl leading-[1.25] text-foreground tracking-tight text-balance">
                    “{t.content}”
                  </p>
                </blockquote>
                <figcaption className="col-span-12 md:col-span-3 flex flex-col justify-end">
                  <p className="text-foreground text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-sm">{t.role}</p>
                </figcaption>
              </motion.figure>
            ))}
          </AnimatePresence>

          <div className="border-t border-[hsl(var(--rule))]" />
        </div>

        {testimonials.length > 2 && (
          <div className="mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="font-mono text-[11px] tracking-[0.2em] uppercase text-foreground border-b border-foreground pb-1 hover:opacity-60"
            >
              {showAll ? "Show less" : `Show ${testimonials.length - 2} more →`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
