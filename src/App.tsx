import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

// Lazy load all pages for better performance
const Index = lazy(() => import("./pages/Index"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Individual Service Pages
const RoadConstructionPage = lazy(() => import("./pages/services/RoadConstructionPage"));
const GeneralConstructionPage = lazy(() => import("./pages/services/GeneralConstructionPage"));
const ArchitecturePage = lazy(() => import("./pages/services/ArchitecturePage"));
const InteriorDesignPage = lazy(() => import("./pages/services/InteriorDesignPage"));
const BillsOfQuantitiesPage = lazy(() => import("./pages/services/BillsOfQuantitiesPage"));
const ProjectManagementPage = lazy(() => import("./pages/services/ProjectManagementPage"));

// Individual Portfolio Pages
const CommercialPage = lazy(() => import("./pages/portfolio/CommercialPage"));
const RoadCabroPage = lazy(() => import("./pages/portfolio/RoadCabroPage"));
const HospitalityPage = lazy(() => import("./pages/portfolio/HospitalityPage"));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-navy-dark">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cream"></div>
  </div>
);

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/road-construction" element={<RoadConstructionPage />} />
          <Route path="/services/general-construction" element={<GeneralConstructionPage />} />
          <Route path="/services/architecture" element={<ArchitecturePage />} />
          <Route path="/services/interior-design" element={<InteriorDesignPage />} />
          <Route path="/services/bills-of-quantities" element={<BillsOfQuantitiesPage />} />
          <Route path="/services/project-management" element={<ProjectManagementPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/commercial" element={<CommercialPage />} />
          <Route path="/portfolio/road-cabro" element={<RoadCabroPage />} />
          <Route path="/portfolio/hospitality" element={<HospitalityPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
