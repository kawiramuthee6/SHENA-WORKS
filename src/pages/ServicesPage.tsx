import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import PageHero from "@/components/PageHero";
import EquipmentCarousel from "@/components/EquipmentCarousel";

import roadsImg from "@/assets/services/roads.jpg";
import constructionVid from "@/assets/services/construction.mp4";
import architectureImg from "@/assets/services/architecture.jpg";
import interiorImg from "@/assets/services/interior.jpg";
import boqImg from "@/assets/services/boq.jpg";
import projectMgmtImg from "@/assets/services/project-management.jpg";

import excavatorImg from "@/assets/equipment/excavator.jpeg";
import excavatorImg2 from "@/assets/equipment/excavator-2.jpeg";
import excavatorImg3 from "@/assets/equipment/excavator-3.jpeg";
import graderImg from "@/assets/equipment/grader.jpeg";
import graderImg2 from "@/assets/equipment/grader-2.jpeg";
import graderImg3 from "@/assets/equipment/grader-3.jpeg";
import graderImg4 from "@/assets/equipment/grader-4.jpeg";
import rollerImg1 from "@/assets/equipment/roller-onsite-1.jpeg";
import rollerImg2 from "@/assets/equipment/roller-onsite-2.jpeg";
import dozerImg1 from "@/assets/equipment/dozer-1.jpeg";
import dozerImg2 from "@/assets/equipment/dozer-2.jpeg";
import dozerImg3 from "@/assets/equipment/dozer-3.jpeg";
import dozerImg4 from "@/assets/equipment/dozer-4.jpeg";
import rollerGraderFleet from "@/assets/equipment/roller-grader-1.jpeg";
import teamMachinery1 from "@/assets/equipment/team-machinery-1.jpeg";
import teamMachinery2 from "@/assets/equipment/team-machinery-2.jpeg";
import fleet3 from "@/assets/equipment/fleet-3.jpeg";
import fleet4 from "@/assets/equipment/fleet-4.jpeg";

const services = [
  { num: "01", path: "/services/road-construction", title: "Road Construction", desc: "Tarmac, repairs, cabro and drainage.", media: roadsImg, isVideo: false },
  { num: "02", path: "/services/general-construction", title: "General Construction", desc: "Residential and commercial buildings.", media: constructionVid, isVideo: true },
  { num: "03", path: "/services/architecture", title: "Architecture & Consultancy", desc: "Design and consultancy that builds.", media: architectureImg, isVideo: false },
  { num: "04", path: "/services/interior-design", title: "Interior Design", desc: "Functional interiors for every brief.", media: interiorImg, isVideo: false },
  { num: "05", path: "/services/bills-of-quantities", title: "Bills of Quantities", desc: "Cost estimation and quantity surveying.", media: boqImg, isVideo: false },
  { num: "06", path: "/services/project-management", title: "Project Management", desc: "End-to-end project delivery.", media: projectMgmtImg, isVideo: false },
];

const equipment = [
  { name: "Excavator", media: [
    { src: excavatorImg, type: "image" as const },
    { src: excavatorImg2, type: "image" as const },
    { src: excavatorImg3, type: "image" as const },
    { src: "/videos/excavator.mp4", type: "video" as const },
  ]},
  { name: "Grader", media: [
    { src: graderImg, type: "image" as const },
    { src: graderImg2, type: "image" as const },
    { src: graderImg3, type: "image" as const },
    { src: graderImg4, type: "image" as const },
  ]},
  { name: "Roller", media: [
    { src: rollerImg1, type: "image" as const },
    { src: rollerImg2, type: "image" as const },
  ]},
  { name: "Dozer", media: [
    { src: dozerImg1, type: "image" as const },
    { src: dozerImg2, type: "image" as const },
    { src: dozerImg3, type: "image" as const },
    { src: dozerImg4, type: "image" as const },
  ]},
  { name: "Fleet", media: [
    { src: rollerGraderFleet, type: "image" as const },
    { src: teamMachinery1, type: "image" as const },
    { src: teamMachinery2, type: "image" as const },
    { src: fleet3, type: "image" as const },
    { src: fleet4, type: "image" as const },
  ]},
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <PageHero
        eyebrow="№03 — Practice"
        title="What we make."
        subtitle="From the road that connects two towns to the building that stands beside it. Six disciplines, one team."
        image={roadsImg}
      />

      {/* Services list — editorial */}
      <section className="border-b border-[hsl(var(--rule))]">
        <div className="container-custom py-12 md:py-20">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className={`grid grid-cols-12 gap-6 py-10 md:py-14 border-t border-[hsl(var(--rule))] ${i === services.length - 1 ? "border-b" : ""}`}
            >
              <div className="col-span-2 md:col-span-1">
                <span className="font-mono text-[11px] text-muted-foreground">{s.num}</span>
              </div>
              <div className="col-span-10 md:col-span-4">
                <h3 className="font-serif text-2xl md:text-3xl tracking-tight text-foreground">
                  <Link to={s.path} className="hover:opacity-60 transition-opacity">{s.title}</Link>
                </h3>
                <p className="text-foreground/65 text-[14px] leading-[1.55] mt-3 max-w-xs">{s.desc}</p>
                <Link to={s.path} className="inline-block mt-5 font-mono text-[11px] tracking-[0.2em] uppercase border-b border-foreground pb-1 text-foreground hover:opacity-60">
                  Detail →
                </Link>
              </div>
              <div className="col-span-12 md:col-span-6 md:col-start-7">
                <Link to={s.path} className="block aspect-[16/9] overflow-hidden img-hover-zoom">
                  {s.isVideo ? (
                    <video src={s.media} className="w-full h-full object-cover" autoPlay loop muted playsInline />
                  ) : (
                    <img src={s.media} alt={s.title} className="w-full h-full object-cover" loading="lazy" />
                  )}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Machinery */}
      <section className="bg-secondary border-b border-[hsl(var(--rule))]">
        <div className="container-custom py-20 md:py-28">
          <div className="grid grid-cols-12 gap-6 mb-14">
            <p className="col-span-12 md:col-span-3 eyebrow">Plant & Equipment</p>
            <h2 className="col-span-12 md:col-span-7 display-md text-foreground text-balance">
              Owned, operated, on-site.
            </h2>
            <p className="col-span-12 md:col-span-2 md:text-right text-muted-foreground text-sm">
              Available for hire across Kenya.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 md:gap-x-8 gap-y-10">
            {equipment.map((item, i) => (
              <EquipmentCarousel
                key={item.name}
                name={item.name}
                media={item.media}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-dark text-cream">
        <div className="container-custom py-24 md:py-32">
          <div className="grid grid-cols-12 gap-6 items-end">
            <h2 className="col-span-12 md:col-span-9 display-lg text-cream text-balance">
              Have a brief? <span className="text-cream/40">Send it.</span>
            </h2>
            <Link to="/contact" className="col-span-12 md:col-span-3 md:text-right inline-block">
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase border-b border-cream pb-1 text-cream hover:opacity-60">
                Start a project →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
};

export default ServicesPage;
