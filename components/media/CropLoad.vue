<template>
  <div>

    <input
      ref="input"
      type="file"
      name="image"
      accept="image/*"
      @change="setImage"
    />

    <div class="content">
      <section class="cropper-area">
        <div class="img-cropper">
          <vue-cropper
            v-if="imgSrc"
            ref="cropper"
            :src="imgSrc"
            preview=".preview"
          />
        </div>
        <div class="actions">
          <a
            v-if="imgSrc"
            href="#"
            role="button"
            @click.prevent="cropImage"
          >
            Crop
          </a>
          <a
            href="#"
            role="button"
            @click.prevent="reset"
          >
            Reset
          </a>

          <a
            href="#"
            role="button"
            @click.prevent="showFileChooser"
          >
            Upload Image
          </a>
          <a
            v-if="imgSrc"
            href="#"
            role="button"
            @click.prevent="uploadFile"
          >
            Save Image to Library
          </a>
        </div>

        <!-- <textarea v-model="data" /> -->
      </section>
      <section class="preview-area">
        <p>Preview</p>
        <div class="preview" />
        <p>Cropped Image</p>
        <div class="cropped-image">
          <img
            v-if="cropImg"
            :src="cropImg"
            alt="Cropped Image"
          />
          <div v-else class="crop-placeholder" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import VueCropper from 'vue-cropperjs';
import 'cropperjs/dist/cropper.css';
export default {
  components: {
    VueCropper,
  },
  data() {
    return {
      imgSrc: '',
      cropImg: '',
      data: null,

      fileUploaded:false,
      filename: ''
    };
  },
  methods: {
    cropImage() {
      // get image data for post processing, e.g. upload or setting image src
      this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
    },

    reset() {
      this.$refs.cropper.reset();
    },

    setImage(e) {
      const file = e.target.files[0];
      this.filename = file.name
      this.fileUploaded = true
      if (file.type.indexOf('image/') === -1) {
        alert('Please select an image file');
        return;
      }
      if (typeof FileReader === 'function') {
        const reader = new FileReader();
        reader.onload = (event) => {
          this.imgSrc = event.target.result;
          // rebuild cropperjs with the updated source
          // this.$refs.cropper.replace(event.target.result);
          this.cropImg = this.imgSrc
        };
        reader.readAsDataURL(file);
      } else {
        alert('Sorry, FileReader API not supported');
      }

    },
    showFileChooser() {
      this.$refs.input.click();
    },
    zoom(percent) {
      this.$refs.cropper.relativeZoom(percent);
    },
    dataURLtoFile(dataurl, filename){
        const arr = dataurl.split(',')
        const mime = arr[0].match(/:(.*?);/)[1]
        const bstr = atob(arr[1])
        let n = bstr.length
        const u8arr = new Uint8Array(n)
        while (n) {
            u8arr[n - 1] = bstr.charCodeAt(n - 1)
            n -= 1 // to make eslint happy
        }
        return new File([u8arr], filename, { type: mime })
    },
    uploadFile(){
      console.log(this.cropImg)
       let base64 = this.cropImg
        let that = this
        fetch(base64)
        .then(res => res.blob())
        .then(blob => {
            const fd = new FormData();
            const file = new File([blob], this.makeFilename(this.filename));
            fd.append('img', file)
            let config = {
                headers: { 'Content-Type': 'multipart/form-data' }
            }
            this.$axios.$post('/media/up-media', fd, config).then(response => {
              console.log(response.data)
              this.$store.dispatch('images/setMedia', response.data)
              that.$emit('imageUploaded')
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
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


input[type="file"] {
  display: none;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 5px 0;
}
.header h2 {
  margin: 0;
}
.header a {
  text-decoration: none;
  color: black;
}
.content {
  display: flex;
  justify-content: space-between;
}
.cropper-area {
  width: 614px;
}
.actions {
  margin-top: 1rem;
}
.actions a {
  display: inline-block;
  padding: 5px 15px;
  background: #0062CC;
  color: white;
  text-decoration: none;
  border-radius: 3px;
  margin-right: 1rem;
  margin-bottom: 1rem;
}
textarea {
  width: 100%;
  height: 100px;
}
.preview-area {
  width: 307px;
}
.preview-area p {
  font-size: 1.25rem;
  margin: 0;
  margin-bottom: 1rem;
}
.preview-area p:last-of-type {
  margin-top: 1rem;
}
.preview {
  width: 100%;
  height: calc(372px * (9 / 16));
  overflow: hidden;
}
.crop-placeholder {
  width: 100%;
  height: 200px;
  background: #ccc;
}
.cropped-image img {
  max-width: 100%;
}

</style>
