import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle, ArrowLeft, X, ChevronLeft, ChevronRight, Images } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import bp1 from "@/assets/services/general const/gc1.jpeg";
import bp2 from "@/assets/services/general const/gc2.jpeg";
import bp3 from "@/assets/services/general const/gc3.jpeg";
import bp4 from "@/assets/services/general const/gc4.jpeg";
import bp5 from "@/assets/services/general const/gc5.jpeg";
import bp6 from "@/assets/services/general const/gc6.jpeg";
import bp7 from "@/assets/services/general const/gc7.jpeg";
import bp8 from "@/assets/services/general const/gc8.jpeg";
import bp9 from "@/assets/services/general const/gc9.jpeg";
import bp10 from "@/assets/services/general const/gc10.jpeg";
import heroImg from "@/assets/services/general const/gc-hero.jpeg";
import gcVid1 from "@/assets/services/general const/gc-video1.mp4";
import gcVid2 from "@/assets/services/general const/gc-video2.mp4";
import gcVid3 from "@/assets/services/general const/gc-video3.mp4";

const features = ["Residential Buildings","Commercial Complexes","Industrial Structures","Renovations & Extensions","Structural Steel Works","Concrete & Masonry Works","Foundation Works","Roofing Solutions"];

const galleryImages = [
  { src: bp1, alt: "Construction 1" },{ src: bp2, alt: "Construction 2" },{ src: bp3, alt: "Construction 3" },
  { src: bp4, alt: "Construction 4" },{ src: bp5, alt: "Construction 5" },{ src: bp6, alt: "Reinforcement Works" },
  { src: bp7, alt: "Site Works" },{ src: bp8, alt: "Concrete Pouring" },{ src: bp9, alt: "Formwork" },
  { src: bp10, alt: "Structural Framework" },
];

const galleryVideos = [
  { src: gcVid1, alt: "Construction Video 1" },
  { src: gcVid2, alt: "Construction Video 2" },
  { src: gcVid3, alt: "Construction Video 3" },
];

const GeneralConstructionPage = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const previewImages = galleryImages.slice(0, 2);
  const remainingCount = galleryImages.length - 2;

  const openGallery = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const next = () => setCurrentIndex((i) => (i + 1) % galleryImages.length);
  const prev = () => setCurrentIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length);

  return (
    <div className="min-h-screen">
{/* Hero with image instead of video */}
      <section className="relative pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="General Construction" className="w-full h-full object-cover" loading="eager" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/80 to-navy" />
        </div>
        <div className="container-custom relative z-10 pt-20">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-8">
            <Link to="/services" className="inline-flex items-center gap-2 text-cream/70 hover:text-cream hover:bg-cream/10 px-4 py-2 rounded-full transition-all backdrop-blur-sm border border-cream/10 hover:border-cream/30">
              <ArrowLeft className="w-4 h-4" /><span className="font-medium">Back to Services</span>
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-cream mb-6">General Construction</h1>
            <p className="text-cream/80 text-lg md:text-xl">From foundation to finish, we build quality structures that stand the test of time.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Building Structures That <span className="text-navy-dark font-bold">Inspire</span></h2>
              <div className="prose prose-lg text-muted-foreground mb-8">
                <p className="mb-4">At Shena Works Limited, we handle all aspects of building construction with expertise and precision.</p>
                <p className="mb-4">Our construction philosophy centers on combining modern techniques with proven methodologies.</p>
                <p>With a portfolio spanning diverse projects across Kenya, we've established ourselves as a reliable partner for construction projects of any scale.</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {features.map((f) => (<div key={f} className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-navy-dark shrink-0" /><span className="text-foreground">{f}</span></div>))}
              </div>
              <Button variant="navy" size="lg" asChild><Link to="/contact">Contact Us <ArrowRight className="ml-2 h-5 w-5" /></Link></Button>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative overflow-hidden rounded-2xl aspect-[4/3] shadow-elegant">
              <img src={bp5} alt="General Construction Work" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </motion.div>
          </div>

          {/* Gallery Preview - 2 images + View Gallery button */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-serif font-bold text-foreground mb-8 text-center">Our Construction Projects</h3>
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {previewImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative overflow-hidden rounded-xl aspect-[4/3] shadow-md hover:shadow-elegant transition-shadow cursor-pointer group"
                  onClick={() => openGallery(index)}
                >
                  <img src={image.src} alt={image.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  {index === 1 && remainingCount > 0 && (
                    <div className="absolute inset-0 bg-navy-dark/60 flex items-center justify-center backdrop-blur-[2px]">
                      <div className="text-center text-cream">
                        <Images className="w-8 h-8 mx-auto mb-2" />
                        <span className="text-2xl font-bold">+{remainingCount}</span>
                        <p className="text-sm text-cream/80 mt-1">View All</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-6">
              <Button variant="navy" size="lg" onClick={() => openGallery(0)}>
                <Images className="mr-2 h-5 w-5" /> View Gallery ({galleryImages.length} Photos)
              </Button>
            </div>
          </motion.div>

          {/* Video Gallery */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-8 text-center">Construction in Action</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryVideos.map((video, index) => (
                <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }} className="relative overflow-hidden rounded-xl aspect-[4/3] shadow-md hover:shadow-elegant transition-shadow">
                  <video src={video.src} className="w-full h-full object-cover" autoPlay loop muted playsInline />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-navy-dark flex items-center justify-center"
            onClick={() => setLightboxOpen(false)}
          >
            <div className="relative w-full max-w-3xl mx-auto max-h-[85vh] flex flex-col px-4" onClick={(e) => e.stopPropagation()}>
              {/* Close */}
              <button onClick={() => setLightboxOpen(false)} className="absolute -top-2 right-2 z-10 p-2 rounded-full bg-cream/10 hover:bg-cream/20 text-cream transition-colors">
                <X className="w-5 h-5" />
              </button>

              {/* Main image */}
              <div className="relative flex-1 min-h-0 flex items-center justify-center">
                <button onClick={prev} className="absolute left-0 z-10 p-2 rounded-full bg-cream/10 hover:bg-cream/20 text-cream"><ChevronLeft className="w-6 h-6" /></button>
                <motion.img
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  src={galleryImages[currentIndex].src}
                  alt={galleryImages[currentIndex].alt}
                  className="max-h-[55vh] max-w-full object-contain rounded-lg"
                />
                <button onClick={next} className="absolute right-0 z-10 p-2 rounded-full bg-cream/10 hover:bg-cream/20 text-cream"><ChevronRight className="w-6 h-6" /></button>
              </div>

              {/* Counter */}
              <p className="text-cream/60 text-sm text-center mt-3">{currentIndex + 1} / {galleryImages.length}</p>

              {/* Thumbnails */}
              <div className="flex gap-2 justify-center mt-3 pb-4 overflow-x-auto">
                {galleryImages.map((img, i) => (
                  <button key={i} onClick={() => setCurrentIndex(i)} className={`w-11 h-11 rounded-md overflow-hidden shrink-0 border-2 transition-all ${i === currentIndex ? 'border-cream scale-110' : 'border-transparent opacity-50 hover:opacity-80'}`}>
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="py-20 bg-navy">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-cream mb-6 uppercase tracking-wide">Ready to Build Your Dream Project?</h2>
            <p className="text-cream/70 text-lg max-w-2xl mx-auto mb-8">Contact us today for a free consultation.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild><Link to="/contact">Contact Us</Link></Button>
              <Button variant="heroOutline" size="xl" asChild><Link to="/services">View All Services</Link></Button>
            </div>
          </motion.div>
        </div>
      </section>
</div>
  );
};

export default GeneralConstructionPage;
