import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  MessageCircle,
  User,
  Building,
  Clock,
  CheckCircle,
  ArrowLeft
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import heroImage from "@/assets/shena-works-logo.png";

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

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

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
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Button 
              variant="ghost" 
              onClick={() => navigate(-1)}
              className="text-cream/70 hover:text-cream hover:bg-cream/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block text-gold font-semibold text-sm uppercase tracking-wider mb-4">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-cream mb-6">
              Get In Touch
            </h1>
            <p className="text-cream/80 text-lg md:text-xl">
              Ready to start your project? We'd love to hear from you. 
              Reach out and let's build something amazing together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-background -mt-16 relative z-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-2xl p-6 shadow-elegant text-center"
            >
              <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
              <a href="tel:+254718971896" className="text-muted-foreground hover:text-gold transition-colors">
                +254 718 971 896
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-elegant text-center"
            >
              <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
              <a href="mailto:shenaworksltd@gmail.com" className="text-muted-foreground hover:text-gold transition-colors">
                shenaworksltd@gmail.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card rounded-2xl p-6 shadow-elegant text-center"
            >
              <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Working Hours</h3>
              <p className="text-muted-foreground">Mon - Sat: 8AM - 6PM</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form & Directors */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-card rounded-2xl p-8 shadow-elegant">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground mb-6">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Your Name *
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
                        Email Address *
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
                        Subject *
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
                      Your Message *
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
              <div className="bg-navy rounded-2xl p-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gold/20 rounded-xl flex items-center justify-center shrink-0">
                    <Building className="w-7 h-7 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-bold text-cream">
                      Shena Works Limited
                    </h3>
                    <p className="text-cream/70 text-sm">Roads & Building Construction Contractors</p>
                    <a
                      href="mailto:shenaworksltd@gmail.com"
                      className="text-gold hover:text-gold-light transition-colors"
                    >
                      shenaworksltd@gmail.com
                    </a>
                  </div>
                </div>
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
                    <div className="w-14 h-14 bg-navy rounded-xl flex items-center justify-center shrink-0">
                      <User className="w-7 h-7 text-gold" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-serif font-bold text-foreground">
                        {director.name}
                      </h4>
                      <p className="text-gold text-sm font-medium mb-4">
                        {director.role}
                      </p>
                      <div className="space-y-3 text-sm">
                        <a
                          href={`tel:${director.phone}`}
                          className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Phone className="w-4 h-4 text-gold" />
                          {director.phone}
                        </a>
                        <a
                          href={`mailto:${director.email}`}
                          className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Mail className="w-4 h-4 text-gold" />
                          {director.email}
                        </a>
                        <a
                          href={director.mapLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
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

              {/* Why Contact Us */}
              <div className="bg-secondary rounded-2xl p-6">
                <h3 className="font-semibold text-foreground mb-4">Why Choose Shena Works?</h3>
                <ul className="space-y-3">
                  {[
                    "Free initial consultation",
                    "Competitive and transparent pricing",
                    "Experienced team of professionals",
                    "On-time project delivery",
                    "Quality workmanship guaranteed",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-gold shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-navy py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-navy-light/50 rounded-2xl p-8 border border-cream/10"
            >
              <MapPin className="w-10 h-10 text-gold mb-4" />
              <h3 className="text-xl font-serif font-bold text-cream mb-2">Meru Office</h3>
              <p className="text-cream/70 mb-4">
                Main Office - Meru, Kenya
              </p>
              <a
                href="https://maps.google.com/?q=Meru,Kenya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
              >
                View on Google Maps
                <MapPin className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-navy-light/50 rounded-2xl p-8 border border-cream/10"
            >
              <MapPin className="w-10 h-10 text-gold mb-4" />
              <h3 className="text-xl font-serif font-bold text-cream mb-2">Nairobi Office</h3>
              <p className="text-cream/70 mb-4">
                Branch Office - Nairobi, Kenya
              </p>
              <a
                href="https://maps.google.com/?q=Nairobi,Kenya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
              >
                View on Google Maps
                <MapPin className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
};

export default ContactPage;
