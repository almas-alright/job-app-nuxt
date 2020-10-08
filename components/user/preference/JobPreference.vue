<template>
  <section class="mt-4">
    <div class="container">

      <div class="row align-items-center">
        <div class="col-lg-12">
          <h4>My job preferences <b-button pill size="sm" variant="info" v-if="!showEditForm" @click="editForm()"><fa :icon="['fas', 'edit']"/></b-button></h4>
        </div>
      </div>
      <div v-if="!showEditForm" class="row">
        <div class="col-lg-6 mb-5 mb-lg-0 bg-secondary text-white">
          <template v-for="(select, index) in selected">
            <b-badge pill variant="info">{{ select }}</b-badge>
            <span v-if="index+1 < selected.length">, </span>
          </template>
        </div>
      </div>
      <div v-if="showEditForm" class="row">
        <div class="col-lg-12 mb-5 mb-lg-0">
          <b-form-group label="select :">
            <b-form-checkbox-group
              id="checkbox-group-1"
              v-model="selected"
              :options="options"
              name="flavour-1"
            ></b-form-checkbox-group>
          </b-form-group>
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
import commons from '~/mixins/common'
import _ from "lodash";
export default {
  mixins:[commons],
  props: {
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
      options: [
        { text: 'Civil', value: 'civil' },
        { text: 'Mechanic', value: 'mechanic' },
        { text: 'It', value: 'it' },
        { text: 'Bank', value: 'bank' },
        { text: 'Driving', value: 'driving' },
        { text: 'Trade Industry', value: 'trade_industry' },
      ]
    }
  },
  methods: {
    editForm() {
      this.showEditForm = !this.showEditForm
    },
    saveForm(){
      this.sendData({job_preference:this.selected}, 'Job Preference')
      this.$emit('saveData')
      this.showEditForm = !this.showEditForm
    }
  },

}
</script>

<style scoped>

</style>
