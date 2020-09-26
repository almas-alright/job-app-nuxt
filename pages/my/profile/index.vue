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

    <general-info ref="gInfo" @saveData="saveData($event)" />
    <social-media ref="socialMedia" @saveData="saveData($event)" />
    <bank-details ref="bankDetails" @saveData="saveData($event)"/>
    <tax-details ref="taxDetails" @saveData="saveData($event)" />
    <work-experience ref="workExperience" @saveData="saveData($event)" />
    <education-qualification ref="eduQualification" @saveData="saveData($event)" />
    <professional-certificate ref="proCertificate" @saveData="saveData($event)" />
    <lisence-permission ref="lisence" @saveData="saveData($event)" />
  </div>
</template>

<script>
import GeneralInfo from '~/components/user/profile/GeneralInfo';
import SocialMedia from '~/components/user/profile/SocialMedia';
import BankDetails from '~/components/user/profile/BankDetails';
import TaxDetails from '~/components/user/profile/TaxDetails';
import WorkExperience from '~/components/user/profile/WorkExperience';
import EducationQualification from '~/components/user/profile/EducationQualification';
import ProfessionalCertificate from '~/components/user/profile/ProfessionalCertificate';
import LisencePermission from '~/components/user/profile/LisencePermission';
import Commons from '~/mixins/common'
export default {
  mixins:[Commons],
  layout: 'main',
  middleware: 'guest',
  components:{
    GeneralInfo,
    SocialMedia,
    BankDetails,
    TaxDetails,
    WorkExperience,
    EducationQualification,
    ProfessionalCertificate,
    LisencePermission
  },
  data(){
    return {
      candidate:{}
    }
  },
  methods:{
    saveData(sd){
      this.candidate.general_info = this.$refs.gInfo.genInfo
      this.candidate.social_media = this.$refs.socialMedia.mySocialLinks
      this.candidate.bank_details = this.$refs.bankDetails.bankData
      this.candidate.tax_details = this.$refs.taxDetails.taxData
      this.candidate.work_experience = this.$refs.workExperience.experiences
      this.candidate.education_qualification = this.$refs.eduQualification.mycertificates
      this.candidate.professional_certificate = this.$refs.proCertificate.professional_certificate
      this.candidate.lisence = this.$refs.lisence.mylisences
      console.log(this.candidate)
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
  }
}
</script>

<style lang="scss" scoped >

</style>
