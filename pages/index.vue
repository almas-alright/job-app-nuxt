<template>
  <section>
<!--    <section class="home-section section-hero overlay bg-image" :style="{ backgroundImage: 'url(' + require('@/assets/images/ster.jpg') + ')' }" id="home-section">-->
<!--      <div class="">-->
<!--        -->
<!--      </div>-->
<!--    </section>-->
    <div class="rt-container">
      <div class="col-rt-12">
        <div class="Scriptcontent">

          <!-- Animated Background HTML -->
          <div class="context">

          </div>


          <div class="area" >
            <ul class="circles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div >
          <!-- End Animated Background HTML -->


        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MediaBrowser from '~/components/media/MediaBrowser';
export default {
  layout: 'main',
  components:{ MediaBrowser },
  data(){
    return {
      someImg: ''
    }
  },
  methods:{
  },
  head() {
    return {
      title: 'home | stevejobs',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'stevejobs is a job searching and candidate hosting application'
        }
      ]
    }
  }
}
</script>

<style scoped>
*{
  margin: 0px;
  padding: 0px;
}

body{
  font-family: 'Exo', sans-serif;
}


.context {
  width: 100%;
  position: absolute;
  top:50vh;

}

.context h1{
  text-align: center;
  color: #fff;
  font-size: 50px;
}


.area{
  background: #17756F;
  background: -webkit-linear-gradient(to left, #38a9bb, #184850);
  width: 100%;
  height:100vh;


}

.circles{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.circles li{
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.8);
  animation: animate 25s linear infinite;
  bottom: -150px;

}

.circles li:nth-child(1){
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}


.circles li:nth-child(2){
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.circles li:nth-child(3){
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}

.circles li:nth-child(4){
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.circles li:nth-child(5){
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}

.circles li:nth-child(6){
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}

.circles li:nth-child(7){
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
}

.circles li:nth-child(8){
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
}

.circles li:nth-child(9){
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.circles li:nth-child(10){
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
}
.circles li:nth-child(11){
  left: 25%;
  width: 150px;
  height: 150px;
  animation-delay: 3s;
  animation-duration: 15s;
}
.circles li:nth-child(12){
  left: 30%;
  width: 150px;
  height: 150px;
  animation-delay: 4s;
  animation-duration: 19s;
}
.circles li:nth-child(13){
  left: 75%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 19s;
}
.circles li:nth-child(14){
  left: 80%;
  width: 150px;
  height: 150px;
  animation-delay: 5s;
  animation-duration: 17s;
}
.circles li:nth-child(15){
  left: 15%;
  width: 150px;
  height: 150px;
  animation-delay: 6s;
  animation-duration: 20s;
}



@keyframes animate {

  0%{
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }

  100%{
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }

}
</style>
