import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, MapPin, ExternalLink, ArrowLeft, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";

import heroImage from "@/assets/hero/hero-1.jpg";

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

// Pin Hideout Images
import pin1 from "@/assets/projects/pin-hideout-1.jpeg";
import pin2 from "@/assets/projects/pin-hideout-2.jpeg";
import pin3 from "@/assets/projects/pin-hideout-3.jpeg";
import pin4 from "@/assets/projects/pin-hideout-4.jpeg";
import pin5 from "@/assets/projects/pin-hideout-5.jpeg";
import pin6 from "@/assets/projects/pin-hideout-6.jpeg";
import pin7 from "@/assets/projects/pin-hideout-7.jpeg";
import pin8 from "@/assets/projects/pin-hideout-8.jpeg";
import pin9 from "@/assets/projects/pin-hideout-9.jpeg";
import pin10 from "@/assets/projects/pin-hideout-10.jpeg";

// Dukes Cottages Images
import dukes1 from "@/assets/projects/dukes-cottages-1.jpg";
import dukes2 from "@/assets/projects/dukes-cottages-2.jpg";
import dukes3 from "@/assets/projects/dukes-cottages-3.jpg";
import dukes4 from "@/assets/projects/dukes-cottages-4.jpg";
import dukes5 from "@/assets/projects/dukes-cottages-5.jpg";
import dukes6 from "@/assets/projects/dukes-cottages-6.jpg";
import dukes7 from "@/assets/projects/dukes-cottages-7.jpg";
import dukes8 from "@/assets/projects/dukes-cottages-8.jpg";
import dukes9 from "@/assets/projects/dukes-cottages-9.jpg";
import dukes10 from "@/assets/projects/dukes-cottages-10.jpg";

// Stone Lounge Images
import stone1 from "@/assets/projects/stone-lounge-1.jpeg";
import stone2 from "@/assets/projects/stone-lounge-2.jpeg";
import stone3 from "@/assets/projects/stone-lounge-3.jpeg";
import stone4 from "@/assets/projects/stone-lounge-4.jpeg";
import stone5 from "@/assets/projects/stone-lounge-5.jpeg";
import stone6 from "@/assets/projects/stone-lounge-6.jpeg";
import stone7 from "@/assets/projects/stone-lounge-7.jpeg";
import stone8 from "@/assets/projects/stone-lounge-8.jpeg";
import stone9 from "@/assets/projects/stone-lounge-9.jpeg";

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
  {
    id: "pin-hideout",
    title: "The Pin Hideout Limited",
    location: "Kenya",
    category: "Road & Cabro Construction",
    description: "Complete cabro paving and road construction project for a commercial complex, including earthworks, drainage, and professional finishing.",
    fullDescription: "The Pin Hideout Limited project showcases our expertise in road and cabro construction. This comprehensive project involved extensive earthworks and site preparation, stone base laying, professional cabro paving installation in multiple colors and patterns, and complete drainage systems. Our team utilized modern equipment including backhoe loaders for grading and leveling, ensuring precise surveying and quality workmanship throughout. The finished surface provides a durable, attractive parking and access area for this commercial establishment.",
    coverImage: pin7,
    images: [pin1, pin2, pin3, pin4, pin5, pin6, pin7, pin8, pin9, pin10],
    services: ["Road Construction", "Cabro Installation", "Earthworks & Grading", "Drainage Systems"],
  },
  {
    id: "dukes-cottages",
    title: "Dukes Cottages, Restaurant & Garden",
    location: "Kenya",
    category: "Hospitality Construction",
    description: "An elegant hospitality complex featuring modern cottages, a fine dining restaurant, and beautifully landscaped gardens.",
    fullDescription: "Dukes Cottages represents our expertise in hospitality sector development. This comprehensive project includes multiple luxury cottages designed for comfort and privacy, a full-service restaurant with modern kitchen facilities, and extensive garden landscaping. Every element was carefully planned to create a cohesive guest experience that combines elegance with functionality.",
    coverImage: dukes1,
    images: [dukes1, dukes2, dukes3, dukes4, dukes5, dukes6, dukes7, dukes8, dukes9, dukes10],
    services: ["Architecture & Design", "General Construction", "Interior Design", "Landscaping"],
  },
  {
    id: "stone-lounge",
    title: "Stone Lounge & Villas",
    location: "Kenya",
    category: "Residential & Commercial",
    description: "A premium development combining luxury villas with a sophisticated lounge space featuring natural stone facades.",
    fullDescription: "Stone Lounge & Villas showcases our capability to deliver high-end residential and commercial developments. The project features distinctive natural stone architecture, modern villa design with contemporary interiors, premium cabro paving throughout, professional drainage systems, and beautifully landscaped grounds. This comprehensive development exemplifies our commitment to creating spaces that combine aesthetic beauty with lasting quality and functionality.",
    coverImage: stone4,
    images: [stone1, stone2, stone3, stone4, stone5, stone6, stone7, stone8, stone9],
    services: ["Architecture & Design", "General Construction", "Cabro Installation", "Drainage Systems", "Interior Design"],
  },
];

// Portfolio Categories
const portfolioCategories = [
  { id: "all", label: "All Projects", path: "/portfolio" },
  { id: "commercial", label: "Commercial Construction", path: "/portfolio/commercial" },
  { id: "road-cabro", label: "Road & Cabro Construction", path: "/portfolio/road-cabro" },
  { id: "hospitality", label: "Hospitality Construction", path: "/portfolio/hospitality" },
];

const PortfolioPage = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const openLightbox = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Construction"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/80 to-navy" />
        </div>
        
        <div className="container-custom relative z-10 pt-16 sm:pt-20 px-4 sm:px-6">
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

          {/* Category Dropdown - Left aligned */}
          <div className="flex justify-start">
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="bg-navy/50 hover:bg-navy text-cream px-5 py-2.5 rounded-full shadow-lg flex items-center gap-2 transition-all duration-300 backdrop-blur-sm border border-cream/10 hover:border-cream/30 text-sm font-medium"
              >
                <span>Categories</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-full mt-2 w-56 bg-white rounded-xl shadow-xl border border-border overflow-hidden z-50"
                  >
                    {portfolioCategories.map((category) => (
                      <Link
                        key={category.id}
                        to={category.path}
                        onClick={() => setIsDropdownOpen(false)}
                        className="block px-5 py-3 text-left hover:bg-muted transition-colors border-b border-border/50 last:border-0"
                      >
                        <span className="font-medium text-foreground text-sm">{category.label}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

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
              Our Work
            </h1>
            <p className="text-cream/80 text-base sm:text-lg md:text-xl">
              Explore our portfolio of completed projects that showcase our commitment 
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
              transition={{ duration: 0.5 }}
              className={`mb-20 ${index !== projects.length - 1 ? "pb-20 border-b border-border" : ""}`}
            >
              {/* Project Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                <div>
                  <span className="text-navy-dark text-sm font-semibold uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2">
                    {project.title}
                  </h2>
                  <div className="flex items-center gap-2 text-muted-foreground mt-2">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </div>
                </div>
                <Button variant="navyOutline" onClick={() => openLightbox(project)}>
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Gallery
                </Button>
              </div>

              {/* Image Gallery Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                {project.images.slice(0, 8).map((image, imgIndex) => (
                  <motion.div
                    key={imgIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: imgIndex * 0.05 }}
                    className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                      imgIndex === 0 ? "col-span-2 row-span-2" : ""
                    }`}
                    onClick={() => {
                      setSelectedProject(project);
                      setCurrentImageIndex(imgIndex);
                      document.body.style.overflow = "hidden";
                    }}
                  >
                    <img
                      src={image}
                      alt={`${project.title} - Image ${imgIndex + 1}`}
                      className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                        imgIndex === 0 ? "aspect-square md:aspect-[4/3]" : "aspect-square"
                      }`}
                    />
                    <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-colors duration-300 flex items-center justify-center">
                      <span className="text-cream opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                        View
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Project Description */}
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.fullDescription}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Services Provided:</h4>
                  <ul className="space-y-2">
                    {project.services.map((service) => (
                      <li key={service} className="flex items-center gap-2 text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-navy-dark rounded-full" />
                        {service}
                      </li>
                    ))}
                  </ul>
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
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-cream mb-6">
              Your Project Could Be Next
            </h2>
            <p className="text-cream/70 text-lg max-w-2xl mx-auto mb-8">
              Let us bring your vision to life. Contact us today to discuss your project.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">Start Your Project</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-navy-dark/98 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-cream hover:text-cream/70 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Image */}
              <div className="relative aspect-video bg-navy rounded-2xl overflow-hidden">
                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt={selectedProject.title}
                  className="w-full h-full object-contain"
                />

                {/* Navigation Arrows */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-navy/80 rounded-full flex items-center justify-center text-cream hover:bg-cream hover:text-navy-dark transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-navy/80 rounded-full flex items-center justify-center text-cream hover:bg-cream hover:text-navy-dark transition-colors"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}

                {/* Image Counter */}
                {selectedProject.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-navy/80 px-4 py-2 rounded-full text-cream text-sm">
                    {currentImageIndex + 1} / {selectedProject.images.length}
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-serif font-bold text-cream mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-cream/70">
                  {selectedProject.location}
                </p>
              </div>

              {/* Thumbnails */}
              {selectedProject.images.length > 1 && (
                <div className="flex gap-2 mt-6 overflow-x-auto pb-2 justify-center">
                  {selectedProject.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                        idx === currentImageIndex ? "border-cream" : "border-transparent"
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
      
    </div>
  );
};

export default PortfolioPage;
