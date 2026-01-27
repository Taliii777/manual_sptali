import { 
  BookOpen, 
  ShoppingCart, 
  Package, 
  Boxes, 
  ClipboardList, 
  Users, 
  Settings, 
  Shield, 
  BarChart3, 
  HelpCircle,
  Home,
  Stethoscope,
  LucideIcon
} from "lucide-react";

// Mapeo de iconos por sección
const iconosPorSeccion: Record<string, LucideIcon> = {
  introduccion: BookOpen,
  ventas: ShoppingCart,
  productos: Package,
  inventario: Boxes,
  pedidos: ClipboardList,
  clientes: Users,
  configuracion: Settings,
  seguridad: Shield,
  reportes: BarChart3,
  soporte: HelpCircle,
  definicion: Home,
  solhub: Stethoscope,
};

// Colores de fondo para cada sección
const coloresPorSeccion: Record<string, string> = {
  introduccion: "bg-primary/10 text-primary",
  ventas: "bg-accent/10 text-accent",
  productos: "bg-orange-500/10 text-orange-500",
  inventario: "bg-purple-500/10 text-purple-500",
  pedidos: "bg-blue-500/10 text-blue-500",
  clientes: "bg-pink-500/10 text-pink-500",
  configuracion: "bg-slate-500/10 text-slate-500",
  seguridad: "bg-red-500/10 text-red-500",
  reportes: "bg-emerald-500/10 text-emerald-500",
  soporte: "bg-amber-500/10 text-amber-500",
  definicion: "bg-cyan-500/10 text-cyan-500",
  solhub: "bg-teal-500/10 text-teal-500",
};

interface IconoSeccionProps {
  seccion: string;
  tamaño?: "sm" | "md" | "lg";
  className?: string;
}

/**
 * Componente para mostrar iconos de cada sección de documentación
 * @param seccion - Identificador de la sección (introduccion, ventas, productos, etc.)
 * @param tamaño - Tamaño del icono (sm, md, lg)
 */
const IconoSeccion = ({ seccion, tamaño = "md", className = "" }: IconoSeccionProps) => {
  const Icono = iconosPorSeccion[seccion] || BookOpen;
  const colores = coloresPorSeccion[seccion] || "bg-primary/10 text-primary";
  
  const tamaños = {
    sm: "p-2",
    md: "p-3",
    lg: "p-4",
  };

  const tamañosIcono = {
    sm: 16,
    md: 24,
    lg: 32,
  };

  return (
    <div 
      className={`${colores} ${tamaños[tamaño]} rounded-xl inline-flex items-center justify-center ${className}`}
    >
      <Icono size={tamañosIcono[tamaño]} strokeWidth={2} />
    </div>
  );
};

export default IconoSeccion;
