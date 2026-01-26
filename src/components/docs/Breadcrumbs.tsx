import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbsProps {
  items: {
    etiqueta: string;
    ruta?: string;
  }[];
}

/**
 * Componente de migas de pan (breadcrumbs) para navegación
 */
const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <nav aria-label="Ruta de navegación" className="mb-6">
      <ol className="flex items-center gap-1.5 text-sm flex-wrap">
        {/* Inicio */}
        <li>
          <Link
            to="/"
            className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
          >
            <Home size={14} />
            <span className="sr-only">Inicio</span>
          </Link>
        </li>

        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1.5">
            <ChevronRight size={14} className="text-muted-foreground/50" />
            {item.ruta && index < items.length - 1 ? (
              <Link
                to={item.ruta}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {item.etiqueta}
              </Link>
            ) : (
              <span className="text-foreground font-medium">
                {item.etiqueta}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
