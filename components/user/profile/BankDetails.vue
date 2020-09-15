t<template>

  <section class="site-section pb-0">
    <div class="container">

      <div class="row align-items-center">
        <div class="col-lg-12">
            <h4>Bank Account Details  <button type="button" v-if="!showEditForm" @click="editForm()" class="btn btn-primary btn-sm">edit</button></h4>
        </div>
      </div>

      <div v-if="!showEditForm" class="row">
        <div class="col-lg-6 mb-5 mb-lg-0">
          <dl class="row">
            <dt class="col-sm-6">Bank Name : </dt>
            <dd class="col-sm-6"> {{ bank_name }}</dd>
            <dt class="col-sm-6">BBS number : </dt>
            <dd class="col-sm-6"> {{ bbs_number }}</dd>
            <dt class="col-sm-6">Account number : </dt>
            <dd class="col-sm-6"> {{ account_number }}</dd>
          </dl>
        </div>
      </div>

      <div v-if="showEditForm" class="row">
            <div class="col-lg-6 mb-5 mb-lg-0">
                <div class="form-group">
                    <b-form-input size="sm" placeholder="BANK NAME" v-model="bank_name"></b-form-input>
                </div>
                <div class="form-group">
                    <b-form-input size="sm" placeholder="BBS NUMBER" v-model="bbs_number"></b-form-input>
                </div>
                <div class="form-group">
                    <b-form-input size="sm" placeholder="ACCOUNT NUMBER" v-model="account_number"></b-form-input>
                </div>
                <div class="form-group">
                    <button type="button" v-on:click="editForm()" class="btn btn-success btn-sm">save changes</button>
                </div>  
            </div>
      </div>

    </div>
    <br>
  </section>

</template>

<script>
export default {
  data(){
    return {
      showEditForm : false,
      bbs_number: '',
      bank_name: '',
      account_number: ''
    }
  },
  methods:{
    editForm(){
      this.showEditForm = !this.showEditForm
    },

  }
}
</script>