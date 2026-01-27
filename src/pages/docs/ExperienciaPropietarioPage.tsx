import DocLayout from "@/layouts/DocLayout";

const secciones = [
  { id: "objetivo", titulo: "Objetivo", nivel: 2 },
  { id: "flujo", titulo: "Flujo general", nivel: 2 },
];

const ExperienciaPropietarioPage = () => {
  return (
    <DocLayout
      titulo="1. Experiencia Usuario Propietario"
      descripcion="Flujo y tareas principales del usuario Propietario."
      seccionId="exp-propietario"
      secciones={secciones}
    >
      <h2 id="objetivo">Objetivo</h2>
      <p>
        Describe el propósito de esta experiencia de usuario y sus responsabilidades.
      </p>

      <h2 id="flujo">Flujo general</h2>
      <p>
        Aquí se documentará el flujo paso a paso de las tareas del Propietario en SolHub.
      </p>
    </DocLayout>
  );
};

export default ExperienciaPropietarioPage;
