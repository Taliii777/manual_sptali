interface CapturaPantallaProps {
  src: string;
  alt: string;
  descripcion?: string;
}

/**
 * Componente para mostrar capturas de pantalla con descripción opcional
 */
const CapturaPantalla = ({ src, alt, descripcion }: CapturaPantallaProps) => {
  return (
    <div className="my-4">
      <img 
        src={src} 
        alt={alt} 
        className="mt-4 rounded-lg border shadow-md max-w-full h-auto mx-auto"
      />
      {descripcion && (
        <p className="text-sm text-muted-foreground text-center mt-2">
          {descripcion}
        </p>
      )}
    </div>
  );
};

export default CapturaPantalla;

