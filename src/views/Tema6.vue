<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-up")
      .titulo-principal__numero
        span 6
      h1 #[em Big data]

    .row
      .col-lg.mb-4.mb-lg-0
        .cajon.color-primario.p-4(style="background-color:#FFF7E5;box-shadow:0px 4px 8px rgba(0,0,0,.1);" data-aos="zoom-in-right")
          p.mb-0 #[em Big data] hace referencia a grandes cantidades de datos estructurados y no estructurados. Se trata de una gran cantidad de datos muy complejos que con ninguna herramienta tradicional de administración de datos se pueden almacenar o procesar de manera eficiente. 
          p.mt-4 Hoy en día, más de 7 mil millones de dispositivos intercambian información a través de Internet, se estima que este número aumentará a 20.000 para 2025. En este sentido, el #[em big data] se encarga de analizar esta gran cantidad de datos y convertirlos en información más fácil de interpretar.
        p.mt-4(data-aos="zoom-in") A continuación, se verá la historia de la #[em big data]:
      .col-lg
        figure
          img(src="@/assets/curso/tema6/1.png" data-aos="zoom-in-left" alt="Imagen decorativa")
    
    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    Separador.mt-5

    .titulo-segundo
      h2#t_6_1 6.1 Técnicas de búsqueda
    
    .row
      .col-lg.mb-4.mb-lg-0
        .cajon.color-primario.p-4(style="background-color:#FFF7E5;box-shadow:0px 4px 8px rgba(0,0,0,.1);" data-aos="zoom-in-right")
          p.mb-0 Las técnicas de búsqueda son una serie de esquemas de representación del conocimiento, que mediante diversos algoritmos permite resolver ciertos problemas desde el punto de vista de la inteligencia artificial, los elementos que integran las técnicas de búsqueda son:
        .row.mt-4(data-aos="zoom-in")
          .col-auto.pe-0(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema6/2.svg" alt="Imagen decorativa")
          .col(style="place-self:center;")
            p.mb-0 #[strong Conjunto de estados:] todas las configuraciones posibles en el dominio.
        .row.mt-2(data-aos="zoom-in")
          .col-auto.pe-0(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema6/2.svg" alt="Imagen decorativa")
          .col(style="place-self:center;")
            p.mb-0 #[strong Estados iniciales:] estados desde los que se parte.
        .row.mt-2(data-aos="zoom-in")
          .col-auto.pe-0(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema6/2.svg" alt="Imagen decorativa")
          .col(style="place-self:center;")
            p.mb-0 #[strong Estados finales:] las soluciones del problema.
        .row.mt-2(data-aos="zoom-in")
          .col-auto.pe-0(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema6/2.svg" alt="Imagen decorativa")
          .col(style="place-self:center;")
            p.mb-0 #[strong Operadores:] se aplican para pasar de un estado a otro.
        .row.mt-2(data-aos="zoom-in")
          .col-auto.pe-0(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema6/2.svg" alt="Imagen decorativa")
          .col(style="place-self:center;")
            p.mb-0 #[strong Solucionador:] mecanismo que permite evolucionar de un estado a otro mediante un algoritmo aplicando los siguientes pasos:
        ol.lista-ol--cuadro.mt-4.ps-md-4
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta
              span 1
            | Elegir el estado a explorar.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta
              span 2
            | Establecer un operador que trabaje sobre el estado elegido en el paso 1.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta
              span 3
            | Comprobar si el resultado obtenido es un estado final (es una solución del problema) si no, ir al paso 1.
      .col-lg
        figure
          img(src="@/assets/curso/tema6/3.png" data-aos="zoom-in-left" alt="Imagen decorativa")
    
    p.mt-5(data-aos="zoom-in") Existen algunos métodos de búsqueda como:

    ol.lista-ol--cuadro.lista-ol--separador.mt-4
      li.d-flex(data-aos="fade-up")
        .lista-ol--cuadro__vineta(style="background-color:#3BC192;")
          span 1
        div #[strong Búsqueda ciega:] el orden en que se realizan las búsquedas no depende de la naturaleza de la solución que se esté buscando. La posición de destino no cambia el orden de expansión del nodo, esta estrategia solo considera las prioridades entre estados. Los métodos más conocidos son: búsqueda en amplitud y búsqueda en profundidad.
      li.d-flex(data-aos="fade-up")
        .lista-ol--cuadro__vineta(style="background-color:#3BC192;")
          span 2
        div #[strong Búsqueda heurística o inteligente:] está dispone alguna información sobre la proximidad de cada estado al estado de destino. Esta situación les permite encontrar primero el camino más prometedor.
    .row.mt-4(data-aos="zoom-in")
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema6/2.svg" alt="Imagen decorativa")
      .col(style="place-self:center;")
        p.mb-0 Incluso si hay una solución, no garantiza que se encontrará una solución 100 % efectiva.
    .row.mt-2(data-aos="zoom-in")
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema6/2.svg" alt="Imagen decorativa")
      .col(style="place-self:center;")
        p.mb-0 Cuando encuentran una solución, no está claro si tiene las mejores características. 
    .row.mt-2(data-aos="zoom-in")
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema6/2.svg" alt="Imagen decorativa")
      .col(style="place-self:center;")
        p.mb-0  En algunos casos (normalmente no predeterminados), puede encontrar una solución (razonablemente buena) en un tiempo razonable.
    
    Separador.mt-5

    .titulo-segundo
      h2#t_6_2 6.2  Organización
    
    p(data-aos="zoom-in") La organización de datos se refiere en términos generales a los métodos de clasificación y organización para hacer un mejor uso de los activos de datos, sin embargo, la organización de los datos es un análisis de datos relativamente estructurados y no estructurados:

    .row.mt-4
      .col-lg-5.mb-4.mb-md-0.col-md-6
        figure
          img(src="@/assets/curso/tema6/4.png" data-aos="zoom-in-right" alt="Imagen decorativa")
      .col-lg-7.col-md-6
        .row(data-aos="zoom-in")
          .col-auto.pe-0
            figure
              img.mt-2(src="@/assets/curso/tema6/2.svg" alt="Imagen decorativa")
          .col
            p.mb-0 Los datos estructurados consisten en datos organizados en tablas, que se pueden integrar fácilmente en una base de datos y desde allí en #[em software] analítico y otras aplicaciones especializadas. 
        .row.mt-2(data-aos="zoom-in")
          .col-auto.pe-0
            figure
              img.mt-2(src="@/assets/curso/tema6/2.svg" alt="Imagen decorativa")
          .col
            p.mb-0 Los datos no estructurados son datos sin formato, el tipo de datos que se encuentran en documentos de texto sin formato con nombres, fechas y otra información dispersa en párrafos aleatorios. Estos son algunos ejemplos de datos no estructurados: 
        ul.lista-ul.mt-4.ps-md-4(data-aos="fade-up")
          li.d-flex
            i.fas.fa-chevron-right(style="color:#B1DE19;")
            | Medios de comunicación ricos. Datos de medios y entretenimiento, datos de vigilancia, datos geoespaciales, audio, datos meteorológicos y colección de documentos. Facturas, registros, correos electrónicos, aplicaciones de productividad. 
          li.d-flex
            i.fas.fa-chevron-right(style="color:#B1DE19;")
            | Datos de sensores de Internet de las cosas, datos de cotizaciones.
    
    p.mt-5(data-aos="zoom-in") Los expertos han desarrollado herramientas y recursos técnicos para procesar datos relativamente no estructurados e integrarlos en el entorno de datos general. 

    Separador.mt-5

    .titulo-segundo
      h2#t_6_3 6.3 Jerarquización
    
    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema6/5.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Una jerarquía de datos es donde los datos se conectan a una capa de datos y conduce a una capa de datos, que conduce a otra capa debajo de ella. Cada capa se vuelve más específica hasta que el usuario encuentra exactamente lo que necesita. No solo se usa para ayudar a los usuarios a encontrar información, sino que también se usa para generar la respuesta correcta a partir de un lenguaje de programación basado en la entrada del usuario. 
    
    .col-xl-8.m-auto.mt-5.col-lg-10
      .cajon.p-4.color-acento-contenido(style="background-color:#CDF0E4;" data-aos="flip-up")
        p.mb-0 Las jerarquías de datos se usan más comúnmente para catalogar los datos en una base de datos, pero también se pueden encontrar en otros esquemas de programación.
    
    .row.mt-5
      .col-md-6.mb-4.mb-md-0
        p(data-aos="zoom-in") En este sentido, es de aclarar que cada pieza de datos tiene su propio rango o escalafón, desde una amplia gama de niveles superiores hasta ciertos niveles inferiores. Por ejemplo, supongamos que alguien quiere encontrar el título de un videojuego en una base de datos. La jerarquía comienza con el tipo de consola de videojuegos, el desarrollador del juego, el género, el acrónimo del nombre del juego y, finalmente, el juego en sí. Catalogar sus datos de esta manera hace que sea más fácil encontrarlos. También facilita la base de datos cuando se agrega nueva información al garantizar que los datos se ingresen solo en la categoría correcta.
        p.mt-4(data-aos="zoom-in") Cada base de datos tiene una jerarquía de datos, pero normalmente el programa es diferente según el modelo de la base de datos, al organizar los datos en jerarquías separadas, puede agregarlos fácilmente a su base de datos o lenguaje de programación. Si un programador quiere agregar un nuevo juego para la consola a la base de datos del juego, puede ser difícil de organizar porque los desarrolladores de juegos suelen operar varias consolas diferentes al mismo tiempo. El seguimiento de la jerarquía le dirá exactamente dónde colocar estos nuevos datos.
      .col-md-6
        figure
          img(src="@/assets/curso/tema6/6.png" data-aos="zoom-in-left" alt="Imagen decorativa")
    
    Separador.mt-5

    .titulo-segundo
      h2#t_6_4 6.4 Clasificación de datos
    
    .row
      .col-lg.mb-4.mb-lg-0
        .cajon.color-primario.p-4.h-100.d-flex.flex-wrap.align-content-center(style="background-color:#FFF7E5;box-shadow:0px 4px 8px rgba(0,0,0,.1);" data-aos="zoom-in-right")
          p.mb-0 Las implementaciones de la gestión de información, especialmente la clasificación de datos, varían según el tipo de organización. La clasificación de datos le permite identificar y evaluar los datos de su organización y proporcionar un punto de partida común para la gobernanza. El proceso de clasificación de datos organiza los datos por confidencialidad e impacto comercial para identificar riesgos. Al clasificar sus datos, puede administrarlos de una manera que evite el robo o la pérdida de datos confidenciales o confidenciales.
      .col-lg
        figure
          img(src="@/assets/curso/tema6/7.png" data-aos="zoom-in-left" alt="Imagen decorativa")
    
    Separador.mt-5

    .titulo-segundo
      h2#t_6_5 6.5  Métodos de normalización 
    
    .row
      .col-lg-7.mb-4.mb-md-0.col-md-6
        p(data-aos="zoom-in") La normalización es una técnica comúnmente utilizada en la preparación de datos de aprendizaje automático. El objetivo de la normalización es cambiar los valores en una columna numérica de un conjunto de datos para compartir una escala común sin distorsionar las diferencias en el rango de valores o perder información. Algunos algoritmos también requieren normalización para modelar correctamente los datos.
      .col-lg-5.col-md-6
        .cajon.p-4.color-acento-contenido(style="background-color:#CDF0E4;" data-aos="flip-up")
          p.mb-0 La normalización resuelve estos problemas mediante la creación de nuevos valores que mantienen la distribución general y las relaciones de los datos de origen al tiempo que conserva los valores en la escala que se aplican a todas las columnas numéricas utilizadas en el modelo de datos.

    p.mt-4(data-aos="zoom-in") Un buen ejemplo de esto es la normalización de direcciones, especialmente de códigos postales. Esto es importante porque ayuda a enriquecer la base de datos a través de la geolocalización. Es tan importante cuando los clientes brindan información sobre su perfil directamente, como en un formulario, como en el caso del mapeo putativo de indicadores tipográficos o de comportamiento vinculados a su ubicación geográfica.
    p.mt-4(data-aos="zoom-in") En las primeras etapas de trabajo, la calidad de los datos es baja. La recopilación de datos reales sin estándares da como resultado datos incompletos, aislados, inexactos y poco saludables, es decir, algunos datos no se pueden utilizar para sacar conclusiones y mejorar las decisiones empresariales. Pero la solución es ir paso a paso en lugar de repetirlos. Aquí, se presentarán tres tecnologías de procesamiento de datos:
    .row.mt-4(data-aos="zoom-in")
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema6/2.svg" alt="Imagen decorativa")
      .col(style="place-self:center;")
        p.mb-0 #[strong #[em Data cleaning:]] limpieza de datos, eliminación el ruido de la maestra, resolviendo inconsistencias en los datos. 
    .row.mt-2(data-aos="zoom-in")
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema6/2.svg" alt="Imagen decorativa")
      .col(style="place-self:center;")
        p.mb-0 #[strong #[em Data integration:]] cuando se procesan grandes cantidades de información, los datos se trasladan a una fuente de información centralizada para la empresa. Esto se llama un almacén de datos. 
    .row.mt-2(data-aos="zoom-in")
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema6/2.svg" alt="Imagen decorativa")
      .col(style="place-self:center;")
        p.mb-0 #[strong #[em Data transformation:]] la transformación de datos permite la normalización de todo tipo de datos.
    
    Separador.mt-5

    .titulo-segundo
      h2#t_6_6 6.6  Técnicas de extracción de información
    
    .row
      .col-lg-4.mb-4.mb-md-0.col-md-6(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema6/8.png" data-aos="zoom-in-right" alt="Imagen decorativa")
      .col-lg-8.col-md-6(style="place-self:center;")
        p(data-aos="zoom-in") La gestión de datos se ha convertido en un desafío debido al aumento significativo de datos no estructurados. Para el análisis, los datos deben convertirse a un formato legible por máquina. Sin embargo, la creciente importancia de la toma de decisiones basada en datos ha cambiado la forma en que los gerentes toman decisiones estratégicas. Las investigaciones muestran que las empresas que toman decisiones basadas en datos son entre un 5 y un 6 % más productivas, por ello, es importante utilizar herramientas para la extracción de datos. 
        p.mt-4(data-aos="zoom-in") Sin embargo, se puede definir la extracción de datos como: el proceso de extraer y recopilar datos de fuentes semiestructuradas y no estructuradas, como correo electrónico, documentos y formularios PDF, archivos de texto, redes sociales, códigos de barras e imágenes. ¿Cómo se realiza la extracción de datos no estructurados? Las herramientas de extracción de datos de clase empresarial le permiten usar datos comerciales entrantes de fuentes no estructuradas o semiestructuradas para el análisis de datos y la generación de informes.
    
    p.mt-3(data-aos="zoom-in") Extraer datos, especialmente de los archivos PDF, es un poco complejo pues porque está pensado para ser analizado por una persona, mientras que para una máquina, es importante que los datos se encuentren de forma estructurada para su posterior análisis e integración con otras aplicaciones de TI. 
    p.mt-4(data-aos="zoom-in") Optar por una herramienta de extracción de datos adecuada, debe cumplir con ciertos requisitos, desde la preparación de los datos hasta generar informes con el que se pueda tomar decisiones, por lo que se debe considerar: 

    .row.mt-4(data-aos="zoom-in")
      .col-auto.pe-0
        figure
          img(src="@/assets/curso/tema6/2.svg" alt="Imagen decorativa")
      .col
        p.mb-0 Extraer datos e información de documentos de varios formatos como PDF, DOC, DOCX, TXT, RTF, entre otros.
    .row.mt-2(data-aos="zoom-in")
      .col-auto.pe-0
        figure
          img(src="@/assets/curso/tema6/2.svg" alt="Imagen decorativa")
      .col
        p.mb-0 Extracción de datos en tiempo real para análisis de macrodatos, en el que se extraiga información mediante flujos de trabajo automatizados para preparar los datos rápidamente a un #[em business intelligence]. 
    .row.mt-2(data-aos="zoom-in")
      .col-auto.pe-0
        figure
          img(src="@/assets/curso/tema6/2.svg" alt="Imagen decorativa")
      .col
        p.mb-0 Plantillas reutilizables con #[em software] de extracción de informes, en el que el usuario construye su propia lógica de extracción. 
    .row.mt-2(data-aos="zoom-in")
      .col-auto.pe-0
        figure
          img(src="@/assets/curso/tema6/2.svg" alt="Imagen decorativa")
      .col
        p.mb-0 Calidad de datos integrada y funcionalidad de limpieza de acuerdo con parámetros definidos por el usuario. 
    .row.mt-2(data-aos="zoom-in")
      .col-auto.pe-0
        figure
          img(src="@/assets/curso/tema6/2.svg" alt="Imagen decorativa")
      .col
        p.mb-0 Interfaz de fácil utilización en el diseño de plantillas de extracción de datos. 
    .row.mt-2(data-aos="zoom-in")
      .col-auto.pe-0
        figure
          img(src="@/assets/curso/tema6/2.svg" alt="Imagen decorativa")
      .col
        p.mb-0 Exportar datos a destinos ampliamente utilizados como SQL Server, Oracle, PostgreSQL y varias herramientas de BI como Tableau.
    
    Separador.mt-5

    .titulo-segundo
      h2#t_6_7 6.7  Técnicas de validación
    
    p(data-aos="zoom-in") El proceso de validación consiste en determinar si los resultados digitales que cuantifican las relaciones hipotéticas entre variables son aceptables como explicación de los datos. Una de las técnicas más utilizadas es la “validación cruzada". Este método también es un método de "remuestreo", que le permite evaluar un modelo con datos limitados. 
    p.mt-4(data-aos="zoom-in") Antes de que se pueda realizar "CV" (#[em cross-validation]), se debe reservar algunos de los datos en la serie de datos de entrenamiento. Estos datos no se utilizarán para entrenar el modelo, pero se utilizarán más adelante para realizar pruebas y validaciones, este método se usa para comparar diferentes modelos y seleccionar el modelo más apropiado para un problema en particular. Esta técnica es más fácil de entender e implementar, además se sesga menos que otros métodos. En el siguiente artículo de Microsoft titulado “Modelo de validación cruzada” se podrá profundizar más en este método:

    .col-xl-10.m-auto.mt-5
      .p-4(data-aos="flip-up" style="background-color:#FFECBE;border-radius:15px;")
        .row.m-0
          .col-lg-2.col-md-3.mb-4.mb-md-0(style="place-self:center;")
            figure.text-center
              img(src="@/assets/curso/tema6/9.svg" style="display:inline;max-width:80px;" alt="Imagen decorativa")
          .col-lg-7.col-md-6.mb-4.mb-md-0(style="place-self:center;")
            p.mb-0 Para profundizar en el tema se sugiere la lectura del documento #[strong #[em “Modelo de validación cruzada”]] disponible en el siguiente enlace.
          .col-lg-3.col-md-3.text-center(style="place-self:center;")
            a.boton.color-acento-botones(href="https://docs.microsoft.com/es-es/azure/machine-learning/component-reference/cross-validate-model" target="_blank")
              span Ir a página
              i.fas.fa-link
    
    Separador.mt-5

    .titulo-segundo
      h2#t_6_8 6.8  Seguridad de la información
    
    p(data-aos="zoom-in") Cuando se habla sobre la seguridad de la información, se señala que esta información es particularmente relevante para un contexto particular y necesita ser protegida, pues desde la llegada de los sistemas de aislamiento a gran escala hasta el día en que las redes se convirtieron en lo habitual, los problemas de seguridad de la información han cambiado y evolucionado y adaptándose a los nuevos requisitos técnicos.

    .row.mt-4
      .col-lg-4.mb-4.mb-md-0.col-md-6
        figure
          img(src="@/assets/curso/tema6/10.png" data-aos="zoom-in-right" alt="Imagen de persona trabajando en computador donde muestra en la parte posterior diferentes lugares del mundo señalados con seguridad de la información")
      .col-lg-8.col-md-6
        .cajon.p-4.color-acento-contenido(style="background-color:#CDF0E4;" data-aos="flip-up")
          p.mb-0 Por tanto, en la norma ISO/IEC 27001 y fue aprobada y publicada por la Organización Internacional de Normalización (ISO) y la Comisión Electrotécnica Internacional (IEC) en octubre de 2005, se definió la seguridad de la información como un conjunto de medios técnicos, organizativos y legales que permiten a una organización garantizar la confidencialidad, integridad y disponibilidad de un sistema de información, el cual es un activo que necesita más protección que limitan el acceso únicamente a las personas autorizadas, el cual debe considerar los tres tipos de información crítica, valiosa y sensible.
          p.mt-4.mb-0 Con esta norma, se garantiza el acceso y protección de la información de acuerdo con los lineamientos establecidos en este mismo estándar. En otras palabras, debe generar confianza y proveer los mecanismos de acceso y tratamiento de la información almacenada entre dispositivos, usuarios, información, ya sea #[em hardware] o #[em software]. Para ello se utilizarán contraseñas de acceso individuales y cada trabajador tendrá claves intransferibles. Debe ser crítica, valiosa, sensible y tiene que abordar los riesgos, para estudiarlos y ofrecer medidas de prevención y técnicas para eliminar los riesgos. 
    
    p.mt-4(data-aos="zoom-in") La seguridad de la información a la empresa beneficia en: 
    .row.mt-4(data-aos="zoom-in")
      .col-auto.pe-0
        figure
          img(src="@/assets/curso/tema6/2.svg" alt="Imagen decorativa")
      .col
        p.mb-0 Promover las ventas.
    .row.mt-2(data-aos="zoom-in")
      .col-auto.pe-0
        figure
          img(src="@/assets/curso/tema6/2.svg" alt="Imagen decorativa")
      .col
        p.mb-0 Aumentar la confianza del cliente en los servicios prestados.
    .row.mt-2(data-aos="zoom-in")
      .col-auto.pe-0
        figure
          img(src="@/assets/curso/tema6/2.svg" alt="Imagen decorativa")
      .col
        p.mb-0 Brindar una imagen corporativa segura. 
    
    p.mt-5(data-aos="zoom-in") La seguridad de la información es muy importante para la organización, necesita controles y estándares, en el siguiente video se profundizará en el tema:

    .col-xl-10.m-auto.mt-5
      .p-4(data-aos="flip-up" style="background-color:#FFECBE;border-radius:15px;")
        .row.m-0
          .col-lg-2.col-md-3.mb-4.mb-md-0(style="place-self:center;")
            figure.text-center
              img(src="@/assets/curso/tema1/9.svg" style="display:inline;max-width:80px;" alt="Imagen decorativa")
          .col-lg-7.col-md-6.mb-4.mb-md-0(style="place-self:center;")
            p.mb-0 Se sugiere explorar el video #[strong #[em “Controles y estándares para el manejo de la seguridad de la información”]].
          .col-lg-3.col-md-3.text-center(style="place-self:center;")
            a.boton.color-acento-botones(href="https://youtu.be/n6Dffo75ts0" target="_blank")
              span Ver video
              i.fas.fa-play
    
    p.mt-5(data-aos="zoom-in") Cabe señalar que hasta hace tantos años, este aspecto era solo un valor agregado, sin embargo, no se convirtió en uno de los pilares de la organización para proteger la información, por lo tanto, es necesario implementar herramientas y procesos para garantizar su protección y una gestión adecuada, una de las técnicas de protección más importantes y básicas para implementar la ciberseguridad es un o cortafuegos o #[em firewall].

    .col-xl-10.m-auto.mt-5
      .p-4(data-aos="flip-up" style="background-color:#FFECBE;border-radius:15px;")
        .row.m-0
          .col-lg-2.col-md-3.mb-4.mb-md-0(style="place-self:center;")
            figure.text-center
              img(src="@/assets/curso/tema1/9.svg" style="display:inline;max-width:80px;" alt="Imagen decorativa")
          .col-lg-7.col-md-6.mb-4.mb-md-0(style="place-self:center;")
            p.mb-0 Se sugiere explorar el video  #[strong #[em “Firewall”]] para profundizar en el tema.
          .col-lg-3.col-md-3.text-center(style="place-self:center;")
            a.boton.color-acento-botones(href="https://youtu.be/HcQtLHiepto" target="_blank")
              span Ver video
              i.fas.fa-play
    
    Separador.mt-5

    .titulo-segundo
      h2#t_6_9 6.9  Gestión de la información
    
    p(data-aos="zoom-in") La información se utiliza para abordar las necesidades de su organización, ya sea una decisión, un proceso o una parte interesada, para apoyar la toma de decisiones con base en información extraída de fuentes autorizadas, es necesario fomentar el desarrollo de habilidades analíticas en quienes definen políticas, estrategias, mecanismos de seguimiento, evaluación y control. Además, este proceso requiere herramientas para monitorear, analizar, presentar y publicar información de acuerdo con su ciclo de vida y a diferentes civiles y grupos objetivo. La gestión de la información debe considerar los siguientes supuestos: 

    .row.mt-4(data-aos="zoom-in")
      .col-auto.pe-0
        figure
          img.mt-2(src="@/assets/curso/tema6/2.svg" alt="Imagen decorativa")
      .col
        p.mb-0 Información de una sola fuente. 
    .row.mt-2(data-aos="zoom-in")
      .col-auto.pe-0
        figure
          img.mt-2(src="@/assets/curso/tema6/2.svg" alt="Imagen decorativa")
      .col
        p.mb-0 Información de calidad.
    .row.mt-2(data-aos="zoom-in")
      .col-auto.pe-0
        figure
          img.mt-2(src="@/assets/curso/tema6/2.svg" alt="Imagen decorativa")
      .col
        p.mb-0 La información como bien público.
    .row.mt-2(data-aos="zoom-in")
      .col-auto.pe-0
        figure
          img.mt-2(src="@/assets/curso/tema6/2.svg" alt="Imagen decorativa")
      .col
        p.mb-0 Información en tiempo real.
    .row.mt-2(data-aos="zoom-in")
      .col-auto.pe-0
        figure
          img.mt-2(src="@/assets/curso/tema6/2.svg" alt="Imagen decorativa")
      .col
        p.mb-0 La información como servicio.

    p.mt-4(data-aos="zoom-in") En el contexto de una organización, la gestión de la información se puede identificar como un área de toda responsabilidad relacionada con la obtención de la información correcta de la manera acertada, para las personas interesadas, al costo más idóneo y en el momento oportuno. Clarificación del lugar adecuado para el desarrollo del comportamiento correcto y todas estas operaciones. En este contexto, los objetivos principales de la gestión de la información son maximizar el valor y los beneficios del uso de la información, minimizar los costos de obtener, procesar y usar la información de manera eficaz, eficiente y rentable. 
    p.mt-4(data-aos="zoom-in") La gestión de la información permanece estrechamente relacionada con el campo de la gestión del conocimiento en el contexto de la organización, el cual se centra en los procesos relacionados con la preservación, procesamiento y difusión del conocimiento explícito que se muestra en los documentos, por tanto, debe garantizar:

    figure.mt-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/SJD6Na2bWOE" title="Gestión de la información" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


      
</template>

<script>
export default {
  name: 'Tema6',
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
.cajon.color-acento-contenido:before
  background-color: #3BC192
</style>
