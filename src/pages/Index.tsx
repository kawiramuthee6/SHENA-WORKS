import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import roadsImg from "@/assets/services/roads.jpg";
import bp4 from "@/assets/projects/black-perch-4.jpeg";
import interiorImg from "@/assets/services/interior.jpg";
import dukesImg from "@/assets/projects/dukes-cottages-1.jpg";
import stoneImg from "@/assets/projects/stone-lounge-4.jpeg";
import aboutImg from "@/assets/hero/hero-4.jpg";
import excavatorImg from "@/assets/equipment/excavator.jpeg";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";

const services = [
  { num: "01", title: "Road Construction", description: "Tarmac, cabro, drainage and earthworks for roads that connect.", path: "/services/road-construction", image: roadsImg },
  { num: "02", title: "General Construction", description: "Residential and commercial buildings, on time and on budget.", path: "/services/general-construction", image: bp4 },
  { num: "03", title: "Interior Design", description: "Functional, considered interiors for hospitality and homes.", path: "/services/interior-design", image: interiorImg },
  { num: "04", title: "Machinery & Equipment", description: "Excavators, graders, rollers and dozers — owned, operated, hired.", path: "/services", image: excavatorImg },
];

const projects = [
  { num: "01", title: "Black Perch Lounge", location: "Meru, Kenya", year: "2024", image: bp4 },
  { num: "02", title: "Dukes Cottages", location: "Kenya", year: "2023", image: dukesImg },
  { num: "03", title: "Stone Lounge & Villas", location: "Kenya", year: "2024", image: stoneImg },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />

      {/* — Studio note (About) — */}
      <section id="about" className="border-b border-[hsl(var(--rule))]">
        <div className="container-custom py-20 md:py-28">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-5">
              <p className="eyebrow mb-6">About</p>
              <h2 className="display-lg text-foreground text-balance">
                A construction practice run by people who lay the steel themselves.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5 md:col-start-8 flex flex-col justify-end">
              <p className="text-foreground/75 text-[15px] leading-[1.65] mb-6">
                Shena Works is a registered Kenyan firm in road construction, general building, architecture, interior design and project management. Our team — civil engineers, architects, plant operators, finishers — works the same site, from earthworks to handover.
              </p>
              <Link to="/about" className="font-mono text-[11px] tracking-[0.2em] uppercase text-foreground border-b border-foreground self-start pb-1 hover:opacity-60">
                More about us →
              </Link>
            </div>
          </div>

          <div className="mt-12 aspect-[21/8] overflow-hidden img-hover-zoom max-h-[420px]">
            <img src={aboutImg} alt="Shena Works on site" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* — Practice / Services — */}
      <section className="border-b border-[hsl(var(--rule))]">
        <div className="container-custom py-20 md:py-28">
          <div className="flex items-baseline justify-between mb-10 md:mb-16">
            <p className="eyebrow">Services</p>
            <Link to="/services" className="font-mono text-[11px] tracking-[0.2em] uppercase text-foreground border-b border-foreground pb-1 hover:opacity-60">
              All services →
            </Link>
          </div>

          <h2 className="display-lg text-foreground text-balance mb-16 md:mb-24 max-w-[14ch]">
            What we make.
          </h2>

          <div>
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-12 gap-6 py-10 md:py-14 border-t border-[hsl(var(--rule))] ${i === services.length - 1 ? "border-b" : ""}`}
              >
                <div className="col-span-1 md:col-span-1">
                  <span className="font-mono text-[11px] text-muted-foreground">{s.num}</span>
                </div>
                <div className="col-span-11 md:col-span-4">
                  <h3 className="font-serif text-2xl md:text-3xl text-foreground tracking-tight">
                    <Link to={s.path} className="hover:opacity-60 transition-opacity">
                      {s.title}
                    </Link>
                  </h3>
                </div>
                <div className="col-span-12 md:col-span-4 md:col-start-6">
                  <p className="text-foreground/70 text-[15px] leading-[1.6]">{s.description}</p>
                </div>
                <div className="col-span-12 md:col-span-3 md:col-start-10">
                  <div className="aspect-[4/3] overflow-hidden img-hover-zoom">
                    <Link to={s.path}>
                      <img src={s.image} alt={s.title} className="w-full h-full object-cover" loading="lazy" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* — Selected Work — */}
      <section className="bg-navy-dark text-cream border-b border-cream/15">
        <div className="container-custom py-20 md:py-28">
          <div className="flex items-baseline justify-between mb-10 md:mb-14">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-cream/50">Selected Work</p>
            <Link to="/portfolio" className="font-mono text-[11px] tracking-[0.2em] uppercase text-cream border-b border-cream pb-1 hover:opacity-60">
              Full archive →
            </Link>
          </div>

          <h2 className="display-lg text-cream text-balance mb-14 md:mb-20 max-w-[16ch]">
            Recent projects.
          </h2>

          <div className="grid grid-cols-12 gap-6">
            {projects.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`col-span-12 md:col-span-4 ${i === 1 ? "md:mt-16" : ""}`}
              >
                <Link to="/portfolio" className="block group">
                  <div className="aspect-[4/3] overflow-hidden img-hover-zoom mb-5">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="flex items-baseline justify-between border-t border-cream/15 pt-4">
                    <div>
                      <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-cream/50 mb-2">
                        {p.num} / {p.location}
                      </p>
                      <h3 className="font-serif text-xl text-cream group-hover:opacity-70 transition-opacity">
                        {p.title}
                      </h3>
                    </div>
                    <span className="font-mono text-[11px] text-cream/50">{p.year}</span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* — Testimonials — */}
      <Testimonials />

      {/* — Closing / Contact — */}
      <section className="border-b border-[hsl(var(--rule))]">
        <div className="container-custom py-24 md:py-36">
          <div className="grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 md:col-span-9">
              <p className="eyebrow mb-8">Contact</p>
              <h2 className="display-xl text-foreground text-balance">
                Have a site, a brief, or a road that needs to exist? <span className="text-muted-foreground/60">Write to us.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-3 flex md:justify-end">
              <Link to="/contact" className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] uppercase text-foreground border-b border-foreground pb-1 hover:opacity-60">
                Start a project →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
};

export default Index;
