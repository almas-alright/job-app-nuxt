import Vue from 'vue'
import * as VeeValidate from 'vee-validate';
import * as moment from 'moment';

import { ValidationProvider, ValidationObserver, extend} from 'vee-validate';
import { required, min, regex, alpha_spaces, alpha_num } from "vee-validate/dist/rules";
Vue.use(VeeValidate);
Vue.component('ValidationProvider', ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

extend("required", required);

extend("min", min);

extend("regx", regex);
extend("alpha_spaces", alpha_spaces);
extend("alpha_num", alpha_num);

const dateFormat = 'YYYY-MM-DD';

extend("before", {
  params: ["limit", "included"],
  validate: (value, { limit, included }) => {
    limit = moment(limit, dateFormat);
    value = moment(value, dateFormat);
    return included
      ? value.isSameOrBefore(limit)
      : value.isBefore(limit);
  },
  message: (fieldName, placeholders) => {
    let limit = moment(placeholders.limit).format(dateFormat);
    return `The ${fieldName} field must come before ${limit}`;
  }});

extend("after", {
  params: ["limit", "included"],
  validate: (value, { limit, included }) => {
    limit = moment(limit, dateFormat);
    value = moment(value, dateFormat);
    return included
      ? value.isSameOrAfter(limit)
      : value.isAfter(limit);
  },
  message: (fieldName, placeholders) => {
    let limit = moment(placeholders.limit).format(dateFormat);
    return `The ${fieldName} cant be old`;
  }});
// https://stackoverflow.com/questions/57775092/how-can-i-validate-date-after-date-before-using-veevalidate-v3-and-vuejs-datep
