import { Lightbulb, AlertTriangle, Info } from "lucide-react";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type TipoBloque = "consejo" | "importante" | "nota";

interface BloqueInfoProps {
  tipo: TipoBloque;
  titulo?: string;
  children: ReactNode;
}

const configuracion: Record<TipoBloque, {
  icono: typeof Lightbulb;
  claseContenedor: string;
  tituloDefault: string;
}> = {
  consejo: {
    icono: Lightbulb,
    claseContenedor: "doc-tip",
    tituloDefault: "Consejo",
  },
  importante: {
    icono: AlertTriangle,
    claseContenedor: "doc-warning",
    tituloDefault: "Importante",
  },
  nota: {
    icono: Info,
    claseContenedor: "doc-note",
    tituloDefault: "Nota",
  },
};

/**
 * Bloque informativo para destacar consejos, notas importantes o avisos
 */
const BloqueInfo = ({ tipo, titulo, children }: BloqueInfoProps) => {
  const config = configuracion[tipo];
  const Icono = config.icono;

  return (
    <div className={cn(config.claseContenedor, "my-6")}>
      <div className="flex items-start gap-3">
        <Icono size={20} className="mt-0.5 flex-shrink-0" />
        <div>
          <strong className="text-foreground block mb-1">
            {titulo || config.tituloDefault}
          </strong>
          <div className="text-sm text-muted-foreground">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default BloqueInfo;
