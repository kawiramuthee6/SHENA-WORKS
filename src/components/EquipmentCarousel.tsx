import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
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

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <motion.figure
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-muted" ref={emblaRef}>
        <div className="flex h-full">
          {media.map((item, i) => (
            <div key={i} className="flex-[0_0_100%] min-w-0 h-full">
              {item.type === "video" ? (
                <video
                  src={item.src}
                  className="w-full h-full object-cover"
                  autoPlay loop muted playsInline
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

        {media.length > 1 && (
          <>
            <button
              onClick={scrollPrev}
              className="absolute left-3 bottom-3 px-2 py-1 font-mono text-[10px] tracking-[0.2em] uppercase bg-background/85 text-foreground hover:bg-background"
              aria-label="Previous"
            >
              ← Prev
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-3 bottom-3 px-2 py-1 font-mono text-[10px] tracking-[0.2em] uppercase bg-background/85 text-foreground hover:bg-background"
              aria-label="Next"
            >
              Next →
            </button>
          </>
        )}
      </div>

      <figcaption className="flex items-baseline justify-between border-t border-[hsl(var(--rule))] pt-3 mt-3">
        <h4 className="font-serif text-base text-foreground">{name}</h4>
        <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">
          {String(current + 1).padStart(2, "0")} / {String(media.length).padStart(2, "0")}
        </span>
      </figcaption>
    </motion.figure>
  );
};

export default EquipmentCarousel;
