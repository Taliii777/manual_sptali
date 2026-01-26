import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Seccion {
  id: string;
  titulo: string;
  nivel: number;
}

interface TablaContenidoProps {
  secciones: Seccion[];
}

/**
 * Tabla de contenido lateral que muestra las secciones de la página actual
 */
const TablaContenido = ({ secciones }: TablaContenidoProps) => {
  const [seccionActiva, setSeccionActiva] = useState<string>("");

  useEffect(() => {
    // Observer para detectar qué sección está visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSeccionActiva(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-80px 0px -80% 0px",
        threshold: 0,
      }
    );

    // Observar cada sección
    secciones.forEach((seccion) => {
      const elemento = document.getElementById(seccion.id);
      if (elemento) {
        observer.observe(elemento);
      }
    });

    return () => observer.disconnect();
  }, [secciones]);

  if (secciones.length === 0) {
    return null;
  }

  return (
    <nav className="sticky top-24 hidden xl:block w-56">
      <h3 className="text-sm font-semibold text-foreground mb-4">
        En esta página
      </h3>
      <ul className="space-y-1">
        {secciones.map((seccion) => (
          <li key={seccion.id}>
            <a
              href={`#${seccion.id}`}
              className={cn(
                "block text-sm py-1.5 transition-colors border-l-2 hover:text-primary",
                seccion.nivel === 2 ? "pl-3" : "pl-6",
                seccionActiva === seccion.id
                  ? "border-primary text-primary font-medium"
                  : "border-transparent text-muted-foreground hover:border-muted"
              )}
            >
              {seccion.titulo}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TablaContenido;
