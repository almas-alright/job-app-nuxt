<template>
  <section class="mt-4">
    <div class="container">

      <div class="row align-items-center">
        <div class="col-lg-12">
          <h4>My job preferences <b-button pill size="sm" variant="info" v-if="!showEditForm" @click="editForm()"><fa :icon="['fas', 'edit']"/></b-button></h4>
        </div>
      </div>
      <div v-if="!showEditForm" class="row">

        <div class="col-lg-12 mb-2 p-3 bg-secondary text-white">
          <b-form-group label="preferred job category:">
          <template v-for="(selects, index) in selected" >
            <b-badge pill variant="info"> {{ getJobCatName(selects) }}</b-badge>
            <span v-if="index+1 < selected.length">, </span>
          </template>
          </b-form-group>
        </div>

        <div class="col-lg-12 mb-2 p-3 bg-secondary text-white">
          <b-form-group label="preferred job location inside Australia:">
          <template v-for="(location, index2) in preferred_location" >
            <b-badge pill variant="info"> {{ getStateName(location) }}</b-badge>
            <span v-if="index2+1 < selected.length">, </span>
          </template>
          </b-form-group>
        </div>

        <div class="col-lg-12 mb-2 p-3 bg-secondary text-white">
          <b-form-group label="preferred job location except Australia:">
            <template v-for="(country, index3) in preferred_country" >
              <b-badge pill variant="info"> {{ getCountryName(country) }}</b-badge>
              <span v-if="index3+1 < selected.length">, </span>
            </template>
          </b-form-group>
        </div>

      </div>
      <div v-if="showEditForm" class="row">
        <div class="col-lg-12 mb-5 mb-lg-0">
          <b-form-group label="select category:">
              <Select2 class="small" v-model="selected" :options="job_cat_options" :settings="{ multiple:true, maximumSelectionLength:3 }" @change="myChangeEvent($event)" @select="mySelectEvent($event)" />
          </b-form-group>

          <fieldset class="bg-light p-3 mb-2">
            <b-form-group label="I want to work :">
                <b-form-radio-group
                  id="radio-group-x"
                  v-model="location_preference.local_choice"
                  :options="local_area"
                  name="la-radio-options"
                ></b-form-radio-group>
            </b-form-group>
            <b-form-group v-if="!toBool(location_preference.local_choice)" label="select preferred states :">
              <Select2 class="small" v-model="preferred_location" :options="state_options" :settings="{ multiple:true, maximumSelectionLength:3 }" @change="myChangeEvent($event)" @select="mySelectEvent($event)" />
            </b-form-group>
          </fieldset>

          <fieldset class="bg-light p-3 mb-2">
            <b-form-group label="I want to work (except Australia):">
              <b-form-radio-group
                id="radio-group-xc"
                v-model="location_preference.global_choice"
                :options="global_area"
                name="ga-radio-options"
              ></b-form-radio-group>
            </b-form-group>
            <b-form-group v-if="!toBool(location_preference.global_choice)" label="select preferred states :">
              <Select2 class="small" v-model="preferred_country" :options="country_options" :settings="{ multiple:true, maximumSelectionLength:3 }" @change="myChangeEvent($event)" @select="mySelectEvent($event)" />
            </b-form-group>
          </fieldset>


        </div>
        <div class="col-sm-4">
          <button type="button" v-on:click="editForm()" class="btn btn-dark btn-sm"><fa :icon="['fas', 'window-close']"/></button>
          <button type="button"  v-on:click="saveForm()" class="btn btn-success btn-sm"><fa :icon="['fas', 'save']"/> save</button>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import country_list from '~/static/country_list'
import commons from '~/mixins/common'
import _ from "lodash";
export default {
  mixins:[commons],
  // components: {Select2},
  props: {
    locationPreference: {
      type: Object,
      validator: function(obj) {
        if(typeof obj != 'object'){
          return {}
        }
      },
      default: function () {
        return {
          local_choice:1,
          global_choice:1,
        }
      }
    },
    preferredLocation: {
      type: Array,
      validator: function(obj) {
        if(typeof obj != 'object'){
          return []
        }
      },
      default: function (){
        return []
      }
    },
    preferredCountry: {
      type: Array,
      validator: function(obj) {
        if(typeof obj != 'object'){
          return []
        }
      },
      default: function (){
        return []
      }
    },
    preferences: {
      type: Array,
      default: function (){
        return []
      }
    }
  },
  data() {
    return {
      showEditForm : false,
      selected: this.preferences, // Must be an array reference!

      location_preference: this.locationPreference,
      preferred_location: this.preferredLocation, // Must be an array reference!
      preferred_country: this.preferredCountry,

      job_cat_options: [],
      job_cat_options2: [],
      state_options: [],
      country_options: [],

      local_area: [
        {text: 'Anywhere inside Australia', value: '1'},
        {text: 'Specific Areas of Australia', value: '0'}
      ],
      global_area: [
        {text: 'Any Country', value: '1'},
        {text: 'Only Specific Countries', value: '0'}
      ],
    }
  },
  methods: {
    editForm() {
      this.showEditForm = !this.showEditForm
    },
    saveForm(){
      this.sendData({
        job_preference: this.selected,
        location_preference: this.location_preference,
        preferred_location: this.preferred_location,
        preferred_country: this.preferred_country
      }, 'Job Preference')
      // this.$emit('saveData')
      this.showEditForm = !this.showEditForm
    },
    toBool(str){
      if(parseInt(str) === 1){
        return true
      }
      if(parseInt(str) === 0){
        return false
      }
    },
    getState() {
      let that = this
      this.$axios.get('sd/get-states').then(response => {
        let data = response.data
        let result = data.map(({ state_name:text , id:id }) => ( {text, id}));
        that.state_options = result
      })
    },
    getJobCat() {
      let that = this
      this.$axios.get('job-category').then(response => {
        let data = response.data.data
        let result = data.map(({ name:text , id:id }) => ( {text, id}));
        that.job_cat_options = result
      }).finally(function(){
        that.job_cat_options2 = JSON.parse(JSON.stringify(that.job_cat_options))
      })
    },
    getJobCatName(id){
      let name = ''
      let sobj = JSON.parse(JSON.stringify(this.job_cat_options2))
      name =_.result(_.find(sobj, function(jc) {
        return parseInt(jc.id) === parseInt(id);
      }), 'text');
      return name
    },
    getStateName(id){
      let name = ''
      let sobj = JSON.parse(JSON.stringify(this.state_options))
      name =_.result(_.find(sobj, function(jc) {
        return parseInt(jc.id) === parseInt(id);
      }), 'text');
      return name
    },
    getCountryName(id){
      let name = ''
      let sobj = JSON.parse(JSON.stringify(this.country_options))
      name =_.result(_.find(sobj, function(jc) {
        return parseInt(jc.id) === parseInt(id);
      }), 'text');
      return name
    },
    myChangeEvent(val){
      // console.log(val);
    },
    mySelectEvent({id, text}){
      // console.log({id, text})
    },
    resizeCountry(){
      let data = country_list
      this.country_options = data.map(({ name:text , id:id }) => ( {text, id}));
    }
  },
  created() {
    this.getJobCat();
    this.getState();
    this.resizeCountry();
  },

  watch:{
    locationPreference: {
      immediate: true,
      handler (val, oldVal) {
        if(_.isEmpty(val)){
          this.location_preference = {
            local_choice:1,
            global_choice:1
          }
        }
      }
    }
  }

}
</script>

<style scoped>

</style>
