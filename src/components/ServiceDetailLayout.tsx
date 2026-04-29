import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";

interface MediaItem { src: string; alt?: string; type?: "image" | "video"; }

interface ServiceDetailLayoutProps {
  num: string;
  title: string;
  lede: string;
  intro: string[];
  capabilities: string[];
  heroImage: string;
  gallery: MediaItem[];
}

const ServiceDetailLayout = ({
  num, title, lede, intro, capabilities, heroImage, gallery,
}: ServiceDetailLayoutProps) => {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const next = () => setIdx((i) => (i + 1) % gallery.length);
  const prev = () => setIdx((i) => (i === 0 ? gallery.length - 1 : i - 1));

  const renderMedia = (m: MediaItem, className: string) =>
    m.type === "video" ? (
      <video src={m.src} className={className} autoPlay loop muted playsInline />
    ) : (
      <img src={m.src} alt={m.alt || title} className={className} loading="lazy" />
    );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="border-b border-[hsl(var(--rule))]">
        <div className="container-custom pt-12 md:pt-16 pb-10">
          <div className="flex items-baseline justify-between mb-10">
            <Link to="/services" className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground border-b border-transparent hover:border-foreground pb-1">
              ← Practice
            </Link>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground">№03 / {num}</p>
          </div>

          <div className="grid grid-cols-12 gap-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="col-span-12 md:col-span-9 display-xl text-foreground text-balance"
            >
              {title}
            </motion.h1>
            <p className="col-span-12 md:col-span-3 md:col-start-10 body-lead text-pretty mt-4 md:mt-0">
              {lede}
            </p>
          </div>
        </div>

        <div className="container-custom pb-12">
          <div className="aspect-[16/8] overflow-hidden">
            <img src={heroImage} alt={title} className="w-full h-full object-cover" loading="eager" fetchPriority="high" />
          </div>
        </div>
      </section>

      {/* Body — intro + capabilities */}
      <section className="border-b border-[hsl(var(--rule))]">
        <div className="container-custom py-20 md:py-28">
          <div className="grid grid-cols-12 gap-6">
            <p className="col-span-12 md:col-span-3 eyebrow">On the work</p>
            <div className="col-span-12 md:col-span-7 space-y-6">
              {intro.map((p, i) => (
                <p key={i} className={`${i === 0 ? "font-serif text-2xl md:text-3xl text-foreground leading-[1.25] tracking-tight text-balance" : "text-foreground/75 text-[15px] leading-[1.65]"}`}>
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Capabilities ledger */}
          <div className="mt-20 grid grid-cols-12 gap-6">
            <p className="col-span-12 md:col-span-3 eyebrow">Capabilities</p>
            <div className="col-span-12 md:col-span-9">
              {capabilities.map((c, i) => (
                <div key={c} className={`grid grid-cols-12 gap-4 py-4 border-t border-[hsl(var(--rule))] ${i === capabilities.length - 1 ? "border-b" : ""}`}>
                  <p className="col-span-2 font-mono text-[11px] text-muted-foreground pt-1">{String(i + 1).padStart(2, "0")}</p>
                  <p className="col-span-10 font-serif text-lg md:text-xl text-foreground tracking-tight">{c}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery — bento, no rounded corners */}
      {gallery.length > 0 && (
        <section className="border-b border-[hsl(var(--rule))]">
          <div className="container-custom py-20 md:py-28">
            <div className="flex items-baseline justify-between mb-10">
              <p className="eyebrow">Selected images — {String(gallery.length).padStart(2, "0")}</p>
              <button onClick={() => { setIdx(0); setOpen(true); }} className="font-mono text-[11px] tracking-[0.2em] uppercase border-b border-foreground pb-1 text-foreground hover:opacity-60">
                Open lightbox →
              </button>
            </div>

            <div className="grid grid-cols-12 gap-3 md:gap-5">
              {gallery.map((m, i) => {
                // Asymmetric editorial grid
                const span =
                  i % 5 === 0 ? "col-span-12 md:col-span-7 aspect-[16/9]"
                  : i % 5 === 1 ? "col-span-6 md:col-span-5 aspect-[4/5]"
                  : i % 5 === 2 ? "col-span-6 md:col-span-4 aspect-square"
                  : i % 5 === 3 ? "col-span-12 md:col-span-4 aspect-[4/3]"
                  : "col-span-12 md:col-span-4 aspect-[4/3]";
                return (
                  <button
                    key={i}
                    onClick={() => { setIdx(i); setOpen(true); }}
                    className={`${span} overflow-hidden img-hover-zoom block`}
                  >
                    {renderMedia(m, "w-full h-full object-cover")}
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-navy-dark text-cream">
        <div className="container-custom py-24 md:py-32">
          <div className="grid grid-cols-12 gap-6 items-end">
            <h2 className="col-span-12 md:col-span-9 display-lg text-cream text-balance">
              Ready to start? <span className="text-cream/40">Send the brief.</span>
            </h2>
            <Link to="/contact" className="col-span-12 md:col-span-3 md:text-right inline-block">
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase border-b border-cream pb-1 hover:opacity-60">Contact us →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-navy-dark flex flex-col p-4 md:p-8"
            onClick={() => setOpen(false)}
          >
            <div className="flex items-center justify-between text-cream font-mono text-[11px] tracking-[0.2em] uppercase mb-4 pb-4 border-b border-cream/15" onClick={(e) => e.stopPropagation()}>
              <span>{title}</span>
              <span>{String(idx + 1).padStart(2, "0")} / {String(gallery.length).padStart(2, "0")}</span>
              <button onClick={() => setOpen(false)} className="hover:opacity-60">Close ✕</button>
            </div>
            <div className="flex-1 flex items-center justify-center overflow-hidden" onClick={(e) => e.stopPropagation()}>
              {renderMedia(gallery[idx], "max-h-full max-w-full object-contain")}
            </div>
            {gallery.length > 1 && (
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-cream/15" onClick={(e) => e.stopPropagation()}>
                <button onClick={prev} className="font-mono text-[11px] tracking-[0.2em] uppercase text-cream border-b border-cream pb-1 hover:opacity-60">← Prev</button>
                <button onClick={next} className="font-mono text-[11px] tracking-[0.2em] uppercase text-cream border-b border-cream pb-1 hover:opacity-60">Next →</button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
};

export default ServiceDetailLayout;
