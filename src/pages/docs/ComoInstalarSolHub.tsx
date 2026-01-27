import DocLayout from "@/layouts/DocLayout";

const secciones = [
  { id: "requisitos", titulo: "Requisitos", nivel: 2 },
  { id: "pasos-para-instalar-solhub", titulo: "Pasos para instalar Solhub", nivel: 2 },
];

const ComoInstalarSolhub = () => {
  return (
    <DocLayout
      titulo="Como instalar SolHub"
      descripcion="Aprende cómo instalar SolHub."
      seccionId="como-instalar-solhub"
      secciones={secciones}
    >

      <h2 id="requisitos">Requisitos</h2>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li>Un navegador web (Chrome, Microsoft Edge, Opera, Brave, entre otros).</li>
        <li>Acceso a conexión a internet.</li>
      </ul>

      <h2 id="pasos-para-instalar-solhub">Pasos para instalar SolHub</h2>
      <ol className="list-decimal list-inside space-y-4 my-4">
        <li>
          Abre tu navegador web favorito desde cualquier dispositivo (celular, tablet o computadora), y dirígete a la barra de búsqueda.
          <img 
         src="/imagenes/1.pasos-para-instalar-solhub/1.png" 
         alt="Paso 1" 
         className="mt-4 rounded-lg border shadow-md max-w-full h-auto mx-auto"
           />
        </li>
        <li>
          Luego escribe la siguiente dirección en la barra de búsqueda:{" "}
          <a href="https://app.solhub.agency/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          https://app.solhub.agency/
          <img 
         src="/imagenes/1.pasos-para-instalar-solhub/2.png" 
         alt="Paso 2" 
         className="mt-4 rounded-lg border shadow-md max-w-full h-auto mx-auto"
           />
          </a>
        </li>
        <li>
          Inmediatamente te llevará a la página de Solhub.
          <img 
         src="/imagenes/1.pasos-para-instalar-solhub/3.png" 
         alt="Paso 3" 
         className="mt-4 rounded-lg border shadow-md max-w-full h-auto mx-auto"
           />
        </li>
        <li>
          Después dirígete al icono de Configuraciones.
          <img 
         src="/imagenes/1.pasos-para-instalar-solhub/4.png" 
         alt="Paso 4" 
         className="mt-4 rounded-lg border shadow-md max-w-full h-auto mx-auto"
           />
        </li>
        <li>
          Después selecciona "Más herramientas".
          <img 
         src="/imagenes/1.pasos-para-instalar-solhub/5.png" 
         alt="Paso 5" 
         className="mt-4 rounded-lg border shadow-md max-w-full h-auto mx-auto"
           />
        </li>
        <li>
          Selecciona "Anclar a la barra de tareas" para que se cree un acceso directo en la barra de tareas.
        <img 
         src="/imagenes/1.pasos-para-instalar-solhub/6.png" 
         alt="Paso 6" 
         className="mt-4 rounded-lg border shadow-md max-w-full h-auto mx-auto"
           />
        </li>
        <li>
          También puedes instalar la aplicación web localmente en tu dispositivo, seleccionando el icono de "Instalar SolHub".
        <img 
         src="/imagenes/1.pasos-para-instalar-solhub/7.png" 
         alt="Paso 7" 
         className="mt-4 rounded-lg border shadow-md max-w-full h-auto mx-auto"
           />
        </li>
        <li>
          Luego selecciona "Instalar".
        <img 
         src="/imagenes/1.pasos-para-instalar-solhub/8.png" 
         alt="Paso 8" 
         className="mt-4 rounded-lg border shadow-md max-w-full h-auto mx-auto"
           />
        </li>
        <li>
          Una vez instalada la aplicación te aparecerá el siguiente mensaje. Selecciona los permisos que quieres conceder a la app, y selecciona "Permitir"
        <img 
         src="/imagenes/1.pasos-para-instalar-solhub/9.png" 
         alt="Paso 9" 
         className="mt-4 rounded-lg border shadow-md max-w-full h-auto mx-auto"
           />
        </li>
        <li>
          ¡Y listo! Tendrás instalada tu aplicación web en tu dispositivo.
        <img 
         src="/imagenes/1.pasos-para-instalar-solhub/10.png" 
         alt="Paso 10" 
         className="mt-4 rounded-lg border shadow-md max-w-full h-auto mx-auto"
           />
        </li>
      </ol>

    </DocLayout>
  );
};

export default ComoInstalarSolhub;
