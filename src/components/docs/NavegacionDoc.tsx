import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { seccionesManual } from "./Sidebar";
import IconoSeccion from "./IconoSeccion";

interface NavegacionDocProps {
  rutaActual: string;
}

/**
 * Componente de navegación anterior/siguiente para documentos
 */
const NavegacionDoc = ({ rutaActual }: NavegacionDocProps) => {
  // Encontrar índice actual
  const indiceActual = seccionesManual.findIndex(
    (s) => s.ruta === rutaActual
  );

  const anterior = indiceActual > 0 ? seccionesManual[indiceActual - 1] : null;
  const siguiente = indiceActual < seccionesManual.length - 1 
    ? seccionesManual[indiceActual + 1] 
    : null;

  return (
    <nav className="mt-12 pt-8 border-t">
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Botón anterior */}
        {anterior ? (
          <Link
            to={anterior.ruta}
            className="doc-nav-button flex items-center gap-4"
          >
            <ChevronLeft 
              size={20} 
              className="text-muted-foreground group-hover:text-primary transition-colors" 
            />
            <div className="flex-1 text-left">
              <span className="block text-xs text-muted-foreground mb-1">
                Anterior
              </span>
              <span className="block text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                {anterior.titulo}
              </span>
            </div>
            <IconoSeccion seccion={anterior.id} tamaño="sm" />
          </Link>
        ) : (
          <div className="flex-1" />
        )}

        {/* Botón siguiente */}
        {siguiente ? (
          <Link
            to={siguiente.ruta}
            className="doc-nav-button flex items-center gap-4"
          >
            <IconoSeccion seccion={siguiente.id} tamaño="sm" />
            <div className="flex-1 text-right">
              <span className="block text-xs text-muted-foreground mb-1">
                Siguiente
              </span>
              <span className="block text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                {siguiente.titulo}
              </span>
            </div>
            <ChevronRight 
              size={20} 
              className="text-muted-foreground group-hover:text-primary transition-colors" 
            />
          </Link>
        ) : (
          <div className="flex-1" />
        )}
      </div>
    </nav>
  );
};

export default NavegacionDoc;
