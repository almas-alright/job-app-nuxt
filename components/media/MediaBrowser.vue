<template>
    <div>
        <b-modal :id="id" size="xl" title="Media Library" no-close-on-backdrop>
            <crop-load v-if="uploadImage" @imageUploaded="imageUploaded()"></crop-load>
            <b-container v-if="!uploadImage" class="p-4 bg-dark">
              <b-row>
                <b-col v-for="(image, index) in images.data" :key="index" col lg="2">
                  <b-img @click="selectImage(image.img_id)" class="thumbimage" thumbnail fluid :src="image.thumb" alt="Image 1"></b-img>
                </b-col>
              </b-row>
              <b-row>
                <b-col col lg="1"> <b-button v-if="images.prev_page_url" @click="loadImagesNavigate(images.prev_page_url)" pill variant="outline-info" size="sm"><fa icon="angle-double-left"/></b-button> </b-col>
                <b-col col offset-lg="10" lg="1"> <b-button v-if="images.next_page_url" @click="loadImagesNavigate(images.next_page_url)" pill variant="outline-info" size="sm"><fa icon="angle-double-right"/></b-button> </b-col>
              </b-row>
            </b-container>
          <template v-slot:modal-footer>
            <b-container>
              <b-row>
                <b-col col lg="2">
                  <b-button v-if="!uploadImage" @click="uploadImage = !uploadImage" pill variant="info" size="sm">Upload</b-button>
                  <b-button v-if="uploadImage" @click="uploadImage = !uploadImage" pill variant="info" size="sm">Browse Library</b-button>
                </b-col>
                <b-col col offset-lg="9" lg="1">
                  <b-button @click="hideModal()" pill size="sm">Cancel</b-button>
                </b-col>
              </b-row>
            </b-container>
          </template>
        </b-modal>
      <input
        type="hidden"
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
      >

      <b-img class="img-border" @click="showModal()" :src="getImage(value, 'thumb')" fluid alt="Fluid image"></b-img>
    </div>
</template>
<script>
import CropLoad from '~/components/media/CropLoad';
import Commons from '~/mixins/common'
export default {
    props: ['value', 'size'],
    mixins:[Commons],
    components:{ CropLoad },
    data(){
      return {
        uploadImage:false,
        per_page: '/12',
        mediaUrl: '/media/get-media',
        images:[],
        placeholderImg: require('@/assets/images/placeholder.png'),
        id: 'modal-abcd-'+this.size
      }
    },
    methods:{
        showModal(){
            this.$bvModal.show(this.id)
        },
        hideModal(){
            this.$bvModal.hide(this.id)
        },
        keyHandler(event) {
            if (event.key === "+") {
              event.preventDefault();
            }
        },
        loadImages(url){
            let that = this
            this.removeImages()
            this.$axios.get(url).then(response => {
                that.images = response.data
                // that.addImage(that.images.data)
            })
        },
        loadImagesNavigate(chunk){
            if(chunk){
              chunk = chunk.replace('/', '')
              this.loadImages(this.mediaUrl+this.per_page+chunk)
            }
        },
        selectImage(image){
            // this.placeholderImg = this.getImage(image, "thumb")
            this.$emit("input", image) ;
            this.hideModal()
        },

        imageUploaded(){
          // this.loadAllImages()
          this.uploadImage = false
          let lp = this.images.last_page_url
          lp = lp.replace('/', '')
          this.loadImages(this.mediaUrl+this.per_page+lp)
        }
    },
    created() {
        this.loadImages(this.mediaUrl+this.per_page)
    }
}
</script>

<style scoped>
  .thumbimage{
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .img-border{
    border: 3px dashed #1C6EA4;
  }
</style>
