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
import interiorImg from "@/assets/services/interior.jpg";

// Import interior-focused images
import dc1 from "@/assets/services/interior/int1.jpeg";
import dc2 from "@/assets/services/interior/int2.jpeg";
import dc3 from "@/assets/services/interior/int3.jpeg";
import dc4 from "@/assets/services/interior/int4.jpeg";
import dc5 from "@/assets/services/interior/int5.jpeg";
import dc6 from "@/assets/services/interior/int6.jpeg";

const features = [
  "Space Planning",
  "Furniture Selection & Custom Design",
  "Lighting Design",
  "Color Consultation",
  "Material & Finish Selection",
  "Project Coordination",
  "Home Staging",
  "Commercial Interiors",
];

const galleryImages = [
  { src: dc1, alt: "Dukes Cottages - Interior Design" },
  { src: dc2, alt: "Dukes Cottages - Living Space" },
  { src: dc3, alt: "Dukes Cottages - Design Details" },
  { src: dc4, alt: "Dukes Cottages - Modern Interior" },
  { src: dc5, alt: "Dukes Cottages - Finishing Touches" },
  { src: dc6, alt: "Dukes Cottages - Space Design" },
];

const InteriorDesignPage = () => {
  const [quoteModal, setQuoteModal] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar onQuoteClick={() => setQuoteModal(true)} />
      
      {/* Hero Section */}
      <section className="relative pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={interiorImg}
            alt="Interior Design"
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
                { label: "Interior Design" }
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
              Interior Design
            </h1>
            <p className="text-cream/80 text-lg md:text-xl">
              Innovative interior design solutions that blend functionality with aesthetics, creating spaces that inspire and delight.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                Creating Interiors That <span className="text-gradient-gold">Tell Stories</span>
              </h2>
              
              <div className="prose prose-lg text-muted-foreground mb-8">
                <p className="mb-4">
                  At Shena Works Limited, we create interiors that reflect your personality and meet your functional needs. From concept to completion, our designers ensure every space tells a unique story while maintaining the highest standards of quality and craftsmanship.
                </p>
                <p className="mb-4">
                  Our approach to interior design is holistic—we consider every element from spatial planning to the finest finishing details. Whether you're looking to transform a residential space or create an inspiring commercial environment, our team brings creativity, expertise, and attention to detail to every project.
                </p>
                <p>
                  We understand that great interiors are about more than just aesthetics. They're about creating environments that enhance well-being, boost productivity, and bring joy to those who inhabit them. That's why we take the time to understand your lifestyle, preferences, and aspirations before creating designs that truly resonate.
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

            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-2xl aspect-[4/3] shadow-elegant"
            >
              <img
                src={interiorImg}
                alt="Interior Design Services"
                className="w-full h-full object-cover"
              />
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
              Our Interior Design Portfolio
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
              Ready to Transform Your Space?
            </h2>
            <p className="text-cream/70 text-lg max-w-2xl mx-auto mb-8">
              Contact us today for a free consultation. Let's create interiors that reflect your unique style.
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
        preSelectedService="Interior Design"
      />
    </div>
  );
};

export default InteriorDesignPage;
