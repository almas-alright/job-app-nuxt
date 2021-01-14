<template>
  <header class="site-navbar">
    <div class="container">
      <div class="row">

        <div class="col-md-3">
          <nuxt-link to="/">
            <img src="~assets/images/logo3.png" alt="">
          </nuxt-link>
        </div>

        <div class="col-md-8 ml-auto">
          <ul class="nav justify-content-end">
            <li class="nav-item">
              <nuxt-link to="/" class="nav-link">Home</nuxt-link>
            </li>
            <li v-if="!authenticated" class="nav-item">
              <nuxt-link to="/login" class="nav-link">Login</nuxt-link>
            </li>
            <li v-if="!authenticated" class="nav-item">
              <nuxt-link to="/register" class="nav-link">Register</nuxt-link>
            </li>
            <li v-if="authenticated" class="nav-item">
              <nuxt-link to="/my/profile" class="nav-link">My profile</nuxt-link>
            </li>
            <li class="nav-item">
              <a class="nav-link"  href="#">Contact Us</a>
            </li>
          </ul>

          <client-only>
            <b-dropdown right v-if="authenticated" size="sm" :text="'welcome '+user.name" variant="outline-info" class="m-2">
              <b-dropdown-item to="/my/account-settings"><fa :icon="['fas', 'user-cog']"></fa> Settings</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item href="javascript:" @click.prevent="logout()"><fa :icon="['fas', 'sign-out-alt']"></fa> Logout</b-dropdown-item>
            </b-dropdown>
          </client-only>
        </div>

      </div>
    </div>
  </header>

  <!-- <header class="site-navbar mt-3">-->
  <!--    <div class="container-fluid">-->
  <!--      <div class="row align-items-center">-->
  <!--        <div class="site-logo col-6">-->
  <!--          <nuxt-link to="/">-->
  <!--            <img src="~assets/images/logo3.png" alt="">-->
  <!--          </nuxt-link>-->
  <!--        </div>-->

  <!--        <nav class="mx-auto site-navigation">-->
  <!--          <ul class="site-menu js-clone-nav d-none d-xl-block ml-0 pl-0">-->
  <!--            <li>-->
  <!--              <nuxt-link to="/">home</nuxt-link>-->
  <!--            </li>-->
  <!--            <li v-if="!authenticated">-->
  <!--              <nuxt-link to="/login">login</nuxt-link>-->
  <!--            </li>-->
  <!--            <li v-if="!authenticated">-->
  <!--              <nuxt-link to="/register">register</nuxt-link>-->
  <!--            </li>-->
  <!--            <li v-if="authenticated">-->
  <!--              <nuxt-link to="/my/profile">my profile</nuxt-link>-->
  <!--            </li>-->
  <!--            <li>-->
  <!--              <a href="#">contact us</a>-->
  <!--            </li>-->
  <!--          </ul>-->
  <!--        </nav>-->
  <!--        &lt;!&ndash; class="d-lg-none" &ndash;&gt;-->
  <!--        <div class="right-cta-menu text-right d-flex aligin-items-center col-6">-->

  <!--          <div class="ml-auto">-->
  <!--            <client-only>-->
  <!--            <b-dropdown right v-if="authenticated" size="sm" :text="'welcome '+user.name" variant="outline-info" class="m-2">-->
  <!--              <b-dropdown-item to="/my/account-settings"><fa :icon="['fas', 'user-cog']"></fa> settings</b-dropdown-item>-->
  <!--              <b-dropdown-divider></b-dropdown-divider>-->
  <!--              <b-dropdown-item href="javascript:" @click.prevent="logout()"><fa :icon="['fas', 'sign-out-alt']"></fa> logout</b-dropdown-item>-->
  <!--            </b-dropdown>-->
  <!--            </client-only>-->
  <!--          </div>-->
  <!--          <a href="#" class="site-menu-toggle js-menu-toggle d-inline-block d-xl-none mt-lg-2 ml-3"><span-->
  <!--            class="icon-menu h3 m-0 p-0 mt-2"></span></a>-->
  <!--        </div>-->


  <!--      </div>-->
  <!--    </div>-->
  <!--  </header>-->


</template>

<script>
export default {
  methods: {
    logout() {
      let that = this
      this.$auth.logout()
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
