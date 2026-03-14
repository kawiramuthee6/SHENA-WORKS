import { motion } from "framer-motion";
import { Target, Eye, Heart, Award, Users, Clock } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Quality Excellence",
    description: "We maintain the highest standards in every project we undertake.",
  },
  {
    icon: Users,
    title: "Client Focus",
    description: "Your vision is our mission. We work closely with you every step of the way.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "We respect deadlines and deliver projects on schedule, every time.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-navy">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-cream font-semibold text-sm uppercase tracking-wider mb-4">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-cream mb-6">
            Who We Are
          </h2>
          <p className="text-cream/70 text-lg">
            Shena Works Limited is a leading construction and design firm based in Kenya, 
            dedicated to transforming visions into reality through excellence and innovation.
          </p>
        </motion.div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-navy-light/50 backdrop-blur-sm border border-cream/10 rounded-2xl p-8"
          >
            <div className="w-16 h-16 bg-cream/10 rounded-xl flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-cream" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-cream mb-4">Our Vision</h3>
            <p className="text-cream/70 leading-relaxed">
              To be the premier construction and design company in East Africa, recognized 
              for innovative solutions, sustainable practices, and transformative projects 
              that enhance communities and improve lives.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-navy-light/50 backdrop-blur-sm border border-cream/10 rounded-2xl p-8"
          >
            <div className="w-16 h-16 bg-cream/10 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-cream" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-cream mb-4">Our Mission</h3>
            <p className="text-cream/70 leading-relaxed">
              To deliver exceptional construction and design services that exceed client 
              expectations, foster community development, and build lasting infrastructure 
              through dedication, expertise, and unwavering commitment to quality.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Heart className="w-5 h-5 text-cream" />
            <span className="text-cream font-semibold uppercase tracking-wider">Our Core Values</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-cream/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-cream/20 transition-colors duration-300">
                <value.icon className="w-10 h-10 text-cream" />
              </div>
              <h3 className="text-xl font-serif font-bold text-cream mb-3">{value.title}</h3>
              <p className="text-cream/60">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
