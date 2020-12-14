<template>

  <section class="pb-0">
    <div class="container">

      <div class="row align-items-center">
        <div class="col-lg-12">
          <h4>Social Media Profile
            <b-button pill size="sm" variant="info" v-if="!showEditForm" @click="editForm()">
              <fa :icon="['fas', 'edit']"/>
            </b-button>
          </h4>
        </div>
      </div>

      <div v-if="!showEditForm" class="row">
        <div class="col-lg-6 mb-5 mb-lg-0">
          <dl v-for="(mySocialLink, indexV) in mySocialLinks" :key="indexV" class="row">
            <dt class="col-sm-6">{{ mySocialLink.name }} :</dt>
            <dd class="col-sm-6"><a target="_blank" :href="'https://www.'+mySocialLink.name+'.com/'+mySocialLink.url">{{ mySocialLink.url }}</a></dd>
          </dl>
        </div>
      </div>

      <transition
        enter-active-class="animated animate__fadeIn"
        leave-active-class="animated animate__fadeOut"
      >
      <validation-observer v-if="showEditForm" tag="div" class="row" ref="observer" v-slot="{ handleSubmit }">
        <div class="col-lg-6 mb-5 mb-lg-0">
          <div v-for="(mySocialLink, index) in mySocialLinks" :key="index" class="form-group">
            <div class="row">
              <div class="col-sm-12">
                <b-input-group size="sm" prepend="account name : " class="mb-2">
                  <b-input-group-prepend is-text>
                    <validation-provider
                      name="Name"
                      :rules="{ required: true, alpha_num:true }"
                      v-slot="validationContext"
                    >
                      <b-form-select
                        id="nationality"
                        name="nationality"
                        v-model="mySocialLink.name"
                        :options="socialLinks"
                        :state="getValidationState(validationContext)"
                        value-field="name"
                        text-field="name"
                        class="capitalize"
                        size="sm"
                        @change="checkIfReplicated(index)"
                      >
                        <template v-slot:first>
                          <b-form-select-option :value="'null'" disabled>select</b-form-select-option>
                        </template>
                      </b-form-select>
                      <!--                  <b-form-invalid-feedback>{{ validationContext.errors[0] }}</b-form-invalid-feedback>-->
                    </validation-provider>
                  </b-input-group-prepend>
                  <b-input-group-prepend is-text>
                    Id :
                  </b-input-group-prepend>
                  <b-input-group-prepend is-text>
                    <validation-provider
                      name="ID"
                      :rules="{ required: true, regx:/^\S*$/ }"
                      v-slot="validationContext"
                    >
                      <b-form-input size="sm" placeholder="Enter ID" :state="getValidationState(validationContext)"
                                    v-model="mySocialLink.url"></b-form-input>
                      <!--                  <b-form-invalid-feedback>{{ validationContext.errors[0] }}</b-form-invalid-feedback>-->
                    </validation-provider>
                  </b-input-group-prepend>
                  <b-input-group-append>
                    <button type="button" @click="doRemove(index)" class="btn btn-danger btn-sm">
                      <fa :icon="['fas', 'trash-alt']"/>
                    </button>
                  </b-input-group-append>
                </b-input-group>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-2">
              <button type="button" @click="handleSubmit(addLink)" class="btn btn-primary btn-sm">
                <fa :icon="['fas', 'plus-square']"/>
              </button>
            </div>
            <div class="offset-sm-4 col-sm-6">
              <button type="button" v-on:click="editForm()" class="btn btn-dark btn-sm">
                <fa :icon="['fas', 'window-close']"/>
              </button>
              <button type="button" v-if="mySocialLinks.length" v-on:click="handleSubmit(saveForm)"
                      class="btn btn-success btn-sm">
                <fa :icon="['fas', 'save']"/>
                save
              </button>
            </div>
          </div>

        </div>
      </validation-observer>
      <!--      here-->
      </transition>
    </div>
    <br>
  </section>

</template>

<script>
import _ from 'lodash'
import commons from '~/mixins/common'

export default {
  mixins: [commons],
  props: {
    socialMedeaData: {
      type: Array,
      default: function () {
        return [{name: null, url: null, disabled: null}]
      }
    }
  },
  data() {
    return {
      showEditForm: false,
      socialLinks: [
        {name: 'linkedin', url: null, disabled: false},
        {name: 'facebook', url: null, disabled: false},
        {name: 'twitter', url: null, disabled: false},
        {name: 'instagram', url: null, disabled: false},
        {name: 'youtube', url: null, disabled: false},
      ],
      mySocialLinks: this.socialMedeaData
    }
  },
  methods: {
    editForm() {
      this.showEditForm = !this.showEditForm
    },
    addLink() {
      if (this.mySocialLinks.length < 5) {
        this.mySocialLinks.push({name: null, url: '', disabled: null})
      } else {
        this.$swal.fire('You Can not add more links')
      }
    },
    doRemove(index) {
      if (typeof this.socialMedeaData[index] === 'undefined') {
        this.removeLink(index)
      } else {
        this.$swal.fire({
          title: 'Are you sure?',
          text: "delete this!",
          showCancelButton: true,
          confirmButtonColor: '#d33',
          confirmButtonText: 'Yes, delete!'
        }).then((result) => {
          if (result.value) {
            this.removeLink(index)
            this.sendData2({social_medias: this.mySocialLinks}, 'Social Media')
          }
        })
      }
    },
    removeLink(index) {
      let removeQue = this.mySocialLinks[index].name
      if (removeQue) {
        let socialIndex = _.findIndex(this.socialLinks, function (o) {
          return o.name == removeQue
        });
        this.socialLinks[socialIndex].disabled = false
      }
      this.mySocialLinks.splice(index, 1)
    },
    checkIfReplicated(index) {
      let selectedVal = this.mySocialLinks[index].name
      console.log(selectedVal)
      if (selectedVal) {
        let socialSize = _.filter(this.mySocialLinks, social => social.name === selectedVal);
        this.disableUsed()
        if (socialSize.length > 1) {
          this.$swal.fire('You already added ' + selectedVal)
          this.mySocialLinks[index].name = null
        }
      }
    },
    disableUsed() {
      let that = this;
      _.forEach(this.mySocialLinks, function (x) {
        if (x.name) {
          let socialIndex = _.findIndex(that.socialLinks, function (o) {
            return o.name == x.name
          });
          that.socialLinks[socialIndex].disabled = true
        }
      })
    },
    saveForm() {
      this.sendData({social_medias: this.mySocialLinks}, 'Social Media')
      // this.$emit('saveData')
      this.showEditForm = !this.showEditForm
    }
  },
  created: function () {
    this.disableUsed()
    //console.log('mounted')
  },
  watch: {
    socialMedeaData: {
      // the callback will be called immediately after the start of the observation
      immediate: true,
      handler(val, oldVal) {
        if (_.isEmpty(val)) {
          this.mySocialLinks = [{name: null, url: null, disabled: null}]
        }
      }
    }
  }
}
</script>

<style scoped>
.was-validated .custom-select:invalid, .custom-select.is-invalid,
.was-validated .form-control:invalid, .form-control.is-invalid,
.was-validated .custom-select:valid, .custom-select.is-valid,
.was-validated .form-control:valid, .form-control.is-valid
{
  background-image: none;
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.2rem;
}
.custom-select {
  /*display: inline-block;*/
  /*width: 100%;*/
  /*height: calc(1.5em + 0.75rem + 2px);*/
  /*padding: 0.375rem 1.75rem 0.375rem 0.75rem;*/

}
</style>
