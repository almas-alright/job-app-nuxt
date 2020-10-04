t<template>
    <section class="site-section pb-0">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-12">
              <h4>Personal Details  <b-button pill size="sm" variant="info" v-if="!showEditForm" v-on:click="editForm()">edit</b-button></h4>
          </div>
        </div>
        <div v-if="showEditForm" class="row align-items-center">
          <div class="col-lg-6 mb-5 mb-lg-0">
            <div class="form-group">
                <b-form-input size="sm" placeholder="Enter First Name" v-model="genInfo.firstName"></b-form-input>
            </div>
            <div class="form-group">
              <b-form-input size="sm" placeholder="Enter Last Name" v-model="genInfo.lastName"></b-form-input>
            </div>
            <div class="form-group">
                <input type="date" v-model="genInfo.dateOfBirth" class="form-control form-control-sm" aria-describedby="emailHelp" placeholder="Date Of Birth" min="1980-01-01" >
            </div>
            <div class="form-group">
                <select v-model="genInfo.maritalStatus" class="form-control form-control-sm">
                    <option value="?">select marital status</option>
                    <option value="single">single</option>
                    <option value="married">married</option>
                    <option value="separeted">separeted</option>
                </select>
            </div>
            <div class="form-group">
                <b-form-select
                    id="nationality"
                    name="nationality"
                    v-model="genInfo.nationality"
                    :options="nationalities"
                    value-field="name"
                    text-field="name"
                    class="capitalize"
                  >
                  <template v-slot:first>
                      <b-form-select-option :value="'null'" disabled>-- Please Select Nationality --</b-form-select-option>
                  </template>
                </b-form-select>
            </div>
          </div>

          <div class="col-lg-6 ml-auto">
            <div class="form-group">
              <b-form-input size="sm" disabled :type="'email'" placeholder="mail@example.com" v-model="genInfo._email"></b-form-input>
            </div>
            <div class="form-group">
                <b-form-input size="sm" placeholder="Enter Contact number" v-model="genInfo.contactNumber"></b-form-input>
            </div>
            <div class="form-group">
                <b-form-input size="sm" placeholder="emergency contact" v-model="genInfo.emergencyContactNumber"></b-form-input>
            </div>
            <div class="form-group">
                <b-form-input size="sm" placeholder="Street Address" v-model="genInfo.streetAddress"></b-form-input>
            </div>
          </div>
          <div class="col-lg-12">
            <button type="button" v-on:click="editForm()" class="btn btn-dark btn-sm">Cancel </button>
            <button type="button" v-on:click="saveForm()" class="btn btn-success btn-sm">save changes</button>
          </div>

        </div>

        <div v-if="!showEditForm" class="row align-items-center">
          <div class="col-lg-6 mb-5 mb-lg-0">
              <dl class="row">
                <dt class="col-sm-6">Full Name : </dt>
                <dd class="col-sm-6">{{ genInfo.firstName | isEmpty('first name') }} {{ genInfo.lastName | isEmpty('last name') }}</dd>

                <dt class="col-sm-6">Date Of Birth : </dt>
                <dd class="col-sm-6">{{ genInfo.dateOfBirth | isEmpty('date of birth') }}</dd>

                <dt class="col-sm-6">Marital Status : </dt>
                <dd class="col-sm-6"> {{ genInfo.maritalStatus | isEmpty('set Marital Status') }} </dd>

                <dt class="col-sm-6">Nationality : </dt>
                <dd class="col-sm-6"> {{ genInfo.nationality | isEmpty('set Nationality') }} </dd>
              </dl>
          </div>
          <div class="col-lg-5 ml-auto">
            <dl class="row">
                <dt class="col-sm-6">Email : </dt>
                <dd class="col-sm-6"> {{ genInfo._email | isEmpty('set email') }} </dd>

                <dt class="col-sm-6">Contact Number : </dt>
                <dd class="col-sm-6"> {{ genInfo.contactNumber | isEmpty('set contact number') }} </dd>

                <dt class="col-sm-6">Emergency Contact : </dt>
                <dd class="col-sm-6"> {{ genInfo.emergencyContactNumber | isEmpty('set emergency number') }} </dd>

                <dt class="col-sm-6">Street Address : </dt>
                <dd class="col-sm-6"> {{ genInfo.streetAddress | isEmpty('set address') }} </dd>
              </dl>
          </div>
        </div>


      </div>
    </section>
</template>

<script>
import country_list from '~/static/country_list'
import commons from '~/mixins/common'
export default {
  props: {
    personalDetails: {
      type: Object,
      default: function() {
          return {
            firstName: null,
            lastName: null,
            dateOfBirth: null,
            maritalStatus: null,
            nationality: null,
            _email: null,
            contactNumber: null,
            emergencyContactNumber: null,
            streetAddress: null,
          }
      }
    }
  },
  mixins:[commons],
  data(){

      return {
          showEditForm : false,
          genInfo: this.personalDetails,
          nationalities: country_list,
      }

  },
  methods:{
      editForm(){
        this.showEditForm = !this.showEditForm
      },
      saveForm(){
        this.sendData({ personal_details: this.genInfo}, 'General Information')
        this.$emit('saveData')
        this.showEditForm = !this.showEditForm
      }
  },
  filters: {
    isEmpty(value,alter) {
    if (!value) {
      return alter
    }
    else {
      return value
    }
  }
}
}
</script>
