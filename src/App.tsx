import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
          <Route path="/contact" element={<ContactPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
