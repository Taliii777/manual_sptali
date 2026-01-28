import DocLayout from "@/layouts/DocLayout";

const secciones = [
  { id: "overview", titulo: "Visión general", nivel: 2 },
  { id: "impacto", titulo: "Impacto en la operación", nivel: 2 },
  { id: "accesibilidad", titulo: "Accesibilidad total", nivel: 2 },

];

const SolHubPage = () => {
  return (
    <DocLayout
      titulo="SolHub"
      descripcion="Visión general del sistema."
      seccionId="solhub"
      secciones={secciones}
    >
      <h2 id="overview">Visión general</h2>
      <p>
        SolHub es un ecosistema digital para la administración de centros clínicos (incluyendo
        laboratorios patológicos) que centraliza pacientes, casos y flujos de trabajo en un solo
        lugar, reduciendo la fragmentación de información y mejorando la trazabilidad.
      </p>

      <h2 id="impacto">Impacto en la operación</h2>
      <p>
        Al centralizar la operación, SolHub ayuda a disminuir errores por reprocesos/manualidad,
        acelerar el seguimiento de casos y facilitar decisiones basadas en información consistente.
        Esto se traduce en mayor eficiencia, menor carga operativa y mejor control del proceso de
        principio a fin.
      </p>

      <h2 id="accesibilidad">Accesibilidad total</h2>
      <p>
        La ventaja crítica de SolHub es su accesibilidad: al ser una solución basada en la web,
        permite operar y supervisar desde cualquier dispositivo (móvil, tableta o PC) con acceso a
        internet, manteniendo la información clave siempre disponible para una atención y gestión
        oportuna.
      </p>

      

    </DocLayout>
  );
};

export default SolHubPage;
