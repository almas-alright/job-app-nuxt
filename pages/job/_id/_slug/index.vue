<template>
  <div>
    <section class="home-section-board">

    </section>
    <single></single>
  </div>
</template>

<script>
import Single from '~/components/job/Single';
export default {
  layout: 'main',
  components:{ Single },
}
</script>

<style scoped>
.home-section-board{
  min-height: 100px;
}

</style>
