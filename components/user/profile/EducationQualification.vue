<template>

  <section class="site-section pb-0">
    <div class="container">

      <div class="row align-items-center">
        <div class="col-lg-12">
            <h4>Educational Qualification/Diploma Certificates <button type="button" v-if="!showEditForm" @click="editForm()" class="btn btn-primary btn-sm">edit</button></h4>
        </div>
      </div>

      <div v-if="!showEditForm" class="row">
        <div class="col-lg-12 mb-5 mb-lg-0">
          <b-table striped hover :items="mycertificates"></b-table>
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
                    v-model="certificate.name_of_exam"
                    :options="certificates"
                    value-field="name_of_exam"
                    text-field="name_of_exam"
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
                <b-form-input size="sm" placeholder="Institute" v-model="certificate.name_of_institute"></b-form-input>
              </div>
              <div class="col-sm-3">
                <b-form-input size="sm" placeholder="Enter url" v-model="certificate.name_of_subject"></b-form-input>
              </div>
               <div class="col-sm-2">
                <b-form-input size="sm" placeholder="Passing Year" :type="'date'" v-model="certificate.passing_year"></b-form-input>
              </div>
              <div class="col-sm-1">
                <b-form-input size="sm" placeholder="result" v-model="certificate.result"></b-form-input>
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
export default {
  data(){
    return {
      showEditForm : false,
      certificates:[
        {name_of_exam: 'masters', disabled: false},
        {name_of_exam: 'masters (dependent)', disabled: false},
        {name_of_exam: 'bachelors', disabled: false},
        {name_of_exam: 'bachelors (dependent)', disabled: false},
        {name_of_exam: 'diploma', disabled: false},
        {name_of_exam: 'others', disabled: false},
      ],
      mycertificates: [{name_of_exam: null, name_of_institute: null, name_of_subject: '', result: '', passing_year: ''}]
    }
  },
  methods:{
    editForm(){
      this.showEditForm = !this.showEditForm
    },
    addCert(){
      if(this.mycertificates.length < 6){
        this.mycertificates.push({name_of_exam: null, name_of_institute: null, name_of_subject: '', result: '', passing_year: ''})
      } else {
        this.$swal.fire('You Can not add more links')
      }
    },
    removeCert(index){
      let removeQue = this.mycertificates[index].name_of_exam
      if(removeQue){
        let certIndex = _.findIndex(this.certificates, function(o) { return o.name_of_exam == removeQue });
        this.certificates[certIndex].disabled = false
      }
      this.mycertificates.splice(index, 1)
    },
    checkIfReplicated(index){
      let selectedVal = this.mycertificates[index].name_of_exam
      console.log(selectedVal)
      if(selectedVal){
        let certSize = _.filter(this.mycertificates, certf => certf.name_of_exam === selectedVal);
        this.disableUsed()
        if(certSize.length > 1){
          this.$swal.fire('You already added '+selectedVal)
          this.mycertificates[index].name_of_exam = null
        }
      }
    },
    disableUsed(){
      let that = this;
      _.forEach(this.mycertificates, function(x){
        if(x.name_of_exam){
          let certIndex = _.findIndex(that.certificates, function(o) { return o.name_of_exam == x.name_of_exam });
          that.certificates[certIndex].disabled = true
        }
      })
    },
    saveForm(){
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