import DocLayout from "@/layouts/DocLayout";
import BloqueInfo from "@/components/docs/BloqueInfo";

const secciones = [
  { id: "revisar-stock", titulo: "Revisar niveles de stock", nivel: 2 },
  { id: "ajustar-manual", titulo: "Ajustar stock manualmente", nivel: 2 },
  { id: "edicion-masiva", titulo: "Edición masiva de inventario", nivel: 2 },
  { id: "no-disponible", titulo: "Estados no disponible", nivel: 2 },
  { id: "app-movil", titulo: "Ajustes desde app móvil", nivel: 2 },
  { id: "ubicaciones", titulo: "Inventario por ubicaciones", nivel: 2 },
  { id: "historial", titulo: "Historial de ajustes", nivel: 2 },
];

const GestionInventarioPage = () => {
  return (
    <DocLayout
      titulo="Gestión de Inventario"
      descripcion="Controla el stock de tus productos, ajusta cantidades y mantén un inventario preciso."
      seccionId="inventario"
      secciones={secciones}
    >
      <p>
        Tener control sobre el <strong>inventario</strong> es crucial: te permite saber cuántas unidades 
        te quedan de cada producto y evitar vender artículos agotados. Shopify ofrece herramientas para 
        revisar y ajustar los niveles de stock, tanto de forma manual como en bloque.
      </p>

      <h2 id="revisar-stock">Revisar niveles de stock</h2>
      <p>
        En el panel de control de Shopify, ve a <strong>Productos → Inventario</strong>. Esta sección muestra 
        una lista de todos tus productos (y variantes) con columnas para la <strong>cantidad en existencias</strong> 
        en cada ubicación.
      </p>
      <p>
        Si tienes múltiples ubicaciones (por ejemplo, almacén y tienda física), puedes usar el filtro de 
        ubicación para ver los niveles en una sucursal a la vez. La vista de inventario es muy útil para 
        identificar de un vistazo qué productos están bajos de stock o agotados.
      </p>

      <h2 id="ajustar-manual">Ajustar stock manualmente (un producto a la vez)</h2>
      <ol>
        <li>
          En <strong>Productos → Inventario</strong>, ubica el producto cuyo stock quieres cambiar. 
          Puedes filtrar o buscar por nombre de producto.
        </li>
        <li>
          Verás columnas como <strong>En existencias</strong> y <strong>Disponible</strong>:
          <ul>
            <li><strong>En existencias:</strong> Cantidad física total</li>
            <li><strong>Disponible:</strong> Cantidad vendible (igual a En existencias menos unidades reservadas)</li>
          </ul>
        </li>
        <li>
          Haz clic sobre el número actual y escribe la nueva cantidad, o usa los botones <strong>+/-</strong>.
        </li>
        <li>
          Haz clic en <strong>Guardar</strong>. La cantidad disponible se actualizará automáticamente.
        </li>
      </ol>

      <BloqueInfo tipo="consejo">
        <strong>Ejemplo:</strong> Si tenías "10" disponible y recibiste 5 unidades nuevas, puedes sumar esas 5. 
        Shopify te permite añadir o restar en lugar de reemplazar el número completo.
      </BloqueInfo>

      <h2 id="edicion-masiva">Ajustes de inventario en bloque (edición masiva)</h2>
      <p>
        Shopify proporciona un <strong>editor masivo</strong> que funciona como una hoja de cálculo simplificada:
      </p>
      <ol>
        <li>Desde <strong>Productos → Inventario</strong>, selecciona múltiples variantes marcando las casillas</li>
        <li>Haz clic en <strong>"Editar variaciones"</strong> o <strong>"Editor de inventario"</strong></li>
        <li>Se abrirá una cuadrícula donde puedes editar campos para todos los seleccionados a la vez</li>
      </ol>

      <p>
        Otra forma de cambios masivos es mediante <strong>CSV de inventario</strong>: puedes exportar las 
        cantidades, modificarlas en Excel y reimportar el CSV. Esto es conveniente para actualizaciones muy grandes.
      </p>

      <h2 id="no-disponible">Estados de inventario no disponible</h2>
      <p>
        Shopify permite clasificar parte de tu inventario como <strong>No disponible</strong> por ciertos motivos:
      </p>
      <ul>
        <li>Dañado</li>
        <li>En control de calidad</li>
        <li>Reservado como "existencias de seguridad"</li>
      </ul>
      <p>
        Esto es opcional; por defecto todo lo que ingresas va a "Disponible". Para la mayoría de tiendas 
        pequeñas, quizá no uses mucho esta distinción, pero es bueno saber que existe para inventario 
        en cuarentena o reservado.
      </p>

      <h2 id="app-movil">Usar la app móvil para ajustes rápidos</h2>
      <p>
        Desde la app Shopify en iOS/Android, puedes actualizar inventario:
      </p>
      <ol>
        <li>Ve a <strong>Productos → Inventario</strong></li>
        <li>Cambia de ubicación si manejas varias, usando el menú desplegable</li>
        <li>Toca el producto/variante y presiona los botones <strong>+</strong> o <strong>-</strong>, 
            o toca la cifra para teclear un número específico</li>
        <li>Selecciona un <strong>motivo de ajuste</strong> (ej. "recibido stock", "corrección de conteo", "dañado")</li>
        <li>Guarda los cambios tocando el check (✓) o <strong>Guardar</strong></li>
      </ol>

      <BloqueInfo tipo="nota">
        Los motivos de ajuste alimentan el historial de ajustes para tus registros.
      </BloqueInfo>

      <h2 id="ubicaciones">Inventario por ubicaciones</h2>
      <p>
        Si tu tienda tiene <strong>múltiples ubicaciones</strong> (ej. una bodega y una tienda física), 
        cada producto tendrá cantidades separadas por ubicación. Consideraciones importantes:
      </p>
      <ul>
        <li>La página Inventario te deja filtrar por ubicación para ver niveles en cada sitio</li>
        <li>Cuando ajustas la cantidad bajo una ubicación, no afecta otras</li>
        <li>Si un producto no aparece listado en una ubicación, su stock es 0</li>
        <li>Puedes agregar stock a una nueva sucursal seleccionándola y usando "Agregar cantidad"</li>
        <li>Shopify te permite priorizar de dónde se envían los pedidos</li>
      </ul>

      <h2 id="historial">Historial de ajustes</h2>
      <p>
        Shopify registra un <strong>historial</strong> de cambios de inventario por producto (hasta 180 días). 
        Para consultarlo:
      </p>
      <ol>
        <li>Ve a la página del producto</li>
        <li>En la sección Inventario, haz clic en "Historial de ajustes"</li>
        <li>Verás todos los eventos: ventas, ajustes manuales, entradas, ajustes por apps</li>
      </ol>

      <BloqueInfo tipo="importante">
        <strong>Mantener sincronizado el inventario:</strong> Recuerda que Shopify descuenta automáticamente 
        cuando recibes pedidos, siempre que tengas activado el <strong>seguimiento de inventario</strong> en 
        el producto. Verifica esta casilla al crear productos; de lo contrario, Shopify tratará el producto 
        como stock infinito.
      </BloqueInfo>

      <p>
        <strong>Resumen:</strong> Verifica regularmente tu inventario y actualiza las cantidades cuando 
        recibas nuevo stock o detectes diferencias. Una buena práctica es hacer revisiones periódicas 
        (conteos cíclicos o anuales) y ajustar en Shopify cualquier diferencia. Con el control de stock 
        bien llevado, tus clientes siempre verán la disponibilidad correcta y tu POS no permitirá vender 
        más allá del stock disponible.
      </p>
    </DocLayout>
  );
};

export default GestionInventarioPage;
