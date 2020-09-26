<template>

  <section class="site-section pb-0">
    <div class="container">

      <div class="row align-items-center">
        <div class="col-lg-12">
            <h4>Lisence Information  <button type="button" v-if="!showEditForm" @click="editForm()" class="btn btn-primary btn-sm">edit</button></h4>
        </div>
      </div>

      <div v-if="!showEditForm" class="row">
        <div class="col-lg-6 mb-5 mb-lg-0">
          <b-table striped hover :items="mylisences">
            <template v-slot:cell(image)="items">
              <b-img class="img-border img-table" :src="getImage(items.value, 'thumb')" fluid alt="Fluid image"></b-img>
            </template>
          </b-table>
        </div>
      </div>

      <div v-if="showEditForm" class="row">
        <div class="col-lg-6 mb-5 mb-lg-0">
          <div v-for="(mylisence, index) in mylisences" :key="index" class="form-group">
            <div class="row">
              <div class="col-sm-3">
                <b-form-select
                    id="nationality"
                    name="nationality"
                    v-model="mylisence.name"
                    :options="lisences"
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
              <div class="col-sm-2">
                <media-browser :size="index" v-model="mylisence.image"></media-browser>
              </div>
              <div class="col-sm-4">
                <b-form-input size="sm" type="date" placeholder="Expiry Date" v-model="mylisence.expiry_date"></b-form-input>
              </div>
              <div class="col-sm-1">
                <button type="button" @click="removeLisence(index)" class="btn btn-danger btn-sm">x</button>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-1">
              <button type="button" @click="addLisence()" class="btn btn-primary btn-sm">add</button>
            </div>
            <div class="offset-sm-8 col-sm-3">
              <button type="button" v-if="mylisences.length" v-on:click="saveForm()" class="btn btn-success btn-sm">save changes</button>
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
import MediaBrowser from '~/components/media/MediaBrowser';
import Commons from '~/mixins/common'
export default {
  mixins:[Commons],
  components:{ MediaBrowser },
  data(){
    return {
      showEditForm : false,
      lisences:[
        {name: 'C (car)', image: require('@/assets/images/placeholder.png'), disabled: false},
        {name: 'MR (medium rigid)', image: require('@/assets/images/placeholder.png'), disabled: false},
        {name: 'HR (heavy rigid)', image: require('@/assets/images/placeholder.png'), disabled: false},
      ],
      mylisences: [{name: null, image:require('@/assets/images/placeholder.png'), expiry_date: null}]
    }
  },
  methods:{
    editForm(){
      this.showEditForm = !this.showEditForm
    },
    addLisence(){
      if(this.mylisences.length < 5){
        this.mylisences.push({ name: null, image:require('@/assets/images/placeholder.png'),  expiry_date: null })
      } else {
        this.$swal.fire('You Can not add more links')
      }
    },
    removeLisence(index){
      let removeQue = this.mylisences[index].name
      if(removeQue){
        let lisenceIndex = _.findIndex(this.lisences, function(o) { return o.name === removeQue });
        this.lisences[lisenceIndex].disabled = false
      }
      this.mylisences.splice(index, 1)
    },
    checkIfReplicated(index){
      let selectedVal = this.mylisences[index].name
      console.log(selectedVal)
      if(selectedVal){
        let socialSize = _.filter(this.mylisences, social => social.name === selectedVal);
        this.disableUsed()
        if(socialSize.length > 1){
          this.$swal.fire('You already added '+selectedVal)
          this.mylisences[index].name = null
        }
      }
    },
    disableUsed(){
      let that = this;
      _.forEach(this.mylisences, function(x){
        if(x.name){
          let lisenceIndex = _.findIndex(that.lisences, function(o) { return o.name == x.name });
          that.lisences[lisenceIndex].disabled = true
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
