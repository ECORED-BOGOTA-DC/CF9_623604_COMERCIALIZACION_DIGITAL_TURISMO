<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-up")
      .titulo-principal__numero
        span 4
      h1 Audiencias
    
    .row
      .col-lg.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/1.png" data-aos="zoom-in-right")
      .col-lg
        .h-100
          .cajon.color-primario.p-4(style="background-color:#FFECBE;box-shadow:0px 4px 8px rgba(0,0,0,.1);" data-aos="zoom-in-left")
            p.mb-0 Las audiencias son grupos de usuarios o personas físicas que reciben o pueden recibir contenidos o comunicaciones de empresas turísticas públicas. Las empresas suelen segmentar su audiencia en función de las variables consideradas en su estrategia de #[em marketing]. A continuación se presentan algunas de las categorías que las empresas de turismo pueden considerar:
          .row.mt-3(data-aos="zoom-in")
            .col-auto.pe-0(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema4/2.svg")
            .col(style="place-self:center;")
              p.mb-0 Precio.
          .row.mt-2(data-aos="zoom-in")
            .col-auto.pe-0(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema4/2.svg")
            .col(style="place-self:center;")
              p.mb-0 Ubicación.
          .row.mt-2(data-aos="zoom-in")
            .col-auto.pe-0(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema4/2.svg")
            .col(style="place-self:center;")
              p.mb-0 Tipo de propiedad.
          .row.mt-2(data-aos="zoom-in")
            .col-auto.pe-0(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema4/2.svg")
            .col(style="place-self:center;")
              p.mb-0 Categoría, etc.





      
</template>

<script>
export default {
  name: 'Tema4',
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
