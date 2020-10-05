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
      if(!id || isNaN(id)){
        return require('@/assets/images/placeholder.png')
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

    },
    sendData(data, title) {
      let that = this
      let config = {
        headers: {'Access-Control-Allow-Origin': '*'}
      }
      this.$swal({
        title: 'updating '+title,
        allowOutsideClick: false,
      });
      this.$swal.showLoading()
      this.$axios.$post('/profile/set', data).then(response => {
        that.$swal.close()
        if(response.success){
          that.$swal({
            title: title+' has been updated',
            type: 'success',
            allowOutsideClick: false,
          })
        } else {
          that.$swal({
            title: title+' not updated',
            type: 'error',
            allowOutsideClick: false,
          })
        }
      })
    },
    sendData2(data, title) {
      let that = this
      let config = {
        headers: {'Access-Control-Allow-Origin': '*'}
      }
      this.$swal({
        title: 'updating '+title,
        allowOutsideClick: false,
      });
      this.$swal.showLoading()
      this.$axios.$post('/profile/set', data).then(response => {
        that.$swal.close()
        if(response.success){
          that.$swal({
            title: title+' has been deleted',
            type: 'success',
            allowOutsideClick: false,
          })
        } else {
          that.$swal({
            title: title+' not updated',
            type: 'error',
            allowOutsideClick: false,
          })
        }
      })
    }
  },
  created() {

  },


}
