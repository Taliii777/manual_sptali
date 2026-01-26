import DocLayout from "@/layouts/DocLayout";
import BloqueInfo from "@/components/docs/BloqueInfo";

const secciones = [
  { id: "metodos-pago", titulo: "Métodos de pago", nivel: 2 },
  { id: "shopify-payments", titulo: "Shopify Payments", nivel: 3 },
  { id: "terceros", titulo: "Proveedores terceros", nivel: 3 },
  { id: "pagos-manuales", titulo: "Pagos manuales", nivel: 3 },
  { id: "envios", titulo: "Configuración de envíos", nivel: 2 },
  { id: "impuestos", titulo: "Impuestos", nivel: 2 },
  { id: "dominio", titulo: "Dominio personalizado", nivel: 2 },
  { id: "tema", titulo: "Tema y diseño básico", nivel: 2 },
];

const ConfiguracionTiendaPage = () => {
  return (
    <DocLayout
      titulo="Configuración de la Tienda"
      descripcion="Configura los pagos, envíos, impuestos, dominio y tema de tu tienda Shopify."
      seccionId="configuracion"
      secciones={secciones}
    >
      <p>
        La configuración inicial de tu tienda es fundamental para operar correctamente. En esta sección 
        cubriremos los aspectos más importantes: métodos de pago, opciones de envío, impuestos y 
        personalización básica del tema.
      </p>

      <h2 id="metodos-pago">Métodos de pago</h2>
      <p>
        Para administrar los métodos de pago, navega a <strong>Configuración → Pagos</strong> en tu admin.
      </p>

      <h3 id="shopify-payments">Shopify Payments</h3>
      <p>
        Es la pasarela integrada de Shopify (disponible en muchos países). Si está disponible en tu país:
      </p>
      <ol>
        <li>Haz clic en <strong>"Completar configuración de cuenta"</strong></li>
        <li>Ingresa los datos de tu negocio</li>
        <li>Proporciona tu cuenta bancaria para depósitos</li>
        <li>Activa métodos como Shop Pay, Apple Pay, Google Pay</li>
      </ol>

      <BloqueInfo tipo="consejo">
        Shopify Payments te permite aceptar tarjetas de crédito y débito directamente, 
        además de métodos de pago acelerados que mejoran la experiencia de checkout.
      </BloqueInfo>

      <h3 id="terceros">Terceros proveedores de pago</h3>
      <p>
        Si Shopify Payments no está disponible o prefieres otro procesador:
      </p>
      <ul>
        <li><strong>PayPal:</strong> Vincula tu cuenta PayPal Business para aceptar pagos</li>
        <li><strong>Stripe:</strong> Disponible en algunos países como alternativa</li>
        <li><strong>MercadoPago:</strong> Popular en Latinoamérica</li>
        <li>Otros proveedores locales según tu región</li>
      </ul>
      <p>
        En la sección de <strong>Proveedores de pago</strong> puedes elegir uno de la lista y 
        seguir los pasos de integración (normalmente ingresar credenciales de API).
      </p>

      <h3 id="pagos-manuales">Pagos manuales</h3>
      <p>
        Para métodos como Contra reembolso o Transferencia bancaria:
      </p>
      <ol>
        <li>En la sección <strong>Formas de pago manual</strong>, haz clic en "Agregar"</li>
        <li>Describe el método (ej. "Pago al recoger" o "Transferencia bancaria")</li>
        <li>Proporciona instrucciones claras para el cliente</li>
      </ol>

      <BloqueInfo tipo="nota">
        Las formas manuales no procesan dinero automáticamente. Debes marcar el pedido como 
        pagado manualmente cuando recibas el dinero.
      </BloqueInfo>

      <h2 id="envios">Configuración de envíos</h2>
      <p>
        Ve a <strong>Configuración → Envío y entrega</strong> para configurar tus opciones de envío.
      </p>

      <h3>Perfiles de envío</h3>
      <p>
        Shopify usa perfiles de envío para definir tarifas. Por defecto hay un perfil general:
      </p>
      <ol>
        <li>Haz clic en el perfil para editarlo</li>
        <li>Define las <strong>zonas de envío</strong> (países/regiones donde envías)</li>
        <li>Para cada zona, configura las <strong>tarifas</strong>:
          <ul>
            <li>Tarifa plana (ej. $5.00 por pedido)</li>
            <li>Basada en peso del pedido</li>
            <li>Basada en precio del pedido</li>
            <li>Tarifas calculadas por paquetería (si integras transportistas)</li>
          </ul>
        </li>
      </ol>

      <h3>Envío gratis por umbral</h3>
      <p>
        Para ofrecer envío gratis en pedidos mayores a cierto monto:
      </p>
      <ol>
        <li>Agrega una nueva tarifa a la zona</li>
        <li>Nombrarla "Envío gratis"</li>
        <li>Precio: $0</li>
        <li>Agregar condición: "Pedidos sobre $X"</li>
      </ol>

      <h3>Entrega local y recogida</h3>
      <p>
        También puedes configurar:
      </p>
      <ul>
        <li><strong>Entrega local:</strong> Entregas directas en tu zona, con radio máximo o códigos postales</li>
        <li><strong>Recogida en tienda:</strong> El cliente recoge en tu ubicación física</li>
      </ul>

      <h2 id="impuestos">Impuestos</h2>
      <p>
        Ve a <strong>Configuración → Impuestos y aranceles</strong> para configurar:
      </p>
      <ul>
        <li><strong>Regiones de impuestos:</strong> Define qué impuestos aplican según la ubicación</li>
        <li><strong>Incluir impuestos en precios:</strong> Decide si los precios que muestras incluyen impuestos</li>
        <li><strong>Exenciones:</strong> Configura productos o clientes exentos si aplica</li>
      </ul>

      <BloqueInfo tipo="importante">
        Consulta con un contador o asesor fiscal sobre las tasas de impuestos correctas para tu 
        negocio y región. Shopify calcula automáticamente, pero la configuración inicial es tu responsabilidad.
      </BloqueInfo>

      <h2 id="dominio">Dominio personalizado</h2>
      <p>
        Tu tienda inicia con un dominio <code>tu-tienda.myshopify.com</code>. Para usar un dominio propio:
      </p>
      <ol>
        <li>Ve a <strong>Configuración → Dominios</strong></li>
        <li>Puedes <strong>Comprar un dominio nuevo</strong> directamente en Shopify</li>
        <li>O <strong>Conectar un dominio existente</strong> que ya tengas</li>
        <li>Sigue las instrucciones para configurar los DNS</li>
      </ol>

      <h2 id="tema">Tema y diseño básico</h2>
      <p>
        Para personalizar el aspecto de tu tienda:
      </p>
      <ol>
        <li>Ve a <strong>Tienda online → Temas</strong></li>
        <li>Shopify incluye el tema <strong>Dawn</strong> por defecto (gratuito y personalizable)</li>
        <li>Haz clic en <strong>"Personalizar"</strong> para editar:
          <ul>
            <li>Colores y tipografía</li>
            <li>Logo y favicon</li>
            <li>Secciones de la página de inicio</li>
            <li>Encabezado y pie de página</li>
          </ul>
        </li>
      </ol>

      <BloqueInfo tipo="consejo">
        El editor de temas funciona con "arrastrar y soltar". Puedes agregar secciones prediseñadas 
        y ordenarlas según tu preferencia sin necesidad de código.
      </BloqueInfo>

      <h3>Idioma del tema</h3>
      <p>
        Para que tu tienda muestre textos en español:
      </p>
      <ol>
        <li>En Temas, haz clic en <strong>Acciones → Editar idiomas</strong></li>
        <li>Selecciona español en el desplegable superior</li>
        <li>Los textos del tema se traducirán automáticamente</li>
        <li>Puedes personalizar cualquier texto individual</li>
      </ol>

      <p>
        Una buena configuración inicial te ahorrará tiempo y problemas a futuro. Revisa periódicamente 
        estas configuraciones para asegurarte de que están optimizadas para tu operación.
      </p>
    </DocLayout>
  );
};

export default ConfiguracionTiendaPage;
