import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={roadsImg} alt="Road Construction" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/80 to-navy" />
        </div>
        <div className="container-custom relative z-10 pt-20">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="mb-8">
            <Link to="/services" className="inline-flex items-center gap-2 text-cream/70 hover:text-cream hover:bg-cream/10 px-4 py-2 rounded-full transition-all duration-300 backdrop-blur-sm border border-cream/10 hover:border-cream/30">
              <ArrowLeft className="w-4 h-4" /><span className="font-medium">Back to Services</span>
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-cream mb-6">Road Construction</h1>
            <p className="text-cream/80 text-lg md:text-xl">Expert road construction services that connect communities and drive development across Kenya.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-6">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] shadow-elegant">
                <img src={roadsImg} alt="Road Construction Work" className="w-full h-full object-cover" />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Building Roads That <span className="text-navy-dark font-bold">Connect Communities</span></h2>
              <div className="prose prose-lg text-muted-foreground mb-8">
                <p className="mb-4">At Shena Works Limited, we specialize in comprehensive road construction services that form the backbone of infrastructure development.</p>
                <p className="mb-4">With years of experience in the East African market, we understand the unique challenges of road construction in diverse terrains and climates.</p>
                <p>Whether it's laying fresh tarmac, rehabilitating existing roads, or installing intricate drainage systems, we approach every project with precision and dedication.</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-navy-dark shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              <Button variant="navy" size="lg" asChild>
                <Link to="/contact">Contact Us <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-cream mb-6 uppercase tracking-wide">Ready to Build Quality Roads?</h2>
            <p className="text-cream/70 text-lg max-w-2xl mx-auto mb-8">Contact us today for a free consultation.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild><Link to="/contact">Contact Us</Link></Button>
              <Button variant="heroOutline" size="xl" asChild><Link to="/services">View All Services</Link></Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      
      
    </div>
  );
};

export default RoadConstructionPage;
