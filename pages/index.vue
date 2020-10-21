<template>
<div>
<section class="home-section section-hero overlay bg-image" :style="{ backgroundImage: 'url(' + require('@/assets/images/ster.jpg') + ')' }" id="home-section">
  <div class="">
      <!-- <p>{{ authenticated }}</p>
      <p>{{ user }}</p> -->
      <!-- <router-link to="/user/234">user/234</router-link> -->


  </div>

</section>
<!--  <media-browser v-model="someImg"></media-browser>-->
<!--  <b-row>-->
<!--    <b-col lg="4" class="pb-2"><b-button @click="showMb()" size="sm">Small Button</b-button></b-col>-->
<!--    <b-col lg="4" class="pb-2"><b-button>Default Button</b-button></b-col>-->
<!--    <b-col lg="4" class="pb-2"><b-button size="lg">Large Button</b-button></b-col>-->
<!--  </b-row>-->
<!--  {{ mediaImages }}-->
</div>
</template>

<script>
import MediaBrowser from '~/components/media/MediaBrowser';
export default {
  layout: 'main',
  components:{ MediaBrowser },
  data(){
    return {
      someImg: ''
    }
  },
  methods:{
  },
  head() {
    return {
      title: 'home | stevejobs',
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

<style lang="scss" scoped >

</style>
