<template>
  <section class="site-section pb-0">
    <div class="container">

      <div class="row align-items-center">
        <div class="col-lg-12">
          <h4>My Travel Preference <b-button pill size="sm" variant="info" @click="editForm()">edit</b-button></h4>
        </div>
      </div>

      <div v-if="!showEditForm" class="row">
        <div class="col-lg-6 mb-5 mb-lg-0">
          <span v-for="(transport, i) in transports"> {{ transport }}, </span>
        </div>
      </div>

      <div v-if="showEditForm" class="row">
        <div class="col-lg-8 mb-5 mb-lg-0">
          <b-form-group label="Using options array:">
            <b-form-checkbox-group
              id="checkbox-group-r"
              v-model="transports"
              :options="options"
              name="flavour-1"
            ></b-form-checkbox-group>
          </b-form-group>
        </div>
        <div class="col-lg-4 mb-5 mb-lg-0">
          <div role="group">
            <label>How far you can travel?</label>
            <b-form-input
              id="input-live"
              v-model="travel_distance"
              type="number"
              size="sm"
              aria-describedby="input-live-help input-live-feedback"
              placeholder="Distance You can travel"
              trim
            ></b-form-input>

            <!-- This will only be shown if the preceding input has an invalid state -->
            <b-form-invalid-feedback id="input-live-feedback">
              Enter at least 3 letters
            </b-form-invalid-feedback>

            <!-- This is a form text block (formerly known as help block) -->
            <b-form-text id="input-live-help"></b-form-text>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "Transportation",
  data(){
    return {
      showEditForm : false,
      travel_distance: 0,
      transports:[],
      options: [
        { text: 'bicycle', value: 'bicycle' },
        { text: 'bike', value: 'bike' },
        { text: 'car', value: 'car' },
        { text: 'public transport', value: 'grape' }
      ]
    }
  },
  methods: {
    editForm() {
      this.showEditForm = !this.showEditForm
    },
  }
}
</script>

<style scoped>

</style>
