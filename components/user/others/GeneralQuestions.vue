<template>
  <section class="pb-0">
    <div class="container">

      <div class="row align-items-center">
        <div class="col-lg-12">
          <h4>My Induction</h4>
        </div>
      </div>


      <div v-for="(section, index) in questionSections" :key="index" class="row align-items-center">
        <div class="col-lg-12">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 bg-info text-center"><h4 class="text-white my-2">{{ section.title }}</h4></div>
            </div>
            <div v-for="(question, qindex) in section.questions" :key="qindex" class="row border">
              <div class="col-lg-6">{{ question.quest }}</div>
              <div class="col-lg-2">
                <b-form-radio-group
                  size="sm"
                  :id="'rg-'+section.slug+'-'+qindex"
                  v-model="question.ans"
                  :options="radio_option"
                  :name="section.slug+'-'+qindex"
                ></b-form-radio-group>
              </div>
              <div class="col-lg-4">

              </div>
            </div>
          </div>
        </div>
      </div>

      <br>
      <div class="row">
        <div class="col-lg-6">
          <button type="button" v-on:click="saveForm()" class="btn btn-success btn-sm">
            <fa :icon="['fas', 'save']"/>
            save
          </button>
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
      showEditForm: false,
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
    }
  },
  watch: {
    extraData: {
      immediate: true,
      handler(val, oldVal) {
        if (_.isEmpty(val)) {
          this.questionSections = inductions
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

