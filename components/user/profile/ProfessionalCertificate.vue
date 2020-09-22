<template>
    <div class="container">

      <div class="row align-items-center">
        <div class="col-lg-12">
            <h4>Professional/Short Courses/Skill Development Certificates (SAP/OCP/MCP) <button type="button" v-if="!showEditForm" @click="editForm()" class="btn btn-primary btn-sm">edit</button></h4>
        </div>
      </div>


        <div v-if="!showEditForm" class="row">
            <div class="col-lg-8 mb-5 mb-lg-0">
                <b-table striped hover :items="professional_certificate"></b-table>
            </div>
        </div>

        <div v-if="showEditForm" class="row">
            <div class="col-lg-12 mb-5 mb-lg-0">
                <div v-for="(pro_certificate, index) in professional_certificate" :key="index" class="row jex-single">
                    <div class="col-lg-3 mb-5 mb-lg-0">
                        <b-form-input v-model="pro_certificate.name_of_course" placeholder="Course Name" ></b-form-input>
                    </div>
                    <div class="col-lg-3 mb-5 mb-lg-0">
                        <b-form-input v-model="pro_certificate.accomplished_on" type="date" placeholder="Accomplished on" ></b-form-input>
                    </div>
                    <div class="col-lg-3 mb-5 mb-lg-0">
                        <b-form-input v-model="pro_certificate.duration_of_course" :type="'number'" placeholder="Course Duration" ></b-form-input>
                    </div>
                    <div class="col-lg-2 mb-5 mb-lg-0">
                        <b-form-input v-model="pro_certificate.certificate_image" placeholder="Certificate Image" ></b-form-input>
                    </div>
                    <div class="col-lg-1 mb-5 mb-lg-0">
                        <button type="button" @click="removeProCert(index)" class="btn btn-danger btn-sm">x</button>
                    </div>
                </div>
            </div>

            <div class="col-lg-12 mb-5 mb-lg-0">
                <br>
                <div class="row">
                    <div class="col-lg-2">
                        <button type="button" @click="addProCert()" class="btn btn-primary btn-sm">add</button>
                    </div>
                    <div class="offset-lg-8 col-lg-2">
                        <button type="button" v-if="professional_certificate.length" v-on:click="saveForm()" class="btn btn-success btn-sm">save changes</button>
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
            professional_certificate : [{name_of_course: '', accomplished_on : '', duration_of_course: '', certificate_image: ''}]
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
        addProCert(){
            this.professional_certificate.push({name: null, value:null})
        },
        removeProCert(index){
            this.professional_certificate.splice(index, 1)
        }
    }
}
</script>

<style scoped>
.row.jex-single {
    margin: 2.5px auto;
}
</style>