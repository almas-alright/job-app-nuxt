import Vue from 'vue'
import * as VeeValidate from 'vee-validate';
import { ValidationProvider, ValidationObserver, extend} from 'vee-validate';
import { required, min, regex } from "vee-validate/dist/rules";
Vue.use(VeeValidate);
Vue.component('ValidationProvider', ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

extend("required", required);

extend("min", min);

extend("regx", regex);