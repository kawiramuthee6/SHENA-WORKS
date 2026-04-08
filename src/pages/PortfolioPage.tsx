import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, MapPin, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import PageHero from "@/components/PageHero";

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
import pin11 from "@/assets/projects/pin-hideout-11.jpeg";
import pin12 from "@/assets/projects/pin-hideout-12.jpeg";
import pin13 from "@/assets/projects/pin-hideout-13.jpeg";

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
    fullDescription: "The Black Perch Lounge in Meru is a testament to our ability to create unique, vibrant commercial spaces. This project involved complete construction from the ground up, including innovative outdoor flooring with grass-integrated tile patterns, atmospheric lighting design, landscaping with tropical plants, and custom structural elements.",
    coverImage: bp4,
    images: [bp1, bp2, bp3, bp4, bp6, bp7, bp8, bp9, bp10],
    services: ["General Construction", "Interior Design", "Landscaping", "Road & Parking Construction"],
  },
  {
    id: "pin-hideout",
    title: "The Pin Hideout Limited",
    location: "Kenya",
    category: "Road & Cabro Construction",
    description: "Complete cabro paving and road construction project for a commercial complex.",
    fullDescription: "The Pin Hideout Limited project showcases our expertise in road and cabro construction. This comprehensive project involved extensive earthworks and site preparation, stone base laying, professional cabro paving installation in multiple colors and patterns, and complete drainage systems.",
    coverImage: pin7,
    images: [pin1, pin2, pin3, pin4, pin5, pin6, pin7, pin8, pin9, pin10, pin11, pin12, pin13],
    services: ["Road Construction", "Cabro Installation", "Earthworks & Grading", "Drainage Systems"],
  },
  {
    id: "dukes-cottages",
    title: "Dukes Cottages, Restaurant & Garden",
    location: "Kenya",
    category: "Hospitality Construction",
    description: "An elegant hospitality complex featuring modern cottages, a fine dining restaurant, and beautifully landscaped gardens.",
    fullDescription: "Dukes Cottages represents our expertise in hospitality sector development. This comprehensive project includes multiple luxury cottages designed for comfort and privacy, a full-service restaurant with modern kitchen facilities, and extensive garden landscaping.",
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
    fullDescription: "Stone Lounge & Villas showcases our capability to deliver high-end residential and commercial developments. The project features distinctive natural stone architecture, modern villa design with contemporary interiors, and premium cabro paving throughout.",
    coverImage: stone4,
    images: [stone1, stone2, stone3, stone4, stone5, stone6, stone7, stone8, stone9],
    services: ["Architecture & Design", "General Construction", "Cabro Installation", "Drainage Systems", "Interior Design"],
  },
];

const PortfolioPage = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (project: Project, imgIndex = 0) => {
    setSelectedProject(project);
    setCurrentImageIndex(imgIndex);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => prev === selectedProject.images.length - 1 ? 0 : prev + 1);
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => prev === 0 ? selectedProject.images.length - 1 : prev - 1);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <PageHero
        title="Our Work"
        subtitle="Explore our portfolio of completed projects showcasing quality and innovation."
      />

      {/* Projects - Show only 4 images per project + View Gallery */}
      <section className="py-10 md:py-16 bg-background">
        <div className="container-custom px-4 sm:px-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`mb-14 ${index !== projects.length - 1 ? "pb-14 border-b border-border" : ""}`}
            >
              {/* Project Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div>
                  <span className="text-navy-dark text-xs font-semibold uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-1">
                    {project.title}
                  </h2>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {project.location}
                  </div>
                </div>
                <Button variant="navyOutline" size="sm" onClick={() => openLightbox(project)}>
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Gallery
                </Button>
              </div>

              {/* Show only 4 images */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
                {project.images.slice(0, 4).map((image, imgIndex) => (
                  <motion.div
                    key={imgIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: imgIndex * 0.05 }}
                    className="relative overflow-hidden rounded-xl cursor-pointer group aspect-square"
                    onClick={() => openLightbox(project, imgIndex)}
                  >
                    <img
                      src={image}
                      alt={`${project.title} - Image ${imgIndex + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-colors duration-300 flex items-center justify-center">
                      <span className="text-cream opacity-0 group-hover:opacity-100 transition-opacity font-medium text-sm">
                        View
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed text-sm max-w-3xl">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-cream mb-4 uppercase tracking-wide">
              Your Project Could Be Next
            </h2>
            <p className="text-cream/70 text-sm md:text-base max-w-2xl mx-auto mb-6">
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
            className="fixed inset-0 z-[100] bg-navy-dark/98 flex items-center justify-center p-6 sm:p-8 overflow-y-auto"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-2xl w-full my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button - inside the box, top-right */}
              <button 
                onClick={closeLightbox} 
                className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-navy/80 border border-cream/20 flex items-center justify-center text-cream hover:bg-cream hover:text-navy-dark transition-all duration-200 shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[4/3] max-h-[60vh] bg-navy rounded-2xl overflow-hidden">
                <img src={selectedProject.images[currentImageIndex]} alt={selectedProject.title} className="w-full h-full object-contain" />
                {selectedProject.images.length > 1 && (
                  <>
                    <button onClick={prevImage} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-navy/80 rounded-full flex items-center justify-center text-cream hover:bg-cream hover:text-navy-dark transition-colors">
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button onClick={nextImage} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-navy/80 rounded-full flex items-center justify-center text-cream hover:bg-cream hover:text-navy-dark transition-colors">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-navy/80 px-3 py-1.5 rounded-full text-cream text-xs">
                      {currentImageIndex + 1} / {selectedProject.images.length}
                    </div>
                  </>
                )}
              </div>

              <div className="mt-3 text-center">
                <h3 className="text-lg font-serif font-bold text-cream">{selectedProject.title}</h3>
                <p className="text-cream/70 text-xs">{selectedProject.location}</p>
              </div>

              {selectedProject.images.length > 1 && (
                <div className="flex gap-1.5 mt-3 overflow-x-auto pb-2 justify-center">
                  {selectedProject.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`shrink-0 w-12 h-12 rounded-lg overflow-hidden border-2 transition-colors ${idx === currentImageIndex ? "border-cream" : "border-transparent"}`}
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
