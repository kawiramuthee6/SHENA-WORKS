import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ArrowRight } from "lucide-react";

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
    content: "From the initial consultation to the final handover, Shena Works demonstrated exceptional professionalism. The team delivered our project with remarkable attention to detail, and the quality of construction exceeded our expectations.",
    rating: 5,
  },
  {
    name: "Directors, Black Perch Lounge",
    role: "Directors",
    company: "Black Perch Lounge",
    content: "Shena Works transformed our vision for Black Perch Lounge into reality. Their innovative approach to the unique grass-tile flooring, ambient lighting, and overall construction quality made the venue a landmark in Meru. A team that truly delivers excellence.",
    rating: 5,
  },
  {
    name: "Rashid Juma",
    role: "Director",
    company: "Stone Lodge & Villas",
    content: "The craftsmanship and dedication Shena Works brought to our lodge project was outstanding. They understood our vision perfectly and translated it into a stunning reality. Their expertise in both construction and interior finishing is second to none.",
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
  const [showAll, setShowAll] = useState(false);
  const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, 2);

  return (
    <section className="py-14 md:py-20 bg-muted/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-navy-dark uppercase tracking-wide mb-3">
            WHAT OUR CLIENTS SAY
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Trusted by industry leaders and private developers across Kenya.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          <AnimatePresence mode="popLayout">
            {displayedTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="relative bg-card rounded-2xl p-5 md:p-6 shadow-md hover:shadow-elegant transition-shadow duration-500"
              >
                <div className="absolute top-4 right-4 w-9 h-9 bg-navy/10 rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-navy-dark" />
                </div>

                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-navy-dark fill-navy-dark" />
                  ))}
                </div>

                <p className="text-foreground/80 text-sm leading-relaxed mb-4">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-navy-dark rounded-full flex items-center justify-center text-cream font-bold text-xs">
                    {testimonial.name.split(' ').filter(n => !['EBS', 'Eng.', 'Directors,'].includes(n)).map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-muted-foreground">{testimonial.role} · {testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {!showAll && testimonials.length > 2 && (
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center text-navy-dark font-semibold text-sm uppercase tracking-wide hover:text-navy-light transition-colors"
            >
              See More Reviews <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </motion.div>
        )}

        {showAll && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mt-8">
            <button
              onClick={() => setShowAll(false)}
              className="inline-flex items-center text-navy-dark font-semibold text-sm uppercase tracking-wide hover:text-navy-light transition-colors"
            >
              Show Less
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
