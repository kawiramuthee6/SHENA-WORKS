import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";

const directors = [
  { name: "Newton M. Muthee", role: "Director", phone: "+254 718 971 896", email: "nmuthee5@gmail.com", location: "Meru, Kenya" },
  { name: "Sharon K. Muthee", role: "Co-Director", phone: "+254 707 243 053", email: "kawiramutheesk@gmail.com", location: "Nairobi, Kenya" },
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
    await new Promise((r) => setTimeout(r, 800));
    toast({ title: "Message sent.", description: "We'll be in touch shortly." });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const openWhatsApp = () => {
    const phone = "254718971896";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent("Hello, I'm interested in your construction services.")}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero — single message, no image */}
      <section className="border-b border-[hsl(var(--rule))]">
        <div className="container-custom py-20 md:py-32">
          <div className="grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 md:col-span-9">
              <p className="eyebrow mb-8">№06 — Reach</p>
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="display-xl text-foreground text-balance"
              >
                Tell us about the site.
              </motion.h1>
            </div>
            <div className="col-span-12 md:col-span-3">
              <p className="text-foreground/70 text-[15px] leading-[1.55]">
                A free initial consultation. We'll come back with a brief and a route to a quote.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Channels — three columns of plain info */}
      <section className="border-b border-[hsl(var(--rule))]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {[
              { label: "Email", value: "shenaworksltd@gmail.com", href: "mailto:shenaworksltd@gmail.com" },
              { label: "Phone", value: "+254 718 971 896", href: "tel:+254718971896" },
              { label: "Hours", value: "Mon — Sat, 8AM – 6PM" },
            ].map((c, i) => (
              <div key={c.label} className={`py-10 md:py-14 ${i !== 2 ? "md:border-r border-[hsl(var(--rule))]" : ""} ${i !== 2 ? "border-b md:border-b-0 border-[hsl(var(--rule))]" : ""} md:px-10`}>
                <p className="eyebrow mb-4">{c.label}</p>
                {c.href ? (
                  <a href={c.href} className="font-serif text-2xl md:text-3xl text-foreground tracking-tight hover:opacity-60">{c.value}</a>
                ) : (
                  <p className="font-serif text-2xl md:text-3xl text-foreground tracking-tight">{c.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Directors */}
      <section className="border-b border-[hsl(var(--rule))]">
        <div className="container-custom py-20 md:py-28">
          <div className="grid grid-cols-12 gap-10">
            {/* Form */}
            <div className="col-span-12 lg:col-span-7">
              <p className="eyebrow mb-4">Send a message</p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground tracking-tight mb-10">Project brief</h2>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <label className="eyebrow block mb-2">Name</label>
                    <Input name="name" value={formData.name} onChange={handleChange} required className="h-12 border-0 border-b border-foreground rounded-none bg-transparent px-0 focus-visible:ring-0 focus-visible:border-foreground" />
                  </div>
                  <div>
                    <label className="eyebrow block mb-2">Email</label>
                    <Input type="email" name="email" value={formData.email} onChange={handleChange} required className="h-12 border-0 border-b border-foreground rounded-none bg-transparent px-0 focus-visible:ring-0" />
                  </div>
                  <div>
                    <label className="eyebrow block mb-2">Phone</label>
                    <Input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="h-12 border-0 border-b border-foreground rounded-none bg-transparent px-0 focus-visible:ring-0" />
                  </div>
                  <div>
                    <label className="eyebrow block mb-2">Subject</label>
                    <Input name="subject" value={formData.subject} onChange={handleChange} required className="h-12 border-0 border-b border-foreground rounded-none bg-transparent px-0 focus-visible:ring-0" />
                  </div>
                </div>
                <div>
                  <label className="eyebrow block mb-2">Message</label>
                  <Textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className="border-0 border-b border-foreground rounded-none bg-transparent px-0 focus-visible:ring-0 resize-none" />
                </div>
                <div className="pt-4 flex items-center justify-between">
                  <button type="submit" disabled={isSubmitting} className="font-mono text-[12px] tracking-[0.2em] uppercase border-b border-foreground pb-1 text-foreground hover:opacity-60 disabled:opacity-40">
                    {isSubmitting ? "Sending…" : "Send message →"}
                  </button>
                  <button type="button" onClick={openWhatsApp} className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground">
                    Or WhatsApp →
                  </button>
                </div>
              </form>
            </div>

            {/* Directors */}
            <div className="col-span-12 lg:col-span-4 lg:col-start-9">
              <p className="eyebrow mb-4">Direct contact</p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground tracking-tight mb-10">The directors</h2>

              <div>
                {directors.map((d, i) => (
                  <div key={d.name} className={`py-6 border-t border-[hsl(var(--rule))] ${i === directors.length - 1 ? "border-b" : ""}`}>
                    <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">{d.role} · {d.location}</p>
                    <h3 className="font-serif text-xl text-foreground mb-3">{d.name}</h3>
                    <div className="space-y-1 text-sm">
                      <a href={`tel:${d.phone.replace(/\s/g, "")}`} className="block text-foreground hover:opacity-60">{d.phone}</a>
                      <a href={`mailto:${d.email}`} className="block text-muted-foreground hover:text-foreground">{d.email}</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
