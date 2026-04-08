import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Truck, Package, HardHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import Testimonials from "@/components/Testimonials";
import roadsImg from "@/assets/services/roads.jpg";
import bp4 from "@/assets/projects/black-perch-4.jpeg";
import interiorImg from "@/assets/services/interior.jpg";
import dukesImg from "@/assets/projects/dukes-cottages-1.jpg";
import stoneImg from "@/assets/projects/stone-lounge-4.jpeg";
import hero1 from "@/assets/hero/hero-1.jpg";
import aboutImg from "@/assets/hero/hero-4.jpg";

const services = [
  {
    title: "Road Construction",
    description: "We build and maintain roads, drainage systems, cabro installations, and tarmac works that connect communities and support economic growth across Kenya.",
    image: roadsImg,
    path: "/services/road-construction",
  },
  {
    title: "General Construction",
    description: "From residential homes to commercial buildings, we deliver quality structures built to last — on time, on budget, and to the highest standards.",
    image: bp4,
    path: "/services/general-construction",
  },
  {
    title: "Interior Design",
    description: "Our design team creates innovative interiors that blend functionality with modern aesthetics, transforming spaces into experiences.",
    image: interiorImg,
    path: "/services/interior-design",
  },
];

const projects = [
  { title: "Black Perch Lounge", location: "Meru, Kenya", image: bp4 },
  { title: "Dukes Cottages", location: "Kenya", image: dukesImg },
  { title: "Stone Lounge & Villas", location: "Kenya", image: stoneImg },
];

const materials = [
  { icon: Package, name: "Building Materials", description: "Cement, sand, ballast, stones, bricks, and all masonry supplies." },
  { icon: Truck, name: "Transport & Logistics", description: "Lorries, trucks, and heavy-duty transport for material delivery across Kenya." },
  { icon: HardHat, name: "Heavy Machinery", description: "Caterpillars, excavators, rollers, and equipment for road and site works." },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section - Full screen, image behind navbar */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden -mt-[7.25rem] lg:-mt-[7.25rem]">
        <div className="absolute inset-0">
          <img
            src={hero1}
            alt="Shena Works"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-navy-dark/50" />
        </div>

        <div className="relative z-10 text-center px-4 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-cream/50 text-[10px] md:text-xs tracking-[0.35em] uppercase mb-5">
              Welcome to
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-cream mb-4 leading-[1.1]">
              Shena Works Limited
            </h1>
            <div className="w-16 h-[1px] bg-cream/30 mx-auto mb-4" />
            <p className="text-cream/60 text-xs md:text-sm tracking-[0.15em] uppercase">
              Roads & Building Construction Contractors
            </p>
          </motion.div>
        </div>

      </section>

      {/* About Us Mini Section */}
      <section className="py-10 md:py-14 bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden"
            >
              <img src={aboutImg} alt="About Shena Works" className="w-full h-[280px] md:h-[380px] object-cover" loading="lazy" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-navy-dark uppercase tracking-wide mb-5">
                ABOUT COMPANY
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base mb-4">
                Shena Works Limited is a registered construction and design firm based in Kenya. We specialize in road construction, general building, architectural consultancy, interior design, and project management.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base mb-6">
                With a team of experienced civil engineers, architects, and skilled tradespeople, we deliver projects that meet the highest standards of quality, safety, and innovation.
              </p>
              <Button variant="navy" size="lg" asChild>
                <Link to="/about">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-14 md:py-20 bg-muted/30">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-navy-dark uppercase tracking-wide mb-3">
              WHAT WE DO
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">From roads that connect communities to buildings that stand the test of time.</p>
          </motion.div>

          <div className="space-y-10 md:space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`grid md:grid-cols-2 gap-6 md:gap-10 items-center`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="rounded-2xl overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-[220px] md:h-[300px] object-cover" loading="lazy" />
                  </div>
                </div>
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <h3 className="text-lg md:text-xl font-serif font-bold text-navy-dark uppercase tracking-wide mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base mb-4">{service.description}</p>
                  <Link to={service.path} className="inline-flex items-center text-navy-dark font-semibold text-sm uppercase tracking-wide hover:text-navy-light transition-colors">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-10">
            <Button variant="navy" size="lg" asChild>
              <Link to="/services">See All Services <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Materials & Equipment */}
      <section className="py-14 md:py-20 bg-navy">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-cream uppercase tracking-wide mb-3">
              MATERIALS & EQUIPMENT
            </h2>
            <p className="text-cream/70 text-sm md:text-base">
              We supply and deliver all construction materials and heavy machinery to your project site, anywhere in Kenya.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {materials.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-navy-light/50 backdrop-blur-sm border border-cream/10 rounded-2xl p-6 text-center hover:border-cream/30 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-cream/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-cream" />
                </div>
                <h3 className="text-lg font-serif font-bold text-cream mb-2">{item.name}</h3>
                <p className="text-cream/70 leading-relaxed text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-8">
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/contact">Enquire Now <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Featured Projects - Show only 3 images with View Gallery */}
      <section className="py-14 md:py-20 bg-navy">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-cream uppercase tracking-wide mb-3">
              FEATURED PROJECTS
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-5 md:gap-6">
            {projects.map((project, index) => (
              <motion.div key={project.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                <Link to="/portfolio">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute inset-0 p-4 md:p-5 flex flex-col justify-end">
                    <h3 className="text-base md:text-lg font-serif font-bold text-cream">{project.title}</h3>
                    <p className="text-cream/70 text-xs">{project.location}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-8">
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/portfolio">View Gallery <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-navy-dark uppercase tracking-wide mb-5">Ready to Start Your Project?</h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto mb-6">Contact us today for a free consultation. Let's build something amazing together.</p>
            <Button variant="navy" size="lg" asChild>
              <Link to="/contact">Contact Us <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
};

export default Index;
