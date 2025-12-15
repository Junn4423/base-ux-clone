import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import UserGuide from "./pages/UserGuide";
import WarrantyPolicy from "./pages/WarrantyPolicy";
import PaymentTerms from "./pages/PaymentTerms";
import UnderConstruction from "./pages/UnderConstruction";
import AOS from "aos";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 200, // Thời gian animation cực ngắn (200ms) để tối ưu SEO
      once: true, // Chỉ animate 1 lần khi scroll xuống, không animate khi scroll lên
      easing: "ease-out",
      offset: 50,
      delay: 0,
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/user-guide" element={<UserGuide />} />
            <Route path="/warranty-policy" element={<WarrantyPolicy />} />
            <Route path="/payment-terms" element={<PaymentTerms />} />
            <Route path="/under-construction" element={<UnderConstruction />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
