import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Users, Clock, Target, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import QuoteModal from "@/components/QuoteModal";
import Breadcrumb from "@/components/Breadcrumb";
import { useState } from "react";

const features = [
  "Project Planning & Scheduling",
  "Resource Management",
  "Quality Assurance",
  "Risk Management",
  "Stakeholder Coordination",
  "Progress Reporting",
  "Budget Monitoring",
  "Handover & Close-out",
];

const phases = [
  {
    number: "01",
    title: "Initiation",
    description: "Define project objectives, scope, and stakeholders. Establish project charter and initial feasibility."
  },
  {
    number: "02",
    title: "Planning",
    description: "Develop detailed project plans, schedules, budgets, and resource allocation strategies."
  },
  {
    number: "03",
    title: "Execution",
    description: "Coordinate teams and resources, manage contracts, and ensure quality standards are met."
  },
  {
    number: "04",
    title: "Monitoring",
    description: "Track progress, manage changes, report to stakeholders, and address issues proactively."
  },
  {
    number: "05",
    title: "Closure",
    description: "Complete final inspections, handover deliverables, and document lessons learned."
  },
];

const benefits = [
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Strategic planning and proactive management ensure your project is delivered on schedule."
  },
  {
    icon: Target,
    title: "Budget Adherence",
    description: "Rigorous cost monitoring and control prevent overruns and maximize value for money."
  },
  {
    icon: Users,
    title: "Stakeholder Alignment",
    description: "Clear communication keeps all parties informed and aligned throughout the project lifecycle."
  },
  {
    icon: BarChart3,
    title: "Quality Assurance",
    description: "Systematic quality checks ensure deliverables meet specifications and exceed expectations."
  },
];

const ProjectManagementPage = () => {
  const [quoteModal, setQuoteModal] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar onQuoteClick={() => setQuoteModal(true)} />
      
      {/* Hero Section - No Image, Just Gradient */}
      <section className="relative pb-32 overflow-hidden bg-gradient-to-b from-navy via-navy-dark to-navy">
        <div className="container-custom relative z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex items-center gap-4"
          >
            <Breadcrumb
              items={[
                { label: "Services", href: "/services" },
                { label: "Project Management" }
              ]}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-cream mb-6">
              Project Management
            </h1>
            <p className="text-cream/80 text-lg md:text-xl">
              End-to-end project management ensuring smooth execution, timely delivery, and adherence to quality standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Project Management Section */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8">
              What is <span className="text-navy-dark font-bold">Project Management</span>?
            </h2>
            
            <div className="prose prose-lg text-muted-foreground mb-12 space-y-6">
              <p className="text-xl leading-relaxed">
                <strong className="text-foreground">Project Management</strong> is the practice of initiating, planning, executing, controlling, and closing the work of a team to achieve specific goals and meet specific success criteria within a specified time. It involves applying knowledge, skills, tools, and techniques to project activities to achieve project requirements.
              </p>
              
              <p className="leading-relaxed">
                In the construction industry, project management is essential for coordinating the many moving parts of a building project—from managing contractors and suppliers to ensuring regulatory compliance and quality control. A skilled project manager acts as the central hub, connecting clients, designers, contractors, and other stakeholders to deliver successful outcomes.
              </p>

              <p className="leading-relaxed">
                At Shena Works Limited, our project managers bring years of experience in construction project management. We understand the unique challenges of building projects in Kenya and East Africa, and we apply best practices to ensure your project is delivered on time, within budget, and to the highest quality standards.
              </p>
            </div>

            {/* Project Phases */}
            <div className="mb-12">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-8">
                Our Project Management Process
              </h3>
              <div className="space-y-4">
                {phases.map((phase, index) => (
                  <motion.div
                    key={phase.number}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-6 p-6 bg-card rounded-xl shadow-md"
                  >
                    <div className="w-16 h-16 bg-navy-dark rounded-xl flex items-center justify-center shrink-0">
                      <span className="text-navy-dark font-bold text-xl">{phase.number}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-2">{phase.title}</h4>
                      <p className="text-muted-foreground">{phase.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Our Services */}
            <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
              Our Project Management Services
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3 p-4 bg-card rounded-xl">
                  <CheckCircle className="w-5 h-5 text-gold shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
              Why Professional Project Management Matters
            </h3>
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="bg-card rounded-xl p-6 shadow-md">
                  <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{benefit.title}</h4>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button 
                variant="gold" 
                size="lg" 
                onClick={() => setQuoteModal(true)}
              >
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-cream mb-6">
              Need Expert Project Management?
            </h2>
            <p className="text-cream/70 text-lg max-w-2xl mx-auto mb-8">
              Contact us today to discuss your project. Let's ensure smooth execution from start to finish.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" onClick={() => setQuoteModal(true)}>
                Get a Free Quote
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
      <QuoteModal 
        isOpen={quoteModal} 
        onClose={() => setQuoteModal(false)} 
        preSelectedService="Project Management"
      />
    </div>
  );
};

export default ProjectManagementPage;
