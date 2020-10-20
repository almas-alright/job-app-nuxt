<template>
  <div>
    <div class="img-container">
<!--      <img v-if="userAvatar" :src="userAvatar">-->
      <img v-if="!change" :src="userAvatar" class="rounded" >
      <b-button class="change" pill variant="info" @click="selectImage" size="sm">Change</b-button>
    </div>
    <crop-avatar
      class="upImage"
      ref="cropper"
      @uploaded="handleUploaded"
      @cancel="change=false"
      :upload-handler="getCData"
    >

    </crop-avatar>
  </div>
</template>

<script>
import CropAvatar from '~/components/media/CropAvatar';
import imagePersonal from '~/mixins/image-personal'
import _ from "lodash";
export default {
  mixins:[imagePersonal],
  components: { CropAvatar },
  name: "ProfileImage",
  props:{
    profileImage:{
      type:String,
      default: require('@/assets/images/placeholder.png')
    }
  },
  data() {
    return {
      change:false,
      userAvatar: this.profileImage,
    }
  },
  methods: {
    handleUploaded(resp) {
      console.log(resp)
      this.userAvatar = resp.relative_url;
    },
    getCData(datax){
      let filename = this.$refs.cropper.getFileName()
      let that = this
      let iData = datax.getCroppedCanvas().toDataURL()
      this.$swal({
        title: 'updating profile image' ,
        allowOutsideClick: false,
      });
      this.$swal.showLoading();
      fetch(iData)
        .then(res => res.blob())
        .then(blob => {
          const fd = new FormData();
          const file = new File([blob], that.makeFilename(filename));
          fd.append('image', file)
          fd.append('image_type', 'avatar')
          let config = {
            headers: {'Content-Type': 'multipart/form-data'}
          }
          this.$axios.$post('/media/up-personal-single', fd).then(response => {
            that.$swal.close()
            if(response.success){
              that.userAvatar = iData
              console.log(that.userAvatar)
              that.$emit('profileImageUploaded')
              that.$swal({
                title: 'profile image has been updated',
                type: 'success',
                allowOutsideClick: false,
              })
            } else {
              that.$swal({
                title: 'Opps! Something Happened Wrong',
                type: 'error',
                allowOutsideClick: false,
              })
            }
          })
        })
    },
    makeFilename(filename){
      let extension = filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2);
      let onlyName = filename.replace("."+extension, "")
      onlyName = onlyName.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(x => x.toLowerCase())
        .join('_');
      return onlyName+"."+extension
    },
    selectImage(e){
      this.change = true
      this.userAvatar = null
      this.$refs.cropper.pickImage(e)
    }
  },
  watch:{
    profileImage: {
      // the callback will be called immediately after the start of the observation
      immediate: true,
      handler (val, oldVal) {
        if(_.isEmpty(val)){
          this.userAvatar = require('@/assets/images/placeholder.png')
        }
      }
    }
  }

}
</script>

<style scoped>
.img-container {
  position: relative;
  width: 100%;
  max-width: 400px;
}

.img-container img {
  width: 100%;
  height: auto;
}

.img-container .btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  opacity: 0;
}

.img-container .btn:hover {
  background-color: black;
}
.img-container:hover .btn {
  opacity: 1;
}
</style>
