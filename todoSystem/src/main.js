// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import query from './utils/query';

import Vant from "vant";
import "vant/lib/index.css";
import "./assets/css/animate.min.css";
import {Notify} from "vant";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
require("./mock/mock")

Vue.config.productionTip = true
Vue.prototype.$message = Notify
Vue.prototype.$http = query;
Vue.use(Vant);
// mock
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
