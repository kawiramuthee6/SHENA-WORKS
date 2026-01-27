import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, 
  PenTool, 
  Palette, 
  Calculator, 
  ClipboardList,
  Route,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  ArrowLeft
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
    icon: Route,
    title: "Road Construction",
    shortDesc: "Expert road construction services including tarmac laying, repairs, cabro installation, and drainage systems.",
    description: "We specialize in comprehensive road construction services that connect communities and drive development. Our expertise covers everything from major highway construction to residential access roads.",
    media: roadsImg,
    isVideo: false,
    features: [
      "Tarmac/Asphalt Road Construction",
      "Road Repairs & Rehabilitation",
      "Cabro/Paving Block Installation",
      "Drainage Systems & Culverts",
      "Road Marking & Signage",
      "Grading & Earthworks"
    ],
  },
  {
    id: "construction",
    icon: Building2,
    title: "General Construction",
    shortDesc: "Comprehensive building services from residential homes to commercial complexes, delivered on time and within budget.",
    description: "From foundation to finish, we handle all aspects of building construction. Our experienced team delivers quality structures that meet international standards while respecting local contexts.",
    media: constructionVid,
    isVideo: true,
    features: [
      "Residential Buildings",
      "Commercial Complexes",
      "Industrial Structures",
      "Renovations & Extensions",
      "Structural Steel Works",
      "Concrete & Masonry Works"
    ],
  },
  {
    id: "architecture",
    icon: PenTool,
    title: "Architecture & Consultancy",
    shortDesc: "Creative architectural design and professional consultancy services that transform your vision into reality.",
    description: "Our architectural team combines creativity with technical expertise to design spaces that are functional, aesthetically pleasing, and sustainable. We provide end-to-end design solutions.",
    media: architectureImg,
    isVideo: false,
    features: [
      "Architectural Design",
      "Feasibility Studies",
      "Building Permits & Approvals",
      "Structural Engineering",
      "Landscape Design",
      "Construction Supervision"
    ],
  },
  {
    id: "interior",
    icon: Palette,
    title: "Interior Design",
    shortDesc: "Innovative interior design solutions that blend functionality with aesthetics, creating inspiring spaces.",
    description: "We create interiors that reflect your personality and meet your functional needs. From concept to completion, our designers ensure every space tells a unique story.",
    media: interiorImg,
    isVideo: false,
    features: [
      "Space Planning",
      "Furniture Selection & Custom Design",
      "Lighting Design",
      "Color Consultation",
      "Material & Finish Selection",
      "Project Coordination"
    ],
  },
  {
    id: "boq",
    icon: Calculator,
    title: "Bills of Quantities",
    shortDesc: "Accurate cost estimation and quantity surveying to ensure your project stays on budget.",
    description: "Our quantity surveyors provide detailed and accurate cost estimates that help you plan effectively. We ensure transparency and prevent budget overruns.",
    media: boqImg,
    isVideo: false,
    features: [
      "Quantity Takeoffs",
      "Cost Estimation",
      "Tender Documentation",
      "Contract Administration",
      "Valuations & Payments",
      "Final Account Settlement"
    ],
  },
  {
    id: "project-management",
    icon: ClipboardList,
    title: "Project Management",
    shortDesc: "End-to-end project management ensuring smooth execution, timely delivery, and quality standards.",
    description: "From inception to handover, our project managers ensure your project runs smoothly. We coordinate all stakeholders and manage resources for optimal outcomes.",
    media: projectMgmtImg,
    isVideo: false,
    features: [
      "Project Planning & Scheduling",
      "Resource Management",
      "Quality Assurance",
      "Risk Management",
      "Stakeholder Coordination",
      "Progress Reporting"
    ],
  },
];

const ServicesPage = () => {
  const [activeService, setActiveService] = useState<string | null>(null);
  const [quoteModal, setQuoteModal] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Handle hash navigation
    const hash = location.hash.replace('#', '');
    if (hash && services.find(s => s.id === hash)) {
      setActiveService(hash);
      // Scroll to services section
      setTimeout(() => {
        const element = document.getElementById('services-accordion');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location.hash]);

  const toggleService = (id: string) => {
    setActiveService(activeService === id ? null : id);
  };

  const handleGetQuote = (serviceTitle: string) => {
    setSelectedServiceForQuote(serviceTitle);
    setQuoteModal(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
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
            <p className="text-gold text-sm">Click on any service below to learn more</p>
          </motion.div>
        </div>
      </section>

      {/* Services Accordion */}
      <section id="services-accordion" className="py-20 bg-background">
        <div className="container-custom max-w-4xl">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="mb-4"
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleService(service.id)}
                className={`w-full flex items-center justify-between p-6 rounded-2xl transition-all duration-300 ${
                  activeService === service.id
                    ? "bg-navy text-cream shadow-elegant"
                    : "bg-card hover:bg-muted shadow-md"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                    activeService === service.id
                      ? "bg-gold"
                      : "bg-gold/20"
                  }`}>
                    <service.icon className={`w-7 h-7 ${
                      activeService === service.id
                        ? "text-navy-dark"
                        : "text-gold"
                    }`} />
                  </div>
                  <div className="text-left">
                    <h3 className={`text-xl font-serif font-bold ${
                      activeService === service.id ? "text-cream" : "text-foreground"
                    }`}>
                      {service.title}
                    </h3>
                    <p className={`text-sm mt-1 ${
                      activeService === service.id ? "text-cream/70" : "text-muted-foreground"
                    }`}>
                      {service.shortDesc}
                    </p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: activeService === service.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className={`w-6 h-6 ${
                    activeService === service.id ? "text-gold" : "text-muted-foreground"
                  }`} />
                </motion.div>
              </button>

              {/* Accordion Content */}
              <AnimatePresence>
                {activeService === service.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-card rounded-b-2xl shadow-md -mt-4 pt-8 border-t-0">
                      <div className="grid lg:grid-cols-2 gap-8">
                        {/* Image or Video */}
                        <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
                          {service.isVideo ? (
                            <video
                              src={service.media}
                              className="w-full h-full object-cover"
                              autoPlay
                              loop
                              muted
                              playsInline
                            />
                          ) : (
                            <img
                              src={service.media}
                              alt={service.title}
                              className="w-full h-full object-cover"
                            />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
                        </div>

                        {/* Content */}
                        <div>
                          <p className="text-muted-foreground text-lg mb-6">
                            {service.description}
                          </p>
                          
                          {/* Features */}
                          <div className="space-y-3 mb-6">
                            {service.features.map((feature) => (
                              <div key={feature} className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-gold shrink-0" />
                                <span className="text-foreground">{feature}</span>
                              </div>
                            ))}
                          </div>

                          <Button 
                            variant="gold" 
                            size="lg" 
                            onClick={() => handleGetQuote(service.title)}
                          >
                            Get a Quote
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
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
      <QuoteModal 
        isOpen={quoteModal} 
        onClose={() => setQuoteModal(false)} 
        preSelectedService={selectedServiceForQuote}
      />
    </div>
  );
};

export default ServicesPage;
