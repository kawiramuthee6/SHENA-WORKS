import { useState, useEffect, useCallback, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import Testimonials from "@/components/Testimonials";
import QuoteModal from "@/components/QuoteModal";
import heroImage from "@/assets/shena-works-logo.png";
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

// ============================================================
// HERO SLIDESHOW DATA
// ============================================================

const heroSlides = [
  {
    image: hero1,
    title: "Design and Build",
    subtitle: "Transforming spaces with innovative construction and elegant finishing.",
  },
  {
    image: hero2,
    title: "Roads & Infrastructure",
    subtitle: "Connecting communities through quality road construction and cabro works.",
  },
  {
    image: hero3,
    title: "Commercial Projects",
    subtitle: "Delivering world-class commercial spaces built to last.",
  },
];

// ============================================================
// REUSABLE COMPONENTS
// ============================================================

interface HeroTextProps {
  children: ReactNode;
  className?: string;
}

const HeroText = ({ children, className = "text-lg md:text-xl text-cream/80 max-w-2xl mx-auto mb-10" }: HeroTextProps) => (
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.6 }}
    className={className}
  >
    {children}
  </motion.p>
);

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

const Index = () => {
  const [quoteModal, setQuoteModal] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Preload hero images
  useEffect(() => {
    heroSlides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar onQuoteClick={() => setQuoteModal(true)} />
      
      {/* Hero Section - Fullscreen Slideshow */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Sliding Background Images */}
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

        {/* Content - Left aligned like reference */}
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.h1
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-cream leading-tight mb-4"
                >
                  {heroSlides[currentSlide].title}
                </motion.h1>

                {/* Gold accent bar like reference */}
                <div className="w-16 h-1 bg-gold mb-8" />

                <p className="text-lg md:text-xl text-cream/90 max-w-2xl mb-10 leading-relaxed">
                  {heroSlides[currentSlide].subtitle}
                </p>
              </motion.div>
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <Button variant="hero" size="xl" asChild>
                <Link to="/services">Get Started <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/portfolio"><Play className="mr-2 h-5 w-5" /> View Our Work</Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Slide Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-cream/10 backdrop-blur-sm border border-cream/20 flex items-center justify-center text-cream hover:bg-gold hover:text-navy-dark transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-cream/10 backdrop-blur-sm border border-cream/20 flex items-center justify-center text-cream hover:bg-gold hover:text-navy-dark transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
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
      <section className="py-24 bg-background">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-gold font-semibold text-sm uppercase tracking-wider mb-4">What We Do</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Building Excellence, <span className="text-gradient-gold">Delivering Results</span>
            </h2>
            <p className="text-muted-foreground text-lg">From roads that connect communities to buildings that stand the test of time.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <div className="relative h-48 overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 w-14 h-14 bg-gold rounded-xl flex items-center justify-center shadow-lg">
                      <service.icon className="w-7 h-7 text-navy-dark" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-gold transition-colors">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-12">
            <Button variant="gold" size="lg" asChild>
              <Link to="/services">View All Services <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Projects Preview */}
      <section className="py-24 bg-navy">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-gold font-semibold text-sm uppercase tracking-wider mb-4">Our Portfolio</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-cream mb-6">
              Featured <span className="text-gradient-gold">Projects</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div key={project.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                <Link to="/portfolio">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <h3 className="text-xl font-serif font-bold text-cream group-hover:text-gold transition-colors">{project.title}</h3>
                    <p className="text-cream/70">{project.location}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <Link to="/portfolio">View All Projects <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">Ready to Start Your Project?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">Contact us today for a free consultation and quote. Let's build something amazing together.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="xl" onClick={() => setQuoteModal(true)}>
                Get a Free Quote
              </Button>
              <Button variant="navy" size="xl" asChild>
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
