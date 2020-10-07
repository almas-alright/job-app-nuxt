<template>
  <div>
    <div class="img-container">
<!--      <img v-if="userAvatar" :src="userAvatar">-->
      <img :src="userAvatar" class="rounded" >
      <b-button class="change" pill variant="info" @click="selectImage" size="sm">Change</b-button>
    </div>
    <crop-avatar
      class="upImage"
      ref="cropper"
      @uploaded="handleUploaded"
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
      userAvatar: this.profileImage,
    }
  },
  methods: {
    handleUploaded(resp) {
      console.log(resp)
      this.userAvatar = resp.relative_url;
    },
    getCData(datax){
      let that = this
      let iData = datax.getCroppedCanvas().toDataURL()
      fetch(iData)
        .then(res => res.blob())
        .then(blob => {
          const fd = new FormData();
          const file = new File([blob], 'avatar.png');
          fd.append('image', file)
          let config = {
            headers: {'Content-Type': 'multipart/form-data'}
          }
          this.$axios.$post('/media/up-personal-single', fd).then(response => {
            if(response.success){
              that.userAvatar = iData
              that.$emit('profileImageUploaded')
            }
          })
        })
    },
    selectImage(e){
      this.$refs.cropper.pickImage(e)
    }
  },
  watch:{
    profileImage: {
      // the callback will be called immediately after the start of the observation
      immediate: true,
      handler (val, oldVal) {
        if(_.isEmpty(val)){

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
