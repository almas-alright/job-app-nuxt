<template>
  <section class="home-section section-hero overlay bg-image" :style="{ backgroundImage: 'url(' + require('@/assets/images/hero_1.jpg') + ')' }" id="home-section">

      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-md-12">
            <div class="mb-5 text-center">
              <h1 class="text-white font-weight-bold">Register</h1>
            </div>
            <div class="search-jobs-form">
              <div class="row mb-5">
                <div class="col-12 col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0">

                </div>
                <div class="col-12 col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0">
                  <Register />
                </div>
                <div class="col-12 col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </section>
</template>

<script>
import Register from '~/components/auth/Register'
export default {
  layout: 'main',
  components:{Register},
  // data() {
  //   return {
  //     bgImg: "@/assets/images/hero_1.jpg",
  //   };
  // },
}
</script>

<style lang="scss" scoped >

</style>
