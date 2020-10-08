<template>
  <header class="site-navbar mt-3">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="site-logo col-6"><a href="index.html">Careers</a></div>

          <nav class="mx-auto site-navigation">
            <ul class="site-menu js-clone-nav d-none d-xl-block ml-0 pl-0">
              <li><nuxt-link to="/">home</nuxt-link></li>
              <!-- <li><a href="job-listings.html">Job Listings</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="services.html">Services</a></li>
              <li><a href="blog.html">Blog</a></li> -->
              <li v-if="!authenticated">
                <nuxt-link to="/login">login</nuxt-link>
              </li>
              <li v-if="!authenticated">
                <nuxt-link to="/register">register</nuxt-link>
              </li>
              <li v-if="authenticated">
                <nuxt-link to="/my/profile">my profile</nuxt-link>
              </li>
              <li v-if="authenticated">
                <a href="javascript:" @click.prevent="logout()">logout</a>
              </li>

            </ul>
          </nav>
          <!-- class="d-lg-none" -->
          <div class="right-cta-menu text-right d-flex aligin-items-center col-6">
            <div class="ml-auto">
              <a href="javascript:" class="btn btn-primary border-width-2 d-none d-lg-inline-block"><span class="mr-2 icon-paper-plane"></span>Contact Us</a>
            </div>
            <a href="#" class="site-menu-toggle js-menu-toggle d-inline-block d-xl-none mt-lg-2 ml-3"><span class="icon-menu h3 m-0 p-0 mt-2"></span></a>
          </div>

        </div>
      </div>
    </header>
</template>

<script>
export default {
  methods:{
    logout(){
      this.$auth.logout().then(function(response){
        console.log(response);
      })
    }
  }
}
</script>

<style scoped>

  .site-navbar .site-navigation .site-menu .nuxt-link-exact-active {
    color: #fff;
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.79);
    display: inline-block;
    padding: 5px 20px;
  }
</style>
