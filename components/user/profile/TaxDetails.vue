t<template>

  <section class="site-section pb-0">
    <div class="container">

      <div class="row align-items-center">
        <div class="col-lg-12">
            <h4>Tax Id Details  <b-button pill size="sm" variant="info" v-if="!showEditForm" @click="editForm()">edit</b-button></h4>
        </div>
      </div>

      <div v-if="!showEditForm" class="row">
        <div class="col-lg-6 mb-5 mb-lg-0">
          <dl class="row">
            <dt class="col-sm-6"> : </dt>
            <dd class="col-sm-6"> </dd>
          </dl>
        </div>
      </div>

      <div v-if="showEditForm" class="row">
            <div class="col-lg-6 mb-5 mb-lg-0">
                <div class="form-group">
                    <b-form-input size="sm" placeholder="TFN NUMBER" v-model="taxData.tfn_number"></b-form-input>
                </div>

                <div class="form-group">
                    <b-form-select v-model="taxData.has_abn.status" :options="abn_options" size="sm" class="mt-3"></b-form-select>
                </div>
                <div v-if="taxData.has_abn.status" class="form-group">
                    <b-form-input size="sm" v-model="taxData.has_abn.abn_number" placeholder="ABN NUMBER"></b-form-input>
                </div>
                <div v-if="!taxData.has_abn.status" class="form-group">
                    <b-form-checkbox
                        id="checkbox-1"
                        v-model="taxData.has_abn.abn_accept"
                        name="checkbox-1"
                        value="accepted"
                        unchecked-value="not_accepted"
                        >
                        I accept the term below
                    </b-form-checkbox>
                    <b-form-text id="input-live-help">
                        IF I DO NOT PROVIDE ABN, I CONSENT TO AN ABN APPLICATION BEING MADE ON MY BEHALF, FOR A FEE OF 38.5 AUD. THIS WILL BE DEDUCTED FROM MY FIRST PAY. I AM ALSO AVAILABLE TO WORK UNDER ABN *
                    </b-form-text>
                </div>

                <div class="form-group">
                    <b-form-select v-model="taxData.has_super_number.status" :options="super_number_options" size="sm" class="mt-3"></b-form-select>
                </div>
                <div v-if="taxData.has_super_number.status" class="form-group">
                    <b-form-input size="sm" v-model="taxData.has_super_number.super_number" placeholder="ABN NUMBER"></b-form-input>
                </div>
                <div v-if="!taxData.has_super_number.status" class="form-group">
                    <b-form-checkbox
                        id="checkbox-1"
                        v-model="taxData.has_super_number.super_number_accept"
                        name="checkbox-sn"
                        value="accepted"
                        unchecked-value="not_accepted"
                        >
                        I dont have any super number
                    </b-form-checkbox>
                </div>

                <div class="form-group">
                    <button type="button" v-on:click="saveForm()" class="btn btn-success btn-sm">save changes</button>
                </div>
            </div>
      </div>

    </div>
    <br>
  </section>

</template>

<script>
import commons from '~/mixins/common'
export default {
  mixins:[commons],
  data(){
    return {
      showEditForm : false,
      taxData:{
        tfn_number: '',
        has_abn: {
            status: null,
            abn_number: '',
            abn_accept: 'not_accepted'
        },
        has_super_number: {
            status: null,
            super_number: '',
            super_number_accept: 'accepted'
        }
      },
      abn_options :[
        { value: null, text: 'Please select ABN status' },
        { value: true, text: 'have an ABN' },
        { value: false, text: 'dont have an ABN' }
      ],
      super_number_options :[
        { value: null, text: 'Please select Super Number status' },
        { value: true, text: 'have Super Number' },
        { value: false, text: 'dont have Super Number' }
      ]
    }
  },
  methods:{
    editForm(){
      this.showEditForm = !this.showEditForm
    },

    saveForm(){
      this.sendData({tax_details:this.taxData}, 'Tax Information')
      this.$emit('saveData')
      this.showEditForm = !this.showEditForm
    }

  }
}
</script>
