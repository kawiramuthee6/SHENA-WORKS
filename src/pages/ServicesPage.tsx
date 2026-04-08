import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import PageHero from "@/components/PageHero";
import roadsImg from "@/assets/services/roads.jpg";
import constructionVid from "@/assets/services/construction.mp4";
import architectureImg from "@/assets/services/architecture.jpg";
import interiorImg from "@/assets/services/interior.jpg";
import boqImg from "@/assets/services/boq.jpg";
import projectMgmtImg from "@/assets/services/project-management.jpg";

const services = [
  { id: "roads", path: "/services/road-construction", title: "Road Construction", shortDesc: "Expert road construction services including tarmac laying, repairs, cabro installation, and drainage systems.", media: roadsImg, isVideo: false },
  { id: "construction", path: "/services/general-construction", title: "General Construction", shortDesc: "Comprehensive building services from residential homes to commercial complexes, delivered on time and within budget.", media: constructionVid, isVideo: true },
  { id: "architecture", path: "/services/architecture", title: "Architecture & Consultancy", shortDesc: "Creative architectural design and professional consultancy services that transform your vision into reality.", media: architectureImg, isVideo: false },
  { id: "interior", path: "/services/interior-design", title: "Interior Design", shortDesc: "Innovative interior design solutions that blend functionality with aesthetics, creating inspiring spaces.", media: interiorImg, isVideo: false },
  { id: "boq", path: "/services/bills-of-quantities", title: "Bills of Quantities", shortDesc: "Accurate cost estimation and quantity surveying to ensure your project stays on budget.", media: boqImg, isVideo: false },
  { id: "project-management", path: "/services/project-management", title: "Project Management", shortDesc: "End-to-end project management ensuring smooth execution, timely delivery, and quality standards.", media: projectMgmtImg, isVideo: false },
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
