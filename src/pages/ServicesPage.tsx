import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import PageHero from "@/components/PageHero";
import EquipmentCarousel from "@/components/EquipmentCarousel";

// Service media
import roadsImg from "@/assets/services/roads.jpg";
import constructionVid from "@/assets/services/construction.mp4";
import architectureImg from "@/assets/services/architecture.jpg";
import interiorImg from "@/assets/services/interior.jpg";
import boqImg from "@/assets/services/boq.jpg";
import projectMgmtImg from "@/assets/services/project-management.jpg";

// Equipment - Excavator
import excavatorImg from "@/assets/equipment/excavator.jpeg";
import excavatorImg2 from "@/assets/equipment/excavator-2.jpeg";
import excavatorImg3 from "@/assets/equipment/excavator-3.jpeg";

// Equipment - Grader
import graderImg from "@/assets/equipment/grader.jpeg";
import graderImg2 from "@/assets/equipment/grader-2.jpeg";
import graderImg3 from "@/assets/equipment/grader-3.jpeg";
import graderImg4 from "@/assets/equipment/grader-4.jpeg";

// Equipment - Roller
import rollerImg1 from "@/assets/equipment/roller-onsite-1.jpeg";
import rollerImg2 from "@/assets/equipment/roller-onsite-2.jpeg";

// Equipment - Dozer
import dozerImg1 from "@/assets/equipment/dozer-1.jpeg";
import dozerImg2 from "@/assets/equipment/dozer-2.jpeg";
import dozerImg3 from "@/assets/equipment/dozer-3.jpeg";
import dozerImg4 from "@/assets/equipment/dozer-4.jpeg";

// Equipment - Fleet
import rollerGraderFleet from "@/assets/equipment/roller-grader-1.jpeg";
import teamMachinery1 from "@/assets/equipment/team-machinery-1.jpeg";
import teamMachinery2 from "@/assets/equipment/team-machinery-2.jpeg";
import fleet3 from "@/assets/equipment/fleet-3.jpeg";
import fleet4 from "@/assets/equipment/fleet-4.jpeg";

const services = [
  { id: "roads", path: "/services/road-construction", title: "Road Construction", shortDesc: "Expert road construction services including tarmac laying, repairs, cabro installation, and drainage systems.", media: roadsImg, isVideo: false },
  { id: "construction", path: "/services/general-construction", title: "General Construction", shortDesc: "Comprehensive building services from residential homes to commercial complexes, delivered on time and within budget.", media: constructionVid, isVideo: true },
  { id: "architecture", path: "/services/architecture", title: "Architecture & Consultancy", shortDesc: "Creative architectural design and professional consultancy services that transform your vision into reality.", media: architectureImg, isVideo: false },
  { id: "interior", path: "/services/interior-design", title: "Interior Design", shortDesc: "Innovative interior design solutions that blend functionality with aesthetics, creating inspiring spaces.", media: interiorImg, isVideo: false },
  { id: "boq", path: "/services/bills-of-quantities", title: "Bills of Quantities", shortDesc: "Accurate cost estimation and quantity surveying to ensure your project stays on budget.", media: boqImg, isVideo: false },
  { id: "project-management", path: "/services/project-management", title: "Project Management", shortDesc: "End-to-end project management ensuring smooth execution, timely delivery, and quality standards.", media: projectMgmtImg, isVideo: false },
];

const equipment = [
  {
    name: "Excavator",
    media: [
      { src: excavatorImg, type: "image" as const },
      { src: excavatorImg2, type: "image" as const },
      { src: excavatorImg3, type: "image" as const },
      { src: "/videos/excavator.mp4", type: "video" as const },
    ],
  },
  {
    name: "Grader",
    media: [
      { src: graderImg, type: "image" as const },
      { src: graderImg2, type: "image" as const },
      { src: graderImg3, type: "image" as const },
      { src: graderImg4, type: "image" as const },
    ],
  },
  {
    name: "Roller",
    media: [
      { src: rollerImg1, type: "image" as const },
      { src: rollerImg2, type: "image" as const },
    ],
  },
  {
    name: "Dozer",
    media: [
      { src: dozerImg1, type: "image" as const },
      { src: dozerImg2, type: "image" as const },
      { src: dozerImg3, type: "image" as const },
      { src: dozerImg4, type: "image" as const },
    ],
  },
  {
    name: "Our Fleet",
    media: [
      { src: rollerGraderFleet, type: "image" as const },
      { src: teamMachinery1, type: "image" as const },
      { src: teamMachinery2, type: "image" as const },
      { src: fleet3, type: "image" as const },
      { src: fleet4, type: "image" as const },
    ],
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <PageHero
        title="Our Services"
        subtitle="From roads that connect communities to buildings that inspire, we offer comprehensive construction and design solutions."
      />

      {/* Services Grid */}
      <section className="py-10 md:py-16 bg-background">
        <div className="container-custom px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link 
                  to={service.path}
                  className="group block relative overflow-hidden rounded-2xl bg-card shadow-md hover:shadow-elegant transition-all duration-500"
                >
                  <div className="relative h-48 overflow-hidden">
                    {service.isVideo ? (
                      <video src={service.media} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" autoPlay loop muted playsInline />
                    ) : (
                      <img src={service.media} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" decoding="async" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-serif font-bold text-foreground mb-2 group-hover:text-navy-light transition-colors">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm mb-3">{service.shortDesc}</p>
                    <div className="flex items-center text-navy-dark font-medium text-sm">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Machinery & Equipment */}
      <section className="py-14 md:py-20 bg-muted/30">
        <div className="container-custom px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-navy-dark uppercase tracking-wide mb-3">
              Machinery & Equipment
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              We own and operate heavy machinery for road and site works — available for hire and delivered to your project site, anywhere in Kenya.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {equipment.map((item, index) => (
              <EquipmentCarousel
                key={item.name}
                name={item.name}
                media={item.media}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-cream mb-4 uppercase tracking-wide">
              Ready to Start Your Project?
            </h2>
            <p className="text-cream/70 text-sm md:text-base max-w-2xl mx-auto mb-6">
              Contact us today for a free consultation. Let's build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
};

export default ServicesPage;
