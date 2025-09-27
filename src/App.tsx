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
import SoilCultivation from "./pages/SoilCultivation";
import ForestryMachinery from "./pages/ForestryMachinery";
import Inventory from "./pages/Inventory";
import Tractors from "./pages/Tractors";
import ProductDetail from "./pages/ProductDetail";
import BoxerAGFSeries from "./pages/BoxerAGFSeries";
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
              <Route path="/utilaje-agricole/prelucrarea-solului" element={<SoilCultivation />} />
              <Route path="/utilaje-agricole/utilaje-silvicultura" element={<ForestryMachinery />} />
              <Route path="/inventar" element={<Inventory />} />
              <Route path="/tractoare" element={<Tractors />} />
              <Route path="/produs/:id" element={<ProductDetail />} />
              <Route path="/serie/boxer-agf" element={<BoxerAGFSeries />} />
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
