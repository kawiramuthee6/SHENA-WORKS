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
import roadsImg from "@/assets/services/roads.jpg";

const features = [
  "Tarmac/Asphalt Road Construction",
  "Road Repairs & Rehabilitation",
  "Cabro/Paving Block Installation",
  "Drainage Systems & Culverts",
  "Road Marking & Signage",
  "Grading & Earthworks",
  "Highway Development",
  "Access Road Construction",
];

const RoadConstructionPage = () => {
  const [quoteModal, setQuoteModal] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar onQuoteClick={() => setQuoteModal(true)} />
      
      {/* Hero Section */}
      <section className="relative pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={roadsImg}
            alt="Road Construction"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/80 to-navy" />
        </div>
        
        <div className="container-custom relative z-10 pt-20">
          <Breadcrumb
            items={[
              { label: "Services", href: "/services" },
              { label: "Road Construction" }
            ]}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-cream mb-6">
              Road Construction
            </h1>
            <p className="text-cream/80 text-lg md:text-xl">
              Expert road construction services that connect communities and drive development across Kenya and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] shadow-elegant">
                <img
                  src={roadsImg}
                  alt="Road Construction Work"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                Building Roads That <span className="text-navy-dark font-bold">Connect Communities</span>
              </h2>
              
              <div className="prose prose-lg text-muted-foreground mb-8">
                <p className="mb-4">
                  At Shena Works Limited, we specialize in comprehensive road construction services that form the backbone of infrastructure development. Our expertise spans from major highway construction to residential access roads, ensuring every project meets the highest standards of quality and durability.
                </p>
                <p className="mb-4">
                  With years of experience in the East African market, we understand the unique challenges of road construction in diverse terrains and climates. Our team of skilled engineers and technicians utilize modern equipment and proven methodologies to deliver roads that stand the test of time.
                </p>
                <p>
                  Whether it's laying fresh tarmac, rehabilitating existing roads, or installing intricate drainage systems, we approach every project with precision and dedication. Our commitment to timely delivery and budget adherence has made us a trusted partner for both public and private sector clients.
                </p>
              </div>

              {/* Features */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-navy-dark shrink-0" />
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
              Ready to Build Quality Roads?
            </h2>
            <p className="text-cream/70 text-lg max-w-2xl mx-auto mb-8">
              Contact us today for a free consultation. Let's create infrastructure that connects and empowers communities.
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
        preSelectedService="Road Construction"
      />
    </div>
  );
};

export default RoadConstructionPage;
