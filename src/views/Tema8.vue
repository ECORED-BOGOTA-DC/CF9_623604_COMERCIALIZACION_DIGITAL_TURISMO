<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-up")
      .titulo-principal__numero
        span 8
      h1 #[em Big data marketing]
    
    p(data-aos="zoom-in") El #[em big data marketing] es una herramienta que utiliza las empresas para responder rápidamente y predecir la demanda de los consumidores al conocer sus necesidades y requerimientos de manera directa, acortando los tiempos de entrega y construyendo una cadena de valor, así esta herramienta, analiza grandes cantidades de datos para desarrollar estrategias que mejoren el proceso de #[em marketing]. Estos son algunos usos más comunes:

    .row.mt-4(data-aos="zoom-in")
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema6/2.svg" alt="Imagen decorativa")
      .col(style="place-self:center;")
        p.mb-0 Creación de campañas publicitarias más precisas.
    .row.mt-2(data-aos="zoom-in")
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema6/2.svg" alt="Imagen decorativa")
      .col(style="place-self:center;")
        p.mb-0 Centrarse en crear estrategias de #[em marketing] personalizadas y adaptadas al segmento de cada cliente.
    .row.mt-2(data-aos="zoom-in")
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema6/2.svg" alt="Imagen decorativa")
      .col(style="place-self:center;")
        p.mb-0 Toma de decisiones en tiempo real.
    .row.mt-2(data-aos="zoom-in")
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema6/2.svg" alt="Imagen decorativa")
      .col(style="place-self:center;")
        p.mb-0 Detección de inconsistencias.
    .row.mt-2(data-aos="zoom-in")
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema6/2.svg" alt="Imagen decorativa")
      .col(style="place-self:center;")
        p.mb-0 Ayuda a mantener la relación empresa-cliente.
    .row.mt-2(data-aos="zoom-in")
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema6/2.svg" alt="Imagen decorativa")
      .col(style="place-self:center;")
        p.mb-0 Analiza y ayuda a mantener un control sobre los costes.
    
    Separador.mt-5

    .titulo-segundo
      h2#t_8_1 8.1  Concepto en la toma de decisiones 
    
    .col-xl-10.m-auto
      .cajon.color-primario.p-4(style="background-color:#FFF7E5;box-shadow:0px 4px 8px rgba(0,0,0,.1);" data-aos="zoom-in-up")
        p.mb-0 Para mantener la relevancia en el mercado y aumentar la ventaja competitiva, las empresas necesitan tener acceso a una información confiable y precisa. En este contexto, el #[em big data] ha demostrado ser herramienta muy útil en la toma de decisiones, pues para que sea efectiva se requiere de bases en datos sólidas, con el que se pueda analizar con más detalle factores como las tendencias del mercado, la calidad de la producción, rendimiento de las áreas de la empresa, así como el servicio al cliente, todo lo anterior, da la opción a la organización de mejorar los servicios y aumentar la rentabilidad.
    
    Separador.mt-5

    .titulo-segundo
      h2#t_8_2 8.2  Características del #[em big data marketing]
    
    p(data-aos="zoom-in") Con el #[em marketing] de #[em big data], estas son características importantes:

    TabsA.color-acento-botones.mt-5
      .tarjeta.color-secundario.p-4(titulo="Volumen de información" style="background-color:#FFF4E1;")
        .row
          p.mb-0 Se refiere a la cantidad de datos que su entorno produce cada segundo, minuto o día. Esta es la característica más comúnmente asociada de #[em big data]. A medida que nos conectamos generamos más y más datos. Por ejemplo, una empresa que vende sus productos solo a través de canales en línea puede beneficiarse de implementar tecnología de #[em big data] para procesar toda la información que recopila en el sitio web, rastrear cada acción realizada por un cliente, cómo saber dónde hizo más clic, cuántas veces revisó su carrito de compras, qué productos fueron más vistos, qué páginas fueron más visitadas, etc.
      .tarjeta.color-secundario.p-4(titulo="Variedad de los datos" style="background-color:#FFF4E1;")
        .row
          p.mb-0 Se refiere al formato, método y fuente mediante el cual se registran los datos. Estos datos están estructurados como en bases de datos o datos no estructurados. Esto incluye documentos de texto, correos electrónicos, audio, videos, imágenes en dispositivos móviles, entre otros aspectos, para realizar estos análisis la empresa requiere utilizar herramientas calificadas para consolidar, monitorear y procesar datos recopilados de múltiples fuentes de información.
      .tarjeta.color-secundario.p-4(titulo="Velocidad de los datos" style="background-color:#FFF4E1;")
        .row
          p.mb-0 Se refiere a los datos en constante movimiento por las distintas interconexiones, en otras palabras, significa la velocidad a la que se crean, almacenan y procesan los datos en tiempo real. El tiempo es fundamental, ya que se puede detectar fraudes en transacciones bancarias o el seguimiento de un evento en redes sociales, puesto que estos datos, necesitan analizarse en tiempo real para sacar conclusiones útiles y efectivas para el negocio.
      .tarjeta.color-secundario.p-4(titulo="Veracidad de los datos" style="background-color:#FFF4E1;")
        .row
          p.mb-0 Se refiere al grado de incertidumbre de los datos, a la fiabilidad de la información que recibimos. Es necesario dedicar tiempo en conseguir datos de calidad, mediante la aplicación de métodos que muestren datos impredecibles, como: datos económicos, comportamiento del consumidor que pueden influir en las decisiones de compra. La necesidad de investigar y planificar la incertidumbre es un desafío común en el #[em big data].
      .tarjeta.color-secundario.p-4(titulo="Viabilidad de los datos" style="background-color:#FFF4E1;")
        .row
          p.mb-0 Se trata de la capacidad de una organización para utilizar eficazmente la gran cantidad de datos que maneja, por lo que está relacionada con la innovación del equipo de trabajo y el uso de la tecnología. Las empresas analizan, seleccionan y monitorean la información para comprender mejor los mercados en los que operan, sus clientes, y de esta forma desarrollar estrategias efectivas. Aquí es importante filtrar información y seleccionar cuidadosamente los atributos y factores que pueden predecir los resultados que más le interesan a su empresa. El secreto del éxito radica en descubrir las relaciones entre variables ocultas.
      .tarjeta.color-secundario.p-4(titulo="Visualización de los datos" style="background-color:#FFF4E1;")
        .row
          p.mb-0 Se refiere a la forma en que se muestran los datos. Una vez que los datos han sido procesados, deben presentarse visualmente de una manera legible y accesible para encontrar patrones o #[em insights] ocultos de interés. Para comprender los datos, existen herramientas de visualización que lo ayudan a comprender los datos gráficamente y desde una perspectiva contextual como Google Data Studio, Power BI, Tableu, etc. 
      .tarjeta.color-secundario.p-4(titulo="Valor de los datos" style="background-color:#FFF4E1;")
        .row
          p.mb-0 Es la transformación de los datos en información, que a su vez se convierte en conocimiento, que genera una acción o decisión. Los líderes empresariales pueden tomar mejores decisiones basadas en esos datos. No todos los datos que visualizamos se traducen en acciones y decisiones. Para ello, se requiere tecnología aplicada. Por ejemplo, publicar en una red social que pueda medir emociones positivas o negativas utilizando un algoritmo de análisis de redes sociales o una herramienta que pueda extraer información utilizando tecnología de procesamiento de lenguaje natural. 
    
    p.mt-5(data-aos="zoom-in") En resumen, el #[em big data] es una combinación de estas siete características que permite a las empresas convertirse en competidores que contribuyen a la rentabilidad, la visualización y el éxito garantizado, así como obtener una ventaja competitiva. 











      
</template>

<script>
export default {
  name: 'Tema8',
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
.cajon.color-primario:before
  background-color: #FCCC7A
.tabs-a__tab
  background-color: #E8E8E8
</style>
