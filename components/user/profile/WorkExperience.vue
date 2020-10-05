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
      <div class="col-lg-8 mb-5 mb-lg-0">
        <b-table striped hover :items="experiences"></b-table>
      </div>
    </div>

    <div v-if="showEditForm" class="row">
      <div class="col-lg-12 mb-5 mb-lg-0">
        <div v-for="(experience, index) in experiences" :key="index" class="row jex-single">
          <div class="col-lg-3 mb-5 mb-lg-0">
            <b-form-input size="sm" v-model="experience.company_name" placeholder="Company Name"></b-form-input>
          </div>
          <div class="col-lg-2 mb-5 mb-lg-0">
            <b-form-input size="sm" v-model="experience.reference_number" placeholder="Referance Number"></b-form-input>
          </div>
          <div class="col-lg-2 mb-5 mb-lg-0">
            <b-form-input size="sm" v-model="experience.job_title" placeholder="Job Title"></b-form-input>
          </div>
          <div class="col-lg-2 mb-5 mb-lg-0">
            <b-input-group size="sm" class="mb-3">
              <b-form-input
                id="example-input"
                v-model="experience.end_at"
                type="text"
                placeholder="YYYY-MM-DD"
                autocomplete="off"
                size="sm"
              ></b-form-input>
              <b-input-group-append>
                <b-form-datepicker
                  size="sm"
                  v-model="experience.end_at"
                  button-only
                  right
                  locale="en-US"
                  aria-controls="example-input"
                ></b-form-datepicker>
              </b-input-group-append>
            </b-input-group>
          </div>
          <div class="col-lg-1 mb-5 mb-lg-0">
            <b-form-checkbox
              size="sm"
              id="checkbox-1"
              v-model="experience.is_current"
              name="checkbox-1"
              value="continuing"
              unchecked-value="resigned"
            >
              continuing
            </b-form-checkbox>
          </div>
          <div class="col-lg-1 mb-5 mb-lg-0">
            <button type="button" @click="doRemove(index)" class="btn btn-danger btn-sm"><fa :icon="['fas', 'trash-alt']"/></button>
          </div>
        </div>
      </div>

      <div class="col-lg-12 mb-5 mb-lg-0">
        <br>
        <div class="row">
          <div class="col-lg-2">
            <button type="button" @click="addJob()" class="btn btn-primary btn-sm"><fa :icon="['fas', 'plus-square']"/></button>
          </div>
          <div class="offset-sm-6 col-sm-4">
            <button type="button" v-on:click="editForm()" class="btn btn-dark btn-sm"><fa :icon="['fas', 'window-close']"/></button>
            <button type="button" v-if="experiences.length" v-on:click="saveForm()" class="btn btn-success btn-sm"><fa :icon="['fas', 'save']"/> save</button>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import _ from 'lodash'
import commons from '~/mixins/common'
export default {
  mixins:[commons],
  props: {
    experienceData: {
      type: Array,
      default: function (){
        return [{company_name: null, reference_number: null, job_title: null, end_at: null, is_current: 'resigned'}]
      }
    }
  },
  data() {
    return {
      showEditForm: false,
      experiences: this.experienceData
    }
  },
  methods: {
    editForm() {
      this.showEditForm = !this.showEditForm
    },
    saveForm(){
      this.sendData({work_experience:this.experiences}, 'Work Experience')
      this.$emit('saveData')
      this.showEditForm = !this.showEditForm
    },
    addJob() {
      this.experiences.push({company_name: '', reference_number: '', job_title: '', end_at: '', is_current: 'resigned'})
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
          this.experiences = [{company_name: null, reference_number: null, job_title: null, end_at: null, is_current: 'resigned'}]
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
