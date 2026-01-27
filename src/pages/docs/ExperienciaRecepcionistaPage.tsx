import DocLayout from "@/layouts/DocLayout";

const secciones = [
  { id: "objetivo", titulo: "Objetivo", nivel: 2 },
  { id: "flujo", titulo: "Flujo general", nivel: 2 },
];

const ExperienciaRecepcionistaPage = () => {
  return (
    <DocLayout
      titulo="2. Experiencia Usuario Recepcionista"
      descripcion="Registro y atención al paciente."
      seccionId="exp-recepcionista"
      secciones={secciones}
    >
      <h2 id="objetivo">Objetivo</h2>
      <p>
        Describe el propósito de esta experiencia de usuario y sus responsabilidades.
      </p>

      <h2 id="flujo">Flujo general</h2>
      <p>
        Aquí se documentará el flujo paso a paso de las tareas del Recepcionista en SolHub.
      </p>
    </DocLayout>
  );
};

export default ExperienciaRecepcionistaPage;
