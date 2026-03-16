import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, Eye, Award, Users, Clock, Shield, Lightbulb, Handshake, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import heroImage from "@/assets/hero/hero-1.jpg";
import aboutImg from "@/assets/hero/hero-4.jpg";

const values = [
  { icon: Award, title: "Quality Excellence", description: "We maintain the highest standards in every project we undertake, using premium materials and proven techniques." },
  { icon: Users, title: "Client Focus", description: "Your vision is our mission. We work closely with you every step of the way to exceed expectations." },
  { icon: Clock, title: "Timely Delivery", description: "We respect deadlines and deliver projects on schedule, ensuring your plans stay on track." },
  { icon: Shield, title: "Safety First", description: "We prioritize safety in all our operations, protecting our workers, clients, and communities." },
  { icon: Lightbulb, title: "Innovation", description: "We embrace modern technologies and innovative solutions to deliver better results." },
  { icon: Handshake, title: "Integrity", description: "Honesty and transparency guide all our dealings, building trust that lasts beyond projects." },
];

const teamDepartments = [
  { title: "Architects", description: "Licensed architects who bring creative vision to every structural design." },
  { title: "Interior Designers", description: "Creative professionals who transform spaces into functional works of art." },
  { title: "Civil Engineers", description: "Experienced engineers overseeing structural integrity and road infrastructure." },
  { title: "Skilled Tradespeople", description: "Masons, carpenters, electricians, plumbers, and finishing specialists." },
  { title: "Plant Operators", description: "Certified operators for excavators, rollers, caterpillars, and heavy machinery." },
];

interface AccordionSectionProps {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
  id?: string;
}

const AccordionSection = ({ title, defaultOpen = false, children, id }: AccordionSectionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div id={id} className="border border-border/50 rounded-2xl overflow-hidden bg-card mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-muted/30 transition-colors"
      >
        <h3 className="text-xl md:text-2xl font-serif font-bold text-navy-dark uppercase tracking-wide">{title}</h3>
        <ChevronDown className={`w-6 h-6 text-navy-dark transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`} />
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
          <img src={heroImage} alt="About Shena Works" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/80 to-navy" />
        </div>
        
        <div className="container-custom relative z-10 pt-14 md:pt-20 px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-cream uppercase tracking-wide mb-4 sm:mb-6">
              ABOUT US
            </h1>
            <p className="text-cream/80 text-base md:text-xl">
              Shena Works Limited — a leading construction and design firm dedicated to transforming visions into reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container-custom px-4 sm:px-6">

          {/* Our Story */}
          <AccordionSection title="Our Story" defaultOpen id="our-story">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start mb-10">
              <div className="rounded-2xl overflow-hidden">
                <img src={aboutImg} alt="About Shena Works" className="w-full h-[300px] md:h-[400px] object-cover" />
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Shena Works Limited was founded with a clear vision: to become Kenya's most trusted 
                  construction and design partner. From humble beginnings, we have grown into a 
                  comprehensive firm offering everything from road construction to architectural design.
                </p>
                <p>
                  Our team brings together expertise in civil engineering, architecture, interior design, 
                  and project management. This integrated approach ensures that every project benefits 
                  from seamless coordination and exceptional attention to detail.
                </p>
                <p>
                  Today, we are proud to serve clients across Kenya from our offices in Meru and Nairobi. As a NEMA, NCA, KERRA, and KeNHA-certified firm, we are committed to building the vital infrastructure that connects communities.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                { value: "50+", label: "Projects Completed" },
                { value: "100+", label: "Happy Clients" },
                { value: "5+", label: "Years Experience" },
                { value: "2", label: "Office Locations" },
              ].map((stat) => (
                <div key={stat.label} className="bg-navy rounded-2xl p-6 text-center">
                  <p className="text-3xl md:text-4xl font-serif font-bold text-cream mb-1">{stat.value}</p>
                  <p className="text-cream/70 text-xs md:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Vision & Mission */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-navy rounded-2xl p-6 md:p-8">
                <div className="w-14 h-14 bg-cream/10 rounded-xl flex items-center justify-center mb-5">
                  <Eye className="w-7 h-7 text-cream" />
                </div>
                <h4 className="text-xl font-serif font-bold text-cream mb-3">Our Vision</h4>
                <p className="text-cream/70 leading-relaxed text-sm md:text-base">
                  To be the premier construction and design company in East Africa, recognized 
                  for innovative solutions, sustainable practices, and transformative projects 
                  that enhance communities and improve lives.
                </p>
              </div>
              <div className="bg-navy rounded-2xl p-6 md:p-8">
                <div className="w-14 h-14 bg-cream/10 rounded-xl flex items-center justify-center mb-5">
                  <Target className="w-7 h-7 text-cream" />
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
          <AccordionSection title="What Drives Us Forward" id="what-drives-us">
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
                  <div className="w-12 h-12 bg-navy/10 rounded-xl flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-navy-dark" />
                  </div>
                  <h4 className="text-lg font-serif font-bold text-navy-dark mb-2">{value.title}</h4>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </AccordionSection>

          {/* Leadership & Team */}
          <AccordionSection title="Leadership & Our Team" id="leadership-team">
            {/* Director - Newton */}
            <div className="mb-12">
              <h4 className="text-lg font-serif font-bold text-navy-dark uppercase tracking-wide mb-8">Management</h4>
              
              {/* Newton - side by side layout like Keihin reference */}
              <div className="grid lg:grid-cols-5 gap-8 items-start mb-8">
                <div className="lg:col-span-3 space-y-4">
                  <h5 className="text-xl md:text-2xl font-serif font-bold text-navy-dark">Newton M. Muthee</h5>
                  <p className="text-navy-dark font-medium">Director & Lead Civil Engineer</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Newton M. Muthee is a qualified Civil Engineer with over 5 years of hands-on experience 
                    in road construction, building projects, and infrastructure development across Kenya. 
                    As the founding director of Shena Works Limited, he has overseen the company's growth 
                    from a small contracting firm into a trusted name in the Kenyan construction industry.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    His technical expertise spans road construction, drainage systems, structural engineering, 
                    and project management. Under his leadership, Shena Works has successfully delivered 
                    projects for both private clients and government agencies, earning certifications from 
                    NEMA, NCA, KERRA, and KeNHA. Newton's commitment to quality, safety, and timely delivery 
                    continues to drive the company's reputation for excellence.
                  </p>
                </div>
                <div className="lg:col-span-2">
                  <div className="bg-navy-dark rounded-2xl p-8 text-center">
                    <div className="w-32 h-32 bg-cream/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-4xl font-serif font-bold text-cream">NM</span>
                    </div>
                    <h5 className="text-lg font-serif font-bold text-cream">Newton M. Muthee</h5>
                    <p className="text-cream/70 text-sm mt-1">Director & Lead Civil Engineer</p>
                    <p className="text-cream/50 text-xs mt-1">Meru, Kenya</p>
                  </div>
                </div>
              </div>

              {/* Sharon */}
              <div className="grid lg:grid-cols-5 gap-8 items-start">
                <div className="lg:col-span-2 lg:order-1">
                  <div className="bg-navy-dark rounded-2xl p-8 text-center">
                    <div className="w-32 h-32 bg-cream/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-4xl font-serif font-bold text-cream">SM</span>
                    </div>
                    <h5 className="text-lg font-serif font-bold text-cream">Sharon K. Muthee</h5>
                    <p className="text-cream/70 text-sm mt-1">Co-Director</p>
                    <p className="text-cream/50 text-xs mt-1">Nairobi, Kenya</p>
                  </div>
                </div>
                <div className="lg:col-span-3 lg:order-2 space-y-4">
                  <h5 className="text-xl md:text-2xl font-serif font-bold text-navy-dark">Sharon K. Muthee</h5>
                  <p className="text-navy-dark font-medium">Co-Director</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Sharon K. Muthee serves as Co-Director of Shena Works Limited, playing a key role in the 
                    company's strategic direction and business operations. Based in Nairobi, she manages client 
                    relations and oversees the company's administrative functions, ensuring smooth coordination 
                    across all projects and departments.
                  </p>
                </div>
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
