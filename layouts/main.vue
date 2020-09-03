<template>
  <div>
      <Top></Top>
        <div class="content">
            <nuxt/>
        </div>
     <Footer></Footer>
  </div>
</template>

<script>
import Top from '@/components/Top'
import Footer from '@/components/Footer'
export default {
  components: {Top,Footer}
}
</script>

