import DocLayout from "@/layouts/DocLayout";
import BloqueInfo from "@/components/docs/BloqueInfo";

const secciones = [
  { id: "mejores-practicas", titulo: "Mejores prácticas", nivel: 2 },
  { id: "faq", titulo: "Preguntas frecuentes", nivel: 2 },
  { id: "contactar-soporte", titulo: "Contactar soporte", nivel: 2 },
  { id: "recursos", titulo: "Recursos adicionales", nivel: 2 },
];

const ConclusionSoportePage = () => {
  return (
    <DocLayout
      titulo="Conclusión y Soporte"
      descripcion="Resumen de mejores prácticas, preguntas frecuentes y recursos de ayuda."
      seccionId="soporte"
      secciones={secciones}
    >
      <p>
        Has llegado al final de este manual. Aquí encontrarás un resumen de las mejores prácticas, 
        respuestas a preguntas frecuentes y recursos para obtener ayuda adicional cuando la necesites.
      </p>

      <h2 id="mejores-practicas">Mejores prácticas para operar tu tienda</h2>
      <ul>
        <li>
          <strong>Revisa pedidos diariamente:</strong> Procesa y cumple los pedidos lo antes posible 
          para mantener satisfechos a tus clientes.
        </li>
        <li>
          <strong>Mantén el inventario actualizado:</strong> Haz conteos periódicos y ajusta las 
          cantidades para evitar sobrevender productos agotados.
        </li>
        <li>
          <strong>Responde rápido a los clientes:</strong> Una atención al cliente ágil genera 
          confianza y fidelidad.
        </li>
        <li>
          <strong>Revisa tus reportes semanalmente:</strong> Entiende qué funciona y qué puedes mejorar.
        </li>
        <li>
          <strong>Mantén segura tu tienda:</strong> Usa 2FA, asigna permisos adecuados y revisa 
          regularmente los accesos.
        </li>
        <li>
          <strong>Actualiza tu catálogo:</strong> Agrega nuevos productos, mejora las descripciones 
          y mantén las imágenes atractivas.
        </li>
        <li>
          <strong>Documenta tus procesos:</strong> Crea procedimientos internos para que cualquier 
          empleado pueda operar la tienda consistentemente.
        </li>
      </ul>

      <h2 id="faq">Preguntas frecuentes</h2>

      <h3>¿Cómo puedo probar mi tienda antes de lanzarla?</h3>
      <p>
        Shopify te permite usar el modo de prueba de Shopify Payments para simular compras con 
        tarjetas de crédito de prueba sin procesar cargos reales:
      </p>
      <ol>
        <li>Ve a <strong>Configuración → Pagos</strong></li>
        <li>Activa el modo prueba de Shopify Payments</li>
        <li>Usa los números de tarjeta de prueba de la documentación</li>
        <li>Realiza pedidos de prueba</li>
        <li><strong>Recuerda desactivar el modo prueba antes de abrir al público</strong></li>
      </ol>

      <h3>Mi tienda está online pero no aparece en Google, ¿qué hago?</h3>
      <p>
        Los motores de búsqueda tardan un tiempo en indexar un nuevo sitio. Verifica:
      </p>
      <ul>
        <li>Que la contraseña de desarrollo esté desactivada</li>
        <li>En <strong>Tienda Online → Preferencias</strong>, que la casilla "Evitar que los motores 
        de búsqueda indexen" esté <strong>desmarcada</strong></li>
        <li>Agrega información de SEO: títulos y descripciones a tu página de inicio y productos</li>
        <li>Envía tu sitemap (<code>tu-dominio/sitemap.xml</code>) a Google Search Console</li>
      </ul>

      <h3>¿Cómo puedo cambiar el idioma de mi tienda?</h3>
      <p>
        Para traducir los textos del tema al español:
      </p>
      <ol>
        <li>Ve a <strong>Tienda Online → Temas → Acciones → Editar idiomas</strong></li>
        <li>Selecciona español en el desplegable superior</li>
        <li>Personaliza cualquier texto individual si es necesario</li>
      </ol>

      <BloqueInfo tipo="nota">
        El checkout de Shopify se traduce automáticamente al idioma principal de tu tienda.
      </BloqueInfo>

      <h3>¿Shopify genera facturas para mis clientes?</h3>
      <p>
        Shopify envía automáticamente un correo de confirmación de pedido que puede servir de recibo. 
        Sin embargo, no emite facturas fiscales con numeración legal automáticamente. Para facturas 
        oficiales puedes:
      </p>
      <ul>
        <li>Usar apps de facturación como "Order Printer" con plantillas personalizadas</li>
        <li>Integrar sistemas de facturación externos</li>
        <li>Exportar pedidos para tu contabilidad</li>
      </ul>

      <h3>Un cliente quiere devolver un producto, ¿cómo gestiono devoluciones?</h3>
      <p>
        Desde <strong>Pedidos</strong>, abre el pedido y usa la función <strong>"Reembolsar"</strong>:
      </p>
      <ol>
        <li>Selecciona artículos y cantidades a devolver</li>
        <li>Shopify ajustará el inventario si corresponde</li>
        <li>El reembolso se procesa automáticamente si el pago fue online</li>
        <li>Comunica las instrucciones de devolución al cliente</li>
      </ol>

      <h2 id="contactar-soporte">Cómo contactar al Soporte Técnico de Shopify</h2>
      <p>
        Shopify ofrece soporte 24/7. Para contactarlos:
      </p>
      <ol>
        <li>Visita <strong>help.shopify.com</strong> (Centro de Ayuda)</li>
        <li>Inicia sesión con tu cuenta de tienda</li>
        <li>Sigue los pasos para <strong>"Comunicarte con atención al cliente"</strong></li>
        <li>Elige entre <strong>Chat en vivo</strong> o <strong>Email</strong></li>
      </ol>

      <BloqueInfo tipo="consejo">
        Dentro de tu panel de admin, hay un signo de interrogación <strong>"?"</strong> en la esquina 
        inferior derecha que despliega la búsqueda de ayuda y la opción de contactar soporte.
      </BloqueInfo>

      <p>
        El soporte en español está disponible. Ten a mano el URL de tu tienda y detalles del problema 
        para agilizar la ayuda.
      </p>

      <h3>Comunidad de Shopify</h3>
      <p>
        Para dudas no urgentes o recomendaciones, la comunidad es muy útil. Hay secciones de discusión 
        en español donde otros comerciantes comparten experiencias y soluciones.
      </p>

      <h2 id="recursos">Recursos adicionales</h2>
      <ul>
        <li>
          <strong>Centro de Ayuda de Shopify (español):</strong>{" "}
          <a href="https://help.shopify.com/es" target="_blank" rel="noopener noreferrer">
            help.shopify.com/es
          </a>
        </li>
        <li>
          <strong>Blog de Shopify en Español:</strong> Artículos de estrategias de ecommerce y novedades
        </li>
        <li>
          <strong>Comunidad de Shopify:</strong>{" "}
          <a href="https://community.shopify.com" target="_blank" rel="noopener noreferrer">
            community.shopify.com
          </a>
        </li>
        <li>
          <strong>YouTube de Shopify en Español:</strong> Tutoriales en video
        </li>
        <li>
          <strong>Academia de Shopify:</strong> Cursos gratuitos sobre comercio electrónico
        </li>
      </ul>

      <BloqueInfo tipo="importante">
        Mantente actualizado con las novedades de Shopify. La plataforma lanza mejoras continuamente 
        (anunciadas en "Shopify Editions" semestrales) que podrían simplificarte tareas.
      </BloqueInfo>

      <p>
        <strong>¡Éxito con tu tienda en Shopify!</strong> Si aplicas los pasos de esta guía y aprovechas 
        las herramientas de soporte, estarás bien encaminado para gestionar tu tienda de forma eficaz y segura.
      </p>

      <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-border">
        <h3 className="text-xl font-semibold mb-2">¿Necesitas ayuda adicional?</h3>
        <p className="text-muted-foreground mb-4">
          El equipo de Solware está aquí para ayudarte con cualquier pregunta sobre 
          la operación de tu tienda Shopify.
        </p>
        <a 
          href="mailto:ventas@solware.agency" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
        >
          Contactar Soporte Solware
        </a>
      </div>
    </DocLayout>
  );
};

export default ConclusionSoportePage;
