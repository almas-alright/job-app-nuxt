<template>
  <section class="pb-0">
    <div class="container">

      <div class="row align-items-center">
        <div class="col-lg-12">
          <h4>My Induction</h4>
        </div>
      </div>
      <div style="min-height: 20rem" class="my-4">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <p class="text-info">click here for details: <b-button v-b-modal.modal-lg size="sm" variant="info">health & safety induction</b-button></p>
          <b-modal id="modal-lg" size="lg" title="Induction" hide-footer>
            <b-container>
              <b-row>
                <b-col col lg="12" class="text-center">
                  <iframe
                    src="https://docs.google.com/presentation/d/e/2PACX-1vSlmPRQIrL26Oiscvw4zsyTH5tb6mR_gz1GALnvw7AAtseIfrm6_85v9fj2nUpWNA/embed?start=false&loop=false&delayms=3000"
                    frameborder="0" width="720" height="585" allowfullscreen="true" mozallowfullscreen="true"
                    webkitallowfullscreen="true"></iframe>
                </b-col>
              </b-row>
            </b-container>

              <b-container>
                <b-row>
                  <b-col col lg="12" class="text-center">
                    if you are done with presentation above please click <a  href="/" size="sm">Next</a> to face general questions about <it></it>
                  </b-col>
                </b-row>
              </b-container>
          </b-modal>
          <!--          <client-only>-->
          <!--          <vue-flux-->
          <!--            :options="vfOptions"-->
          <!--            :images="vfImages"-->
          <!--            :transitions="vfTransitions"-->
          <!--            :captions="vfCaptions"-->
          <!--            ref="slider">-->

          <!--            <template v-slot:preloader>-->
          <!--              <flux-preloader />-->
          <!--            </template>-->

          <!--            <template v-slot:controls>-->
          <!--              <flux-controls />-->
          <!--            </template>-->

          <!--            <template v-slot:index>-->
          <!--              <flux-index />-->
          <!--            </template>-->
          <!--          </vue-flux>-->
          <!--          </client-only>-->
        </div>
      </div>
      </div>
    </div>
  </section>

</template>

<script>
// import {
//   VueFlux,
//   FluxCaption,
//   FluxControls,
//   FluxIndex,
//   FluxPagination,
//   FluxPreloader,
// } from 'vue-flux/dist-ssr/vue-flux.umd.min.js';
// import 'vue-flux/dist-ssr/vue-flux.css';
export default {
  // components: {
  //   VueFlux,
  //   FluxControls,
  //   FluxIndex,
  //   FluxPreloader,
  // },

  data: () => ({
    vfOptions: {
      autoplay: false
    },
    vfImages: [
      'https://svgshare.com/i/QxM.svg',
      'https://svgshare.com/i/QwY.svg',
      '/_nuxt/static/s24,png',
    ],
    vfTransitions: ['book'],
    vfCaptions: [
      'Caption for image 1',
      'Caption for image 2',
      'Caption for image 3',
    ],
  }),
}
</script>

<style scoped>

</style>
