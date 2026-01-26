import DocLayout from "@/layouts/DocLayout";
import BloqueInfo from "@/components/docs/BloqueInfo";

const secciones = [
  { id: "roles-permisos", titulo: "Roles y permisos", nivel: 2 },
  { id: "agregar-usuarios", titulo: "Agregar usuarios", nivel: 2 },
  { id: "gestionar-roles", titulo: "Gestionar roles", nivel: 2 },
  { id: "buenas-practicas", titulo: "Buenas prácticas de permisos", nivel: 2 },
  { id: "2fa", titulo: "Autenticación de dos factores", nivel: 2 },
  { id: "recomendaciones", titulo: "Recomendaciones de seguridad", nivel: 2 },
];

const SeguridadPermisosPage = () => {
  return (
    <DocLayout
      titulo="Seguridad y Permisos"
      descripcion="Gestiona usuarios, roles y aplica las mejores prácticas de seguridad para tu tienda."
      seccionId="seguridad"
      secciones={secciones}
    >
      <p>
        Mantener tu tienda segura y controlar el acceso de otras personas (empleados o colaboradores) 
        es fundamental. Aquí abordaremos cómo manejar los roles de usuario, agregar personal, restringir 
        accesos y aplicar buenas prácticas de seguridad.
      </p>

      <h2 id="roles-permisos">Roles y permisos de usuario en Shopify</h2>
      <p>
        El propietario de la tienda (quien creó la cuenta) tiene acceso total por defecto. Si tu tienda 
        requiere que otras personas ingresen al administrador, debes invitarles como usuarios con permisos 
        específicos.
      </p>
      <p>
        Los <strong>roles y permisos</strong> te ayudan a asignar el nivel de acceso que tus empleados 
        necesitan sin dar más del necesario. Por ejemplo:
      </p>
      <ul>
        <li>Un cajero solo necesita acceso al POS</li>
        <li>Un empleado de logística solo necesita ver pedidos y marcar envíos</li>
        <li>Un diseñador solo necesita editar el tema</li>
      </ul>

      <h2 id="agregar-usuarios">Agregar personal (invitar usuarios)</h2>
      <p>
        Para invitar a un empleado o colaborador:
      </p>
      <ol>
        <li>Ve a <strong>Configuración → Usuarios</strong></li>
        <li>Haz clic en <strong>"Agregar usuario"</strong> o <strong>"Invitar usuarios"</strong></li>
        <li>Ingresa el <strong>correo electrónico</strong> de la persona</li>
        <li>Asigna uno o varios <strong>roles</strong> al usuario</li>
        <li>Revisa el resumen de permisos que tendrá</li>
        <li>Marca la opción de <strong>requerir autenticación de dos pasos</strong> (recomendado)</li>
        <li>Haz clic en <strong>Enviar invitación</strong></li>
      </ol>

      <BloqueInfo tipo="nota">
        El usuario recibirá un email con un enlace de invitación. Tendrá 7 días para aceptarlo y 
        crear sus credenciales. Hasta que acepte, aparecerá como "Pendiente" en tu lista.
      </BloqueInfo>

      <h2 id="gestionar-roles">Gestionar roles</h2>
      <p>
        Si tienes varios empleados, vale la pena crear roles definidos:
      </p>
      <ol>
        <li>Ve a <strong>Configuración → Usuarios → Roles</strong></li>
        <li>Haz clic en <strong>"Agregar rol"</strong></li>
        <li>Dale un nombre descriptivo (ej. "Marketing", "Logística")</li>
        <li>Selecciona los permisos que incluye:
          <ul>
            <li>Pedidos (ver, editar, cumplir)</li>
            <li>Productos (ver, editar, crear)</li>
            <li>Clientes (ver, editar)</li>
            <li>Configuración (acceso limitado o completo)</li>
            <li>Informes y análisis</li>
            <li>Temas y contenido</li>
            <li>Aplicaciones</li>
          </ul>
        </li>
        <li>Guarda el rol</li>
      </ol>
      <p>
        Al invitar nuevos usuarios, solo asignas el rol en vez de tildar cada permiso individualmente.
      </p>

      <h2 id="buenas-practicas">Buenas prácticas de permisos</h2>
      <p>
        Nunca es buena idea que todos los empleados usen la misma cuenta. Sigue estas recomendaciones:
      </p>
      <ul>
        <li>
          <strong>Asigna solo los permisos necesarios:</strong> Si alguien solo empaqueta pedidos, 
          no necesita acceso a métodos de pago ni informes financieros.
        </li>
        <li>
          <strong>Usa POS staff accounts para ventas en tienda:</strong> Desde la app POS puedes crear 
          empleados que requieren PIN para hacer ventas, sin necesidad de acceso al admin web.
        </li>
        <li>
          <strong>Colaboradores externos:</strong> Para diseñadores o desarrolladores, usa el sistema 
          de colaboradores que les permite acceso limitado sin contar para el límite de usuarios.
        </li>
        <li>
          <strong>Revoca accesos cuando sea necesario:</strong> Si un empleado cambia de rol o deja 
          la empresa, revoca o ajusta su acceso inmediatamente.
        </li>
      </ul>

      <h2 id="2fa">Autenticación de dos factores (2FA)</h2>
      <p>
        La autenticación de dos factores añade una capa extra de seguridad:
      </p>
      <ul>
        <li>Incluso si alguien averigua la contraseña, no podrá entrar sin el código temporal del teléfono</li>
        <li>Actívala para tu cuenta y exígela a tus usuarios</li>
        <li>Puedes administrar 2FA en <strong>Usuarios → Seguridad</strong></li>
      </ul>

      <BloqueInfo tipo="importante">
        Es muy recomendable forzar la autenticación de dos pasos para todos los usuarios adicionales. 
        Al invitar usuarios, marca la opción para requerirla.
      </BloqueInfo>

      <h2 id="recomendaciones">Recomendaciones de seguridad</h2>

      <h3>Contraseñas</h3>
      <ul>
        <li>Usa contraseñas fuertes y únicas para la cuenta de administrador</li>
        <li>Asegúrate de que tus empleados hagan lo mismo</li>
        <li>Shopify te indicará si alguna contraseña es comprometida</li>
      </ul>

      <h3>Límite de usuarios</h3>
      <ul>
        <li>Revisa cuántos usuarios permite tu plan</li>
        <li>Cada usuario adicional debería ser alguien que realmente lo necesite</li>
        <li>Si necesitas más, considera subir de plan</li>
      </ul>

      <h3>Políticas internas</h3>
      <ul>
        <li>Educa a tu personal para que nunca compartan sus credenciales</li>
        <li>Que no inicien sesión en computadoras públicas</li>
        <li>Que cierren sesión cuando terminen</li>
      </ul>

      <h3>Apps de terceros</h3>
      <ul>
        <li>Instala solo apps confiables y necesarias</li>
        <li>Revoca las apps que ya no uses (en <strong>Apps → Desinstalar</strong>)</li>
        <li>No dejes "puertas abiertas" innecesarias</li>
      </ul>

      <h3>Registro de actividad</h3>
      <p>
        Shopify registra cierta actividad de usuarios. Puedes ver el historial de inicio de sesión 
        y acciones recientes en <strong>Configuración → Usuarios → Seguridad</strong>. Revísalo 
        periódicamente o si sospechas algo.
      </p>

      <h3>Certificado SSL</h3>
      <p>
        Shopify automáticamente provee SSL para tu tienda online, asegurando que la información 
        de tus clientes viaja cifrada. No debes hacer nada especial, solo verificar que siempre 
        cargue con <code>https</code>.
      </p>

      <BloqueInfo tipo="consejo">
        La inversión de unos minutos en configurar bien la seguridad y los permisos te puede 
        ahorrar grandes dolores de cabeza en el futuro. Shopify es una plataforma segura, 
        pero como dueño debes usar esas herramientas correctamente.
      </BloqueInfo>
    </DocLayout>
  );
};

export default SeguridadPermisosPage;
