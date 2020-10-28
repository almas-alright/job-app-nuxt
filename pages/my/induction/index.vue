<template>
  <div>
    <section class="home-section section-hero inner-page overlay bg-image"
             :style="{ backgroundImage: 'url(' + require('@/assets/images/hero_1.jpg') + ')' }" id="home-section">
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-md-4"></div>
          <div class="col-md-4">
            <div class="m-2 text-center">
              <h1 class="text-white font-weight-bold">My Induction</h1>
              <div class="p-5 text-center">
              </div>
            </div>
          </div>
          <div class="col-md-4"></div>
          <div class="col-md-12">
          </div>
        </div>
      </div>
    </section>
    <section class="home-section">
      <b-container>
        <b-row>
          <b-col col lg="12" class="text-center">
              <general-questions v-if="loaded" :extra-data="candidate.extra_info"></general-questions>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>

</template>

<script>

import GeneralQuestions from '~/components/user/others/GeneralQuestions';
import Commons from '~/mixins/common'
export default {
  mixins:[Commons],
  layout: 'main',
  middleware: 'guest',
  components:{
    GeneralQuestions
  },
  data(){
    return {
      candidate: new Object(null),
      loaded: false
    }
  },
  methods:{
    saveData(sd){
      this.loadCandidate()
    },
    loadCandidate(){
      this.loaded = false
      let that = this
      this.$axios.get('/profile/get').then(response => {
        that.candidate = response.data.data
        console.log(that.candidate)
        that.loaded = true
        // that.$store.dispatch('candidate/setCandidateData', response.data.data)
      });
    },
    loadAllImages(){
      let that = this
      this.removeImages()
      this.$axios.get('/media/get-media/0').then(response => {
        // that.addImage(response.data.data)
        that.$store.dispatch('images/setMedias', response.data.data)
      })
    },
  },
  mounted() {
    this.loadAllImages()
    this.loadCandidate()
  },
  head() {
    return {
      title: 'my induction | stevejobs',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'stevejobs is a job searching and candidate hosting application'
        }
      ]
    }
  }
}
</script>

<style>
.card{
  border:none;
  border-radius:0rem;
}
.card-header{
  padding: 0rem 0rem !important;
}
.nav-pills .nav-link {
  border-radius: 0rem;
}
.card-body{
  padding: 0;
}
.card-header-pills {
  margin-right: 0rem;
  margin-left: 0rem;
}
</style>
