<template>

  <section class="mt-4">
    <div class="container">

      <div class="row align-items-center">
        <div class="col-lg-12">
            <h4>Licence Information  <b-button pill size="sm" variant="info" v-if="!showEditForm" @click="editForm()"><fa :icon="['fas', 'edit']"/></b-button></h4>
        </div>
      </div>

      <div v-if="!showEditForm" class="row">
        <div class="col-lg-6 mb-5 mb-lg-0">
          <b-table striped hover :items="mylisences" :fields="fields">
            <template v-slot:cell(value)="items">
              {{ getLicenseName(items.value) }}
            </template>
            <template v-slot:cell(image)="items">
              <b-img class="img-border img-table" :src="getImage(items.value, 'thumb')" fluid alt="Fluid image"></b-img>
            </template>
          </b-table>
        </div>
      </div>

      <div v-if="showEditForm" class="row">
        <div class="col-lg-8 mb-5 mb-lg-0">
          <div v-for="(mylisence, index) in mylisences" :key="index" class="form-group">
            <div class="row">
              <div class="col-sm-2">
                <b-form-select
                  v-model="mylisence.license_type"
                  :options="lisence_types"
                  @change="resetSelected(index)"
                  class="capitalize"
                  value-field="value"
                  size="sm"
                >
                </b-form-select>
              </div>
              <div class="col-sm-3">
                <b-form-select
                    v-model="mylisence.value"
                    :options="licenseNameOfGroup(mylisence.license_type)"
                    value-field="value"
                    text-field="name"
                    class="capitalize"
                    size="sm"
                    @change="checkIfReplicated(index)"
                  >
                  <template v-slot:first>
                    <b-form-select-option :value="'null'" disabled>select licence</b-form-select-option>
                  </template>
                </b-form-select>
              </div>
              <div class="col-sm-2">
                <media-browser :size="index" v-model="mylisence.image"></media-browser>
              </div>
              <div class="col-sm-4">
                  <date-picker input-class="form-control form-control-sm c-dp" v-model="mylisence.expiry_date" valueType="format"></date-picker>
              </div>
              <div class="col-sm-1">
                <button type="button" @click="doRemove(index)" class="btn btn-danger btn-sm"><fa :icon="['fas', 'trash-alt']"/></button>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-1">
              <button type="button" @click="addLisence()" class="btn btn-primary btn-sm"><fa :icon="['fas', 'plus-square']"/></button>
            </div>
            <div class="offset-sm-7 col-sm-4">
              <button type="button" v-on:click="editForm()" class="btn btn-dark btn-sm"><fa :icon="['fas', 'window-close']"/></button>
              <button type="button" v-if="mylisences.length" v-on:click="saveForm()" class="btn btn-success btn-sm"><fa :icon="['fas', 'save']"/> save</button>
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
import _ from 'lodash'
import license_list from 'static/license_list'
import MediaBrowser from '~/components/media/MediaBrowser';
import Commons from '~/mixins/common'
export default {
  mixins:[Commons],
  components:{ MediaBrowser, DatePicker},
  props: {
    lisenceData: {
      type: Array,
      default: function (){
        return [{ value: null, image:null, expiry_date: null, license_type: null }]
      }
    }
  },
  data(){
    return {
      showEditForm : false,
      fields:[
        { key: 'value', label:'Licence Name' },
        { key: 'expiry_date', label:'Expiry Date' },
        { key: 'image', label:'Licence Image' },
        ],
      lisence_types: [
        {text: 'Select type', value: null},
        {text:'Driving', value: 'driving_license'},
        {text:'Crane Operation', value: 'cranes'},
        {text:'High Risk Work', value: 'high_risk_work'}
        ],
      lisences: license_list,
      mylisences: this.lisenceData
    }
  },
  methods:{
    editForm(){
      this.showEditForm = !this.showEditForm
    },
    addLisence(){
      if(this.mylisences.length < 5){
        this.mylisences.push({ value: null, image:null,  expiry_date: null, license_type: null })
      } else {
        this.$swal.fire('You Can not add more links')
      }
    },
    doRemove(index){
      if(typeof this.lisenceData[index] === 'undefined'){
        this.removeLisence(index)
      } else {
        this.$swal.fire({
          title: 'Are you sure?',
          text: "delete this!",
          showCancelButton: true,
          confirmButtonColor: '#d33',
          confirmButtonText: 'Yes, delete!'
        }).then((result) => {
          if (result.value) {
            this.removeLisence(index)
            this.sendData2({license_information:this.mylisences}, 'License Information')
          }
        })
      }
    },
      removeLisence(index){
      let removeQue = this.mylisences[index].value
      if(removeQue){
        let lisenceIndex = _.findIndex(this.lisences, function(o) { return o.value === removeQue });
        this.lisences[lisenceIndex].disabled = false
      }
      this.mylisences.splice(index, 1)
    },
    licenseNameOfGroup(type){
      let ln = _.filter(this.lisences, function(n) {
        return n.type === type;
      })
      if(type){
        return ln
      } else {
        return []
      }
    },
    getLicenseName(lisence_code){
      let name = ''
      if(lisence_code){
        name =_.result(_.find(this.lisences, function(ls) {
          return ls.value === lisence_code;
        }), 'name');
      }
      return name
    },
    checkIfReplicated(index){
      let selectedVal = this.mylisences[index].value
      // console.log(selectedVal)
      if(selectedVal){
        let socialSize = _.filter(this.mylisences, social => social.value === selectedVal);
        this.disableUsed()
        if(socialSize.length > 1){
          this.$swal.fire('You already added '+selectedVal)
          this.mylisences[index].value = null
        }
      }
    },
    disableUsed(){
      let that = this;
      _.forEach(this.mylisences, function(x){
        if(x.value){
          let lisenceIndex = _.findIndex(that.lisences, function(o) { return o.value === x.value });
          that.lisences[lisenceIndex].disabled = true
        }
      })
    },
    saveForm(){
      this.sendData({license_information:this.mylisences}, 'License Information')
      // this.$emit('saveData')
      this.showEditForm = !this.showEditForm
    },
    resetSelected(index){
      this.mylisences[index].value = null
    }
  },
  created:function(){
    this.disableUsed()
    //console.log('mounted')
  },
  watch:{
    lisenceData: {
      // the callback will be called immediately after the start of the observation
      immediate: true,
      handler (val, oldVal) {
        if(_.isEmpty(val)){
          this.mylisences = [{ value: null, image:null, expiry_date: null, license_type: null }]
        }
      }
    }
  }
}
</script>
