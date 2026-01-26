import DocLayout from "@/layouts/DocLayout";
import BloqueInfo from "@/components/docs/BloqueInfo";

const secciones = [
  { id: "agregar-producto", titulo: "Agregar un producto nuevo", nivel: 2 },
  { id: "app-movil", titulo: "Desde la app móvil", nivel: 3 },
  { id: "editar-producto", titulo: "Editar un producto existente", nivel: 2 },
  { id: "variantes", titulo: "Editar variantes", nivel: 3 },
  { id: "consejos", titulo: "Consejos adicionales", nivel: 2 },
];

const AgregarProductosPage = () => {
  return (
    <DocLayout
      titulo="Agregar Productos"
      descripcion="Aprende a crear, editar y organizar los productos de tu catálogo en Shopify."
      seccionId="productos"
      secciones={secciones}
    >
      <p>
        Mantener tu catálogo de productos actualizado es otro pilar del manejo de tu tienda. 
        Shopify facilita la <strong>creación de nuevos productos</strong> y la <strong>edición de productos existentes</strong> 
        (por ejemplo, para actualizar precios, descripciones o imágenes).
      </p>

      <h2 id="agregar-producto">Agregar un producto nuevo desde el administrador web</h2>
      
      <ol>
        <li>
          En tu panel de control de Shopify, ve a la sección <strong>Productos</strong> (menú izquierdo). 
          Una vez allí, haz clic en el botón <strong>"Agregar producto"</strong>. Se abrirá el formulario de creación.
        </li>
        <li>
          Completa el <strong>título del producto</strong> (nombre) y otros detalles importantes:
          <ul>
            <li><strong>Descripción:</strong> Texto enriquecido describiendo el artículo</li>
            <li><strong>Precio:</strong> Precio de venta al público</li>
            <li><strong>Precio comparativo:</strong> Si muestras descuento</li>
            <li><strong>Costo:</strong> Para fines internos de cálculo de márgenes</li>
            <li><strong>SKU o código de barras:</strong> Identificadores del producto</li>
            <li><strong>Inventario:</strong> Cantidad inicial y seguimiento de stock</li>
            <li><strong>Envío:</strong> Peso para cálculos de envío, o marcar si es digital</li>
          </ul>
        </li>
        <li>
          <strong>Imágenes:</strong> Sube imágenes claras del producto. En la sección de <strong>Medios</strong> 
          puedes arrastrar y soltar fotos o hacer clic en "Agregar imagen". La primera imagen será la principal.
        </li>
        <li>
          <strong>Organización (categorías y colecciones):</strong> Utiliza campos como:
          <ul>
            <li><strong>Tipo de producto:</strong> Categoría general (ej. "Camisa", "Electrónica")</li>
            <li><strong>Proveedor:</strong> Marca o proveedor si aplica</li>
            <li><strong>Etiquetas:</strong> Tags que ayudan a filtrar o crear colecciones automáticas</li>
          </ul>
        </li>
        <li>
          <strong>Disponibilidad en canales:</strong> Asegúrate de que el producto esté disponible en los canales deseados. 
          En la sección <strong>Disponibilidad de producto</strong> selecciona <strong>Tienda online</strong>, 
          <strong>Punto de venta</strong> u otros canales. Marca <strong>"Punto de venta"</strong> si quieres 
          que aparezca en tu app Shopify POS.
        </li>
        <li>
          Haz clic en <strong>Guardar</strong>. ¡Listo! Tu nuevo producto estará creado.
        </li>
      </ol>

      <BloqueInfo tipo="consejo">
        No es obligatorio rellenar todos los campos de inicio, pero brinda la información que necesiten 
        tus clientes (por ejemplo, tallas, materiales en la descripción).
      </BloqueInfo>

      <h3 id="app-movil">Agregar un producto desde la app móvil Shopify</h3>
      <p>
        Si estás usando la app Shopify en iOS o Android, también puedes crear productos:
      </p>
      <ol>
        <li>Ve a <strong>Productos</strong> en la app</li>
        <li>Toca el botón <strong>"+"</strong> (agregar producto)</li>
        <li>Ingresa la información y guarda</li>
      </ol>
      <p>
        La app permite incluso escanear código de barras para agregarlo al SKU usando la cámara. 
        Esto es útil si gestionas productos desde tu teléfono.
      </p>

      <h2 id="editar-producto">Editar un producto existente</h2>
      
      <ol>
        <li>
          En el admin web, ve a <strong>Productos</strong> y haz clic en el nombre del producto que deseas editar. 
          Se abrirá la página de detalles con los campos ya rellenados.
        </li>
        <li>
          Realiza los cambios necesarios:
          <ul>
            <li>Actualizar la <strong>descripción</strong></li>
            <li>Cambiar el <strong>precio</strong> o <strong>inventario</strong></li>
            <li>Subir <strong>nuevas imágenes</strong> o eliminar las antiguas</li>
            <li>Cambiar la <strong>categoría/tipo</strong> o las <strong>etiquetas</strong></li>
          </ul>
        </li>
        <li>
          Haz clic en <strong>Guardar</strong>. Los cambios se reflejarán inmediatamente en tu tienda online y POS.
        </li>
      </ol>

      <BloqueInfo tipo="nota">
        Ten en cuenta que cambiar detalles de un producto que ya tenía ventas puede afectar a cómo se muestra 
        en informes (por ejemplo, si cambias el tipo de producto, en los reportes futuros aparecerá bajo la nueva categoría).
      </BloqueInfo>

      <h3 id="variantes">Editar variantes</h3>
      <p>
        Si tu producto tiene variantes (por ejemplo, talla o color), Shopify te permite editarlas individualmente. 
        Desde la página del producto, en la sección <strong>Variantes</strong>, puedes:
      </p>
      <ul>
        <li>Agregar nuevas variantes</li>
        <li>Modificar precios por variante</li>
        <li>Cambiar SKU e inventario específico de cada variante</li>
        <li>Actualizar imágenes asociadas a cada variante (ej. foto de cada color)</li>
      </ul>

      <h2 id="consejos">Consejos adicionales</h2>

      <h3>Duplicar productos</h3>
      <p>
        Si vas a añadir muchos productos similares, usa la función <strong>Duplicar producto</strong> para ahorrar tiempo. 
        Por ejemplo, creaste un producto "Camiseta Roja" y quieres agregar "Camiseta Azul":
      </p>
      <ol>
        <li>En la página del producto rojo, haz clic en <strong>Duplicar</strong></li>
        <li>Se copiará la mayor parte de la info</li>
        <li>Solo edita lo necesario (nombre, fotos, SKU)</li>
      </ol>

      <h3>Importar/Exportar CSV</h3>
      <p>
        Si tienes un catálogo muy grande, considera usar la función de <strong>importar productos por CSV</strong>:
      </p>
      <ul>
        <li>Desde la página <strong>Productos</strong>, hay opción de <strong>Importar</strong></li>
        <li>Sube un archivo CSV con las columnas adecuadas</li>
        <li>Shopify creará/actualizará productos en bloque</li>
      </ul>

      <BloqueInfo tipo="importante">
        <strong>Disponibilidad en POS:</strong> Recuerda abastecer los productos en la sucursal correcta para POS. 
        Debes marcar los productos como disponibles en el canal de punto de venta Y tener stock en la ubicación 
        de tu tienda física, de lo contrario no aparecerán en la app POS.
      </BloqueInfo>

      <p>
        Con estos pasos podrás mantener tu catálogo siempre al día, añadiendo nuevos productos a medida que 
        expandes tu negocio y asegurándote de que la información que ven tus clientes sea correcta y atractiva.
      </p>
    </DocLayout>
  );
};

export default AgregarProductosPage;
