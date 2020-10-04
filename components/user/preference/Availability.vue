<template>
  <section class="site-section pb-0">
    <div class="container">

      <div class="row align-items-center">
        <div class="col-lg-12">
          <h4>My Availabilities <b-button pill size="sm" variant="info" v-if="!showEditForm" @click="editForm()">edit</b-button></h4>
        </div>
      </div>

      <div v-if="!showEditForm" class="row">
        <div class="col-lg-6 mb-5 mb-lg-0">
          <b-table striped hover :items="days"></b-table>
        </div>
      </div>

      <div v-if="showEditForm" class="row">
        <div class="col-lg-8 mb-5 mb-lg-0">
          <div v-for="(day, index) in days" :key="index" class="form-group">
            <div class="row">
              <div class="col-sm-3">
                  {{ day.day_name }} :
              </div>
              <div class="col-sm-2">
                <b-form-checkbox
                  :id="'checkbox-'+index+'-morning'"
                  v-model="day.morning"
                  name="checkbox-1"
                  value="yes"
                  unchecked-value="no"
                >
                  morning
                </b-form-checkbox>
              </div>
              <div class="col-sm-2">
                <b-form-checkbox
                  :id="'checkbox-'+index+'-afternoon'"
                  v-model="day.afternoon"
                  name="checkbox-1"
                  value="yes"
                  unchecked-value="no"
                >
                  afternoon
                </b-form-checkbox>
              </div>
              <div class="col-sm-2">
                <b-form-checkbox
                  :id="'checkbox-'+index+'-night'"
                  v-model="day.night"
                  name="checkbox-1"
                  value="yes"
                  unchecked-value="no"
                >
                  night
                </b-form-checkbox>
              </div>
              <div class="col-sm-3">
                <b-form-checkbox
                  :id="'checkbox-'+index+'-early_morning'"
                  v-model="day.early_morning"
                  name="checkbox-1"
                  value="yes"
                  unchecked-value="no"
                >
                  early morning
                </b-form-checkbox>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-1">

            </div>
            <div class="offset-sm-7 col-sm-4">
              <button type="button" v-on:click="editForm()" class="btn btn-dark btn-sm">Cancel</button>
              <button type="button"  v-on:click="saveForm()" class="btn btn-success btn-sm">save changes</button>
            </div>
          </div>

        </div>
      </div>

    </div>
    <br>
  </section>
</template>

<script>
import commons from '~/mixins/common'
import _ from "lodash";
export default {
  mixins:[commons],
  props: {
    schedule: {
      type: Array,
      default: function (){
        return this.dayClone
      }
    }
  },
  data(){
    return {
      showEditForm : false,
      days: this.schedule,
      dayClone:[
        {day_name: 'Monday', morning: 'no', afternoon:'no', night:'no', early_morning: 'no'},
        {day_name: 'Tuesday', morning: 'no', afternoon:'no', night:'no', early_morning: 'no'},
        {day_name: 'Wednesday', morning: 'no', afternoon:'no', night:'no', early_morning: 'no'},
        {day_name: 'Thursday', morning: 'no', afternoon:'no', night:'no', early_morning: 'no'},
        {day_name: 'Friday', morning: 'no', afternoon:'no', night:'no', early_morning: 'no'},
        {day_name: 'Saturday', morning: 'no', afternoon:'no', night:'no', early_morning: 'no'},
        {day_name: 'Sunday', morning: 'no', afternoon:'no', night:'no', early_morning: 'no'},
      ],
    }
  },
  methods: {
    editForm() {
      this.showEditForm = !this.showEditForm
    },
    saveForm(){
      this.sendData({available_schedule:this.days}, 'Schedule')
      this.$emit('saveData')
      this.showEditForm = !this.showEditForm
    }
  },
  watch:{
    schedule: {
      // the callback will be called immediately after the start of the observation
      immediate: true,
      handler (val, oldVal) {
        if(_.isEmpty(val)){
          this.days = this.dayClone
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
