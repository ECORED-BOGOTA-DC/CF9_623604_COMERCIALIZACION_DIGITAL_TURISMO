<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-up")
      .titulo-principal__numero
        span 5
      h1 #[em Chatbots]

    .row
      .col-lg.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/1.png" data-aos="zoom-in-right" alt="Imagen decorativa")
      .col-lg
        .cajon.color-primario.p-4.h-100.d-flex.flex-wrap.align-content-center(style="background-color:#FFF7E5;box-shadow:0px 4px 8px rgba(0,0,0,.1);" data-aos="zoom-in-left")
          p.mb-0 En el mundo del #[em marketing] digital y el servicio al cliente, a menudo se hace referencia a los "#[em chatbots]" como si fueran la misma solución para todos los escenarios comerciales. Sin embargo, hay diferentes tipos de #[em chatbots] que difieren entre sí según algunos criterios, pues algunos utilizan inteligencia artificial, texto o contienen elementos multimedia. Al implementar esta herramienta como estrategia de servicio es necesario conocer todo sobre ellos para que se adapte muy bien a las necesidades de cada negocio. 
    
    Separador.mt-5

    .titulo-segundo
      h2#t_5_1 5.1 ¿Qué son los #[em chatbots]?
    
    .row
      .col-lg.mb-4.mb-lg-0
        .cajon.color-primario.p-4(style="background-color:#FFF7E5;box-shadow:0px 4px 8px rgba(0,0,0,.1);" data-aos="zoom-in-right")
          p.mb-0 Los #[em chatbots] son programas que simulan o procesan conversaciones humanas, permitiendo a los usuarios interactuar con dispositivos como si fueran humanos. Estos programas, se basan en inteligencia artificial, reglas preprogramadas, procesamiento de lenguaje natural y #[em machine learning], otorgándoles la capacidad de brindar respuestas automáticas y precisas a las solicitudes de las personas que interactúan con ellos.
        p.mt-4(data-aos="zoom-in") Esta herramienta suele estar integrada con aplicaciones de mensajería como Facebook, WhatsApp, Telegram, sitios web corporativos, CRM, comercio electrónico y entre otros, conocer el punto de vista del usuario, posibilita que obtenga información o apoyo a la hora de realizar una acción, por lo tanto, sirve para mejorar la experiencia del usuario, hacerla instantánea, fácil y fluida, por otro lado, desde la perspectiva de la empresa, los #[em chatbots] pueden automatizar la mayoría de las tareas de servicio al cliente y guiar al usuario en el recorrido del cliente hasta la acción deseada como convertirse en cliente. 
      .col-lg
        figure
          img(src="@/assets/curso/tema5/2.png" data-aos="zoom-in-left" alt="Imagen decorativa")
    
    Separador.mt-5

    .titulo-segundo
      h2#t_5_2 5.2  Tipos de #[em chatbots]
    
    p(data-aos="zoom-in") Los #[em chatbots] tienes diferentes “formas y tamaños” y se puede clasificarlos según distintos criterios que requiera la empresa de acuerdo a sus necesidades y objetivos, al igual que definir el grado con el que esta herramienta interactúa con el usuario, la practicidad y el nivel de tecnología empleada. A continuación, se presentarán algunos tipos de #[em chatbots] que existen en el mercado:

    .col-xl-10.m-auto.mt-5
      PasosA.color-acento-contenido(tipo="n")
        .row
          .col-md-6.mb-4.mb-md-0.col-lg-9(style="place-self:center;")
            h5 #[em Chatbots] de ITR
            p Hay #[em chatbots] que funcionan sin requerir obligatoriamente la inteligencia artificial, como por ejemplo, los de ITR (Respuesta de Interacción de Texto) o también llamado “#[em dumb chatbots]”, estos no necesitan una aplicación de inteligencia artificial porque funciona gracias a comandos, es decir, emplean botones ya predefinidos y continúan una lógica básica en forma de secuencia, emulando una conversación que parte siempre de un menú de opciones. 
            p.mt-3 #[em ManyChat] es un buen ejemplo de este tipo, y a pesar de ser algo básico en el mercado, hay una gran viabilidad a la hora de mejorar el #[em engagement] si se crea una buena interacción con el menú. Estos #[em chatbots] manipulan comandos son efectivos para obtener clientes potenciales en las páginas de destino.
          .col-md-6.col-lg-3(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema5/3.svg' data-aos="zoom-in-left" alt="Imagen decorativa")
        .row
          .col-md-6.col-lg-3.mb-4.mb-md-0(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema5/4.svg' data-aos="zoom-in-right" alt="Imagen decorativa")
          .col-md-6.col-lg-9.text-start(style="place-self:center;")
            h5 #[em Chatbots] cognitivos o #[em “Smart Chatbots”]
            p Una vez en el complejo, este tipo de #[em chatbot] utiliza inteligencia artificial y aprendizaje automático. Es decir, tienen la capacidad de entender/comprender y procesar las necesidades de una persona a medida que interactúan, volviendo la conversación más natural. También conocido como "NLU" (Entendimiento del Lenguaje Natural), este programa, puede interpretar su intención y proporcionar una respuesta completamente nueva a partir de ella. 
        .row
          .col-md-6.mb-4.mb-md-0.col-lg-9(style="place-self:center;")
            h5 #[em Chatbots] de #[em Word-spotting]
            p Este es un #[em bot] en el rango entre ITR y cognitivo, este funciona a través de la detección de palabras clave en función de una respuesta preestablecida. Por ejemplo, si ingresa la palabra "curso", el #[em bot] puede proporcionar una lista de cursos disponibles. Esto es una ventaja porque proporciona un aspecto más "conversacional" sin necesidad de integrar la tecnología NLU. Es uno de los #[em chatbots] más utilizados en la actualidad.
          .col-md-6.col-lg-3(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema5/5.svg' data-aos="zoom-in-left" alt="Imagen decorativa")
        .row
          .col-md-6.col-lg-3.mb-4.mb-md-0(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema5/6.svg' data-aos="zoom-in-right" alt="Imagen decorativa")
          .col-md-6.col-lg-9.text-start(style="place-self:center;")
            h5 #[em Chatbots] según el medio de comunicación
            ol.lista-ol
              li.d-flex
                span.text-bold 1. 
                | Texto: se utiliza solo con palabras escritas.
              li.d-flex
                span.text-bold 2. 
                | Multimedia: integra botones, imágenes, texto, entre otros. 
              li.d-flex
                span.text-bold 3. 
                | Cognitivo de voz: es la integración de un comando para entender la locución del cliente y ofrecer una respuesta adecuada con lo que escucha. 
        .row
          .col-md-6.mb-4.mb-md-0.col-lg-9(style="place-self:center;")
            h5 #[em Chatbots] según su objetivo
            ol.lista-ol
              li.d-flex
                span.text-bold 1. 
                div Generar #[em leads] para intercambiar información más personalizada.
              li.d-flex
                span.text-bold 2. 
                | Generar ventas: ofrecer la hora de elegir el producto y realizar el pago.
              li.d-flex
                span.text-bold 3. 
                div Humanizar la marca y potencializar el #[em engagement].
          .col-md-6.col-lg-3(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema5/7.svg' data-aos="zoom-in-left" alt="Imagen decorativa")
    
    Separador.mt-5

    .titulo-segundo
      h2#t_5_3 5.3  Ventajas y desventajas
    
    .row
      .col-md-6.mb-4.mb-md-0
        figure
          img(src="@/assets/curso/tema5/8.png" data-aos="zoom-in-right" alt="Imagen decorativa")
      .col-md-6
        p(data-aos="zoom-in") Hoy en día los clientes están dispuestos a dejar la marca si el servicio al cliente es inadecuado, es por eso por lo que los #[em chatbots] ofrecen la oportunidad de expandir los canales digitales de una empresa y tener un impacto positivo en la experiencia del usuario. La tecnología de #[em chatbot] está aquí y juega un papel importante en el futuro de la interacción empresa-cliente. 
        p.mt-4(data-aos="zoom-in") A continuación se conocerán ventajas y desventajas de usar los #[em chatbots]:
    
    h4.mt-5(data-aos="fade-right") Ventajas
    
    TabsA.color-acento-botones.mt-4
      .tarjeta.color-secundario.p-4(titulo="Conocer a tus clientes" style="background-color:#FFF4E1;")
        .row
          .col-md-6.mb-4-mb-mb-0.col-lg-8
            p Los #[em chatbots] pueden ayudar a conocer mejor a sus clientes, pues permite saber cuáles son sus dudas y necesidades, los productos y servicios que les interesan, y te ayudan a tomar decisiones estratégicas para mejorar tu experiencia.
          .col-md-6.col-lg-4
            figure
              img(src="@/assets/curso/tema5/9.svg" alt="Imagen decorativa")
      .tarjeta.color-secundario.p-4(titulo="Una máquina de ventas" style="background-color:#FFF4E1;")
        .row
          .col-md-6.mb-4-mb-mb-0.col-lg-8
            p Los #[em chatbots] pueden ser el socio perfecto para promocionar nuevos productos y enviar avisos por adelantado, asimismo, se puede brindar soporte inmediato a los prospectos para acelerar el proceso de decisión de compra.
          .col-md-6.col-lg-4
            figure
              img(src="@/assets/curso/tema5/10.svg" alt="Imagen decorativa")
      .tarjeta.color-secundario.p-4(titulo="Atención al cliente 24/7" style="background-color:#FFF4E1;")
        .row
          .col-md-6.mb-4-mb-mb-0.col-lg-8
            p Disponibilidad las 24 horas del día para ayudar a los clientes, respuesta rápida a cualquier pregunta que reciba, se resuelve problemas en cualquier momento del día.
          .col-md-6.col-lg-4
            figure
              img(src="@/assets/curso/tema5/11.svg" alt="Imagen decorativa")
      .tarjeta.color-secundario.p-4(titulo="Optimizar costos" style="background-color:#FFF4E1;")
        .row
          .col-md-6.mb-4-mb-mb-0.col-lg-8
            p Imagine que un agente pasa más tiempo en responder sólo las consultas que requieren un ser humano, no obstante, con la implementación de #[em chatbots] con IA conversacional es una excelente manera de automatizar el servicio al cliente y mejorar el servicio de los agentes, lo que lleva a la optimización de costos a mediano plazo. 
          .col-md-6.col-lg-4
            figure
              img(src="@/assets/curso/tema5/12.png" alt="Imagen decorativa")
      .tarjeta.color-secundario.p-4(titulo="Mejorar la <br> satisfacción al cliente" style="background-color:#FFF4E1;")
        .row
          .col-md-6.mb-4-mb-mb-0.col-lg-8
            p Las personas son muy diferentes y las formas en que se comunican son diferentes. Por lo tanto, es importante dar una respuesta adecuada y sensible a cada solicitud. Por ejemplo, el #[em chatbot] puede ayudar a comprender los lenguajes informales y regionalismo, así como usar complementos para enriquecer las conversaciones y reconocer la intención detrás de cada diálogo.
          .col-md-6.col-lg-4
            figure
              img(src="@/assets/curso/tema5/13.svg" alt="Imagen decorativa")

    h4.mt-5(daata-aos="fade-right") Desventajas
    
    TabsA.color-acento-botones.mt-4
      .tarjeta.color-secundario.p-4(titulo="Los chatbots <br> no son persona" style="background-color:#FFF4E1;")
        .row
          .col-md-6.mb-4-mb-mb-0.col-lg-8
            p Los #[em chatbots] no son lo mismo que los agentes humanos, por lo que es posible que no siempre entienden la solicitud o que tengan opciones de respuesta limitadas. Esto hace que parezca "un robot".
          .col-md-6.col-lg-4
            figure
              img(src="@/assets/curso/tema5/14.svg" alt="Imagen decorativa")
      .tarjeta.color-secundario.p-4(titulo="Tiempo en la <br> implementación" style="background-color:#FFF4E1;")
        .row
          .col-md-6.mb-4-mb-mb-0.col-lg-8
            p Esto no es una desventaja, pero vale la pena recordar que, como todas las mejoras, se necesita tiempo para que funcione al 100 % y muestre resultados reales. 
          .col-md-6.col-lg-4
            figure
              img(src="@/assets/curso/tema5/15.svg" alt="Imagen decorativa")
      .tarjeta.color-secundario.p-4(titulo="Necesita mantenimiento" style="background-color:#FFF4E1;")
        .row
          .col-md-6.mb-4-mb-mb-0.col-lg-8
            p Los #[em chatbots] requieren revisión, mantenimiento y coordinación constantes en términos de bases de conocimiento y cómo comunicarse con los clientes. Los #[em chatbots] deben proporcionar datos nuevos y significativos (contenido) que puedan responder a las preguntas y dudas de los clientes.
          .col-md-6.col-lg-4
            figure
              img(src="@/assets/curso/tema5/16.svg" alt="Imagen decorativa")
 

        


    







      
</template>

<script>
export default {
  name: 'Tema5',
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
.pasos-a__linea__esquina__linea
  border-radius: 0px
.tabs-a__tab
  background-color: #E8E8E8
.cajon.color-primario:before
  background-color: #FCCC7A
</style>
