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

// Import construction images
import bp1 from "@/assets/services/general const/gc1.jpeg";
import bp2 from "@/assets/services/general const/gc2.jpeg";
import bp3 from "@/assets/services/general const/gc3.jpeg";
import bp4 from "@/assets/services/general const/gc4.jpeg";
import bp6 from "@/assets/services/general const/gc5.jpeg";
import bp7 from "@/assets/projects/black-perch-7.jpeg";
import constructionVid from "@/assets/services/construction.mp4";

const features = [
  "Residential Buildings",
  "Commercial Complexes",
  "Industrial Structures",
  "Renovations & Extensions",
  "Structural Steel Works",
  "Concrete & Masonry Works",
  "Foundation Works",
  "Roofing Solutions",
];

const galleryImages = [
  { src: bp1, alt: "Black Perch Lounge - Exterior" },
  { src: bp2, alt: "Dukes Cottages 2" },
  { src: bp3, alt: "Black Perch Lounge - Details" },
  { src: bp4, alt: "Black Perch Lounge - Architecture" },
  { src: bp6, alt: "Black Perch Lounge - Structure" },
  { src: bp7, alt: "Black Perch Lounge - Finishing" },
];

const GeneralConstructionPage = () => {
  const [quoteModal, setQuoteModal] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar onQuoteClick={() => setQuoteModal(true)} />
      
      {/* Hero Section with Video */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <video
            src={constructionVid}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/80 to-navy" />
        </div>
        
        <div className="container-custom relative z-10 pt-20">
          <Breadcrumb
            items={[
              { label: "Services", href: "/services" },
              { label: "General Construction" }
            ]}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-cream mb-6">
              General Construction
            </h1>
            <p className="text-cream/80 text-lg md:text-xl">
              From foundation to finish, we build quality structures that stand the test of time.
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
                Building Structures That <span className="text-gradient-gold">Inspire</span>
              </h2>
              
              <div className="prose prose-lg text-muted-foreground mb-8">
                <p className="mb-4">
                  At Shena Works Limited, we handle all aspects of building construction with expertise and precision. From residential homes to commercial complexes and industrial facilities, our experienced team delivers quality structures that meet international standards while respecting local contexts.
                </p>
                <p className="mb-4">
                  Our construction philosophy centers on combining modern techniques with proven methodologies. We believe that every building should be built to last, incorporating sustainable practices and materials that ensure longevity and efficiency.
                </p>
                <p>
                  With a portfolio spanning diverse projects across Kenya, we've established ourselves as a reliable partner for construction projects of any scale. Our commitment to quality, safety, and timely delivery has earned us the trust of clients in both the public and private sectors.
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
                src={bp6}
                alt="General Construction Work"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
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
              Our Construction Projects
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
              Ready to Build Your Dream Project?
            </h2>
            <p className="text-cream/70 text-lg max-w-2xl mx-auto mb-8">
              Contact us today for a free consultation. Let's transform your vision into reality.
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
        preSelectedService="General Construction"
      />
    </div>
  );
};

export default GeneralConstructionPage;
