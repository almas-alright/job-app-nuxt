<template>
  <div>
    <section class="home-section section-hero inner-page overlay bg-image"
      :style="{ backgroundImage: 'url(' + require('@/assets/images/hero_1.jpg') + ')' }" id="home-section">
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-md-12">
            <div class="mb-5 text-center">
              <h1 class="text-white font-weight-bold">My Profile</h1>
              <div class="text-center">
                <img src="https://via.placeholder.com/200x200?text=profile+image" class="rounded" >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <general-info/>
    <social-media/>
    <bank-details/>
    <tax-details/>

  </div>
</template>

<script>
import GeneralInfo from '~/components/user/profile/GeneralInfo';
import SocialMedia from '~/components/user/profile/SocialMedia';
import BankDetails from '~/components/user/profile/BankDetails';
import TaxDetails from '~/components/user/profile/TaxDetails';
export default {
  layout: 'main',
  middleware: 'guest',
  components:{GeneralInfo, SocialMedia, BankDetails},
}
</script>

<style lang="scss" scoped >

</style>
