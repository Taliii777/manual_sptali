import { Link, useLocation } from "react-router-dom";
import IconoSeccion from "./IconoSeccion";
import { cn } from "@/lib/utils";

// Estructura de navegación del manual
export const seccionesManual = [
  {
    id: "inicio",
    titulo: "Inicio",
    ruta: "/docs/inicio",
    descripcion: "Introducción y visión general",
    posicion: 1,
  },
  {
    id: "como-instalar-solhub",
    titulo: "Como instalar SolHub",
    ruta: "/docs/como-instalar-solhub",
    descripcion: "Requisitos y pasos de instalación",
    posicion: 2,
  },
  {
    id: "solhub",
    titulo: "SolHub",
    ruta: "/docs/solhub",
    descripcion: "Visión general del sistema",
    posicion: 3,
  },
  {
    id: "exp-propietario",
    titulo: "1. Experiencia Usuario Propietario",
    ruta: "/docs/experiencia-propietario",
    descripcion: "Flujo y tareas principales",
    posicion: 4,
  },
  {
    id: "exp-recepcionista",
    titulo: "2. Experiencia Usuario Recepcionista",
    ruta: "/docs/experiencia-recepcionista",
    descripcion: "Registro y atención al paciente",
    posicion: 5,
  },
  {
    id: "exp-medico-residente",
    titulo: "3. Experiencia Usuario Médico Residente",
    ruta: "/docs/experiencia-medico-residente",
    descripcion: "Trabajo clínico y seguimiento",
    posicion: 6,
  },
  {
    id: "exp-medico-citotecnologo",
    titulo: "4. Experiencia Usuario Médico Citotecnologo",
    ruta: "/docs/experiencia-medico-citotecnologo",
    descripcion: "Proceso y validación de estudios",
    posicion: 7,
  },
  {
    id: "exp-medico-patologo",
    titulo: "5. Experiencia Usuario Médico Patologo",
    ruta: "/docs/experiencia-medico-patologo",
    descripcion: "Revisión y emisión de informes",
    posicion: 8,
  },
  {
    id: "exp-medico-owner",
    titulo: "6. Experiencia Usuario Médico Owner",
    ruta: "/docs/experiencia-medico-owner",
    descripcion: "Acceso total y configuración",
    posicion: 9,
  },
  {
    id: "final",
    titulo: "Final",
    ruta: "/docs/final",
    descripcion: "Cierre y recursos",
    posicion: 10,
  },
];

interface SidebarProps {
  abierto: boolean;
  onCerrar: () => void;
}

const Sidebar = ({ abierto, onCerrar }: SidebarProps) => {
  const location = useLocation();

  return (
    <>
      {/* Overlay para móvil */}
      {abierto && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={onCerrar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-72 border-r bg-sidebar transition-transform duration-300 lg:translate-x-0",
          abierto ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <nav className="h-full overflow-y-auto scrollbar-thin p-4">
          <div className="mb-4">
            <h2 className="px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Contenido
            </h2>
          </div>

          <ul className="space-y-1">
            {seccionesManual.map((seccion) => {
              const activo = !seccion.esExterno && location.pathname === seccion.ruta;
              const esExterno = seccion.esExterno || false;
              
              const contenido = (
                <>
                  <IconoSeccion seccion={seccion.id} tamaño="sm" />
                  <div className="flex-1 min-w-0">
                    <span className="block truncate text-sm">
                      {seccion.titulo}
                    </span>
                    {activo && (
                      <span className="block truncate text-xs text-muted-foreground mt-0.5">
                        {seccion.descripcion}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {seccion.posicion}
                  </span>
                </>
              );
              
              return (
                <li key={seccion.id}>
                  {esExterno ? (
                    <a
                      href={seccion.ruta}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={onCerrar}
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all duration-200",
                        "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                      )}
                    >
                      {contenido}
                    </a>
                  ) : (
                    <Link
                      to={seccion.ruta}
                      onClick={onCerrar}
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all duration-200",
                        activo
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                      )}
                    >
                      {contenido}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
