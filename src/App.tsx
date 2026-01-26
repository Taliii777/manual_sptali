import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Páginas de documentación
import IntroduccionPage from "./pages/docs/IntroduccionPage";
import ProcesarVentasPage from "./pages/docs/ProcesarVentasPage";
import AgregarProductosPage from "./pages/docs/AgregarProductosPage";
import GestionInventarioPage from "./pages/docs/GestionInventarioPage";
import GestionPedidosPage from "./pages/docs/GestionPedidosPage";
import GestionClientesPage from "./pages/docs/GestionClientesPage";
import ConfiguracionTiendaPage from "./pages/docs/ConfiguracionTiendaPage";
import SeguridadPermisosPage from "./pages/docs/SeguridadPermisosPage";
import ReportesAnaliticaPage from "./pages/docs/ReportesAnaliticaPage";
import ConclusionSoportePage from "./pages/docs/ConclusionSoportePage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Rutas de documentación */}
          <Route path="/docs" element={<Navigate to="/docs/introduccion" replace />} />
          <Route path="/docs/introduccion" element={<IntroduccionPage />} />
          <Route path="/docs/procesar-ventas" element={<ProcesarVentasPage />} />
          <Route path="/docs/agregar-productos" element={<AgregarProductosPage />} />
          <Route path="/docs/gestion-inventario" element={<GestionInventarioPage />} />
          <Route path="/docs/gestion-pedidos" element={<GestionPedidosPage />} />
          <Route path="/docs/gestion-clientes" element={<GestionClientesPage />} />
          <Route path="/docs/configuracion-tienda" element={<ConfiguracionTiendaPage />} />
          <Route path="/docs/seguridad-permisos" element={<SeguridadPermisosPage />} />
          <Route path="/docs/reportes-analitica" element={<ReportesAnaliticaPage />} />
          <Route path="/docs/conclusion-soporte" element={<ConclusionSoportePage />} />
          
          {/* Ruta 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
