import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Eng. Silas M. Kinoti EBS",
    role: "Director General",
    company: "Kenya Urban Roads Authority",
    content: "Shena Works has proven to be a highly professional and reliable engineering firm, consistently delivering quality work with strong technical expertise and efficiency. Their commitment to high standards, proper project management, and timely execution makes them a dependable partner in infrastructure development.",
    rating: 5,
  },
  {
    name: "Charles Imunde",
    role: "Director",
    company: "The Pin Hideout",
    content: "From the initial consultation to the final handover, Shena Works demonstrated exceptional professionalism. The team delivered our project with remarkable attention to detail, and the quality of construction exceeded our expectations. A truly reliable partner.",
    rating: 5,
  },
  {
    name: "Rashid Juma",
    role: "Director",
    company: "Stone Lodge & Villas",
    content: "The craftsmanship and dedication Shena Works brought to our lodge project was outstanding. They understood our vision perfectly and translated it into a stunning reality. Their team's expertise in both construction and interior finishing is second to none.",
    rating: 5,
  },
  {
    name: "Dominic Bundi",
    role: "Owner",
    company: "Dukes Cottages",
    content: "Shena Works built our cottages with incredible skill and precision. The project was completed on schedule, and the quality of work speaks for itself. They are our go-to construction partner for any future developments.",
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
            Trusted by industry leaders and private developers across Kenya.
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
              <div className="absolute top-5 right-5 w-10 h-10 md:w-12 md:h-12 bg-navy/10 rounded-full flex items-center justify-center">
                <Quote className="w-5 h-5 md:w-6 md:h-6 text-navy-dark" />
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-navy-dark fill-navy-dark" />
                ))}
              </div>

              <p className="text-foreground/80 text-sm md:text-base leading-relaxed mb-5">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-navy-dark rounded-full flex items-center justify-center text-cream font-bold text-sm md:text-base">
                  {testimonial.name.split(' ').filter(n => !['EBS', 'Eng.'].includes(n)).map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm md:text-base">{testimonial.name}</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs md:text-sm text-navy-dark font-medium">{testimonial.company}</p>
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
