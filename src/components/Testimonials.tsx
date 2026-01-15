import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "John Mwangi",
    role: "Property Developer",
    company: "Mwangi Properties Ltd",
    content: "Shena Works Limited exceeded our expectations. Their attention to detail and commitment to quality is unmatched. The Black Perch Lounge project was delivered on time and within budget.",
    rating: 5,
  },
  {
    name: "Sarah Wanjiru",
    role: "Business Owner",
    company: "Dukes Cottages",
    content: "Working with Shena Works was a pleasure from start to finish. Their team is professional, responsive, and truly cares about bringing your vision to life. Highly recommended!",
    rating: 5,
  },
  {
    name: "Michael Ochieng",
    role: "County Roads Engineer",
    company: "Meru County",
    content: "Their road construction expertise is top-notch. The drainage systems and tarmac work they did for our county roads have significantly improved our infrastructure.",
    rating: 5,
  },
  {
    name: "Grace Njeri",
    role: "Hotel Manager",
    company: "Stone Lounge & Villas",
    content: "The interior design team transformed our space beautifully. They understood our brand and created an atmosphere that our guests absolutely love. True professionals!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-gold font-semibold text-sm uppercase tracking-wider mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            What Our <span className="text-gradient-gold">Clients Say</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Here's what our valued clients have to say about working with us.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-card rounded-2xl p-8 shadow-md hover:shadow-elegant transition-shadow duration-500"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-gold" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center text-navy-dark font-bold text-lg">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-gold">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
