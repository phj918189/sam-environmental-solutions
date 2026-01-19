import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Layout from "@/components/layout/Layout";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ServiceDetailPage from "@/pages/ServiceDetailPage";
import PortfolioPage from "@/pages/PortfolioPage";
import PortfolioDetailPage from "@/pages/PortfolioDetailPage";
import NewsPage from "@/pages/NewsPage";
import NewsDetailPage from "@/pages/NewsDetailPage";
import ContactPage from "@/pages/ContactPage";
import PrivacyPage from "@/pages/PrivacyPage";
import TermsPage from "@/pages/TermsPage";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

// Wrapper component that provides language context within BrowserRouter
const AppRoutes = () => {
  return (
    <LanguageProvider>
      <Layout>
        <Routes>
          {/* Korean Routes (default) */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services/:serviceType" element={<ServiceDetailPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:id" element={<PortfolioDetailPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:id" element={<NewsDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />

          {/* English Routes */}
          <Route path="/en" element={<HomePage />} />
          <Route path="/en/about" element={<AboutPage />} />
          <Route path="/en/services/:serviceType" element={<ServiceDetailPage />} />
          <Route path="/en/portfolio" element={<PortfolioPage />} />
          <Route path="/en/portfolio/:id" element={<PortfolioDetailPage />} />
          <Route path="/en/news" element={<NewsPage />} />
          <Route path="/en/news/:id" element={<NewsDetailPage />} />
          <Route path="/en/contact" element={<ContactPage />} />
          <Route path="/en/privacy" element={<PrivacyPage />} />
          <Route path="/en/terms" element={<TermsPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </LanguageProvider>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
