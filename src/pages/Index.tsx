import { useState, useEffect, useCallback, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Play, ChevronLeft, ChevronRight, Truck, Package, HardHat, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import Testimonials from "@/components/Testimonials";
import QuoteModal from "@/components/QuoteModal";
import roadsImg from "@/assets/services/roads.jpg";
import architectureImg from "@/assets/services/architecture.jpg";
import interiorImg from "@/assets/services/interior.jpg";
import boqImg from "@/assets/services/boq.jpg";
import projectMgmtImg from "@/assets/services/project-management.jpg";
import bp4 from "@/assets/projects/black-perch-4.jpeg";
import dukesImg from "@/assets/projects/dukes-cottages-1.jpg";
import stoneImg from "@/assets/projects/stone-lounge-4.jpeg";
import hero1 from "@/assets/hero/hero-1.jpg";
import hero2 from "@/assets/hero/hero-2.jpg";
import hero3 from "@/assets/hero/hero-3.jpg";

import { 
  Building2, 
  PenTool, 
  Palette, 
  Calculator, 
  ClipboardList,
  Route
} from "lucide-react";

const heroSlides = [
  {
    image: hero1,
    title: "Connecting Communities.\nBuilding the Future.",
    subtitle: "Shena Works Limited — Roads & Building Construction Contractors.",
  },
  {
    image: hero2,
    title: "Roads That Connect.\nStructures That Last.",
    subtitle: "Quality road construction, cabro works, and infrastructure development across Kenya.",
  },
  {
    image: hero3,
    title: "Your Vision.\nOur Expertise.",
    subtitle: "From architectural design to project completion — we deliver excellence.",
  },
];

const services = [
  { icon: Route, title: "Road Construction", description: "Tarmac, repairs, cabro installation, and drainage systems.", image: roadsImg, path: "/services/road-construction" },
  { icon: Building2, title: "General Construction", description: "Residential and commercial buildings delivered with quality.", image: bp4, path: "/services/general-construction" },
  { icon: PenTool, title: "Architecture & Consultancy", description: "Creative designs and professional consultancy services.", image: architectureImg, path: "/services/architecture" },
  { icon: Palette, title: "Interior Design", description: "Innovative interiors that blend functionality with aesthetics.", image: interiorImg, path: "/services/interior-design" },
  { icon: Calculator, title: "Bills of Quantities", description: "Accurate cost estimation and quantity surveying.", image: boqImg, path: "/services/bills-of-quantities" },
  { icon: ClipboardList, title: "Project Management", description: "End-to-end project management for smooth execution.", image: projectMgmtImg, path: "/services/project-management" },
];

const projects = [
  { title: "Black Perch Lounge", location: "Meru, Kenya", image: bp4 },
  { title: "Dukes Cottages", location: "Kenya", image: dukesImg },
  { title: "Stone Lounge & Villas", location: "Kenya", image: stoneImg },
];

const materials = [
  { icon: Package, name: "Building Materials", description: "Cement, sand, ballast, stones, bricks, and all masonry supplies." },
  { icon: Truck, name: "Transport & Logistics", description: "Lorries, trucks, and heavy-duty transport for material delivery across Kenya." },
  { icon: HardHat, name: "Heavy Machinery", description: "Caterpillars, excavators, rollers, and equipment for road and site works." },
];

const Index = () => {
  const [quoteModal, setQuoteModal] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 10000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  useEffect(() => {
    heroSlides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar onQuoteClick={() => setQuoteModal(true)} />
      
      {/* Hero Section */}
      <section className="relative min-h-[85vh] md:min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].title}
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/85 via-navy/60 to-navy-dark/40" />
          </motion.div>
        </AnimatePresence>

        <div className="container-custom relative z-10 py-12">
          <div className="max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-cream leading-tight mb-4 whitespace-pre-line">
                  {heroSlides[currentSlide].title}
                </motion.h1>
                <div className="w-16 h-1 bg-gold mb-6 md:mb-8" />
                <p className="text-base md:text-xl text-cream/90 max-w-2xl mb-8 md:mb-10 leading-relaxed">
                  {heroSlides[currentSlide].subtitle}
                </p>
              </motion.div>
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4"
            >
              <Button variant="hero" size="lg" className="text-sm md:text-base" asChild>
                <Link to="/services">Get Started <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" /></Link>
              </Button>
              <Button variant="heroOutline" size="lg" className="text-sm md:text-base" asChild>
                <Link to="/portfolio"><Play className="mr-2 h-4 w-4 md:h-5 md:w-5" /> View Our Work</Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Slide Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-cream/10 backdrop-blur-sm border border-cream/20 flex items-center justify-center text-cream hover:bg-gold hover:text-navy-dark transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-cream/10 backdrop-blur-sm border border-cream/20 flex items-center justify-center text-cream hover:bg-gold hover:text-navy-dark transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === currentSlide ? "w-10 bg-gold" : "w-4 bg-cream/40 hover:bg-cream/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-navy-dark uppercase tracking-wide mb-4">
              WHAT WE DO
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">From roads that connect communities to buildings that stand the test of time.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={service.title} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.5, delay: index * 0.1 }} 
                className="group relative overflow-hidden rounded-2xl bg-card shadow-md hover:shadow-elegant transition-all duration-500"
              >
                <Link to={service.path}>
                  <div className="relative h-44 md:h-48 overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 w-12 h-12 md:w-14 md:h-14 bg-gold rounded-xl flex items-center justify-center shadow-lg">
                      <service.icon className="w-6 h-6 md:w-7 md:h-7 text-navy-dark" />
                    </div>
                  </div>
                  <div className="p-5 md:p-6">
                    <h3 className="text-lg md:text-xl font-serif font-bold text-navy-dark mb-2 group-hover:text-gold transition-colors">{service.title}</h3>
                    <p className="text-muted-foreground text-sm md:text-base">{service.description}</p>
                    <div className="flex items-center text-navy-dark font-semibold text-sm mt-3 uppercase tracking-wide">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials & Equipment Delivery */}
      <section className="py-16 md:py-20 bg-navy">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-cream uppercase tracking-wide mb-4">
              MATERIALS & EQUIPMENT
            </h2>
            <p className="text-cream/70 text-base md:text-lg">
              We supply and deliver all construction materials and heavy machinery to your project site, anywhere in Kenya.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {materials.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-navy-light/50 backdrop-blur-sm border border-cream/10 rounded-2xl p-6 md:p-8 text-center hover:border-gold/30 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gold/20 rounded-xl flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-serif font-bold text-cream mb-3">{item.name}</h3>
                <p className="text-cream/70 leading-relaxed text-sm md:text-base">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-10">
            <Button variant="hero" size="lg" onClick={() => setQuoteModal(true)}>
              Request Materials <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Our Clients Bar */}
      <section className="py-6 md:py-8 bg-muted/50 border-y border-border/50">
        <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-navy-dark rounded-lg flex items-center justify-center">
              <Instagram className="w-5 h-5 text-cream" />
            </div>
            <div>
              <h3 className="text-lg font-serif font-bold text-navy-dark uppercase tracking-wide">OUR CLIENTS</h3>
              <p className="text-muted-foreground text-sm">See what our clients say about working with us</p>
            </div>
          </div>
          <a
            href="https://www.instagram.com/shenaworksltd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="gold" size="default" className="uppercase tracking-wide text-xs font-semibold">
              <Instagram className="w-4 h-4 mr-2" /> Follow on Instagram
            </Button>
          </a>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Projects Preview */}
      <section className="py-16 md:py-24 bg-navy">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-cream uppercase tracking-wide mb-4">
              FEATURED PROJECTS
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <motion.div key={project.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                <Link to="/portfolio">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-end">
                    <h3 className="text-lg md:text-xl font-serif font-bold text-cream group-hover:text-gold transition-colors">{project.title}</h3>
                    <p className="text-cream/70 text-sm">{project.location}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-10 md:mt-12">
            <Button variant="hero" size="lg" asChild>
              <Link to="/portfolio">View All Projects <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-navy-dark uppercase tracking-wide mb-6">Ready to Start Your Project?</h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-8">Contact us today for a free consultation and quote. Let's build something amazing together.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="lg" onClick={() => setQuoteModal(true)}>
                Get a Free Quote
              </Button>
              <Button variant="navy" size="lg" asChild>
                <Link to="/contact">Contact Us</Link>
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

export default Index;
