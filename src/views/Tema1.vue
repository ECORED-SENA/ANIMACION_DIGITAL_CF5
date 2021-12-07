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
    
    p.mb-5 De forma nativa en After Effects podemos encontrar dos herramientas o sistemas que enlace que nos facilitan de forma práctica, rápida e intuitiva el enlace, parentazgo o rigging de personajes 2D. También existen extensiones de terceros al programa, unos libres y otros de pago en caso de requerir herramientas más complejas y de altos estándares competitivos en el mercado. Sin embargo, siempre lo más importante es la habilidad del animador para usarlas, sin importar si son pagas o nativas. Estas son:

    #MapaGroup01.row.mb-5(data-aos="fade")
      .row.justify-content-center
        .col-lg-6
          .row.justify-content-center.bgImg01.mb-5
            .col-4
              button.EditBtn1(data-bs-toggle='collapse' data-bs-target='.multi-collapse1' aria-expanded='true' aria-controls='.multi-collapse1')
                figure
                  img(src='@/assets/curso/tema1/06.svg', alt='Nativas')
              .multi-collapse1.brBTN.collapse.show(data-bs-parent='#MapaGroup01')
            .col-4.position-relative
              .indicador--hover(v-if="indicadorTarjetaFlip")
              button.EditBtn1(data-bs-toggle='collapse' data-bs-target='.multi-collapse2' aria-expanded='false' aria-controls='.multi-collapse2' @mouseover="indicadorTarjetaFlip = false")
                figure
                  img(src='@/assets/curso/tema1/07.svg', alt='Externas')
              .multi-collapse2.brBTN.collapse(data-bs-parent='#MapaGroup01')
      
      .multi-collapse1.row.justify-content-center.collapse.show(data-bs-parent='#MapaGroup01')
        .col-md-8 
          p.text-center Son las herramientas que se encuentran internamente en After Effects y se detallan a continuación:
        .col-md-10
          AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
            .row.justify-content-center(titulo="<em>Puppet Pin</em> (marioneta)")
              .col-lg-11
                p.mb-4 La herramienta “marioneta” es muy fácil de usar e intuitiva para hacer animaciones rápidas y de personajes sencillos. No solamente antropomorfos, sino también para sistemas pendulantes o pivotantes. Funciona haciendo clic con puntos de pivote en la imagen los que generan una tensión al área más cercana de la imagen a modo de controladores para moverlo de forma elástica.  Por ejemplo, si tiene una flor simple que necesita soplar con el viento o un hombre de tubo inflable que agita un brazo, esta herramienta podría funcionar.
                figure
                  img(src='@/assets/curso/tema1/08.svg', alt='Puppet Pin (marioneta)')
            
            .row.justify-content-center(titulo="<em>Whip</em> (látigo)")
              .col-lg-11
                p.mb-4 También llamada “colita de marrano” o “espiral”, no es una herramienta de animación por sí sola, pero es indispensable para enlazar o emparentar elementos (ubicados en capas), generando de esta forma sistemas dependientes entre sí, como por ejemplo, la unión entre brazo/antebrazo/mano.
                figure
                  img(src='@/assets/curso/tema1/09.svg', alt='Whip (látigo)')
            
            .row.justify-content-center(titulo="<em>Null object</em> (objeto nulo)")
              .col-lg-11
                p.mb-4 Este elemento que se ubica como una capa en la composición es literalmente un controlador, con el cual, emparentando por medio del whip podemos controlar, principalmente los parámetros de transformación de otras capas.
                figure
                  img(src='@/assets/curso/tema1/10.svg', alt='Null object (objeto nulo)')
      
      .multi-collapse2.row.justify-content-center.collapse(data-bs-parent='#MapaGroup01')
        .col-md-8 
          p.text-center Las herramientas externas o extensiones (plugins) son programas de otras casas desarrolladoras de software distintas a Adobe y se detallan a continuación:
        .col-md-10
          AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
            .row.justify-content-center(titulo="<em>Duik Bassel</em>")
              .col-lg-11
                p.mb-4 Es un plug-in gratis (se recomienda donaciones) que permite a los animadores manipular a sus personajes de forma práctica y rápida. Se ha convertido en el estándar líder en la industria de manipulación y animación de personajes.
                .bg-white.p-4.mb-4
                  p.mb-0 Algunas características que posee esta extensión son parámetros de instalación automática, controladores basados en iconos y enlaces para rigging que le permiten automatizar el comportamiento de sus “hijos”. Existe una biblioteca de tutoriales y documentos de soporte para utilizarlo de forma correcta.
                .position-relative
                  .indicador--hover(v-if="indicadorTarjetaFlip2")
                  a(href='https://rainboxlab.org/tools/duik/' target="_blank" @mouseover="indicadorTarjetaFlip2 = false")
                    figure
                      img(src='@/assets/curso/tema1/11.png', alt='Rubberhose 2')
            
            .row.justify-content-center(titulo="<em>Rubberhose 2</em>")
              .col-lg-11
                p.mb-4 Siendo una extensión por pago (USD$45), esta es sin duda la manera más rápida de manipular un personaje en After Effects.  El complemento recibió su nombre de la antigua técnica de la década de 1920, en la que los personajes parecían tener mangueras de goma para brazos y piernas. Este estilo puede hacer que tus personajes parezcan más amigables y extravagantes, pero lo que es más importante, hace que el montaje sea muy fácil.
                a(href='https://www.battleaxe.co/rubberhose' target="_blank")
                  figure
                    img(src='@/assets/curso/tema1/12.png', alt='Rubberhose 2')
            
            .row.justify-content-center(titulo="<em>Joystick’n Sliders</em>")
              .col-lg-11
                p.mb-4 Es una herramienta paga (USD$39) muy interesante para After Effects que se enorgullece de ser una herramienta de montaje “basada en poses”. Si bien ciertamente puedes manipular rápidamente a un personaje usando Joysticks’n Sliders en After Effects, hemos encontrado que Joysticks’n Sliders son más útiles en casos de uso que no son de personajes. Por ejemplo, puede usar la herramienta para todo, desde gráficos de aparejos hasta demostraciones de Interfaz de usuario.
                a(href='https://aescripts.com/joysticks-n-sliders/' target="_blank")
                  figure
                    img(src='@/assets/curso/tema1/13.png', alt='Joystick’n Sliders')
            
            .row.justify-content-center(titulo="<em>PuppetTools 3</em>")
              .col-lg-11
                p.mb-4 Es otra herramienta de manipulación de personajes disponible en aescripts + aeplugins. Lo que quiere decir que funciona mayormente con código.  Incluye valiosas herramientas de manipulación de personajes como la cinemática inversa y los controladores.
                a(href='https://aescripts.com/puppettools/' target="_blank")
                  figure
                    img(src='@/assets/curso/tema1/14.png', alt='Joystick’n Sliders')
            
            .row.justify-content-center(titulo="<em>Adobe Character Animator</em>")
              .col-lg-11
                p.mb-4 Es una interesante aplicación que permite a los usuarios utilizar videos y captura de pantalla en tiempo real para animar automáticamente los movimientos y posiciones de la boca y ojos.
                a(href='https://www.adobe.com/la/products/character-animator.html' target="_blank")
                  figure
                    img(src='@/assets/curso/tema1/15.png', alt='Adobe Character Animator')

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    indicadorTarjetaFlip: true,
    indicadorTarjetaFlip2: true,
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
