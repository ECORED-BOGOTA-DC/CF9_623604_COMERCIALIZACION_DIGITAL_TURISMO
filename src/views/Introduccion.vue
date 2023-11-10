<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row
      .col-lg-5.mb-4.mb-lg-0(style="place-self:center;")
        figure.text-center.col-md-9.m-auto.col-lg-12
          img(src="@/assets/curso/intro1.png" data-aos="zoom-in-right" alt="Imagen decorativa")
      .col-lg-7(style="place-self:center;")
        p(data-aos="zoom-in") En este componente formativo habrá un énfasis en especial en los principios del diseño gráfico, la producción multimedia, las audiencias y las publicaciones #[strong #[em online]] para empresas turísticas como aspectos importantes en las estrategias de mercadeo que permitan alcanzar los resultados establecidos para el ecosistema digital.
        p.mt-4(Data-aos="zoom-in") Producir contenidos es una de las actividades básicas en el #[em marketing] digital, pues, la #[strong producción de contenido] es el combustible del #[strong #[em inbound marketing]], de esta forma, pensar en un texto estructurado, es el inicio del proceso, por tanto, pensar este aspecto, debe entenderse como el acto de producir materiales gráficos, con el objetivo de informar, educar o entretener al público objetivo es así, que crear #[strong contenido de calidad] debe ser la base fundamental para #[strong atraer visitantes], convertirlos en clientes y mantenerlos, ya que no solo basta con crear una página #[em web], una tienda #[em online] o estar en redes sociales, sino que el material que se ofrece les ayude a tomar decisiones y que les aporte valor.
        p.mt-4(data-aos="zoom-in") Muchos profesionales creen que la generación de contenido solo requiere excelentes habilidades de escritura. El caso es que las personas que se comprometen con la creación de contenido deben tener #[strong conocimientos generales de #[em marketing]] y considerar muchos aspectos relacionados con el #[strong diseño gráfico], la multimedia, la audiencia y las publicaciones #[em online] para empresas turísticas como aspectos importantes en las estrategias de mercadeo, que permitan alcanzar los resultados establecidos para el #[strong ecosistema digital].
    
    p.mt-5(data-aos="zoom-in") Estimado aprendiz el Servicio Nacional de Aprendizaje SENA, lo invita al aprovechamiento de la formación a través de estas estrategias para lograr el alcance de las competencias que integran el programa que, apoyadas en diversas tecnologías y recursos didácticos con relación a los resultados de aprendizaje esperados, lo que conlleva a recrear los escenarios productivos y acercarse de esta manera al contexto donde se adelanta la formación.




    
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
