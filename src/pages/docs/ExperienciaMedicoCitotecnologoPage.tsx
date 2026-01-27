import DocLayout from "@/layouts/DocLayout";

const secciones = [
  { id: "objetivo", titulo: "Objetivo", nivel: 2 },
  { id: "flujo", titulo: "Flujo general", nivel: 2 },
];

const ExperienciaMedicoCitotecnologoPage = () => {
  return (
    <DocLayout
      titulo="4. Experiencia Usuario Médico Citotecnologo"
      descripcion="Proceso y validación de estudios."
      seccionId="exp-medico-citotecnologo"
      secciones={secciones}
    >
      <h2 id="objetivo">Objetivo</h2>
      <p>
        Describe el propósito de esta experiencia de usuario y sus responsabilidades.
      </p>

      <h2 id="flujo">Flujo general</h2>
      <p>
        Aquí se documentará el flujo paso a paso de las tareas del Médico Citotecnologo en SolHub.
      </p>
    </DocLayout>
  );
};

export default ExperienciaMedicoCitotecnologoPage;
