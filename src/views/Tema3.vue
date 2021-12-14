<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido(data-aos="flip-down")
      .titulo-principal__numero
        span 3
      h1 Visemas
    
    .bloque-texto-c.color-secundario.p-4.mb-4(data-aos="fade-up")
      i.fas.fa-quote-right.mb-2
      h4.mb-2 Durante la animación es ideal tener en cuenta los visemas, los cuales son formas significantes o visuales construidas por los labios del personaje o personajes. Usualmente se conocen como fonemas; sin embargo, es importante aclarar que los fonemas son sonidos y los visemas son formas.
      span - Osipa, 2010.
    
    p.mb-5(data-aos="fade") Los visemas son usados al momento de realizar el trabajo de sincronización labial o mejor conocido como #[em lip sync]. A diferencia de los fonemas, los visemas se basan en los ciclos que juegan entre sí: boca abierta/cerrada y labios contraídos/estirados. Los fonemas funcionan muy bien para la animación 2D.

    .titulo-sexto.color-acento-contenido
      h5 Figura 1. 
      span <em>Lip sync.</em>
    
    figure(data-aos="flip-left")
      img(src='@/assets/curso/tema3/01.svg', alt='Lip sync.')
    
    .BG02.p-4.mb-5(data-aos="fade-down")
      p.mb-0 Nuevamente la idea “menos es más” (principio #[em Kiss]) cobra relevancia al momento de trabajar en la construcción de las posiciones de los labios, dado que la mayoría de las expresiones faciales y visemas complejos se forman a partir de la unión de otros más básicos. Por ejemplo, es posible formar el visema de la letra “o” uniendo los de boca abierta y labios contraídos.
    
    p.mb-4(data-aos="fade-left") El #[em rigger] debe crear las posiciones de las bocas teniendo en cuenta que son las posiciones finales que se van a utilizar para generar el #[em lip sync] a la hora de animar.

    p.mb-5(data-aos="fade-left") A continuación, se podrán ver los fonemas y su correspondiente forma con la boca, estas son posiciones globales que se usan en todos los proyectos animados, con ligeras variaciones entre unas y otras, pero conservando siempre la misma estructura:

    .row.justify-content-center.mb-4(data-aos="fade")
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Figura 2. 
          span Ejemplo de formas bucales.
        SlyderA
          .row.justify-content-center
            .col-lg-10
              figure.mb-4
                img(src='@/assets/curso/tema3/02.svg', alt='')
              
          .row.justify-content-center
            .col-lg-10
              figure.mb-4
                img(src='@/assets/curso/tema3/03.svg', alt='')
          
          .row.justify-content-center
            .col-lg-10
              figure.mb-4
                img(src='@/assets/curso/tema3/04.svg', alt='')
              
          .row.justify-content-center
            .col-lg-10
              figure.mb-4
                img(src='@/assets/curso/tema3/05.svg', alt='')
          
          .row.justify-content-center
            .col-lg-10
              figure.mb-4
                img(src='@/assets/curso/tema3/06.svg', alt='')
              
          .row.justify-content-center
            .col-lg-10
              figure.mb-4
                img(src='@/assets/curso/tema3/07.svg', alt='')
          
          .row.justify-content-center
            .col-lg-10
              figure.mb-4
                img(src='@/assets/curso/tema3/08.svg', alt='')
              
          .row.justify-content-center
            .col-lg-10
              figure.mb-4
                img(src='@/assets/curso/tema3/09.svg', alt='')
          
          .row.justify-content-center
            .col-lg-10
              figure.mb-4
                img(src='@/assets/curso/tema3/10.svg', alt='')
              
          .row.justify-content-center
            .col-lg-10
              figure.mb-4
                img(src='@/assets/curso/tema3/11.svg', alt='')
          
          .row.justify-content-center
            .col-lg-10
              figure.mb-4
                img(src='@/assets/curso/tema3/12.svg', alt='')

</template>

<script>
export default {
  name: 'Tema3',
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
