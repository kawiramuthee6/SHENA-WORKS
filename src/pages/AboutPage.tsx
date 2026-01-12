import { motion } from "framer-motion";
import { Target, Eye, Heart, Award, Users, Clock, Shield, Lightbulb, Handshake } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import heroImage from "@/assets/hero-construction.jpg";

const values = [
  {
    icon: Award,
    title: "Quality Excellence",
    description: "We maintain the highest standards in every project we undertake, using premium materials and proven techniques.",
  },
  {
    icon: Users,
    title: "Client Focus",
    description: "Your vision is our mission. We work closely with you every step of the way to exceed expectations.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "We respect deadlines and deliver projects on schedule, ensuring your plans stay on track.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "We prioritize safety in all our operations, protecting our workers, clients, and communities.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace modern technologies and innovative solutions to deliver better results.",
  },
  {
    icon: Handshake,
    title: "Integrity",
    description: "Honesty and transparency guide all our dealings, building trust that lasts beyond projects.",
  },
];

const AboutPage = () => {
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
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-cream mb-6">
              Who We Are
            </h1>
            <p className="text-cream/80 text-lg md:text-xl">
              Shena Works Limited is a leading construction and design firm based in Kenya, 
              dedicated to transforming visions into reality through excellence and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-gold font-semibold text-sm uppercase tracking-wider mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Building Dreams Since Day One
              </h2>
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
                  Today, we are proud to serve clients across Meru, Nairobi, and beyond, building 
                  infrastructure that connects communities and structures that stand the test of time.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-navy rounded-2xl p-8 text-center">
                  <p className="text-5xl font-serif font-bold text-gold mb-2">50+</p>
                  <p className="text-cream/80">Projects Completed</p>
                </div>
                <div className="bg-navy rounded-2xl p-8 text-center mt-8">
                  <p className="text-5xl font-serif font-bold text-gold mb-2">100+</p>
                  <p className="text-cream/80">Happy Clients</p>
                </div>
                <div className="bg-navy rounded-2xl p-8 text-center">
                  <p className="text-5xl font-serif font-bold text-gold mb-2">10+</p>
                  <p className="text-cream/80">Years Experience</p>
                </div>
                <div className="bg-navy rounded-2xl p-8 text-center mt-8">
                  <p className="text-5xl font-serif font-bold text-gold mb-2">2</p>
                  <p className="text-cream/80">Office Locations</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-navy">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-navy-light/50 backdrop-blur-sm border border-cream/10 rounded-2xl p-8"
            >
              <div className="w-16 h-16 bg-gold/20 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-cream mb-4">Our Vision</h3>
              <p className="text-cream/70 leading-relaxed">
                To be the premier construction and design company in East Africa, recognized 
                for innovative solutions, sustainable practices, and transformative projects 
                that enhance communities and improve lives. We envision a future where our 
                infrastructure developments serve as landmarks of progress and quality.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-navy-light/50 backdrop-blur-sm border border-cream/10 rounded-2xl p-8"
            >
              <div className="w-16 h-16 bg-gold/20 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-cream mb-4">Our Mission</h3>
              <p className="text-cream/70 leading-relaxed">
                To deliver exceptional construction and design services that exceed client 
                expectations, foster community development, and build lasting infrastructure 
                through dedication, expertise, and unwavering commitment to quality. We strive 
                to create value in every project we undertake.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <Heart className="w-5 h-5 text-gold" />
              <span className="text-gold font-semibold uppercase tracking-wider">Our Core Values</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              What Drives Us Forward
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-md hover:shadow-elegant transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gold/10 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-gold font-semibold text-sm uppercase tracking-wider mb-4">
              Leadership
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Meet Our Directors
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-2xl p-8 text-center shadow-elegant"
            >
              <div className="w-24 h-24 bg-navy rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-serif font-bold text-gold">NM</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-1">Newton M Muthee</h3>
              <p className="text-gold font-medium mb-4">Director</p>
              <p className="text-muted-foreground text-sm">Meru, Kenya</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card rounded-2xl p-8 text-center shadow-elegant"
            >
              <div className="w-24 h-24 bg-navy rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-serif font-bold text-gold">SM</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-1">Sharon K Muthee</h3>
              <p className="text-gold font-medium mb-4">Co-Director</p>
              <p className="text-muted-foreground text-sm">Nairobi, Kenya</p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AboutPage;
