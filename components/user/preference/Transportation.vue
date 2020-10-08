<template>
  <section class="mt-4">
    <div class="container">

      <div class="row align-items-center">
        <div class="col-lg-12">
          <h4>My Travel Preference <b-button pill size="sm" variant="info" @click="editForm()"><fa :icon="['fas', 'edit']"/></b-button></h4>
        </div>
      </div>

      <div v-if="!showEditForm" class="row">
        <div v-if="travel.ability" class="col-lg-6 mb-5 mb-lg-0 bg-secondary text-white">
          <template v-for="(transport, index) in travel.transports">
            <b-badge pill variant="info">{{ transport }}</b-badge>
            <span v-if="index+1 < travel.transports.length">, </span>
          </template>
          <p>i can travel {{ travel.ability }} km/day</p>
        </div>
      </div>

      <div v-if="showEditForm" class="row">
        <div class="col-lg-8 mb-5 mb-lg-0">
          <b-form-group label="Using options array:">
            <b-form-checkbox-group
              id="checkbox-group-r"
              v-model="travel.transports"
              :options="options"
              name="flavour-1"
            ></b-form-checkbox-group>
          </b-form-group>
        </div>
        <div class="col-lg-4">
          <div role="group">
            <label>How far you can travel?</label>
            <b-form-input
              id="input-live"
              v-model="travel.ability"
              type="number"
              size="sm"
              aria-describedby="input-live-help input-live-feedback"
              placeholder="Distance You can travel"
              trim
            ></b-form-input>

            <!-- This will only be shown if the preceding input has an invalid state -->
            <b-form-invalid-feedback id="input-live-feedback">
              Enter at least 3 letters
            </b-form-invalid-feedback>

            <!-- This is a form text block (formerly known as help block) -->
            <b-form-text id="input-live-help"></b-form-text>
          </div>
        </div>
        <div class="col-lg-6">
          <button type="button" v-on:click="editForm()" class="btn btn-dark btn-sm"><fa :icon="['fas', 'window-close']"/></button>
          <button type="button"  v-on:click="saveForm()" class="btn btn-success btn-sm"><fa :icon="['fas', 'save']"/> save</button>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import commons from '~/mixins/common'
import _ from "lodash";
export default {
  mixins:[commons],
  name: "Transportation",
  props: {
    travelPreference: {
      type: Object,
      default: function (){
        return {
          ability: 0,
          transports:[]
        }
      }
    }
  },
  data(){
    return {
      showEditForm: false,
      travel: this.travelPreference,
      options: [
        { text: 'bicycle', value: 'bicycle' },
        { text: 'bike', value: 'bike' },
        { text: 'car', value: 'car' },
        { text: 'public transport', value: 'public-transport' }
      ]
    }
  },
  methods: {
    editForm() {
      this.showEditForm = !this.showEditForm
    },
    saveForm(){
      this.sendData({travel_preference:this.travel}, 'Travel Preference')
      this.$emit('saveData')
      this.showEditForm = !this.showEditForm
    }
  },
  watch:{
    travelPreference: {
      // the callback will be called immediately after the start of the observation
      immediate: true,
      handler (val, oldVal) {
        if(_.isEmpty(val)){
          this.travel = {
            ability: 0,
            transports:[]
          }
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
