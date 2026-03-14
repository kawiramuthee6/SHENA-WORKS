import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  MessageCircle,
  User,
  Building
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const directors = [
  {
    name: "Newton M Muthee",
    role: "Director",
    phone: "+254718971896",
    email: "nmuthee5@gmail.com",
    location: "Meru, Kenya",
    mapLink: "https://maps.google.com/?q=Meru,Kenya",
  },
  {
    name: "Sharon K Muthee",
    role: "Co-Director",
    phone: "+254707243053",
    email: "kawiramutheesk@gmail.com",
    location: "Nairobi, Kenya",
    mapLink: "https://maps.google.com/?q=Nairobi,Kenya",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });

    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const openWhatsApp = () => {
    const phone = "254718971896";
    const message = encodeURIComponent(
      "Hello, I'm interested in your construction services."
    );
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-navy-dark font-semibold text-sm uppercase tracking-wider mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Let's Build <span className="text-navy-dark font-bold">Together</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ready to start your project? Get in touch with our team and let's 
            bring your vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card rounded-2xl p-8 shadow-elegant">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="h-12"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+254 700 000 000"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      required
                      className="h-12"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    required
                    rows={5}
                  />
                </div>
                <Button
                  type="submit"
                  variant="gold"
                  size="xl"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Company Email */}
            <div className="bg-navy rounded-2xl p-6 text-center">
              <div className="w-14 h-14 bg-gold/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Building className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-lg font-serif font-bold text-cream mb-2">
                Shena Works Limited
              </h3>
              <a
                href="mailto:shenaworksltd@gmail.com"
                className="text-gold hover:text-gold-light transition-colors"
              >
                shenaworksltd@gmail.com
              </a>
            </div>

            {/* Directors */}
            {directors.map((director, index) => (
              <motion.div
                key={director.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center shrink-0">
                    <User className="w-6 h-6 text-gold" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-serif font-bold text-foreground">
                      {director.name}
                    </h4>
                    <p className="text-gold text-sm font-medium mb-4">
                      {director.role}
                    </p>
                    <div className="space-y-2 text-sm">
                      <a
                        href={`tel:${director.phone}`}
                        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Phone className="w-4 h-4 text-gold" />
                        {director.phone}
                      </a>
                      <a
                        href={`mailto:${director.email}`}
                        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Mail className="w-4 h-4 text-gold" />
                        {director.email}
                      </a>
                      <a
                        href={director.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <MapPin className="w-4 h-4 text-gold" />
                        {director.location}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* WhatsApp Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              onClick={openWhatsApp}
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-2xl p-6 flex items-center justify-center gap-4 transition-all duration-300 hover:shadow-lg group"
            >
              <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <p className="text-sm opacity-90">Chat with us on</p>
                <p className="text-xl font-bold">WhatsApp</p>
              </div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
