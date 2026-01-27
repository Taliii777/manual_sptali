import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Páginas de documentación
import IntroduccionPage from "./pages/docs/IntroduccionPage";
import ComoInstalarSolhub from "./pages/docs/ComoInstalarSolHub";
import SolHubPage from "./pages/docs/SolHubPage";
import ExperienciaPropietarioPage from "./pages/docs/ExperienciaPropietarioPage";
import ExperienciaRecepcionistaPage from "./pages/docs/ExperienciaRecepcionistaPage";
import ExperienciaMedicoResidentePage from "./pages/docs/ExperienciaMedicoResidentePage";
import ExperienciaMedicoCitotecnologoPage from "./pages/docs/ExperienciaMedicoCitotecnologoPage";
import ExperienciaMedicoPatologoPage from "./pages/docs/ExperienciaMedicoPatologoPage";
import ExperienciaMedicoOwnerPage from "./pages/docs/ExperienciaMedicoOwnerPage";
import FinalPage from "./pages/docs/FinalPage";
import RolesPermisosPage from "./pages/docs/RolesPermisosPage";

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
          <Route path="/docs" element={<Navigate to="/docs/inicio" replace />} />

          {/* Compat: ruta antigua */}
          <Route path="/docs/introduccion" element={<Navigate to="/docs/inicio" replace />} />

          <Route path="/docs/inicio" element={<IntroduccionPage />} />
          <Route path="/docs/como-instalar-solhub" element={<ComoInstalarSolhub />} />
          <Route path="/docs/solhub" element={<SolHubPage />} />
          <Route path="/docs/experiencia-propietario" element={<ExperienciaPropietarioPage />} />
          <Route path="/docs/experiencia-recepcionista" element={<ExperienciaRecepcionistaPage />} />
          <Route path="/docs/experiencia-medico-residente" element={<ExperienciaMedicoResidentePage />} />
          <Route path="/docs/experiencia-medico-citotecnologo" element={<ExperienciaMedicoCitotecnologoPage />} />
          <Route path="/docs/experiencia-medico-patologo" element={<ExperienciaMedicoPatologoPage />} />
          <Route path="/docs/experiencia-medico-owner" element={<ExperienciaMedicoOwnerPage />} />
          <Route path="/docs/final" element={<FinalPage />} />

          {/* Secciones auxiliares */}
          <Route path="/docs/roles-permisos" element={<RolesPermisosPage />} />
          
          {/* Ruta 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
