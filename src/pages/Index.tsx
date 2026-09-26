import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CornerDownRight } from "lucide-react";
import Testimonials from "@/components/Testimonials";
import heroImg from "@/assets/projects/black-perch-4.jpeg";
import heroThumb from "@/assets/projects/dukes-cottages-1.jpg";
import wideImg from "@/assets/projects/stone-lounge-4.jpeg";
import roadsImg from "@/assets/services/roads.jpg";
import archImg from "@/assets/services/architecture.jpg";
import interiorImg from "@/assets/services/interior.jpg";
import constructionImg from "@/assets/projects/pin-hideout-1.jpeg";
import excavatorImg from "@/assets/equipment/excavator.jpeg";
import p1 from "@/assets/projects/black-perch-1.jpeg";
import p2 from "@/assets/projects/dukes-cottages-3.jpg";
import p3 from "@/assets/projects/stone-lounge-2.jpeg";
import p4 from "@/assets/projects/pin-hideout-5.jpeg";

const services = [
  { title: "Building Construction in Meru", text: "Residential homes, commercial buildings, lodges and villas — built to last, on time and on budget.", image: constructionImg, path: "/services/general-construction" },
  { title: "Road Construction in Meru", text: "Roads, drainage, cabro paving and tarmac works connecting communities across Meru County and Kenya.", image: roadsImg, path: "/services/road-construction" },
  { title: "Architecture in Meru", text: "Architectural design and drawings that turn your ideas into buildable, approved plans.", image: archImg, path: "/services/architecture" },
  { title: "Interior Design in Meru", text: "Modern interiors that blend function and beauty for homes, hotels and offices.", image: interiorImg, path: "/services/interior-design" },
];

const works = [
  { title: "Black Perch Lounge", place: "Meru", image: p1 },
  { title: "Dukes Cottages", place: "Kenya", image: p2 },
  { title: "Stone Lounge & Villas", place: "Kenya", image: p3 },
  { title: "Pin Hideout", place: "Kenya", image: p4 },
];

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.7 } };

const ArrowLink = ({ to, children, light }: { to: string; children: React.ReactNode; light?: boolean }) => (
  <Link to={to} className={`group inline-flex items-center gap-4 text-sm font-medium ${light ? "text-cream" : "text-foreground"}`}>
    {children}
    <CornerDownRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
  </Link>
);

const Index = () => (
  <div className="bg-background">
    {/* Hero — split */}
    <section className="bg-navy p-2.5 md:p-3">
      <div className="grid md:grid-cols-2 min-h-[80vh]">
        <img
          src={heroImg}
          alt="Black Perch Lounge built by Shena Works, a construction company in Meru, Kenya"
          width={1200}
          height={1400}
          fetchPriority="high"
          loading="eager"
          className="w-full h-[55vh] md:h-full object-cover"
        />
        <div className="flex flex-col items-center justify-center text-center px-6 py-14">
          <motion.h1 {...fade} className="text-4xl md:text-6xl leading-[1.02] text-cream max-w-lg">
            Building Meru, From Vision to Reality
          </motion.h1>
          <motion.p {...fade} className="mt-5 text-cream/80 max-w-sm text-sm md:text-base">
            Construction, roads, architecture and interior design contractors in Meru, Kenya
          </motion.p>
          <motion.div {...fade} className="mt-10 flex flex-col items-center gap-5">
            <img src={heroThumb} alt="Dukes Cottages project" width={160} height={160} className="w-40 h-40 object-cover" />
            <ArrowLink to="/portfolio" light>Discover Projects</ArrowLink>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Intro */}
    <section className="px-5 md:px-6 pt-14 md:pt-20">
      <motion.div {...fade} className="max-w-xl">
        <p className="text-sm text-foreground/80 mb-4">Shena Works Limited</p>
        <h2 className="text-3xl md:text-4xl leading-tight text-foreground mb-5">
          Trusted Construction Company in Meru, Kenya
        </h2>
        <p className="text-foreground/80 leading-relaxed">
          Shena Works Limited is a Meru-based construction and design firm. We handle building construction, road construction,
          architecture, interior design, bills of quantities and project management — with our own fleet of excavators,
          graders, rollers and dozers. From Meru town to projects across Kenya, we make the unbuilt feel inevitable.
        </p>
      </motion.div>
    </section>

    <section className="px-2.5 md:px-3 mt-12">
      <div className="relative">
        <img src={wideImg} alt="Stone Lounge & Villas construction project" width={1600} height={800} loading="lazy" decoding="async" className="w-full h-[50vh] md:h-[80vh] object-cover" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>
    </section>

    {/* Services */}
    <section className="px-5 md:px-6 py-16 md:py-24">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-12">
        <motion.h2 {...fade} className="text-3xl md:text-4xl text-foreground">What We Build</motion.h2>
        <div className="max-w-xs">
          <p className="text-sm text-foreground/80 mb-3">Construction, roads, architecture and interiors — all under one roof in Meru.</p>
          <ArrowLink to="/services">All Services</ArrowLink>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-x-6 gap-y-12">
        {services.map((s) => (
          <motion.div key={s.title} {...fade}>
            <Link to={s.path} className="group block">
              <div className="overflow-hidden">
                <img src={s.image} alt={s.title} width={800} height={600} loading="lazy" decoding="async" className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <h3 className="mt-4 text-xl md:text-2xl text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-foreground/75 max-w-md">{s.text}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Works */}
    <section className="px-5 md:px-6 pb-16 md:pb-24">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-12">
        <motion.h2 {...fade} className="text-3xl md:text-4xl text-foreground">Bringing Concepts to Life</motion.h2>
        <div className="max-w-xs">
          <p className="text-sm text-foreground/80 mb-3">A journey through our completed projects</p>
          <ArrowLink to="/portfolio">Browse Works</ArrowLink>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {works.map((w, i) => (
          <motion.div key={w.title} {...fade} transition={{ duration: 0.7, delay: i * 0.08 }} className={i % 2 ? "md:mt-16" : ""}>
            <Link to="/portfolio" className="group block">
              <div className="overflow-hidden">
                <img src={w.image} alt={`${w.title} — ${w.place}`} width={600} height={800} loading="lazy" decoding="async" className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <p className="mt-3 text-foreground">{w.title}</p>
              <p className="text-xs text-foreground/60">{w.place}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Machinery */}
    <section className="px-2.5 md:px-3 pb-16 md:pb-24">
      <div className="grid md:grid-cols-2 bg-navy">
        <img src={excavatorImg} alt="Shena Works excavator available for hire in Meru" width={1000} height={800} loading="lazy" decoding="async" className="w-full h-full min-h-[320px] object-cover" />
        <div className="p-8 md:p-14 flex flex-col justify-center">
          <p className="text-sm text-cream/70 mb-4">Our Fleet</p>
          <h2 className="text-3xl md:text-4xl text-cream mb-5">Machinery Hire in Meru</h2>
          <p className="text-cream/80 mb-8 max-w-md">Excavators, graders, rollers and dozers — operated by our experienced team and delivered to your site.</p>
          <ArrowLink to="/services" light>See the Machines</ArrowLink>
        </div>
      </div>
    </section>

    <Testimonials />
  </div>
);

export default Index;
