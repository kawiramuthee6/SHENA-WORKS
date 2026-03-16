import { motion } from "framer-motion";
import { 
  Building2, 
  PenTool, 
  Palette, 
  Calculator, 
  ClipboardList,
  Route,
  ArrowRight,
  ArrowLeft
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";

import heroImage from "@/assets/hero/hero-1.jpg";
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
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Construction services" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/80 to-navy" />
        </div>
        
        <div className="container-custom relative z-10 pt-16 sm:pt-20">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 sm:mb-8"
          >
            <button 
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-cream/70 hover:text-cream hover:bg-cream/10 px-4 py-2 rounded-full transition-all duration-300 backdrop-blur-sm border border-cream/10 hover:border-cream/30"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-medium">Back</span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto px-4"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-cream mb-4 sm:mb-6 uppercase tracking-wide">
              Our Services
            </h1>
            <p className="text-cream/80 text-base sm:text-lg md:text-xl mb-6 sm:mb-8">
              From roads that connect communities to buildings that inspire, we offer 
              comprehensive construction and design solutions tailored to your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services-grid" className="py-12 sm:py-20 bg-background">
        <div className="container-custom px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
                  <div className="relative h-56 overflow-hidden">
                    {service.isVideo ? (
                      <video src={service.media} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" autoPlay loop muted playsInline />
                    ) : (
                      <img src={service.media} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-navy-light transition-colors">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{service.shortDesc}</p>
                    <div className="flex items-center text-navy-dark font-medium">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-navy/20 rounded-2xl transition-all duration-500 pointer-events-none" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-cream mb-6 uppercase tracking-wide">
              Ready to Start Your Project?
            </h2>
            <p className="text-cream/70 text-lg max-w-2xl mx-auto mb-8">
              Contact us today for a free consultation and quote. Let's build something amazing together.
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
      <QuoteModal isOpen={quoteModal} onClose={() => setQuoteModal(false)} />
    </div>
  );
};

export default ServicesPage;
