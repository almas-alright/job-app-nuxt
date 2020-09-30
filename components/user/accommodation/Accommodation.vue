<template>
  <section class="site-section pb-0">
    <div class="container">

      <div class="row align-items-center">
        <div class="col-lg-12">
          <h4>Accommodation Info  <b-button pill size="sm" variant="info" v-if="!showEditForm" @click="editForm()">edit</b-button></h4>
        </div>
      </div>

      <div v-if="!showEditForm" class="row">
        <div class="col-lg-6 mb-5 mb-lg-0">
          <dl class="row">
            <dt class="col-sm-6">Citizen Type : </dt>
            <dd class="col-sm-6"> {{ accommodation_info.citizen_type }}</dd>
          </dl>
          <dl class="row" v-if="!isCitizen" >
            <dt class="col-sm-6">Passport Number : </dt>
            <dd class="col-sm-6"> {{ accommodation_info.passport_number }}</dd>
            <dt class="col-sm-6">Passport Image : </dt>
            <dd class="col-sm-6"> <b-img class="img-border img-table" :src="getImage(accommodation_info.passport_image, 'thumb')" fluid alt="Fluid image"></b-img></dd>
            <dt class="col-sm-6">Visa Type : </dt>
            <dd class="col-sm-6"> {{ accommodation_info.visa_type }}</dd>
            <dt class="col-sm-6">Visa Subclass : </dt>
            <dd class="col-sm-6"> {{ accommodation_info.visa_subclass }}</dd>
            <dt class="col-sm-6">Visa Expiry Date : </dt>
            <dd class="col-sm-6"> {{ accommodation_info.visa_expiry }}</dd>
            <dt class="col-sm-6">Visa Image : </dt>
            <dd class="col-sm-6"> <b-img class="img-border img-table" :src="getImage(accommodation_info.passport_image, 'thumb')" fluid alt="Fluid image"></b-img></dd>
            <dt class="col-sm-6">COE Image : </dt>
            <dd class="col-sm-6"> <b-img class="img-border img-table" :src="getImage(accommodation_info.passport_image, 'thumb')" fluid alt="Fluid image"></b-img></dd>
          </dl>
        </div>
      </div>

      <div v-if="showEditForm" class="row">
        <div class="col-lg-6 mb-5 mb-lg-0">

          <div class="form-group">
            <b-form-select v-model="accommodation_info.citizen_type" :options="options" size="sm" class="mt-3"></b-form-select>
          </div>


          <div id="conditional" v-if="!isCitizen">
            <b-form-group inline label="Passport Number:">
              <b-form-input placeholder="passport number" v-model="accommodation_info.passport_number" size="sm" class="mt-3"></b-form-input>
            </b-form-group>
            <div class="row my-2">
              <div class="col-md-4">
                <p>Passport Image : </p>
              </div>
              <div class="col-md-2">
                <media-browser size="passport" v-model="accommodation_info.passport_image"></media-browser>
              </div>
            </div>

            <b-form-group inline label="Select Visa Type:" label-for="input-visa-type">
              <b-input-group prepend="Visa" size="sm" class="mb-2">
                <b-form-input
                  id="input-visa-type"
                  name="visa_type"
                  v-model="accommodation_info.visa_type"
                  list="input-list-visa-type"
                  @change="updateVisaSubclass()"
                  class="capitalize"
                  placeholder="Select Visa Type"
                  size="sm"
                ></b-form-input>
                <b-form-datalist
                  id="input-list-visa-type"
                  v-model="accommodation_info.visa_subclass"
                  :options="visaList"
                  value-field="type"
                  text-field="subclass"
                  size="sm"
                ></b-form-datalist>
                <b-form-input v-model="accommodation_info.visa_subclass" size="sm" disabled></b-form-input>
              </b-input-group>
            </b-form-group>

            <div class="row my-2">
              <div class="col-md-4">
                <p>Visa Image : </p>
              </div>
              <div class="col-md-2">
                <media-browser size="visa" v-model="accommodation_info.visa_image"></media-browser>
              </div>
            </div>

            <b-input-group size="sm" class="mb-3">
              <b-form-input
                id="example-input"
                v-model="accommodation_info.visa_expiry"
                type="text"
                placeholder="YYYY-MM-DD"
                autocomplete="off"
                size="sm"
              ></b-form-input>
              <b-input-group-append>
                <b-form-datepicker
                  size="sm"
                  v-model="accommodation_info.visa_expiry"
                  button-only
                  right
                  locale="en-US"
                  aria-controls="example-input"
                  @context="onContext"
                ></b-form-datepicker>
              </b-input-group-append>
            </b-input-group>

            <div class="row my-2">
              <div class="col-md-4">
                <b-form-checkbox
                  id="checkbox-1"
                  v-model="accommodation_info.is_student"
                  name="checkbox-1"
                  value="yes"
                  unchecked-value="no"
                  @change="is_student = !is_student"
                >
                  I am student
                </b-form-checkbox>
              </div>
              <div class="col-md-2">
                <media-browser v-if="is_student" size="student" v-model="accommodation_info.coe_image"></media-browser>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-2">

            </div>
            <div class="offset-lg-7 col-lg-3">
              <button type="button" v-on:click="saveForm()" class="btn btn-success btn-sm">save changes</button>
            </div>
          </div>

        </div>
      </div>

    </div>
    <br>
  </section>
</template>

<script>
import MediaBrowser from "@/components/media/MediaBrowser";
import visa_list from "static/visa_list";
import _ from "lodash";
import Commons from '~/mixins/common'
export default {
  mixins:[Commons],
  components:{ MediaBrowser },
  name: "Accommodation",
  data(){
    return {
      visaList: visa_list,
      showEditForm : false,
      is_student: false,
      options:[
        { value: null, text: 'select resident type' },
        { value: 'citizen', text: 'Citizen' },
        { value: 'permanent-resident', text: 'Permanent-Resident' },
        { value: 'non-immigrant', text: 'Non-Immigrant' },
        { value: 'sheltered', text: 'Sheltered' },
      ],
      accommodation_info:{
        citizen_type: null,
        passport_number: null,
        visa_type: null,
        visa_subclass: null,
        visa_expiry: null,
        is_student: 'no',
        coe_image: require('@/assets/images/placeholder.png'),
        passport_image: require('@/assets/images/placeholder.png'),
        visa_image: require('@/assets/images/placeholder.png'),
      }
    }
  },
  methods: {
    editForm() {
      this.showEditForm = !this.showEditForm
    },
    updateVisaSubclass(){
      let that = this
      let item  = _.find(that.visaList, function(o) { return o.type === that.accommodation_info.visa_type })
      if(typeof item != "undefined"){
        this.accommodation_info.visa_subclass = item.subclass
      } else {
        this.accommodation_info.visa_type = null
        this.accommodation_info.visa_subclass = null
      }
    },
    saveForm(){
      this.$emit('saveData')
      this.showEditForm = !this.showEditForm
    },
  },
  computed:{
    isCitizen(){
      return !(this.accommodation_info.citizen_type != null && this.accommodation_info.citizen_type !== 'citizen');
    }
  }
}
</script>

<style scoped>

</style>
