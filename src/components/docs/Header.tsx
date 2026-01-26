// Header del Manual de Shopify — Solware
import { Menu, X, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import SolwareLogo from "./SolwareLogo";
import { Link } from "react-router-dom";

interface HeaderProps {
  onMenuClick: () => void;
  menuAbierto: boolean;
}

const Header = ({ onMenuClick, menuAbierto }: HeaderProps) => {
  const [temaOscuro, setTemaOscuro] = useState(false);

  useEffect(() => {
    // Verificar preferencia guardada o del sistema
    const temaGuardado = localStorage.getItem("tema");
    const prefiereTemaOscuro = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (temaGuardado === "dark" || (!temaGuardado && prefiereTemaOscuro)) {
      setTemaOscuro(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const alternarTema = () => {
    const nuevoTema = !temaOscuro;
    setTemaOscuro(nuevoTema);
    
    if (nuevoTema) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("tema", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("tema", "light");
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-4 lg:px-6">
        {/* Botón menú móvil */}
        <button
          onClick={onMenuClick}
          className="mr-4 p-2 rounded-lg hover:bg-muted lg:hidden"
          aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
        >
          {menuAbierto ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo y título */}
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <SolwareLogo className="h-8 w-auto" />
          <div className="hidden md:block">
            <span className="text-sm font-medium text-muted-foreground">
              Manual de Shopify — Solware
            </span>
          </div>
        </Link>

        {/* Espaciador */}
        <div className="flex-1" />

        {/* Acciones */}
        <div className="flex items-center gap-2">
          {/* Alternar tema */}
          <button
            onClick={alternarTema}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label={temaOscuro ? "Activar modo claro" : "Activar modo oscuro"}
          >
            {temaOscuro ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Enlace a soporte */}
          <Link
            to="/docs/conclusion-soporte"
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium"
          >
            Soporte
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
