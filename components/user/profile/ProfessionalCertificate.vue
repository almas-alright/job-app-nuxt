<template>
  <div class="container">

    <div class="row align-items-center">
      <div class="col-lg-12">
        <h4>Professional/Short Courses/Skill Development Certificates (SAP/OCP/MCP)
          <b-button pill size="sm" variant="info" v-if="!showEditForm" @click="editForm()">edit</b-button>
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
            <b-input-group size="sm" class="mb-3">
              <b-form-input
                id="example-input"
                v-model="pro_certificate.accomplished_on"
                type="text"
                placeholder="YYYY-MM-DD"
                autocomplete="off"
                size="sm"
              ></b-form-input>
              <b-input-group-append>
                <b-form-datepicker
                  size="sm"
                  v-model="pro_certificate.accomplished_on"
                  button-only
                  right
                  locale="en-US"
                  aria-controls="example-input"
                ></b-form-datepicker>
              </b-input-group-append>
            </b-input-group>
          </div>
          <div class="col-lg-2 mb-5 mb-lg-0">
            <media-browser :size="index" v-model="pro_certificate.certificate_image"></media-browser>
          </div>
          <div class="col-lg-1 mb-5 mb-lg-0">
            <button type="button" @click="removeProCert(index)" class="btn btn-danger btn-sm">x</button>
          </div>
        </div>
      </div>

      <div class="col-lg-12 mb-5 mb-lg-0">
        <br>
        <div class="row">
          <div class="col-lg-2">
            <button type="button" @click="addProCert()" class="btn btn-primary btn-sm">add</button>
          </div>
          <div class="offset-lg-6 col-lg-4">
            <button type="button" v-on:click="editForm()"
                    class="btn btn-dark btn-sm">Cancel
            </button>
            <button type="button" v-if="professional_certificate.length" v-on:click="saveForm()"
                    class="btn btn-success btn-sm">save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MediaBrowser from '~/components/media/MediaBrowser';
import Commons from '~/mixins/common'

export default {
  mixins: [Commons],
  components: {MediaBrowser},
  props: {
    certificates: {
      type: Array,
      default: () => [{
        course: null,
        accomplished_on: null,
        certificate_image: null
      }]
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
    removeProCert(index) {
      this.professional_certificate.splice(index, 1)
      this.sendData({professional_certificate: this.professional_certificate}, 'Professional Certificates')
    },

  },

}
</script>

<style scoped>
.row.jex-single {
  margin: 2.5px auto;
}
</style>
