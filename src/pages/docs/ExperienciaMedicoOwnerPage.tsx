import DocLayout from "@/layouts/DocLayout";

const secciones = [
  { id: "objetivo", titulo: "Objetivo", nivel: 2 },
  { id: "alcance", titulo: "Alcance", nivel: 2 },
];

const ExperienciaMedicoOwnerPage = () => {
  return (
    <DocLayout
      titulo="6. Experiencia Usuario Médico Owner"
      descripcion="Acceso total y configuración."
      seccionId="exp-medico-owner"
      secciones={secciones}
    >
      <h2 id="objetivo">Objetivo</h2>
      <p>
        Describe el propósito de esta experiencia de usuario y sus responsabilidades.
      </p>

      <h2 id="alcance">Alcance</h2>
      <p>
        Aquí se documentarán permisos, configuraciones y administración avanzada asociada al rol Owner.
      </p>
    </DocLayout>
  );
};

export default ExperienciaMedicoOwnerPage;
