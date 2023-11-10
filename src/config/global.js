export default {
  global: {
    componenteFormativo: 'Conceptos de producción de contenido digital',
    descripcionCurso:
      'El diseño gráfico les permite a las empresas turísticas, desarrollar estrategias de comunicación visual para transmitir a sus usuarios su marca, valores, propuestas de valor, productos y/o servicios, entre otros; por medio de un mensaje eficaz e inmediato.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Diseño gráfico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Fundamentos de diseño gráfico',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Herramientas y técnicas de elaboración de piezas gráficas',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Otras herramientas de diseño',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Herramienta para la creación de audio',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Comunicación visual',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Publicación online para empresas turísticas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Plataforma de publicación',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Criterios de publicación',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Parámetros de actualización',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Mapa de contenidos',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Audiencias',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Identificación de audiencias',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Segmentación demográfica de las audiencias',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Segmentación por compras, uso o consumo',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Segmentación basada en la plataforma',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: '<em>Chatbots</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: '¿Qué son los <em>chatbots</em>?',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Tipos de <em>chatbots</em>',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Ventajas y desventajas',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: '<em>Big data</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Técnicas de búsqueda',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Organización',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Jerarquización',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Clasificación de datos',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Métodos de normalización',
            hash: 't_6_5',
          },
          {
            numero: '6.6',
            titulo: 'Técnicas de extracción de información',
            hash: 't_6_6',
          },
          {
            numero: '6.7',
            titulo: 'Técnicas de validación',
            hash: 't_6_7',
          },
          {
            numero: '6.8',
            titulo: 'Seguridad de la información',
            hash: 't_6_8',
          },
          {
            numero: '6.9',
            titulo: 'Gestión de la información',
            hash: 't_6_9',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: '<em>Business Intelligence</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Características',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Datos estructurados',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Datos no estructurados',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo: 'Datos semiestructurados',
            hash: 't_7_4',
          },
          {
            numero: '7.5',
            titulo: 'Datos internos',
            hash: 't_7_5',
          },
          {
            numero: '7.6',
            titulo: 'Datos externos',
            hash: 't_7_6',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: '<em>Big data marketing</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Concepto en la toma de decisiones',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: ' Características del <em>big data marketing</em>',
            hash: 't_8_2',
          },
        ],
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'PQRS',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '9.1',
            titulo: 'Características',
            hash: 't_9_1',
          },
          {
            numero: '9.2',
            titulo: 'Gestión de PQRS',
            hash: 't_9_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Fundamentos de diseño gráfico',
      referencia:
        'Hassler Castro. (2020). Validación cruzada. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/B9cfaD721Tk',
    },
    {
      tema: 'Seguridad de la información',
      referencia: 'ISO 2701. (s.f.). NORMA ISO 27001.',
      tipo: 'Artículo',
      link: 'https://normaiso27001.es/',
    },
    {
      tema: 'Seguridad de la información',
      referencia:
        'Ministerio TIC Colombia. (2021). Normatividad de seguridad y privacidad de la información. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/D5bHKmSwwUQ',
    },
    {
      tema: 'Fundamentos de diseño gráfico',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). Reglas básicas para el diseño. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.YouTube.com/watch?v=Tl7FBNujWyI',
    },
    {
      tema: 'Fundamentos de diseño gráfico',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). Psicología del color: significado de colores en la publicidad. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.YouTube.com/watch?v=UWSe5bCGNhs',
    },
    {
      tema: 'Herramientas y técnicas de elaboración de piezas gráficas',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). Figma. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.YouTube.com/watch?v=p2P3ETt_hcs&t=5s',
    },
    {
      tema: 'Herramientas y técnicas de elaboración de piezas gráficas',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). Creación de marca. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.YouTube.com/watch?v=3RHnB9izZ_8',
    },
    {
      tema: 'Herramientas y técnicas de elaboración de piezas gráficas',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). Creación de piezas. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.YouTube.com/watch?v=VDC5rltd8Vw&t=61s',
    },
    {
      tema: 'Herramienta para la creación de audio',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). Conoce que es el Audacity. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.YouTube.com/watch?v=66cRVRhTWf4',
    },
    {
      tema: 'Herramienta para la creación de audio',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). Creación de audio. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.YouTube.com/watch?v=cgqq8gDEPHM',
    },
    {
      tema: 'Comunicación visual',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). Capcut. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.YouTube.com/watch?v=Ngv9Q--VLBA&t=3s',
    },
    {
      tema: 'Creación de video',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). Creación de video. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.YouTube.com/watch?v=erk3tP-avF8',
    },
    {
      tema: 'Creación de video',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). Conceptualización del desarrollo multimedia y web: introducción. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.YouTube.com/watch?v=i74TnksLTcs',
    },
    {
      tema: 'Mapa de contenidos',
      referencia:
        'InboundCycle - Marketing y ventas inbound.. (2021). <em>Content Mapping</em> o Mapa de Contenidos: ¿qué es? [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.YouTube.com/watch?v=ct05j0hGTNw&t',
    },
    {
      tema: 'Identificación de audiencias',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2020). <em>Buyer</em> persona y plan de comunicación digital. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.YouTube.com/watch?v=NtXnXMx6TcQ',
    },
    {
      tema: 'Segmentación basada en la plataforma',
      referencia:
        'MES academy. (2017). ¿Cómo definir tu audiencia en la estrategia de Marketing digital? Lección 6. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=kWr3fGMHYyI',
    },
    {
      tema: 'Técnicas de búsqueda',
      referencia: 'Mecatrónica UX. (2020). Búsqueda por amplitud o anchura.',
      tipo: 'Video',
      link: 'https://youtu.be/dfvgNztUhrc',
    },
    {
      tema: 'Técnicas de búsqueda',
      referencia:
        'Diego Torre. (2020). Búsqueda en Profundidad. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/UYtnHmls2ec',
    },
    {
      tema: 'Clasificación de datos',
      referencia:
        'Flavio Palma. (2018). Clasificación de Datos – Estadística. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/zpUuZuzQqWI',
    },
    {
      tema: 'Seguridad de la información',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). Seguridad de la información. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/OC8x73OfV6s',
    },
    {
      tema: 'Seguridad de la información',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022). Controles y estándares para el manejo de la seguridad de la información. [Video].',
      tipo: 'Video',
      link: 'https://youtu.be/n6Dffo75ts0',
    },
    {
      tema: 'Seguridad de la información',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022). Firewall. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/HcQtLHiepto',
    },
    {
      tema: 'Datos estructurados',
      referencia:
        'Weborganico - Javier Cantero. (2021). ¿Qué son los datos estructurados (<em>schema</em>) y como nos ayuda al SEO? [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/imB0TP1rIsA',
    },
    {
      tema: 'PQRS',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022). Atención PQR: introducción. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/PSiBtkl75Hc',
    },
  ],
  glosario: [
    {
      termino: 'Audiencia',
      significado:
        'cantidad de público al que se pretende hacer llegar un mensaje de la marca para generar interacción.',
    },
    {
      termino: 'Diseño gráfico',
      significado:
        'el arte y proceso de combinar texto e imágenes (figuras, fotografías, dibujos…) para comunicar un mensaje de forma efectiva.',
    },
    {
      termino: 'Marca',
      significado:
        'es una categoría de signo distintivo que identifica los productos o servicios de una empresa o empresario.',
    },
  ],
  referencias: [
    {
      referencia:
        'A, D. (2021). <em>Cómo crear una página web paso a paso – Guía completa</em>. ',
      link: 'https://www.hostinger.co/tutoriales/como-crear-una-pagina-web/ ',
    },
    {
      referencia:
        'Bello, E. (s.f.). <em>Qué es la analítica web, para qué sirve y principales herramientas</em>. ',
      link:
        'https://www.iebschool.com/blog/herramientas-analisis-web-analitica-usabilidad',
    },
    {
      referencia:
        'Cabrera, M. (2017). <em>¿Qué es un certificado de seguridad y de qué tipos hay?</em> ',
      link:
        'https://www.nubedigital.mx/flexo/post/que-es-un-certificado-de-seguridad-y-de-que-tipos-hay ',
    },
    {
      referencia:
        'Capella, M. (2020). <em>Posicionamiento web o SEO: cómo posicionar tu página web en Google en 9 pasos</em>. ',
      link:
        'https://www.inboundcycle.com/blog-de-inbound-marketing/como-posicionar-mi-web-5-pasos-para-ser-top-1-en-google ',
    },
    {
      referencia:
        'Coppola, M. E. (s.f.). <em>Qué es un diseño responsive: características y ejemplos</em>. ',
      link: 'https://blog.hubspot.es/marketing/diseno-responsive ',
    },
    {
      referencia:
        'Fatino, J. (2022). <em>¿Qué es el desarrollo web?: Guía para detectar el desarrollador web que vive en ti</em>. ',
      link:
        'https://www.crehana.com/co/blog/desarrollo-web/que-es-desarrollo-web/ ',
    },
    {
      referencia: 'Iberdrola. (s.f.).<em>Iberdrola</em>. ',
      link: 'https://www.iberdrola.com/innovacion/que-es-accesibilidad-web ',
    },
    {
      referencia: 'Inboundcycle. (s.f.). <em>Accesibilidad web</em>. ',
      link:
        'https://www.inboundcycle.com/diccionario-marketing-online/usabilidad-web ',
    },
    {
      referencia:
        'Kaushik, A. (2010). <em>Analítica web 2.0 El arte de analizar resultados y la ciencia de centrarse en el cliente</em>. Gestión 2000.',
      link: '',
    },
    {
      referencia:
        'Rock Content. (2019). <em>¿Qué son las cookies y para qué sirven en Internet?</em> ',
      link: 'https://rockcontent.com/es/blog/que-son-las-cookies/',
    },
    {
      referencia:
        'Ser o no ser marketing online. (2017). <em>¿Qué estructura debe de tener una página web?</em> ',
      link:
        'https://www.snsmarketing.es/blog/que-estructura-debe-de-tener-una-pagina-web/ ',
    },
    {
      referencia: 'TechLib. (s.f.). <em>Desarrollo Web</em>. ',
      link: 'https://techlib.net/definition/web_development.html ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Eddy Cárdenas',
          cargo: 'Experto temático',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Experto temático',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gloria Alexandra Orejarena Barrios',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Corrección de estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Asesor metodológica y pedagógica ',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Nelly Parra Guarín',
          cargo: 'Adecuación instruccional',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Adriana Marcela Suarez Eljure',
          cargo: 'Diseño web e ilustración',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Luis Jesús Pérez Madariaga',
          cargo: 'Desarrollo Fullstack',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: '',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo:
            'Validación de recursos educativos digitales y vinculación LMS',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Leyson Fabián Castaño Pérez',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
