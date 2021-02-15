<template>
  <div class="container">
    <div class="row bg-panel">
      <div class="col-md-12 bg-white">
        <client-only>
          <v-cal
            class="vuecal--blue-theme .vuecal--full-height-delete"
            :disable-views="['years', 'year']"
            :events="events"
            :editable-events="{ title: false, drag: false, resize: false, delete: true, create: false }"
            click-to-navigate
            today-button
            :on-event-click="onEventClick"
          >
            <template v-slot:today-button>
              <b-button v-b-modal.modal-es size="sm">
                <fa :icon="['fas', 'plus']"/>
              </b-button>
            </template>
          </v-cal>
        </client-only>
      </div>
    </div>


    <b-modal id="modal-es" title="Available Time" @hidden="resetModal">
      <validation-observer tag="div" ref="observer" v-slot="{ handleSubmit }">
        <b-form-group label="Date">
          <date-picker  :default-value="$moment().format('YYYY-MM-DD')" v-model="date" valueType="format"></date-picker>
          <validation-provider
            name="Available Date"
            :rules="'after:'+yesterday"
            :events="['change']"
            v-slot="validationContext"
          >
            <b-form-input v-show="false" v-model="date" :state="getValidationState(validationContext)"/>
            <b-form-invalid-feedback>{{ validationContext.errors[0] }}</b-form-invalid-feedback>
          </validation-provider>
        </b-form-group>
        <b-form-group label="From">
          <vue-tp  v-model="time_from"></vue-tp>
          <div v-if="local_errors.start" class="text-danger font-weight-bold">start time cant be an old time</div>
          <validation-provider
            name="Start Hour"
            rules="required"
            v-slot="validationContext"
          >
            <b-form-input v-show="false" v-model="time_from.HH" :state="getValidationState(validationContext)"/>
            <b-form-invalid-feedback>{{ validationContext.errors[0] }}</b-form-invalid-feedback>
          </validation-provider>
          <validation-provider
            name="Start Minute"
            rules="required"
            v-slot="validationContext"
          >
            <b-form-input v-show="false" v-model="time_from.mm" :state="getValidationState(validationContext)"/>
            <b-form-invalid-feedback>{{ validationContext.errors[0] }}</b-form-invalid-feedback>
          </validation-provider>
        </b-form-group>

        <b-form-group  label="To">
          <vue-tp v-model="time_to"></vue-tp>
          <div v-if="local_errors.end" class="text-danger font-weight-bold">end time cant be before start</div>
          <validation-provider
            name="End Hour"
            rules="required"
            v-slot="validationContext"
          >
            <b-form-input v-show="false" v-model="time_to.HH" :state="getValidationState(validationContext)"/>
            <b-form-invalid-feedback>{{ validationContext.errors[0] }}</b-form-invalid-feedback>
          </validation-provider>
          <validation-provider
            name="End Minute"
            rules="required"
            v-slot="validationContext"
          >
            <b-form-input v-show="false" v-model="time_to.mm" :state="getValidationState(validationContext)"/>
            <b-form-invalid-feedback>{{ validationContext.errors[0] }}</b-form-invalid-feedback>
          </validation-provider>
        </b-form-group>

      </validation-observer>
      <template v-slot:modal-footer>
        <div class="text-center">
          <b-button @click="$bvModal.hide('modal-es')" pill size="sm"><fa :icon="['fas', 'window-close']"/> Cancel</b-button>
          <b-button @click="removeEvent()" v-if="isEdit" pill variant="danger" size="sm"><fa :icon="['fas', 'trash']"/> Delete</b-button>
          <b-button @click="handleAvailableEvent()" pill variant="info" size="sm">
            <fa :icon="['fas', 'save']"/>
            <span v-if="isEdit">
              Update
            </span>
            <span v-else>
              Save
            </span>
          </b-button>
        </div>
      </template>

    </b-modal>

  </div>
</template>

<script>


import _ from 'lodash'
import commons from '~/mixins/common'
export default {
  mixins:[commons],
  name: "AvailableScheduleCal",
  props: {
    schedule: {
      type: Array,
    }
  },
  data() {
    return {
      target: null,
      isEdit: false,
      editIndex: null,
      yesterday: this.$moment().subtract(1,'days').format('YYYY-MM-DD'),
      date: this.$moment().format('YYYY-MM-DD'),
      time_from: { HH: "", mm: "" },
      time_to: { HH: "", mm: "" },
      local_errors: { start:false, end:false },
      events: this.schedule,
    }
  },
  methods: {

    onEventClick(event, e) {
      let that = this
      let event_index = _.findIndex(that.events, function (o) {
        return o.raw_key === event.raw_key
      })
      let selected_event = that.events[event_index]
      let start = this.$moment(selected_event.start, "YYYY-MM-DD HH:mm")
      let end = this.$moment(selected_event.end, "YYYY-MM-DD HH:mm")
      this.date = start.format('YYYY-MM-DD')
      this.time_from = { HH: start.format('HH'), mm: start.format('mm') }
      this.time_to = { HH: end.format('HH'), mm: end.format('mm') }
      this.isEdit = true
      this.editIndex = event_index
      if(start.isBefore(this.$moment())) {
        this.$swal.fire({
          type: 'warning',
          title: 'Stop!!',
          text: 'you cannot edit an old time slot',
        })
      } else {
        this.$bvModal.show('modal-es')
      }
      e.stopPropagation()
    },

    handleAvailableEvent(){
      let that = this
      this.$refs.observer.validate().then(success => {
        if (!success) {
          return
        }
        let start = this.$moment(this.date + ' ' + this.time_from.HH + ':' + this.time_from.mm, "YYYY-MM-DD HH:mm")
        let end = this.$moment(this.date + ' ' + this.time_to.HH + ':' + this.time_to.mm, "YYYY-MM-DD HH:mm")
        let content = this.$moment.utc(end.diff(start)).format("HH:mm")

        if(start.isBefore(this.$moment())){
          this.local_errors.start = true
          return
        } else {
          this.local_errors.start = false
        }

        if(end.isBefore(start)){
          this.local_errors.end = true
          return
        } else {
          this.local_errors.end = false
        }

        let rawEvent = {
          start: start.format("YYYY-MM-DD HH:mm"),
          end: end.format("YYYY-MM-DD HH:mm"),
          title: 'available',
          content: '<span class="text-info">' + content + ' minutes </span>',
          contentFull: '', // Custom attribute.
          raw_key: 'ce' + this.events.length,
          class: 'lime-a200'
        }

        if(!this.isEdit){
          this.events.push(rawEvent)
        } else {
          rawEvent.raw_key = this.events[this.editIndex].raw_key
          this.events[this.editIndex] = rawEvent
        }
        this.saveForm()
      }).finally(function (){
        console.log(that.events)
      })
    },
    removeEvent(){
      if (this.editIndex > -1) {
        this.events.splice(this.editIndex, 1);
      }
      this.saveForm()
    },
    resetModal() {
      this.date = this.$moment().format('YYYY-MM-DD')
      this.time_from = { HH: "", mm: "" }
      this.time_to = { HH: "", mm: "" }
      this.isEdit  = false
      this.editIndex  = null
    },

    saveForm(){
      this.sendData({available_schedule:this.events}, 'Schedule')
      this.$bvModal.hide('modal-es')
    }
  },
  watch:{
    schedule: {
      // the callback will be called immediately after the start of the observation
      immediate: true,
      handler (val, oldVal) {
        if(_.isEmpty(val)){
          this.events = []
        }
      }
    }
  }
}
</script>





