import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import PageHero from "@/components/PageHero";

import bp1 from "@/assets/projects/black-perch-1.jpeg";
import bp2 from "@/assets/projects/black-perch-2.jpeg";
import bp3 from "@/assets/projects/black-perch-3.jpeg";
import bp4 from "@/assets/projects/black-perch-4.jpeg";
import bp6 from "@/assets/projects/black-perch-6.jpeg";
import bp7 from "@/assets/projects/black-perch-7.jpeg";
import bp8 from "@/assets/projects/black-perch-8.jpeg";
import bp9 from "@/assets/projects/black-perch-9.jpeg";
import bp10 from "@/assets/projects/black-perch-10.jpeg";

import pin1 from "@/assets/projects/pin-hideout-1.jpeg";
import pin2 from "@/assets/projects/pin-hideout-2.jpeg";
import pin3 from "@/assets/projects/pin-hideout-3.jpeg";
import pin4 from "@/assets/projects/pin-hideout-4.jpeg";
import pin5 from "@/assets/projects/pin-hideout-5.jpeg";
import pin6 from "@/assets/projects/pin-hideout-6.jpeg";
import pin7 from "@/assets/projects/pin-hideout-7.jpeg";
import pin8 from "@/assets/projects/pin-hideout-8.jpeg";
import pin9 from "@/assets/projects/pin-hideout-9.jpeg";
import pin10 from "@/assets/projects/pin-hideout-10.jpeg";
import pin11 from "@/assets/projects/pin-hideout-11.jpeg";
import pin12 from "@/assets/projects/pin-hideout-12.jpeg";
import pin13 from "@/assets/projects/pin-hideout-13.jpeg";

import road1 from "@/assets/services/roads/road1.jpeg";
import road2 from "@/assets/services/roads/road2.jpeg";
import road3 from "@/assets/services/roads/road3.jpeg";
import road4 from "@/assets/services/roads/road4.jpeg";
import road5 from "@/assets/services/roads/road5.jpeg";
import road6 from "@/assets/services/roads/road6.jpeg";
import road7 from "@/assets/services/roads/road7.jpeg";

import dukes1 from "@/assets/projects/dukes-cottages-1.jpg";
import dukes2 from "@/assets/projects/dukes-cottages-2.jpg";
import dukes3 from "@/assets/projects/dukes-cottages-3.jpg";
import dukes4 from "@/assets/projects/dukes-cottages-4.jpg";
import dukes5 from "@/assets/projects/dukes-cottages-5.jpg";
import dukes6 from "@/assets/projects/dukes-cottages-6.jpg";
import dukes7 from "@/assets/projects/dukes-cottages-7.jpg";
import dukes8 from "@/assets/projects/dukes-cottages-8.jpg";
import dukes9 from "@/assets/projects/dukes-cottages-9.jpg";
import dukes10 from "@/assets/projects/dukes-cottages-10.jpg";

import stone1 from "@/assets/projects/stone-lounge-1.jpeg";
import stone2 from "@/assets/projects/stone-lounge-2.jpeg";
import stone3 from "@/assets/projects/stone-lounge-3.jpeg";
import stone4 from "@/assets/projects/stone-lounge-4.jpeg";
import stone5 from "@/assets/projects/stone-lounge-5.jpeg";
import stone6 from "@/assets/projects/stone-lounge-6.jpeg";
import stone7 from "@/assets/projects/stone-lounge-7.jpeg";
import stone8 from "@/assets/projects/stone-lounge-8.jpeg";
import stone9 from "@/assets/projects/stone-lounge-9.jpeg";

interface Project {
  num: string;
  id: string;
  title: string;
  location: string;
  category: string;
  year: string;
  description: string;
  coverImage: string;
  images: string[];
}

const projects: Project[] = [
  {
    num: "01", id: "black-perch", title: "Black Perch Lounge", location: "Meru, Kenya", category: "Commercial", year: "2024",
    description: "An entertainment lounge built ground-up — grass-tile flooring, ambient lighting, custom landscaping. Construction, interior and parking, delivered as one project.",
    coverImage: bp4,
    images: [bp1, bp2, bp3, bp4, bp6, bp7, bp8, bp9, bp10],
  },
  {
    num: "02", id: "pin-hideout", title: "The Pin Hideout", location: "Kenya", category: "Roads & Cabro", year: "2024",
    description: "Earthworks, stone base, multi-pattern cabro paving and full drainage for a commercial complex.",
    coverImage: pin7,
    images: [pin1, pin2, pin3, pin4, pin5, pin6, pin7, pin8, pin9, pin10, pin11, pin12, pin13],
  },
  {
    num: "03", id: "dukes-cottages", title: "Dukes Cottages, Restaurant & Garden", location: "Kenya", category: "Hospitality", year: "2023",
    description: "Multiple luxury cottages, a full-service restaurant with modern kitchen, and landscaped gardens — design through delivery.",
    coverImage: dukes1,
    images: [dukes1, dukes2, dukes3, dukes4, dukes5, dukes6, dukes7, dukes8, dukes9, dukes10],
  },
  {
    num: "04", id: "stone-lounge", title: "Stone Lounge & Villas", location: "Kenya", category: "Residential & Commercial", year: "2024",
    description: "Natural stone facades, contemporary villa interiors and premium cabro paving across the development.",
    coverImage: stone4,
    images: [stone1, stone2, stone3, stone4, stone5, stone6, stone7, stone8, stone9],
  },
  {
    num: "05", id: "road-construction", title: "Road & Infrastructure Works", location: "Kenya", category: "Roads", year: "Ongoing",
    description: "Earthworks, grading, surface finishing and drainage — built for durability and the climate they sit in.",
    coverImage: road1,
    images: [road1, road2, road3, road4, road5, road6, road7],
  },
];

const PortfolioPage = () => {
  const [selected, setSelected] = useState<Project | null>(null);
  const [idx, setIdx] = useState(0);

  const open = (p: Project, i = 0) => { setSelected(p); setIdx(i); document.body.style.overflow = "hidden"; };
  const close = () => { setSelected(null); setIdx(0); document.body.style.overflow = "auto"; };
  const next = () => selected && setIdx((p) => (p + 1) % selected.images.length);
  const prev = () => selected && setIdx((p) => (p === 0 ? selected.images.length - 1 : p - 1));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <PageHero
        eyebrow="№04 — Selected work"
        title="Things we have built."
        subtitle="A working archive of completed projects across roads, hospitality, commercial and residential."
        image={projects[0].coverImage}
      />

      {/* Index ledger */}
      <section className="border-b border-[hsl(var(--rule))]">
        <div className="container-custom py-10">
          <div className="grid grid-cols-12 gap-4 pb-4 border-b border-[hsl(var(--rule))] eyebrow">
            <p className="col-span-1">№</p>
            <p className="col-span-5">Project</p>
            <p className="col-span-3 hidden md:block">Category</p>
            <p className="col-span-3 hidden md:block text-right">Location · Year</p>
          </div>
          {projects.map((p) => (
            <a key={p.id} href={`#${p.id}`} className="grid grid-cols-12 gap-4 py-4 border-b border-[hsl(var(--rule))] hover:bg-secondary/50 transition-colors">
              <p className="col-span-1 font-mono text-[12px] text-muted-foreground">{p.num}</p>
              <p className="col-span-11 md:col-span-5 font-serif text-base text-foreground">{p.title}</p>
              <p className="col-span-12 md:col-span-3 text-muted-foreground text-sm hidden md:block">{p.category}</p>
              <p className="col-span-12 md:col-span-3 text-muted-foreground text-sm md:text-right hidden md:block">{p.location} · {p.year}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="border-b border-[hsl(var(--rule))]">
        <div className="container-custom py-12 md:py-20">
          {projects.map((p, i) => (
            <motion.article
              id={p.id}
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="py-14 md:py-20 border-t border-[hsl(var(--rule))] first:border-t-0"
            >
              {/* Heading row */}
              <div className="grid grid-cols-12 gap-6 mb-10">
                <p className="col-span-2 font-mono text-[11px] text-muted-foreground pt-2">{p.num}</p>
                <div className="col-span-12 md:col-span-7">
                  <h2 className="font-serif text-3xl md:text-5xl text-foreground tracking-tight text-balance">
                    {p.title}
                  </h2>
                  <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground mt-3">
                    {p.category} · {p.location} · {p.year}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-3 md:text-right md:self-end">
                  <button onClick={() => open(p)} className="font-mono text-[11px] tracking-[0.2em] uppercase border-b border-foreground pb-1 text-foreground hover:opacity-60">
                    Open gallery ({p.images.length}) →
                  </button>
                </div>
              </div>

              {/* Hero image */}
              <div className="aspect-[16/9] overflow-hidden img-hover-zoom mb-3 cursor-pointer" onClick={() => open(p, 0)}>
                <img src={p.coverImage} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
              </div>

              {/* Thumbs + description */}
              <div className="grid grid-cols-12 gap-3 md:gap-6 mt-6">
                <div className="col-span-12 md:col-span-7 grid grid-cols-3 gap-3">
                  {p.images.slice(0, 3).map((img, k) => (
                    <div key={k} className="aspect-square overflow-hidden img-hover-zoom cursor-pointer" onClick={() => open(p, k + 1)}>
                      <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  ))}
                </div>
                <div className="col-span-12 md:col-span-5">
                  <p className="text-foreground/75 text-[15px] leading-[1.65] max-w-[42ch]">{p.description}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-dark text-cream">
        <div className="container-custom py-24 md:py-32">
          <div className="grid grid-cols-12 gap-6 items-end">
            <h2 className="col-span-12 md:col-span-9 display-lg text-cream text-balance">
              Your project could sit here next.
            </h2>
            <Link to="/contact" className="col-span-12 md:col-span-3 md:text-right inline-block">
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase border-b border-cream pb-1 hover:opacity-60">Start a project →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-navy-dark flex flex-col p-4 md:p-8"
            onClick={close}
          >
            <div className="flex items-center justify-between text-cream font-mono text-[11px] tracking-[0.2em] uppercase mb-4 pb-4 border-b border-cream/15" onClick={(e) => e.stopPropagation()}>
              <span>{selected.title}</span>
              <span>{String(idx + 1).padStart(2, "0")} / {String(selected.images.length).padStart(2, "0")}</span>
              <button onClick={close} className="hover:opacity-60">Close ✕</button>
            </div>

            <div className="flex-1 flex items-center justify-center overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <img src={selected.images[idx]} alt="" className="max-h-full max-w-full object-contain" />
            </div>

            {selected.images.length > 1 && (
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-cream/15" onClick={(e) => e.stopPropagation()}>
                <button onClick={prev} className="font-mono text-[11px] tracking-[0.2em] uppercase text-cream border-b border-cream pb-1 hover:opacity-60">← Prev</button>
                <div className="hidden md:flex gap-2 overflow-x-auto">
                  {selected.images.map((img, k) => (
                    <button key={k} onClick={() => setIdx(k)} className={`w-12 h-12 overflow-hidden ${k === idx ? "outline outline-1 outline-cream" : "opacity-50 hover:opacity-100"}`}>
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
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

export default PortfolioPage;
