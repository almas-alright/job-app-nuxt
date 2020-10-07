export default {
  methods:{
    saveImage(imageData, filename) {
      let that = this
      fetch(imageData)
        .then(res => res.blob())
        .then(blob => {
          const fd = new FormData();
          const file = new File([blob], filename);
          fd.append('image', file)
          let config = {
            headers: { 'Content-Type': 'multipart/form-data' }
          }
          this.$axios.$post('/media/up-personal-single', fd).then(response => {
            console.log(response)
            that.$emit('imageUploaded')
          })
        })
    },
  }
}
