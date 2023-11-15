<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-up")
      .titulo-principal__numero
        span 7
      h1 Business Intelligence
    
    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema7/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4.p-lg-5
        p.mb-0 Business Intelligence (BI) es la combinación entre minería de datos, visualización de datos, herramientas e infraestructura de datos y mejores prácticas para mantener a las organizaciones a implementar decisiones basadas en datos. En la práctica, sabe que tiene una genialidad de negocios moderna cuando tiene una fantasía mundial de los datos de su dirección y utiliza esos datos para propiciar el cambio, extender las ineficiencias y adaptarse enseguida a los cambios del mercado o de la oferta. 
        |
        br
        br
        | Es importante tener en cuenta que esta es una definición muy moderna de BI y que tiene una larga historia, pues la inteligencia empresarial tradicional, surgió originalmente en la década de los años 60 como un sistema para compartir información entre organizaciones, ya en la década de 1980, evolucionó con modelos informáticos para la toma de decisiones, convirtiendo los datos en conocimientos y luego en un producto particular de dispositivos de BI con soluciones modernas que prioriza el análisis de autoservicio flexible, los datos administrados en plataformas confiables, los usuarios comerciales capacitados y los conocimientos rápidos.  

    
    Separador.mt-5

    .titulo-segundo
      h2#t_7_1 7.1  Características
    
    .col-xl-10.m-auto
      .cajon.color-primario.p-4(style="background-color:#FFF7E5;box-shadow:0px 4px 8px rgba(0,0,0,.1);" data-aos="zoom-in-up")
        p.mb-0 Una de las principales características de Business Intelligence es que el #[em software] es muy práctico y fácil de usar, pues no se necesitan conocimientos técnicos de ciencia de datos para realizar las capacidades de análisis de datos, ya que el procesamiento de datos automáticamente. Otras características de inteligencia de negocios relacionadas con la herramienta son:
    
    ImagenInfograficaB.infografia1.color-secundario.mt-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema7/2.svg' data-aos="zoom-in-up" alt="magen que muestra un grafico con 4 puntos de características de inteligencia en los negocios, los cuales se relacionan en la parte inferior.")
      div(x="29%" y="34%" tooltip="Visual" numero="1")
        p.text-white Es muy visual e intuitivo, ya que proporciona a los usuarios un modelo gráfico simple y fácil de entender para presentar los resultados. Esto permite que estas herramientas simplifican lo que puede parecer complicado en la ciencia de datos. 
      div(x="86%" y="26%" tooltip="Datos" numero="2")
        p.text-white Los datos se procesan para que la información resultante sea comprensible para todos los usuarios y pueda ser compartida entre los miembros de la empresa. Esto es especialmente útil para los socios y sus equipos legales. 
      div(x="31%" y="81%" tooltip="Acceso" numero="3")
        p.text-white Acceso constante a la información a través de Internet, ya que se puede crear cualquier tipo de informe de análisis o pronóstico en cualquier momento. 
      div(x="79%" y="85%" tooltip="Indicadores" numero="4")
        p.text-white Trabajan con indicadores que resumen grandes cantidades de información, esto permite a las empresas visualizar métricas de negocio de forma sencilla e integrada.

    Separador.mt-5

    .titulo-segundo
      h2#t_7_2 7.2  Datos estructurados
    
    p(data-aos="zoom-in") Los datos estructurados son una parte integral de la empresa, estos datos estructurados se definen como datos configurados de tal forma que se pueda extraer fácilmente la información de forma ordenada, facilitando el análisis. El formateo es una parte importante de los datos estructurados. Ciertas reglas se aplican a cada campo (fechas, porcentajes, monedas, etc.).

    .col-xl-10.m-auto.mt-5
      .row
        .col-lg-4.mb-4.mb-md-0.col-md-6
          figure
            img(src="@/assets/curso/tema7/3.svg" data-aos="zoom-in-right" alt="Imagen decorativa")
        .col-lg-8.col-md-6
          .cajon.color-primario.p-4.h-100.d-flex.flex-wrap.align-content-center(style="background-color:#FFF7E5;box-shadow:0px 4px 8px rgba(0,0,0,.1);" data-aos="zoom-in-left")
            p.mb-0  Los datos estructurados han sido durante mucho tiempo el método principal para almacenar datos. Esto se debe a que las tecnologías disponibles facilitan la lectura, pero con el tiempo, los datos no estructurados se están convirtiendo en una parte cada vez más importante de los análisis que realizan las empresas. Cada vez más #[em software] apoya a las empresas con esta tarea.
    
    Separador.mt-5

    .titulo-segundo
      h2#t_7_3 7.3  Datos no estructurados
    
    p(data-aos="zoom-in") Los datos no estructurados son datos que carecen de una estructura o arquitectura identificable. Esto significa que no es adecuado para bases de datos relacionales tradicionales porque no se adhiere a un modelo de datos en particular. La estructura es confusa y difícil de leer por un programa de computadora. Algunas fuentes de datos no estructurados incluyen:

    .row.mt-4(data-aos="zoom-in")
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema6/2.svg" alt="Imagen decorativa")
      .col(style="place-self:center;")
        p.mb-0 Páginas web.
    .row.mt-2(data-aos="zoom-in")
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema6/2.svg" alt="Imagen decorativa")
      .col(style="place-self:center;")
        p.mb-0 Videos.
    .row.mt-2(data-aos="zoom-in")
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema6/2.svg" alt="Imagen decorativa")
      .col(style="place-self:center;")
        p.mb-0 Comentarios de usuarios en blogs y sitios de redes sociales.
    .row.mt-2(data-aos="zoom-in")
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema6/2.svg" alt="Imagen decorativa")
      .col(style="place-self:center;")
        p.mb-0 Notas.
    .row.mt-2(data-aos="zoom-in")
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema6/2.svg" alt="Imagen decorativa")
      .col(style="place-self:center;")
        p.mb-0 Informes.
    .row.mt-2(data-aos="zoom-in")
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema6/2.svg" alt="Imagen decorativa")
      .col(style="place-self:center;")
        p.mb-0 Respuestas de la encuesta.
    .row.mt-2(data-aos="zoom-in")
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema6/2.svg" alt="Imagen decorativa")
      .col(style="place-self:center;")
        p.mb-0 Documentos (Word, PPT, PDF, texto).
    .row.mt-2(data-aos="zoom-in")
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema6/2.svg" alt="Imagen decorativa")
      .col(style="place-self:center;")
        p.mb-0 Textos no estructurados.
    .row.mt-2(data-aos="zoom-in")
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema6/2.svg" alt="Imagen decorativa")
      .col(style="place-self:center;")
        p.mb-0 Transcripciones de llamadas de atención al cliente.
    .row.mt-2(data-aos="zoom-in")
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema6/2.svg" alt="Imagen decorativa")
      .col(style="place-self:center;")
        p.mb-0 Imágenes en Internet (JPEG, PNG, GIF, y otros).
    .row.mt-2(data-aos="zoom-in")
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema6/2.svg" alt="Imagen decorativa")
      .col(style="place-self:center;")
        p.mb-0 Grabación de medios.
    
    p.mt-5(data-aos="fade-right") Los datos no estructurados están literalmente en todas partes y ocupan mucho espacio de almacenamiento, ya que la mayor parte viene en forma de archivos grandes como video, audio e imágenes, por lo que ocupa la mayor parte del gráfico circular de almacenamiento, asimismo, retener o mantener los datos no estructurados cuesta mucho más que los datos estructurados con una arquitectura compacta y ordenada.
    
    .col-xl-8.m-auto.mt-5.col-lg-10
      .cajon.p-4.color-acento-contenido(style="background-color:#CDF0E4;" data-aos="flip-up")
        p.mb-0 La falta de estructura y arquitectura a menudo dificulta la realización de búsquedas, la eliminación de piezas o la publicación de actualizaciones del sistema. Cuanto mayor sea la cantidad de datos no estructurados, más difícil será indexarlos.
    
    Separador.mt-5

    .titulo-segundo
      h2#t_7_4 7.4 Datos semiestructurados
    
    p(data-aos="zoom-in") Los datos semiestructurados no tienen un esquema definido. No se ajustan al formato de tabla/fila/columna, pero están organizados mediante #[em tags] o "etiquetas" para que puedan agruparse para crear una jerarquía. Estos también se conocen como no relacionales o NoSQL.  
    p.mt-4(data-aos="zoom-in") Este tipo de datos representa alrededor del 510 % del volumen de datos del mundo. Sin embargo, desde un punto de vista comercial, existen casos de uso muy relevantes para la infraestructura de #[em big data] y las aplicaciones web en tiempo real. Algunos servicios muy conocidos basados en este tipo de datos son los sistemas de recomendación de Amazon o los servicios de LinkedIn. Los ejemplos más conocidos de datos semiestructurados son: 

    .row.mt-5
      .col-lg.mb-4.mb-lg-0
        .h-100.p-4.p-md-5.pt-4.text-center(style="background-color:#D9ECFF;border-radius:20px;box-shadow:0px 4px 9px rgba(0,0,0,.1);" data-aos="flip-up")
          figure.text-center
            img(src="@/assets/curso/tema7/4.svg" style="display:inline;max-width:140px;" alt="Imagen decorativa")
          p.mt-4.mb-0 Correos electrónicos que le permiten ordenar y buscar palabras clave con metadatos nativos un lenguaje de marcado XML que permite la universalización de las estructuras de datos, el almacenamiento y la transmisión en la web con una estructura flexible basada en etiquetas.
      .col-lg.mb-4.mb-lg-0
        .h-100.p-4.p-md-5.pt-4.text-center(style="background-color:#D9ECFF;border-radius:20px;box-shadow:0px 4px 9px rgba(0,0,0,.1);" data-aos="flip-up")
          figure.text-center
            img(src="@/assets/curso/tema7/5.svg" style="display:inline;max-width:140px;" alt="Imagen decorativa")
          p.mt-4.mb-0 El estándar abierto JSON (Notación de objetos de JavaScript) es otro formato de intercambio de datos semiestructurados que se usa ampliamente cuando se transfieren datos entre aplicaciones web y servidores. 
      .col-lg.mb-4.mb-lg-0
        .h-100.p-4.p-md-5.pt-4.text-center(style="background-color:#D9ECFF;border-radius:20px;box-shadow:0px 4px 9px rgba(0,0,0,.1);" data-aos="flip-up")
          figure.text-center
            img(src="@/assets/curso/tema7/6.svg" style="display:inline;max-width:140px;" alt="Imagen decorativa")
          p.mt-4.mb-0 Las bases de datos NoSQL que no separan el esquema de los datos en sí son más flexibles. Puede usarlos para almacenar información que no se ajusta bien a los formatos de registro/tabla, como ejemplo, el texto de longitud variable. También facilitan el intercambio de datos entre distintas bases de datos.
    
    Separador.mt-5

    .titulo-segundo
      h2#t_7_5 7.5  Datos internos
    
    p(data-aos="zoom-in") Los datos internos son los datos a los que se accede dentro de una organización para tomar decisiones para operaciones exitosas. Esta información es importante para determinar si la estrategia actual de la empresa es exitosa o si necesita hacer cambios. Hay cuatro áreas en las que una empresa puede recopilar datos internos: 

    TabsC.color-primario.mt-5
      .py-3.py-md-4(titulo="Ventas")
        .row
          .col-md-6.mb-4.mb-md-0(style="place-self:center;")
            figure.text-center
              img(src='@/assets/curso/tema7/7.png' style="display:inline;max-width:430px;" alt="Imagen decorativa")
          .col-md-6(style="place-self:center;")
            h5 Ventas
            p Determina las ganancias y los ingresos, como también centrarse en áreas específicas o eliminarlas por completo, al analizar datos como:  canal de distribución, rango de precios, área geográfica, tipo de cliente y proveedor, si se comprende estos números, la empresa puede maximizarlos. 
      .py-3.py-md-4(titulo="Finanzas")
        .row
          .col-md-6.mb-4.mb-md-0(style="place-self:center;")
            figure.text-center
              img(src='@/assets/curso/tema7/8.png' style="display:inline;max-width:430px;" alt="Imagen decorativa")
          .col-md-6(style="place-self:center;")
            h5 Finanzas
            p Proporciona datos en forma de informes de flujo de caja, informes de producción y análisis de variación planificada, dado que:
            ol.lista-ol.mt-3
              li.d-flex
                span.text-bold 1. 
                | En el informe de flujo de caja, muestra la cantidad de efectivo generado y utilizado durante un período de tiempo particular.
              li.d-flex
                span.text-bold 2. 
                | El informe de producción muestra el costo incurrido por la empresa para producir el producto o servicio. Los costos incluyen materias primas, mano de obra y el desglose de los precios unitarios. 
              li.d-flex
                span.text-bold 3. 
                | El análisis de variación del presupuesto analiza los cambios entre el rendimiento y el presupuesto.
      .py-3.py-md-4(titulo="<em>Marketing</em>")
        .row
          .col-md-6.mb-4.mb-md-0(style="place-self:center;")
            figure.text-center
              img(src='@/assets/curso/tema7/9.png' style="display:inline;max-width:430px;" alt="Imagen decorativa")
          .col-md-6(style="place-self:center;")
            h5 #[em Marketing]
            p Existen innumerables formas de realizar un seguimiento de la actividad de #[em marketing]. A diferencia de otras áreas comerciales que requieren informes, algunas empresas ni siquiera son conscientes de las oportunidades que ofrece la tecnología en #[em marketing]. Los datos internos se pueden recopilar a partir de estadísticas de tráfico del sitio web, informes telefónicos, códigos de promoción y más.
      .py-3.py-md-4(titulo="Talento humano")
        .row
          .col-md-6.mb-4.mb-md-0(style="place-self:center;")
            figure.text-center
              img(src='@/assets/curso/tema7/10.png' style="display:inline;max-width:430px;" alt="Imagen decorativa")
          .col-md-6(style="place-self:center;")
            h5 Talento humano
            p Recopila datos como: la retención, los retrasos y el ausentismo de los empleados para determinar si su empresa debe preocuparse por la rotación. Asimismo, revisar sus salarios para determinar si el paquete de compensación que ofrecen es la opción correcta.
    
    p.mt-5(data-aos="zoom-in") Cada área tiene su propia perspectiva, pero los datos conectan departamentos. 

    Separador.mt-5

    .titulo-segundo
      h2#t_7_6 7.6 Datos externos
    
    p(data-aos="zoom-in") Los datos externos enriquecen el modelo algorítmico porque a menudo ayudan a contextualizar y explicar el comportamiento de los datos internos analizados. Un ejemplo es un calendario de feriados nacionales que aumenta la demanda hotelera, influye en la entrega de paquetes de emergencia, e influye en los modelos de previsión de consumo y participación en eventos. Al ser datos externos, son datos generados fuera de su organización. Pueden provenir de una variedad de fuentes, y actualmente existen numerosas iniciativas de datos abiertos que crean una gran cantidad de datos externos que se pueden utilizar para el análisis.









    






      
</template>

<script>
export default {
  name: 'Tema7',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass">
.cajon.color-acento-botones:before
  background-color: #9CD8E6
.infografia1 .img-infografica-b__item__dot
  padding: 1.5rem
  left: -10px
.infografia1 .img-infografica-b__modal
  background-color: #004E99
  min-height: 100% !important
.tabs-c.color-primario .tabs-c__tab--active
  font-weight: bold
.cajon.color-primario:before
  background-color: #FCCC7A
</style>
