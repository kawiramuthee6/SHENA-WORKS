import { motion } from "framer-motion";
import { 
  Building2, 
  PenTool, 
  Palette, 
  Calculator, 
  ClipboardList,
  Route,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import heroImage from "@/assets/hero-construction.jpg";
import roadsImg from "@/assets/services/roads.jpg";
import constructionImg from "@/assets/services/construction.jpg";
import architectureImg from "@/assets/services/architecture.jpg";
import interiorImg from "@/assets/services/interior.jpg";

const services = [
  {
    id: "roads",
    icon: Route,
    title: "Road Construction",
    shortDesc: "Expert road construction services including tarmac laying, repairs, cabro installation, and drainage systems.",
    description: "We specialize in comprehensive road construction services that connect communities and drive development. Our expertise covers everything from major highway construction to residential access roads.",
    image: roadsImg,
    features: [
      "Tarmac/Asphalt Road Construction",
      "Road Repairs & Rehabilitation",
      "Cabro/Paving Block Installation",
      "Drainage Systems & Culverts",
      "Road Marking & Signage",
      "Grading & Earthworks"
    ],
  },
  {
    id: "construction",
    icon: Building2,
    title: "General Construction",
    shortDesc: "Comprehensive building services from residential homes to commercial complexes, delivered on time and within budget.",
    description: "From foundation to finish, we handle all aspects of building construction. Our experienced team delivers quality structures that meet international standards while respecting local contexts.",
    image: constructionImg,
    features: [
      "Residential Buildings",
      "Commercial Complexes",
      "Industrial Structures",
      "Renovations & Extensions",
      "Structural Steel Works",
      "Concrete & Masonry Works"
    ],
  },
  {
    id: "architecture",
    icon: PenTool,
    title: "Architecture & Consultancy",
    shortDesc: "Creative architectural design and professional consultancy services that transform your vision into reality.",
    description: "Our architectural team combines creativity with technical expertise to design spaces that are functional, aesthetically pleasing, and sustainable. We provide end-to-end design solutions.",
    image: architectureImg,
    features: [
      "Architectural Design",
      "Feasibility Studies",
      "Building Permits & Approvals",
      "Structural Engineering",
      "Landscape Design",
      "Construction Supervision"
    ],
  },
  {
    id: "interior",
    icon: Palette,
    title: "Interior Design",
    shortDesc: "Innovative interior design solutions that blend functionality with aesthetics, creating inspiring spaces.",
    description: "We create interiors that reflect your personality and meet your functional needs. From concept to completion, our designers ensure every space tells a unique story.",
    image: interiorImg,
    features: [
      "Space Planning",
      "Furniture Selection & Custom Design",
      "Lighting Design",
      "Color Consultation",
      "Material & Finish Selection",
      "Project Coordination"
    ],
  },
  {
    id: "boq",
    icon: Calculator,
    title: "Bills of Quantities",
    shortDesc: "Accurate cost estimation and quantity surveying to ensure your project stays on budget.",
    description: "Our quantity surveyors provide detailed and accurate cost estimates that help you plan effectively. We ensure transparency and prevent budget overruns.",
    image: constructionImg,
    features: [
      "Quantity Takeoffs",
      "Cost Estimation",
      "Tender Documentation",
      "Contract Administration",
      "Valuations & Payments",
      "Final Account Settlement"
    ],
  },
  {
    id: "project-management",
    icon: ClipboardList,
    title: "Project Management",
    shortDesc: "End-to-end project management ensuring smooth execution, timely delivery, and quality standards.",
    description: "From inception to handover, our project managers ensure your project runs smoothly. We coordinate all stakeholders and manage resources for optimal outcomes.",
    image: architectureImg,
    features: [
      "Project Planning & Scheduling",
      "Resource Management",
      "Quality Assurance",
      "Risk Management",
      "Stakeholder Coordination",
      "Progress Reporting"
    ],
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Construction"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/80 to-navy" />
        </div>
        
        <div className="container-custom relative z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block text-gold font-semibold text-sm uppercase tracking-wider mb-4">
              What We Do
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-cream mb-6">
              Our Services
            </h1>
            <p className="text-cream/80 text-lg md:text-xl">
              From roads that connect communities to buildings that inspire, we offer 
              comprehensive construction and design solutions tailored to your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`grid lg:grid-cols-2 gap-12 items-center py-16 ${
                index !== services.length - 1 ? "border-b border-border" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold rounded-2xl flex items-center justify-center shadow-gold-glow">
                  <service.icon className="w-12 h-12 text-navy-dark" />
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                  {service.title}
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-gold shrink-0" />
                      <span className="text-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button variant="gold" size="lg" asChild>
                  <Link to="/contact">
                    Get a Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
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
              Ready to Start Your Project?
            </h2>
            <p className="text-cream/70 text-lg max-w-2xl mx-auto mb-8">
              Contact us today for a free consultation and quote. Let's build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServicesPage;
