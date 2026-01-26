import DocLayout from "@/layouts/DocLayout";
import BloqueInfo from "@/components/docs/BloqueInfo";

const secciones = [
  { id: "revisar-pedidos", titulo: "Revisar pedidos", nivel: 2 },
  { id: "cumplir-pedido", titulo: "Cumplir un pedido", nivel: 2 },
  { id: "etiquetas-envio", titulo: "Etiquetas de envío", nivel: 2 },
  { id: "devoluciones", titulo: "Devoluciones y reembolsos", nivel: 2 },
  { id: "entrega-local", titulo: "Entrega local y recogida", nivel: 2 },
  { id: "parciales", titulo: "Preparaciones parciales", nivel: 2 },
];

const GestionPedidosPage = () => {
  return (
    <DocLayout
      titulo="Gestión de Pedidos"
      descripcion="Aprende a revisar, preparar, enviar y gestionar devoluciones de los pedidos de tu tienda."
      seccionId="pedidos"
      secciones={secciones}
    >
      <p>
        La gestión efectiva de pedidos es fundamental para mantener satisfechos a tus clientes y operar 
        eficientemente. Esta sección cubre el flujo completo desde que recibes un pedido hasta su entrega 
        o posible devolución.
      </p>

      <h2 id="revisar-pedidos">Revisar pedidos</h2>
      <p>
        En el panel de control de Shopify, la sección <strong>Pedidos</strong> muestra todos los pedidos 
        recibidos. Puedes filtrar por:
      </p>
      <ul>
        <li><strong>Estado de pago:</strong> Pagado, Pendiente, Reembolsado</li>
        <li><strong>Estado de preparación:</strong> No preparado, Preparado parcialmente, Preparado</li>
        <li><strong>Canal de venta:</strong> Tienda online, POS, otros canales</li>
        <li><strong>Fecha:</strong> Rango de fechas específico</li>
      </ul>

      <p>
        Al hacer clic en un pedido, verás el detalle completo incluyendo:
      </p>
      <ul>
        <li>Información del cliente y dirección de envío</li>
        <li>Productos ordenados con cantidades y precios</li>
        <li>Historial de pagos</li>
        <li>Notas del pedido y del cliente</li>
        <li>Timeline con todas las acciones realizadas</li>
      </ul>

      <h2 id="cumplir-pedido">Cumplir un pedido (preparación)</h2>
      <p>
        Cuando estés listo para despachar un pedido:
      </p>
      <ol>
        <li>Abre el pedido desde la lista de <strong>Pedidos</strong></li>
        <li>En la sección de artículos no preparados, haz clic en <strong>"Marcar como preparado"</strong></li>
        <li>Ingresa la información de envío:
          <ul>
            <li>Número de seguimiento (tracking)</li>
            <li>Empresa transportista</li>
            <li>Fecha de envío</li>
          </ul>
        </li>
        <li>Decide si deseas notificar al cliente por email</li>
        <li>Confirma haciendo clic en <strong>"Marcar como preparado"</strong></li>
      </ol>

      <BloqueInfo tipo="consejo">
        Agregar el número de seguimiento permite que tus clientes rastreen sus envíos y reduce las 
        consultas sobre el estado del pedido.
      </BloqueInfo>

      <h2 id="etiquetas-envio">Etiquetas de envío</h2>
      <p>
        Si tienes configurado <strong>Shopify Shipping</strong> (disponible en algunos países), puedes 
        comprar e imprimir etiquetas de envío directamente desde el pedido:
      </p>
      <ol>
        <li>En el pedido, haz clic en <strong>"Comprar etiqueta de envío"</strong></li>
        <li>Selecciona el servicio de paquetería y la tarifa</li>
        <li>Confirma la compra de la etiqueta</li>
        <li>Imprime la etiqueta y pégala en el paquete</li>
      </ol>

      <p>
        Si usas paqueterías externas, genera la etiqueta en su plataforma y luego ingresa el número 
        de seguimiento en Shopify al marcar como preparado.
      </p>

      <h2 id="devoluciones">Devoluciones y reembolsos</h2>
      <p>
        Cuando un cliente solicita una devolución:
      </p>
      <ol>
        <li>Abre el pedido correspondiente</li>
        <li>Haz clic en <strong>"Reembolsar"</strong></li>
        <li>Selecciona los artículos a devolver y las cantidades</li>
        <li>Indica si el stock debe regresar al inventario</li>
        <li>Elige el monto a reembolsar (puede ser parcial)</li>
        <li>Opcionalmente, agrega una nota sobre el motivo</li>
        <li>Confirma el reembolso</li>
      </ol>

      <BloqueInfo tipo="importante">
        Si el pago fue online, Shopify ordenará al gateway devolver el dinero. Para Shopify Payments 
        se procesa directamente. Para PayPal, deberás confirmar en tu cuenta pero Shopify notifica 
        automáticamente.
      </BloqueInfo>

      <h3>Crear etiqueta de devolución</h3>
      <p>
        Para facilitar la devolución al cliente:
      </p>
      <ul>
        <li>Puedes crear una etiqueta de retorno desde Shopify Shipping (si disponible)</li>
        <li>O generar la etiqueta en tu paquetería y enviar las instrucciones al cliente</li>
        <li>Incluye instrucciones claras en tus políticas de devolución</li>
      </ul>

      <h2 id="entrega-local">Entrega local y recogida en tienda</h2>
      
      <h3>Entrega local</h3>
      <p>
        Si ofreces entregas locales:
      </p>
      <ol>
        <li>Los pedidos con entrega local aparecerán identificados en la lista</li>
        <li>Prepara el pedido normalmente</li>
        <li>Cuando entregues al cliente, marca como <strong>"Entregado"</strong></li>
        <li>Shopify registrará la fecha y hora de entrega</li>
      </ol>

      <h3>Recogida en tienda</h3>
      <p>
        Para pedidos con recogida en tienda:
      </p>
      <ol>
        <li>El cliente recibirá un email cuando el pedido esté listo</li>
        <li>Marca el pedido como <strong>"Listo para recoger"</strong></li>
        <li>Cuando el cliente llegue y recoja, marca como <strong>"Recogido"</strong></li>
      </ol>

      <h2 id="parciales">Preparaciones parciales por ubicación</h2>
      <p>
        Si un pedido contiene productos de múltiples ubicaciones (almacén + tienda, por ejemplo):
      </p>
      <ul>
        <li>Shopify divide automáticamente la preparación por ubicación</li>
        <li>Cada ubicación puede cumplir su parte independientemente</li>
        <li>El pedido aparecerá como "Preparado parcialmente" hasta que todas las partes estén listas</li>
        <li>Puedes establecer prioridades de sucursal para determinar de dónde se preparan primero</li>
      </ul>

      <BloqueInfo tipo="nota">
        Puedes configurar las prioridades de ubicación en <strong>Configuración → Ubicaciones</strong> 
        para optimizar tu logística y tiempos de entrega.
      </BloqueInfo>

      <p>
        Una buena gestión de pedidos implica mantener a los clientes informados en cada paso, 
        desde la confirmación hasta la entrega, y manejar eficientemente cualquier devolución 
        o incidencia que pueda surgir.
      </p>
    </DocLayout>
  );
};

export default GestionPedidosPage;
