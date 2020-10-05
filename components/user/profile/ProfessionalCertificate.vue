<template>
  <div class="container">

    <div class="row align-items-center">
      <div class="col-lg-12">
        <h4>Professional/Short Courses/Skill Development Certificates (SAP/OCP/MCP)
          <b-button pill size="sm" variant="info" v-if="!showEditForm" @click="editForm()"><fa :icon="['fas', 'edit']"/></b-button>
        </h4>
      </div>
    </div>
    <div v-if="!showEditForm" class="row">
      <div class="col-lg-8 mb-5 mb-lg-0">
        <b-table striped hover :items="professional_certificate">
          <template v-slot:cell(certificate_image)="items">
            <b-img class="img-border img-table" :src="getImage(items.value, 'thumb')" fluid alt="Fluid image"></b-img>
          </template>
        </b-table>
      </div>
    </div>

    <div v-if="showEditForm" class="row">
      <div class="col-lg-12 mb-5 mb-lg-0">
        <div v-for="(pro_certificate, index) in professional_certificate" :key="index" class="row jex-single">
          <div class="col-lg-3 mb-5 mb-lg-0">
            <b-form-input v-model="pro_certificate.course" placeholder="Course Name" size="sm"></b-form-input>
          </div>
          <div class="col-lg-3 mb-5 mb-lg-0">
            <date-picker input-class="form-control form-control-sm c-dp" placeholder="Accomplished On" v-model="pro_certificate.accomplished_on" valueType="format"></date-picker>
          </div>
          <div class="col-lg-2 mb-5 mb-lg-0">
            <media-browser :size="index" v-model="pro_certificate.certificate_image"></media-browser>
          </div>
          <div class="col-lg-1 mb-5 mb-lg-0">
            <button type="button" @click="doRemove(index)" class="btn btn-danger btn-sm"><fa :icon="['fas', 'trash-alt']"/></button>
          </div>
        </div>
      </div>

      <div class="col-lg-12 mb-5 mb-lg-0">
        <br>
        <div class="row">
          <div class="col-lg-2">
            <button type="button" @click="addProCert()" class="btn btn-primary btn-sm"><fa :icon="['fas', 'plus-square']"/></button>
          </div>
          <div class="offset-lg-6 col-lg-4">
            <button type="button" v-on:click="editForm()" class="btn btn-dark btn-sm"><fa :icon="['fas', 'window-close']"/></button>
            <button type="button" v-if="professional_certificate.length" v-on:click="saveForm()" class="btn btn-success btn-sm"><fa :icon="['fas', 'save']"/> save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MediaBrowser from '~/components/media/MediaBrowser';
import Commons from '~/mixins/common'
import _ from 'lodash'
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
export default {
  mixins: [Commons],
  components: {MediaBrowser, DatePicker},
  props: {
    certificates: {
      type: Array,
      default: function (){
        return [{
        course: null,
        accomplished_on: null,
        certificate_image: null
      }]

      }
    }
  },
  data() {
    return {
      showEditForm: false,
      professional_certificate: this.certificates
    }
  },
  methods: {
    editForm() {
      this.showEditForm = !this.showEditForm
    },
    saveForm() {
      this.sendData({professional_certificate: this.professional_certificate}, 'Professional Certificates')
      this.$emit('saveData')
      this.showEditForm = !this.showEditForm
    },
    addProCert() {
      this.professional_certificate.push({
        course: null,
        accomplished_on: null,
        certificate_image: null
      })
    },
    doRemove(index){
      if(typeof this.certificates[index] === 'undefined'){
        this.removeProCert(index)
      } else {
        this.$swal.fire({
          title: 'Are you sure?',
          text: "delete this!",
          showCancelButton: true,
          confirmButtonColor: '#d33',
          confirmButtonText: 'Yes, delete!'
        }).then((result) => {
          if (result.value) {
            this.removeProCert(index)
            this.sendData2({professional_certificate: this.professional_certificate}, 'Professional Certificates')
          }
        })
      }
    },
    removeProCert(index) {
      this.professional_certificate.splice(index, 1)
    },

  },
  watch:{
    certificates: {
      // the callback will be called immediately after the start of the observation
      immediate: true,
      handler (val, oldVal) {
        if(_.isEmpty(val)){
          this.professional_certificate = [{
            course: null,
            accomplished_on: null,
            certificate_image: null
          }]
        }
      }
    }
  }

}
</script>

<style scoped>
.row.jex-single {
  margin: 2.5px auto;
}
</style>
