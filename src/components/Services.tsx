import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
} from "lucide-react";
import roadsImg from "@/assets/services/roads.jpg";
import constructionVid from "@/assets/services/construction.mp4";
import architectureImg from "@/assets/services/architecture.jpg";
import interiorImg from "@/assets/services/interior.jpg";
import boqImg from "@/assets/services/boq.jpg";
import projectMgmtImg from "@/assets/services/project-management.jpg";

// Architecture Images
import arch1 from "@/assets/services/arch/arch1.jpeg";
import arch2 from "@/assets/services/arch/arch2.jpeg";
import arch3 from "@/assets/services/arch/arch3.jpeg";

// Interior Design Images
import int1 from "@/assets/services/interior/int1.jpeg";
import int2 from "@/assets/services/interior/int2.jpeg";
import int3 from "@/assets/services/interior/int3.jpeg";
import int4 from "@/assets/services/interior/int4.jpeg";
import int5 from "@/assets/services/interior/int5.jpeg";
import int6 from "@/assets/services/interior/int6.jpeg";

// General Construction Images
import gc1 from "@/assets/services/general const/gc1.jpeg";
import gc2 from "@/assets/services/general const/gc2.jpeg";
import gc3 from "@/assets/services/general const/gc3.jpeg";
import gc4 from "@/assets/services/general const/gc4.jpeg";
import gc5 from "@/assets/services/general const/gc5.jpeg";

interface Service {
  title: string;
  description: string;
  media: string;
  isVideo?: boolean;
  path: string;
  gallery?: string[];
}

const services: Service[] = [
  {
    title: "Road Construction",
    description: "Expert road construction services including tarmac laying, repairs, cabro installation, drainage systems, and highway development.",
    media: roadsImg,
    isVideo: false,
    path: "/services/road-construction",
  },
  {
    title: "General Construction",
    description: "Comprehensive building services from residential homes to commercial complexes, delivering quality structures on time and within budget.",
    media: constructionVid,
    isVideo: true,
    path: "/services/general-construction",
    gallery: [gc1, gc2, gc3, gc4, gc5],
  },
  {
    title: "Architecture & Consultancy",
    description: "Creative architectural design and professional consultancy services. We transform your vision into detailed, buildable plans.",
    media: architectureImg,
    isVideo: false,
    path: "/services/architecture",
    gallery: [arch1, arch2, arch3],
  },
  {
    title: "Interior Design",
    description: "Innovative interior design solutions that blend functionality with aesthetics, creating spaces that inspire and delight.",
    media: interiorImg,
    isVideo: false,
    path: "/services/interior-design",
    gallery: [int1, int2, int3, int4, int5, int6],
  },
  {
    title: "Bills of Quantities",
    description: "Accurate cost estimation and quantity surveying services to ensure your project stays on budget from concept to completion.",
    media: boqImg,
    isVideo: false,
    path: "/services/bills-of-quantities",
  },
  {
    title: "Project Management",
    description: "End-to-end project management ensuring smooth execution, timely delivery, and adherence to quality standards.",
    media: projectMgmtImg,
    isVideo: false,
    path: "/services/project-management",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-gold font-semibold text-sm uppercase tracking-wider mb-4">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Building Excellence, <span className="text-gradient-gold">Delivering Results</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From roads that connect communities to buildings that stand the test of time, 
            we offer comprehensive construction and design solutions.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={service.path}
                className="group block relative overflow-hidden rounded-2xl bg-card shadow-md hover:shadow-elegant transition-all duration-500"
              >
                {/* Image or Video */}
                <div className="relative h-48 overflow-hidden">
                  {service.isVideo ? (
                    <video
                      src={service.media}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  ) : (
                    <img
                      src={service.media}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center text-gold font-medium">
                      <>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/30 rounded-2xl transition-all duration-500 pointer-events-none" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
