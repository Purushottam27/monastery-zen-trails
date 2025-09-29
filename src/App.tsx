import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import VirtualTour from "./pages/VirtualTour";
import InteractiveMap from "./pages/InteractiveMap";
import AudioGuide from "./pages/AudioGuide";
import DigitalArchives from "./pages/DigitalArchives";
import CulturalCalendar from "./pages/CulturalCalendar";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Header />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/virtual-tour" element={<VirtualTour />} />
            <Route path="/virtual-tour/:monasteryId" element={<VirtualTour />} />
            <Route path="/map" element={<InteractiveMap />} />
            <Route path="/audio-guide" element={<AudioGuide />} />
            <Route path="/archives" element={<DigitalArchives />} />
            <Route path="/calendar" element={<CulturalCalendar />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
