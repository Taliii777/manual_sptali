import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SolwareLogo from "@/components/docs/SolwareLogo";
import IconoSeccion from "@/components/docs/IconoSeccion";
import { seccionesManual } from "@/components/docs/Sidebar";
import Footer from "@/components/docs/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero */}
      <header className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container py-16 lg:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <SolwareLogo className="h-12 w-auto mx-auto mb-8" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Manual para tiendas{" "}
              <span className="text-gradient">Shopify</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Guía completa para operar tu tienda Shopify de manera eficiente. 
              Desde procesar ventas hasta reportes y análisis.
            </p>
            <Link
              to="/docs/introduccion"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-semibold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:shadow-primary/20"
            >
              Comenzar a leer
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
        
        {/* Decoración */}
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      </header>

      {/* Secciones */}
      <main className="flex-1 py-16 lg:py-24">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Contenido del Manual
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            10 secciones que cubren todos los aspectos de la operación de una tienda Shopify
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {seccionesManual.map((seccion) => (
              <Link
                key={seccion.id}
                to={seccion.ruta}
                className="group p-6 rounded-2xl border bg-card hover:border-primary hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <IconoSeccion seccion={seccion.id} tamaño="md" />
                  <div className="flex-1">
                    <span className="text-xs text-muted-foreground">
                      Sección {seccion.posicion}
                    </span>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {seccion.titulo}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {seccion.descripcion}
                    </p>
                  </div>
                  <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors mt-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
