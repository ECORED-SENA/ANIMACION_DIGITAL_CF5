export default {
  global: {
    componenteFormativo: '<i>Rigging</i>',
    descripcionCurso:
      'El <i>rigging</i> hace referencia a la implementación de huesos y controladores a un objeto para animarlo y puede ser básico o avanzado. En el caso de la animación 2D por medio de After Effects, es un proceso intuitivo y técnico respecto al tipo de movimientos que se desean realizar.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Fundamentación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Antes del rigging',
            hash: 't1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Sistema de controles',
            hash: 't1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Práctica de rigging y animación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Visemas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Análisis de movimiento',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
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
  referencias: [
    {
      referencia: 'Adobe. (2021). After Effects',
      link: 'https://www.adobe.com/la/products/aftereffects.html',
    },
    {
      referencia:
        'Behance. (2021). 20+ Best Animated Logos for Your Inspiration. Behance.',
      link:
        'https://www.behance.net/gallery/68306231/20-Best-Animated-Logos-for-Your-Inspiration',
    },
    {
      referencia:
        'Cortés, J. (2020). ¿Qué es la animación? Tipos y técnicas. Notodoanimacion.',
      link: 'https://bit.ly/3gGd7Wh',
    },
    {
      referencia:
        'Osipa, J. (2010). Stop Staring, Facial Modeling and Animation Done Right. Wiley Publishing, Inc.',
    },
  ],
  glosario: [
    {
      termino: 'Animación',
      significado:
        'técnica que da sensación de movimiento a imágenes, dibujos, figuras, recortes, objetos, personas, imágenes computarizadas, utilizando leves cambios de posición para que se genere la ilusión de un movimiento real.',
    },
    {
      termino: 'Audiovisual',
      significado: 'material conjunto de imágenes y sonidos grabados.',
    },
    {
      termino: '<em>Creative Commons</em>',
      significado:
        'organización internacional estandarizada dedicada a promover el libre acceso y el intercambio de bienes culturales creativos comunes.',
    },
    {
      termino: 'Digital',
      significado: 'que suministra datos mediante dígitos binarios.',
    },
    {
      termino: 'Gráfico',
      significado:
        'que pertenece y es relativo a la representación visual de la escritura y lo impreso.',
    },
    {
      termino: 'Innovación',
      significado:
        'acción de modificar las cosas ya existentes aplicando algo nuevo o creando elementos totalmente nuevos.',
    },
    {
      termino: 'Logotipo',
      significado:
        'símbolo formado por imágenes o letras que identifica a una empresa, institución, producto o marca.',
    },
    {
      termino: 'Multimedia',
      significado: 'que difunde o está compuesto por distintos medios.',
    },
    {
      termino: 'Página web',
      significado:
        'conjunto de información que se encuentra publicada en una determinada dirección de internet.',
    },
    {
      termino: '<em>Rigger</em>',
      significado:
        'persona con conocimientos de <em>scripting, rigging, skinning</em> que desarrolla sistemas procedurales que facilitan una movilidad que sea lógica y correcta en la animación.',
    },
    {
      termino: 'Técnica',
      significado:
        'conjunto de procedimientos, reglas y recursos que se usan en un arte, ciencia o labor determinada. Requiere práctica y habilidad.',
    },
    {
      termino: 'Video <em>blocking</em>',
      significado:
        'puesta en escena precisa de los actores en una actuación. En términos de cine, es donde colocas a tus actores y elementos importantes en el encuadre.',
    },
    {
      termino: 'Visema',
      significado:
        'cualquiera de varios sonidos del habla que se ven iguales, por ejemplo, al leer los labios.',
    },
  ],
  complementario: [
    {
      texto:
        'Cortés, J. (2020, 14 de octubre). ¿Qué es la animación? Tipos y técnicas. Notodoanimacion',
      tipo: 'Página web',
      link: 'https://bit.ly/3gGd7Wh',
    },
    {
      texto:
        'Villanueva, J. (2020). ¡Video animado para tu negocio! Tutorial - After Effects. [Video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=yB2paQihPVE&ab_channel=Jes%C3%BAsVillanueva%3A%3ATutorialesparaCreativos',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Oscar Julian Marquez Sanabria', 'Eulises Orduz Amezquita'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Diego Fernando Velasco Güiza',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
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
