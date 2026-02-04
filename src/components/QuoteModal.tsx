import { useState, useRef, useEffect, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Move } from "lucide-react";
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
  const [modalSize, setModalSize] = useState({ width: 600, height: 650 });
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  const modalRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const isResizingRef = useRef(false);

  // Center modal on mount
  useEffect(() => {
    if (isOpen && typeof window !== 'undefined') {
      const centerX = (window.innerWidth - modalSize.width) / 2;
      const centerY = (window.innerHeight - modalSize.height) / 2;
      setModalPosition({ x: centerX, y: centerY });
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Company WhatsApp number (format: country code + number, no + or spaces)
    const companyWhatsApp = "254707243053";
    
    // Format the message with quote details
    const message = `*New Quote Request from Website*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Service:* ${formData.service}
*Budget:* ${formData.budget || "Not specified"}

*Project Details:*
${formData.message}`;
    
    // Create WhatsApp URL with encoded message
    const whatsappUrl = `https://wa.me/${companyWhatsApp}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    toast.success("Opening WhatsApp to send your quote request!");
    setIsSubmitting(false);
    setFormData({ name: "", email: "", phone: "", service: "", budget: "", message: "" });
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Handle dragging the modal
  const handleDragStart = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('.no-drag')) return;
    
    isDraggingRef.current = true;
    const startX = e.clientX - modalPosition.x;
    const startY = e.clientY - modalPosition.y;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const newX = moveEvent.clientX - startX;
      const newY = moveEvent.clientY - startY;
      
      // Keep modal within viewport bounds
      const maxX = window.innerWidth - modalSize.width;
      const maxY = window.innerHeight - modalSize.height;
      
      setModalPosition({
        x: Math.max(0, Math.min(newX, maxX)),
        y: Math.max(0, Math.min(newY, maxY))
      });
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  // Handle resizing the modal
  const handleResizeStart = (e: React.MouseEvent) => {
    e.stopPropagation();
    isResizingRef.current = true;
    const startX = e.clientX;
    const startY = e.clientY;
    const startWidth = modalSize.width;
    const startHeight = modalSize.height;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      if (!isResizingRef.current) return;
      const deltaX = moveEvent.clientX - startX;
      const deltaY = moveEvent.clientY - startY;
      
      const newWidth = Math.max(400, Math.min(window.innerWidth - 40, startWidth + deltaX));
      const newHeight = Math.max(500, Math.min(window.innerHeight - 40, startHeight + deltaY));
      
      setModalSize({ width: newWidth, height: newHeight });
    };

    const handleMouseUp = () => {
      isResizingRef.current = false;
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-navy-dark/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            style={{
              position: 'fixed',
              left: `${modalPosition.x}px`,
              top: `${modalPosition.y}px`,
              width: `${modalSize.width}px`,
              height: `${modalSize.height}px`,
            }}
            className="bg-card rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col"
          >
            {/* Draggable Header */}
            <div 
              className="bg-gradient-to-r from-navy to-navy-dark p-6 text-cream flex-shrink-0 cursor-move select-none"
              onMouseDown={handleDragStart}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Move className="w-5 h-5 text-cream/50" />
                  <div>
                    <h2 className="text-2xl font-serif font-bold">Get a Quote</h2>
                    <p className="text-cream/70 text-sm mt-1">Drag to move • Resize from corner</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-cream/20 transition-colors no-drag"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Form Content */}
            <div className="flex-1 overflow-y-auto no-drag">
              <form onSubmit={handleSubmit} className="p-6 space-y-4 pb-8">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-muted"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone *</label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+254 7XX XXX XXX"
                    required
                    className="bg-muted"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="bg-muted"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Service Required *</label>
                <Select value={formData.service} onValueChange={(value) => setFormData(prev => ({ ...prev, service: value }))}>
                  <SelectTrigger className="bg-muted">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Estimated Budget</label>
                <Input
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  placeholder="e.g., KES 500,000 - 1,000,000"
                  className="bg-muted"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Project Details *</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project, location, timeline, etc."
                  rows={5}
                  required
                  className="bg-muted resize-y min-h-[120px] max-h-[400px]"
                />
              </div>

              <Button 
                type="submit" 
                variant="gold" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-navy-dark border-t-transparent rounded-full mr-2"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Request Quote
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                We typically respond within 24 hours during business days.
              </p>
            </form>
            </div>

            {/* Resize Handle - Bottom Right Corner */}
            <div 
              className="absolute bottom-0 right-0 w-8 h-8 cursor-nwse-resize group"
              onMouseDown={handleResizeStart}
            >
              <div className="absolute bottom-1 right-1 flex flex-col items-end gap-0.5">
                <div className="flex gap-0.5">
                  <div className="w-1 h-1 bg-muted-foreground/40 group-hover:bg-muted-foreground rounded-full"></div>
                  <div className="w-1 h-1 bg-muted-foreground/40 group-hover:bg-muted-foreground rounded-full"></div>
                </div>
                <div className="flex gap-0.5">
                  <div className="w-1 h-1 bg-muted-foreground/40 group-hover:bg-muted-foreground rounded-full"></div>
                  <div className="w-1 h-1 bg-muted-foreground/40 group-hover:bg-muted-foreground rounded-full"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default memo(QuoteModal);
