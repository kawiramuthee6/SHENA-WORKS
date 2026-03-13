import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, Eye, Heart, Award, Users, Clock, Shield, Lightbulb, Handshake, ChevronDown, HardHat, PenTool, Palette, Wrench, Truck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import heroImage from "@/assets/hero/hero-1.jpg";

const values = [
  { icon: Award, title: "Quality Excellence", description: "We maintain the highest standards in every project we undertake, using premium materials and proven techniques." },
  { icon: Users, title: "Client Focus", description: "Your vision is our mission. We work closely with you every step of the way to exceed expectations." },
  { icon: Clock, title: "Timely Delivery", description: "We respect deadlines and deliver projects on schedule, ensuring your plans stay on track." },
  { icon: Shield, title: "Safety First", description: "We prioritize safety in all our operations, protecting our workers, clients, and communities." },
  { icon: Lightbulb, title: "Innovation", description: "We embrace modern technologies and innovative solutions to deliver better results." },
  { icon: Handshake, title: "Integrity", description: "Honesty and transparency guide all our dealings, building trust that lasts beyond projects." },
];

const teamMembers = [
  { initials: "NM", name: "Newton M Muthee", role: "Director", location: "Meru, Kenya" },
  { initials: "SM", name: "Sharon K Muthee", role: "Co-Director", location: "Nairobi, Kenya" },
];

const teamDepartments = [
  { icon: PenTool, title: "Architects", description: "Licensed architects who bring creative vision to every structural design." },
  { icon: Palette, title: "Interior Designers", description: "Creative professionals who transform spaces into functional works of art." },
  { icon: HardHat, title: "Civil Engineers", description: "Experienced engineers overseeing structural integrity and road infrastructure." },
  { icon: Wrench, title: "Skilled Tradespeople", description: "Masons, carpenters, electricians, plumbers, and finishing specialists." },
  { icon: Truck, title: "Plant Operators", description: "Certified operators for excavators, rollers, caterpillars, and heavy machinery." },
];

interface AccordionSectionProps {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

const AccordionSection = ({ title, defaultOpen = false, children }: AccordionSectionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="border border-border/50 rounded-2xl overflow-hidden bg-card">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-muted/30 transition-colors"
      >
        <h3 className="text-xl md:text-2xl font-serif font-bold text-navy-dark uppercase tracking-wide">{title}</h3>
        <ChevronDown className={`w-6 h-6 text-navy-dark transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-8 pb-6 md:pb-8">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pb-24 md:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Construction" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/80 to-navy" />
        </div>
        
        <div className="container-custom relative z-10 pt-16 md:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-cream uppercase tracking-wide mb-6">
              ABOUT US
            </h1>
            <p className="text-cream/80 text-base md:text-xl">
              Shena Works Limited is a leading construction and design firm based in Kenya, 
              dedicated to transforming visions into reality through excellence and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Accordion Sections */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container-custom space-y-6">

          {/* Our Story, Vision & Mission */}
          <AccordionSection title="Our Story" defaultOpen>
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-10">
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Shena Works Limited was founded with a clear vision: to become Kenya's most trusted 
                  construction and design partner. From humble beginnings, we have grown into a 
                  comprehensive firm offering everything from road construction to architectural design.
                </p>
                <p>
                  Our team brings together expertise in civil engineering, architecture, interior design, 
                  project management among others. This integrated approach ensures that every project benefits 
                  from seamless coordination and exceptional attention to detail.
                </p>
                <p>
                  Today, we are proud to serve clients across Kenya and beyond from our offices in Meru and Nairobi. As a NEMA, NCA, KERRA, and KeNHA-certified firm, we are committed to building the vital infrastructure that connects communities.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-navy rounded-2xl p-6 md:p-8 text-center">
                  <p className="text-4xl md:text-5xl font-serif font-bold text-gold mb-2">50+</p>
                  <p className="text-cream/80 text-sm">Projects Completed</p>
                </div>
                <div className="bg-navy rounded-2xl p-6 md:p-8 text-center mt-6">
                  <p className="text-4xl md:text-5xl font-serif font-bold text-gold mb-2">100+</p>
                  <p className="text-cream/80 text-sm">Happy Clients</p>
                </div>
                <div className="bg-navy rounded-2xl p-6 md:p-8 text-center">
                  <p className="text-4xl md:text-5xl font-serif font-bold text-gold mb-2">10+</p>
                  <p className="text-cream/80 text-sm">Years Experience</p>
                </div>
                <div className="bg-navy rounded-2xl p-6 md:p-8 text-center mt-6">
                  <p className="text-4xl md:text-5xl font-serif font-bold text-gold mb-2">2</p>
                  <p className="text-cream/80 text-sm">Office Locations</p>
                </div>
              </div>
            </div>

            {/* Vision & Mission inside Our Story */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-navy rounded-2xl p-6 md:p-8">
                <div className="w-14 h-14 bg-gold/20 rounded-xl flex items-center justify-center mb-5">
                  <Eye className="w-7 h-7 text-gold" />
                </div>
                <h4 className="text-xl font-serif font-bold text-cream mb-3">Our Vision</h4>
                <p className="text-cream/70 leading-relaxed text-sm md:text-base">
                  To be the premier construction and design company in East Africa, recognized 
                  for innovative solutions, sustainable practices, and transformative projects 
                  that enhance communities and improve lives.
                </p>
              </div>
              <div className="bg-navy rounded-2xl p-6 md:p-8">
                <div className="w-14 h-14 bg-gold/20 rounded-xl flex items-center justify-center mb-5">
                  <Target className="w-7 h-7 text-gold" />
                </div>
                <h4 className="text-xl font-serif font-bold text-cream mb-3">Our Mission</h4>
                <p className="text-cream/70 leading-relaxed text-sm md:text-base">
                  To deliver exceptional construction and design services that exceed client 
                  expectations, foster community development, and build lasting infrastructure 
                  through dedication, expertise, and unwavering commitment to quality.
                </p>
              </div>
            </div>
          </AccordionSection>

          {/* What Drives Us Forward */}
          <AccordionSection title="What Drives Us Forward">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="bg-muted/50 rounded-xl p-6"
                >
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h4 className="text-lg font-serif font-bold text-navy-dark mb-2">{value.title}</h4>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </AccordionSection>

          {/* Leadership & Team */}
          <AccordionSection title="Leadership & Our Team">
            {/* Directors */}
            <div className="mb-10">
              <h4 className="text-lg font-serif font-bold text-navy-dark uppercase tracking-wide mb-6">Directors</h4>
              <div className="grid md:grid-cols-2 gap-6 max-w-2xl">
                {teamMembers.map((member) => (
                  <div key={member.name} className="bg-muted/50 rounded-xl p-6 text-center">
                    <div className="w-20 h-20 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-serif font-bold text-gold">{member.initials}</span>
                    </div>
                    <h5 className="text-lg font-serif font-bold text-navy-dark mb-1">{member.name}</h5>
                    <p className="text-gold font-medium text-sm mb-1">{member.role}</p>
                    <p className="text-muted-foreground text-xs">{member.location}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Team Departments */}
            <div>
              <h4 className="text-lg font-serif font-bold text-navy-dark uppercase tracking-wide mb-6">Our Team</h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {teamDepartments.map((dept, index) => (
                  <motion.div
                    key={dept.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.06 }}
                    className="flex items-start gap-4 bg-muted/30 rounded-xl p-5"
                  >
                    <div className="w-10 h-10 bg-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <dept.icon className="w-5 h-5 text-navy-dark" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-navy-dark text-sm">{dept.title}</h5>
                      <p className="text-muted-foreground text-xs mt-1">{dept.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AccordionSection>

        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
};

export default AboutPage;
