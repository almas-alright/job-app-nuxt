<template>
  <section class="pb-0">
    <div class="container">

      <div class="row align-items-center">
        <div class="col-lg-12">
          <h4></h4>
        </div>
      </div>


      <div v-for="(section, index) in questionSections" :key="index" class="row align-items-center">
        <div class="col-lg-12">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 bg-info text-center"><h4 class="text-white my-2">{{ section.title }}</h4></div>
            </div>
            <div v-for="(question, qindex) in section.questions" :key="qindex" class="row border">
              <div class="col-lg-8">{{ question.quest }}</div>
              <div class="col-lg-2">
                <b-form-radio-group
                  size="sm"
                  :id="'rg-'+section.slug+'-'+qindex"
                  v-model="question.ans"
                  :options="radio_option"
                  :name="section.slug+'-'+qindex"
                ></b-form-radio-group>
              </div>
              <div class="col-lg-2">
                <fa v-if="isCorrect(question.ans,question.ca) === 'y'" class="text-success" :icon="['fas', 'check-circle']"></fa>
                <fa v-else-if="isCorrect(question.ans,question.ca) === 'n'" class="text-danger" :icon="['fas', 'times-circle']"></fa>
                <fa v-else-if="isCorrect(question.ans,question.ca) === 'o'" class="text-primary" :icon="['fas', 'circle']"></fa>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br>
      <div class="row my-5">
        <div class="col-lg-12">
          <button v-if="!answered" type="button" v-on:click="saveForm()" class="btn btn-success btn-sm">
            <fa :icon="['fas', 'save']"/>
            Submit
          </button>
          <br>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import inductions from 'static/inductions';
import commons from '~/mixins/common'
import _ from "lodash";

export default {
  mixins: [commons],
  name: "GeneralQuestions",
  props: {
    extraData: {
      type: Array,
      default: function () {
        return inductions
      }
    }
  },
  data() {
    return {
      answer:{ cans:0, ians:0, nans:0},
      answered: false,
      questionSections: this.extraData,
      radio_option: [
        {text: 'Yes', value: 1},
        {text: 'No', value: 0},
      ]
    }
  },
  methods: {
    editForm() {
      this.showEditForm = !this.showEditForm
    },
    saveForm() {
      this.sendData({extra_info: this.questionSections}, 'Inductions')
      this.$emit('saveData')
      this.showEditForm = !this.showEditForm
    },
    isCorrect(ans,cans){
      if(!this.answered){
        return 'x'
      } else {
        if(ans == null){
          return 'o'
        }
        if(ans === cans){
          return 'y'
        } else {
          return 'n'
        }
      }
    }
  },
  watch: {
    extraData: {
      immediate: true,
      handler(val, oldVal) {
        if (_.isEmpty(val)) {
          this.questionSections = inductions
        } else {
          this.answered = true
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

