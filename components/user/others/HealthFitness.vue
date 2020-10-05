<template>
  <section class="site-section pb-0">
  <div class="container">

    <div class="row align-items-center">
      <div class="col-lg-12">
        <h4>My Health & Fitness <b-button pill size="sm" variant="info" v-if="!showEditForm" @click="editForm()"><fa :icon="['fas', 'edit']"/></b-button></h4>
      </div>
    </div>

    <div v-if="!showEditForm" class="row">
      <div class="col-lg-12 mb-5 mb-lg-0">
        <div v-if="healt_fitness.blood.ans" class="p-3 mb-2 bg-info text-white">
          <span class="font-weight-bold"> {{ healt_fitness.blood.quest }} : </span> {{ healt_fitness.blood.ans }}
        </div>
      </div>
      <div class="col-lg-12">
        <b-table striped hover :items="healt_fitness.questions" :fields="fields">
          <template v-slot:cell(ans)="items">
            {{ items.value | confused }}
          </template>
        </b-table>
      </div>

    </div>

    <div v-if="showEditForm" class="row align-items-center">
      <div class="col-lg-12">
        <div class="row">
          <div class="col-lg-6">
            <b-form-select size="sm" v-model="healt_fitness.blood.ans" :options="blood_option"></b-form-select>
          </div>
        </div>
        <br>
        <div class="container">
        <div class="row">
          <div class="col-lg-6 bg-info text-white font-weight-bold">Have you ever had any problems with the following?</div>
          <div class="col-lg-2 bg-info text-white"></div>
          <div class="col-lg-4 bg-info text-white font-weight-bold">(if yes, give details)</div>
        </div>
        <div v-for="(question, index) in healt_fitness.questions" :key="index" class="row border">
          <div class="col-lg-6">{{ question.quest }}</div>
          <div class="col-lg-2">
            <b-form-radio-group
              size="sm"
              :id="'radio-group-'+index"
              v-model="question.ans"
              :options="radio_option"
              :name="'radio-options'+index"
            ></b-form-radio-group>
          </div>
          <div class="col-lg-4"> <b-form-input size="sm" class="bg-light" v-if="question.ans" v-model="question.detail" placeholder="Detail"></b-form-input></div>
        </div>
        </div>
      </div>


    </div>
    <br>
    <div v-if="showEditForm" class="row">
      <div class="col-lg-6">
        <button type="button" v-on:click="editForm()" class="btn btn-dark btn-sm"><fa :icon="['fas', 'window-close']"/></button>
        <button type="button"  v-on:click="saveForm()" class="btn btn-success btn-sm"><fa :icon="['fas', 'save']"/> save</button>
      </div>
    </div>

  </div>
  </section>
</template>

<script>
import commons from '~/mixins/common'
import _ from "lodash";
export default {
  mixins:[commons],
  name: "HealthFitness",
  props: {
    healthData: {
      type: Object,
      default: function (){
        return this.hf_template
      }
    }
  },
  data(){
    return {
      showEditForm: false,
      healt_fitness: this.healthData,
      hf_template:{
        blood:{ quest: 'Blood Group?', ans: null },
        questions:[
            { quest: 'Fits, epilepsy, blackouts unsteadiness?', ans: null, detail: null },
            { quest: 'Disease of the brain or nervous system?', ans: null, detail: null },
            { quest: 'Recurrent/persistent headaches or migraines?', ans: null, detail: null },
            { quest: 'Mental illness, depression or anxiety?', ans: null, detail: null },
            { quest: 'Allergy to any food, drug or other substance at home or at work?', ans: null, detail: null },
            { quest: 'Asthma, breathing disorder, lung conditions?', ans: null, detail: null },
            { quest: 'Ear disease or deafness?', ans: null, detail: null },
            { quest: 'Have you ever had an operation?', ans: null, detail: null },
            { quest: 'Have you ever had a serious injury or broken bones?', ans: null, detail: null },
            { quest: 'Drug or alcohol misuse?', ans: null, detail: null },
            { quest: 'Have you left a job for medical reasons?', ans: null, detail: null },
          ],
      },
      radio_option:[
        { text: 'Yes', value: 1 },
        { text: 'No', value: 0 },
      ],
      blood_option:[
        { text: 'Select Blood Group', value: null },
        { text: 'A+', value: 'A+' },
        { text: 'A-', value: 'A-' },
        { text: 'B+', value: 'B+' },
        { text: 'B-', value: 'B-' },
        { text: 'AB+', value: 'AB+' },
        { text: 'AB-', value: 'AB-' },
        { text: 'O+', value: 'O+' },
        { text: 'O-', value: 'O-' },
      ],
      fields:[
        { key: 'quest', label:'Question' },
        { key: 'ans', label:'Answer' },
        { key: 'detail', label:'Detail' }
      ],
    }
  },
  methods: {
    editForm() {
      this.showEditForm = !this.showEditForm
    },
    saveForm(){
      this.sendData({health_fitness:this.healt_fitness}, 'Travel Preference')
      this.$emit('saveData')
      this.showEditForm = !this.showEditForm
    }
  },
  watch:{
    healthData: {
      immediate: true,
      handler (val, oldVal) {
        if(_.isEmpty(val)){
          this.healt_fitness = this.hf_template
        }
      }
    },
  },
  filters: {
    confused: function (value) {
      if (!value) {
        return 'NO'
      } else {
        return 'YES'
      }
    }
  }
}
</script>

<style scoped>

</style>
<!--//O−	O+	A−	A+	B−	B+	AB−	AB+-->
