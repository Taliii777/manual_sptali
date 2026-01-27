import DocLayout from "@/layouts/DocLayout";
import { Link } from "react-router-dom";

const secciones = [
  { id: "overview", titulo: "Visión general", nivel: 2 },
  { id: "roles", titulo: "Roles y permisos", nivel: 2 },
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
        Esta sección describe de forma general qué es SolHub y cómo se organiza el sistema.
      </p>

      <h2 id="roles">Roles y permisos</h2>
      <p>
        Para consultar la matriz de permisos y la descripción de cada rol, revisa{" "}
        <Link to="/docs/roles-permisos" className="underline">
          Roles y Permisos del Sistema
        </Link>
        .
      </p>
    </DocLayout>
  );
};

export default SolHubPage;
