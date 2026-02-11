import { useState, useRef, useEffect, memo } from "react";
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
  const [modalSize, setModalSize] = useState({ width: 500, height: 580 });
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  const modalRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const resizeDirectionRef = useRef<string | null>(null);

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

  // Drag from header
  const handleDragStart = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('.no-drag')) return;
    isDraggingRef.current = true;
    const startX = e.clientX - modalPosition.x;
    const startY = e.clientY - modalPosition.y;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const maxX = window.innerWidth - modalSize.width;
      const maxY = window.innerHeight - modalSize.height;
      setModalPosition({
        x: Math.max(0, Math.min(moveEvent.clientX - startX, maxX)),
        y: Math.max(0, Math.min(moveEvent.clientY - startY, maxY))
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

  // Resize from edges
  const handleResizeStart = (direction: string) => (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    resizeDirectionRef.current = direction;
    const startX = e.clientX;
    const startY = e.clientY;
    const startWidth = modalSize.width;
    const startHeight = modalSize.height;
    const startPosX = modalPosition.x;
    const startPosY = modalPosition.y;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      if (!resizeDirectionRef.current) return;
      const dx = moveEvent.clientX - startX;
      const dy = moveEvent.clientY - startY;
      let newW = startWidth, newH = startHeight, newX = startPosX, newY = startPosY;

      if (direction.includes('right')) newW = Math.max(380, startWidth + dx);
      if (direction.includes('bottom')) newH = Math.max(400, startHeight + dy);
      if (direction.includes('left')) {
        newW = Math.max(380, startWidth - dx);
        newX = startPosX + (startWidth - newW);
      }
      if (direction.includes('top')) {
        newH = Math.max(400, startHeight - dy);
        newY = startPosY + (startHeight - newH);
      }

      setModalSize({ width: newW, height: newH });
      setModalPosition({ x: newX, y: newY });
    };
    const handleMouseUp = () => {
      resizeDirectionRef.current = null;
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const edgeClass = "absolute z-10";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          />

          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            style={{
              position: 'fixed',
              left: `${modalPosition.x}px`,
              top: `${modalPosition.y}px`,
              width: `${modalSize.width}px`,
              height: `${modalSize.height}px`,
            }}
            className="bg-white rounded-xl shadow-2xl z-50 overflow-hidden flex flex-col border border-gray-200"
          >
            {/* Resize edges */}
            <div className={`${edgeClass} top-0 left-2 right-2 h-1 cursor-ns-resize`} onMouseDown={handleResizeStart('top')} />
            <div className={`${edgeClass} bottom-0 left-2 right-2 h-1 cursor-ns-resize`} onMouseDown={handleResizeStart('bottom')} />
            <div className={`${edgeClass} left-0 top-2 bottom-2 w-1 cursor-ew-resize`} onMouseDown={handleResizeStart('left')} />
            <div className={`${edgeClass} right-0 top-2 bottom-2 w-1 cursor-ew-resize`} onMouseDown={handleResizeStart('right')} />
            {/* Corner resize */}
            <div className={`${edgeClass} top-0 left-0 w-3 h-3 cursor-nwse-resize`} onMouseDown={handleResizeStart('top-left')} />
            <div className={`${edgeClass} top-0 right-0 w-3 h-3 cursor-nesw-resize`} onMouseDown={handleResizeStart('top-right')} />
            <div className={`${edgeClass} bottom-0 left-0 w-3 h-3 cursor-nesw-resize`} onMouseDown={handleResizeStart('bottom-left')} />
            <div className={`${edgeClass} bottom-0 right-0 w-3 h-3 cursor-nwse-resize`} onMouseDown={handleResizeStart('bottom-right')}>
              <div className="absolute bottom-1 right-1 w-2 h-2 border-b-2 border-r-2 border-gray-300" />
            </div>

            {/* Header - draggable */}
            <div
              className="bg-white px-5 py-4 flex-shrink-0 cursor-move select-none border-b border-gray-100"
              onMouseDown={handleDragStart}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Get a Quote</h2>
                  <p className="text-gray-400 text-xs mt-0.5">Tell us about your project</p>
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors no-drag"
                >
                  <X className="w-4 h-4 text-gray-500" />
                </button>
              </div>
            </div>

            {/* Form */}
            <div className="flex-1 overflow-y-auto no-drag">
              <form onSubmit={handleSubmit} className="p-5 space-y-3 pb-6">
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Full Name *</label>
                    <Input name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required className="bg-gray-50 border-gray-200 h-9 text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Phone *</label>
                    <Input name="phone" value={formData.phone} onChange={handleChange} placeholder="+254 7XX XXX XXX" required className="bg-gray-50 border-gray-200 h-9 text-sm" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Email *</label>
                  <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required className="bg-gray-50 border-gray-200 h-9 text-sm" />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Service Required *</label>
                  <Select value={formData.service} onValueChange={(value) => setFormData(prev => ({ ...prev, service: value }))}>
                    <SelectTrigger className="bg-gray-50 border-gray-200 h-9 text-sm">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>{service}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Estimated Budget</label>
                  <Input name="budget" value={formData.budget} onChange={handleChange} placeholder="e.g., KES 500,000 - 1,000,000" className="bg-gray-50 border-gray-200 h-9 text-sm" />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Project Details *</label>
                  <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project, location, timeline, etc." rows={4} required className="bg-gray-50 border-gray-200 resize-y min-h-[90px] max-h-[300px] text-sm" />
                </div>

                <Button type="submit" variant="gold" className="w-full h-10" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-4 h-4 border-2 border-cream border-t-transparent rounded-full mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Request Quote
                    </>
                  )}
                </Button>

                <p className="text-[11px] text-gray-400 text-center">
                  We typically respond within 24 hours during business days.
                </p>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default memo(QuoteModal);
