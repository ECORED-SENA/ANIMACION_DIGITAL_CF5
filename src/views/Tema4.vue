<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.BRcardTOP.bg-white.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido.mb-0(data-aos="flip-down")
      .titulo-principal__numero
        span 4
      h1 Análisis de movimiento

  .container.LnrGrad03.p-5.pb-0(data-aos="fade")

    .row.justify-content-center(data-aos="fade-right")
      .col-md-8
        figure
          img(src='@/assets/curso/tema4/01.png', alt='')
  
  .container.BRcardBTN.bg-white.p-4.p-md-5

    .row.justify-content-center.mb-4
      .col-md-10
        .cajon.color-primario.p-4.mb-4(data-aos="fade")
          p Es importante que el #[em rigger] analice que el #[em rigging] realizado cumpla con todos los movimientos que el personaje u objeto va a realizar y que las deformaciones que se generen en el personaje no alteren la fisonomía del mismo, y este siempre mantenga sus características. 
    
        p.mb-4(data-aos="fade-left") Aquí es importante que cumpla con los movimientos estándar y también llevar el movimiento al límite, todo esto se debe tener en cuenta, de acuerdo con la característica fisonómica y la personalidad del personaje; por ello, se deben analizar las deformaciones pertinentes para que el animador, posteriormente, pueda realizar las animaciones necesarias. Por ello, se puede tener en cuenta, algunas poses para ver que el personaje cumpla con ciertas deformaciones y movimientos, entre ellas están las siguientes:

    .row.justify-content-center.mb-4(data-aos="fade")
      .col-md-8
        LineaTiempoD.color-primario.mb-5
          div(numero="1" titulo="Descanso")
            p.text-small El personaje está en su estado de descanso; es decir, se encuentra de pie, pero nunca está ciento por ciento quieto, tiene un movimiento mínimo, sus brazos pueden estar moviéndose lentamente, o su cabeza puede oscilar lentamente o mirar hacia un lado, siempre está expectante para iniciar su movimiento como se detalla en la imagen.
            .row.align-items-end
              .col-3
                figure
                  img(src='@/assets/curso/tema4/02.gif', alt='')
              .col-9
                figure
                  img(src='@/assets/curso/tema4/02.png', alt='')
          
          div(numero="2" titulo="Caminar")
            p.text-small La acción de caminar es una de las más importantes, pues muestra en movimiento constante al personaje, hay un tipo de caminar estándar, pero cada personaje puede tener su personalidad al momento de moverse: una persona obesa puede tambalearse un poco más hacia los lados, una mujer puede caminar con las piernas más juntas y pasos más cortos, todo depende del tipo de personalidad que se le haya definido al personaje. Con las siguientes imágenes se puede crear un caminar, pero se pueden exagerar sus movimientos para marcar una personalidad.
            .row.align-items-end
              .col-3
                figure
                  img(src='@/assets/curso/tema4/03.gif', alt='')
              .col-9
                figure
                  img(src='@/assets/curso/tema4/03.png', alt='')
          
          div(numero="3" titulo="Salto")
            p.text-small El salto permite que el personaje se desplace hacia arriba, despegándose del suelo, para poder llegar a otro lado o caer en el mismo punto de origen, esquivar un enemigo, saltar y destruir un #[em npc].

            .row.align-items-end
              .col-3
                figure
                  img(src='@/assets/curso/tema4/04.gif', alt='')
              .col-9
                figure
                  img(src='@/assets/curso/tema4/04.png', alt='')          
          
          div(numero="4" titulo="Agacharse")
            p.text-small La acción de agacharse puede referirse cuando el personaje trata de ocultarse, pasar bajo algo, necesitar recoger algún elemento del suelo. esquivar un golpe, una bala, un #[em npc] aéreo, entre muchas más.

            .row.align-items-end
              .col-3
                figure
                  img(src='@/assets/curso/tema4/06.gif', alt='')
              .col-9
                figure
                  img(src='@/assets/curso/tema4/06.png', alt='')
          
          div(numero="5" titulo="Atacar")
            p.text-small Una de las animaciones más usadas, es como el personaje ataca, lanza un golpe o usa una espada. Estos son movimientos que, por lo general, son movimientos rápidos: puede mover las piernas para crear estabilidad en el movimiento y verse natural; es importante siempre llegar al mismo punto de partida.

            .row.align-items-end
              .col-3
                figure
                  img(src='@/assets/curso/tema4/05.gif', alt='')
              .col-9
                figure
                  img(src='@/assets/curso/tema4/05.png', alt='')
          
          div(numero="6" titulo="Muerte")
            p.text-small La muerte del personaje puede pasar porque pisó algún elemento que lo mataba de inmediato o por que le fueron quitando la sangre poco a poco. Aquí se puede mostrar cómo el personaje cae al piso, después de que pierde su vida. Es importante tener como eje principal los pies del personaje, para que, al momento de pasar la animación al motor de juego este caiga correctamente y no se deslice.

            .row.align-items-end
              .col-3
                figure
                  img(src='@/assets/curso/tema4/07.gif', alt='')
              .col-9
                figure
                  img(src='@/assets/curso/tema4/07.png', alt='')  

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
