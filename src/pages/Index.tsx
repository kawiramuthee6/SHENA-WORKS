import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import heroImage from "@/assets/hero-construction.jpg";
import roadsImg from "@/assets/services/roads.jpg";
import constructionImg from "@/assets/services/construction.jpg";
import architectureImg from "@/assets/services/architecture.jpg";
import interiorImg from "@/assets/services/interior.jpg";
import bp4 from "@/assets/projects/black-perch-4.jpeg";
import dukesImg from "@/assets/projects/dukes-cottages-1.jpg";
import stoneImg from "@/assets/projects/stone-lounge-1.jpg";

import { 
  Building2, 
  PenTool, 
  Palette, 
  Calculator, 
  ClipboardList,
  Route
} from "lucide-react";

const services = [
  { icon: Route, title: "Road Construction", description: "Tarmac, repairs, cabro installation, and drainage systems.", image: roadsImg },
  { icon: Building2, title: "General Construction", description: "Residential and commercial buildings delivered with quality.", image: constructionImg },
  { icon: PenTool, title: "Architecture & Consultancy", description: "Creative designs and professional consultancy services.", image: architectureImg },
  { icon: Palette, title: "Interior Design", description: "Innovative interiors that blend functionality with aesthetics.", image: interiorImg },
  { icon: Calculator, title: "Bills of Quantities", description: "Accurate cost estimation and quantity surveying.", image: constructionImg },
  { icon: ClipboardList, title: "Project Management", description: "End-to-end project management for smooth execution.", image: architectureImg },
];

const projects = [
  { title: "Black Perch Lounge", location: "Meru, Kenya", image: bp4 },
  { title: "Dukes Cottages", location: "Kenya", image: dukesImg },
  { title: "Stone Lounge & Villas", location: "Kenya", image: stoneImg },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Road Construction" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/70 to-navy-dark/90" />
        </div>

        {/* Floating Elements */}
        <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/4 left-[10%] w-20 h-20 bg-gold/20 rounded-full blur-xl" />
        <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-1/3 right-[15%] w-32 h-32 bg-gold/15 rounded-full blur-2xl" />

        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.6 }} className="inline-flex items-center gap-2 bg-cream/10 backdrop-blur-sm border border-cream/20 rounded-full px-6 py-2 mb-8">
              <span className="text-gold font-medium">Roads & Building Construction</span>
              <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-cream leading-tight mb-6">
              Connecting Communities. <span className="text-gradient-gold">Building the Future.</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }} className="text-2xl md:text-3xl font-serif text-gold-light mb-6">
              Shena Works Limited
            </motion.p>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }} className="text-lg md:text-xl text-cream/80 max-w-2xl mx-auto mb-10">
              Our firm provides a comprehensive and integrated approach to design. From initial feasibility studies to final project supervision, we ensure every detail aligns with our client's vision, budget, and timeline.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/services">Our Services <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/portfolio"><Play className="mr-2 h-5 w-5" /> View Our Work</Link>
              </Button>
            </motion.div>
          </motion.div>
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
              <motion.div key={service.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="group relative overflow-hidden rounded-2xl bg-card shadow-md hover:shadow-elegant transition-all duration-500">
                <div className="relative h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-14 h-14 bg-gold rounded-xl flex items-center justify-center shadow-lg">
                    <service.icon className="w-7 h-7 text-navy-dark" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-gold transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
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
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-serif font-bold text-cream group-hover:text-gold transition-colors">{project.title}</h3>
                  <p className="text-cream/70">{project.location}</p>
                </div>
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
            <Button variant="gold" size="xl" asChild>
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
