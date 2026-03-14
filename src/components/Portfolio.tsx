import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

// Black Perch Images
import bp1 from "@/assets/projects/black-perch-1.jpeg";
import bp2 from "@/assets/projects/black-perch-2.jpeg";
import bp3 from "@/assets/projects/black-perch-3.jpeg";
import bp4 from "@/assets/projects/black-perch-4.jpeg";
import bp6 from "@/assets/projects/black-perch-6.jpeg";
import bp7 from "@/assets/projects/black-perch-7.jpeg";

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

// Stone Lounge
import stoneImg from "@/assets/projects/stone-lounge-4.jpeg";

interface Project {
  id: string;
  title: string;
  location: string;
  category: string;
  description: string;
  coverImage: string;
  images: string[];
}

const projects: Project[] = [
  {
    id: "black-perch",
    title: "Black Perch Lounge",
    location: "Meru, Kenya",
    category: "Commercial Construction",
    description:
      "A stunning entertainment lounge featuring modern architecture with unique grass-tile flooring, ambient lighting, and lush landscaping. The project showcases our expertise in commercial space transformation.",
    coverImage: bp4,
    images: [bp1, bp2, bp3, bp4, bp6, bp7],
  },
  {
    id: "dukes-cottages",
    title: "Dukes Cottages, Restaurant & Garden",
    location: "Kenya",
    category: "Hospitality Construction",
    description:
      "An elegant hospitality complex featuring modern cottages, a fine dining restaurant, and beautifully landscaped gardens with cabro paving. This project demonstrates our ability to create luxurious, functional spaces.",
    coverImage: dukes1,
    images: [dukes1, dukes2, dukes3, dukes4, dukes5, dukes6, dukes7, dukes8, dukes9, dukes10],
  },
  {
    id: "stone-lounge",
    title: "Stone Lounge & Villas",
    location: "Kenya",
    category: "Residential & Commercial",
    description:
      "A premium development combining luxury villas with a sophisticated lounge space. Natural stone facades and contemporary design elements create an atmosphere of refined elegance.",
    coverImage: stoneImg,
    images: [stoneImg],
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
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
    <section id="portfolio" className="py-24 bg-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-navy-dark font-semibold text-sm uppercase tracking-wider mb-4">
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Featured <span className="text-gradient-gold">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our portfolio of completed projects that showcase our commitment
            to quality, innovation, and client satisfaction.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => openLightbox(project)}
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="text-cream/80 text-sm font-medium mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-cream mb-2 group-hover:text-cream/80 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1 text-cream/70 text-sm">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </div>
                </div>

                {/* View Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="hero" size="lg">
                    View Project
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-navy-dark/95 flex items-center justify-center p-4"
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
                    className="w-full h-full object-cover"
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
                  <p className="text-cream/70 max-w-2xl mx-auto">
                    {selectedProject.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;
