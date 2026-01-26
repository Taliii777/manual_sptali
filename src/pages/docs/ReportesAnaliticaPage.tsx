import DocLayout from "@/layouts/DocLayout";
import BloqueInfo from "@/components/docs/BloqueInfo";

const secciones = [
  { id: "acceder-reportes", titulo: "Acceder a reportes", nivel: 2 },
  { id: "ventas", titulo: "Informes de ventas", nivel: 2 },
  { id: "productos", titulo: "Productos más vendidos", nivel: 2 },
  { id: "clientes", titulo: "Análisis de clientes", nivel: 2 },
  { id: "trafico", titulo: "Tráfico y comportamiento", nivel: 2 },
  { id: "exportar", titulo: "Generar y exportar", nivel: 2 },
  { id: "decisiones", titulo: "Decisiones operativas", nivel: 2 },
];

const ReportesAnaliticaPage = () => {
  return (
    <DocLayout
      titulo="Reportes y Análisis"
      descripcion="Utiliza los informes de Shopify para tomar decisiones basadas en datos."
      seccionId="reportes"
      secciones={secciones}
    >
      <p>
        Shopify ofrece una sección de <strong>Análisis e Informes</strong> que te permite entender 
        el rendimiento de tu tienda, identificar tendencias y tomar decisiones informadas. En esta 
        sección aprenderás a aprovechar estas herramientas.
      </p>

      <h2 id="acceder-reportes">Acceder a reportes</h2>
      <p>
        En tu panel de control, ve a <strong>Análisis</strong> en el menú lateral. Allí encontrarás:
      </p>
      <ul>
        <li><strong>Panel general:</strong> Vista rápida con métricas clave</li>
        <li><strong>Informes:</strong> Reportes detallados por categoría</li>
        <li><strong>Sesiones en vivo:</strong> Visitantes actuales en tu tienda (tiempo real)</li>
      </ul>

      <BloqueInfo tipo="nota">
        La disponibilidad de ciertos informes depende de tu plan de Shopify. Los planes más 
        avanzados ofrecen reportes más detallados y personalizables.
      </BloqueInfo>

      <h2 id="ventas">Informes de ventas</h2>
      <p>
        Los reportes de ventas te muestran:
      </p>
      <ul>
        <li><strong>Ventas totales:</strong> Ingresos en un período determinado</li>
        <li><strong>Ventas por día/semana/mes:</strong> Tendencias a lo largo del tiempo</li>
        <li><strong>Ventas por canal:</strong> Tienda online vs POS vs otros canales</li>
        <li><strong>Ventas por ubicación:</strong> Si tienes múltiples ubicaciones</li>
        <li><strong>Valor promedio del pedido:</strong> Cuánto gasta cada cliente en promedio</li>
        <li><strong>Tasa de conversión:</strong> Porcentaje de visitantes que compran</li>
      </ul>

      <h3>Cómo leer el informe de ventas</h3>
      <ol>
        <li>Ve a <strong>Análisis → Informes</strong></li>
        <li>Selecciona <strong>"Ventas a lo largo del tiempo"</strong></li>
        <li>Ajusta el rango de fechas según lo que quieras analizar</li>
        <li>Observa la gráfica y la tabla de datos debajo</li>
        <li>Compara con períodos anteriores para ver tendencias</li>
      </ol>

      <h2 id="productos">Productos más vendidos</h2>
      <p>
        Este informe te ayuda a identificar:
      </p>
      <ul>
        <li>Qué productos generan más ingresos</li>
        <li>Cuáles tienen mayor cantidad de unidades vendidas</li>
        <li>Productos con mejor margen de ganancia</li>
        <li>Productos que podrían necesitar reabastecimiento pronto</li>
      </ul>

      <BloqueInfo tipo="consejo">
        Usa esta información para decidir qué productos promocionar, cuáles descontinuar 
        y cómo organizar tu catálogo y tu tienda física (si tienes).
      </BloqueInfo>

      <h2 id="clientes">Análisis de clientes</h2>
      <p>
        Los reportes de clientes incluyen:
      </p>
      <ul>
        <li><strong>Clientes nuevos vs recurrentes:</strong> Cuántos compradores son nuevos</li>
        <li><strong>Valor de vida del cliente (LTV):</strong> Cuánto gasta un cliente a lo largo del tiempo</li>
        <li><strong>Clientes por ubicación:</strong> De dónde vienen geográficamente</li>
        <li><strong>Frecuencia de compra:</strong> Con qué frecuencia regresan</li>
      </ul>

      <h3>Segmentación</h3>
      <p>
        Shopify permite crear <strong>segmentos de clientes</strong> basados en criterios como:
      </p>
      <ul>
        <li>Número de pedidos realizados</li>
        <li>Monto total gastado</li>
        <li>Fecha del último pedido</li>
        <li>Productos específicos comprados</li>
        <li>Etiquetas asignadas</li>
      </ul>
      <p>
        Estos segmentos pueden usarse para campañas de marketing dirigidas.
      </p>

      <h2 id="trafico">Tráfico y comportamiento</h2>
      <p>
        Entiende cómo los visitantes interactúan con tu tienda:
      </p>
      <ul>
        <li><strong>Sesiones:</strong> Cuántos visitantes recibes</li>
        <li><strong>Fuentes de tráfico:</strong> De dónde vienen (búsqueda, redes sociales, directo)</li>
        <li><strong>Páginas más visitadas:</strong> Qué productos o categorías atraen más atención</li>
        <li><strong>Tasa de rebote:</strong> Porcentaje que abandona sin interactuar</li>
        <li><strong>Tiempo en sitio:</strong> Cuánto tiempo pasan navegando</li>
      </ul>

      <BloqueInfo tipo="nota">
        Para análisis más profundo de tráfico, considera integrar Google Analytics con tu tienda. 
        Shopify permite conectarlo fácilmente desde <strong>Tienda online → Preferencias</strong>.
      </BloqueInfo>

      <h2 id="exportar">Generar y exportar informes</h2>
      <p>
        Para exportar datos:
      </p>
      <ol>
        <li>Abre el informe que deseas exportar</li>
        <li>Ajusta los filtros (fechas, canales, ubicaciones)</li>
        <li>Haz clic en <strong>"Exportar"</strong></li>
        <li>Elige el formato (normalmente CSV o Excel)</li>
        <li>El archivo se descargará o recibirás un email con el enlace</li>
      </ol>

      <h3>Automatizar reportes</h3>
      <p>
        Algunos planes permiten programar reportes automáticos que se envían a tu email 
        periódicamente. Esto es útil para mantener visibilidad sin tener que entrar al admin diariamente.
      </p>

      <h2 id="decisiones">Decisiones operativas basadas en datos</h2>
      <p>
        Usa los reportes para responder preguntas clave:
      </p>
      <ul>
        <li>
          <strong>¿Qué promocionar?</strong> 
          → Productos con buen margen pero pocas ventas pueden beneficiarse de promociones
        </li>
        <li>
          <strong>¿Cuándo reabastecer?</strong> 
          → Combina ventas con niveles de inventario para predecir agotamiento
        </li>
        <li>
          <strong>¿Dónde invertir en marketing?</strong> 
          → Identifica qué fuentes de tráfico convierten mejor
        </li>
        <li>
          <strong>¿Cómo mejorar la conversión?</strong> 
          → Si tienes mucho tráfico pero pocas ventas, revisa el checkout y precios
        </li>
        <li>
          <strong>¿Qué clientes cultivar?</strong> 
          → Los clientes recurrentes suelen ser más rentables
        </li>
      </ul>

      <BloqueInfo tipo="importante">
        Los datos son tan útiles como las acciones que tomes basándote en ellos. Revisa tus 
        reportes regularmente (al menos semanalmente) y establece objetivos medibles para tu tienda.
      </BloqueInfo>

      <p>
        Una buena práctica es reservar tiempo cada semana para revisar el rendimiento de tu tienda 
        y ajustar tu estrategia según lo que muestren los datos.
      </p>
    </DocLayout>
  );
};

export default ReportesAnaliticaPage;
