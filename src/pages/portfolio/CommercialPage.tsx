import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, MapPin, ExternalLink, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";

import Breadcrumb from "@/components/Breadcrumb";
import heroImage from "@/assets/projects/black-perch-4.jpeg";

// Black Perch Images
import bp1 from "@/assets/projects/black-perch-1.jpeg";
import bp2 from "@/assets/projects/black-perch-2.jpeg";
import bp3 from "@/assets/projects/black-perch-3.jpeg";
import bp4 from "@/assets/projects/black-perch-4.jpeg";
import bp6 from "@/assets/projects/black-perch-6.jpeg";
import bp7 from "@/assets/projects/black-perch-7.jpeg";
import bp8 from "@/assets/projects/black-perch-8.jpeg";
import bp9 from "@/assets/projects/black-perch-9.jpeg";
import bp10 from "@/assets/projects/black-perch-10.jpeg";

interface Project {
  id: string;
  title: string;
  location: string;
  category: string;
  description: string;
  fullDescription: string;
  coverImage: string;
  images: string[];
  services: string[];
}

const projects: Project[] = [
  {
    id: "black-perch",
    title: "Black Perch Lounge",
    location: "Meru, Kenya",
    category: "Commercial Construction",
    description: "A stunning entertainment lounge featuring modern architecture with unique grass-tile flooring, ambient lighting, and lush landscaping.",
    fullDescription: "The Black Perch Lounge in Meru is a testament to our ability to create unique, vibrant commercial spaces. This project involved complete construction from the ground up, including innovative outdoor flooring with grass-integrated tile patterns, atmospheric lighting design, landscaping with tropical plants, and custom structural elements. The venue has become a landmark destination in Meru, showcasing our expertise in hospitality construction.",
    coverImage: bp4,
    images: [bp1, bp2, bp3, bp4, bp6, bp7, bp8, bp9, bp10],
    services: ["General Construction", "Interior Design", "Landscaping", "Road & Parking Construction"],
  },
];

const CommercialPage = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const navigate = useNavigate();

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Commercial Construction" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/80 to-navy" />
        </div>
        
        <div className="container-custom relative z-10 pt-16 sm:pt-20 px-4 sm:px-6">
          <Breadcrumb
            items={[
              { label: "Portfolio", href: "/portfolio" },
              { label: "Commercial Construction" }
            ]}
          />

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 sm:mb-8"
          >
            <Link 
              to="/portfolio"
              className="inline-flex items-center gap-2 text-cream/70 hover:text-cream hover:bg-cream/10 px-4 py-2 rounded-full transition-all duration-300 backdrop-blur-sm border border-cream/10 hover:border-cream/30"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-medium">Back to Portfolio</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block text-cream font-semibold text-sm uppercase tracking-wider mb-4">
              Our Portfolio
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-cream mb-4 sm:mb-6">
              Commercial Construction
            </h1>
            <p className="text-cream/80 text-base sm:text-lg md:text-xl">
              Explore our portfolio of commercial construction projects that showcase our commitment 
              to quality, innovation, and client satisfaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="container-custom px-4 sm:px-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-16 sm:mb-24 last:mb-0"
            >
              {/* Project Card */}
              <div className="group relative overflow-hidden rounded-3xl bg-card shadow-elegant">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image Side */}
                  <div 
                    className="relative h-64 sm:h-80 lg:h-96 cursor-pointer overflow-hidden"
                    onClick={() => openProject(project)}
                  >
                    <img 
                      src={project.coverImage} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="bg-cream text-navy-dark px-6 py-3 rounded-full font-semibold shadow-lg">
                        View Project
                      </span>
                    </div>
                  </div>
                  
                  {/* Content Side */}
                  <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-navy/10 text-navy-dark text-sm font-medium rounded-full">
                        {project.category}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-4">
                      {project.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.services.map((service) => (
                        <span 
                          key={service} 
                          className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                    
                    <Button 
                      variant="goldOutline" 
                      size="lg"
                      onClick={() => openProject(project)}
                    >
                      View Details
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
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
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-cream mb-6 uppercase tracking-wide">
              Have a Commercial Project in Mind?
            </h2>
            <p className="text-cream/70 text-lg max-w-2xl mx-auto mb-8">
              Contact us today for a free consultation. Let's build your vision together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/portfolio">View All Projects</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-navy/95 overflow-y-auto"
          >
            <div className="min-h-screen py-8 px-4 sm:px-6">
              <div className="max-w-6xl mx-auto">
                {/* Modal Header */}
                <div className="flex items-center justify-between mb-8">
                  <Link 
                    to="/portfolio"
                    className="inline-flex items-center gap-2 text-cream/70 hover:text-cream hover:bg-cream/10 px-4 py-2 rounded-full transition-all duration-300 backdrop-blur-sm border border-cream/10 hover:border-cream/30"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span className="font-medium">Back to Portfolio</span>
                  </Link>
                  <Button 
                    variant="ghost" 
                    onClick={closeProject}
                    className="text-cream hover:text-cream hover:bg-cream/10"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>

                {/* Project Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="bg-background rounded-3xl overflow-hidden"
                >
                  {/* Image Gallery */}
                  <div className="relative h-64 sm:h-80 md:h-96 bg-muted">
                    <img 
                      src={selectedProject.images[currentImageIndex]} 
                      alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Navigation Arrows */}
                    {selectedProject.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 bg-cream/90 hover:bg-cream text-navy-dark p-2 rounded-full shadow-lg transition-colors"
                        >
                          <ChevronLeft className="h-6 w-6" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 bg-cream/90 hover:bg-cream text-navy-dark p-2 rounded-full shadow-lg transition-colors"
                        >
                          <ChevronRight className="h-6 w-6" />
                        </button>
                      </>
                    )}
                    
                    {/* Image Counter */}
                    <div className="absolute bottom-4 right-4 bg-navy/80 text-cream px-4 py-2 rounded-full text-sm">
                      {currentImageIndex + 1} / {selectedProject.images.length}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8 lg:p-12">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                      <div>
                        <span className="inline-block px-3 py-1 bg-navy/10 text-navy-dark text-sm font-medium rounded-full mb-4">
                          {selectedProject.category}
                        </span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-foreground mb-2">
                          {selectedProject.title}
                        </h2>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{selectedProject.location}</span>
                        </div>
                      </div>
                      <Button 
                        variant="navy" 
                        size="lg"
                        asChild
                      >
                        <Link to="/contact">
                          Contact Us
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>

                    <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                      {selectedProject.fullDescription}
                    </p>

                    <div>
                      <h4 className="text-lg font-serif font-bold text-foreground mb-4">Services Provided</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.services.map((service) => (
                          <span 
                            key={service} 
                            className="px-4 py-2 bg-muted text-muted-foreground rounded-full"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
      <QuoteModal isOpen={quoteModal} onClose={() => setQuoteModal(false)} />
    </div>
  );
};

export default CommercialPage;
