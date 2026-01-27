import DocLayout from "@/layouts/DocLayout";

const secciones = [
  { id: "tabla-general", titulo: "Tabla general de roles", nivel: 2 },
  { id: "descripcion-roles", titulo: "Descripción de roles", nivel: 2 },
];

const RolesPermisosPage = () => {
  return (
    <DocLayout
      titulo="Roles y Permisos del Sistema"
      descripcion="Matriz de permisos y descripción de roles."
      seccionId="roles-permisos"
      secciones={secciones}
    >
      <h2 id="tabla-general">Tabla general de roles (vista transpuesta)</h2>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-muted">
              <th className="border px-3 py-2 text-left">Permiso / Rol</th>
              <th className="border px-3 py-2 text-center">Recepción</th>
              <th className="border px-3 py-2 text-center">Enfermería</th>
              <th className="border px-3 py-2 text-center">Imagenología</th>
              <th className="border px-3 py-2 text-center">Call Center</th>
              <th className="border px-3 py-2 text-center">Médico</th>
              <th className="border px-3 py-2 text-center">Owner</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-3 py-2">Ver casos / pacientes</td>
              <td className="border px-3 py-2 text-center">Sí</td>
              <td className="border px-3 py-2 text-center">Sí</td>
              <td className="border px-3 py-2 text-center">Sí</td>
              <td className="border px-3 py-2 text-center">Sí</td>
              <td className="border px-3 py-2 text-center">Sí</td>
              <td className="border px-3 py-2 text-center">Sí</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Editar datos del paciente</td>
              <td className="border px-3 py-2 text-center">Sí</td>
              <td className="border px-3 py-2 text-center">No</td>
              <td className="border px-3 py-2 text-center">No</td>
              <td className="border px-3 py-2 text-center">No</td>
              <td className="border px-3 py-2 text-center">No</td>
              <td className="border px-3 py-2 text-center">No</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Registrar pacientes</td>
              <td className="border px-3 py-2 text-center">Sí</td>
              <td className="border px-3 py-2 text-center">No</td>
              <td className="border px-3 py-2 text-center">No</td>
              <td className="border px-3 py-2 text-center">No</td>
              <td className="border px-3 py-2 text-center">No</td>
              <td className="border px-3 py-2 text-center">Sí</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Triaje</td>
              <td className="border px-3 py-2 text-center">No</td>
              <td className="border px-3 py-2 text-center">Sí</td>
              <td className="border px-3 py-2 text-center">No</td>
              <td className="border px-3 py-2 text-center">No</td>
              <td className="border px-3 py-2 text-center">No</td>
              <td className="border px-3 py-2 text-center">Sí</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Generar / editar informe</td>
              <td className="border px-3 py-2 text-center">No</td>
              <td className="border px-3 py-2 text-center">No</td>
              <td className="border px-3 py-2 text-center">No</td>
              <td className="border px-3 py-2 text-center">No</td>
              <td className="border px-3 py-2 text-center">Sí</td>
              <td className="border px-3 py-2 text-center">Sí</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Enviar informes</td>
              <td className="border px-3 py-2 text-center">Sí</td>
              <td className="border px-3 py-2 text-center">Sí</td>
              <td className="border px-3 py-2 text-center">Sí</td>
              <td className="border px-3 py-2 text-center">Sí</td>
              <td className="border px-3 py-2 text-center">Sí</td>
              <td className="border px-3 py-2 text-center">Sí</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Adjuntar URL (Drive)</td>
              <td className="border px-3 py-2 text-center">No</td>
              <td className="border px-3 py-2 text-center">No</td>
              <td className="border px-3 py-2 text-center">Sí</td>
              <td className="border px-3 py-2 text-center">No</td>
              <td className="border px-3 py-2 text-center">No</td>
              <td className="border px-3 py-2 text-center">Sí</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Exportar data</td>
              <td className="border px-3 py-2 text-center">Sí</td>
              <td className="border px-3 py-2 text-center">Sí</td>
              <td className="border px-3 py-2 text-center">Sí</td>
              <td className="border px-3 py-2 text-center">Sí</td>
              <td className="border px-3 py-2 text-center">Sí</td>
              <td className="border px-3 py-2 text-center">Sí</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Ver historial</td>
              <td className="border px-3 py-2 text-center">Sí</td>
              <td className="border px-3 py-2 text-center">Sí</td>
              <td className="border px-3 py-2 text-center">Sí</td>
              <td className="border px-3 py-2 text-center">Sí</td>
              <td className="border px-3 py-2 text-center">Sí</td>
              <td className="border px-3 py-2 text-center">Sí</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="descripcion-roles">Descripción de roles</h2>

      <h3>Recepción</h3>
      <p>
        Responsable del registro y edición de los datos del paciente. Puede crear y editar
        pacientes, visualizar casos y pacientes, enviar informes ya generados, exportar
        información y consultar el historial.
      </p>

      <h3>Enfermería</h3>
      <p>
        Rol clínico-operativo enfocado en el triaje. Puede visualizar pacientes y casos,
        realizar el triaje y ver el informe final y el estado del caso.
      </p>

      <h3>Imagenología</h3>
      <p>
        Rol operativo que visualiza pacientes y casos. Su función principal es adjuntar o
        reemplazar la URL del estudio (Drive) dentro del caso.
      </p>

      <h3>Call Center</h3>
      <p>
        Rol operativo de seguimiento y comunicación. Puede visualizar pacientes y casos y
        enviar informes a los pacientes, sustituyendo el uso de hojas externas (Sheets).
      </p>

      <h3>Médico</h3>
      <p>
        Responsable del contenido clínico. Puede generar y editar informes y exámenes,
        adjuntar su firma médica y enviar informes.
      </p>

      <h3>Owner</h3>
      <p>
        Rol con acceso total al sistema. Puede realizar todas las acciones disponibles dentro
        de la plataforma.
      </p>
    </DocLayout>
  );
};

export default RolesPermisosPage;
