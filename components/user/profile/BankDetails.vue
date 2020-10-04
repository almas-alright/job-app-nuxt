t<template>

  <section class="site-section pb-0">
    <div class="container">

      <div class="row align-items-center">
        <div class="col-lg-12">
            <h4>Bank Account Details  <b-button pill size="sm" variant="info" v-if="!showEditForm" @click="editForm()">edit</b-button></h4>
        </div>
      </div>

      <div v-if="!showEditForm" class="row">
        <div class="col-lg-6 mb-5 mb-lg-0">
          <dl class="row">
            <dt class="col-sm-6">Bank Name : </dt>
            <dd class="col-sm-6"> {{ bankData.bank_name }}</dd>
            <dt class="col-sm-6">BBS number : </dt>
            <dd class="col-sm-6"> {{ bankData.bbs_number }}</dd>
            <dt class="col-sm-6">Account number : </dt>
            <dd class="col-sm-6"> {{ bankData.account_number }}</dd>
          </dl>
        </div>
      </div>

      <div v-if="showEditForm" class="row">
            <div class="col-lg-6 mb-5 mb-lg-0">
                <div class="form-group">
                    <b-form-input size="sm" placeholder="BANK NAME" v-model="bankData.bank_name"></b-form-input>
                </div>
                <div class="form-group">
                    <b-form-input size="sm" placeholder="BBS NUMBER" v-model="bankData.bbs_number"></b-form-input>
                </div>
                <div class="form-group">
                    <b-form-input size="sm" placeholder="ACCOUNT NUMBER" v-model="bankData.account_number"></b-form-input>
                </div>
                <div class="form-group">
                  <button type="button" v-on:click="editForm()" class="btn btn-dark btn-sm">Cancel</button>
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
import _ from "lodash";
export default {
  mixins:[commons],
  props: {
    bankInfo: {
      type: Object,
      default: function () {
        return {
          bbs_number: '',
          bank_name: '',
          account_number: ''
        }
      }
    }
  },
  data(){
    return {
      showEditForm : false,
      bankData: this.bankInfo
    }
  },
  methods:{
    editForm(){
      this.showEditForm = !this.showEditForm
    },
    saveForm(){
      this.sendData({bank_details: this.bankData}, 'Bank Details')
      this.$emit('saveData')
      this.showEditForm = !this.showEditForm
    }
  },
  watch: {
    bankInfo: {
      immediate: true,
      handler(val, oldVal) {
        if (_.isEmpty(val)) {
          this.bankData = {
            bbs_number: '',
            bank_name: '',
            account_number: ''
          }
        }
      }
    }
  }
}
</script>
