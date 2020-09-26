<template>
    <div class="container">

      <div class="row align-items-center">
        <div class="col-lg-12">
            <h4>Work Experience  <button type="button" v-if="!showEditForm" @click="editForm()" class="btn btn-primary btn-sm">edit</button></h4>
        </div>
      </div>


        <div v-if="!showEditForm" class="row">
            <div class="col-lg-8 mb-5 mb-lg-0">
                <b-table striped hover :items="experiences"></b-table>
            </div>
        </div>

        <div v-if="showEditForm" class="row">
            <div class="col-lg-12 mb-5 mb-lg-0">
                <div v-for="(experience, index) in experiences" :key="index" class="row jex-single">
                    <div class="col-lg-3 mb-5 mb-lg-0">
                        <b-form-input v-model="experience.company_name" placeholder="Company Name" ></b-form-input>
                    </div>
                    <div class="col-lg-2 mb-5 mb-lg-0">
                        <b-form-input v-model="experience.reference_number" placeholder="Referance Number" ></b-form-input>
                    </div>
                    <div class="col-lg-2 mb-5 mb-lg-0">
                        <b-form-input v-model="experience.job_title" placeholder="Job Title" ></b-form-input>
                    </div>
                    <div class="col-lg-2 mb-5 mb-lg-0">
                        <b-form-input v-model="experience.duration" placeholder="End At" type="date" ></b-form-input>
                    </div>
                    <div class="col-lg-2 mb-5 mb-lg-0">
                      <b-form-checkbox
                        id="checkbox-1"
                        v-model="experience.is_current"
                        name="checkbox-1"
                        value="continuing"
                        unchecked-value="resigned"
                      >
                        continuing
                      </b-form-checkbox>
                    </div>
                    <div class="col-lg-1 mb-5 mb-lg-0">
                        <button type="button" @click="removeJob(index)" class="btn btn-danger btn-sm">x</button>
                    </div>
                </div>
            </div>

            <div class="col-lg-12 mb-5 mb-lg-0">
                <br>
                <div class="row">
                    <div class="col-lg-2">
                        <button type="button" @click="addJob()" class="btn btn-primary btn-sm">add</button>
                    </div>
                    <div class="offset-lg-8 col-lg-2">
                        <button type="button" v-if="experiences.length" v-on:click="saveForm()" class="btn btn-success btn-sm">save changes</button>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
export default {
    data(){
        return {
            showEditForm : false,
            experiences : [{company_name: '', reference_number: '', job_title: '', end_at: '', is_current: 'resigned'}]
        }
    },
    methods:{
        editForm(){
            this.showEditForm = !this.showEditForm
        },
        saveForm(){
            this.$emit('saveData')
            this.showEditForm = !this.showEditForm
        },
        addJob(){
            this.experiences.push({company_name: '', reference_number: '', job_title: '', end_at: '', is_current: 'resigned'})
        },
        removeJob(index){
            this.experiences.splice(index, 1)
        }
    }
}
</script>

<style scoped>
.row.jex-single {
    margin: 2.5px auto;
}
</style>
