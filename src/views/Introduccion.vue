<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.BRcardTOP.bg-white.p-4.p-md-5
  
    .titulo-principal.mb-0
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
  
  .container.p-4.p-md-5

    .row.bg-white.BRcard.Brd01.p-4.py-5.justify-content-between
      .col-lg-6
        figure.mb-4
          img.maxW01(src='@/assets/curso/intro/03.jpg', alt='Logo AE')
        p Una de las áreas más comunes de interés para los diseñadores de movimientos es la animación de personajes. ¿Cuándo chico le atraían los detrás de cámaras y la forma de trabajar de los estudios Disney? O, ¿quizá requiere hacer más interesante un video de presentación para un producto o servicio? Sin importar la razón, algo es cierto: la animación de personajes es compleja, pero no difícil de lograr. Requiere mucha práctica, tiempo y conocimiento tanto de la herramienta digital como del funcionamiento del sistema que se quiera animar, en este caso un ser antropomorfo, además de un alto nivel de análisis, no solo del funcionamiento y dinámicas de cuerpo humano sino también de la lógica e influencia de la física del ambiente para generar una animación convincente dependiendo del nivel de realismo o apariencia dinámica que se le quiera dar al personaje y, finalmente, video.  
        p.mb-5 Sin embargo, antes de que puedas comenzar a practicar para aprender la animación de personajes, debes asegurarte de que estás usando las herramientas adecuadas. Es por esto, que en esta etapa veremos una descripción general rápida y divertida de las herramientas de manipulación de personajes desde After Effects.
        figure
          img.maxW02(src='@/assets/curso/intro/01.jpg', alt='Logo Adobe')
      .col-lg-5
        figure
          img(src='@/assets/curso/intro/02.jpg', alt='Decoración')

    
    

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
