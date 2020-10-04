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

    <general-info v-if="loaded" :personal-details="candidate.personal_details" ref="gInfo" @saveData="saveData($event)" />
    <social-media v-if="loaded" ref="socialMedia" :social-medea-data="candidate.social_medias"  @saveData="saveData($event)" />
    <accommodation v-if="loaded" ref="acc" :resident-info="candidate.accommodation" @saveData="saveData($event)"></accommodation>
    <bank-details ref="bankDetails" @saveData="saveData($event)"/>
    <tax-details ref="taxDetails" @saveData="saveData($event)" />
    <work-experience ref="workExperience" @saveData="saveData($event)" />
    <education-qualification ref="eduQualification" @saveData="saveData($event)" />
    <professional-certificate v-if="loaded" ref="proCertificate" :certificates="candidate.professional_certificate" @saveData="saveData($event)" />
    <license-permission ref="lisence" @saveData="saveData($event)" />
    <availability ref="available"></availability>
    <job-preference ref="jobPreference"></job-preference>
    <transportation ref="transportInformation"></transportation>
    <terms-conditions ref="tc"></terms-conditions>
    {{ candidate }}
  </div>
</template>

<script>
import GeneralInfo from '~/components/user/profile/GeneralInfo';
import SocialMedia from '~/components/user/profile/SocialMedia';
import Accommodation from '~/components/user/accommodation/Accommodation';
import BankDetails from '~/components/user/profile/BankDetails';
import TaxDetails from '~/components/user/profile/TaxDetails';
import WorkExperience from '~/components/user/profile/WorkExperience';
import EducationQualification from '~/components/user/profile/EducationQualification';
import ProfessionalCertificate from '~/components/user/profile/ProfessionalCertificate';
import LicensePermission from '~/components/user/profile/LicensePermission';
import Availability from '~/components/user/preference/Availability';
import JobPreference from '~/components/user/preference/JobPreference';
import Transportation from '~/components/user/preference/Transportation';
import TermsConditions from '~/components/auth/TermsConditions';
import Commons from '~/mixins/common'
export default {
  mixins:[Commons],
  layout: 'main',
  middleware: 'guest',
  components:{
    GeneralInfo,
    SocialMedia,
    Accommodation,
    BankDetails,
    TaxDetails,
    WorkExperience,
    EducationQualification,
    ProfessionalCertificate,
    LicensePermission,
    Availability,
    JobPreference,
    Transportation,
    TermsConditions
  },
  data(){
    return {
      candidate: new Object(null),
      loaded: false
    }
  },
  methods:{
    saveData(sd){
      // this.candidate.user_id = null
      // this.candidate.profileImage = null
      // this.candidate.signature = null
      // this.candidate.personal_details = this.$refs.gInfo.genInfo
      // this.candidate.social_medias = this.$refs.socialMedia.mySocialLinks
      // this.candidate.accommodation = this.$refs.accommodation.accomodation_info
      // this.candidate.bank_details = this.$refs.bankDetails.bankData
      // this.candidate.tax_details = this.$refs.taxDetails.taxData
      // this.candidate.work_experience = this.$refs.workExperience.experiences
      // this.candidate.education_qualification = this.$refs.eduQualification.mycertificates
      // this.candidate.professional_certificate = this.$refs.proCertificate.professional_certificate
      // this.candidate.license_information = this.$refs.lisence.mylisences
      // this.candidate.available_schedule = this.$refs.available.days
      this.loadCandidate()
    },
    loadCandidate(){
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
  }
}
</script>

<style lang="scss" scoped >

</style>
