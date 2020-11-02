<template>
  <div>
    <div class="row">
      <div class="container">
        <div class="col-12">
          <div class="text-danger text-center" v-if="lv_errors.abc">{{ lv_errors.abc[0] }}</div>
          <input type="text" placeholder="Enter Email" id="email" :class="{'is-invalid' : lv_errors.email }"
                 v-model="form.email" required>
          <div class="invalid-feedback" v-if="lv_errors.email">{{ lv_errors.email[0] }}</div>
          <div class="text-center" v-if="showLoader"><b-spinner type="grow" label="Spinning"></b-spinner></div>
          <button type="button" class="btn-info" v-if="!showLoader" v-on:click="submit()">Reset My Password</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  data() {

    return {
      showLoader: false,
      form: {
        email: '',
        password: '',
        password_confirmation: ''
      }
    }

  },
  methods: {
    submit() {
      // this.showLoader = true
      let pass = this.randomString(10, 'an')
      this.form.password = pass
      this.form.password_confirmation = pass
      let that = this
      this.$axios.$patch('/auth/password-reset', that.form)
        .then(function (response) {
          that.showLoader = false
          if(response.success){
            that.$swal({
              title: 'Done!',
              text: response.message,
              type: 'success',
              allowOutsideClick: false,
            }).then((result) => {
              that.$router.push({ path : 'login'})
            })
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    randomString(len, an) {
      an = an && an.toLowerCase();
      var str = "",
        i = 0,
        min = an == "a" ? 10 : 0,
        max = an == "n" ? 10 : 62;
      for (; i++ < len;) {
        var r = Math.random() * (max - min) + min << 0;
        str += String.fromCharCode(r += r > 9 ? r < 36 ? 55 : 61 : 48);
      }
      return str;
    },
  }

}
</script>

<style lang="scss" scoped>

/* Full-width input fields */
input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

/* Set a style for all buttons */
button {
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}

/* Extra styles for the cancel button */
.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

/* Center the image and position the close button */
.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
  position: relative;
}

img.avatar {
  width: 40%;
  border-radius: 50%;
}

.container {
  padding: 16px;
}

span.psw {
  float: right;
  padding-top: 16px;
}

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  padding-top: 60px;
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

/* The Close Button (x) */
.close {
  position: absolute;
  right: 25px;
  top: 0;
  color: #000;
  font-size: 35px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: red;
  cursor: pointer;
}

/* Add Zoom Animation */
.animate {
  -webkit-animation: animatezoom 0.6s;
  animation: animatezoom 0.6s
}

@-webkit-keyframes animatezoom {
  from {
    -webkit-transform: scale(0)
  }
  to {
    -webkit-transform: scale(1)
  }
}

@keyframes animatezoom {
  from {
    transform: scale(0)
  }
  to {
    transform: scale(1)
  }
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
  .cancelbtn {
    width: 100%;
  }
}

</style>
