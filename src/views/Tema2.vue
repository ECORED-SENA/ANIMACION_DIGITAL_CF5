<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido(data-aos="flip-down")
      .titulo-principal__numero
        span 2
      h1 Práctica de <em>rigging</em> y animación
    
    .row.justify-content-center.mb-4
      .col-md-8
        figure.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema2/01.jpg', alt='Práctica de rigging y animación')
    
        p(data-aos="fade") En este numeral, se compilarán, a través de unos videos tutoriales de práctica, el resultado de la combinación de las herramientas nativas de After effects, sumado a otras herramientas y técnicas propias del programa para animar un personaje previamente despiezado y preparado:

    #MapaGroup01(data-aos="fade")
      .position-relative
        .row.justify-content-center.Bef01
          .col-lg-8.zIndx01
            .row.bgImg02.justify-content-center.align-items-center.minH01
              .col-2.Hesp01.d-flex.justify-content-center.align-items-center
                button.EditBtn2(data-bs-toggle='collapse' data-bs-target='.multi-collapse1' aria-expanded='true' aria-controls='.multi-collapse1') 01
              .col-2.Hesp01.d-flex.justify-content-center.align-items-center.position-relative(@mouseover="indicadorTarjetaFlip = false")
                .indicador--hover(v-if="indicadorTarjetaFlip")
                button.EditBtn2(data-bs-toggle='collapse' data-bs-target='.multi-collapse2' aria-expanded='true' aria-controls='.multi-collapse2') 02
              .col-2.Hesp01.d-flex.justify-content-center.align-items-center
                button.EditBtn2(data-bs-toggle='collapse' data-bs-target='.multi-collapse3' aria-expanded='true' aria-controls='.multi-collapse3') 03
              .col-2.Hesp01.d-flex.justify-content-center.align-items-center
                button.EditBtn2(data-bs-toggle='collapse' data-bs-target='.multi-collapse4' aria-expanded='true' aria-controls='.multi-collapse4') 04
              .col-2.Hesp01.d-flex.justify-content-center.align-items-center
                button.EditBtn2(data-bs-toggle='collapse' data-bs-target='.multi-collapse5' aria-expanded='true' aria-controls='.multi-collapse5') 05
      
      .row.justify-content-center.LnrGrad01.m-0
        .multi-collapse1.col-lg-10.collapse.show(data-bs-parent='#MapaGroup01')
          h4.text-center.mt-5.TxtClr01 Importación a After Effects
          .bg-white.BRcardTOP.my-4
            p.p-4.mb-0 En este video se validará cómo se importan todos los elementos que preparamos previamente, como los props, personajes y fondos. Además, se verá cómo mover las piezas de los personajes, para reubicarlas y crear una pose, de esta forma ir familiarizándonos con el programa:
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        
        .multi-collapse2.col-lg-10.collapse(data-bs-parent='#MapaGroup01')
          h4.text-center.mt-5.TxtClr01 Reubicar pivotes
          .bg-white.BRcardTOP.my-4
            p.p-4.mb-0 Enseguida se verá cómo ajustar y reubicar los pivotes de cada una de las piezas del personaje para generar los ejes correctos y que las piezas se mueven desde la posición adecuada:
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        
        .multi-collapse3.col-lg-10.collapse(data-bs-parent='#MapaGroup01')
          h4.text-center.mt-5.TxtClr01 Emparentar
          .bg-white.BRcardTOP.my-4
            p.p-4.mb-0 A continuación, se mirará cómo emparentar o ligar las partes del cuerpo a una pieza principal. Es decir, buscar una conexión entre las partes, como, por ejemplo, el brazo se conecta al torso, lo mismo que el cuello y las piernas:
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        
        .multi-collapse4.col-lg-10.collapse(data-bs-parent='#MapaGroup01')
          h4.text-center.mt-5.TxtClr01 Rigging y Animación 
          .bg-white.BRcardTOP.my-4
            p.p-4.mb-0 En el siguiente video se verá cómo animar de una forma básica el personaje, realizando rotación y movimientos de las piezas ya enlazadas entre sí. También se observan algunas deformaciones que se pueden realizar gracias a la herramienta #[em Puppet]:
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        
        .multi-collapse5.col-lg-10.collapse(data-bs-parent='#MapaGroup01')
          h4.text-center.mt-5.TxtClr01 Rendering
          .bg-white.BRcardTOP.my-4
            p.p-4.mb-0 Por último, se observará cómo exportar esa animación realizada en un formato de video para que pueda ser visualizado desde cualquier herramienta con reproducción multimedia:
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
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

<style lang="sass"></style>
