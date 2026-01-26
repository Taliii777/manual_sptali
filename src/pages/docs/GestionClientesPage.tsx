import DocLayout from "@/layouts/DocLayout";
import BloqueInfo from "@/components/docs/BloqueInfo";

const secciones = [
  { id: "buscar-clientes", titulo: "Buscar clientes", nivel: 2 },
  { id: "agregar-cliente", titulo: "Agregar un cliente", nivel: 2 },
  { id: "editar-cliente", titulo: "Editar información", nivel: 2 },
  { id: "notas-etiquetas", titulo: "Notas y etiquetas", nivel: 2 },
  { id: "marketing", titulo: "Marketing y comunicación", nivel: 2 },
  { id: "pos", titulo: "Clientes desde POS", nivel: 2 },
  { id: "fusionar-eliminar", titulo: "Fusionar o eliminar", nivel: 2 },
];

const GestionClientesPage = () => {
  return (
    <DocLayout
      titulo="Gestión de Clientes"
      descripcion="Administra los perfiles de tus clientes, segmentalos y mejora la comunicación."
      seccionId="clientes"
      secciones={secciones}
    >
      <p>
        Shopify incluye una sección para <strong>Clientes</strong>, donde se almacenan los perfiles de 
        tus clientes que han comprado o se han registrado en tu tienda. Saber utilizar esta sección te 
        permite buscar clientes, agregar nuevos manualmente y editar su información.
      </p>

      <h2 id="buscar-clientes">Buscar clientes</h2>
      <p>
        Ve al menú <strong>Clientes</strong> en tu panel de control. En la parte superior hay un campo 
        de búsqueda donde puedes ingresar:
      </p>
      <ul>
        <li>Nombre del cliente</li>
        <li>Correo electrónico</li>
        <li>Dirección postal</li>
        <li>Teléfono</li>
      </ul>
      <p>
        Shopify filtrará la lista conforme escribes. Por ejemplo, si un cliente te llama preguntando 
        por su pedido, puedes buscar por su apellido o email para acceder rápidamente a su perfil y 
        ver sus pedidos asociados.
      </p>

      <BloqueInfo tipo="consejo">
        También puedes usar la barra de búsqueda global (arriba en el admin) y limitar la búsqueda 
        específicamente a clientes para encontrarlos más rápido.
      </BloqueInfo>

      <h2 id="agregar-cliente">Agregar un nuevo cliente manualmente</h2>
      <p>
        Hay ocasiones en que querrás crear un cliente antes de que compre (por ejemplo, si recibes 
        un pedido telefónico o si migraste desde otro sistema). Para añadir un cliente:
      </p>
      <ol>
        <li>En la sección <strong>Clientes</strong>, haz clic en <strong>"Agregar cliente"</strong></li>
        <li>Rellena al menos el <strong>Nombre</strong> y algún dato de contacto (correo o teléfono)</li>
        <li>Puedes agregar la <strong>Dirección</strong> usando el botón "Agregar dirección"</li>
        <li>
          Configura las opciones:
          <ul>
            <li><strong>Marketing:</strong> Marca si el cliente aceptó recibir emails promocionales</li>
            <li><strong>Impuestos:</strong> Indica si es exento de impuestos (para revendedores con certificado)</li>
          </ul>
        </li>
        <li>Haz clic en <strong>Guardar</strong></li>
      </ol>

      <BloqueInfo tipo="nota">
        El email es importante si el cliente quiere crear una cuenta o recibir notificaciones, 
        pero no es obligatorio si solo guardas registro.
      </BloqueInfo>

      <h2 id="editar-cliente">Editar información de un cliente</h2>
      <p>
        Cuando abres un perfil de cliente, verás sus detalles: nombre, contacto, direcciones e 
        historial de pedidos. Para editar:
      </p>
      <ol>
        <li>Haz clic en <strong>"Gestionar"</strong> o los tres puntos <strong>"..."</strong></li>
        <li>
          Selecciona la opción deseada:
          <ul>
            <li><strong>Editar información de contacto:</strong> Cambiar email o nombre</li>
            <li><strong>Editar direcciones:</strong> Agregar, modificar o eliminar direcciones</li>
            <li><strong>Editar configuración de marketing:</strong> Actualizar preferencias de comunicación</li>
          </ul>
        </li>
        <li>Realiza los cambios y guarda</li>
      </ol>

      <h2 id="notas-etiquetas">Notas y etiquetas</h2>
      
      <h3>Notas internas</h3>
      <p>
        Puedes añadir una <strong>nota interna</strong> sobre el cliente, visible solo para ti y tu equipo:
      </p>
      <ul>
        <li>Ejemplo: "Cliente VIP, siempre preguntar por stock de tallas grandes"</li>
        <li>Útil para recordar preferencias o información importante</li>
        <li>No visible para el cliente</li>
      </ul>

      <h3>Etiquetas de cliente</h3>
      <p>
        Al igual que los productos, puedes etiquetar clientes con palabras clave:
      </p>
      <ul>
        <li>Ejemplos: "VIP", "Mayorista", "EventoFeria2025"</li>
        <li>Ayudan a filtrar y segmentar clientes</li>
        <li>Para agregar: escribe en el campo de etiquetas y presiona Enter</li>
        <li>Para quitar: haz clic en la "X" junto a la etiqueta</li>
      </ul>

      <h2 id="marketing">Marketing y comunicación</h2>
      
      <h3>Estado de suscripción</h3>
      <p>
        Cada cliente tiene un estado de suscripción a marketing que indica si aceptó recibir 
        comunicaciones promocionales. Puedes actualizarlo desde su perfil cuando:
      </p>
      <ul>
        <li>El cliente te da consentimiento explícito</li>
        <li>El cliente solicita darse de baja</li>
      </ul>

      <BloqueInfo tipo="importante">
        Respetar las preferencias de marketing es importante para cumplir con normativas de spam 
        y privacidad como GDPR.
      </BloqueInfo>

      <h3>Enviar correo al cliente</h3>
      <p>
        Desde el perfil del cliente, puedes enviarle un mensaje directamente:
      </p>
      <ol>
        <li>Haz clic en <strong>"Enviar correo electrónico"</strong></li>
        <li>Personaliza el asunto y cuerpo del mensaje</li>
        <li>Opcionalmente, envíate una copia a ti mismo</li>
        <li>Shopify dejará un registro en el historial del cliente</li>
      </ol>

      <h2 id="pos">Agregar clientes desde la app POS</h2>
      <p>
        En Shopify POS también puedes agregar clientes sobre la marcha:
      </p>
      <ol>
        <li>Durante una venta, toca <strong>"Agregar cliente"</strong></li>
        <li>Crea un nuevo perfil pidiendo nombre, email, etc.</li>
        <li>El perfil se sincronizará con el admin web</li>
      </ol>
      <p>
        También puedes buscar clientes existentes en la POS para atribuir la venta a su perfil. 
        Esto es genial para fidelización porque un mismo cliente que compra online y offline 
        tendrá un perfil unificado con todo su historial.
      </p>

      <h2 id="fusionar-eliminar">Fusionar o eliminar clientes</h2>
      
      <h3>Eliminar datos personales</h3>
      <p>
        Si un cliente solicita eliminar sus datos (por ejemplo, para cumplir GDPR):
      </p>
      <ol>
        <li>Abre el perfil del cliente</li>
        <li>Selecciona <strong>"Eliminar datos personales"</strong></li>
        <li>Confirma la acción (es irreversible)</li>
      </ol>

      <h3>Fusionar perfiles duplicados</h3>
      <p>
        Si el mismo cliente hizo pedidos con emails distintos:
      </p>
      <ol>
        <li>Selecciona dos perfiles en la lista de clientes</li>
        <li>Elige la opción de fusionar (si disponible en tu plan)</li>
        <li>Se combinarán los historiales</li>
      </ol>

      <BloqueInfo tipo="nota">
        Fusionar perfiles combina todos los pedidos e información. Hazlo con precaución ya que 
        no es reversible.
      </BloqueInfo>

      <p>
        La sección Clientes de Shopify es tu CRM básico. Úsala para mantener organizados tus contactos, 
        segmentar a tus mejores clientes y dirigir promociones específicas a ellos.
      </p>
    </DocLayout>
  );
};

export default GestionClientesPage;
