import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageCircle, User, Building, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import heroImage from "@/assets/hero/hero-1.jpg";

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
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast({ title: "Message Sent!", description: "We'll get back to you as soon as possible." });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const openWhatsApp = () => {
    const phone = "254718971896";
    const message = encodeURIComponent("Hello, I'm interested in your construction services.");
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero - flush with navbar */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Contact" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-navy-dark/60" />
        </div>
        
        <div className="container-custom relative z-10 text-center px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-cream uppercase tracking-wide mb-3">
              Contact Us
            </h1>
            <p className="text-cream/75 text-sm md:text-base max-w-2xl mx-auto">
              Ready to start your project? Reach out and let's build something amazing together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-10 bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: Phone, title: "Call Us", content: <a href="tel:+254718971896" className="text-muted-foreground hover:text-navy-dark transition-colors">+254 718 971 896</a> },
              { icon: Mail, title: "Email Us", content: <a href="mailto:shenaworksltd@gmail.com" className="text-muted-foreground hover:text-navy-dark transition-colors">shenaworksltd@gmail.com</a> },
              { icon: Clock, title: "Working Hours", content: <p className="text-muted-foreground">Mon - Sat: 8AM - 6PM</p> },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-card rounded-2xl p-5 shadow-md text-center">
                <div className="w-12 h-12 bg-navy/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-6 h-6 text-navy-dark" />
                </div>
                <h3 className="font-semibold text-foreground mb-1 text-sm">{item.title}</h3>
                {item.content}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Directors */}
      <section className="py-14 bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="bg-card rounded-2xl p-6 shadow-md">
                <h2 className="text-xl font-serif font-bold text-foreground mb-1">Send Us a Message</h2>
                <p className="text-muted-foreground text-sm mb-5">Fill out the form below and we'll get back to you.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Your Name *</label>
                      <Input name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required className="h-11" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Email *</label>
                      <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required className="h-11" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Phone</label>
                      <Input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+254 700 000 000" className="h-11" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Subject *</label>
                      <Input name="subject" value={formData.subject} onChange={handleChange} placeholder="Project Inquiry" required className="h-11" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Your Message *</label>
                    <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project..." required rows={4} />
                  </div>
                  <Button type="submit" variant="navy" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : (<>Send Message <Send className="ml-2 h-4 w-4" /></>)}
                  </Button>
                </form>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-5">
              <div className="bg-navy rounded-2xl p-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-cream/10 rounded-xl flex items-center justify-center shrink-0">
                    <Building className="w-6 h-6 text-cream" />
                  </div>
                  <div>
                    <h3 className="text-base font-serif font-bold text-cream">Shena Works Limited</h3>
                    <p className="text-cream/70 text-xs">Roads & Building Construction Contractors</p>
                  </div>
                </div>
              </div>

              {directors.map((director, index) => (
                <motion.div key={director.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-card rounded-2xl p-5 shadow-md">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center shrink-0">
                      <User className="w-6 h-6 text-cream" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-serif font-bold text-foreground">{director.name}</h4>
                      <p className="text-navy-dark text-xs font-medium mb-3">{director.role}</p>
                      <div className="space-y-2 text-sm">
                        <a href={`tel:${director.phone}`} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                          <Phone className="w-3.5 h-3.5 text-navy-dark" /> {director.phone}
                        </a>
                        <a href={`mailto:${director.email}`} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                          <Mail className="w-3.5 h-3.5 text-navy-dark" /> {director.email}
                        </a>
                        <a href={director.mapLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                          <MapPin className="w-3.5 h-3.5 text-navy-dark" /> {director.location}
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              <motion.button initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} onClick={openWhatsApp} className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-2xl p-5 flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-lg group">
                <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <p className="text-xs opacity-90">Chat with us on</p>
                  <p className="text-lg font-bold">WhatsApp</p>
                </div>
              </motion.button>

              <div className="bg-secondary rounded-2xl p-5">
                <h3 className="font-semibold text-foreground mb-3 text-sm">Why Choose Shena Works?</h3>
                <ul className="space-y-2">
                  {["Free initial consultation", "Competitive pricing", "Experienced professionals", "On-time delivery", "Quality guaranteed"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-muted-foreground text-sm">
                      <CheckCircle className="w-4 h-4 text-navy-dark shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-navy py-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Meru Office", desc: "Main Office - Meru, Kenya", link: "https://maps.google.com/?q=Meru,Kenya" },
              { title: "Nairobi Office", desc: "Branch Office - Nairobi, Kenya", link: "https://maps.google.com/?q=Nairobi,Kenya" },
            ].map((office, i) => (
              <motion.div key={office.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-navy-light/50 rounded-2xl p-6 border border-cream/10">
                <MapPin className="w-8 h-8 text-cream mb-3" />
                <h3 className="text-lg font-serif font-bold text-cream mb-1">{office.title}</h3>
                <p className="text-cream/70 text-sm mb-3">{office.desc}</p>
                <a href={office.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cream/90 hover:text-cream transition-colors text-sm">
                  View on Google Maps <MapPin className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            ))}
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
