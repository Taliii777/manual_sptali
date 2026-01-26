import DocLayout from "@/layouts/DocLayout";
import BloqueInfo from "@/components/docs/BloqueInfo";

// Secciones para la tabla de contenido
const secciones = [
  { id: "que-es-shopify", titulo: "¿Qué es Shopify?", nivel: 2 },
  { id: "funciones-principales", titulo: "Funciones principales", nivel: 2 },
  { id: "sobre-esta-guia", titulo: "Sobre esta guía", nivel: 2 },
  { id: "estructura-manual", titulo: "Estructura del manual", nivel: 2 },
];

const IntroduccionPage = () => {
  return (
    <DocLayout
      titulo="Introducción"
      descripcion="Bienvenida al manual de operaciones para tiendas Shopify. Aprende a gestionar tu tienda de manera eficiente."
      seccionId="introduccion"
      secciones={secciones}
    >
      <h2 id="que-es-shopify">¿Qué es Shopify?</h2>
      <p>
        Shopify es una plataforma de comercio electrónico <strong>"que te ayuda a vender online y en persona"</strong>, 
        utilizada por emprendedores, minoristas y grandes marcas para gestionar sus tiendas y hacer crecer sus negocios. 
        En otras palabras, con Shopify puedes crear una tienda en línea profesional y también vender físicamente 
        usando su sistema de <strong>Point of Sale (POS)</strong>.
      </p>
      
      <p>
        La guía que sigue está dirigida tanto a principiantes sin experiencia técnica como a usuarios intermedios, 
        y cubrirá las operaciones esenciales para manejar una tienda Shopify. Veremos paso a paso cómo procesar ventas, 
        administrar productos e inventario, configurar pagos y envíos, personalizar tu sitio web, gestionar clientes, 
        mantener la seguridad de tu tienda, y responderemos dudas frecuentes.
      </p>

      <BloqueInfo tipo="nota">
        Indicaremos instrucciones tanto para la interfaz web (el <strong>administrador de Shopify</strong>) como 
        para la aplicación móvil <strong>Shopify POS</strong>, cuando corresponda, para que puedas operar 
        tu negocio de manera integral.
      </BloqueInfo>

      <h2 id="funciones-principales">Funciones principales de Shopify</h2>
      <p>
        Como plataforma unificada, Shopify incluye todo lo necesario para operar tu tienda. Entre sus funciones destacan:
      </p>
      
      <ul>
        <li><strong>Productos:</strong> Administración de catálogos de productos con imágenes, precios y variantes</li>
        <li><strong>Inventario:</strong> Seguimiento de stock en múltiples ubicaciones</li>
        <li><strong>Pagos:</strong> Procesamiento de pagos en línea con soporte para tarjetas de crédito, PayPal, etc.</li>
        <li><strong>Pedidos:</strong> Gestión de pedidos tanto de tu tienda en línea como órdenes generadas en POS</li>
        <li><strong>Envío:</strong> Opciones de envío y cálculo de tarifas automáticas</li>
        <li><strong>Marketing y SEO:</strong> Herramientas para promocionar tu tienda y mejorar su visibilidad</li>
        <li><strong>Análisis:</strong> Sistema de análisis de ventas e informes detallados</li>
        <li><strong>Aplicaciones:</strong> Integración de apps adicionales para ampliar funcionalidades</li>
        <li><strong>Múltiples canales:</strong> Soporte para redes sociales, marketplaces y ventas mayoristas</li>
      </ul>

      <p>
        En resumen, Shopify es apto tanto para alguien montando su primera tienda en línea como para 
        negocios minoristas con presencia internacional.
      </p>

      <h2 id="sobre-esta-guia">Sobre esta guía</h2>
      <p>
        A continuación, encontrarás instrucciones prácticas para las tareas diarias más importantes al operar 
        tu tienda Shopify. Cada sección proporciona pasos claros y consejos.
      </p>

      <BloqueInfo tipo="consejo">
        Siempre que sea posible, te indicaremos cómo realizar la acción <strong>desde el administrador web de Shopify</strong> 
        (usando un navegador en tu computadora) y, cuando aplique, cómo hacerlo desde la <strong>aplicación móvil Shopify POS</strong>.
      </BloqueInfo>

      <h2 id="estructura-manual">Estructura del manual</h2>
      <p>
        Este manual está organizado en <strong>10 secciones principales</strong> que cubren todos los aspectos 
        de la operación de una tienda Shopify:
      </p>

      <ol>
        <li><strong>Introducción:</strong> Visión general y cómo usar esta guía</li>
        <li><strong>Procesar Ventas:</strong> Gestión de pedidos y flujo de caja</li>
        <li><strong>Agregar Productos:</strong> Creación y edición del catálogo</li>
        <li><strong>Gestión de Inventario:</strong> Control de stock y existencias</li>
        <li><strong>Gestión de Pedidos:</strong> Preparación, envíos y devoluciones</li>
        <li><strong>Gestión de Clientes:</strong> Perfiles, segmentación y comunicación</li>
        <li><strong>Configuración de la Tienda:</strong> Pagos, envíos, impuestos y dominio</li>
        <li><strong>Seguridad y Permisos:</strong> Usuarios, roles y buenas prácticas</li>
        <li><strong>Reportes y Análisis:</strong> Informes de ventas y estadísticas</li>
        <li><strong>Conclusión y Soporte:</strong> FAQ y recursos adicionales</li>
      </ol>

      <BloqueInfo tipo="importante">
        Utiliza la barra lateral de navegación para moverte entre secciones. También encontrarás 
        enlaces a recursos oficiales de Shopify en español para que profundices en cada tema si lo necesitas.
      </BloqueInfo>

      <p>
        ¡Comencemos! 🛍️ Navega a la siguiente sección para aprender cómo procesar ventas en tu tienda Shopify.
      </p>
    </DocLayout>
  );
};

export default IntroduccionPage;
