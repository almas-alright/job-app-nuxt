<template>
  <section class="pb-0">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-12">
          <h4>Personal Details
            <b-button pill size="sm" variant="info" v-if="!showEditForm" v-on:click="editForm()">
              <fa :icon="['fas', 'edit']"/>
            </b-button>
          </h4>
        </div>
      </div>
      <div v-if="showEditForm">
        <validation-observer tag="div" class="row align-items-center" ref="observer" v-slot="{ handleSubmit }">
          <div class="col-lg-6 mb-5 mb-lg-0">
            <div class="form-group">
              <validation-provider
                name="First Name"
                :rules="{ required: true, min: 3 }"
                v-slot="validationContext"
              >
                <b-form-input size="sm" placeholder="Enter First Name" v-model="genInfo.firstName"
                              :state="getValidationState(validationContext)"></b-form-input>
                <b-form-invalid-feedback>{{ validationContext.errors[0] }}</b-form-invalid-feedback>
              </validation-provider>
            </div>
            <div class="form-group">
              <validation-provider
                name="Last Name"
                :rules="{ required: true, min: 3 }"
                v-slot="validationContext"
              >
                <b-form-input size="sm" placeholder="Enter Last Name" v-model="genInfo.lastName"
                              :state="getValidationState(validationContext)"></b-form-input>
                <b-form-invalid-feedback>{{ validationContext.errors[0] }}</b-form-invalid-feedback>
              </validation-provider>
            </div>
            <div class="form-group">
              <date-picker input-class="form-control form-control-sm c-dp" placeholder="date of birth"
                           v-model="genInfo.dateOfBirth" valueType="format"></date-picker>
              <validation-provider
                name="Date Of Birth"
                rules="required"
                v-slot="validationContext"
              >
                <b-form-input v-show="false" v-model="genInfo.dateOfBirth" :state="getValidationState(validationContext)"/>
                <b-form-invalid-feedback>{{ validationContext.errors[0] }}</b-form-invalid-feedback>
              </validation-provider>
            </div>
            <div class="form-group">
              <validation-provider
                name="marital status"
                rules="required"
                v-slot="validationContext"
              >
                <b-form-select
                  size="sm"
                  v-model="genInfo.maritalStatus"
                  :state="getValidationState(validationContext)"
                  :options="msoptions"
                >
                </b-form-select>
                <b-form-invalid-feedback>{{ validationContext.errors[0] }}</b-form-invalid-feedback>
              </validation-provider>
            </div>
            <div class="form-group">
              <validation-provider
                name="Contact Number"
                :rules="{ required:true, regx: /\+?\d+$/  }"
                v-slot="validationContext"
              >
                <b-form-input size="sm" placeholder="Enter Contact number" v-model="genInfo.contactNumber"
                              :state="getValidationState(validationContext)"></b-form-input>
                <b-form-invalid-feedback>{{ validationContext.errors[0] }}</b-form-invalid-feedback>
              </validation-provider>
            </div>
            <div class="form-group">
              <b-form-input size="sm" placeholder="emergency contact"
                            v-model="genInfo.emergencyContactNumber"></b-form-input>
            </div>
          </div>

          <div class="col-lg-6 ml-auto">
            <div class="form-group">
              <b-form-input size="sm" disabled :type="'email'" placeholder="mail@example.com"
                            v-model="genInfo._email"></b-form-input>
            </div>
            <div class="form-group">
              <validation-provider
                name="Nationality"
                rules="required"
                v-slot="validationContext"
              >
                <b-form-select
                  size="sm"
                  id="nationality"
                  name="nationality"
                  v-model="genInfo.nationality"
                  :options="nationalities"
                  :state="getValidationState(validationContext)"
                  value-field="name"
                  text-field="name"
                  class="capitalize"
                >
                  <template v-slot:first>
                    <b-form-select-option :value="'null'" disabled>-- Please Select Nationality --
                    </b-form-select-option>
                  </template>
                </b-form-select>
                <b-form-invalid-feedback>{{ validationContext.errors[0] }}</b-form-invalid-feedback>
              </validation-provider>
            </div>

            <fieldset> Address
              <div class="form-group">
                <validation-provider
                  name="State"
                  rules="required"
                  v-slot="validationContext"
                >
                <b-form-select
                  size="sm"
                  v-model="genInfo.state"
                  :options="stateOptions"
                  :state="getValidationState(validationContext)"
                  value-field="id"
                  text-field="state_name"
                  @change="getSubarb"
                >
                  <template v-slot:first>
                    <b-form-select-option :value="'null'" disabled>-- Please Select State --</b-form-select-option>
                  </template>
                </b-form-select>
                  <b-form-invalid-feedback>{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                </validation-provider>
              </div>
              <div class="form-group">
                <validation-provider
                  name="Suburb"
                  rules="required"
                  v-slot="validationContext"
                >
                  <b-form-select
                    size="sm"
                    v-model="genInfo.suburb"
                    :options="suburbOptions"
                    :state="getValidationState(validationContext)"
                    value-field="id"
                    text-field="suburb_name"
                    @click="selectState"
                  >
                    <template v-slot:first>
                      <b-form-select-option :value="'null'" disabled>-- Please Select State --</b-form-select-option>
                    </template>
                  </b-form-select>
                  <b-form-invalid-feedback>{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                </validation-provider>
              </div>
              <div class="form-group">
                <validation-provider
                  name="Address"
                  rules="required"
                  v-slot="validationContext"
                >
                  <b-form-input size="sm" placeholder="Street Address" v-model="genInfo.streetAddress"
                                :state="getValidationState(validationContext)"></b-form-input>
                  <b-form-invalid-feedback>{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                </validation-provider>
              </div>
            </fieldset>

          </div>
          <div class="col-lg-12">
            <button type="button" v-on:click="editForm()" class="btn btn-dark btn-sm">
              <fa :icon="['fas', 'window-close']"/>
            </button>
            <button type="button" v-on:click="handleSubmit(saveForm)" class="btn btn-success btn-sm">
              <fa :icon="['fas', 'save']"/>
              save
            </button>
          </div>
        </validation-observer>
      </div>

      <div v-if="!showEditForm" class="row align-items-center">
        <div class="col-lg-6 mb-5 mb-lg-0">
          <dl class="row">
            <dt class="col-sm-6">Full Name :</dt>
            <dd class="col-sm-6">{{ genInfo.firstName | isEmpty('first name') }}
              {{ genInfo.lastName | isEmpty('last name') }}
            </dd>

            <dt class="col-sm-6">Date Of Birth :</dt>
            <dd class="col-sm-6">{{ genInfo.dateOfBirth | isEmpty('date of birth') }}</dd>

            <dt class="col-sm-6">Marital Status :</dt>
            <dd class="col-sm-6"> {{ genInfo.maritalStatus | isEmpty('set Marital Status') }}</dd>

            <dt class="col-sm-6">Nationality :</dt>
            <dd class="col-sm-6"> {{ genInfo.nationality | isEmpty('set Nationality') }}</dd>
          </dl>
        </div>
        <div class="col-lg-5 ml-auto">
          <dl class="row">
            <dt class="col-sm-6">Email :</dt>
            <dd class="col-sm-6"> {{ genInfo._email | isEmpty('set email') }}</dd>

            <dt class="col-sm-6">Contact Number :</dt>
            <dd class="col-sm-6"> {{ genInfo.contactNumber | isEmpty('set contact number') }}</dd>

            <dt class="col-sm-6">Emergency Contact :</dt>
            <dd class="col-sm-6"> {{ genInfo.emergencyContactNumber | isEmpty('set emergency number') }}</dd>

            <dt class="col-sm-6">Street Address :</dt>
            <dd class="col-sm-6"> {{ genInfo.streetAddress | isEmpty('set address') }}</dd>
          </dl>
        </div>
      </div>


    </div>
  </section>
</template>

<script>
import country_list from '~/static/country_list'
import commons from '~/mixins/common'
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

export default {
  components: {DatePicker},
  props: {
    personalDetails: {
      type: Object,
      default: function () {
        return {
          firstName: null,
          lastName: null,
          dateOfBirth: null,
          maritalStatus: null,
          nationality: null,
          _email: null,
          contactNumber: null,
          emergencyContactNumber: null,
          state: null,
          suburb:null,
          streetAddress: null,
        }
      }
    }
  },
  mixins: [commons],
  data() {

    return {
      showEditForm: false,
      genInfo: this.personalDetails,
      nationalities: country_list,
      msoptions: [
        {value: null, text: 'Please select an option'},
        {value: 'single', text: 'Single'},
        {value: 'married', text: 'Married'},
        {value: 'separated', text: 'Separated'}
      ],
      stateOptions:[],
      suburbOptions:[]
    }

  },
  methods: {
    editForm() {
      this.showEditForm = !this.showEditForm
    },
    saveForm() {
      this.sendData({personal_details: this.genInfo}, 'General Information')
      this.$emit('saveData')
      this.showEditForm = !this.showEditForm
    },
    getState(){
      let that = this
      this.$axios.get('sd/get-states').then(response => {
        that.stateOptions = response.data
      }).finally(function(){
        if(that.genInfo.state != null){
          that.getSubarb()
        }
      })
    },
    getSubarb(){
      let that = this
      this.$axios.get('sd/get-suburbs',{
        params: {
          state_id: that.genInfo.state
        }
      }).then(response => {
        that.suburbOptions = response.data
      })
    },
    selectState(){
      if(that.genInfo.state === null){
        console.log('adsddasdas')
      }
    }
  },
  filters: {
    isEmpty(value, alter) {
      if (!value) {
        return alter
      } else {
        return value
      }
    }
  },
  created() {
    this.genInfo._email = this.user.email
    this.getState();
  }
}
</script>
