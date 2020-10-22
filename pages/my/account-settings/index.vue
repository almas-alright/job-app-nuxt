<template>
  <div>
    <section class="home-section section-hero inner-page overlay bg-image"
      :style="{ backgroundImage: 'url(' + require('@/assets/images/hero_1.jpg') + ')' }" id="home-section">
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-md-12">
            <div class="mb-5 text-center">
              <h1 class="text-white font-weight-bold">Account Settings</h1>
              <div class="text-center">

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>

    </section>

  </div>
</template>

<script>

import Commons from '~/mixins/common'
export default {
  mixins:[Commons],
  layout: 'main',
  middleware: 'guest',
  components:{

  },
  data(){
    return {
      candidate:{}
    }
  },
  methods:{
    saveData(sd){

    }
  },
  mounted() {
    // this.loadAllImages()
  }
}
</script>

<style lang="scss" scoped >

</style>
