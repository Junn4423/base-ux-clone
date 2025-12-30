import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages-vite/Index";
import NotFound from "./pages-vite/NotFound";
import Contact from "./pages-vite/Contact";
import UserGuide from "./pages-vite/UserGuide";
import WarrantyPolicy from "./pages-vite/WarrantyPolicy";
import PaymentTerms from "./pages-vite/PaymentTerms";
import UnderConstruction from "./pages-vite/UnderConstruction";
import Login from "./pages-vite/Login";
import Register from "./pages-vite/Register";
import ForgotPassword from "./pages-vite/ForgotPassword";
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
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

