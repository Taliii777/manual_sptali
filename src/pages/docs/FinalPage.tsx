import DocLayout from "@/layouts/DocLayout";

const secciones = [
  { id: "cierre", titulo: "Cierre", nivel: 2 },
  { id: "recursos", titulo: "Recursos", nivel: 2 },
];

const FinalPage = () => {
  return (
    <DocLayout
      titulo="Final"
      descripcion="Cierre y recursos adicionales."
      seccionId="final"
      secciones={secciones}
    >
      <h2 id="cierre">Cierre</h2>
      <p>
        En esta sección se presentará el cierre del manual y próximos pasos.
      </p>

      <h2 id="recursos">Recursos</h2>
      <p>
        Aquí se agregarán enlaces, documentación y material de apoyo relevante.
      </p>
    </DocLayout>
  );
};

export default FinalPage;
