// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {get} from './utils/http';

import Vant from "vant";
import "vant/lib/index.css";

require("@/mock/mock")


Vue.config.productionTip = false

Vue.prototype.$http = get;
Vue.use(Vant);
// mock

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
