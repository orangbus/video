import Vue from 'vue';
import App from './App.vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import VueAxios from 'vue-axios' ;
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import router from './Router/router'
import store from "./Vuex";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueAxios,axios);
Vue.use(Vuex);

//vuex
// axios.defaults.headers.get['Access-Control-Allow-Headers'] = 'x-requested-with,content-type';
// axios.defaults.headers.get['Content-Type'] = "application/x-www-form-urlencoded";

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
