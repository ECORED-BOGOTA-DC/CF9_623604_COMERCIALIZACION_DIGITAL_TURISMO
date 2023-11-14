<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-up")
      .titulo-principal__numero
        span 3
      h1 Publicación #[em online] para empresas turísticas
    
    p(data-aos="zoom-in") La forma de hacer turismo ha cambiado durante los últimos años, ya no solo se trata de vender un alojamiento, un transporte o una cena, las empresas turísticas acuden a generar toda una serie de experiencias que generen un sentimiento memorable para los usuarios.

    .row.mt-4
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
        figure.m-auto.col-7.col-md-8.col-lg-12
          img(src="@/assets/curso/tema3/48.png")
      .col-lg-6(data-aos="fade-left")
        .cajon.p-4.color-primario.h-100.d-flex.flex-wrap.align-content-center(style="background-color:#FFF7E5;")
          p.mb-0 Los usuarios, están cada vez más conectados a internet y pueden hacer una investigación más profunda antes de decidir realizar la compra; prefieren información y atención personalizada, contar con diferentes canales de interacción con la empresa, tener diferentes opciones y conocer las opiniones de otros usuarios. A continuación, se presentan diferentes tipos de acciones que la empresa turística puede realizar cuando piense en publicar contenido en línea: 

    AcordionA.mt-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Mercadeo en video")
        .col-md-6.col-lg-8.mb-4.mb-md-0
          p El video es de los formatos más utilizados por las empresas del sector turismo, debido a que permite mostrar los servicios de una forma más atractiva y genera una mejor conexión con los usuarios. 
        .col-md-6.col-lg-4
          figure
            img(src='@/assets/curso/tema3/1.svg' alt="Imagen decorativa")
      .row(titulo="Mercadeo en móviles")
        .col-md-6.col-lg-8.mb-4.mb-md-0
          p Cada vez más usuarios están utilizando los dispositivos móviles para realizar las compras o reservas de las experiencias turísticas, por esto, este tipo de mercadeo es recomendable para las empresas del sector.
        .col-md-6.col-lg-4
          figure
            img(src='@/assets/curso/tema3/2.svg' alt="Imagen decorativa")
      .row(titulo="Redes sociales")
        .col-md-6.col-lg-8.mb-4.mb-md-0
          p Las redes sociales son un punto clave para las empresas turísticas, ya que la mayoría de los usuarios potenciales tiene un perfil creado por lo menos en una de ellas. Es importante que la empresa pueda definir cuáles son las redes sociales en las que debería tener presencia, de acuerdo con los objetivos del negocio.
        .col-md-6.col-lg-4
          figure
            img(src='@/assets/curso/tema3/3.svg' alt="Imagen decorativa")
      .row(titulo="Influenciadores")
        .col-md-6.col-lg-8.mb-4.mb-md-0
          p La empresa turística podría establecer un acuerdo con alguno de los influenciadores para que realice una mención o recomendación sobre el tipo de experiencias que comercializa. Este tipo de menciones puede facilitar la compra de los usuarios. 
        .col-md-6.col-lg-4
          figure
            img(src='@/assets/curso/tema3/4.png' alt="Imagen decorativa")
      .row(titulo="Campañas publicitarias")
        .col-md-6.col-lg-8.mb-4.mb-md-0
          p La empresa puede crear campañas de publicidad para promocionar las experiencias turísticas e incluso realizar #[em remarketing] con los usuarios que han visitado el sitio web, pero que no han completado la compra. 
        .col-md-6.col-lg-4
          figure
            img(src='@/assets/curso/tema3/5.png' alt="Imagen decorativa")
      .row(titulo="Realidad virtual")
        .col-md-6.col-lg-8.mb-4.mb-md-0
          p Varias de las empresas del sector turístico, están utilizando la realidad virtual para que sus usuarios puedan experimentar las experiencias turísticas que comercializan de una forma casi real.
        .col-md-6.col-lg-4
          figure
            img(src='@/assets/curso/tema3/6.svg' alt="Imagen decorativa")
      .row(titulo="Reseñas y opiniones")
        .col-md-6.col-lg-8.mb-4.mb-md-0
          p Construir una buena reputación en línea, es muy importante para las empresas turísticas. Las buenas opiniones y valoraciones ayudan a otros usuarios a tomar decisiones de compra.
        .col-md-6.col-lg-4
          figure
            img(src='@/assets/curso/tema3/7.svg' alt="Imagen decorativa")
    
    Separador.mt-5

    .titulo-segundo
      h2#t_3_1 3.1 Plataforma de publicación
    
    p(data-aos="zoom-in") Cada día son más los usuarios que utilizan plataformas tecnológicas para programar sus experiencias turísticas. A menudo, estas experiencias se programan de acuerdo con la información que otros usuarios sugieren o comentan en estas herramientas. A continuación se hace referencia a la clasificación de estas herramientas.

    .col-xl-11.mt-5.p-4(style="background: linear-gradient(90deg, rgba(255,255,255,1) 8%, rgba(255,244,225,1) 8%);" data-aos="flip-up")
      .row
        .col-auto(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema3/8.svg" alt="Imagen publicitaria que identifica a Agoda.")
        .col(style="place-self:center;")
          h5 Agoda
          p Fundada en 1998, fue adquirida por Priceline Group (ahora conocida como Booking Holdings) en 2007. El sitio está disponible en 38 idiomas y su fuerte es una lista de propiedades de todo tipo. Es una de las  agencias de viajes en línea más grandes del mercado asiático, pero continúa expandiéndose en los mercados de EE. UU., India y Europa. 
          p.mt-3.mb-0 #[strong Uso ideal:] alojamiento de todo tipo.
    .col-xl-11.p-4(style="background: linear-gradient(90deg, rgba(255,255,255,1) 8%, rgba(255,228,185,1) 8%);" data-aos="flip-up")
      .row
        .col-auto(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema3/9.svg" alt="Imagen publicitaria que identifica a Airbnb.")
        .col(style="place-self:center;")
          h5 Airbnb
          p Conocido por brindar acceso a alojamientos únicos en todo el mundo. La mayoría de los alojamientos que utilizan Airbnb no pertenecen a los grandes segmentos hoteleros, sino que se centran en la cultura y la vida local. 
          p.mt-3.mb-0 #[strong Uso ideal:] alquileres vacacionales, #[em bed and breakfast], apartamentos compartidos, hoteles #[em boutique], hostales, instalaciones independientes.
    .col-xl-11.p-4(style="background: linear-gradient(90deg, rgba(255,255,255,1) 8%, rgba(255,244,225,1) 8%);" data-aos="flip-up")
      .row
        .col-auto(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema3/10.svg" alt="Imagen publicitaria que identifica a Booking.")
        .col(style="place-self:center;")
          h5 Booking
          p Es uno de los sitios web de viajes más grandes y famosos del mundo. Su sitio web y su aplicación móvil son accesibles en 43 idiomas y han recopilado más de 50 millones de reseñas de huéspedes validados en más de 200 países. Su tasa de comisión es generalmente más baja que  otras OTA. 
          p.mt-3.mb-0 #[strong Uso ideal:] todo tipo de alojamiento, incluidos resorts, villas, cabañas, hoteles, apartamentos, hostales, condominios, B & B y más.
    .col-xl-11.p-4(style="background: linear-gradient(90deg, rgba(255,255,255,1) 8%, rgba(255,228,185,1) 8%);" data-aos="flip-up")
      .row
        .col-auto(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema3/11.svg" alt="Imagen publicitaria que identifica a Expedia.")
        .col(style="place-self:center;")
          h5 Expedia
          p Incluye 200 sitios web de reserva de viajes en 35 idiomas en 75 países. El sitio web recibe más de 600 millones de visitas al mes. Esto incluye la búsqueda de todo tipo de alojamiento y vuelos, alquiler de coches, cruceros y paquetes promocionales. Habilitar su conexión a Expedia facilitará su estadía en Hotels.com, Wotif y muchos otros canales. 
          p.mt-3.mb-0 #[strong Uso ideal:] alojamiento de todo tipo y tamaño en todo el mundo.
    .col-xl-11.p-4(style="background: linear-gradient(90deg, rgba(255,255,255,1) 8%, rgba(255,244,225,1) 8%);" data-aos="flip-up")
      .row
        .col-auto(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema3/12.svg" alt="Imagen publicitaria que identifica a Hostelworld.")
        .col(style="place-self:center;")
          h5 HostelWorld
          p Esta es la  OTA más grande para alojamiento en albergues en todo el mundo. Hay más de 12 millones de comentarios de usuarios. Su inventario incluye hoteles, B & B y otros alojamientos con varios presupuestos. Sus aplicaciones y sitios web están disponibles en 20 idiomas diferentes. 
          p.mt-3.mb-0 #[strong Uso ideal:] hostales, hoteles, pensiones, pensiones, apartamentos, #[em campings].
    .col-xl-11.p-4(style="background: linear-gradient(90deg, rgba(255,255,255,1) 8%, rgba(255,228,185,1) 8%);" data-aos="flip-up")
      .row
        .col-auto(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema3/13.svg" alt="Imagen publicitaria que identifica a Despegar.")
        .col(style="place-self:center;")
          h5 Despegar
          p Es la OTA más grande de América Latina, sirviendo a toda la región y más allá. Especializados en hoteles y vuelos. También ofrecen alquileres vacacionales, alquiler de coches, actividades y paquetes. 
          p.mt-3.mb-0 #[strong Uso ideal:] hoteles y aerolíneas.
    .col-xl-11.p-4(style="background: linear-gradient(90deg, rgba(255,255,255,1) 8%, rgba(255,244,225,1) 8%);" data-aos="flip-up")
      .row
        .col-auto(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema3/14.svg" alt="Imagen publicitaria que identifica a Pricetravel.")
        .col(style="place-self:center;")
          h5 PriceTravel
          p Están especializados en reservas de hoteles y vuelos y también ofrecen paquetes y #[em tours]. Además, esta OTA  ofrece reservas en algunos de México, Estados Unidos, República Dominicana y algunos de los principales destinos del Caribe. 
          p.mt-3.mb-0 #[strong Uso ideal:] hoteles y aerolíneas.
    .col-xl-11.p-4(style="background: linear-gradient(90deg, rgba(255,255,255,1) 8%, rgba(255,228,185,1) 8%);" data-aos="flip-up")
      .row
        .col-auto(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema3/15.svg" alt="Imagen publicitaria que identifica a Tiquetesbaratos.com.")
        .col(style="place-self:center;")
          h5 Tiquetes Baratos 
          p Es propiedad de PriceTravel y tiene la misma conexión. Es principalmente una OTA de aviación, que  ofrece reservas de hotel, traslados al aeropuerto, alquiler de automóviles, paquetes de vacaciones, boletos de autobús, cruceros y excursiones a precios competitivos. 
          p.mt-3.mb-0 #[strong Uso ideal:] hoteles y aerolíneas.
    
    .mt-5.mb-4.p-3(style="max-width:fit-content;min-width:250px;background-color:#B1DE19;border-radius:30px 0px 30px 0px;" data-aos="zoom-in-up")
      h4.mb-0.ps-2.pe-4 Principales Metabuscadores en turismo
    
    p(data-aos="zoom-in") Los metabuscadores apoyan en las exploraciones en un conjunto de buscadores y muestran los resultados agrupados por buscador. Es como si se realizara una búsqueda en varios buscadores y se unieran los resultados en una sola página, entre los ejemplos más generales se tienen, Metacrawler que busca en Google, Yahoo, Ask Jeeves; en el siguiente recurso, se presentan los más empleados en el sector turismo:

    TabsA.color-acento-botones.mt-5
      .tarjeta.color-secundario.p-4(titulo="Trivago" style="background-color:#FFF4E1;")
        .row
          .col-md-6.mb-4-mb-mb-0.col-lg-8
            p Es uno de los metabuscadores hoteleros por excelencia en España.
          .col-md-6.col-lg-4
            figure
              img(src="@/assets/curso/tema3/16.png" alt="Imagen decorativa")
      .tarjeta.color-secundario.p-4(titulo="Kayak" style="background-color:#FFF4E1;")
        .row
          .col-md-6.mb-4-mb-mb-0.col-lg-8
            p Busca en cientos de webs de viajes a la vez y muestra a los viajeros la información que necesitan para elegir el vuelo, hotel, carro de alquiler o paquete de viaje perfecto.
          .col-md-6.col-lg-4
            figure
              img(src="@/assets/curso/tema3/17.png" alt="Imagen decorativa")
      .tarjeta.color-secundario.p-4(titulo="Google Hotel Ads" style="background-color:#FFF4E1;")
        .row
          .col-md-6.mb-4-mb-mb-0.col-lg-8
            p Es una plataforma #[em online], como una evolución de Google Hotel Finder, especialmente para la distribución hotelera que dirige la audiencia en busca por alojamiento directamente para las reservas o ventas directas.
          .col-md-6.col-lg-4
            figure
              img(src="@/assets/curso/tema3/18.png" alt="Imagen decorativa")

    .mt-5.mb-4.p-3(style="max-width:fit-content;min-width:250px;background-color:#B1DE19;border-radius:30px 0px 30px 0px;" data-aos="zoom-in-up")
      h4.mb-0.ps-2.pe-4 Top de las 4 mejores aplicaciones para pedir comida a domicilio en Colombia
    
    p(data-aos="zoom-in") Sobre estas aplicaciones se puede mencionar que la mayoría son rápidas y confiables para pedidos de comida a domicilio. Su objetivo es unir a clientes con tiendas y repartidores para llevar los mejores productos a donde los clientes requieran. En el siguiente recurso, se presentan cuatro (4) de las mejores aplicaciones para pedir comida a domicilio en Colombia:

    .tarjeta.tarjeta--azul.p-4.p-md-5.mt-5.pb-md-4
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0.col-lg-7
            h5 Rappi
            p Fundada en 2015, cuenta con más de 4.000 establecimientos en plataformas digitales, la mayoría de los cuales forman parte del sector hostelero. Algunas de estas instalaciones son cocinas ocultas que solo venden comida a domicilio. Esto permite a los usuarios realizar un seguimiento de sus pedidos y utilizar su tiempo de manera más eficiente. Opera en Colombia, México, Argentina, Uruguay, Chile y Perú.
          .col-md-6.col-lg-5
            figure
              img(src='@/assets/curso/tema3/19.svg' alt="Logo comercial que identifica a Rappi.")
        .row
          .col-md-6.mb-4.mb-md-0.col-lg-7
            h5 Ifood Colombia
            p Creado en  Brasil en 2011 y llegando a Colombia a principios de 2018, atiende a siete capitales, entre ellas: Bogotá, Cali, Medellín, Bucaramanga, Cartagena, Barranquilla, Manizales, Santa Malta, Pereira, entre otras. Actualmente está prestando sus servicios en países de América Latina, como Argentina y México.
            p.mt-3 En Colombia cuenta con más de 4.000 establecimientos  en su plataforma digital, el objetivo de esta aplicación es brindar  a las empresas sin grandes infraestructuras la oportunidad de revolucionar la industria hotelera a través de canales comerciales distintos a la venta personal.
          .col-md-6.col-lg-5
            figure
              img(src='@/assets/curso/tema3/20.svg' alt="Logo comercial que identifica a ifood.")
        .row
          .col-md-6.mb-4.mb-md-0.col-lg-7
            h5 Uber Eats
            p Llegando a Colombia en 2016, ahora hay más de 3.000 restaurantes en plataformas digitales. Uber Eats brinda a los usuarios efectividad, eficiencia y rapidez. La ventaja de esta aplicación es su inmediatez ya que el repartidor o residente completa el 50 % de la entrega en 30 minutos  y llega al cliente satisfecho y conforme con el servicio.
          .col-md-6.col-lg-5
            figure
              img(src='@/assets/curso/tema3/21.svg' alt="Logo comercial que identifica a Uber Eats.")
        .row
          .col-md-6.mb-4.mb-md-0.col-lg-7
            h5 Didi Food
            p Didi Food es una plataforma profesional de entrega de alimentos que conecta a clientes, tiendas y empresas de mensajería. Didi Food se ha centrado en ayudar a las pequeñas empresas en tiempos de recuperación económica. 
            p.mt-3 Uno de los objetivos de la marca es que los usuarios encuentren diferentes restaurantes a través de la app. Esta es una opción que  antes no estaba disponible en las plataformas digitales y es uno de los precios de servicio más bajos del mercado.
          .col-md-6.col-lg-5
            figure
              img(src='@/assets/curso/tema3/22.svg' alt="Logo comercial que identifica a DiDiFood.")
    
    .mt-5.mb-4.p-3(style="max-width:fit-content;min-width:250px;background-color:#B1DE19;border-radius:30px 0px 30px 0px;" data-aos="zoom-in-up")
      h4.mb-0.ps-2.pe-4 Plataformas para desarrollar eventos virtuales
    
    p(data-aos="zoom-in") Las plataformas para eventos facilitan herramientas de gestión de cualquier tipo de evento; estas plataformas de eventos son fáciles de usar y simplifican los procesos logísticos que se requieren, a continuación, se presentan:

    .row.mt-5(@click="mostrarIndicador = false")
      .col-lg-4.mb-4.col-md-6
        a.indicador__container(@click="modal1 = true")
          figure
            img(src="@/assets/curso/tema3/23.svg" data-aos="flip-up" alt="Imagen decorativa")
        ModalA(:abrir-modal.sync="modal1")
          .row.align-items-center
            .col-md-6.mb-4.mb-md-0.col-lg-8
              h4.text-white CrowdCast
              p.text-white Pueden hacer videoconferencias y congresos #[em.text-white online]. Cuenta con funciones para preguntas y respuestas.
            .col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/tema3/29.svg' alt="Imagen decorativa")
      .col-lg-4.mb-4.col-md-6
        a.indicador__container(@click="modal2 = true")
          figure
            img(src="@/assets/curso/tema3/24.svg" data-aos="flip-up" alt="Imagen decorativa")
          .indicador--click(v-if="mostrarIndicador")
        ModalA(:abrir-modal.sync="modal2")
          .row.align-items-center
            .col-md-6.mb-4.mb-md-0.col-lg-8
              h4.text-white Zoom
              p.text-white Plataforma intuitiva y fácil de usar. Se pueden transmitir reuniones, conferencias y seminarios web con video, audio y mensajería instantánea. Cuenta con una versión premium que da la posibilidad de tener hasta 1.000 participantes y 10.000 espectadores con herramientas interactivas.
            .col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/tema3/30.svg' alt="Imagen decorativa")
      .col-lg-4.mb-4.col-md-6
        a.indicador__container(@click="modal3 = true")
          figure
            img(src="@/assets/curso/tema3/25.svg" data-aos="flip-up" alt="Imagen decorativa")
        ModalA(:abrir-modal.sync="modal3")
          .row.align-items-center
            .col-md-6.mb-4.mb-md-0.col-lg-8
              h4.text-white LiveStorm
              p.text-white Puedes crear videos en tiempo real, tanto para pequeños negocios como para grandes empresas. Puedes usar esta herramienta para realizar demostraciones de productos, reuniones, seminarios, cursos #[strong #[em online]], capacitaciones o cualquier evento que necesites.
            .col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/tema3/31.svg' alt="Imagen decorativa")
      .col-lg-4.mb-4.col-md-6
        a.indicador__container(@click="modal4 = true")
          figure
            img(src="@/assets/curso/tema3/26.svg" data-aos="flip-up" alt="Imagen decorativa")
        ModalA(:abrir-modal.sync="modal4")
          .row.align-items-center
            .col-md-6.mb-4.mb-md-0.col-lg-8
              h4.text-white Google Meet
              p.text-white Es la aplicación de videoconferencias de Google, para navegadores web y dispositivos móviles, enfocada al entorno laboral. Cuenta con una interfaz sencilla, y para poder crear las reuniones, se debe contar con una cuenta de correo electrónico de Gmail.
            .col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/tema3/32.svg' alt="Imagen decorativa")
      .col-lg-4.mb-4.col-md-6
        a.indicador__container(@click="modal5 = true")
          figure
            img(src="@/assets/curso/tema3/27.svg" data-aos="flip-up" alt="Imagen decorativa")
        ModalA(:abrir-modal.sync="modal5")
          .row.align-items-center
            .col-md-6.mb-4.mb-md-0.col-lg-8
              h4.text-white Microsoft Teams
              p.text-white Diseñada para el trabajo colaborativo en la plataforma en la nube de Microsoft. Cuenta con chats individuales y grupales, conversaciones de equipo, videoconferencias, notas, acceso a contenido compartido, Office Online, Planner, entre otras.
            .col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/tema3/33.svg' alt="Imagen decorativa")
      .col-lg-4.mb-4.col-md-6
        a.indicador__container(@click="modal6 = true")
          figure
            img(src="@/assets/curso/tema3/28.svg" data-aos="flip-up" alt="Imagen decorativa")
        ModalA(:abrir-modal.sync="modal6")
          .row.align-items-center
            .col-md-6.mb-4.mb-md-0.col-lg-8
              h4.text-white StreamYard
              p.text-white Permite tener hasta 6 expositores en vivo, compartir pantalla, y difundir el #[em streaming] por medio de Facebook, YouTube y LinkedIn para tener mayor alcance.
            .col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/tema3/34.svg' alt="Imagen decorativa")
    
    .mt-5.mb-4.p-3(style="max-width:fit-content;min-width:250px;background-color:#B1DE19;border-radius:30px 0px 30px 0px;" data-aos="zoom-in-up")
      h4.mb-0.ps-2.pe-4 Tipos de redes sociales
    
    p(data-aos="zoom-in") Las redes sociales entre otros beneficios sirven para aumentar las relaciones entre los internautas y entre estos y las empresas, también facilitan la creación de grupos con intereses comunes y permite a los usuarios interactuar con el contenido publicado por otros, a continuación se encontrará la descripción de algunas de ellas:

    .tarjeta.tarjeta--gris.p-4.p-md-5.pt-md-4.mt-5.cont_pasos1
      PasosB.color-secundario
        .row(titulo="")
          .col-md-6.mb-4.mb-md-0.col-lg-7
            h5 Masivas
            p Dirigidas al público masivo en general, no se centran en un tema específico. Son las más comunes entre la población. Su principal función es la de establecer relaciones entre sus miembros, que pueden o no conocerse previamente. Las más comunes son Facebook o Twitter.
          .col-md-6.col-lg-5
            figure
              img(src='@/assets/curso/tema3/36.svg' alt="Imagen de redes sociales Facebook, Instagram y Twitter.")
        .row.col-xl-11.m-auto(titulo="")
          .col-md-6.mb-4.mb-md-0.col-lg-7
            h5 Profesionales
            p Se estructuran a través de contenidos orientados a temas laborales o empresariales, son útiles para desarrollar relaciones, recomendaciones y búsqueda de oportunidades laborales o de negocios. Algunas de las más conocidas son LinkedIn o Xing.
          .col-md-6.col-lg-5
            figure
              img(src='@/assets/curso/tema3/37.svg' alt="Imagen de LinkedIn.")
        .row.col-xl-11.m-auto(titulo="")
          .col-md-6.mb-4.mb-md-0.col-lg-7
            h5 De nicho o temáticas
            p Se basan en un tema concreto y establecen relaciones entre usuarios interesados en él. Algunos ejemplos son Flickr, Dribble o Tripwolf.
          .col-md-6.col-lg-5
            figure
              img(src='@/assets/curso/tema3/38.svg' alt="Imagen de tripwolf.")
        .row.col-xl-11.m-auto(titulo="")
          .col-md-6.mb-4.mb-md-0.col-lg-7
            h5 Geolocalización
            p Llevan a socializar por medio de la localización física de los usuarios, Algunas de las más conocidas son Waze o Foursquare.
          .col-md-6.col-lg-5
            figure
              img(src='@/assets/curso/tema3/39.svg' alt="Imagen de Foursquere.")
        .row.col-xl-11.m-auto(titulo="")
          .col-md-6.mb-4.mb-md-0.col-lg-7
            h5 De contenidos
            p En esta categoría los elementos principales para los usuarios son la generación de contenidos y formatos para compartir. Las más importantes son Youtube, Instagram, Vimeo, Pinterest.
          .col-md-6.col-lg-5
            figure
              img(src='@/assets/curso/tema3/40.svg' alt="Imagen de Vimeo.")
        .row.col-xl-11.m-auto(titulo="")
          .col-md-6.mb-4.mb-md-0.col-lg-7
            h5 De entretenimiento y ocio
            p En esta categoría las relaciones de los usuarios, se basan en sus gustos y afinidades, podemos mencionar a Tripadvisor, Runtastic, Strava o Tinder.
          .col-md-6.col-lg-5
            figure
              img(src='@/assets/curso/tema3/41.svg' alt="Imagen de tripadvisor.")
    
    Separador.mt-5

    .titulo-segundo
      h2#t_3_2 3.2  Criterios de publicación
    
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mt-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/42.png')})`}"
      )
      .bloque-texto-g__texto.p-4.p-lg-5
        p.mb-0 Las empresas turísticas deben intentar atraer nuevos usuarios potenciales al ecosistema digital. Una de las estrategias que se pueden adoptar es el #[em marketing] de contenidos, que consiste en publicar contenidos de valor y atractivos en diversos canales y medios digitales a los que los espectadores quieran llegar.

    p.mt-5(data-aos="zoom-in") El #[em marketing] de contenidos permite a las empresas turísticas conectar con sus usuarios objetivo y ampliar su red de leads (usuarios registrados y cualificados) generando el contenido que quieren consumir. Esto agrega valor y atractivo para los usuarios. Cree una visión positiva para su marca, inspire confianza y apoye el proceso de compra. Aquí hay algunos consejos para publicar en una empresa turística:

    .row.mt-4(data-aos="zoom-in")
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/43.svg" alt="Imagen decorativa")
      .col(style="place-self:center;")
        p.mb-0 Definir los objetivos.
    .row.mt-2(data-aos="zoom-in")
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/43.svg" alt="Imagen decorativa")
      .col(style="place-self:center;")
        p.mb-0 Determinar los KPI.
    .row.mt-2(data-aos="zoom-in")
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/43.svg" alt="Imagen decorativa")
      .col(style="place-self:center;")
        p.mb-0 Definir el buyer persona.
    .row.mt-2(data-aos="zoom-in")
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/43.svg" alt="Imagen decorativa")
      .col(style="place-self:center;")
        p.mb-0 Analizar las palabras clave.
    .row.mt-2(data-aos="zoom-in")
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/43.svg" alt="Imagen decorativa")
      .col(style="place-self:center;")
        p.mb-0 Adaptar el contenido al embudo de ventas.
    .row.mt-2(data-aos="zoom-in")
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/43.svg" alt="Imagen decorativa")
      .col(style="place-self:center;")
        p.mb-0 Definir los canales para distribuir el contenido.
    
    Separador.mt-5

    .titulo-segundo
      h2#t_3_3 3.3  Parámetros de actualización

    p(data-aos="zoom-in") La creación de nuevo contenido es un aspecto clave que debe tener en cuenta la empresa turística dentro de su estrategia de mercadeo de contenidos, así como actualizar lo que ya se ha publicado. A continuación, se presentan algunos parámetros de actualización de los contenidos dentro del sitio en línea.

    .tarjeta.tarjeta--azul.p-4.p-md-5.mt-5.pb-md-4
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0.col-lg-7
            h5 Actualizar información
            p La información cambia a gran velocidad y puede ser que lo que la empresa turística público hace algún tiempo, haya tenido alguna modificación, no esté disponible y las tendencias hayan cambiado.  
          .col-md-6.col-lg-5
            figure
              img(src='@/assets/curso/tema3/44.svg' alt="Imagen decorativa")
        .row
          .col-md-6.mb-4.mb-md-0.col-lg-7
            h5 Generar tráfico
            p Cuando el contenido que se publica, no está generando tráfico al sitio web, es necesario revisarlo para identificar si es necesario darle un nuevo enfoque, realizar cambios o si no está siendo relevante para los usuarios. 
          .col-md-6.col-lg-5
            figure
              img(src='@/assets/curso/tema3/45.png' alt="Imagen decorativa")
        .row
          .col-md-6.mb-4.mb-md-0.col-lg-7
            h5 Verificar los enlaces
            p La empresa turística siempre debe verificar el funcionamiento de los enlaces del sitio en línea (internos y externos), para incluir nuevos o para eliminar los que no están brindando información actualizada a los usuarios. 
          .col-md-6.col-lg-5
            figure
              img(src='@/assets/curso/tema3/46.png' alt="Imagen decorativa")
        .row
          .col-md-6.mb-4.mb-md-0.col-lg-7
            h5 Mejora de la calidad
            p Internet es un área altamente competitiva. Como resultado, las empresas turísticas necesitan revisar periódicamente la calidad del contenido que publican para identificar mejoras con el fin de mantener su posición adecuada entre los usuarios y en los motores de búsqueda.
          .col-md-6.col-lg-5
            figure
              img(src='@/assets/curso/tema3/47.svg' alt="Imagen decorativa")
    
    Separador.mt-5

    .titulo-segundo
      h2#t_3_4 3.4  Mapa de contenidos
    
    p(data-aos="zoom-in") De acuerdo con Hernández (2021), “Los mapas de contenido son una herramienta que puede entregar el contenido adecuado a las personas adecuadas en el momento adecuado.” Esto permite a las empresas turísticas, identificar oportunidades para mejorar la estrategia de contenido, entregando contenido valioso a los usuarios y creando secuencias de contenido automatizadas a lo largo del proceso de compra. A la hora de crear un mapa de contenidos, las empresas turísticas deben tener en cuenta los siguientes aspectos:

    .col-xl-8.xol-lg-10.m-auto.mt-5
      .cajon.color-acento-botones2.p-4(style="background-color:#D6EFFF;" data-aos="zoom-in-up")
        p.mb-0 #[strong #[em Buyer] Persona:] las empresas necesitan conocer el dolor del cliente ideal, necesidades, características, intereses, formatos preferidos, etc., al momento de consumir contenido. 
        p.mb-0 #[strong Proceso de compra:] las empresas necesitan identificar las diversas fases por las que pasa un cliente ideal, desde la identificación de necesidades hasta la compra.







</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false,
    modal6: false,
    mostrarIndicador: true,
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
.acordion .tarjeta--azul
  background-color: #FFF4E1
.tarjeta.tarjeta--azul.acordion__activo
  background-color: #FFE4B9
.tabs-a__tab
  background-color: #E8E8E8
.slyder-a__bullets__item
  background-color: #9DCEF8
.slyder-a__bullets__item--active
  background-color: #2892F7 !important
  border-color: #2892F7
.modal-a--abierto .modal-a__content
  background-color: #004E99
.modal-a__close-btn i
  color: #fff
.cont_pasos1
  background: url(../assets/curso/tema3/35.png)
  background-size: cover
  background-repeat: no-repeat
.bloque-texto-g.color-secundario
  background-color: #3D672F
.cajon.color-acento-botones2:before
  background-color: #73BAE8
</style>
