<template>
  <div class="container">
    <div class="row">
      <div v-for="(job, index) in jobs" :key="index" class="col-sm-12">
        <div class="card mb-2">
          <div class="card-body">
            <h5 class="card-title">{{ job.title }}</h5>
            <p class="card-subtitle text-info"> <span class="font-weight-bold"> Published : </span> {{ job.approved_at }} || <span class="font-weight-bold"> Application deadline : </span> {{ job.application_deadline }}</p>
            <p class="card-subtitle text-info"> <span class="font-weight-bold"> Position : </span> {{ job.job_role }} || <span class="font-weight-bold"> Job Type : </span> {{ job.job_type }}</p>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a @click="singlePush(job.id, job.slug)" class="btn btn-sm btn-info">Details</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Board",
  data(){
    return {
      loaded : false,
      jobs: []
    }
  },
  methods:{
    loadJobs(){
      this.loaded = false
      let that = this
      this.$axios.get('/job/board').then(response => {
        that.jobs = response.data.data
      });
    },
    singlePush(id,slug){
      this.$router.push({ name: 'job-id-slug', params: { id:btoa(id), slug: slug }})
    }
  },
  mounted() {
    this.loadJobs();
  },
}
</script>

<style scoped>

</style>
