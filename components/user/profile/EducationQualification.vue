<template>

  <section class="mt-4">
    <div class="container">

      <div class="row align-items-center">
        <div class="col-lg-12">
            <h4>Educational Qualification/Diploma Certificates <b-button pill size="sm" variant="info" v-if="!showEditForm" @click="editForm()"><fa :icon="['fas', 'edit']"/></b-button></h4>
        </div>
      </div>

      <div v-if="!showEditForm" class="row">
        <div class="col-lg-12 mb-5 mb-lg-0">
          <b-table striped hover :items="mycertificates" :fields="fields">
            <template v-slot:cell(course)="items">
              {{ getQualificationName(items.value) }}
            </template>
            <template v-slot:cell(certificate_image)="items">
              <b-img class="img-border img-table" :src="getImage(items.value, 'thumb')" fluid alt="Fluid image"></b-img>
            </template>
          </b-table>
        </div>
      </div>

      <validation-observer v-if="showEditForm" tag="div" class="row" ref="observer" v-slot="{ handleSubmit }">
        <div class="col-lg-12 mb-5 mb-lg-0">

          <div v-for="(certificate, index) in mycertificates" :key="index" class="form-group">
            <b-card bg-variant="light">
              <div class="col-sm-2">
                <b-form-group label="Course">
                  <validation-provider
                    name="Course"
                    :rules="{ required: true }"
                    v-slot="validationContext"
                  >
                  <Select2 class="small" v-model="certificate.course" :options="qualifications" placeholder="select qualification" />
<!--                  <b-form-select-->
<!--                      id="nationality"-->
<!--                      name="nationality"-->
<!--                      v-model="certificate.course"-->
<!--                      :options="certificates"-->
<!--                      :state="getValidationState(validationContext)"-->
<!--                      value-field="course"-->
<!--                      text-field="course"-->
<!--                      class="capitalize"-->
<!--                      size="sm"-->
<!--                      @change="checkIfReplicated(index)"-->
<!--                    >-->
<!--                    <template v-slot:first>-->
<!--                      <b-form-select-option :value="'null'" disabled>select</b-form-select-option>-->
<!--                    </template>-->
<!--                  </b-form-select>-->
                    <b-form-input v-show="false" v-model="certificate.course"
                                  :state="getValidationState(validationContext)"/>
                    <b-form-invalid-feedback>{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                  </validation-provider>
                </b-form-group>
              </div>
              <div class="col-sm-3">
                <b-form-group label="Institute">
                  <validation-provider
                    name="Institute"
                    rules="required"
                    v-slot="validationContext"
                  >
                  <b-form-input size="sm" placeholder="Institute" v-model="certificate.institute" :state="getValidationState(validationContext)"></b-form-input>
                    <b-form-invalid-feedback>{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                  </validation-provider>
                </b-form-group>
              </div>
              <div class="col-sm-3">
                <b-form-group label="Subject">
                  <validation-provider
                    name="Subject Name"
                    rules="required"
                    v-slot="validationContext"
                  >
                  <b-form-input size="sm" placeholder="Subject Name" v-model="certificate.subject" :state="getValidationState(validationContext)"></b-form-input>
                    <b-form-invalid-feedback>{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                  </validation-provider>
                </b-form-group>
              </div>
               <div class="col-sm-2">
                 <b-form-group label="Pass Year">
                 <date-picker input-class="form-control form-control-sm c-dp" v-model="certificate.passing_year" type="year" placeholder="passing year" valueType="format"></date-picker>
                   <validation-provider
                     name="Passing Year"
                     rules="required"
                     v-slot="validationContext"
                   >
                     <b-form-input v-show="false" v-model="certificate.passing_year"
                                   :state="getValidationState(validationContext)"/>
                     <b-form-invalid-feedback>{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                   </validation-provider>
                 </b-form-group>
              </div>
              <div class="col-sm-1">
                <b-form-group label="Image">
                <media-browser :size="index" v-model="certificate.certificate_image"></media-browser>
                  <validation-provider
                    name="Certificate Image"
                    rules="required"
                    v-slot="validationContext"
                  >
                    <b-form-input v-show="false" v-model="certificate.certificate_image"
                                  :state="getValidationState(validationContext)"/>
                    <b-form-invalid-feedback>{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                  </validation-provider>
                </b-form-group>
              </div>
              <div class="col-sm-1">
                <button type="button" @click="doRemove(index)" class="btn btn-danger btn-sm"><fa :icon="['fas', 'trash-alt']"/></button>
              </div>
            </b-card>
          </div>

          <div class="row">
            <div class="col-sm-1">
              <button type="button" @click="handleSubmit(addCert)" class="btn btn-primary btn-sm"><fa :icon="['fas', 'plus-square']"/></button>
            </div>
            <div class="offset-sm-7 col-sm-4">
              <button type="button" v-on:click="editForm" class="btn btn-dark btn-sm"><fa :icon="['fas', 'window-close']"/></button>
              <button type="button" v-if="mycertificates.length" v-on:click="handleSubmit(saveForm)" class="btn btn-success btn-sm"><fa :icon="['fas', 'save']"/> save</button>
            </div>
          </div>

        </div>
      </validation-observer>
<!--      here-->

    </div>
    <br>
  </section>

</template>

<script>
import _ from 'lodash'
import MediaBrowser from '~/components/media/MediaBrowser';
import commons from '~/mixins/common'
export default {
  mixins:[commons],
  components:{ MediaBrowser},
  props: {
    educationData: {
      type: Array,
      default: function (){
        return [{course: null, institute: null, subject: '', certificate_image: null, passing_year: null}]
      }
    }
  },
  data(){
    return {
      showEditForm : false,
      qualifications:[],
      certificates:[
        {course: 'masters', disabled: false},
        {course: 'masters (dependent)', disabled: false},
        {course: 'bachelors', disabled: false},
        {course: 'bachelors (dependent)', disabled: false},
        {course: 'diploma', disabled: false},
        {course: 'others', disabled: false},
      ],
      mycertificates: this.educationData,
      fields:[
        { key: 'course', label:'Course' },
        { key: 'institute', label:'Institute name' },
        { key: 'subject', label:'Subject/Major' },
        { key: 'certificate_image', label:'Certificate Image' },
        { key: 'passing_year', label:'Year of compilation' }
      ],
    }
  },
  methods:{
    editForm(){
      this.showEditForm = !this.showEditForm
    },
    addCert(){
      if(this.mycertificates.length < 6){
        this.mycertificates.push({course: null, institute: null, subject: '', certificate_image: null, passing_year: null})
      } else {
        this.$swal.fire('You Can not add more links')
      }
    },
    doRemove(index){
      if(typeof this.educationData[index] === 'undefined'){
        this.removeCert(index)
      } else {
        this.$swal.fire({
          title: 'Are you sure?',
          text: "delete this!",
          showCancelButton: true,
          confirmButtonColor: '#d33',
          confirmButtonText: 'Yes, delete!'
        }).then((result) => {
          if (result.value) {
            this.removeCert(index)
            this.sendData2({education_qualification: this.mycertificates}, 'Educational Qualification')
          }
        })
      }
    },
    removeCert(index){
      let removeQue = this.mycertificates[index].course
      if(removeQue){
        let certIndex = _.findIndex(this.certificates, function(o) { return o.course === removeQue });
        this.certificates[certIndex].disabled = false
      }
      this.mycertificates.splice(index, 1)
    },
    checkIfReplicated(index){
      let selectedVal = this.mycertificates[index].course
      console.log(selectedVal)
      if(selectedVal){
        let certSize = _.filter(this.mycertificates, certf => certf.course === selectedVal);
        this.disableUsed()
        if(certSize.length > 1){
          this.$swal.fire('You already added '+selectedVal)
          this.mycertificates[index].course = null
        }
      }
    },
    disableUsed(){
      let that = this;
      _.forEach(this.mycertificates, function(x){
        if(x.course){
          let certIndex = _.findIndex(that.certificates, function(o) { return o.course === x.course });
          that.certificates[certIndex].disabled = true
        }
      })
    },
    async getQualifications() {
      let that = this
      this.$axios.get('edu-attr/qualifications').then(response => {
        let data = response.data.data
        let result = data.map(({ title:text , id:id }) => ( {text, id}));
        that.qualifications = result
      })
    },
    getQualificationName(id){
      let name = ''
      let squal = JSON.parse(JSON.stringify(this.qualifications))
      name =_.result(_.find(squal, function(eq) {
        return parseInt(eq.id) === parseInt(id);
      }), 'text');
      return name
    },
    saveForm(){
      this.sendData({education_qualification: this.mycertificates}, 'Educational Qualifications')
      // this.$emit('saveData')
      this.showEditForm = !this.showEditForm
    }
  },
  created:function(){
    // this.disableUsed()
    this.getQualifications()
    //console.log('mounted')
  },
  watch:{
    educationData: {
      // the callback will be called immediately after the start of the observation
      immediate: true,
      handler (val, oldVal) {
        if(_.isEmpty(val)){
          this.mycertificates = [{course: null, institute: null, subject: '', certificate_image: null, passing_year: null}]
        }
      }
    }
  }
}
</script>
<style>
  .img-table{
    max-width: 50px;
  }
  .mx-datepicker{
    max-width: 80%;
  }
</style>
