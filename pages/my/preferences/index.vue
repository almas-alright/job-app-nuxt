<template>
  <div>
    <section class="home-section section-hero inner-page overlay bg-image"
      :style="{ backgroundImage: 'url(' + require('@/assets/images/hero_1.jpg') + ')' }" id="home-section">
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-md-12">
            <div class="mb-5 text-center">
              <h1 class="text-white font-weight-bold">My Preferences</h1>
              <div class="text-center">

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <availability></availability>
    <job-preference></job-preference>
  </div>
</template>

<script>
import Availability from '@/components/user/preference/Availability';
import JobPreference from '@/components/user/preference/JobPreference';

import Commons from '~/mixins/common'
export default {
  mixins:[Commons],
  layout: 'main',
  middleware: 'guest',
  components:{
    Availability,
    JobPreference
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
