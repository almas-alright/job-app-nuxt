<template>

  <section class="site-section pb-0">
    <div class="container">

      <div class="row align-items-center">
        <div class="col-lg-12">
            <h4>Educational Qualification/Diploma Certificates <b-button pill size="sm" variant="info" v-if="!showEditForm" @click="editForm()">edit</b-button></h4>
        </div>
      </div>

      <div v-if="!showEditForm" class="row">
        <div class="col-lg-12 mb-5 mb-lg-0">
          <b-table striped hover :items="mycertificates">
            <template v-slot:cell(certificate_image)="items">
              <b-img class="img-border img-table" :src="getImage(items.value, 'thumb')" fluid alt="Fluid image"></b-img>
            </template>
          </b-table>
        </div>
      </div>

      <div v-if="showEditForm" class="row">

        <div class="col-lg-12 mb-5 mb-lg-0">

          <div v-for="(certificate, index) in mycertificates" :key="index" class="form-group">
            <div class="row">
              <div class="col-sm-2">
                <b-form-select
                    id="nationality"
                    name="nationality"
                    v-model="certificate.course"
                    :options="certificates"
                    value-field="course"
                    text-field="course"
                    class="capitalize"
                    size="sm"
                    @change="checkIfReplicated(index)"
                  >
                  <template v-slot:first>
                    <b-form-select-option :value="'null'" disabled>select</b-form-select-option>
                  </template>
                  </b-form-select>
              </div>
              <div class="col-sm-3">
                <b-form-input size="sm" placeholder="Institute" v-model="certificate.institute"></b-form-input>
              </div>
              <div class="col-sm-3">
                <b-form-input size="sm" placeholder="Subject Name" v-model="certificate.subject"></b-form-input>
              </div>
               <div class="col-sm-2">
                <b-form-input size="sm" placeholder="Passing Year" v-model="certificate.passing_year"></b-form-input>
              </div>
              <div class="col-sm-1">
                <media-browser :size="index" v-model="certificate.certificate_image"></media-browser>
              </div>
              <div class="col-sm-1">
                <button type="button" @click="removeCert(index)" class="btn btn-danger btn-sm">x</button>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-1">
              <button type="button" @click="addCert()" class="btn btn-primary btn-sm">add</button>
            </div>
            <div class="offset-sm-8 col-sm-3">
              <button type="button" v-if="mycertificates.length" v-on:click="saveForm()" class="btn btn-success btn-sm">save changes</button>
            </div>
          </div>

        </div>
      </div>

    </div>
    <br>
  </section>

</template>

<script>
import _ from 'lodash'
import MediaBrowser from '~/components/media/MediaBrowser';
import commons from '~/mixins/common'
export default {
  mixins:[commons],
  components:{ MediaBrowser },
  data(){
    return {
      showEditForm : false,
      certificates:[
        {course: 'masters', disabled: false},
        {course: 'masters (dependent)', disabled: false},
        {course: 'bachelors', disabled: false},
        {course: 'bachelors (dependent)', disabled: false},
        {course: 'diploma', disabled: false},
        {course: 'others', disabled: false},
      ],
      mycertificates: [{course: null, institute: null, subject: '', certificate_image: null, passing_year: ''}]
    }
  },
  methods:{
    editForm(){
      this.showEditForm = !this.showEditForm
    },
    addCert(){
      if(this.mycertificates.length < 6){
        this.mycertificates.push({course: null, institute: null, subject: '', certificate_image: null, passing_year: ''})
      } else {
        this.$swal.fire('You Can not add more links')
      }
    },
    removeCert(index){
      let removeQue = this.mycertificates[index].course
      if(removeQue){
        let certIndex = _.findIndex(this.certificates, function(o) { return o.course == removeQue });
        this.certificates[certIndex].disabled = false
      }
      this.mycertificates.splice(index, 1)
    },
    checkIfReplicated(index){
      let selectedVal = this.mycertificates[index].course
      console.log(selectedVal)
      if(selectedVal){
        let certSize = _.filter(this.mycertificates, certf => certf.course === selectedVal);
        this.disableUsed()
        if(certSize.length > 1){
          this.$swal.fire('You already added '+selectedVal)
          this.mycertificates[index].course = null
        }
      }
    },
    disableUsed(){
      let that = this;
      _.forEach(this.mycertificates, function(x){
        if(x.course){
          let certIndex = _.findIndex(that.certificates, function(o) { return o.course === x.course });
          that.certificates[certIndex].disabled = true
        }
      })
    },
    saveForm(){
      this.sendData({education_qualification: this.mycertificates}, 'Educational Qualifications')
      this.$emit('saveData')
      this.showEditForm = !this.showEditForm
    }
  },
  created:function(){
    this.disableUsed()
    //console.log('mounted')
  }
}
</script>
<style>
  .img-table{
    max-width: 50px;
  }
</style>
