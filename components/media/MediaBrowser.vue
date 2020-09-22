<template>
    <div>
        <b-modal id="modal-xl" size="xl" title="Media Library" no-close-on-backdrop>
            <crop-load v-if="uploadImage"></crop-load>
            <b-container v-if="!uploadImage" class="p-4 bg-dark">
              <b-row>
                <b-col col lg="2">
                  <b-img class="thumbimage" thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Image 1"></b-img>
                </b-col>
              </b-row>
              <b-row>
                <b-col col lg="1"> <b-button pill variant="outline-info" size="sm"><fa icon="angle-double-left"/></b-button> </b-col>
                <b-col col offset-lg="10" lg="1"> <b-button pill variant="outline-info" size="sm"><fa icon="angle-double-right"/></b-button> </b-col>
              </b-row>
            </b-container>
          <template v-slot:modal-footer>

            Using <code>$bvModal</code> Methods
          </template>
        </b-modal>
      <input
        @click="showModal()"
        :placeholder="placeholder"
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
      >
    </div>
</template>
<script>
import CropLoad from '~/components/media/CropLoad';
export default {
    props: ['value', 'placeholder'],
    components:{ CropLoad },
    data(){
      return {
        uploadImage:false,
        images:[]
      }
    },
    methods:{
        showModal(){
            this.$bvModal.show('modal-xl')
        },
        selectedImage(){
            this.$emit('newImage', 'mattmaribojoc')
        },
        keyHandler(event) {
            if (event.key === "+") {
              event.preventDefault();
            }
        },
        loadImages(){

        }
    }
}
</script>

<style scoped>
  .thumbimage{
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
</style>
