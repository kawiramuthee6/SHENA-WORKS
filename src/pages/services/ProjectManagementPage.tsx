import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Users, Clock, Target, BarChart3, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const features = ["Project Planning & Scheduling","Resource Management","Quality Assurance","Risk Management","Stakeholder Coordination","Progress Reporting","Budget Monitoring","Handover & Close-out"];
const phases = [
  { number: "01", title: "Initiation", description: "Define project objectives, scope, and stakeholders." },
  { number: "02", title: "Planning", description: "Develop detailed project plans, schedules, budgets, and resource allocation." },
  { number: "03", title: "Execution", description: "Coordinate teams and resources, manage contracts, ensure quality." },
  { number: "04", title: "Monitoring", description: "Track progress, manage changes, report to stakeholders." },
  { number: "05", title: "Closure", description: "Complete final inspections, handover deliverables, document lessons learned." },
];
const benefits = [
  { icon: Clock, title: "On-Time Delivery", description: "Strategic planning ensures your project is delivered on schedule." },
  { icon: Target, title: "Budget Adherence", description: "Rigorous cost monitoring prevents overruns." },
  { icon: Users, title: "Stakeholder Alignment", description: "Clear communication keeps all parties aligned." },
  { icon: BarChart3, title: "Quality Assurance", description: "Systematic quality checks ensure deliverables meet specifications." },
];

const ProjectManagementPage = () => {
  return (
    <div className="min-h-screen">
<section className="relative pb-32 overflow-hidden bg-gradient-to-b from-navy via-navy-dark to-navy">
        <div className="container-custom relative z-10 pt-20">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-8">
            <Link to="/services" className="inline-flex items-center gap-2 text-cream/70 hover:text-cream hover:bg-cream/10 px-4 py-2 rounded-full transition-all backdrop-blur-sm border border-cream/10 hover:border-cream/30"><ArrowLeft className="w-4 h-4" /><span className="font-medium">Back to Services</span></Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-cream mb-6">Project Management</h1>
            <p className="text-cream/80 text-lg md:text-xl">End-to-end project management ensuring smooth execution, timely delivery, and quality standards.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8">What is <span className="text-navy-dark font-bold">Project Management</span>?</h2>
            <div className="prose prose-lg text-muted-foreground mb-12 space-y-6">
              <p className="text-xl leading-relaxed"><strong className="text-foreground">Project Management</strong> is the practice of initiating, planning, executing, controlling, and closing work to achieve specific goals within a specified time.</p>
              <p>At Shena Works Limited, our project managers bring years of experience in construction project management across Kenya and East Africa.</p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-8">Our Project Management Process</h3>
              <div className="space-y-4">
                {phases.map((phase, index) => (
                  <motion.div key={phase.number} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="flex items-start gap-6 p-6 bg-card rounded-xl shadow-md">
                    <div className="w-16 h-16 bg-navy-dark rounded-xl flex items-center justify-center shrink-0"><span className="text-cream font-bold text-xl">{phase.number}</span></div>
                    <div><h4 className="text-xl font-semibold text-foreground mb-2">{phase.title}</h4><p className="text-muted-foreground">{phase.description}</p></div>
                  </motion.div>
                ))}
              </div>
            </div>

            <h3 className="text-2xl font-serif font-bold text-foreground mb-6">Our Services</h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {features.map((f) => (<div key={f} className="flex items-center gap-3 p-4 bg-card rounded-xl"><CheckCircle className="w-5 h-5 text-navy-dark shrink-0" /><span className="text-foreground font-medium">{f}</span></div>))}
            </div>

            <h3 className="text-2xl font-serif font-bold text-foreground mb-6">Why Professional Project Management Matters</h3>
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {benefits.map((b) => (
                <div key={b.title} className="bg-card rounded-xl p-6 shadow-md">
                  <div className="w-12 h-12 bg-navy/10 rounded-xl flex items-center justify-center mb-4"><b.icon className="w-6 h-6 text-navy-dark" /></div>
                  <h4 className="font-semibold text-foreground mb-2">{b.title}</h4>
                  <p className="text-muted-foreground text-sm">{b.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button variant="navy" size="lg" asChild><Link to="/contact">Contact Us <ArrowRight className="ml-2 h-5 w-5" /></Link></Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-navy">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-cream mb-6 uppercase tracking-wide">Need Expert Project Management?</h2>
            <p className="text-cream/70 text-lg max-w-2xl mx-auto mb-8">Contact us today to discuss your project.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild><Link to="/contact">Contact Us</Link></Button>
              <Button variant="heroOutline" size="xl" asChild><Link to="/services">View All Services</Link></Button>
            </div>
          </motion.div>
        </div>
      </section>
</div>
  );
};

export default ProjectManagementPage;
