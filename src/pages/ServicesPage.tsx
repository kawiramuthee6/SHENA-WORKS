import { useState } from "react";
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
import QuoteModal from "@/components/QuoteModal";
import heroImage from "@/assets/hero-construction.jpg";
import roadsImg from "@/assets/services/roads.jpg";
import constructionVid from "@/assets/services/construction.mp4";
import architectureImg from "@/assets/services/architecture.jpg";
import interiorImg from "@/assets/services/interior.jpg";
import boqImg from "@/assets/services/boq.jpg";
import projectMgmtImg from "@/assets/services/project-management.jpg";

const services = [
  {
    id: "roads",
    path: "/services/road-construction",
    icon: Route,
    title: "Road Construction",
    shortDesc: "Expert road construction services including tarmac laying, repairs, cabro installation, and drainage systems.",
    media: roadsImg,
    isVideo: false,
  },
  {
    id: "construction",
    path: "/services/general-construction",
    icon: Building2,
    title: "General Construction",
    shortDesc: "Comprehensive building services from residential homes to commercial complexes, delivered on time and within budget.",
    media: constructionVid,
    isVideo: true,
  },
  {
    id: "architecture",
    path: "/services/architecture",
    icon: PenTool,
    title: "Architecture & Consultancy",
    shortDesc: "Creative architectural design and professional consultancy services that transform your vision into reality.",
    media: architectureImg,
    isVideo: false,
  },
  {
    id: "interior",
    path: "/services/interior-design",
    icon: Palette,
    title: "Interior Design",
    shortDesc: "Innovative interior design solutions that blend functionality with aesthetics, creating inspiring spaces.",
    media: interiorImg,
    isVideo: false,
  },
  {
    id: "boq",
    path: "/services/bills-of-quantities",
    icon: Calculator,
    title: "Bills of Quantities",
    shortDesc: "Accurate cost estimation and quantity surveying to ensure your project stays on budget.",
    media: boqImg,
    isVideo: false,
  },
  {
    id: "project-management",
    path: "/services/project-management",
    icon: ClipboardList,
    title: "Project Management",
    shortDesc: "End-to-end project management ensuring smooth execution, timely delivery, and quality standards.",
    media: projectMgmtImg,
    isVideo: false,
  },
];

const ServicesPage = () => {
  const [quoteModal, setQuoteModal] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navbar onQuoteClick={() => setQuoteModal(true)} />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Construction"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/80 to-navy" />
        </div>
        
        <div className="container-custom relative z-10 pt-20">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Button 
              variant="ghost" 
              onClick={() => navigate(-1)}
              className="text-cream/70 hover:text-cream hover:bg-cream/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block text-gold font-semibold text-sm uppercase tracking-wider mb-4">
              What We Do
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-cream mb-6">
              Our Services
            </h1>
            <p className="text-cream/80 text-lg md:text-xl mb-8">
              From roads that connect communities to buildings that inspire, we offer 
              comprehensive construction and design solutions tailored to your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services-grid" className="py-20 bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  {/* Image or Video */}
                  <div className="relative h-56 overflow-hidden">
                    {service.isVideo ? (
                      <video
                        src={service.media}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    ) : (
                      <img
                        src={service.media}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                    
                    {/* Icon */}
                    <div className="absolute bottom-4 left-4 w-14 h-14 bg-gold rounded-xl flex items-center justify-center shadow-gold-glow">
                      <service.icon className="w-7 h-7 text-navy-dark" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-gold transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {service.shortDesc}
                    </p>
                    <div className="flex items-center text-gold font-medium">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/30 rounded-2xl transition-all duration-500 pointer-events-none" />
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
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-cream mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-cream/70 text-lg max-w-2xl mx-auto mb-8">
              Contact us today for a free consultation and quote. Let's build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" onClick={() => setQuoteModal(true)}>
                Get a Free Quote
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
      <QuoteModal 
        isOpen={quoteModal} 
        onClose={() => setQuoteModal(false)} 
      />
    </div>
  );
};

export default ServicesPage;
