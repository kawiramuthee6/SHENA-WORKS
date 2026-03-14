import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

// Individual Service Pages
import RoadConstructionPage from "./pages/services/RoadConstructionPage";
import GeneralConstructionPage from "./pages/services/GeneralConstructionPage";
import ArchitecturePage from "./pages/services/ArchitecturePage";
import InteriorDesignPage from "./pages/services/InteriorDesignPage";
import BillsOfQuantitiesPage from "./pages/services/BillsOfQuantitiesPage";
import ProjectManagementPage from "./pages/services/ProjectManagementPage";

// Individual Portfolio Pages
import CommercialPage from "./pages/portfolio/CommercialPage";
import RoadCabroPage from "./pages/portfolio/RoadCabroPage";
import HospitalityPage from "./pages/portfolio/HospitalityPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
