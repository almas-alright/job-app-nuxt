import _ from 'lodash'
export default {
  methods:{
    loadAllImages(){
      let that = this
        this.removeImages()
        this.$axios.get('/media/get-media/0').then(response => {
          that.addImage(response.data.data)
        })
    },
    getImage(id, image_attr){
      let images = this.mediaImages
      if(isNaN(id)){
        return id
      } else {
        let i  = _.findIndex(images, function(o) { return o.img_id === id })
        let item = images[i]
        return item[image_attr]
      }
    },
    addImage(images){
      for (let i = 0; i < images.length; i++) {
        this.$store.commit('addMedia', images[i])
      }
    },
    removeImages(){
      // this.$store.commit('removeMedias')
    }
  },
  created() {
    // this.loadAllImages();
    // console.log(this.mediaImages)

  },
  // computed: {
  //   mediaImages() {
  //     return this.$store.state.medias
  //   }
  // },

}
