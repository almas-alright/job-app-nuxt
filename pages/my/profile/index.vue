<template>
  <div>
    <section class="home-section section-hero inner-page overlay bg-image"
      :style="{ backgroundImage: 'url(' + require('@/assets/images/hero_1.jpg') + ')' }" id="home-section">
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-md-4"></div>
          <div class="col-md-4">
            <div class="m-2 text-center">
              <h1 class="text-white font-weight-bold">My Profile</h1>
              <div class="p-5 text-center">
                <profile-image v-if="loaded" :profile-image="candidate.profileImage" @profileImageUploaded="saveData($event)"></profile-image>
              </div>
            </div>
          </div>
          <div class="col-md-4"></div>
        </div>
      </div>
    </section>

    <general-info v-if="loaded" :personal-details="candidate.personal_details" ref="gInfo" @saveData="saveData($event)" />
    <social-media v-if="loaded" ref="socialMedia" :social-medea-data="candidate.social_medias"  @saveData="saveData($event)" />
    <passport v-if="loaded" ref="acc" :passport-info="candidate.passport" @saveData="saveData($event)"></passport>
    <bank-details v-if="loaded" ref="bankDetails" :bank-info="candidate.bank_details" @saveData="saveData($event)"/>
    <tax-details v-if="loaded" ref="taxDetails" :tax-info="candidate.tax_details" @saveData="saveData($event)" />
    <work-experience v-if="loaded" ref="workExperience" :experience-data="candidate.work_experience" @saveData="saveData($event)" />
    <education-qualification v-if="loaded" ref="eduQualification" :education-data="candidate.education_qualification" @saveData="saveData($event)" />
    <professional-certificate v-if="loaded" ref="proCertificate" :certificates="candidate.professional_certificate" @saveData="saveData($event)" />
    <license-permission v-if="loaded" ref="lisence" :lisence-data="candidate.license_information" @saveData="saveData($event)" />
    <availability v-if="loaded" ref="available" :schedule="candidate.available_schedule"></availability>
    <job-preference v-if="loaded" ref="jobPreference" :preferences="candidate.job_preference"></job-preference>
    <transportation v-if="loaded" ref="transportInformation" :travel-preference="candidate.travel_preference"></transportation>
    <health-fitness v-if="loaded" :health-data="candidate.health_fitness"></health-fitness>
    <terms-conditions v-if="loaded" ref="tc" @tcUpdated="saveData($event)" :sign-image="candidate.signature" :tc-accepted="candidate.accepted_tc"></terms-conditions>
    {{ candidate }}
  </div>
</template>

<script>
import ProfileImage from '~/components/media/ProfileImage';
import GeneralInfo from '~/components/user/profile/GeneralInfo';
import SocialMedia from '~/components/user/profile/SocialMedia';
import Passport from '~/components/user/others/Passport';
import BankDetails from '~/components/user/profile/BankDetails';
import TaxDetails from '~/components/user/profile/TaxDetails';
import WorkExperience from '~/components/user/profile/WorkExperience';
import EducationQualification from '~/components/user/profile/EducationQualification';
import ProfessionalCertificate from '~/components/user/profile/ProfessionalCertificate';
import LicensePermission from '~/components/user/others/LicensePermission';
import Availability from '~/components/user/preference/Availability';
import JobPreference from '~/components/user/preference/JobPreference';
import Transportation from '~/components/user/preference/Transportation';
import HealthFitness from '~/components/user/others/HealthFitness';
import TermsConditions from '~/components/auth/TermsConditions';
import Commons from '~/mixins/common'
export default {
  mixins:[Commons],
  layout: 'main',
  middleware: 'guest',
  components:{
    ProfileImage,
    GeneralInfo,
    SocialMedia,
    Passport,
    BankDetails,
    TaxDetails,
    WorkExperience,
    EducationQualification,
    ProfessionalCertificate,
    LicensePermission,
    Availability,
    JobPreference,
    Transportation,
    HealthFitness,
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
