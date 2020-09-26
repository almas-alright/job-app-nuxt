<template>
  <section class="site-section pb-0">
    <div class="container">

      <div class="row align-items-center">
        <div class="col-lg-12">
          <h4>My Availabilities <button type="button" v-if="!showEditForm" @click="editForm()" class="btn btn-primary btn-sm">edit</button></h4>
        </div>
      </div>

      <div v-if="!showEditForm" class="row">
        <div class="col-lg-6 mb-5 mb-lg-0">
          <b-table striped hover :items="days"></b-table>
        </div>
      </div>

      <div v-if="showEditForm" class="row">
        <div class="col-lg-8 mb-5 mb-lg-0">
          <div v-for="(day, index) in days" :key="index" class="form-group">
            <div class="row">
              <div class="col-sm-3">
                  {{ day.name }} :
              </div>
              <div class="col-sm-2">
                <b-form-checkbox
                  :id="'checkbox-'+index+'-morning'"
                  v-model="day.morning"
                  name="checkbox-1"
                  value="yes"
                  unchecked-value="no"
                >
                  morning
                </b-form-checkbox>
              </div>
              <div class="col-sm-2">
                <b-form-checkbox
                  :id="'checkbox-'+index+'-afternoon'"
                  v-model="day.afternoon"
                  name="checkbox-1"
                  value="yes"
                  unchecked-value="no"
                >
                  afternoon
                </b-form-checkbox>
              </div>
              <div class="col-sm-3">
                <b-form-checkbox
                  :id="'checkbox-'+index+'-early_morning'"
                  v-model="day.early_morning"
                  name="checkbox-1"
                  value="yes"
                  unchecked-value="no"
                >
                  early morning
                </b-form-checkbox>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-1">

            </div>
            <div class="offset-sm-8 col-sm-3">
              <button type="button"  v-on:click="saveForm()" class="btn btn-success btn-sm">save changes</button>
            </div>
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
      days:[
        {name: 'Monday', morning: 'no', afternoon:'no', early_morning: 'no'},
        {name: 'Tuesday', morning: 'no', afternoon:'no', early_morning: 'no'},
        {name: 'Wednesday', morning: 'no', afternoon:'no', early_morning: 'no'},
        {name: 'Thursday', morning: 'no', afternoon:'no', early_morning: 'no'},
        {name: 'Friday', morning: 'no', afternoon:'no', early_morning: 'no'},
        {name: 'Saturday', morning: 'no', afternoon:'no', early_morning: 'no'},
        {name: 'Sunday', morning: 'no', afternoon:'no', early_morning: 'no'},
      ],
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
