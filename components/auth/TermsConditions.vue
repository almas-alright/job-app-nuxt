<template>
  <section class="site-section pb-0">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-12">
          <h4>Terms & Condition
            <b-button v-b-modal.modal-lg size="sm" variant="info">show terms and conditions</b-button>
          </h4>
        </div>
        <div class="col-lg-12">

        </div>
      </div>
      <b-modal id="modal-lg" size="lg" title="Terms & Conditions">
        <div class="row">
          <div class="col-lg-12">
            <h5>CANDIDATE DECLARATION:</h5>
            ======================
            <p>A. I have read and understood the Terms & conditions provided with in this application, and agree to
              abide, and be bound by, them.</p>
            <p>B. The information I have provided in this form is true and correct as at the date of signing. I will be
              held accountable for any misinformation, false or misleading answers that I have provided.</p>
            <p>C. I have attended at the induction and understand all the required rules and regulations.</p>
            <p>D. I have read and understood the Privacy Policy Agreement, and agree to be bound by it.</p>
            <div style="min-height: 200px">
              <VueSignaturePad
                class="border"
                width="100%"
                height="200px"
                ref="signaturePad"
                :options="{onBegin: () => {$refs.signaturePad.resizeCanvas()}}"
              />
            </div>
            <b-form-text id="password-help-block" class="text-info">put your signature above using mouse</b-form-text>
            <b-form-checkbox
              id="checkbox-1"
              name="checkbox-1"
              value="accepted"
              unchecked-value="not_accepted"
            >
              By Signing above im accepting all terms and conditions.
            </b-form-checkbox>
          </div>
        </div>
        <template v-slot:modal-footer>
          <b-container>
            <b-row>
              <b-col col lg="12" class="text-center">
                <b-button pill variant="info" @click="save" size="sm">Save</b-button>
                <b-button pill variant="info" @click="undo" size="sm">Undo</b-button>
              </b-col>
            </b-row>
          </b-container>
        </template>
      </b-modal>
    </div>
  </section>

</template>

<script>

export default {
  name: "TermsConditions",
  // components:{
  //   VueSignaturePad
  // },
  methods: {
    undo() {
      this.$refs.signaturePad.undoSignature();
    },
    save() {
      const {isEmpty, data} = this.$refs.signaturePad.saveSignature();
      console.log(isEmpty);
      console.log(data);
    }
  }
}
</script>

<style scoped>

</style>
