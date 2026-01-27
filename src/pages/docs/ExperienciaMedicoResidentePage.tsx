import DocLayout from "@/layouts/DocLayout";

const secciones = [
  { id: "objetivo", titulo: "Objetivo", nivel: 2 },
  { id: "flujo", titulo: "Flujo general", nivel: 2 },
];

const ExperienciaMedicoResidentePage = () => {
  return (
    <DocLayout
      titulo="3. Experiencia Usuario Médico Residente"
      descripcion="Trabajo clínico y seguimiento."
      seccionId="exp-medico-residente"
      secciones={secciones}
    >
      <h2 id="objetivo">Objetivo</h2>
      <p>
        Describe el propósito de esta experiencia de usuario y sus responsabilidades.
      </p>

      <h2 id="flujo">Flujo general</h2>
      <p>
        Aquí se documentará el flujo paso a paso de las tareas del Médico Residente en SolHub.
      </p>
    </DocLayout>
  );
};

export default ExperienciaMedicoResidentePage;
