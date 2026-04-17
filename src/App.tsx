import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import { WaterTreatment, Ventilation, Heating, DockDoors, Electrical } from "./pages/ServicePages";
import Equipment from "./pages/Equipment";
import Contacts from "./pages/Contacts";
import Requisites from "./pages/Requisites";
import Offer from "./pages/Offer";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/water-treatment" element={<WaterTreatment />} />
          <Route path="/services/ventilation" element={<Ventilation />} />
          <Route path="/services/heating" element={<Heating />} />
          <Route path="/services/dock-doors" element={<DockDoors />} />
          <Route path="/services/electrical" element={<Electrical />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/requisites" element={<Requisites />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
