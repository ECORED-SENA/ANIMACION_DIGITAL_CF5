<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.BRcardTOP.bg-white.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Fundamentación

    .row.justify-content-center
      .col-md-10
        p El proceso de un buen rigging lleva tiempo y cuanto más tiempo se pase organizando y enlazando los elementos del sistema, más tiempo se habrá ganado a la hora de animar. Como resultado, muchas herramientas de animación de personajes cuentan con opciones de enlace automáticas que agilizan este proceso de enlace. Algunas de las herramientas requieren que configure el personaje y presione un solo botón para activar automáticamente un complejo proceso de manipulación. 
      
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/01.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Y si bien el proceso en After Effects y en animación 2D es un poco más sencillo que en la animación 3D, también hay que tener en cuenta los principios básicos de animación y lógica que aplican a cualquier tipo de movimiento. A veces, se puede estar trabajando con un personaje simple que posee pocos puntos animados y otras puede ser mucho más complejo. Si planea trabajar en proyectos de mayor detalle y realismo, se debe asegurar que la herramienta de manipulación de personajes tenga alcances de automatización para que funcione en un flujo de trabajo más grande si es necesario.
  
  .container.LnrGrad01.p-4.p-md-5

    #t1_1.titulo-segundo.color-secundario
      h2 1.1 Antes del #[em rigging]
    
    p.mb-4 El rigging es una parte vital del flujo de trabajo de la animación. Sin rig no habría forma de animar a los personajes. Como “aparejador” o rigger, la labor es crear controles flexibles e intuitivos que puedan lograr cualquier animación que se les presente. En el caso de After Effects y sus herramientas nativas, solo es cuestión de conocer bien su manejo y saber dónde generar los anclajes y pivotes en el personaje.

    .row.justify-content-center.mb-4
      .col-md-6.bg-white.BR01.Brd02.p-3
        p.text-center.mb-0 A continuación, se detallan algunos elementos primordiales: 
    
    TabsA.color-acento-botones
      .tarjeta.LnrGrad02.p-4(titulo="Generar deformaciones limpias")
        .row.align-items-center
          .col-lg-6
            p Este es probablemente uno de los aspectos más importantes para tener un excelente rig de personaje. Este se refiere a que el sistema necesita deformarse apropiadamente y creíble en cada una de las áreas de manipulación. Por ejemplo, si un personaje se inclina, el estómago y pecho se deben deformar de manera elástica y natural.
          .col-lg-6
            figure
              img(src='@/assets/curso/tema1/03.svg', alt='Decoración')
      
      .tarjeta.LnrGrad02.p-4(titulo="Controles claros de <em>rig</em>")
        .row.align-items-center
          .col-lg-6
            p Para que un animador mueva las articulaciones individuales de un personaje, necesitará tener acceso a los controles para que el proceso de selección sea mucho más fácil. La ubicación de estos controles debe quedar clara en la plataforma, el animador debería poder decir exactamente qué parte del cuerpo influenciará determinado control sin tener que seleccionarla primero.
          .col-lg-6
            figure
              img(src='@/assets/curso/tema1/02.svg', alt='Decoración')
        
      .tarjeta.LnrGrad02.p-4(titulo="Correcto despiece de personaje")
        .row.align-items-center
          .col-lg-6
            p Es de suma importancia tener una imagen correctamente despiezada para no incurrir en tensiones de controles erróneas sobre partes del cuerpo que no deban ser afectadas. Para ello, es indispensable que cada articulación esté independiente en su propia capa o, en caso de estar en una misma capa, que no esté cerca o cruzándose con otra. Un buen ejemplo es la posición del hombre de Vitruvio de Da Vinci.
          .col-lg-6
            figure
              img(src='@/assets/curso/tema1/04.svg', alt='Decoración')
  
  .container.BRcardTOP.bg-white.px-4.px-md-5.pt-0.pb-4

    p.text-center Ahora, se revisará el despiece del personaje a través del siguiente video:

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    separador

    #t1_2.titulo-segundo.color-secundario
      h2 1.2 Sistema de controles
    
    p.mb-4 De forma nativa en After Effects podemos encontrar dos herramientas o sistemas que enlace que nos facilitan de forma práctica, rápida e intuitiva el enlace, parentazgo o rigging de personajes 2D. También existen extensiones de terceros al programa, unos libres y otros de pago en caso de requerir herramientas más complejas y de altos estándares competitivos en el mercado. Sin embargo, siempre lo más importante es la habilidad del animador para usarlas, sin importar si son pagas o nativas. Estas son:






  
</template>

<script>
export default {
  name: 'Tema1',
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

<style lang="sass"></style>
