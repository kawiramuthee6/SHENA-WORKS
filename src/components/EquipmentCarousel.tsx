import { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface MediaItem {
  src: string;
  type: "image" | "video";
}

interface EquipmentCarouselProps {
  name: string;
  media: MediaItem[];
  index: number;
}

const EquipmentCarousel = ({ name, media, index }: EquipmentCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [current, setCurrent] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrent(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Attach listener
  useState(() => {
    if (emblaApi) emblaApi.on("select", onSelect);
  });

  // Re-attach when emblaApi becomes available
  if (emblaApi) {
    emblaApi.on("select", onSelect);
  }

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-elegant transition-all duration-300"
    >
      <div className="relative aspect-[3/4] overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          {media.map((item, i) => (
            <div key={i} className="flex-[0_0_100%] min-w-0 h-full">
              {item.type === "video" ? (
                <video
                  src={item.src}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <img
                  src={item.src}
                  alt={`${name} ${i + 1}`}
                  className="w-full h-full object-cover"
                  decoding="async"
                  loading="lazy"
                />
              )}
            </div>
          ))}
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent opacity-70 pointer-events-none" />

        {/* Navigation arrows (only if multiple media) */}
        {media.length > 1 && (
          <>
            <button
              onClick={scrollPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-navy/60 text-cream flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm hover:bg-navy/80"
              aria-label="Previous"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-navy/60 text-cream flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm hover:bg-navy/80"
              aria-label="Next"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </>
        )}

        {/* Dots indicator */}
        {media.length > 1 && (
          <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-1.5">
            {media.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current ? "bg-cream w-4" : "bg-cream/50"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h4 className="text-cream font-serif font-bold text-base md:text-lg">{name}</h4>
      </div>
    </motion.div>
  );
};

export default EquipmentCarousel;
