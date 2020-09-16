<template>

  <section class="site-section pb-0">
    <div class="container">

      <div class="row align-items-center">
        <div class="col-lg-12">
            <h4>Social Media Profile  <button type="button" v-if="!showEditForm" @click="editForm()" class="btn btn-primary btn-sm">edit</button></h4>
        </div>
      </div>

      <div v-if="!showEditForm" class="row">
        <div class="col-lg-6 mb-5 mb-lg-0">
          <dl v-for="(mySocialLink, indexV) in mySocialLinks" :key="indexV" class="row">
            <dt class="col-sm-6">{{ mySocialLink.name }} : </dt>
            <dd class="col-sm-6">{{ mySocialLink.url }}</dd>
          </dl>
        </div>
      </div>

      <div v-if="showEditForm" class="row">
        
        <div class="col-lg-6 mb-5 mb-lg-0">

          <div v-for="(mySocialLink, index) in mySocialLinks" :key="index" class="form-group">
            <div class="row">
              <div class="col-sm-3">
                <b-form-select
                    id="nationality"
                    name="nationality"
                    v-model="mySocialLink.name"
                    :options="socialLinks"
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
              </div>
              <div class="col-sm-8">
                <b-form-input size="sm" placeholder="Enter url" v-model="mySocialLink.url"></b-form-input>
              </div>
              <div class="col-sm-1">
                <button type="button" @click="removeLink(index)" class="btn btn-danger btn-sm">x</button>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-1">
              <button type="button" @click="addLink()" class="btn btn-primary btn-sm">add</button>
            </div>
            <div class="offset-sm-8 col-sm-3">
              <button type="button" v-if="mySocialLinks.length" v-on:click="saveForm()" class="btn btn-success btn-sm">save changes</button>
            </div>
          </div>

        </div>
      </div>

    </div>
    <br>
  </section>

</template>

<script>
import _ from 'lodash'
export default {
  data(){
    return {
      showEditForm : false,
      socialLinks:[
        {name: 'linkedin', url: null, disabled: false},
        {name: 'facebook', url: null, disabled: false},
        {name: 'twitter', url: null, disabled: false},
        {name: 'instagram', url: null, disabled: false},
        {name: 'youtube', url: null, disabled: false},
      ],
      mySocialLinks: []
    }
  },
  methods:{
    editForm(){
      this.showEditForm = !this.showEditForm
    },
    addLink(){
      if(this.mySocialLinks.length < 5){
        this.mySocialLinks.push({name: null, value:null})
      } else {
        this.$swal.fire('You Can not add more links')
      }
    },
    removeLink(index){
      let removeQue = this.mySocialLinks[index].name
      if(removeQue){
        let socialIndex = _.findIndex(this.socialLinks, function(o) { return o.name == removeQue });
        this.socialLinks[socialIndex].disabled = false
      }
      this.mySocialLinks.splice(index, 1)
    },
    checkIfReplicated(index){
      let selectedVal = this.mySocialLinks[index].name
      console.log(selectedVal)
      if(selectedVal){
        let socialSize = _.filter(this.mySocialLinks, social => social.name === selectedVal);
        this.disableUsed()
        if(socialSize.length > 1){
          this.$swal.fire('You already added '+selectedVal)
          this.mySocialLinks[index].name = null
        }
      }
    },
    disableUsed(){
      let that = this;
      _.forEach(this.mySocialLinks, function(x){
        if(x.name){
          let socialIndex = _.findIndex(that.socialLinks, function(o) { return o.name == x.name });
          that.socialLinks[socialIndex].disabled = true
        }
      })
    },
    saveForm(){
      this.$emit('saveData')
      this.showEditForm = !this.showEditForm
    }
  },
  created:function(){
    this.disableUsed()
    //console.log('mounted')
  }
}
</script>