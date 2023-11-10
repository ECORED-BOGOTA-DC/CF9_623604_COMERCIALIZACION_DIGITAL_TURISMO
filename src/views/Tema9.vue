<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-up")
      .titulo-principal__numero
        span 9
      h1 PQRS

    p(data-aos="zoom-in") El Sistema de Petición, Quejas, Reclamos y Sugerencias (PQRS) es una herramienta que permite conocer las inquietudes de nuestros clientes, este sistema se presenta como una oportunidad para mejorar y potencializar los servicios que brinda la empresa hacia la excelencia operativa.

    .col-xl-10.m-auto.mt-5
      .p-4(data-aos="flip-up" style="background-color:#FFECBE;border-radius:15px;")
        .row.m-0
          .col-lg-2.col-md-3.mb-4.mb-md-0(style="place-self:center;")
            figure.text-center
              img(src="@/assets/curso/tema1/9.svg" style="display:inline;max-width:80px;" alt="Imagen decorativa")
          .col-lg-7.col-md-6.mb-4.mb-md-0(style="place-self:center;")
            p.mb-0 Te invito a observar el video llamado: #[strong #[em “Atención PQR: introducción”]] en el que podrá identificar #[em software] y herramientas para automatización de procesos en el diseño gráfico:
          .col-lg-3.col-md-3.text-center(style="place-self:center;")
            a.boton.color-acento-botones(href="https://youtu.be/PSiBtkl75Hc" target="_blank")
              span Ver video
              i.fas.fa-play
    
    p.mt-5(data-aos="zoom-in") Todos los usuarios presentar peticiones, quejas, solicitudes y sugerencias, tal como lo señala Constitución Política de Colombia, el Código Contencioso Administrativo y la Circular Única de la Superintendencia de Industria y Comercio, en la que se debe tener en cuenta los siguientes conceptos:

    .row.mt-5
      .col-md-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false" style="background-color:#D9ECFF;" data-aos="flip-up")
          .tarjeta-flip__contenedor(style="background-color:#D9ECFF;border-radius:20px;")
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema9/1.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5(style="background-color:#D9ECFF;")
              h3(style="font-size:38px;") Petición
              p Es la acción en la que un usuario solicita amablemente información a la empresa relacionada con la prestación de servicios.
      .col-md-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false" style="background-color:#F8CDB5;" data-aos="flip-up")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor(style="background-color:#F8CDB5;border-radius:20px;")
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema9/2.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5(style="background-color:#F8CDB5;")
              h3(style="font-size:38px;") Queja
              p Es una declaración o manifestación que hace un usuario a la empresa como consecuencia de una disconformidad ocasionada por la prestación de un servicio. 
      .col-md-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false" style="background-color:#FFE4B9;" data-aos="flip-up")
          .tarjeta-flip__contenedor(style="background-color:#FFE4B9;border-radius:20px;")
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema9/3.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5(style="background-color:#FFE4B9;")
              h3(style="font-size:38px;") Reclamos
              p Es la objeción o contrariedad de un usuario frente a un servicio prestado, en la que solicita a la empresa, se valide y evalúe lo ocurrida en dicha situación y proceda con una solución satisfactoria.
      .col-md-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false" style="background-color:#E4F4AE;" data-aos="flip-up")
          .tarjeta-flip__contenedor(style="background-color:#E4F4AE;border-radius:20px;")
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema9/4.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5(style="background-color:#E4F4AE;")
              h3(style="font-size:38px;") Sugerencia
              p Es una propuesta realizada por los usuarios para la mejora de un proceso del negocio, cuya acción está relacionada con la prestación de servicios. 
    
    Separador.mt-5

    .titulo-segundo
      h2#t_9_1 9.1 Características
    
    p(data-aos="zoom-in") A continuación se describen las características básicas requeridas para un sistema PQRS:

    .row.mt-4(data-aos="zoom-in")
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema6/2.svg" alt="Imagen decorativa")
      .col(style="place-self:center;")
        p.mb-0 Accesible: debe permitir a los clientes iniciar fácilmente el proceso de creación de solicitudes, quejas, facturas y sugerencias.
    .row.mt-2(data-aos="zoom-in")
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema6/2.svg" alt="Imagen decorativa")
      .col(style="place-self:center;")
        p.mb-0 Personalizable: definir un flujo de gestión de acuerdo con las necesidades de cada organización 
    .row.mt-2(data-aos="zoom-in")
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema6/2.svg" alt="Imagen decorativa")
      .col(style="place-self:center;")
        p.mb-0 Colaborativo: el sistema debe permitir la participación de todos los miembros de la organización que participen en la tramitación de las PQRS.
    .row.mt-2(data-aos="zoom-in")
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema6/2.svg" alt="Imagen decorativa")
      .col(style="place-self:center;")
        p.mb-0 Comunicación: se implanta el correspondiente sistema PQRS y funciona de forma bidireccional, al permitir que los interesados que inician la creación de PQRS conozcan el estado de su solicitud.
    .row.mt-2(data-aos="zoom-in")
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema6/2.svg" alt="Imagen decorativa")
      .col(style="place-self:center;")
        p.mb-0 Trazabilidad: debe reflejar qué controles se han realizado a las PQRS 
    .row.mt-2(data-aos="zoom-in")
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema6/2.svg" alt="Imagen decorativa")
      .col(style="place-self:center;")
        p.mb-0 Tiempo real: toda la información está disponible en tiempo real para evitar errores.
    
    Separador.mt-5

    .titulo-segundo
      h2#t_9_2 9.2  Gestión de PQRS
    
    p(data-aos="zoom-in") La gestión de PQRS, es un proceso deben realizar las organizaciones frente a los requerimientos recibidos por parte de los usuarios, para tal caso se debe recibir, tramitar y resolver con el cumplimiento de la misión de la entidad con oportunidad, calidad y transparencia.

    SlyderF.slyderf_8_1.mt-5(columnas="col-lg-6 col-xl-4")
      .tarjeta-numerada.color-primario.p-5
        .tarjeta-numerada__numero
          .h2 1
        p.text-center.mb-0 Gestionar en su propio sistema de gestión documental, las peticiones desde su recibo hasta su respuesta, incluyendo los controles y la generación de reportes respectivos.
      .tarjeta-numerada.color-acento-botones.p-5
        .tarjeta-numerada__numero
          .h2 2
        p.text-center.mb-0 Recibir, tipificar y asignar la solicitud en el Sistema de Gestión Documental de la entidad, evaluar la petición y asignar a un funcionario de acuerdo con su competencia. Tener en cuenta una metodología diferenciada para las peticiones escritas, verbales o anónimas.
      .tarjeta-numerada.color-acento-contenido.p-5
        .tarjeta-numerada__numero
          .h2 3
        p.text-center.mb-0 Garantizar que los datos del cliente queden en el sistema después de haber sido inscritos por primera y única vez, cuando no obedezcan a peticiones anónimas, de tal manera que todas las interacciones consecuentes, no generan reprocesos en el suministro de su información personal.
      .tarjeta-numerada.color-secundario.p-5
        .tarjeta-numerada__numero
          .h2 4
        p.text-center.mb-0 Verificar la competencia de la dependencia sobre la petición, queja, reclamo, sugerencia o denuncia, de acuerdo con la temática. 
      .tarjeta-numerada.color-primario.p-5
        .tarjeta-numerada__numero
          .h2 5
        p.text-center.mb-0 Recopilar y analizar información relacionada con la solicitud, preparar y proyectar respuesta teniendo en cuenta el tipo de petición y los tiempos de vencimiento para dar respuesta a la petición en términos de oportunidad, eficiencia, eficacia y calidad.
        p.text-center.mb-0 Comprobar las peticiones a cargo de la dependencia y emitir respuesta acorde con los tiempos establecidos.
      .tarjeta-numerada.color-acento-botones.p-5
        .tarjeta-numerada__numero
          .h2 6
        p.text-center.mb-0 Comprobar las peticiones a cargo de la dependencia y emitir respuesta acorde con los tiempos establecidos.
      .tarjeta-numerada.color-acento-contenido.p-5
        .tarjeta-numerada__numero
          .h2 7
        p.text-center.mb-0 Realizar seguimiento a las respuestas a cargo de cada dependencia de la entidad.
      .tarjeta-numerada.color-secundario.p-5
        .tarjeta-numerada__numero
          .h2 8
        p.text-center.mb-0 Revisar en el sistema de gestión documental todas las peticiones radicadas y verificar que se haya emitido respuesta.
      .tarjeta-numerada.color-primario.p-5
        .tarjeta-numerada__numero
          .h2 9
        p.text-center.mb-0 Examinar y efectuar seguimiento de las solicitudes que estén próximas al vencimiento de los términos para emisión de respuesta, según el tipo de solicitud.
      .tarjeta-numerada.color-acento-botones.p-5
        .tarjeta-numerada__numero
          .h2 10
        p.text-center.mb-0 Preparar y presentar informes de seguimiento de todas las peticiones a cargo del área responsable de liderar la gestión de servicio al cliente.
      .tarjeta-numerada.color-acento-contenido.p-5
        .tarjeta-numerada__numero
          .h2 11
        p.text-center.mb-0 Proyectar informes periódicos de las peticiones para implantar un mecanismo de mejora continua, evaluar los puntos o áreas críticas donde se presenten más solicitudes.
      .tarjeta-numerada.color-secundario.p-5
        .tarjeta-numerada__numero
          .h2 12
        p.text-center.mb-0 Presentar en el Comité de Desarrollo Administrativo, el informe periódico de peticiones.

    p.mt-5(data-aos="zoom-in") En este caso se puede hacer seguimiento de carácter cualitativo o cuantitativo para determinar capacidades y poder establecer niveles de crecimiento y puntos de atención, ampliación de canales, o simplemente diseñar nuevos protocolos y procedimientos de atención, etc.






      
</template>

<script>
export default {
  name: 'Tema9',
  components: {},
  data: () => ({
    indicadorTarjetaFlip: true,
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
.slyderf_8_1 .slyder-f__btn i
  font-size: 3rem
  color: #0082FF
.slyder-f
  .horizontal-scroll
    display: flex !important
    align-items: stretch !important
    height: 100%
    .slyder-f__slyde
      display: flex
      align-items: stretch
</style>
