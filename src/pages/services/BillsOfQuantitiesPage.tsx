import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, FileText, DollarSign, TrendingUp, Shield } from "lucide-react";
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
  "Quantity Takeoffs",
  "Cost Estimation",
  "Tender Documentation",
  "Contract Administration",
  "Valuations & Payments",
  "Final Account Settlement",
  "Variation Assessments",
  "Life Cycle Costing",
];

const benefits = [
  {
    icon: FileText,
    title: "Accurate Documentation",
    description: "Comprehensive and precise documentation of all project materials, labor, and costs."
  },
  {
    icon: DollarSign,
    title: "Cost Control",
    description: "Prevent budget overruns with detailed cost estimates and regular financial monitoring."
  },
  {
    icon: TrendingUp,
    title: "Value Engineering",
    description: "Optimize project costs without compromising on quality or functionality."
  },
  {
    icon: Shield,
    title: "Risk Mitigation",
    description: "Identify potential cost risks early and develop strategies to manage them."
  },
];

const BillsOfQuantitiesPage = () => {
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
                { label: "Bills of Quantities" }
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
              Bills of Quantities
            </h1>
            <p className="text-cream/80 text-lg md:text-xl">
              Accurate cost estimation and quantity surveying to ensure your project stays on budget from concept to completion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is BOQ Section */}
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
              What is a <span className="text-navy-dark font-bold">Bill of Quantities</span>?
            </h2>
            
            <div className="prose prose-lg text-muted-foreground mb-12 space-y-6">
              <p className="text-xl leading-relaxed">
                <strong className="text-foreground">A Bill of Quantities (BOQ)</strong> is a comprehensive document that lists all the materials, parts, labor, and their associated costs required to complete a construction project. It serves as a crucial tool for contractors, clients, and quantity surveyors to understand the full scope and cost of a project before work begins.
              </p>
              
              <p className="leading-relaxed">
                Think of it as a detailed shopping list for your construction project—but instead of groceries, it itemizes everything from cement and steel to specialized labor and equipment hire. Each item is measured, quantified, and priced, giving you a complete financial picture of your project.
              </p>

              <p className="leading-relaxed">
                At Shena Works Limited, our experienced quantity surveyors prepare accurate and detailed BOQs that help you plan effectively, compare contractor bids fairly, and manage your budget throughout the construction process.
              </p>
            </div>

            {/* Key Components */}
            <div className="bg-card rounded-2xl p-8 shadow-md mb-12">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
                Key Components of a BOQ
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-navy/10 rounded-lg flex items-center justify-center shrink-0 mt-1">
                      <span className="text-navy-dark font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Preliminaries</h4>
                      <p className="text-muted-foreground text-sm">General project information, conditions, and site requirements.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-navy/10 rounded-lg flex items-center justify-center shrink-0 mt-1">
                      <span className="text-navy-dark font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Preambles</h4>
                      <p className="text-muted-foreground text-sm">Specifications for materials, workmanship, and quality standards.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-navy/10 rounded-lg flex items-center justify-center shrink-0 mt-1">
                      <span className="text-navy-dark font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Measured Works</h4>
                      <p className="text-muted-foreground text-sm">Detailed quantities of materials and labor for each trade.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-navy/10 rounded-lg flex items-center justify-center shrink-0 mt-1">
                      <span className="text-navy-dark font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Provisional Sums</h4>
                      <p className="text-muted-foreground text-sm">Allowances for undefined or specialist work items.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-navy/10 rounded-lg flex items-center justify-center shrink-0 mt-1">
                      <span className="text-navy-dark font-bold">5</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Prime Cost Sums</h4>
                      <p className="text-muted-foreground text-sm">Costs for items to be selected later (fixtures, fittings).</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gold/20 rounded-lg flex items-center justify-center shrink-0 mt-1">
                      <span className="text-gold font-bold">6</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Contingencies</h4>
                      <p className="text-muted-foreground text-sm">Reserve funds for unforeseen circumstances.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Services */}
            <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
              Our Quantity Surveying Services
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
              Benefits of Professional BOQ Preparation
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
              Need Accurate Project Costing?
            </h2>
            <p className="text-cream/70 text-lg max-w-2xl mx-auto mb-8">
              Contact us today for professional quantity surveying services. Let's ensure your project stays on budget.
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
        preSelectedService="Bills of Quantities"
      />
    </div>
  );
};

export default BillsOfQuantitiesPage;
