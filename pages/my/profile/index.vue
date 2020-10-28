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
          <div class="col-md-12">
<!--            <complete-progress v-if="loaded" :candidate-full="candidate"></complete-progress>-->
          </div>
        </div>
      </div>
    </section>
    <section class="home-section">
    <div style="max-width: 100%;">
      <b-card no-body>
        <b-tabs pills card small align="center">
          <b-tab title="My Details" active>
            <general-info v-if="loaded" :personal-details="candidate.personal_details" ref="gInfo" @saveData="saveData($event)" />
            <social-media v-if="loaded" ref="socialMedia" :social-medea-data="candidate.social_medias"  @saveData="saveData($event)" />
          </b-tab>
          <b-tab title="Visa & Passport">
            <passport v-if="loaded" ref="acc" :passport-info="candidate.passport" @saveData="saveData($event)"></passport>
          </b-tab>
          <b-tab title="My Financial">
            <bank-details v-if="loaded" ref="bankDetails" :bank-info="candidate.bank_details" @saveData="saveData($event)"/>
            <tax-details v-if="loaded" ref="taxDetails" :tax-info="candidate.tax_details" @saveData="saveData($event)" />
          </b-tab>
          <b-tab title="My Education">
            <education-qualification v-if="loaded" ref="eduQualification" :education-data="candidate.education_qualification" @saveData="saveData($event)" />
            <professional-certificate v-if="loaded" ref="proCertificate" :certificates="candidate.professional_certificate" @saveData="saveData($event)" />
          </b-tab>
          <b-tab title="My Experience">
            <work-experience v-if="loaded" ref="workExperience" :experience-data="candidate.work_experience" @saveData="saveData($event)" />
          </b-tab>
          <b-tab title="My Licence">
            <license-permission v-if="loaded" ref="lisence" :lisence-data="candidate.license_information" @saveData="saveData($event)" />
          </b-tab>
          <b-tab title="My Availabilities">
            <availability v-if="loaded" ref="available" :schedule="candidate.available_schedule"></availability>
          </b-tab>
          <b-tab title="My Preferences">
            <job-preference v-if="loaded" ref="jobPreference" :preferences="candidate.job_preference"></job-preference>
            <transportation v-if="loaded" ref="transportInformation" :travel-preference="candidate.travel_preference"></transportation>
          </b-tab>
          <b-tab title="My Health">
            <health-fitness v-if="loaded" :health-data="candidate.health_fitness"></health-fitness>
          </b-tab>
          <b-tab title="My Induction">
              <induction-slide v-if="loaded"></induction-slide>
          </b-tab>
          <b-tab title="Terms & Conditions">
            <terms-conditions v-if="loaded" ref="tc" @tcUpdated="saveData($event)" :sign-image="candidate.signature" :tc-accepted="candidate.accepted_tc"></terms-conditions>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
    </section>
  </div>

</template>

<script>
import CompleteProgress from '~/components/user/profile/CompleteProgress';
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
import InductionSlide from '~/components/user/others/InductionSlide';
import TermsConditions from '~/components/auth/TermsConditions';
import Commons from '~/mixins/common'
export default {
  mixins:[Commons],
  layout: 'main',
  middleware: 'guest',
  components:{
    CompleteProgress,
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
    InductionSlide,
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
      title: 'my profile | stevejobs',
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
