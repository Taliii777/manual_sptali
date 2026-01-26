import DocLayout from "@/layouts/DocLayout";
import BloqueInfo from "@/components/docs/BloqueInfo";

const secciones = [
  { id: "admin-web", titulo: "En el administrador web", nivel: 2 },
  { id: "marcar-preparado", titulo: "Marcar como completado", nivel: 3 },
  { id: "entregas-locales", titulo: "Entregas locales o recogida", nivel: 3 },
  { id: "shopify-pos", titulo: "En la aplicación Shopify POS", nivel: 2 },
  { id: "configurar-pos", titulo: "Configurar preparación automática", nivel: 3 },
  { id: "notificaciones", titulo: "Notificaciones al cliente", nivel: 2 },
];

const ProcesarVentasPage = () => {
  return (
    <DocLayout
      titulo="Procesar Ventas"
      descripcion="Aprende a gestionar pedidos, verificar estados de pago y marcar pedidos como completados."
      seccionId="ventas"
      secciones={secciones}
    >
      <p>
        Una parte fundamental de operar tu tienda es la <strong>gestión de pedidos</strong>: revisar los nuevos pedidos, 
        verificar su estado de pago y envío, prepararlos y marcarlos como completados (en Shopify esto se conoce como 
        "marcar como preparado" o <strong>cumplir el pedido</strong>).
      </p>

      <h2 id="admin-web">En el administrador web (pedidos de la tienda en línea)</h2>
      
      <p>
        Inicia sesión en tu panel de control de Shopify y navega a <strong>Pedidos</strong> (en el menú lateral). 
        Allí verás la lista de pedidos recibidos. Puedes hacer clic en un número de pedido para ver detalles completos del mismo.
      </p>

      <h3>Revisar estado del pedido</h3>
      <p>
        Al abrir el detalle de un pedido, verás su estado. Un pedido recién realizado puede aparecer como 
        "Pagado" (si el pago se completó) y <strong>"No preparado"</strong> si aún no se ha cumplido. 
        Shopify distingue entre pedidos <strong>no preparados</strong> (pendientes de envío o entrega) y 
        <strong>preparados</strong> (ya enviados o entregados al cliente).
      </p>

      <h3 id="marcar-preparado">Marcar un pedido como completado (cumplir el pedido)</h3>
      <p>
        Cuando estés listo para despachar los productos de un pedido, debes marcarlo como <strong>"Preparado"</strong> 
        (es decir, confirmar cumplimiento). Sigue estos pasos:
      </p>

      <ol>
        <li>En la página del pedido, busca la sección de <strong>artículos no preparados</strong></li>
        <li>Haz clic en el botón <strong>Marcar como preparado</strong> (o "Marcar como completado")</li>
        <li>Se abrirá una ventana donde podrás ingresar detalles del envío</li>
        <li>Agrega el número de seguimiento de la paquetería si corresponde (opcional pero recomendable)</li>
        <li>Selecciona la empresa de transporte si Shopify no la detecta automáticamente</li>
        <li>Marca la casilla de <strong>"Enviar notificación al cliente"</strong> si quieres que Shopify envíe un correo de confirmación</li>
        <li>Confirma haciendo clic en <strong>Marcar como preparado</strong></li>
      </ol>

      <BloqueInfo tipo="nota">
        Si el pedido tenía múltiples productos o estaba dividido en múltiples ubicaciones, es posible 
        cumplir parcialmente por cada ubicación, repitiendo la acción para cada sección marcada como 
        "No preparado" en el pedido.
      </BloqueInfo>

      <h3 id="entregas-locales">Pedidos enviados localmente o retirados en tienda</h3>
      <p>
        Si ofreces <strong>entrega local</strong> o <strong>recogida en tienda</strong>, puede que debas 
        marcar los pedidos como entregados manualmente. Por ejemplo, para entregas locales, Shopify ofrece 
        la opción <strong>"marcar como entregado"</strong> cuando completes la entrega. Asegúrate de 
        registrar estos estados para tener un historial preciso.
      </p>

      <h2 id="shopify-pos">En la aplicación Shopify POS (pedidos en persona)</h2>
      
      <p>
        Cuando realizas una venta en persona con la app <strong>Shopify POS</strong>, el pedido también 
        aparece en tu lista de Pedidos del administrador con la indicación de que fue pagado en tienda. 
        Por defecto, si un cliente compra en el local y se lleva el producto, el pedido puede marcarse 
        automáticamente como <strong>preparado</strong>.
      </p>

      <h3 id="configurar-pos">Configurar preparación automática en POS</h3>
      <p>
        Para activar la preparación automática:
      </p>
      <ol>
        <li>En Shopify POS, ve al menú <strong>≡ (Más)</strong></li>
        <li>Selecciona <strong>Configuración → Pedidos</strong></li>
        <li>Activa la opción <strong>"Marcar pedido en tienda como preparados"</strong></li>
      </ol>

      <BloqueInfo tipo="consejo">
        Con esta opción activa, todos los pedidos procesados en el POS se marcarán como cumplidos/preparados 
        automáticamente, ahorrándote hacerlo manualmente.
      </BloqueInfo>

      <p>
        Si prefieres verificar algo antes de cumplir (por ejemplo, para apartados o pedidos para envío), 
        puedes desactivar esa opción. En ese caso, los pedidos de POS quedarán como "No preparados" y 
        deberás entrar al administrador web para marcarlos como preparados cuando corresponda.
      </p>

      <h3>Consultar pedidos en la app POS</h3>
      <p>
        La aplicación Shopify POS tiene una sección de <strong>Pedidos</strong> donde puedes ver las ventas 
        recientes realizadas en el punto de venta. Allí podrás:
      </p>
      <ul>
        <li>Buscar un pedido para verificar detalles</li>
        <li>Reimprimir un recibo</li>
        <li>Iniciar una devolución si un cliente lo solicita</li>
      </ul>

      <h2 id="notificaciones">Notificaciones al cliente</h2>
      <p>
        Para pedidos en línea, Shopify envía automáticamente confirmaciones por email:
      </p>
      <ul>
        <li>Al recibir el pedido (confirmación de compra)</li>
        <li>Al ser enviado (si activaste la notificación de envío)</li>
      </ul>

      <p>
        Para ventas POS, puedes ofrecer al cliente un recibo impreso o enviarlo por email/SMS 
        desde la misma app POS al finalizar la venta.
      </p>

      <BloqueInfo tipo="importante">
        En resumen, la gestión de ventas implica revisar los pedidos entrantes, asegurarse de que el pago 
        está completado, preparar el paquete o la entrega, y <strong>cumplir</strong> el pedido marcándolo 
        como preparado/enviado. Llevar un buen control te ayudará a tener actualizados los estados de las 
        órdenes y un inventario preciso.
      </BloqueInfo>
    </DocLayout>
  );
};

export default ProcesarVentasPage;
