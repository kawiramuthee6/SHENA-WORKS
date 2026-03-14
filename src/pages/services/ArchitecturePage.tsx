import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import QuoteModal from "@/components/QuoteModal";
import Breadcrumb from "@/components/Breadcrumb";
import { useState } from "react";
import architectureImg from "@/assets/services/architecture.jpg";

// Import additional images for gallery
import sl1 from "@/assets/services/arch/arch1.jpeg";
import sl2 from "@/assets/services/arch/arch2.jpeg";
import sl3 from "@/assets/services/arch/arch3.jpeg";
import sl4 from "@/assets/services/general const/gc2.jpeg";
import sl5 from "@/assets/services/general const/gc1.jpeg";
import sl6 from "@/assets/projects/dukes-cottages-9.jpg";

const features = [
  "Architectural Design",
  "Feasibility Studies",
  "Building Permits & Approvals",
  "Structural Engineering",
  "Landscape Design",
  "Construction Supervision",
  "3D Visualization & Modeling",
  "Sustainable Design Solutions",
];

const galleryImages = [
  { src: sl1, alt: "Stone Lounge - Architectural Design" },
  { src: sl2, alt: "Stone Lounge - Interior Architecture" },
  { src: sl3, alt: "Stone Lounge - Exterior Design" },
  { src: sl4, alt: "Stone Lounge - Structural Elements" },
  { src: sl5, alt: "Stone Lounge - Design Details" },
  { src: sl6, alt: "Stone Lounge - Finishing" },
];

const ArchitecturePage = () => {
  const [quoteModal, setQuoteModal] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar onQuoteClick={() => setQuoteModal(true)} />
      
      {/* Hero Section */}
      <section className="relative pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={architectureImg}
            alt="Architecture & Consultancy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/80 to-navy" />
        </div>
        
        <div className="container-custom relative z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Breadcrumb
              items={[
                { label: "Services", href: "/services" },
                { label: "Architecture & Consultancy" }
              ]}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-cream mb-6">
              Architecture & Consultancy
            </h1>
            <p className="text-cream/80 text-lg md:text-xl">
              Creative architectural design and professional consultancy services that transform your vision into reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-2xl aspect-[4/3] shadow-elegant"
            >
              <img
                src={architectureImg}
                alt="Architecture Services"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                Designing Spaces That <span className="text-navy-dark font-bold">Inspire</span>
              </h2>
              
              <div className="prose prose-lg text-muted-foreground mb-8">
                <p className="mb-4">
                  Our architectural team at Shena Works Limited combines creativity with technical expertise to design spaces that are functional, aesthetically pleasing, and sustainable. We provide end-to-end design solutions that transform concepts into buildable realities.
                </p>
                <p className="mb-4">
                  From initial sketches to detailed construction drawings, we work closely with our clients to understand their vision, needs, and constraints. Our designs balance innovation with practicality, ensuring that every project is both beautiful and functional.
                </p>
                <p>
                  Our consultancy services extend beyond design to include feasibility studies, regulatory compliance, and project supervision. We guide our clients through every stage of the development process, ensuring smooth execution and successful outcomes.
                </p>
              </div>

              {/* Features */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-gold shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant="gold" 
                size="lg" 
                onClick={() => setQuoteModal(true)}
              >
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>

          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-serif font-bold text-foreground mb-8 text-center">
              Our Architectural Portfolio
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative overflow-hidden rounded-xl aspect-[4/3] shadow-md hover:shadow-elegant transition-shadow"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
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
              Ready to Design Your Vision?
            </h2>
            <p className="text-cream/70 text-lg max-w-2xl mx-auto mb-8">
              Contact us today for a free consultation. Let's create spaces that inspire and delight.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" onClick={() => setQuoteModal(true)}>
                Get a Free Quote
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/services">View All Services</Link>
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
        preSelectedService="Architecture & Consultancy"
      />
    </div>
  );
};

export default ArchitecturePage;
