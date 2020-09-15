t<template>
    <section class="site-section pb-0">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-12">
              <h4>Personal Details  <button type="button" v-if="!showEditForm" v-on:click="editForm()" class="btn btn-primary btn-sm">edit</button></h4>
          </div>
        </div>

        <div v-if="showEditForm" class="row align-items-center">
          <div class="col-lg-6 mb-5 mb-lg-0">
            <div class="form-group">
                <b-form-input size="sm" placeholder="Enter First Name" v-model="form.firstName"></b-form-input>
            </div>
            <div class="form-group">
              <b-form-input size="sm" placeholder="Enter Last Name" v-model="form.lastName"></b-form-input>
            </div>
            <div class="form-group">
                <input type="date" v-model="form.dateOfBirth" class="form-control form-control-sm" aria-describedby="emailHelp" placeholder="Date Of Birth" min="1980-01-01" >
            </div>
            <div class="form-group">
                <select v-model="form.maritalStatus" class="form-control form-control-sm">
                    <option value="?">select marital status</option>
                    <option value="single">single</option>
                    <option value="married">married</option>
                    <option value="separeted">separeted</option>
                </select>
            </div>
            <div class="form-group">
                <b-form-select
                    id="nationality"
                    name="nationality"
                    v-model="form.nationality"
                    :options="nationalities"
                    value-field="name"
                    text-field="name"
                    class="capitalize"
                  >
                  <template v-slot:first>
                      <b-form-select-option :value="'null'" disabled>-- Please Select Nationality --</b-form-select-option>
                  </template>
                </b-form-select>
            </div>
          </div>

          <div class="col-lg-5 ml-auto">
            <div class="form-group">
              <b-form-input size="sm" :type="'email'" placeholder="mail@example.com" v-model="form._email"></b-form-input>
            </div>
            <div class="form-group">
                <b-form-input size="sm" placeholder="Enter Contact number" v-model="form.contactNumber"></b-form-input>
            </div>
            <div class="form-group">
                <b-form-input size="sm" placeholder="emergency contact" v-model="form.emergencyContactNumber"></b-form-input>
            </div>
            <div class="form-group">
                <b-form-input size="sm" placeholder="Street Address" v-model="form.streetAddress"></b-form-input>
            </div>
          </div>
          <div class="col-lg-12">
            <button type="button" v-on:click="editForm()" class="btn btn-success btn-sm">save changes</button>
          </div>
          
        </div>

        <div v-if="!showEditForm" class="row align-items-center">
          <div class="col-lg-6 mb-5 mb-lg-0">
              <dl class="row">
                <dt class="col-sm-6">Full Name : </dt>
                <dd class="col-sm-6">{{ form.firstName | isEmpty('first name') }} {{ form.lastName | isEmpty('last name') }}</dd>

                <dt class="col-sm-6">Date Of Birth : </dt>
                <dd class="col-sm-6">{{ form.dateOfBirth | isEmpty('date of birth') }}</dd>

                <dt class="col-sm-6">Marital Status : </dt>
                <dd class="col-sm-6"> {{ form.maritalStatus | isEmpty('set Marital Status') }} </dd>

                <dt class="col-sm-6">Nationality : </dt>
                <dd class="col-sm-6"> {{ form.nationality | isEmpty('set Nationality') }} </dd>
              </dl>
          </div>

          <div class="col-lg-5 ml-auto">
            <dl class="row">
                <dt class="col-sm-6">Email : </dt>
                <dd class="col-sm-6"> {{ form._email | isEmpty('set email') }} </dd>

                <dt class="col-sm-6">Contact Number : </dt>
                <dd class="col-sm-6"> {{ form.contactNumber | isEmpty('set contact number') }} </dd>

                <dt class="col-sm-6">Emergency Contact : </dt>
                <dd class="col-sm-6"> {{ form.emergencyContactNumber | isEmpty('set emergency number') }} </dd>

                <dt class="col-sm-6">Street Address : </dt>
                <dd class="col-sm-6"> {{ form.streetAddress | isEmpty('set address') }} </dd>
              </dl>
          </div>
        </div>


      </div>
    </section>
</template>

<script>
import country_list from '~/static/country_list'
export default {
  data(){

      return {
          showEditForm : false,
          form:{
            firstName: '',
            lastName: '',
            dateOfBirth: '',
            maritalStatus: '?',
            nationality: null,
            _email: '',
            contactNumber: '',
            emergencyContactNumber: '',
            streetAddress: '',
          },
          nationalities: country_list,
      }

  },
  methods:{
      editForm(){
          this.showEditForm = !this.showEditForm
      }
  },
  filters: {
    isEmpty(value,alter) {
    if (!value) {
      return alter
    }
    else {
      return value
    }
  }
}
}
</script>