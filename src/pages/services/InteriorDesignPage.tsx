import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import interiorImg from "@/assets/services/interior.jpg";
import dc1 from "@/assets/services/interior/int1.jpeg";
import dc2 from "@/assets/services/interior/int2.jpeg";
import dc3 from "@/assets/services/interior/int3.jpeg";
import dc4 from "@/assets/services/interior/int4.jpeg";
import dc5 from "@/assets/services/interior/int5.jpeg";
import dc6 from "@/assets/services/interior/int6.jpeg";

const features = ["Space Planning","Furniture Selection & Custom Design","Lighting Design","Color Consultation","Material & Finish Selection","Project Coordination","Home Staging","Commercial Interiors"];
const galleryImages = [{ src: dc1, alt: "Interior 1" },{ src: dc2, alt: "Interior 2" },{ src: dc3, alt: "Interior 3" },{ src: dc4, alt: "Interior 4" },{ src: dc5, alt: "Interior 5" },{ src: dc6, alt: "Interior 6" }];

const InteriorDesignPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="relative pb-32 overflow-hidden">
        <div className="absolute inset-0"><img src={interiorImg} alt="Interior Design" className="w-full h-full object-cover" decoding="async" /><div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/80 to-navy" /></div>
        <div className="container-custom relative z-10 pt-20">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-8">
            <Link to="/services" className="inline-flex items-center gap-2 text-cream/70 hover:text-cream hover:bg-cream/10 px-4 py-2 rounded-full transition-all backdrop-blur-sm border border-cream/10 hover:border-cream/30"><ArrowLeft className="w-4 h-4" /><span className="font-medium">Back to Services</span></Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-cream mb-6">Interior Design</h1>
            <p className="text-cream/80 text-lg md:text-xl">Innovative interior design solutions that blend functionality with aesthetics.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Creating Interiors That <span className="text-navy-dark font-bold">Tell Stories</span></h2>
              <div className="prose prose-lg text-muted-foreground mb-8">
                <p className="mb-4">At Shena Works Limited, we create interiors that reflect your personality and meet your functional needs.</p>
                <p className="mb-4">Our approach to interior design is holistic—we consider every element from spatial planning to the finest finishing details.</p>
                <p>We understand that great interiors are about more than just aesthetics. They're about creating environments that enhance well-being.</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {features.map((f) => (<div key={f} className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-navy-dark shrink-0" /><span className="text-foreground">{f}</span></div>))}
              </div>
              <Button variant="navy" size="lg" asChild><Link to="/contact">Contact Us <ArrowRight className="ml-2 h-5 w-5" /></Link></Button>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative overflow-hidden rounded-2xl aspect-[4/3] shadow-elegant">
              <img src={interiorImg} alt="Interior Design Services" className="w-full h-full object-cover" decoding="async" />
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-serif font-bold text-foreground mb-8 text-center">Our Interior Design Portfolio</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }} className="relative overflow-hidden rounded-xl aspect-[4/3] shadow-md hover:shadow-elegant transition-shadow">
                  <img src={image.src} alt={image.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-navy">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-cream mb-6 uppercase tracking-wide">Ready to Transform Your Space?</h2>
            <p className="text-cream/70 text-lg max-w-2xl mx-auto mb-8">Contact us today for a free consultation.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild><Link to="/contact">Contact Us</Link></Button>
              <Button variant="heroOutline" size="xl" asChild><Link to="/services">View All Services</Link></Button>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer /><WhatsAppButton /><BackToTop />
    </div>
  );
};

export default InteriorDesignPage;
