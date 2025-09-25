import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import SecondHand from "./pages/SecondHand";
import AgriculturalMachinery from "./pages/AgriculturalMachinery";
import GrasslandCultivation from "./pages/GrasslandCultivation";
import Inventory from "./pages/Inventory";
import Tractors from "./pages/Tractors";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/despre" element={<About />} />
              <Route path="/second-hand" element={<SecondHand />} />
              <Route path="/utilaje-agricole" element={<AgriculturalMachinery />} />
              <Route path="/utilaje-agricole/cultivarea-pajistilor" element={<GrasslandCultivation />} />
              <Route path="/inventar" element={<Inventory />} />
              <Route path="/tractoare" element={<Tractors />} />
              <Route path="/tractoare/:id" element={<ProductDetail />} />
              <Route path="/utilaje-agricole/:category/:id" element={<ProductDetail />} />
              <Route path="/utilaje-constructii/:category/:id" element={<ProductDetail />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
