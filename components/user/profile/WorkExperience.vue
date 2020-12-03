<template>
  <div class="container">

    <div class="row align-items-center">
      <div class="col-lg-12">
        <h4>Work Experience
          <b-button pill size="sm" variant="info" v-if="!showEditForm" @click="editForm()"><fa :icon="['fas', 'edit']"/></b-button>
        </h4>
      </div>
    </div>


    <div v-if="!showEditForm" class="row">
      <div class="col-lg-12 mb-5 mb-lg-0">
        <b-table striped hover :items="experiences" :fields="fields">
          <template v-slot:cell(started_at)="items">
            {{ $moment(items.value).format('DD MMM YYYY') }}
          </template>
          <template v-slot:cell(end_at)="items">
            {{ $moment(items.value).format('DD MMM YYYY') }}
          </template>
        </b-table>
      </div>
    </div>

  <validation-observer v-if="showEditForm" tag="div" class="row" ref="observer" v-slot="{ handleSubmit }">
    <div class="col-lg-12">

    </div>
    <div class="col-lg-12 mb-5 mb-lg-0">
      <div v-for="(experience, index) in experiences" :key="index" class="row jex-single">
        <div class="col-lg-2 mb-5 mb-lg-0">
          <validation-provider
            name="Organization"
            :rules="{ required: true }"
            v-slot="validationContext"
          >
            <b-form-input size="sm" v-model="experience.company_name" placeholder="Company Name" :state="getValidationState(validationContext)"></b-form-input>
            <b-form-invalid-feedback>{{ validationContext.errors[0] }}</b-form-invalid-feedback>
          </validation-provider>
        </div>
        <div class="col-lg-2 mb-5 mb-lg-0">
          <validation-provider
            name="Referer"
            :rules="{ required: true }"
            v-slot="validationContext"
          >
            <b-form-input size="sm" v-model="experience.reference_number" placeholder="Referer Number" :state="getValidationState(validationContext)"></b-form-input>
            <b-form-invalid-feedback>{{ validationContext.errors[0] }}</b-form-invalid-feedback>
          </validation-provider>
        </div>
        <div class="col-lg-2 mb-5 mb-lg-0">
          <validation-provider
            name="Job Title"
            :rules="{ required: true }"
            v-slot="validationContext"
          >
            <b-form-input size="sm" v-model="experience.job_title" placeholder="Job Title" :state="getValidationState(validationContext)"></b-form-input>
            <b-form-invalid-feedback>{{ validationContext.errors[0] }}</b-form-invalid-feedback>
          </validation-provider>
        </div>
        <div class="col-lg-2 mb-5 mb-lg-0">
          <date-picker input-class="form-control form-control-sm c-dp" placeholder="started at" v-model="experience.started_at" valueType="format"></date-picker>
          <validation-provider
            name="Start Date"
            rules="required"
            v-slot="validationContext"
          >
            <b-form-input v-show="false" v-model="experience.started_at" :state="getValidationState(validationContext)"/>
            <b-form-invalid-feedback>{{ validationContext.errors[0] }}</b-form-invalid-feedback>
          </validation-provider>
        </div>
        <div class="col-lg-2 mb-5 mb-lg-0">
<!--          <b-form-checkbox-->
<!--            size="sm"-->
<!--            :id="'checkbox-'+index"-->
<!--            v-model="experience.is_current"-->
<!--            :name="'checkbox-'+index"-->
<!--            value="continuing"-->
<!--            unchecked-value="resigned"-->
<!--            @change="differenceContinue(index)"-->
<!--          >-->
<!--            continuing-->
<!--          </b-form-checkbox>-->
          <div class="form-group">
            <validation-provider
              name="Job Status"
              rules="required"
              v-slot="validationContext"
            >
              <b-form-select
                size="sm"
                v-model="experience.is_current"
                :options="jobStatusOptions"
                :state="getValidationState(validationContext)"
                @change="differenceContinue(index)"
              >
                <template v-slot:first>
                  <b-form-select-option :value="'null'" disabled >-- Select Status --</b-form-select-option>
                </template>
              </b-form-select>
              <b-form-invalid-feedback>{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </validation-provider>
          </div>
        </div>
        <div class="col-lg-2 mb-5 mb-lg-0">
          <date-picker v-if="experience.is_current === 'resigned'" input-class="form-control form-control-sm c-dp" placeholder="end at" @change="difference(index)" v-model="experience.end_at" valueType="format"></date-picker>
          <validation-provider
            v-if="experience.is_current === 'resigned'"
            name="End Date"
            rules="required"
            v-slot="validationContext"
          >
            <b-form-input v-show="false" v-model="experience.end_at" :state="getValidationState(validationContext)"/>
            <b-form-invalid-feedback>{{ validationContext.errors[0] }}</b-form-invalid-feedback>
          </validation-provider>
          <b-badge variant="danger" @click="doRemove(index)" ><fa :icon="['fas', 'trash-alt']"/></b-badge>
        </div>
      </div>
    </div>

    <div class="col-lg-12 mb-5 mb-lg-0">
      <br>
      <div class="row">
        <div class="col-lg-2">
          <button type="button" @click="handleSubmit(addJob)" class="btn btn-primary btn-sm"><fa :icon="['fas', 'plus-square']"/></button>
        </div>
        <div class="offset-lg-6 col-lg-4">
          <button type="button" v-on:click="editForm" class="btn btn-dark btn-sm"><fa :icon="['fas', 'window-close']"/></button>
          <button type="button" v-if="experiences.length" v-on:click="handleSubmit(saveForm)" class="btn btn-success btn-sm"><fa :icon="['fas', 'save']"/> save</button>
        </div>
      </div>
    </div>
  </validation-observer>

  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import _ from 'lodash'
import commons from '~/mixins/common'
export default {
  mixins:[commons],
  components:{DatePicker},
  props: {
    experienceData: {
      type: Array,
      default: function (){
        return [{company_name: null, reference_number: null, job_title: null, started_at:null, end_at: null, year_experience:0, is_current: null}]
      }
    }
  },
  data() {
    return {
      showEditForm: false,
      experiences: this.experienceData,
      fields:[
        { key: 'company_name', label:'Organization' },
        { key: 'job_title', label:'Position' },
        { key: 'started_at', label:'Started' },
        { key: 'end_at', label:'End' },
        { key: 'year_experience', label:'Passed Years' },
        { key: 'is_current', label:'Status' },
      ],
      jobStatusOptions:[
        { value: 'continuing', text: 'Continuing' },
        { value: 'resigned', text: 'Resigned' }
      ]
    }
  },
  methods: {
    editForm() {
      this.showEditForm = !this.showEditForm
    },
    saveForm(){
      let totalExp = _.sumBy(this.experiences, 'year_experience');
      this.sendData({work_experience:this.experiences, experience: totalExp }, 'Work Experience')
      // this.$emit('saveData')
      this.showEditForm = !this.showEditForm
    },
    addJob() {
      this.experiences.push({company_name: null, reference_number: null, job_title: null, started_at:null, end_at: null, year_experience:0, is_current: null})
    },
    doRemove(index){
      if(typeof this.experienceData[index] === 'undefined'){
        this.removeJob(index)
      } else {
        this.$swal.fire({
          title: 'Are you sure?',
          text: "delete this!",
          showCancelButton: true,
          confirmButtonColor: '#d33',
          confirmButtonText: 'Yes, delete!'
        }).then((result) => {
          if (result.value) {
            this.removeJob(index)
            this.sendData2({work_experience:this.experiences}, 'Work Experience')
          }
        })
      }
    },
    difference(index){
      let experience = this.experiences[index]
      if(experience.started_at && experience.end_at){
        let mStart = this.$moment(experience.started_at)
        let mEnd = this.$moment(experience.end_at)
        let diff = mEnd.diff(mStart, 'years')
        this.experiences[index].year_experience = diff
      }
    },
    differenceContinue(index){
      let experience = this.experiences[index]
      if(experience.is_current === 'continuing'){
        let now = this.$moment().format('YYYY-M-D');
        if(experience.started_at){
          let mStart = this.$moment(experience.started_at)
          let mEnd = this.$moment()
          let diff = mEnd.diff(mStart, 'years')
          this.experiences[index].year_experience = diff
        }
      }
    },
    removeJob(index) {
      this.experiences.splice(index, 1)
    }
  },
  watch:{
    experienceData: {
      // the callback will be called immediately after the start of the observation
      immediate: true,
      handler (val, oldVal) {
        if(_.isEmpty(val)){
          this.experiences = [{company_name: null, reference_number: null, job_title: null, started_at:null, end_at: null, year_experience:0, is_current: null}]
        }
      }
    }
  }
}
</script>

<style scoped>
.row.jex-single {
  margin: 2.5px auto;
}
</style>
