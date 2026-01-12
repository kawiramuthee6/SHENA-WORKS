import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, MapPin, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import heroImage from "@/assets/hero-construction.jpg";

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

// Other Projects
import dukesImg from "@/assets/projects/dukes-cottages-1.jpg";
import stoneImg from "@/assets/projects/stone-lounge-1.jpg";

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
    id: "dukes-cottages",
    title: "Dukes Cottages, Restaurant & Garden",
    location: "Kenya",
    category: "Hospitality Construction",
    description: "An elegant hospitality complex featuring modern cottages, a fine dining restaurant, and beautifully landscaped gardens.",
    fullDescription: "Dukes Cottages represents our expertise in hospitality sector development. This comprehensive project includes multiple luxury cottages designed for comfort and privacy, a full-service restaurant with modern kitchen facilities, and extensive garden landscaping. Every element was carefully planned to create a cohesive guest experience that combines elegance with functionality.",
    coverImage: dukesImg,
    images: [dukesImg],
    services: ["Architecture & Design", "General Construction", "Interior Design", "Landscaping"],
  },
  {
    id: "stone-lounge",
    title: "Stone Lounge & Villas",
    location: "Kenya",
    category: "Residential & Commercial",
    description: "A premium development combining luxury villas with a sophisticated lounge space featuring natural stone facades.",
    fullDescription: "Stone Lounge & Villas showcases our capability to deliver high-end residential and commercial developments. The project features distinctive natural stone architecture, contemporary interior design, premium finishing materials, and integrated outdoor living spaces. This development exemplifies our commitment to creating spaces that combine aesthetic beauty with lasting quality.",
    coverImage: stoneImg,
    images: [stoneImg],
    services: ["Architecture & Design", "General Construction", "Interior Design", "Project Management"],
  },
];

const PortfolioPage = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block text-gold font-semibold text-sm uppercase tracking-wider mb-4">
              Our Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-cream mb-6">
              Our Work
            </h1>
            <p className="text-cream/80 text-lg md:text-xl">
              Explore our portfolio of completed projects that showcase our commitment 
              to quality, innovation, and client satisfaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 bg-background">
        <div className="container-custom">
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
                  <span className="text-gold text-sm font-semibold uppercase tracking-wider">
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
                        <span className="w-1.5 h-1.5 bg-gold rounded-full" />
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
                className="absolute -top-12 right-0 text-cream hover:text-gold transition-colors"
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
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-navy/80 rounded-full flex items-center justify-center text-cream hover:bg-gold hover:text-navy-dark transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-navy/80 rounded-full flex items-center justify-center text-cream hover:bg-gold hover:text-navy-dark transition-colors"
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
                        idx === currentImageIndex ? "border-gold" : "border-transparent"
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
    </div>
  );
};

export default PortfolioPage;
