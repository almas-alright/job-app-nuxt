<template>
  <div>
    <section class="home-section-board">

    </section>
    <board></board>
  </div>

</template>

<script>
import Board from '~/components/job/Board';
export default {
  layout: 'main',
  components:{ Board },
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
.home-section-board{
  min-height: 100px;
}

</style>
