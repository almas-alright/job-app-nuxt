<template>
  <section class="site-section pb-0">
    <div class="container">

      <div class="row align-items-center">
        <div class="col-lg-12">
          <h4>My job preferences <button type="button" v-if="!showEditForm" @click="editForm()" class="btn btn-primary btn-sm">edit</button></h4>
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
export default {
  data() {
    return {
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
  }
}
</script>

<style scoped>

</style>
