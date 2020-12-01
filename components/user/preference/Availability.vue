<template>
  <section class="pb-0">
    <div class="container">

      <div class="row align-items-center">
        <div class="col-lg-12">
          <h4>My Availabilities <b-button pill size="sm" variant="info" v-if="!showEditForm" @click="editForm()"><fa :icon="['fas', 'edit']"/></b-button></h4>
        </div>
      </div>

      <div v-if="!showEditForm" class="row">
        <div class="col-lg-12 mb-5 mb-lg-0">
          <div v-if="my_schedule.from_to" class="p-3 mb-2 bg-info text-white">
            <span class="font-weight-bold">from:</span> {{ my_schedule.from_to[0] }} <span class="font-weight-bold">to:</span> {{ my_schedule.from_to[1] }}
          </div>
        </div>
        <div class="col-lg-12">
          <b-table striped hover :items="my_schedule.days" :fields="fields"></b-table>
        </div>

      </div>

      <div v-if="showEditForm" class="row">
        <div class="col-lg-8 mb-5 mb-lg-0">
          <div v-for="(day, index) in my_schedule.days" :key="index" class="form-group">
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
            <div class="col-sm-6">
              From:
              <date-picker input-class="form-control form-control-sm c-dp" v-model="my_schedule.from_to[0]" placeholder="From" valueType="format"></date-picker>
            </div>
            <div class="col-sm-6">
              To:
              <date-picker input-class="form-control form-control-sm c-dp" v-model="my_schedule.from_to[1]" placeholder="To" valueType="format"></date-picker>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-sm-12">
              <button type="button" v-on:click="select('no')" class="btn btn-outline-info btn-sm"><fa :icon="['fas', 'square']"/> deselect all</button>
              <button type="button" v-on:click="select('yes')" class="btn btn-outline-info btn-sm"><fa :icon="['fas', 'check-square']"/> select all</button>
              <button type="button" v-on:click="editForm()" class="btn btn-dark btn-sm"><fa :icon="['fas', 'window-close']"/></button>
              <button type="button"  v-on:click="saveForm()" class="btn btn-success btn-sm"><fa :icon="['fas', 'save']"/> save</button>
            </div>
          </div>

        </div>
      </div>

    </div>
    <br>
  </section>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import commons from '~/mixins/common'
import _ from "lodash";
export default {
  mixins:[commons],
  components:{DatePicker},
  props: {
    schedule: {
      type: Object,
      default: function (){
        return {
          my_schedule: this.dayClone,
          from_to:this.from_to
        }
      }
    }
  },
  data(){
    return {
      fields:[
        { key: 'day_name', label:'Day' },
        { key: 'early_morning', label:'Early Morning (02am-06am)' },
        { key: 'morning', label:'Morning (07am-12pm)' },
        { key: 'afternoon', label:'Afternoon (12pm-06pm)' },
        { key: 'night', label:'Night (8pm-02am)' },
      ],
      showEditForm : false,
      my_schedule: this.schedule,
      from_to:[null,null],
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
    select(all){
      for (let i in this.my_schedule.days) {
        this.my_schedule.days[i].morning = all
        this.my_schedule.days[i].early_morning = all
        this.my_schedule.days[i].afternoon = all
        this.my_schedule.days[i].night = all
      }
    },
    editForm() {
      this.showEditForm = !this.showEditForm
    },
    saveForm(){
      this.sendData({available_schedule:this.my_schedule}, 'Schedule')
      // this.$emit('saveData')
      this.showEditForm = !this.showEditForm
    }
  },
  watch:{
    schedule: {
      // the callback will be called immediately after the start of the observation
      immediate: true,
      handler (val, oldVal) {
        if(_.isEmpty(val)){
          this.my_schedule = {
            days: this.dayClone,
            from_to:this.from_to
          }
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
