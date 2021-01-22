<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <div class="card mb-2">
          <div class="card-body">
            <h2 class="card-title">{{ job.title }}</h2>
            <p class="lead">Job Details : </p>
            <div v-html="job.description"></div>
            <p class="lead">Job Requirements : </p>
            <div v-html="job.requirement"></div>
            <p class="lead">Additional Information : </p>
            <div class="container mb-3">
              <div class="row">
                <div class="col"><span class="font-weight-bold"> Industry : </span> {{ job.job_industry }}</div>
                <div class="col"><span class="font-weight-bold"> Type : </span> {{ job.job_type }}</div>
              </div>
              <div class="row">
                <div class="col"><span class="font-weight-bold"> Specialization : </span> {{ job.job_specialization }}</div>
                <div class="col"><span class="font-weight-bold"> Role : </span> {{ job.job_role }}</div>
              </div>
              <div class="row">
                <div class="col"><span class="font-weight-bold"> Published : </span> {{ job.approved_at }}</div>
                <div class="col"><span class="font-weight-bold"> Application deadline : </span> {{ job.application_deadline }}</div>
              </div>
            </div>

            <a href="#" class="btn btn-sm btn-success">Apply</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Single",
  data(){
    return {
      loaded : false,
      job: {}
    }
  },
  methods: {
    loadJob() {
      let job_id = this.$route.params.id;
      this.loaded = false
      let that = this
      this.$axios.get('/job/single/'+job_id).then(response => {
         that.job = response.data.data
      });
    }
  },
  mounted() {
    this.loadJob()
    console.log(atob(this.$route.params.id))
  }
}
</script>

<style scoped>

</style>
