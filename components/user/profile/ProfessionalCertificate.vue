<template>
    <div class="container">

      <div class="row align-items-center">
        <div class="col-lg-12">
            <h4>Professional/Short Courses/Skill Development Certificates (SAP/OCP/MCP) <b-button pill size="sm" variant="info" v-if="!showEditForm" @click="editForm()">edit</b-button></h4>
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
                        <b-form-input v-model="pro_certificate.course" placeholder="Course Name" ></b-form-input>
                    </div>
                    <div class="col-lg-3 mb-5 mb-lg-0">
                        <b-form-input v-model="pro_certificate.accomplished_on" type="date" placeholder="Accomplished on" ></b-form-input>
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
                    <div class="offset-lg-8 col-lg-2">
                        <button type="button" v-if="professional_certificate.length" v-on:click="saveForm()" class="btn btn-success btn-sm">save changes</button>
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
  mixins:[Commons],
  components:{ MediaBrowser },
      data(){
          return {
              showEditForm : false,
              professional_certificate : [{course: '', accomplished_on : '' , certificate_image: require('@/assets/images/placeholder.png')}]
          }
      },
      methods:{
          editForm(){
              this.showEditForm = !this.showEditForm
          },
          saveForm(){
              this.$emit('saveData')
              this.showEditForm = !this.showEditForm
          },
          addProCert(){
              this.professional_certificate.push({course: '', accomplished_on : '' , certificate_image: require('@/assets/images/placeholder.png')})
          },
          removeProCert(index){
              this.professional_certificate.splice(index, 1)
          }
      }
}
</script>

<style scoped>
.row.jex-single {
    margin: 2.5px auto;
}
</style>
