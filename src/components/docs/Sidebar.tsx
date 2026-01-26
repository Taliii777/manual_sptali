import { Link, useLocation } from "react-router-dom";
import IconoSeccion from "./IconoSeccion";
import { cn } from "@/lib/utils";

// Estructura de navegación del manual
export const seccionesManual = [
  {
    id: "introduccion",
    titulo: "Introducción",
    ruta: "/docs/introduccion",
    descripcion: "Bienvenida y visión general",
    posicion: 1,
  },
  {
    id: "ventas",
    titulo: "Procesar Ventas",
    ruta: "/docs/procesar-ventas",
    descripcion: "Gestión de pedidos y ventas",
    posicion: 2,
  },
  {
    id: "productos",
    titulo: "Agregar Productos",
    ruta: "/docs/agregar-productos",
    descripcion: "Catálogo y fichas de producto",
    posicion: 3,
  },
  {
    id: "inventario",
    titulo: "Gestión de Inventario",
    ruta: "/docs/gestion-inventario",
    descripcion: "Control de stock y existencias",
    posicion: 4,
  },
  {
    id: "pedidos",
    titulo: "Gestión de Pedidos",
    ruta: "/docs/gestion-pedidos",
    descripcion: "Preparación y envío de pedidos",
    posicion: 5,
  },
  {
    id: "clientes",
    titulo: "Gestión de Clientes",
    ruta: "/docs/gestion-clientes",
    descripcion: "Perfiles y datos de clientes",
    posicion: 6,
  },
  {
    id: "configuracion",
    titulo: "Configuración de la Tienda",
    ruta: "/docs/configuracion-tienda",
    descripcion: "Pagos, envíos y ajustes",
    posicion: 7,
  },
  {
    id: "seguridad",
    titulo: "Seguridad y Permisos",
    ruta: "/docs/seguridad-permisos",
    descripcion: "Usuarios, roles y accesos",
    posicion: 8,
  },
  {
    id: "reportes",
    titulo: "Reportes y Análisis",
    ruta: "/docs/reportes-analitica",
    descripcion: "Informes y estadísticas",
    posicion: 9,
  },
  {
    id: "soporte",
    titulo: "Conclusión y Soporte",
    ruta: "/docs/conclusion-soporte",
    descripcion: "FAQ y recursos adicionales",
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
              const activo = location.pathname === seccion.ruta;
              
              return (
                <li key={seccion.id}>
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
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Recursos adicionales */}
          <div className="mt-8 pt-6 border-t">
            <h2 className="px-3 mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Recursos
            </h2>
            <ul className="space-y-1">
              <li>
                <a
                  href="https://help.shopify.com/es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 text-sm text-sidebar-foreground hover:text-primary rounded-lg transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Centro de Ayuda Shopify
                </a>
              </li>
              <li>
                <a
                  href="https://community.shopify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 text-sm text-sidebar-foreground hover:text-primary rounded-lg transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Comunidad Shopify
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
