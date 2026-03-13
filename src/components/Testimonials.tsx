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
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-navy-dark uppercase tracking-wide mb-4">
            WHAT OUR CLIENTS SAY
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Don't just take our word for it. Here's what our valued clients have to say about working with us.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-card rounded-2xl p-6 md:p-8 shadow-md hover:shadow-elegant transition-shadow duration-500"
            >
              <div className="absolute top-5 right-5 w-10 h-10 md:w-12 md:h-12 bg-gold/10 rounded-full flex items-center justify-center">
                <Quote className="w-5 h-5 md:w-6 md:h-6 text-gold" />
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-gold fill-gold" />
                ))}
              </div>

              <p className="text-foreground/80 text-base md:text-lg leading-relaxed mb-5">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center text-navy-dark font-bold text-base md:text-lg">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm md:text-base">{testimonial.name}</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs md:text-sm text-gold">{testimonial.company}</p>
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
