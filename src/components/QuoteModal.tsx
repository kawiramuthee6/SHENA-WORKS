import { useState, useEffect, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedService?: string;
}

const services = [
  "Road Construction",
  "General Construction",
  "Architecture & Consultancy",
  "Interior Design",
  "Bills of Quantities",
  "Project Management",
];

const QuoteModal = ({ isOpen, onClose, preSelectedService }: QuoteModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: preSelectedService || "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const companyWhatsApp = "254707243053";
    const message = `*New Quote Request from Website*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Service:* ${formData.service}
*Budget:* ${formData.budget || "Not specified"}

*Project Details:*
${formData.message}`;
    const whatsappUrl = `https://wa.me/${companyWhatsApp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    toast.success("Opening WhatsApp to send your quote request!");
    setIsSubmitting(false);
    setFormData({ name: "", email: "", phone: "", service: "", budget: "", message: "" });
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[80]"
          />

          {/* Modal - responsive, no drag/resize on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center p-0 sm:p-4"
          >
            <div className="bg-white w-full sm:w-[480px] sm:max-w-[90vw] max-h-[90vh] sm:max-h-[85vh] sm:rounded-2xl rounded-t-2xl shadow-2xl flex flex-col overflow-hidden border border-border/50">
              {/* Header */}
              <div className="px-5 py-4 flex-shrink-0 border-b border-border/50">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-semibold text-foreground">Get a Quote</h2>
                    <p className="text-muted-foreground text-xs mt-0.5">Tell us about your project</p>
                  </div>
                  <button
                    onClick={onClose}
                    className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
                  >
                    <X className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>
              </div>

              {/* Form */}
              <div className="flex-1 overflow-y-auto overscroll-contain">
                <form onSubmit={handleSubmit} className="p-5 space-y-3 pb-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1">Full Name *</label>
                      <Input name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required className="bg-muted/30 border-border h-10 text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1">Phone *</label>
                      <Input name="phone" value={formData.phone} onChange={handleChange} placeholder="+254 7XX XXX XXX" required className="bg-muted/30 border-border h-10 text-sm" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1">Email *</label>
                    <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required className="bg-muted/30 border-border h-10 text-sm" />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1">Service Required *</label>
                    <Select value={formData.service} onValueChange={(value) => setFormData(prev => ({ ...prev, service: value }))}>
                      <SelectTrigger className="bg-muted/30 border-border h-10 text-sm">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="z-[90]">
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>{service}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1">Estimated Budget</label>
                    <Input name="budget" value={formData.budget} onChange={handleChange} placeholder="e.g., KES 500,000 - 1,000,000" className="bg-muted/30 border-border h-10 text-sm" />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1">Project Details *</label>
                    <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project, location, timeline, etc." rows={3} required className="bg-muted/30 border-border resize-none text-sm" />
                  </div>

                  <Button type="submit" variant="gold" className="w-full h-11 mt-1" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-4 h-4 border-2 border-cream border-t-transparent rounded-full mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Request Quote via WhatsApp
                      </>
                    )}
                  </Button>

                  <p className="text-[11px] text-muted-foreground text-center">
                    We typically respond within 24 hours during business days.
                  </p>
                </form>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default memo(QuoteModal);
