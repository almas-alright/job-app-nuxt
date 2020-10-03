<template>
  <section class="site-section pb-0">
    <div class="container">

      <div class="row align-items-center">
        <div class="col-lg-12">
          <h4>My job preferences <b-button pill size="sm" variant="info" v-if="!showEditForm" @click="editForm()">edit</b-button></h4>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-6 mb-5 mb-lg-0">
          <b-form-group label="select :">
            <b-form-checkbox-group
              id="checkbox-group-1"
              v-model="selected"
              :options="options"
              name="flavour-1"
            ></b-form-checkbox-group>
          </b-form-group>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import commons from '~/mixins/common'
export default {
  mixins:[commons],
  data() {
    return {
      showEditForm : false,
      selected: [], // Must be an array reference!
      options: [
        { text: 'Civil', value: 'civil' },
        { text: 'Mechanic', value: 'mechanic' },
        { text: 'It', value: 'it' },
        { text: 'Bank', value: 'bank' },
        { text: 'Driving', value: 'driving' },
        { text: 'Trade Industry', value: 'trade_industry' },
      ]
    }
  },
  methods: {
    editForm() {
      this.showEditForm = !this.showEditForm
    },
    saveForm(){
      this.$emit('saveData')
      this.showEditForm = !this.showEditForm
    }
  }
}
</script>

<style scoped>

</style>
